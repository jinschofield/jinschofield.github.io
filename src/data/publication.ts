export interface Publication {
  date: string;
  title: string;
  description: string;
  conference: string;
  year: string | number;
  authors: string;
  award?: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  link?: string;
  logo?: string;
  imageUrl?: string;
}

export const publicationData: Publication[] = [];


// src/data/sectionorder.ts
export enum Section {
  News = "news",
  Education = "education",
  Publication = "publication",
  Experience = "experience",
  Portfolio = "portfolio",
}

export const sectionOrder = [
  Section.News,
  Section.Education,
  Section.Experience,
  Section.Portfolio,
  Section.Publication,
];
