export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  resumeUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Jin Schofield",
  title: "Computer Science Student (Minor in Mathematics)",
  institution: "Princeton University",
  description:
    "Hi! 👋 I'm a <strong>computer science</strong> student with a minor in <strong>mathematics</strong> at <strong>Princeton University</strong>. I research <strong>reinforcement learning</strong>, focusing on <strong>exploration algorithms</strong> using <strong>contrastive representations</strong> and <strong>temporal abstractions</strong>. I also research <strong>efficient computer vision</strong>, developing <strong>real-time detection models</strong> with <strong>reduced computational complexity</strong>. My work combines <strong>fundamental ML research</strong> (parameter-efficient architectures, self-supervised learning) with <strong>production-grade engineering</strong> (75% latency reduction, scalable synthetic data pipelines). I'm passionate about advancing <strong>general-purpose agents</strong> through <strong>representation learning</strong> and <strong>efficient architectures</strong>.",
  email: "jin.schofield@princeton.edu",
  imageUrl: "/images/profile.png", // Your profile photo
  blogUrl: "https://jinschofield.com",
  resumeUrl: "/resume.pdf",
  googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  twitterUsername: "jinschofield",
  githubUsername: "jinschofield",
  linkedinUsername: "jin-schofield",
  institutionUrl: "https://www.princeton.edu",
  funDescription: "Hi! 👋 I'm a <strong>computer science</strong> student with a minor in <strong>mathematics</strong> at <strong>Princeton University</strong>. I research <strong>reinforcement learning</strong>, focusing on <strong>exploration algorithms</strong> using <strong>contrastive representations</strong> and <strong>temporal abstractions</strong>. I also research <strong>efficient computer vision</strong>, developing <strong>real-time detection models</strong> with <strong>reduced computational complexity</strong>. My work combines <strong>fundamental ML research</strong> (parameter-efficient architectures, self-supervised learning) with <strong>production-grade engineering</strong> (75% latency reduction, scalable synthetic data pipelines). I'm passionate about advancing <strong>general-purpose agents</strong> through <strong>representation learning</strong> and <strong>efficient architectures</strong>.",
};