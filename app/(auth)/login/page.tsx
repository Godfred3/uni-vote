import { LoginForm } from "@/components/(auth)/login-form";
import { Lock, BarChart, GraduationCap } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-[#18181A] overflow-hidden p-4 sm:p-6 md:p-8">
      
      {/* Main Card Container */}
      <div className="w-full max-w-[950px] flex flex-col md:flex-row bg-[#F7F7F9] rounded-[24px] overflow-hidden shadow-2xl h-full max-h-[580px]">
        
        {/* LEFT SECTION (Form) */}
        <section className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col bg-[#F7F7F9] justify-center overflow-y-auto">
          <LoginForm />
        </section>

        {/* RIGHT SECTION (Graphic) */}
        <section className="hidden md:flex w-1/2 relative bg-gradient-to-br from-[#0F4C81] to-[#0a3254] text-white flex-col justify-between p-8 lg:p-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white text-[#0F4C81] flex items-center justify-center font-bold text-lg shadow-sm">
                U
              </div>
              <span className="text-xl font-bold tracking-tight">UniVote</span>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                University E-Voting System
              </h1>
              <p className="text-sm text-blue-100/90 max-w-sm leading-relaxed">
                Secure, transparent and accessible online elections for the student body.
              </p>
            </div>
          </div>

          <div className="space-y-3 mt-8">
            <div className="flex items-center gap-3 text-sm font-medium bg-white/10 px-4 py-3.5 rounded-xl border border-white/10 backdrop-blur-sm">
              <Lock className="w-4 h-4 text-blue-300" />
              Secure Voting Platform
            </div>
            <div className="flex items-center gap-3 text-sm font-medium bg-white/10 px-4 py-3.5 rounded-xl border border-white/10 backdrop-blur-sm">
              <BarChart className="w-4 h-4 text-blue-300" />
              Real-Time Election Results
            </div>
            <div className="flex items-center gap-3 text-sm font-medium bg-white/10 px-4 py-3.5 rounded-xl border border-white/10 backdrop-blur-sm">
              <GraduationCap className="w-4 h-4 text-blue-300" />
              Verified Students Only
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}