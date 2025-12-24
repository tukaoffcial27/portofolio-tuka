import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// --- INI PENGATURAN SEO GLOBAL ---
export const metadata: Metadata = {
  title: {
    template: '%s | TUKA OFFICIAL',
    default: 'TUKA OFFICIAL - Developer SaaS & Website Premium', // Judul Default
  },
  description: "Jasa pembuatan Website dan SaaS High-Performance. Mengubah ide kompleks menjadi produk digital yang stabil, cepat, dan siap scale-up.",
  keywords: ["Jasa Pembuatan Website", "Developer SaaS", "Web Developer Indonesia", "Next.js Developer"],
  authors: [{ name: "TUKA OFFICIAL" }],
  icons: {
    icon: "/logo.png", // Pastikan ada file logo.png di folder public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth"> 
      {/* scroll-smooth agar saat klik tombol 'Lihat Project' gerakannya halus */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}