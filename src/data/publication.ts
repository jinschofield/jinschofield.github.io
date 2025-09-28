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

export const publicationData: Publication[] = [
  {
    date: "2025",
    title: "BuilderBench — A Benchmark for Generalist Agents",
    description: "Co-authored benchmark and evaluated performance of various RL algorithms on general 3D block structure construction tasks.",
    conference: "Preprint submitted to ICLR",
    year: "2026",
    authors: "Ghugare et al.",
    tldr: "A comprehensive benchmark for evaluating generalist agents on 3D construction tasks",
    paperUrl: undefined,
    codeUrl: undefined,
    logo: undefined
  }
];


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
