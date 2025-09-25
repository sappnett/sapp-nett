import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Zap, Globe, Shield, Wifi, Database, Clock, Headphones, Award } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Speeds",
    description: "Experience download speeds up to 1 Gbps with our fiber-optic network.",
    specs: ["Upload: Up to 1 Gbps", "Download: Up to 1 Gbps", "Latency: <5ms", "Bandwidth: Unlimited"],
  },
  {
    icon: Globe,
    title: "Wide Coverage",
    description: "Extensive fiber network covering both urban and rural areas.",
    specs: ["15+ Cities", "5000km Network", "Rural Coverage", "Expanding Daily"],
  },
  {
    icon: Shield,
    title: "Secure Connection",
    description: "Enterprise-grade security protecting your data and privacy.",
    specs: ["WPA3 Encryption", "DDoS Protection", "Firewall Included", "VPN Ready"],
  },
  {
    icon: Wifi,
    title: "WiFi 6 Ready",
    description: "Latest wireless technology for maximum speed and device capacity.",
    specs: ["WiFi 6E Support", "Multi-Gigabit", "200+ Devices", "Mesh Compatible"],
  },
  {
    icon: Database,
    title: "Unlimited Data",
    description: "No data caps, no throttling, no restrictions on your usage.",
    specs: ["No Data Caps", "No Throttling", "24/7 Usage", "Fair Usage Policy"],
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Reliable service backed by redundant infrastructure.",
    specs: ["SLA Guarantee", "Redundant Network", "Auto Failover", "Monitoring 24/7"],
  },
];

const techSpecs = [
  { label: "Maximum Download Speed", value: "1 Gbps" },
  { label: "Maximum Upload Speed", value: "1 Gbps" },
  { label: "Latency", value: "< 5ms" },
  { label: "Network Uptime", value: "99.9%" },
  { label: "WiFi Standard", value: "WiFi 6/6E" },
  { label: "Security Protocol", value: "WPA3" },
  { label: "Data Allowance", value: "Unlimited" },
  { label: "Installation Time", value: "2-5 days" },
];

const faqs = [
  {
    question: "What speeds can I expect with Sappnett?",
    answer: "Our fiber-optic network delivers symmetrical speeds up to 1 Gbps for both download and upload. Actual speeds may vary based on your plan and network conditions, but we guarantee you'll get the speeds you pay for."
  },
  {
    question: "Is there a data limit or usage cap?",
    answer: "No, all our plans come with unlimited data usage. There are no caps, throttling, or restrictions on how much data you can use each month."
  },
  {
    question: "How long does installation take?",
    answer: "Most installations are completed within 2-5 days of your order. Our certified technicians will schedule a convenient time and complete the entire setup, including WiFi configuration."
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "We offer a 30-day money-back guarantee on all residential plans. If you're not completely satisfied, we'll refund your first month's payment, no questions asked."
  },
  {
    question: "Do you provide WiFi equipment?",
    answer: "Yes, we provide a complimentary WiFi 6 router with all our plans. For larger homes or businesses, we can recommend mesh systems or enterprise-grade equipment."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 technical support via phone, email, and live chat. Our certified technicians are available around the clock to help with any issues or questions."
  }
];

const Features = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
              Advanced <span className="text-gradient-neon">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the cutting-edge technology and features that make Sappnett 
              the smartest choice for your internet needs.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Features Grid */}
      <section className="py-24 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Why Sappnett <span className="text-gradient-neon">Stands Out</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our network is built with the latest technology to deliver unmatched performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group glass border-neon hover-lift hover:glow-primary p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="p-4 rounded-full bg-gradient-neon glow-primary mx-auto mb-6 w-fit group-hover:pulse-glow">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="text-sm text-muted-foreground flex justify-between">
                        <span>{spec.split(':')[0]}:</span>
                        <span className="text-primary">{spec.split(':')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Technical <span className="text-gradient-neon">Specifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Detailed technical specifications of our network infrastructure and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass border-neon p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {techSpecs.map((spec, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-4 border-b border-muted/20 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="font-medium">{spec.label}</span>
                    <span className="text-gradient-neon font-orbitron font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Animated Tech Icons */}
      <section className="py-24 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold mb-6">
              <span className="text-gradient-neon">Technology</span> Advantages
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-float">
              <div className="p-6 rounded-full bg-gradient-neon glow-primary mb-4">
                <Zap className="h-12 w-12 text-primary-foreground" />
              </div>
              <div className="text-sm font-medium">Fiber Optic</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: "-1s" }}>
              <div className="p-6 rounded-full bg-gradient-neon glow-secondary mb-4">
                <Wifi className="h-12 w-12 text-primary-foreground" />
              </div>
              <div className="text-sm font-medium">WiFi 6E</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: "-2s" }}>
              <div className="p-6 rounded-full bg-gradient-neon glow-accent mb-4">
                <Shield className="h-12 w-12 text-primary-foreground" />
              </div>
              <div className="text-sm font-medium">WPA3 Security</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: "-3s" }}>
              <div className="p-6 rounded-full bg-gradient-neon glow-primary mb-4">
                <Award className="h-12 w-12 text-primary-foreground" />
              </div>
              <div className="text-sm font-medium">Award Winning</div>
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
              Got questions? We've got answers. Find everything you need to know about our services.
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
              <Link to="/contact">
                <Headphones className="mr-2 h-5 w-5" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;