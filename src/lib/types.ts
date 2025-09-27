export interface Service {
  title: string;
  description: string;
  longDescription: string;
  imageId: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  imageId: string;
  link: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  date: string;
  author: string;
  imageId: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageId: string;
}
