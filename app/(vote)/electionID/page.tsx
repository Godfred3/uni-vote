"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, Check } from "lucide-react";
import Link from "next/link";

const positions = ["President", "Vice President", "Secretary"];

const candidates = [
  {
    name: "John Doe",
    dept: "Computer Science",
    level: "Level 300",
    manifesto: "Improving student welfare through transparency and leadership.",
    avatar: "JD",
    img: "https://i.pravatar.cc/150?u=john",
  },
  {
    name: "Jane Smith",
    dept: "Political Science",
    level: "Level 300",
    manifesto: "Empowering students with inclusive governance and better facilities.",
    avatar: "JS",
    img: "https://i.pravatar.cc/150?u=jane",
  },
  {
    name: "Alex Johnson",
    dept: "Economics",
    level: "Level 300",
    manifesto: "Building bridges between students and the university administration.",
    avatar: "AJ",
    img: "https://i.pravatar.cc/150?u=alex",
  },
];

export default function VotingPage() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="h-screen relative flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-zinc-950 overflow-hidden">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')" }}
      />
      <div className="fixed inset-0 z-0 bg-black/30 backdrop-blur-[4px]" />

      <div className="relative z-10 w-full max-w-[1400px] flex-1 rounded-[40px] border border-white/20 bg-white/[0.02] backdrop-blur-lg overflow-hidden flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.5)]">
        <Navbar />

        {/* Fixed Header */}
        <div className="shrink-0 px-6 md:px-10 lg:px-14 pt-4 pb-3">
          <button
            onClick={() => step > 1 && setStep(step - 1)}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            {step > 1 ? "Back" : "Elections"}
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">{positions[step - 1]}</h1>
          <p className="text-white/60 text-sm mt-1">Select one candidate for this position.</p>
        </div>

        {/* Centered Progress Bar */}
        <div className="shrink-0 flex justify-center px-6">
          <div className="flex items-center gap-2">
            {positions.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i < step
                    ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                    : i === step
                    ? "w-5 bg-white/30"
                    : "w-3 bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scrollable Candidates */}
        <div className="flex-1 min-h-0 overflow-y-auto px-6 md:px-10 lg:px-14 py-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {candidates.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelected(`c${i}`)}
                className={`text-left rounded-[24px] bg-[#0A0E17]/70 backdrop-blur-2xl border p-5 transition-all flex flex-col ${
                  selected === `c${i}`
                    ? "border-white/40 bg-[#0A0E17]/90 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                    : "border-white/10 hover:border-white/20 hover:bg-[#0A0E17]/90"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-14 w-14 shrink-0">
                    <AvatarImage src={c.img} alt={c.name} />
                    <AvatarFallback className="bg-white/10 text-white/80 text-lg font-semibold">{c.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-white text-[15px] truncate">{c.name}</p>
                      {selected === `c${i}` && (
                        <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-black" />
                        </div>
                      )}
                    </div>
                    <p className="text-white/50 text-sm truncate">{c.dept}</p>
                    <p className="text-white/30 text-xs">{c.level}</p>
                  </div>
                </div>

                <p className="text-white/40 text-sm leading-relaxed flex-1">&ldquo;{c.manifesto}&rdquo;</p>

                <div className={`mt-4 h-1 rounded-full transition-all ${
                  selected === `c${i}` ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-white/5"
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Fixed Bottom Navigation */}
        <div className="shrink-0 flex justify-between px-6 md:px-10 lg:px-14 py-4 border-t border-white/5">
          <Button
            variant="secondary"
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            className="bg-white/10 text-white hover:bg-white/20 border-none"
          >
            Back
          </Button>
          <span className="text-white/30 text-xs self-center">Step {step} of {positions.length}</span>
          <Button asChild className="bg-white text-black hover:bg-zinc-200 font-bold">
            {step < positions.length ? (
              <span
                role="button"
                onClick={() => {
                  setStep(step + 1);
                  setSelected(null);
                }}
              >
                Next
              </span>
            ) : (
              <Link href="/view">Review Vote</Link>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
