import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const App = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-2xl rounded-[32px] border border-white/10 bg-white/[0.03] p-10 text-center shadow-2xl backdrop-blur-2xl">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
          <Sparkles size={16} />
          Modern React Starter
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-black leading-tight tracking-tight">
          React + Vite + Tailwind + Shadcn 🚀
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          A beautiful starter template with modern UI, animations, reusable
          components and clean architecture for building powerful apps.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="h-12 rounded-2xl px-8 text-base font-semibold">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="h-12 rounded-2xl border-white/10 bg-white/5 px-8 text-base hover:bg-white/10"
          >
            Documentation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
