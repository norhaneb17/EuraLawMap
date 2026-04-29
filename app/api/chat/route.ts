import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

const SYSTEM_PROMPT = `Tu es un assistant juridique spécialisé en droit européen du numérique.
Tu aides des étudiants en droit (L3 à M2) à comprendre les réglementations
européennes : DSA, DMA, AI Act, RGPD, DGA, Data Act, NIS2, ePrivacy.

Règles :
- Réponds en français, de manière claire et pédagogique
- Cite toujours les articles pertinents (ex: "article 6 du DSA")
- Si tu n'es pas sûr, dis-le — ne fabrique pas de faux articles
- Structure tes réponses : contexte → règle → exemple concret
- Adapte le niveau au profil de l'étudiant (L3 = vulgarisé, M2 = technique)
- Ne donne jamais de conseil juridique personnalisé`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Validate messages array
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Messages array is required and must not be empty" }, { status: 400 });
    }

    // Ensure valid roles and non-empty content
    const validMessages = messages
      .filter((m: { role: string; content: string }) =>
        (m.role === "user" || m.role === "assistant") && m.content?.trim()
      )
      .map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

    if (validMessages.length === 0) {
      return NextResponse.json({ error: "No valid messages found" }, { status: 400 });
    }

    console.log("Sending to Anthropic:", JSON.stringify({ model: "claude-opus-4-7", messageCount: validMessages.length }));

    const response = await client.messages.create({
      model: "claude-opus-4-7",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: validMessages,
    });

    const content = response.content[0];
    if (content.type !== "text") {
      return NextResponse.json({ error: "Invalid response type" }, { status: 500 });
    }

    return NextResponse.json({ content: content.text });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Chat API error message:", error.message);
      console.error("Chat API error stack:", error.stack);
      // Log Anthropic-specific error details
      const anthropicError = error as Error & { status?: number; error?: unknown };
      if (anthropicError.status) {
        console.error("Anthropic status:", anthropicError.status);
        console.error("Anthropic error body:", JSON.stringify(anthropicError.error));
      }
    } else {
      console.error("Chat API unknown error:", error);
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
