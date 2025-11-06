import { HeroSection } from "@/components/sections/HeroSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SpeedTest } from "@/components/sections/SpeedTest";
import { KeyFeatures } from "@/components/sections/KeyFeatures";
import { Testimonials } from "@/components/sections/Testimonials";
import { CoverageMap } from "@/components/sections/CoverageMap";
import { CTABanner } from "@/components/sections/CTABanner";
import { Footer } from "@/components/Footer";
import { Plug, Gauge, RefreshCw } from "lucide-react";

function InternetFixSection() {
  const steps = [
    {
      title: "Diagnose Internet Connection Issues",
      description:
        "When internet is down or wifi not working, first check all cables, devices, and power connections to troubleshoot internet problems.",
      icon: Plug,
    },
    {
      title: "Test Internet Speed & Performance",
      description: "Run a comprehensive speed test to identify wifi connection problems and determine if you're experiencing an internet outage or service disruption.",
      icon: Gauge,
    },
    {
      title: "Reset Network Equipment",
      description: "If wifi keeps dropping or you have no internet connection, power cycle your router and modem to restore your wireless network.",
      icon: RefreshCw,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 text-center animate-fade-in">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-4 sm:mb-6 text-gradient-neon">
          Internet Down? WiFi Not Working? <br className="hidden sm:block" />
          <span className="text-primary">We Fix Internet Problems Fast</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-3 sm:mb-4 max-w-3xl mx-auto px-4">
          Experiencing internet trouble or wifi outage today? Don't let internet connection problems disrupt your day. Our expert team provides instant internet troubleshooting for home internet outages, wifi connectivity issues, and network disruptions in your area.
        </p>
        <p className="text-base sm:text-lg text-primary font-semibold mb-6 sm:mb-8 px-4">
          Emergency Internet Support - Call us immediately:{" "}
          <a
            href="tel:+18774968608"
            className="underline hover:text-primary/80 transition block sm:inline mt-1 sm:mt-0"
          >
            +1(877) 496-8608
          </a>
        </p>
       
        {/* Three Step Cards - Mobile Stacked, Desktop Horizontal */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="glass border-neon rounded-2xl p-4 sm:p-6 shadow-lg flex-1 min-w-0 sm:min-w-[220px] flex flex-col items-center">
              <div className="mb-3">
                <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-primary text-center leading-tight">{step.title}</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-2xl mx-auto">
          <a
            href="tel:+18774968608"
            className="bg-primary text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-lg hover:bg-primary/80 transition-all w-full sm:w-auto text-sm sm:text-base"
          >
            Emergency Internet Support
          </a>
          <a
            href="#SpeedTest"
            className="bg-gradient-neon text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-lg hover:glow-primary transition-all w-full sm:w-auto text-sm sm:text-base"
          >
            Troubleshoot Internet Now
          </a>
        </div>
      </div>
    </section>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <section className="relative z-10">
        <HeroSection />
      </section>
      {/* Why Choose Us Section */}
      <section className="relative z-10">
        <WhyChooseUs />
      </section>
      {/* Internet Fix Section (replaces PricingPlans) */}
      <section className="relative z-10">
        <InternetFixSection />
      </section>
      {/* Speed Test Section */}
      <section className="relative z-10" id="SpeedTest">
        <SpeedTest />
      </section>
      {/* Key Features Section */}
      <section className="relative z-10">
        <KeyFeatures />
      </section>
      {/* Testimonials Section */}
      <section className="relative z-10">
        <Testimonials />
      </section>
      {/* Coverage Map Section */}
      <section className="relative z-10">
        <CoverageMap />
      </section>
      {/* CTA Banner Section */}
      <section className="relative z-10">
        <CTABanner />
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
