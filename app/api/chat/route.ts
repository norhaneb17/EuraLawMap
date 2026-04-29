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

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const content = response.content[0];
    if (content.type !== "text") {
      return NextResponse.json({ error: "Invalid response type" }, { status: 500 });
    }

    return NextResponse.json({ content: content.text });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
