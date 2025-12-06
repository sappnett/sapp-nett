import React from "react";
import { Footer } from "@/components/Footer";

const TermsAndConditions = () => (
  <div className="min-h-screen bg-gradient-surface">
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gradient-neon">Terms and Conditions</h1>
      <div className="glass border-neon rounded-2xl p-8 space-y-6">
        <p className="text-muted-foreground mb-6">
          <strong>Effective Date:</strong> January 1, 2025<br />
          <strong>Last Updated:</strong> January 1, 2025
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            By using Sappnett's internet and cable services, you agree to be bound by these Terms and Conditions. 
            If you do not agree with any part of these terms, you may not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">2. Service Description</h2>
          <p className="text-muted-foreground mb-4">
            Sappnett provides high-speed internet and cable television services to residential and business customers. 
            Our services include:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Fiber-optic internet connectivity up to 1 Gbps</li>
            <li>Cable television with HD and premium channels</li>
            <li>24/7 technical support and customer service</li>
            <li>Equipment rental and installation services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">3. Acceptable Use Policy</h2>
          <p className="text-muted-foreground mb-4">
            You agree to use our services in compliance with all applicable laws and regulations. 
            Prohibited activities include:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Illegal downloading or distribution of copyrighted material</li>
            <li>Network abuse, hacking, or unauthorized access attempts</li>
            <li>Sending spam or malicious software</li>
            <li>Activities that violate privacy rights of others</li>
            <li>Reselling or redistributing services without authorization</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">4. Payment and Billing</h2>
          <p className="text-muted-foreground mb-4">
            Payment terms and conditions:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Monthly charges are due on the billing date each month</li>
            <li>Late payments may incur additional fees</li>
            <li>Service may be suspended for non-payment</li>
            <li>Installation and equipment fees may apply</li>
            <li>Taxes and regulatory fees are additional</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">5. Service Availability and Performance</h2>
          <p className="text-muted-foreground mb-4">
            While we strive to provide reliable service, we cannot guarantee uninterrupted availability:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Service may be affected by maintenance, upgrades, or technical issues</li>
            <li>Internet speeds may vary based on network conditions</li>
            <li>Weather and external factors may impact service quality</li>
            <li>We target 99.9% network uptime but cannot guarantee it</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">6. Equipment and Installation</h2>
          <p className="text-muted-foreground mb-4">
            Equipment and installation terms:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Equipment remains property of Sappnett and must be returned upon service termination</li>
            <li>Customer is responsible for equipment damage or loss</li>
            <li>Professional installation included with most service plans</li>
            <li>Customer must provide suitable installation environment</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">7. Privacy and Data Protection</h2>
          <p className="text-muted-foreground mb-4">
            We respect your privacy and protect your personal information in accordance with our Privacy Policy. 
            By using our services, you consent to our collection and use of your information as described in our Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">8. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">
            Sappnett's liability is limited to the monthly service charges. We are not responsible for:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Indirect, incidental, or consequential damages</li>
            <li>Loss of data, business, or profits</li>
            <li>Service interruptions beyond our control</li>
            <li>Third-party services or content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">9. Termination</h2>
          <p className="text-muted-foreground mb-4">
            Either party may terminate service with 30 days written notice. Sappnett may terminate service immediately for:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Non-payment of fees</li>
            <li>Violation of acceptable use policy</li>
            <li>Fraudulent or illegal activity</li>
            <li>Breach of these terms and conditions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">10. Contact Information</h2>
          <p className="text-muted-foreground mb-4">
            For questions about these Terms and Conditions:
          </p>
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <p className="text-primary font-semibold">Sappnett Legal Department</p>
            <p className="text-muted-foreground">Email: legal@sappnett.com</p>
            <p className="text-muted-foreground">Phone: <a href="tel:8664550846" className="underline hover:text-primary">(866) 455-0846</a></p>
            <p className="text-muted-foreground">Address: 123 Network Drive, Tech City, TC 12345</p>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default TermsAndConditions;
