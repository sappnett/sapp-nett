import { Card } from "@/components/ui/card";
import { Zap, Shield, Headphones, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "No More Internet Down Time",
    description: "Experience blazing-fast internet with speeds up to 1Gbps. Say goodbye to wifi not working and internet connection problems forever.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Shield,
    title: "End Internet Outages Forever",
    description: "99.9% uptime guarantee with redundant network infrastructure. No more internet is down emergencies or wifi outage disruptions.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Headphones,
    title: "24/7 Internet Troubleshooting",
    description: "Round-the-clock emergency internet support from certified experts. Instant help when your internet is not working or wifi keeps dropping.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Globe,
    title: "Area-Wide Outage Protection",
    description: "Extensive fiber network preventing internet outage in your area. Reliable connectivity even during widespread internet service disruptions.",
    gradient: "from-primary via-secondary to-accent",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Never Deal with <span className="text-gradient-neon">Internet Problems</span> Again
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop worrying about internet down situations, wifi not working issues, and emergency internet outages. We provide rock-solid connectivity with instant internet troubleshooting support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group glass border-neon hover-lift hover:glow-primary transition-all duration-500 p-8 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.gradient} glow-primary mb-6 group-hover:pulse-glow`}>
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-orbitron font-bold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-orbitron font-bold text-gradient-neon">50K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-orbitron font-bold text-gradient-neon">15+</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-orbitron font-bold text-gradient-neon">5000km</div>
              <div className="text-muted-foreground">Fiber Network</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-orbitron font-bold text-gradient-neon">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}