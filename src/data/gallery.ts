export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date?: string;
  location?: string;
  event?: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "nyc-rl-workshop",
    title: "New York Reinforcement Learning Workshop",
    description: "With members of the Princeton RL Lab at the New York Reinforcement Learning Workshop",
    imageUrl: "/images/nyc-rl-workshop.jpg",
    date: "2025",
    location: "New York, NY",
    event: "NY RL Workshop at Amazon Office"
  },
  {
    id: "yc-startup-school",
    title: "YC AI Startup School",
    description: "With friends from Princeton at Y Combinator's AI Startup School",
    imageUrl: "/images/yc-startup-school.jpg",
    date: "2025",
    location: "San Francisco, CA",
    event: "YC AI Startup School"
  },
  {
    id: "acs-team",
    title: "Allen Control Systems ML Team",
    description: "With the ML team at Allen Control Systems on the last day of my internship",
    imageUrl: "/images/acs-team.png",
    date: "August 2025",
    location: "Austin, TX",
    event: "ACS Internship"
  }
];