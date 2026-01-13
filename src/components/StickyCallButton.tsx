import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        size="lg"
        className="bg-gradient-neon glow-primary hover:glow-secondary rounded-full shadow-2xl px-6 py-3 flex items-center justify-center gap-2 hover:scale-110 transition-transform duration-300 text-black font-bold"
        asChild
      >
        <a href="tel:8774969657" className="flex items-center justify-center gap-2" title="Call us now">
          <Phone className="h-5 w-5" />
          <span className="text-sm">(877) 496-9657</span>
        </a>
      </Button>
    </div>
  );
}
