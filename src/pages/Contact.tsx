import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, MessageCircle, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Footer } from "@/components/Footer";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our experts",
    contact: "+1 (877) 419-5028",
    action: "Call Now",
    href: "tel:+18774195028",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your questions",
    contact: "support@sappnett.com",
    action: "Send Email",
    href: "mailto:support@sappnett.com",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our team",
    contact: "Available 24/7",
    action: "Start Chat",
    href: "/contact",
  },
];


const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
              Internet Down? WiFi Not Working? <span className="text-gradient-neon">Get Emergency Help</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Don't let internet problems ruin your day. Our 24/7 emergency internet troubleshooting team is ready to fix wifi outages, internet connection issues, and network problems instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-gradient-neon">Emergency Internet Support</span> Available 24/7
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When your internet is not working or you're experiencing a wifi outage, don't wait. Get instant help from our certified internet troubleshooting experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="glass border-neon hover-lift hover:glow-primary p-8 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-4 rounded-full bg-gradient-neon glow-primary mx-auto mb-6 w-fit">
                  <method.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-4">{method.description}</p>
                <div className="text-lg font-semibold text-gradient-neon mb-4">{method.contact}</div>
                <Button className="bg-gradient-neon glow-primary hover:glow-secondary" asChild>
                  <a href={method.href}>
                    {method.action}
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-orbitron font-bold mb-6">
                Send Us a <span className="text-gradient-neon">Message</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <Card className="glass border-neon p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input 
                      placeholder="Enter your full name" 
                      className="bg-muted/20 border-muted focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-muted/20 border-muted focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="bg-muted/20 border-muted focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest</label>
                    <Select>
                      <SelectTrigger className="bg-muted/20 border-muted">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Internet</SelectItem>
                        <SelectItem value="business">Business Internet</SelectItem>
                        <SelectItem value="fiber">Fiber Optic</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us how we can help you..." 
                    rows={6}
                    className="bg-muted/20 border-muted focus:border-primary"
                  />
                </div>

                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-neon glow-primary hover:glow-secondary hover-lift px-12"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold mb-6">
              Visit Our <span className="text-gradient-neon">Offices</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Stop by one of our locations to speak with our team in person.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-24 bg-background/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-orbitron font-bold mb-6">
            Follow Us on <span className="text-gradient-neon">Social Media</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Stay updated with the latest news, tips, and offers from Sappnett.
          </p>

          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group p-4 rounded-full glass border-neon hover-lift hover:glow-primary transition-all duration-300"
              >
                <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;