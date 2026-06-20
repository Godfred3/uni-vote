import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, ChevronRight, Star } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-zinc-950 font-sans">
      
      {/* Background Image & Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')" }}
      ></div>
      <div className="fixed inset-0 z-0 bg-black/30 backdrop-blur-[4px]"></div>

      {/* Main Glass Container (Matching Dribbble outline) */}
      <div className="relative z-10 w-full max-w-[1400px] flex-1 rounded-[40px] border border-white/20 bg-white/[0.02] backdrop-blur-lg overflow-hidden flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.5)]">
        
        <Navbar />

        <div className="flex-1 flex flex-col lg:flex-row p-6 md:p-12 lg:p-16 gap-12 lg:gap-8 items-center lg:items-start justify-between overflow-y-auto">
          
          {/* Left Column: Typography & Upcoming */}
          <div className="flex-1 space-y-10 max-w-2xl text-white lg:pt-12">
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-md">
                Welcome back, <br/> John 👋
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-md leading-relaxed font-light">
                Select an active election and cast your vote securely to shape the future of our university.
              </p>
            </div>

            <div className="flex items-center gap-4">
               <div className="flex items-center gap-1.5 text-yellow-400">
                  <Star className="fill-yellow-400 w-5 h-5" />
                  <span className="font-semibold text-white text-lg">4.9</span>
               </div>
               <span className="text-white/60 text-sm font-medium">from 12,000+ votes cast</span>
            </div>
            
            {/* Upcoming Elections List */}
            <div className="pt-8 space-y-5 max-w-md">
               <h3 className="text-white/90 font-semibold uppercase tracking-widest text-xs">Upcoming Elections</h3>
               <div className="group flex items-center justify-between bg-black/20 hover:bg-black/40 border border-white/10 rounded-2xl p-4 cursor-pointer transition-all backdrop-blur-md">
                 <div className="flex items-center gap-4">
                   <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                     <Calendar className="w-5 h-5 text-white/90" />
                   </div>
                   <div>
                     <p className="font-medium text-white text-[15px]">Hall Representative</p>
                     <p className="text-sm text-white/50">Starts tomorrow</p>
                   </div>
                 </div>
                 <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
               </div>
            </div>
            
          </div>

          {/* Right Column: Active Elections (Matches Dribbble booking card) */}
          <div className="w-full lg:w-[420px] shrink-0 flex flex-col gap-6 lg:pb-12">
            
            {[1, 2].map((e) => (
              <div key={e} className="rounded-[32px] bg-[#0A0E17]/70 backdrop-blur-2xl border border-white/10 p-7 shadow-2xl relative overflow-hidden group hover:bg-[#0A0E17]/90 transition-colors">
                
                {/* Decorative Status Dot */}
                <div className="absolute top-7 right-7 h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-white pr-12 leading-tight">
                      SRC General <br/> Election 2026 {e === 2 ? " - Local" : ""}
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <p className="text-white/40 text-[10px] font-semibold uppercase tracking-wider mb-1.5">Status</p>
                      <p className="text-white font-medium flex items-center gap-2 text-sm">
                        Active
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <p className="text-white/40 text-[10px] font-semibold uppercase tracking-wider mb-1.5">Remaining</p>
                      <p className="text-white font-medium flex items-center gap-2 text-sm">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        04h 25m
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5 pt-2">
                    <p className="text-white/60 text-[13px] leading-relaxed">
                      Vote for student leaders representing the university community across all faculties.
                    </p>
                    <Button className="w-full h-14 rounded-full bg-white text-black hover:bg-zinc-200 text-[15px] font-bold shadow-lg shadow-white/10 transition-all">
                      Vote Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}