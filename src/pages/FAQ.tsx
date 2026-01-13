import React, { useState } from "react";
import { Footer } from "@/components/Footer";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const complianceFAQs: FAQItem[] = [
    {
      question: "Are you an official cable or internet service provider?",
      answer: "No. Sappnett is an independent third-party service assistance platform launched in 2026. We are not an ISP, not affiliated with any provider, and do not sell internet plans or cable subscriptions. We provide independent guidance and customer support assistance only."
    },
    {
      question: "Do you sell internet, cable, or streaming plans?",
      answer: "No. We do not sell, activate, or provide internet, cable, or streaming services. Sappnett helps guide and support customers who already have services with providers. We are a third-party assistance platform, not a service provider."
    },
    {
      question: "Do you charge for your services?",
      answer: "Yes. Sappnett charges a separate service fee for our guidance and assistance. This fee is completely separate from and in addition to any charges from your service provider. You continue paying your provider directly for their services."
    },
    {
      question: "Will I still be billed by my service provider?",
      answer: "Yes. Your service provider continues to bill you separately for their services. Our service fees do not affect or replace your provider billing. You will receive separate bills: one from your provider and one from Sappnett for our assistance services."
    },
    {
      question: "Do you need my account passwords or sensitive information?",
      answer: "No. We never request provider account passwords, PINs, or sensitive credentials like Social Security numbers. We never access your provider account directly. Any account modifications must be made by you directly with your service provider."
    },
    {
      question: "Which providers do you support?",
      answer: "We may reference multiple cable, internet, and streaming providers for educational and guidance purposes. We support customers across various providers. However, we have no affiliation with, endorsement from, or partnership with any specific provider. Our support is independent assistance only."
    },
    {
      question: "Are your services refundable?",
      answer: "Yes. Refund requests may be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Eligibility depends on service type and whether assistance has already been delivered. Please review our Refund Policy page for complete details and specific conditions."
    },
    {
      question: "Are you endorsed or authorized by any service provider?",
      answer: "No. Sappnett is not endorsed by, authorized by, sponsored by, or in partnership with any cable, internet, or streaming service provider. We operate independently and our guidance is educational in nature, not official provider support."
    },
    {
      question: "Can you modify, cancel, or activate my provider account?",
      answer: "No. We cannot access, modify, cancel, or activate any provider account. Only you or an authorized representative of your service provider can make account changes. We provide guidance to help you understand your options and assist with troubleshooting."
    },
    {
      question: "What happens if my internet service provider has an outage?",
      answer: "Provider outages and service disruptions are beyond our control and responsibility. These are handled directly by your service provider. We can provide troubleshooting guidance, but for network-level outages, you should contact your provider's technical support. Provider service disruptions do not entitle refunds from Sappnett."
    },
    {
      question: "Is my data secure with Sappnett?",
      answer: "Yes. We take data security seriously and use industry-standard encryption and security practices. However, we want to be clear: we never request or store provider passwords or sensitive credentials. We only collect information necessary to provide our guidance services, as detailed in our Privacy Policy."
    },
    {
      question: "Can you guarantee faster internet speeds or better service quality?",
      answer: "No. Internet speeds and service quality are determined by your service provider's network infrastructure. We provide troubleshooting guidance to help optimize your existing service, but we cannot guarantee results as factors like network conditions, equipment, and location are outside our control."
    },
    {
      question: "What makes Sappnett different from provider customer service?",
      answer: "Sappnett is an independent third-party platform. We focus on educational guidance, troubleshooting assistance, and customer support for service-related questions. We are not affiliated with any provider, so we can provide unbiased guidance across multiple providers without conflicts of interest."
    },
    {
      question: "Do provider logos on your website mean you're affiliated with them?",
      answer: "No. We reference provider logos and names for identification and informational purposes only. This does not indicate affiliation, endorsement, or partnership. All trademarks belong to their respective owners. We use them in accordance with fair use guidelines for educational and informational content."
    },
    {
      question: "How do I contact Sappnett support?",
      answer: "You can reach Sappnett support 24/7 through: Phone: (877) 496-9657, Email: support@sappnett.com, or Live Chat available on our website. When you call, you'll hear: 'Thank you for calling Sappnett, an independent service assistance platform.'"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-surface">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-gradient-neon">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about Sappnett, our services, our independence, and how we help you with 
            internet and cable guidance and support.
          </p>
        </div>

        {/* Compliance Notice */}
        <div className="glass border-neon rounded-2xl p-6 mb-12 bg-primary/5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-primary">Important:</strong> Sappnett is an independent third-party 
            service assistance startup launched in 2026. We are not affiliated with, endorsed by, or 
            sponsored by any cable, internet, or streaming provider. We do not sell services or make 
            changes to provider accounts.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {complianceFAQs.map((item, index) => (
            <div 
              key={index}
              className="glass border-neon rounded-2xl overflow-hidden hover:glow-primary transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
              >
                <h3 className="text-left font-semibold text-primary text-lg leading-tight">
                  {item.question}
                </h3>
                <ChevronDown 
                  className={`h-5 w-5 text-primary flex-shrink-0 ml-4 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-neon/20 bg-gradient-surface/50">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 glass border-neon rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Reach out to our support team anytime. We're available 24/7 to help clarify our services 
            and answer any questions about how we can assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:8774969657"
              className="bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary/80 transition-all"
            >
              Call Us: (877) 496-9657
            </a>
            <a 
              href="/contact"
              className="bg-gradient-neon text-black px-6 py-3 rounded-lg font-semibold hover:glow-primary transition-all"
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
