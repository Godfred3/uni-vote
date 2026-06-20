import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Check, Clock } from "lucide-react";
import Link from "next/link";

const selections = [
  { position: "President", candidate: "John Doe" },
  { position: "Vice President", candidate: "Jane Smith" },
  { position: "Secretary", candidate: "Alex Johnson" },
];

export default function ReviewPage() {
  return (
    <div className="h-screen relative flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-zinc-950 overflow-hidden">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')" }}
      />
      <div className="fixed inset-0 z-0 bg-black/30 backdrop-blur-[4px]" />

      <div className="relative z-10 w-full max-w-[1400px] flex-1 rounded-[40px] border border-white/20 bg-white/[0.02] backdrop-blur-lg overflow-hidden flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.5)]">
        <Navbar />

        <div className="flex-1 min-h-0 flex flex-col p-6 md:p-10 lg:p-14 gap-6 overflow-y-auto">
          {/* Header */}
          <div className="space-y-2">
            <Link
              href="/electionID"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Voting
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Review Your Votes</h1>
            <p className="text-white/60">Please confirm your selections before submitting.</p>
          </div>

          {/* Selections */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
            {selections.map((s, i) => (
              <div
                key={i}
                className="rounded-[24px] bg-[#0A0E17]/70 backdrop-blur-2xl border border-white/10 p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white/80" />
                  </div>
                  <span className="text-white/30 text-xs font-medium">#{i + 1}</span>
                </div>

                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">{s.position}</p>
                <p className="font-semibold text-white text-lg">{s.candidate}</p>
              </div>
            ))}
          </div>

          {/* Notice */}
          <div className="flex items-center gap-3 text-white/40 text-sm max-w-4xl">
            <Clock className="w-4 h-4 shrink-0" />
            <p>Votes cannot be changed after submission.</p>
          </div>

          {/* Actions */}
          <div className="flex justify-between pt-2 max-w-4xl">
            <Button asChild variant="secondary" className="bg-white/10 text-white hover:bg-white/20 border-none">
              <Link href="/electionID">Edit Votes</Link>
            </Button>

            <Button asChild className="bg-white text-black hover:bg-zinc-200 font-bold">
              <Link href="/success">Submit Vote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
