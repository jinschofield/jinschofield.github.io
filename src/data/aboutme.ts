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
  title: "Computer Science and Math",
  institution: "Princeton University",
  description:
    "Hi! 👋 I'm Jin, a senior at Princeton studying CS and math, and an incoming CS PhD student at the Courant Institute, NYU. I research <strong>reinforcement learning and representation learning</strong>, focusing on exploration algorithms using contrastive representations for combinatorial and strategic environments. I also have industry experience researching and engineering computationally efficient computer vision models for <strong>real-time detection</strong> in autonomous precision robotics. I am experienced in and very passionate about combining <strong>fundamental ML research</strong> (parameter-efficient architectures, self-supervised learning) with <strong>production-grade engineering</strong> (i.e. latency reduction, scalability). I want to contribute to the world by advancing general-purpose agents, embodied and otherwise, through representation learning and efficient architectures!",
  email: "jin.schofield@princeton.edu",
  imageUrl: "/images/profile.png", // Your profile photo
  blogUrl: "https://jinschofield.com",
  resumeUrl: "/resume.pdf",
  googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  twitterUsername: "jinschofield",
  githubUsername: "jinschofield",
  linkedinUsername: "jin-schofield",
  institutionUrl: "https://www.princeton.edu",
  funDescription: "Hi! 👋 I'm Jin, a senior at Princeton studying CS and math, and an incoming CS PhD student at the Courant Institute, NYU. I research <strong>reinforcement learning and representation learning</strong>, focusing on exploration algorithms using contrastive representations for combinatorial and strategic environments. I also have industry experience researching and engineering computationally efficient computer vision models for <strong>real-time detection</strong> in autonomous precision robotics. I am experienced in and very passionate about combining <strong>fundamental ML research</strong> (parameter-efficient architectures, self-supervised learning) with <strong>production-grade engineering</strong> (i.e. latency reduction, scalability). I want to contribute to the world by advancing general-purpose agents, embodied and otherwise, through representation learning and efficient architectures!",
};