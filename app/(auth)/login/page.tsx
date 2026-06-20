import { LoginForm } from "@/components/(auth)/login-form";

export default function LoginPage() {
  return (
    <div className="h-screen relative flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-zinc-950 overflow-hidden">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')" }}
      />
      <div className="fixed inset-0 z-0 bg-black/30 backdrop-blur-[4px]" />

      <div className="relative z-10 w-full max-w-[500px] flex-1 max-h-[680px] rounded-[40px] border border-white/20 bg-white/[0.02] backdrop-blur-lg overflow-hidden flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.5)]">
        <div className="flex-1 min-h-0 overflow-y-auto p-8 md:p-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
