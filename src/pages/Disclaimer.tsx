import React from "react";
import { Footer } from "@/components/Footer";
import { AlertCircle } from "lucide-react";

const Disclaimer = () => (
  <div className="min-h-screen bg-gradient-surface">
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-8 flex items-center gap-3">
        <AlertCircle className="h-10 w-10 text-primary" />
        <h1 className="text-4xl font-bold text-gradient-neon">Important Disclaimer</h1>
      </div>
      
      <div className="glass border-neon rounded-2xl p-8 space-y-6">
        {/* Main Disclosure */}
        <section className="bg-yellow-900/20 border border-yellow-700/40 rounded-lg p-6 mb-8">
          <p className="text-lg font-semibold text-yellow-300 mb-4">✓ WHAT WE DO (WHAT WE ARE)</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Provide general informational support related to internet, broadband, WiFi, and cable TV services</li>
            <li>Offer independent guidance on understanding service options and common connectivity issues</li>
            <li>Assist customers in navigating service provider processes and account features</li>
            <li>Charge a separate service fee for our independent assistance platform</li>
            <li>Operate as a third-party assistance provider, never representing any service provider</li>
          </ul>
        </section>

        <section className="bg-red-900/20 border border-red-700/40 rounded-lg p-6 mb-8">
          <p className="text-lg font-semibold text-red-300 mb-4">✗ WHAT WE DO NOT DO (WHAT WE ARE NOT)</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>We are NOT an Internet Service Provider (ISP) - we do NOT sell internet plans</li>
            <li>We are NOT a cable company - we do NOT sell cable subscriptions</li>
            <li>We do NOT provide official customer support for any service provider</li>
            <li>We are NOT affiliated with, authorized by, or endorsed by any provider</li>
            <li>We do NOT access, modify, cancel, or activate provider accounts</li>
            <li>We do NOT request or store provider passwords, credentials, or SSN</li>
            <li>We do NOT provide guaranteed technical fixes or promised results</li>
            <li>We do NOT represent any service provider or act as their agent</li>
          </ul>
        </section>

        {/* Who We Are - Main Statement */}
        <section className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-8">
          <p className="text-lg font-semibold text-primary mb-4">Who We Are</p>
          <p className="text-muted-foreground leading-relaxed">
            <strong>Sappnett is an independent third-party service assistance provider.</strong> We are not affiliated with, authorized by, or endorsed by any cable, internet, or service provider. We do not sell internet plans, cable subscriptions, or streaming services. We provide independent guidance and assistance only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Service Nature</h2>
          <p className="text-muted-foreground mb-4">
            Sappnett operates as a third-party service assistance platform. Our services include:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Guidance and support for internet troubleshooting and connectivity issues</li>
            <li>Assistance with cable service navigation and optimization</li>
            <li>Educational resources for streaming service selection and setup</li>
            <li>General customer service support for third-party provider account questions</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            All services are provided for a separate service fee, distinct from any provider charges.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Provider Independence</h2>
          <p className="text-muted-foreground mb-4">
            We maintain complete independence from all service providers:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>We do not represent or act as an agent for any provider</li>
            <li>We are not authorized to modify, cancel, or activate provider accounts</li>
            <li>Provider logos and branding are used for reference and identification only</li>
            <li>Any provider names or trademarks are referenced with appropriate attribution</li>
            <li>Our recommendations are independent and educational in nature</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Account Security & Privacy</h2>
          <p className="text-muted-foreground mb-4">
            Your account security is paramount:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>We never request your provider account passwords or credentials</li>
            <li>We never request sensitive information such as Social Security numbers or PINs</li>
            <li>We do not have access to your provider account or billing information</li>
            <li>All communications are handled securely and confidentially</li>
            <li>Any account modifications must be made directly with your provider</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Billing & Charges</h2>
          <p className="text-muted-foreground mb-4">
            Understanding our charges:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Sappnett charges a separate service fee for our assistance platform</li>
            <li>Your provider continues to charge separately for their services</li>
            <li>Our fees are distinct and additional to any provider billing</li>
            <li>You will continue to receive separate bills from your service provider</li>
            <li>Provider service disruptions do not entitle you to refunds from Sappnett</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Service Limitations</h2>
          <p className="text-muted-foreground mb-4">
            Important limitations to understand:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>We cannot guarantee resolution of provider network issues or outages</li>
            <li>Provider service quality and availability are controlled by the provider, not Sappnett</li>
            <li>Internet speeds and service quality depend on your provider's network infrastructure</li>
            <li>We do not provide official support on behalf of any service provider</li>
            <li>For critical account issues, contact your service provider directly</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">No Partnership or Endorsement</h2>
          <p className="text-muted-foreground mb-4">
            Clear statement of independence:
          </p>
          <p className="text-muted-foreground mb-4">
            Sappnett is not affiliated with, endorsed by, authorized by, or in partnership with any 
            cable, internet, or streaming service provider. Any reference to provider services, features, 
            or programs is for informational and educational purposes only. Providers do not endorse or 
            sponsor our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Trademarks & Attribution</h2>
          <p className="text-muted-foreground mb-4">
            All trademarks, service marks, and provider names mentioned on our website belong to their 
            respective owners. Use of these names is for identification and reference purposes only and 
            does not imply endorsement or partnership. We display these references in compliance with fair 
            use guidelines for informational and educational content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Contact & Questions</h2>
          <p className="text-muted-foreground mb-4">
            If you have questions about our independence, services, or this disclaimer:
          </p>
          <div className="mt-4 p-4 bg-primary/10 rounded-lg space-y-2">
            <p className="text-primary font-semibold">Sappnett Compliance & Support</p>
            <p className="text-muted-foreground">Email: compliance@sappnett.com</p>
            <p className="text-muted-foreground">Phone: <a href="tel:8774969657" className="underline hover:text-primary">(877) 496-9657</a></p>
            <p className="text-muted-foreground text-sm mt-3">
              <strong>Call Greeting:</strong> "Thank you for calling Sappnett, an independent service assistance platform."
            </p>
          </div>
        </section>

        <section className="border-t border-muted/20 pt-6">
          <p className="text-xs text-muted-foreground">
            <strong>Effective Date:</strong> January 2026<br />
            This disclaimer was last updated January 2026. Sappnett reserves the right to modify this 
            disclaimer at any time. Continued use of our services following the posting of changes constitutes 
            your acceptance of those changes.
          </p>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default Disclaimer;
