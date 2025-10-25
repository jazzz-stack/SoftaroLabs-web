import { ReactNode } from "react";

export interface Service {
  title: string;
  description: string;
  longDescription: string;
  imageId: string;
  features: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  imageId: string;
  link: string;
  tags: string[];
  status?: 'completed' | 'in-development' | 'coming-soon';
}

export interface BlogPost {
  publishedAt: string | number | Date;
  readTime: ReactNode;
  excerpt: ReactNode;
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

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits?: string[];
  salaryRange?: string;
  postedDate: string;
  applicationDeadline?: string;
  featured?: boolean;
}

export interface CompanyBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'health' | 'financial' | 'professional' | 'lifestyle' | 'time-off';
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface JobApplication {
  jobId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  coverLetter: string;
  experience: string;
  availability: string;
  expectedSalary?: string;
  workAuthorization: 'yes' | 'no' | 'sponsor';
  willingToRelocate: 'yes' | 'no' | 'maybe';
  resumeFile?: File;
  portfolioFile?: File;
  additionalDocuments?: File[];
}
