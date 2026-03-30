import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stacker Zero | Zero Reuse. Zero Exposure. Zero Trust.",
  description: "Bitcoin security intelligence for serious holders. Quantum threats, key hygiene, self-custody -- we track every attack vector so your stack survives what's coming.",
  openGraph: {
    title: "Stacker Zero | Zero Reuse. Zero Exposure. Zero Trust.",
    description: "Bitcoin security intelligence for serious holders. Quantum threats, key hygiene, self-custody -- we track every attack vector so your stack survives what's coming.",
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