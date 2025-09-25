import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function CTABanner() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-surface relative overflow-hidden">
      {/* Background Effects - Smaller on mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-48 sm:h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full glass border-neon mb-6 sm:mb-8 animate-fade-in">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2" />
            <span className="text-xs sm:text-sm font-medium">Join 50,000+ Satisfied Customers</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-orbitron font-bold mb-4 sm:mb-6 animate-slide-up">
            No More <span className="text-gradient-neon">Internet Problems</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"><br /></span>Switch to Reliable Internet!
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up px-4" style={{ animationDelay: "0.2s" }}>
            Stop dealing with wifi not working, internet outages, and connection problems. Get ultra-fast fiber internet with 24/7 emergency internet troubleshooting support. No more "internet is down" emergencies!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up max-w-2xl mx-auto" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-neon glow-primary hover:glow-secondary hover-lift px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg lg:text-xl font-semibold w-full sm:w-auto"
              asChild
            >
              <Link to="/contact">
                Get Started Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-neon hover:bg-primary/10 hover-lift px-12 py-6 text-xl font-semibold"
              asChild
            >
              <Link to="/services">
                <Zap className="mr-3 h-6 w-6" />
                Check Availability
              </Link>
            </Button>
          </div>

          {/* Features/Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="p-2 rounded-full bg-green-500/20">
                <Zap className="h-6 w-6 text-green-500" />
              </div>
              <span className="text-lg font-semibold">Up to 1 Gbps Speed</span>
            </div>
            <div className="flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="p-2 rounded-full bg-blue-500/20">
                <Clock className="h-6 w-6 text-blue-500" />
              </div>
              <span className="text-lg font-semibold">48-Hour Installation</span>
            </div>
            <div className="flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: "1s" }}>
              <div className="p-2 rounded-full bg-purple-500/20">
                <Star className="h-6 w-6 text-purple-500" />
              </div>
              <span className="text-lg font-semibold">30-Day Guarantee</span>
            </div>
          </div>

          {/* Special Offer */}
          <div className="glass border-neon rounded-2xl p-8 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: "1.2s" }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-gradient-neon glow-primary">
                <Star className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold">Limited Time Offer</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Sign up today and get your first month FREE plus free professional installation. 
              No contracts, no hidden fees, just lightning-fast internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-gradient-neon mb-1">FREE</div>
                <div className="text-sm text-muted-foreground">First Month</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-gradient-neon mb-1">FREE</div>
                <div className="text-sm text-muted-foreground">Installation</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-gradient-neon mb-1">NO</div>
                <div className="text-sm text-muted-foreground">Contracts</div>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <p className="text-sm text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: "1.4s" }}>
            * Offer expires December 31st, 2024. New customers only. Terms and conditions apply.
          </p>
        </div>
      </div>
    </section>
  );
}