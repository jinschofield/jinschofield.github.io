export interface MediaItem {
  type: 'iframe' | 'image';
  src: string;
  title?: string;
  alt?: string;
}

export interface LinkItem {
  text: string;
  url: string;
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  advisor?: string;
  manager?: string;
  supervisor?: string;
  companyUrl?: string;
  logo?: string;
  media?: MediaItem[];
  links?: LinkItem[];
}

export const experienceData: Experience[] = [
  {
    date: "May 2025 — Present",
    title: "🧠 Reinforcement Learning Researcher",
    company: "Princeton Reinforcement Learning Lab and Griffiths Lab, Princeton University 🐯",
    description:
      "🔬 Created novel uniformity-only contrastive representation learner that rivals variational auto-encoder accuracy with 11% fewer parameters. Co-authored BuilderBench paper (under review for ICLR 2026). Researching exploration for contrastive reinforcement learning using temporal representations. Skills: Jax, Numpy",
    links: [
      {
        text: "Read the working paper",
        url: "/Alignment_Free_Contrastive_Learning.pdf"
      }
    ],
    supervisor: "Prof. Ben Eysenbach & Prof. Tom Griffiths",
    companyUrl: "https://princeton-rl.github.io/",
    logo: "/images/princeton-logo.png"
  },
  {
    date: "June 2025 — August 2025",
    title: "🤖 Machine Learning Research Engineer Intern",
    company: "Allen Control Systems",
    description:
      "🚁 Re-architected core ML object detection model, allowing for detection of drones in additional ~50% of camera FOV that was previously too noisy, for autonomous precision robotics system for drone interception using recently published research papers while decreasing latency by ~75% compared to research paper implementation. Constructed a pipeline for fine-grained control of hyper-realistic synthetic training data generation using recently published research papers, increasing accuracy by additional 5%.",
    companyUrl: undefined,
    logo: "/images/acs-logo.jpg"
  },
  {
    date: "Jan. 2025 — May 2025",
    title: "📚 Teaching Assistant, COS 226 & COS 217",
    company: "Princeton University Computer Science Department",
    description:
      "👨‍🏫 Taught and aided students with data structures, algorithms, and programming systems material and assignments.",
    companyUrl: "https://cs.princeton.edu",
    logo: "/images/princeton-logo.png"
  },
  {
    date: "Dec. 2024 — Apr. 2025",
    title: "🤖 Machine Learning Researcher (Diffusion, Language, and Logic)",
    company: "Ramaswamy ML Interpretability Lab, Princeton University",
    description: "🤖 Developed novel conditional diffusion methods with Vikram Ramaswamy for cellular automata synthesis in Conway's Game of Life; researched diffusion for text language data with Diffusion-of-Thoughts.",
    links: [
      {
        text: "Read the paper",
        url: "/Conditional_Diffusion.pdf"
      }
    ],
    media: [
      {
        type: "image",
        src: "/images/conway.gif",
        alt: "Conway's Game of Life simulation"
      }
    ],
    supervisor: "Prof. Vikram Ramaswamy",
    companyUrl: "https://www.cs.princeton.edu/~vr23/",
    logo: "/images/princeton-logo.png"
  },
  {
    date: "Dec. 2024 — Jan. 2025",
    title: "📊 Quantitative Research Intern",
    company: "QuantCap, LLC",
    description:
      "📈 Built RNN, XGBoost, and Random Forest models to drive a trading strategy that achieved 305% cumulative returns over 12 months; constructed datasets using SQL and Python under mentorship from a BlackRock quantitative researcher and previous Meta data scientist.",
    manager: "Joshua Zimmer, Quantitative Researcher at BlackRock, ex-Meta Data Scientist",
    companyUrl: undefined,
  },
  {
    date: "Jun. 2024 — Aug. 2024",
    title: "🤖 AI Research Intern (SURF Program)",
    company: "Perona Computer Vision Lab, Caltech 🔬",
    description: "🚀 Implemented novel in-context learning techniques within latent diffusion models, improving predictive accuracy by 26%.",
    links: [
      {
        text: "Read the paper",
        url: "/In_Context_Learning_for_Diffusion.pdf"
      }
    ],
    media: [
      {
        type: "image",
        src: "/images/cal_proj.png",
        alt: "Caltech Research Project"
      }
    ],
    supervisor: "Prof. Pietro Perona",
    companyUrl: "https://www.vision.caltech.edu/",
    logo: "/images/caltech-logo.png"
  },
  {
    date: "Jun. 2023 — Sep. 2023",
    title: "📈 Product Intern",
    company: "GPTZero 🤖",
    description: "💡 Designed features for an AI-driven educational tool and authored a weekly newsletter reaching 45,000+ subscribers.",
    companyUrl: "https://gptzero.me",
    logo: "/images/gptzero-logo.png"
  },
  {
    date: "Sep. 2023 — Sep. 2024",
    title: "💼 Principal",
    company: "Princeton Student Ventures 🚀",
    description: "📊 Led due diligence and investment decisions for early-stage Princeton-affiliated startups. Evaluated pitch decks, financial models, and market opportunities. Contributed to the growth of student entrepreneurship at Princeton through mentorship and funding decisions.",
    companyUrl: "https://www.psv.vc/",
    logo: "/images/princeton-logo.png"
  },
  {
    date: "Jul. 2023 — Aug. 2023",
    title: "📊 ML Research Engineer Intern",
    company: "Oxford University Clinical Research Unit 🎓",
    description: "🔍 Analyzed large-scale patient datasets in R and built outcome prediction models using machine learning techniques.",
    links: [
      {
        text: "View research poster",
        url: "https://globalhealth.princeton.edu/sites/g/files/toruqf741/files/documents/Poster%20-%20Schofield%2C%20Jin.pdf"
      }
    ],
    companyUrl: "https://oucru.org",
    logo: "/images/oxford-logo.png"
  },
  {
    date: "Jun. 2021 — Aug. 2022",
    title: "👨‍💻 Software Engineering Intern",
    company: "AfimaCheck",
    description: "🔧 Programmed back-end C++ code of SeekThermal infrared cameras for immunoassay bodily fluid THC detection device. Programmed GUI in Python.",
    companyUrl: "https://hbo.lab.yorku.ca/",
  },
];
