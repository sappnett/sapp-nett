import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Features", href: "/features" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "FAQ", href: "/faq" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Troubleshooting", href: "/services" },
    { name: "Support Resources", href: "/contact" },
  ],
  support: [
    { name: "Customer Support", href: "/contact" },
    { name: "Technical Help", href: "/contact" },
    { name: "Service Status", href: "/" },
    { name: "Speed Test", href: "/" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/PrivacyPolicy" },
    { name: "Refund Policy", href: "/RefundPolicy" },
    { name: "Terms & Conditions", href: "/TermsAndConditions" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-surface border-t border-neon">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-10 sm:py-12 lg:py-16 border-b border-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-orbitron font-bold mb-4">
              Never Experience <span className="text-gradient-neon">Internet Problems</span> Again
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 px-4">
              Get alerts about internet outage prevention, emergency internet troubleshooting tips, and updates when we expand coverage to prevent internet down situations in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto px-4">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-muted/20 border-muted focus:border-primary text-sm"
              />
              <Button className="bg-gradient-neon glow-primary hover:glow-secondary text-sm w-full sm:w-auto" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-gradient-neon glow-primary">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <span className="text-lg sm:text-xl lg:text-2xl font-orbitron font-bold text-gradient-neon">
                  SAPPNETT
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                End internet down emergencies forever. We prevent wifi not working issues, internet connection problems, and provide 24/7 emergency internet troubleshooting for homes and businesses.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center text-xs sm:text-sm">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                  <span>
                    Emergency Internet Support:{" "}
                    <a 
                      href="tel:8774969657" 
                      className="underline hover:text-primary transition"
                    >
                      (877) 496-9657
                    </a> /
                        <a 
                      href="tel:8774969657" 
                      className="underline hover:text-primary transition"
                    >
                      (877) 496-9657
                    </a>
                  </span>
                </div>
                <div className="flex items-center text-xs sm:text-sm">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                  <span>support@sappnett.com</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="mt-6 sm:mt-0">
              <h4 className="font-orbitron font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 sm:mt-0">
              <h4 className="font-orbitron font-bold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 sm:mt-0">
              <h4 className="font-orbitron font-bold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 sm:mt-0">
              <h4 className="font-orbitron font-bold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 sm:py-10 border-t border-muted/20">
          {/* Mandatory Compliance Disclosure */}
          <div className="mb-8 sm:mb-10 p-4 sm:p-6 bg-yellow-900/20 border border-yellow-700/40 rounded-lg">
            <p className="text-xs sm:text-sm text-yellow-100 leading-relaxed">
              <strong className="text-yellow-300">IMPORTANT DISCLOSURE:</strong> Sappnett is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, cable, or service provider. We do not sell services, modify provider accounts, or represent any service provider. Brand names, if mentioned, are used strictly for informational purposes only. All trademarks belong to their respective owners.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © 2026 Sappnett. All rights reserved. | Independent service assistance platform.
            </div>
            
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="p-2 glass rounded-full border-neon hover:glow-primary transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
