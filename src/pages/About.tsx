import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Clock, AlertCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const milestones = [
  { year: "2026", title: "Sappnett Launched", description: "Founded as an independent third-party service assistance platform focused on helping customers navigate cable, internet, and streaming services" },
  { year: "2026", title: "Multi-Provider Support", description: "Established partnerships to provide guidance across major cable, internet, and streaming providers" },
  { year: "2026", title: "24/7 Customer Assistance", description: "Launched round-the-clock support for customers seeking help with service troubleshooting and optimization" },
  { year: "2026", title: "Compliance Certified", description: "Achieved full Google Ads and industry compliance for transparent, ethical service assistance" },
  { year: "2026", title: "Independent Model", description: "Maintained complete independence from all service providers to ensure unbiased guidance" },
  { year: "2026", title: "Customer Growth", description: "Growing user base of customers seeking independent assistance with their services" },
];

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* Important Disclaimer - Above Fold */}
            <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-4 mb-8 flex gap-3 items-start">
              <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div className="text-left">
                <p className="text-sm font-semibold text-yellow-700">Important Disclosure</p>
                <p className="text-xs text-yellow-600 leading-tight">Sappnett is NOT an internet service provider and does NOT sell internet, cable, or streaming services. We are an independent third-party assistance platform charging separate service fees. See our <Link to="/disclaimer" className="underline hover:text-yellow-500">Disclaimer</Link> and <Link to="/faq" className="underline hover:text-yellow-500">FAQ</Link>.</p>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
              About <span className="text-gradient-neon">Sappnett</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sappnett is an independent third-party service assistance platform dedicated to helping 
              customers navigate, optimize, and troubleshoot their cable, internet, and streaming services 
              with expert guidance and 24/7 support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="glass border-neon hover-lift p-8">
              <Target className="h-12 w-12 text-primary mb-6 glow-primary" />
              <h3 className="text-2xl font-orbitron font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide independent, expert guidance and assistance to customers navigating cable, 
                internet, and streaming services. We empower customers with knowledge and support to 
                optimize their existing services without selling services ourselves.
              </p>
            </Card>

            <Card className="glass border-neon hover-lift p-8">
              <Users className="h-12 w-12 text-secondary mb-6 glow-secondary" />
              <h3 className="text-2xl font-orbitron font-bold mb-4">Our Promise</h3>
              <p className="text-muted-foreground leading-relaxed">
                To remain completely independent from all service providers, offering unbiased guidance 
                and transparent service. We never request passwords, never access provider accounts, and 
                never represent any provider. We're an independent assistance platform only.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Our <span className="text-gradient-neon">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sappnett's rapid growth as an independent third-party service assistance platform, 
              committed to helping customers navigate their cable, internet, and streaming services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-neon glow-primary flex items-center justify-center">
                      <span className="text-sm font-orbitron font-bold text-primary-foreground">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  <Card className="flex-1 glass border-neon hover-lift p-6">
                    <h3 className="text-xl font-orbitron font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Core <span className="text-gradient-neon">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="glass border-neon hover-lift p-8 text-center">
              <Award className="h-12 w-12 text-accent mx-auto mb-6 glow-accent" />
              <h3 className="text-xl font-orbitron font-bold mb-4">Independence</h3>
              <p className="text-muted-foreground">
                We remain completely independent from all service providers, ensuring unbiased, 
                transparent guidance for our customers.
              </p>
            </Card>

            <Card className="glass border-neon hover-lift p-8 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-6 glow-primary" />
              <h3 className="text-xl font-orbitron font-bold mb-4">Transparency</h3>
              <p className="text-muted-foreground">
                We are clear about who we are: NOT an ISP, NOT selling services, charging separate fees, 
                and dedicated to honest, ethical service.
              </p>
            </Card>

            <Card className="glass border-neon hover-lift p-8 text-center">
              <Clock className="h-12 w-12 text-secondary mx-auto mb-6 glow-secondary" />
              <h3 className="text-xl font-orbitron font-bold mb-4">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our customers depend on us, and we provide round-the-clock expert guidance and assistance 
                for all their service questions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What We're NOT */}
      <section className="py-24 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-12 text-center">
              <span className="text-gradient-neon">What We're NOT</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass border-neon p-6">
                <h3 className="text-lg font-bold text-primary mb-3">❌ NOT an Internet Service Provider</h3>
                <p className="text-muted-foreground text-sm">
                  We don't sell internet plans, cable subscriptions, or streaming services. We assist customers 
                  with services they already have.
                </p>
              </Card>
              
              <Card className="glass border-neon p-6">
                <h3 className="text-lg font-bold text-primary mb-3">❌ NOT Affiliated with Providers</h3>
                <p className="text-muted-foreground text-sm">
                  We are completely independent. We are not endorsed by, authorized by, or in partnership 
                  with any cable, internet, or streaming provider.
                </p>
              </Card>
              
              <Card className="glass border-neon p-6">
                <h3 className="text-lg font-bold text-primary mb-3">❌ NOT Requesting Passwords</h3>
                <p className="text-muted-foreground text-sm">
                  We never ask for provider account passwords, credentials, SSN, or sensitive information. 
                  We cannot access provider accounts.
                </p>
              </Card>
              
              <Card className="glass border-neon p-6">
                <h3 className="text-lg font-bold text-primary mb-3">❌ NOT Provider Customer Service</h3>
                <p className="text-muted-foreground text-sm">
                  We are independent guidance, not official provider support. Providers handle account changes, 
                  billing disputes, and technical support.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-orbitron font-bold mb-6">
              Get <span className="text-gradient-neon">Expert Assistance</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Need help with your cable, internet, or streaming service? Sappnett provides independent, 
              24/7 expert guidance to help you navigate and optimize your services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-neon glow-primary hover:glow-secondary hover-lift" asChild>
                <a href="tel:8774969657">Call: (877) 496-9657</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get Help Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;