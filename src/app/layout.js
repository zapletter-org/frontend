import { Raleway, Geist_Mono } from "next/font/google";
import "./globals.css";
import ZapBackground from "../components/ZapBackground";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zapletter — Automated content curation and summarization",
  description:
    "Turn any topic into a comprehensive briefing in minutes. Automated engine discovers top sources, selects important articles, and produces detailed human-style summaries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${geistMono.variable} antialiased`}>
        <ZapBackground />
        {children}
      </body>
    </html>
  );
}
