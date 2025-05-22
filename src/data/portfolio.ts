export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Alstotle Chrome Extension",
    description:
      "📚 An LLM-powered educational Chrome extension for YouTube videos using GPT-4 Vision, ElevenLabs, and retrieval-augmented generation.",
    technologies: ["TypeScript", "React", "GPT-4 Vision", "ElevenLabs"],
    projectUrl: "https://devpost.com/software/aistotle",
    imageUrl: "/images/aistotle.png"
  },
  {
    title: "ConchShell Wearable ASL Translator",
    description:
      "🤖 A wearable device that converts ASL letters into speech with 94% accuracy, built in C++ and PyTorch. Selected for the DMZ Accelerator program and secured $16,600 in funding. Featured in CBC and <a href=\"https://www.nationalobserver.com/2021/07/07/news/tech-invention-translates-sign-language-into-spoken-words\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration: underline;\">National Observer</a>!",
    technologies: ["C++", "PyTorch", "Embedded Systems"],
    projectUrl: "https://partner.projectboard.world/ysc/project/conchshell-a-wearable-asl-translator-leveraging-novel-machine-learning-and-computer-vision",
    imageUrl: "/images/conchshell.png"
  },
];
