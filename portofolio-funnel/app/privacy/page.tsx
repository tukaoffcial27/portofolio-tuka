import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-300 p-6 md:p-20">
      <div className="max-w-3xl mx-auto">
        
        {/* Tombol Kembali */}
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Home
        </Link>

        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        
        <div className="space-y-6 leading-relaxed border-t border-slate-800 pt-6">
          <p>
            <strong>Effective Date:</strong> {new Date().getFullYear()}-01-01
          </p>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">1. Introduction</h2>
            <p>
              Selamat datang di TUKA OFFICIAL. Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
              Kebijakan ini menjelaskan bagaimana kami mengelola informasi ketika Anda menggunakan layanan kami.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">2. Information We Collect</h2>
            <p>
              Kami hanya mengumpulkan informasi yang Anda berikan secara sukarela, seperti Nama, Email, dan Nomor WhatsApp 
              ketika Anda menghubungi kami untuk konsultasi project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Untuk membalas pertanyaan dan konsultasi Anda.</li>
              <li>Untuk mengirimkan penawaran layanan (jika diminta).</li>
              <li>Kami TIDAK akan pernah menjual data Anda ke pihak ketiga.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">4. Contact Us</h2>
            <p>
              Jika ada pertanyaan mengenai kebijakan ini, hubungi kami via email di: 
              <span className="text-blue-400"> tukaofficial27@gmail.com</span>
            </p>
          </section>
        </div>

        {/* Footer Kecil */}
        <div className="mt-20 pt-10 border-t border-slate-800 text-sm text-slate-600">
          &copy; {new Date().getFullYear()} TUKA OFFICIAL. All rights reserved.
        </div>
      </div>
    </main>
  );
}