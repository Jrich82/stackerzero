import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bitcoin Defense | Every Satoshi. Future-Proof.",
  description: "The ultimate team of AI and human intelligence dedicated to ensuring every last Satoshi is mined, every wallet is future-proof, and Bitcoin survives every threat vector -- known and unknown.",
  openGraph: {
    title: "Bitcoin Defense | Every Satoshi. Future-Proof.",
    description: "AI and human intelligence protecting Bitcoin from quantum threats, key exposure, and every attack vector.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-gray-100 antialiased">{children}</body>
    </html>
  );
}