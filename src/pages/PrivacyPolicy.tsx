import React from "react";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-gradient-surface">
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gradient-neon">Privacy Policy</h1>
      <div className="glass border-neon rounded-2xl p-8 space-y-6">
        <p className="text-muted-foreground mb-6">
          <strong>Effective Date:</strong> January 1, 2025<br />
          <strong>Last Updated:</strong> January 1, 2025
        </p>
        
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            We collect information you provide directly to us, such as when you create an account, 
            sign up for our internet services, contact customer support, or communicate with us.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Personal information (name, email, phone number, address)</li>
            <li>Payment information (credit card details, billing address)</li>
            <li>Service usage data (bandwidth usage, connection logs)</li>
            <li>Device information (router details, connected devices)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use the information we collect to provide, maintain, and improve our services:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Provide internet and cable services to your location</li>
            <li>Process payments and manage your account</li>
            <li>Troubleshoot technical issues and provide customer support</li>
            <li>Send service notifications and important updates</li>
            <li>Improve our network performance and service quality</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">3. Information Sharing and Disclosure</h2>
          <p className="text-muted-foreground mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>With service providers who assist in our operations</li>
            <li>When required by law or legal process</li>
            <li>To protect our rights, property, or safety</li>
            <li>In connection with a business transfer or merger</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">4. Data Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Encryption of sensitive data during transmission</li>
            <li>Secure storage systems with access controls</li>
            <li>Regular security audits and updates</li>
            <li>Employee training on data protection practices</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">5. Your Rights</h2>
          <p className="text-muted-foreground mb-4">
            You have certain rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Access and review your personal information</li>
            <li>Request corrections to inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability for certain information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">6. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <p className="text-primary font-semibold">Sappnett Customer Privacy</p>
            <p className="text-muted-foreground">Email: privacy@sappnett.com</p>
            <p className="text-muted-foreground">Phone: <a href="tel:8664550846" className="underline hover:text-primary">(866) 455-0846</a></p>
            <p className="text-muted-foreground">Address: 123 Network Drive, Tech City, TC 12345</p>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default PrivacyPolicy;
