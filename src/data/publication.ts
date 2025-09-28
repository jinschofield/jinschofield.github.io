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
    conference: "Preprint submitted to ICLR 2026",
    year: "2025",
    authors: "Ghugare et al.",
    tldr: "A comprehensive benchmark for evaluating generalist agents on 3D construction tasks.",
    paperUrl: undefined,
    codeUrl: undefined,
    logo: undefined
  },
  {
    date: "2021",
    title: "Regressions to Understand Allergy Development",
    description: "Published research on 'Regressions to Understand Allergy Development' in the Vanderbilt Young Scientist Journal.",
    conference: "Vanderbilt Young Scientist Journal",
    year: "2021",
    authors: "Jin Schofield",
    tldr: "Statistical analysis of allergy development factors using regression models.",
    paperUrl: "/vanderbilt_schofield_statistics_allergies.pdf",
    link: undefined,
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
