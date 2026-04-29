export interface Regulation {
  id: string;
  slug: string;
  title: string;
  official_name: string;
  reference: string;
  adoption_date: string;
  application_date: string;
  eurlex_url: string;
  status: "in_force" | "partially_applicable" | "proposed";
  summary: string;
  icon_emoji: string;
  category: string;
}

export interface Chapter {
  id: string;
  regulation_id: string;
  chapter_number: number;
  title: string;
  summary: string;
  key_articles: string[];
  sort_order: number;
}

export interface Fiche {
  id: string;
  slug: string;
  title: string;
  content: string;
  regulation_ids: string[];
  tags: string[];
  difficulty: "L3" | "M1" | "M2";
  author: string;
  created_at: string;
  updated_at: string;
}

export interface KeyConcept {
  id: string;
  term: string;
  definition: string;
  regulation_ids: string[];
  related_articles: string[];
}

export interface QuizQuestion {
  id: string;
  regulation_id: string;
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string;
  difficulty: string;
}
