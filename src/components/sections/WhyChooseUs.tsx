import { Card } from "@/components/ui/card";
import { Zap, Shield, Headphones, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Independent Guidance",
    description: "Get unbiased, expert guidance about internet and cable services from an independent provider - not affiliated with any service provider.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Shield,
    title: "Complete Transparency",
    description: "We clearly disclose what we are and what we're not. No hidden affiliations, no misleading claims - just honest, independent assistance.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Headphones,
    title: "24/7 Support Available",
    description: "Round-the-clock access to our team for informational support, service navigation, and general guidance about your connectivity options.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Globe,
    title: "Multi-Provider Knowledge",
    description: "Our team understands multiple internet and cable providers, offering truly independent recommendations based on your specific needs.",
    gradient: "from-primary via-secondary to-accent",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Why Choose <span className="text-gradient-neon">Sappnett</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As an independent third-party service assistance provider, we offer transparent, unbiased guidance focused on your needs - not any provider's interests.
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
              <div className="text-3xl font-orbitron font-bold text-gradient-neon">25K+</div>
              <div className="text-muted-foreground">Satisfied Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-orbitron font-bold text-gradient-neon">24/7</div>
              <div className="text-muted-foreground">Available Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-orbitron font-bold text-gradient-neon">100%</div>
              <div className="text-muted-foreground">Independent</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-orbitron font-bold text-gradient-neon">2026+</div>
              <div className="text-muted-foreground">Trusted Partner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}