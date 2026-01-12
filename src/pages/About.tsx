import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Clock } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const milestones = [
  { year: "2014", title: "Company Founded", description: "Started with a vision to democratize high-speed internet access" },
  { year: "2016", title: "First 1000 Customers", description: "Reached our first milestone with fiber installations across 3 cities" },
  { year: "2018", title: "Regional Expansion", description: "Expanded network coverage to 10+ cities and rural areas" },
  { year: "2020", title: "1 Gbps Launch", description: "Introduced gigabit speeds to residential and business customers" },
  { year: "2022", title: "50K Customers", description: "Celebrated serving over 50,000 satisfied customers" },
  { year: "2024", title: "Future Ready", description: "Leading the region with next-gen fiber infrastructure" },
];

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
              About <span className="text-gradient-neon">Sappnett</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over a decade, we've been connecting communities with lightning-fast, 
              reliable internet that powers dreams, businesses, and endless possibilities.
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
                To provide exceptional internet connectivity that empowers individuals, families, 
                and businesses to thrive in the digital age. We believe fast, reliable internet 
                is not a luxury—it's a necessity for modern life.
              </p>
            </Card>

            <Card className="glass border-neon hover-lift p-8">
              <Users className="h-12 w-12 text-secondary mb-6 glow-secondary" />
              <h3 className="text-2xl font-orbitron font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the region's leading internet service provider, known for innovation, 
                reliability, and exceptional customer service. We're building the digital 
                infrastructure that will power the next generation of connectivity.
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
              From humble beginnings to regional leadership—discover how we've grown 
              to serve thousands of customers across the region.
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

      {/* Values */}
      <section className="py-24 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Our <span className="text-gradient-neon">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="glass border-neon hover-lift p-8 text-center">
              <Award className="h-12 w-12 text-accent mx-auto mb-6 glow-accent" />
              <h3 className="text-xl font-orbitron font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from network infrastructure 
                to customer service.
              </p>
            </Card>

            <Card className="glass border-neon hover-lift p-8 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-6 glow-primary" />
              <h3 className="text-xl font-orbitron font-bold mb-4">Community</h3>
              <p className="text-muted-foreground">
                We're committed to supporting and connecting the communities we serve, 
                one connection at a time.
              </p>
            </Card>

            <Card className="glass border-neon hover-lift p-8 text-center">
              <Clock className="h-12 w-12 text-secondary mx-auto mb-6 glow-secondary" />
              <h3 className="text-xl font-orbitron font-bold mb-4">Reliability</h3>
              <p className="text-muted-foreground">
                Our customers depend on us, and we take that responsibility seriously 
                with 99.9% uptime guarantee.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-orbitron font-bold mb-6">
              Ready to <span className="text-gradient-neon">Join Us</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the Sappnett difference with ultra-fast, reliable internet 
              backed by exceptional support.
            </p>
            <Button size="lg" className="bg-gradient-neon glow-primary hover:glow-secondary hover-lift" asChild>
              <a href="tel:8774969657">Call Now: (877) 496-9657</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;