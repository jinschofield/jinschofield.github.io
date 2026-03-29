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
    year: "Fall 2026 —",
    institution: "Courant Institute of Mathematical Sciences, NYU",
    degree: "Incoming PhD in Computer Science",
    logo: "/images/nyu-logo.jpg",
  },
  {
    year: "Sept. 2022 — May 2026",
    institution: "Princeton University",
    degree: "Bachelors in Computer Science, Minor in Mathematics",
    logo: "/images/princeton-logo.png",
    description: "1590 SAT, 36 ACT, IB Diploma with 44/45",
    activities: "• 🧠 President of Princeton NeuroTech\n• 🤖 Officer of Princeton AI\n• 💼 Principal at Princeton Student Ventures (VC investing in Princeton-founded startups)\n• 🎤 Pitched to GenNTech, AstraZeneca, and Trinity Life Sciences with E-Club",
    coursework: [
      "Advanced Algorithm Design (graduate course)",
      "Optimization",
      "Abstract algebra",
      "Distributed Systems",
      "Probability Theory",
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
