import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="h-screen relative flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-zinc-950 overflow-hidden font-sans">
      
      {/* Background Image & Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')" }}
      />
      <div className="fixed inset-0 z-0 bg-black/40 backdrop-blur-md" />

      {/* Main Glass Container */}
      <div className="relative z-10 w-full max-w-md rounded-[40px] bg-[#0A0E17]/80 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 shadow-2xl overflow-hidden flex flex-col items-center text-center">
        
        {/* Glow effect inside card */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-green-500/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="h-20 w-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-8 relative">
           <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-20 duration-1000"></span>
           <CheckCircle2 className="h-10 w-10 text-green-400 relative z-10" />
        </div>

        <h1 className="text-3xl font-bold text-white tracking-tight mb-3">
          Vote Submitted!
        </h1>
        <p className="text-white/60 text-[15px] leading-relaxed mb-8">
          Thank you for participating. Your voice has been securely recorded.
        </p>

        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 text-left mb-8 shadow-inner">
          <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <FileText className="h-5 w-5 text-white/80" />
          </div>
          <div>
            <p className="text-white/40 text-[11px] font-semibold uppercase tracking-wider mb-1">Reference Number</p>
            <p className="text-white font-mono text-sm tracking-wide">VT-2026-000521</p>
          </div>
        </div>

        <p className="text-white/40 text-[13px] mb-8">
          You will be automatically logged out in 10 seconds.
        </p>

        <div className="w-full space-y-3">
          <Button asChild className="w-full h-14 rounded-full bg-white text-black hover:bg-zinc-200 text-[15px] font-bold shadow-lg shadow-white/10 transition-all">
            <Link href="/login">Logout Now</Link>
          </Button>

          <Button asChild variant="ghost" className="w-full h-14 rounded-full text-white/50 hover:text-white hover:bg-white/5 text-[15px] font-medium transition-all group">
             <Link href="/">
               Return to Home 
               <ArrowRight className="ml-2 h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
             </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}