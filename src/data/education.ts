export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  description?: string;
  activities?: string;
  coursework?: string[];
  logo?: string;
}

export const educationData: Education[] = [
  {
    year: "Sept. 2022 — May 2026",
    institution: "Princeton University",
    degree: "Bachelors in Computer Science, Minor in Mathematics",
    logo: "/images/princeton-logo.png",
    description: "1590 SAT, 36 ACT, IB Diploma with 44/45",
    activities: "• 🧠 President of Princeton NeuroTech\n• 🤖 Officer of Princeton AI\n• 💼 Principal at Prospect Student Ventures (VC investing in Princeton-founded startups)\n• 🎤 Pitched to GenNTech, AstraZeneca, and Trinity Life Sciences with E-Club",
    coursework: [
      "Mathematical game theory",
      "Non-Euclidean geometry",
      "Reinforcement learning",
      "Theory of algorithms",
      "Operating Systems",
      "Theory of natural algorithms (graduate course)",
      "Probability + stochastic systems",
      "Real analysis",
      "Functional programming",
      "Data structures and algorithms",
      "Introduction to programming systems",
      "Introduction to machine learning",
      "Reasoning about computation",
      "Cognitive neuroscience",
      "Linear algebra"
    ]
  }
];
