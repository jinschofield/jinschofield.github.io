import type { Metadata } from "next";
import "./globals.css";
import { customMetadata } from "@/data/title-description";
import { aboutMe } from "@/data/aboutme";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  icons: {
    icon: "/images/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
