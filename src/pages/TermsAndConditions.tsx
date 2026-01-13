import React from "react";
import { Footer } from "@/components/Footer";

const TermsAndConditions = () => (
  <div className="min-h-screen bg-gradient-surface">
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gradient-neon">Terms and Conditions</h1>
      
      {/* Disclosure Section */}
      <div className="glass border-neon rounded-2xl p-6 mb-8 bg-primary/5">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-primary">Important Disclosure:</strong> Sappnett is an independent 
          third-party service assistance startup, launched in 2026, and is NOT an internet service provider. 
          We do not sell, activate, or provide cable, internet, or streaming services. We provide independent 
          guidance and assistance only. You continue paying service providers directly for their services.
        </p>
      </div>

      <div className="glass border-neon rounded-2xl p-8 space-y-6">
        <p className="text-muted-foreground mb-6">
          <strong>Effective Date:</strong> January 2026<br />
          <strong>Last Updated:</strong> January 2026
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">1. Who We Are</h2>
          <p className="text-muted-foreground mb-4">
            By using Sappnett, you acknowledge and agree to these Terms and Conditions. Sappnett is an 
            independent third-party service assistance platform, NOT an internet service provider, cable 
            provider, or streaming service. We provide guidance, support, and assistance to customers regarding 
            their third-party service accounts. If you do not agree with any part of these terms, you may not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">2. Service Description</h2>
          <p className="text-muted-foreground mb-4">
            Sappnett provides independent third-party service assistance and guidance, including:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Guidance and support for internet connectivity troubleshooting</li>
            <li>Assistance with cable service navigation and optimization</li>
            <li>Educational support for streaming service selection and setup</li>
            <li>General customer support for service account questions</li>
            <li>24/7 support and guidance services</li>
            <li><strong>What we do NOT do:</strong> We do not sell, activate, or modify service provider accounts</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">3. Service Limitations & Independence</h2>
          <p className="text-muted-foreground mb-4">
            You acknowledge and understand the following limitations:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Sappnett is NOT affiliated with any service provider</li>
            <li>We cannot modify, cancel, activate, or access your service provider account</li>
            <li>Service provider issues, outages, and billing are controlled by the provider, not Sappnett</li>
            <li>We do not request or store provider account passwords or sensitive credentials</li>
            <li>Provider service quality, speed, and availability are not Sappnett's responsibility</li>
            <li>Our guidance is educational; final account decisions rest with you and your provider</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">4. Prohibited Uses</h2>
          <p className="text-muted-foreground mb-4">
            You agree not to use our services for:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Illegal activities or services</li>
            <li>Attempting to impersonate a service provider</li>
            <li>Attempting to access other users' accounts or data</li>
            <li>Harassment, fraud, or deceptive practices</li>
            <li>Violating any applicable laws or regulations</li>
            <li>Any activity that misrepresents Sappnett as an official provider</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">5. Payment and Billing</h2>
          <p className="text-muted-foreground mb-4">
            Important billing information:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Sappnett charges a separate service fee for our assistance services</li>
            <li>Service fees are distinct from and in addition to provider charges</li>
            <li>You will continue to receive separate bills from your service provider</li>
            <li>Payment for Sappnett services does not affect provider billing or service</li>
            <li>Failure to pay Sappnett fees may result in service suspension</li>
            <li>Refund eligibility is detailed in our separate Refund Policy (7-15 day window)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">6. Service Availability and Limitations</h2>
          <p className="text-muted-foreground mb-4">
            Important service limitations:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Sappnett provides guidance and support, not guarantee of results</li>
            <li>Service provider network issues and outages are beyond our control</li>
            <li>Internet speeds depend on your provider's infrastructure, not Sappnett</li>
            <li>Service quality and availability are controlled by your service provider</li>
            <li>We are not responsible for provider service disruptions</li>
            <li>Sappnett service may experience maintenance or temporary unavailability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">7. Privacy and Data Protection</h2>
          <p className="text-muted-foreground mb-4">
            We respect your privacy and protect your personal information in accordance with our Privacy Policy. 
            Important privacy commitments:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>We do NOT request or store service provider passwords</li>
            <li>We do NOT request sensitive credentials like Social Security numbers</li>
            <li>We do NOT access or store your provider account information</li>
            <li>Your information is encrypted and secured</li>
            <li>For details, see our complete Privacy Policy</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">8. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">
            To the maximum extent permitted by law:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Sappnett's total liability is limited to service fees paid</li>
            <li>We are not liable for indirect or consequential damages</li>
            <li>We are not liable for loss of data, profits, or business interruption</li>
            <li>We are not liable for provider service disruptions or outages</li>
            <li>We are not liable for third-party service quality or performance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">9. Disclaimer of Warranties</h2>
          <p className="text-muted-foreground mb-4">
            <strong>Sappnett services are provided on an "as is" basis.</strong> We disclaim all warranties, 
            including any implied warranties of merchantability, fitness for a particular purpose, or non-infringement. 
            We do not guarantee:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Uninterrupted or error-free service</li>
            <li>Resolution of provider issues or service disruptions</li>
            <li>Specific results from our guidance and support</li>
            <li>Compatibility with all devices or systems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">10. Service Termination</h2>
          <p className="text-muted-foreground mb-4">
            Either party may terminate service with notice as follows:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>You may cancel with written notice at any time</li>
            <li>Sappnett may terminate immediately for non-payment or Terms violation</li>
            <li>Sappnett may terminate immediately for fraudulent or illegal activity</li>
            <li>Refund eligibility upon termination is governed by our Refund Policy</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">11. Trademark & Brand Attribution</h2>
          <p className="text-muted-foreground mb-4">
            All provider names, logos, and trademarks referenced on our site belong to their respective owners. 
            Our use of these references is for identification and educational purposes only and does not constitute 
            affiliation, endorsement, or partnership with any provider.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">12. Contact Information</h2>
          <p className="text-muted-foreground mb-4">
            For questions about these Terms and Conditions:
          </p>
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <p className="text-primary font-semibold">Sappnett Legal Department</p>
            <p className="text-muted-foreground">Email: legal@sappnett.com</p>
            <p className="text-muted-foreground">Phone: <a href="tel:8774969657" className="underline hover:text-primary">(877) 496-9657</a></p>
            <p className="text-muted-foreground">Address: 123 Network Drive, Tech City, TC 12345</p>
            <p className="text-muted-foreground text-sm mt-3">
              <strong>Call Greeting:</strong> "Thank you for calling Sappnett, an independent service assistance platform."
            </p>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default TermsAndConditions;
