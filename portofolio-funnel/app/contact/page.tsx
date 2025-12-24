import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-[#0b1120] border border-slate-800 rounded-2xl p-8 shadow-2xl">
        
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-white mb-8 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Home
        </Link>

        <h1 className="text-3xl font-bold text-white mb-2">Hubungi Kami</h1>
        <p className="text-slate-400 mb-8">Siap memulai project baru? Pilih metode komunikasi yang paling nyaman untuk Anda.</p>

        <div className="space-y-4">
          
          {/* Opsi 1: WhatsApp */}
          <a 
            href="https://wa.me/628111870347" 
            target="_blank"
            className="flex items-center justify-between p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-green-500 hover:bg-green-900/10 transition-all group"
          >
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                 <MessageCircle className="w-5 h-5 text-green-500" />
               </div>
               <div>
                 <h3 className="font-bold text-white group-hover:text-green-400 transition-colors">Chat WhatsApp</h3>
                 <p className="text-sm text-slate-500">Fast Response (09:00 - 17:00)</p>
               </div>
             </div>
             <ArrowLeft className="w-5 h-5 text-slate-600 rotate-180 group-hover:text-green-500 transition-colors" />
          </a>

          {/* Opsi 2: Email */}
          <a 
            href="mailto:tukaofficial27@gmail.com" 
            className="flex items-center justify-between p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500 hover:bg-blue-900/10 transition-all group"
          >
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                 <Mail className="w-5 h-5 text-blue-500" />
               </div>
               <div>
                 <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">Kirim Email</h3>
                 <p className="text-sm text-slate-500">tukaofficial27@gmail.com</p>
               </div>
             </div>
             <ArrowLeft className="w-5 h-5 text-slate-600 rotate-180 group-hover:text-blue-500 transition-colors" />
          </a>

        </div>
      </div>
    </main>
  );
}