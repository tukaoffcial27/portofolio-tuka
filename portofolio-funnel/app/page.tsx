import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link"; // PENTING: Import ini untuk navigasi antar halaman
import { 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  MessageCircle, 
  Code2, 
  Layout, 
  Zap 
} from "lucide-react";
export const metadata: Metadata = {
  title: "Developer SaaS High-Performance", 
  description: "Solusi Full Stack Developer teruji. Spesialis Next.js, Website Headless, dan Aplikasi SaaS performa tinggi.",
};
<meta name="google-site-verification" content="FggitfIA8_96oxup2XdbglzpDXcAJGfH4az4fKm2eRQ" />

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0f172a]">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full p-4 border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image 
                src="/logo.png" 
                alt="Logo TUKA" 
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg md:text-xl tracking-wide text-white">
              TUKA OFFICIAL
            </span>
          </div>
          <div></div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="flex flex-col items-center justify-center px-4 pt-32 pb-20 text-center md:pt-48 md:pb-32">
        <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-500/30">
          <span className="flex w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
          Available for New Projects
        </div>

        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-6xl leading-tight mb-6">
          Developer SaaS <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            High-Performance
          </span>{" "}
          & Website Premium
        </h1>

        <p className="max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed md:text-xl">
          Solusi Full Stack Developer teruji. Mengubah ide kompleks menjadi produk digital yang stabil, cepat, dan siap scale-up.
        </p>

        {/* --- TOMBOL CTA --- */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <a 
            href="#selected-work" 
            className="flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] cursor-pointer"
          >
            Lihat Project Live
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          
          {/* Link ke Halaman Contact atau Langsung WA (Sesuai preferensi, di sini saya arahkan ke WA agar cepat) */}
          <a 
            href="https://wa.me/628111870347"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all cursor-pointer"
          >
            Hubungi Saya
          </a>
        </div>

        <div className="mt-12 flex items-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Modern Tech Stack</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Live Production Ready</span>
          </div>
        </div>
      </section>

      {/* --- SERVICES / EXPERTISE --- */}
      <section className="py-20 bg-[#0f172a] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Layanan & Keahlian</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Kami tidak hanya menulis kode, tapi membangun solusi bisnis. Berikut adalah fokus utama layanan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom SaaS Development</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Membangun aplikasi web kompleks (SaaS) dari nol dengan arsitektur database yang kuat, aman, dan siap menangani ribuan user.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                <Layout className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Headless Website</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Website marketing ultra-cepat menggunakan teknologi Headless CMS. SEO friendly dan mudah dikelola oleh tim konten Anda.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 transition-colors">
              <div className="w-12 h-12 bg-violet-500/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Optimization</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Optimasi website lambat menjadi instan. Audit performa, perbaikan Core Web Vitals, dan implementasi caching tingkat lanjut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- AREA PORTOFOLIO (Selected Work) --- */}
      <section id="selected-work" className="py-20 bg-[#0b1120] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
             <div>
                <h2 className="text-3xl font-bold text-white mb-2">Selected Work</h2>
                <p className="text-slate-400">Beberapa project unggulan yang telah kami kerjakan.</p>
             </div>
             <a href="#" className="text-blue-400 font-medium hover:text-blue-300 transition-colors flex items-center gap-2">
                Lihat Semua <ArrowRight className="w-4 h-4" />
             </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Guidify (KABEL DIPERBAIKI) */}
            <div className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 w-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900">
                <span className="font-bold text-xl text-white drop-shadow-md">Guidify App</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  Guidify
                </h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Platform manajemen panduan SaaS dengan fitur otomatisasi workflow yang kompleks.
                </p>
                {/* LINK KE GUIDIFY */}
                <Link href="/projects/guidify" className="flex items-center text-blue-400 font-medium text-sm hover:underline cursor-pointer">
                  Lihat Case Study <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Pixofy (KABEL DIPERBAIKI) */}
            <div className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500 transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 w-full flex items-center justify-center bg-gradient-to-br from-emerald-600 to-emerald-900">
                <span className="font-bold text-xl text-white drop-shadow-md">Pixofy Tool</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                  Pixofy
                </h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Editor gambar berbasis web dengan performa tinggi menggunakan teknologi WebAssembly.
                </p>
                {/* LINK KE PIXOFY */}
                <Link href="/projects/pixofy" className="flex items-center text-emerald-400 font-medium text-sm hover:underline cursor-pointer">
                  Lihat Case Study <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 3: Tuka Store (KABEL DIPERBAIKI) */}
            <div className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-violet-500 transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 w-full flex items-center justify-center bg-gradient-to-br from-violet-600 to-violet-900">
                <span className="font-bold text-xl text-white drop-shadow-md">Tuka Store</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-violet-400 transition-colors">
                  Tuka Store
                </h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Website e-commerce headless modern dengan integrasi payment gateway.
                </p>
                {/* LINK KE TUKA STORE */}
                <Link href="/projects/tuka-store" className="flex items-center text-violet-400 font-medium text-sm hover:underline cursor-pointer">
                  Lihat Case Study <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER SECTION PROFESSIONAL --- */}
      <footer className="pt-20 pb-10 bg-[#020617] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Kolom 1: Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-8 h-8">
                  <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                </div>
                <span className="font-bold text-xl text-white tracking-wide">TUKA OFFICIAL</span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Membangun solusi digital masa depan dengan teknologi modern. Fokus pada performa, skalabilitas, dan pengalaman pengguna terbaik.
              </p>
            </div>

            {/* Kolom 2: Links */}
            <div>
              <h4 className="text-white font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="#selected-work" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Services</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Kolom 3: Legal & Connect */}
            <div>
              <h4 className="text-white font-bold mb-6">Legal & Connect</h4>
              <ul className="space-y-4 text-slate-400">
                {/* LINK PRIVACY */}
                <li>
                  <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                {/* LINK TERMS */}
                <li>
                  <Link href="/terms" className="hover:text-blue-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                
                <li className="pt-4 space-y-3">
                   {/* Email */}
                   <a 
                     href="mailto:tukaofficial27@gmail.com" 
                     className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors p-2 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 w-fit"
                   >
                     <Mail className="w-4 h-4" />
                     <span>Contact via Email</span>
                   </a>

                   {/* WhatsApp */}
                   <a 
                     href="https://wa.me/628118885567"
                     target="_blank"
                     rel="noopener noreferrer" 
                     className="flex items-center gap-2 text-white hover:text-green-400 transition-colors p-2 bg-white/5 rounded-lg border border-white/10 hover:border-green-500/50 w-fit"
                   >
                     <MessageCircle className="w-4 h-4" />
                     <span>Chat WhatsApp</span>
                   </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} TUKA OFFICIAL. All rights reserved.
            </p>

            <div className="flex gap-6">
               <a href="#" className="text-slate-400 hover:text-white transition-colors">
                 <Github className="w-5 h-5" />
               </a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors">
                 <Linkedin className="w-5 h-5" />
               </a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors">
                 <Twitter className="w-5 h-5" />
               </a>
            </div>
          </div>
        </div>
      </footer>
      
    </main>
  );
}