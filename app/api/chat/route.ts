import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

const SYSTEM_PROMPT = `Tu es un assistant pédagogique spécialisé en droit européen du numérique, conçu pour aider des étudiants en droit (L3 à M2).

Tu maîtrises : RGPD, DSA, DMA, AI Act, DGA, Data Act, NIS2, DORA, eIDAS 2, MiCA, CRA, CSA, P2B, et la directive sur le droit d'auteur numérique.

## Ton style de réponse

Réponds de manière naturelle et pédagogique, comme un tuteur qui explique à un étudiant. Évite le ton froid et mécanique des rapports juridiques.

- Commence directement par répondre à la question, sans introduction générique.
- Utilise un langage clair et précis, en citant les articles pertinents de façon intégrée dans le texte (ex : "selon l'article 6 du DSA…").
- Si la réponse comporte plusieurs points distincts, utilise une liste à puces — mais seulement quand c'est vraiment utile, pas systématiquement.
- N'utilise jamais de tableaux : ils s'affichent mal dans une interface de chat.
- Évite les séparateurs horizontaux (---) et les titres de section avec ### : préfère des paragraphes bien enchaînés.
- Termine par un exemple concret ou une mise en contexte pratique si c'est pertinent.
- Si tu n'es pas certain d'un article ou d'un contenu, dis-le clairement — ne fabrique jamais de faux articles.
- Ne donne pas de conseil juridique personnalisé.
- Réponds toujours en français.

## Longueur

Adapte la longueur à la question : une question simple mérite une réponse courte (3-5 phrases). Une question complexe peut justifier une réponse plus développée, mais reste concis — mieux vaut une réponse claire et courte qu'une réponse exhaustive et dense.`;

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
