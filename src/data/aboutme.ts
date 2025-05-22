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
    "Hi! 👋 I'm a <strong>computer science</strong> student with a minor in <strong>mathematics</strong> at <strong>Princeton University</strong>. I research at the intersection of <strong>causal inference</strong> and <strong>machine learning</strong>, exploring <strong>robust</strong>, <strong>interpretable</strong> systems for <strong>cause-and-effect reasoning</strong>. I'm passionate about engineering <strong>ML systems</strong> that are not only <strong>theoretically sound</strong> but also <strong>practical</strong> and <strong>impactful</strong>.",
  email: "jin.schofield@princeton.edu",
  imageUrl: "/images/profile.png", // Your profile photo
  blogUrl: "https://jinschofield.com",
  resumeUrl: "/resume.pdf",
  googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  twitterUsername: "jinschofield",
  githubUsername: "jinschofield",
  linkedinUsername: "jin-schofield",
  institutionUrl: "https://www.princeton.edu",
  funDescription: "Hi! 👋 I'm a computer science student with a minor in mathematics at Princeton University. I research at the intersection of causal inference and machine learning, exploring robust, interpretable systems for cause-and-effect reasoning. I'm passionate about engineering ML systems that are not only theoretically sound but also practical and impactful.",
};