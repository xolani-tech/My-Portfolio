import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-black/50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="bg-primary text-primary-foreground font-bold text-sm w-8 h-8 flex items-center justify-center rounded-md">
          XS
        </div>
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          © 2025 Xolani Sodam. Made with <Heart className="w-3 h-3 text-primary fill-primary" /> in Cape Town
        </p>
      </div>
    </footer>
  );
}
