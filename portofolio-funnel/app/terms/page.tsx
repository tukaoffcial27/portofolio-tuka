import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-300 p-6 md:p-20">
      <div className="max-w-3xl mx-auto">
        
        {/* Tombol Kembali */}
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Home
        </Link>

        {/* Judul */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-500/10 rounded-xl">
             <FileText className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
        </div>
        
        {/* Isi Terms */}
        <div className="space-y-8 leading-relaxed border-t border-slate-800 pt-8">
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Pendahuluan</h2>
            <p>
              Dengan menggunakan layanan TUKA OFFICIAL (Jasa Pembuatan Website & SaaS), Anda dianggap telah membaca dan menyetujui syarat dan ketentuan ini.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Lingkup Layanan</h2>
            <p>
              Kami menyediakan jasa pengembangan perangkat lunak (software development) sesuai dengan spesifikasi yang disepakati 
              dalam dokumen penawaran (quotation) awal. Revisi di luar kesepakatan awal dapat dikenakan biaya tambahan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Pembayaran</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>Project dimulai setelah pembayaran uang muka (DP) diterima.</li>
              <li>Pelunasan wajib dilakukan setelah project selesai dan sebelum serah terima source code/akses penuh.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Hak Kekayaan Intelektual</h2>
            <p>
              Setelah pelunasan, hak cipta kode dan desain sepenuhnya menjadi milik Klien. TUKA OFFICIAL berhak mencantumkan 
              hasil karya tersebut dalam portofolio kami, kecuali ada perjanjian kerahasiaan (NDA).
            </p>
          </section>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mt-8">
            <p className="text-sm text-slate-400">
              Terakhir diperbarui: {new Date().getFullYear()}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}