export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  description?: string;
}

export interface ReferenceProject {
  id: string;
  title: string;
  year: string;
  description?: string;
  image: string;
}

export interface PressArticle {
  id: string;
  source: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
}

export interface Job {
  id: string;
  title: string;
  type: string;
}
