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

export interface IEducation {
  id?: number;
  documentId?: string;
  degree: string;
  school: string;
  location: string;
  from: string;
  to: string;
  achievements: string[];
}