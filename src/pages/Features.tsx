import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Zap, Globe, Shield, Wifi, Database, Clock, Headphones, Award, Phone, AlertCircle, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const assistanceFeatures = [
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description: "Round-the-clock access to experienced technicians who understand multiple providers and can offer unbiased guidance.",
    specs: ["Phone Support", "Email Support", "Live Chat", "Priority Response"],
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "We never request passwords or sensitive information. Your privacy and security are paramount.",
    specs: ["No Password Requests", "No SSN Requests", "Encrypted Communications", "Data Protection"],
  },
  {
    icon: Globe,
    title: "Multi-Provider Knowledge",
    description: "Our team understands cable, internet, and streaming services across different providers.",
    specs: ["Multiple Providers", "Service Expertise", "Equipment Knowledge", "Optimization Tips"],
  },
  {
    icon: Zap,
    title: "Rapid Problem Resolution",
    description: "Quick troubleshooting and escalation to get your issues resolved fast.",
    specs: ["Fast Response", "Issue Diagnosis", "Solution Implementation", "Follow-up Support"],
  },
  {
    icon: CheckCircle2,
    title: "Independent Guidance",
    description: "Unbiased recommendations from an independent platform not affiliated with any provider.",
    specs: ["No Provider Bias", "Your Best Interest", "Transparent Advice", "Ethical Service"],
  },
  {
    icon: Database,
    title: "Comprehensive Knowledge Base",
    description: "Access to extensive resources about services, troubleshooting, and optimization.",
    specs: ["Service FAQs", "Troubleshooting Guides", "Setup Instructions", "Best Practices"],
  },
];

const keyBenefits = [
  { benefit: "Independent Advice", description: "Not affiliated with any service provider" },
  { benefit: "Separate Billing", description: "Our service fee is distinct from provider charges" },
  { benefit: "No Password Access", description: "We never access your provider accounts" },
  { benefit: "Unbiased Guidance", description: "Recommendations based on YOUR needs" },
  { benefit: "24/7 Availability", description: "Support whenever you need it" },
  { benefit: "Expert Team", description: "Experienced across multiple providers" },
];

const faqs = [
  {
    question: "Is Sappnett a service provider?",
    answer: "No. Sappnett is an independent third-party assistance platform. We do NOT sell internet, cable, or streaming services. We provide guidance and support for customers who already have services with providers."
  },
  {
    question: "Will Sappnett charges affect my provider bill?",
    answer: "No. We charge a separate service fee for our assistance. Your service provider continues to bill you separately for their services. You'll receive two distinct bills: one from your provider and one from Sappnett."
  },
  {
    question: "Do you need my provider account password?",
    answer: "Absolutely not. We never request provider passwords, PINs, credentials, Social Security numbers, or sensitive information. We cannot access provider accounts. Account changes must be made directly with your provider."
  },
  {
    question: "Are you affiliated with any service provider?",
    answer: "No. Sappnett is completely independent from all cable, internet, and streaming service providers. We are not endorsed by, authorized by, or in partnership with any provider. Our guidance is independent and unbiased."
  },
  {
    question: "Can you modify my provider account?",
    answer: "No. We cannot access, modify, cancel, or activate any provider account. Only you or an authorized provider representative can make account changes. We provide guidance to help you make informed decisions."
  },
  {
    question: "What if I'm not satisfied with your assistance?",
    answer: "We offer a refund policy allowing requests within 7-15 days of purchase, depending on the type of assistance provided. See our Refund Policy page for complete details and specific conditions."
  }
];

const Features = () => {
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
              Our <span className="text-gradient-neon">Assistance Features</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover what makes Sappnett the ideal independent assistance platform for your cable, internet, 
              and streaming service needs. Expert guidance that serves YOUR interests.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Why Choose <span className="text-gradient-neon">Sappnett</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Independent, unbiased assistance from experts who understand your services and put YOUR needs first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assistanceFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="group glass border-neon hover-lift hover:glow-primary p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <div className="p-4 rounded-full bg-gradient-neon glow-primary w-fit mb-6 group-hover:pulse-glow">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Key <span className="text-gradient-neon">Benefits</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyBenefits.map((item, index) => (
                <Card 
                  key={index}
                  className="glass border-primary/50 bg-primary/5 p-6 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-lg font-bold text-primary mb-2">{item.benefit}</div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Frequently Asked <span className="text-gradient-neon">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Got questions about Sappnett? We've got answers about our services and commitment to independence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-muted/20">
                  <AccordionTrigger className="text-left hover:text-primary font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Still have questions?</p>
            <Button className="bg-gradient-neon glow-primary hover:glow-secondary hover-lift" asChild>
              <a href="tel:8774969657">
                <Phone className="mr-2 h-5 w-5" />
                Call: (877) 496-9657
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-surface">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-orbitron font-bold mb-6">
              Ready for <span className="text-gradient-neon">Expert Assistance</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get independent, expert guidance for your cable, internet, and streaming services. 
              Available 24/7 with no provider affiliation or bias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-neon glow-primary hover:glow-secondary hover-lift" asChild>
                <a href="tel:8774969657">Call Now: (877) 496-9657</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get Help</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;