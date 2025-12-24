import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixofy Tool - WebAssembly Image Editor",
  description: "Studi kasus editor gambar berbasis web performa tinggi menggunakan teknologi WebAssembly (WASM).",
};

export default function PixofyProject() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-300 flex flex-col">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full p-4 bg-[#0f172a]/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/#selected-work" className="flex items-center text-slate-400 hover:text-white transition-colors font-medium">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Kembali ke Portfolio
            </Link>
        </div>
      </nav>

      {/* Header Image (Hijau) */}
      <div className="w-full h-[50vh] bg-gradient-to-br from-emerald-600 to-emerald-900 flex items-center justify-center relative mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <h1 className="text-5xl md:text-7xl font-bold text-white relative z-10 drop-shadow-lg text-center px-4">
          Pixofy
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 -mt-20 relative z-20 flex-grow">
        <div className="bg-[#0b1120] border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10 border-b border-slate-800 pb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Pixofy Tool</h2>
              <p className="text-slate-400">WebAssembly / Image Processing</p>
            </div>
             
             {/* Link Website */}
             <a href="#" className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-bold transition-all">
              Kunjungi Website <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-12">
            <section>
              <h3 className="text-xl font-bold text-white mb-4">Masalah</h3>
              <p className="leading-relaxed text-slate-400">
                Mengedit gambar di browser biasanya lambat dan membuat laptop "nge-lag", terutama untuk file resolusi tinggi.
                Klien membutuhkan tool editing ringan yang berjalan di browser tapi secepat aplikasi desktop.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">Solusi Kami</h3>
              <p className="leading-relaxed text-slate-400 mb-6">
                Kami membangun Pixofy menggunakan teknologi <strong>WebAssembly (WASM)</strong>. Ini memungkinkan kode berat (C++/Rust) 
                berjalan di browser dengan kecepatan mendekati native app.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 flex gap-3">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Kompresi Gambar Instan</span>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 flex gap-3">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Filter & Efek Real-time</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="pt-20 pb-10 bg-[#020617] border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-8 h-8">
                  <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                </div>
                <span className="font-bold text-xl text-white tracking-wide">TUKA OFFICIAL</span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Membangun solusi digital masa depan dengan teknologi modern.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/#selected-work" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} TUKA OFFICIAL.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}