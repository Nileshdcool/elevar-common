export interface StrapiUser {
    email: string | null;
    id: string | null;
    provider: string | null;
    username: string | null;
    blocked: boolean;
    confirmed: boolean;
    createdAt: string;
    documentId: string;
    publishedAt: string;
    updatedAt: string;
  }