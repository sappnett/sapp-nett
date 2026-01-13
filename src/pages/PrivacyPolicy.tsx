import React from "react";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-gradient-surface">
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gradient-neon">Privacy Policy</h1>
      
      {/* Disclosure Section */}
      <div className="glass border-neon rounded-2xl p-6 mb-8 bg-primary/5">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-primary">Important Disclosure:</strong> Sappnett is an independent 
          third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed 
          by, or sponsored by any cable, internet, or streaming service provider. We do not request or 
          store provider account passwords or sensitive credentials. We respect your privacy and handle 
          your data securely.
        </p>
      </div>

      <div className="glass border-neon rounded-2xl p-8 space-y-6">
        <p className="text-muted-foreground mb-6">
          <strong>Effective Date:</strong> January 2026<br />
          <strong>Last Updated:</strong> January 2026
        </p>
        
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            We collect information you provide directly to us when you use our service assistance platform, 
            contact customer support, or communicate with us. We collect only information necessary to provide 
            our guidance and support services.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Personal information (name, email, phone number, optional address)</li>
            <li>Payment information (credit card details for service fees only)</li>
            <li>Service assistance records (support interactions, guidance provided)</li>
            <li>Communication preferences and contact history</li>
            <li><strong>What we DO NOT collect:</strong> Provider account passwords, PINs, Social Security numbers, or sensitive credentials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use the information we collect to provide and improve our service assistance platform:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Provide guidance and assistance with internet troubleshooting and cable service questions</li>
            <li>Process payments for our assistance services</li>
            <li>Manage your account and service history</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Send service notifications, updates, and educational content</li>
            <li>Improve our platform and user experience</li>
            <li><strong>What we don't do:</strong> We do not modify, access, or manage your provider accounts</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">3. Information Sharing and Disclosure</h2>
          <p className="text-muted-foreground mb-4">
            We do not sell, trade, or share your personal information with third parties without your explicit 
            consent, except in limited circumstances:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
            <li>When required by law, legal process, or regulatory authority</li>
            <li>To protect our rights, property, safety, or that of our users</li>
            <li>In connection with a business transfer, merger, or acquisition</li>
            <li><strong>Important:</strong> We never share your information with service providers without your consent</li>
            <li><strong>Provider accounts:</strong> We never access or share information about your provider accounts</li>
          </ul>
        </section>

        <section>
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
          <h2 className="text-2xl font-semibold text-primary mb-4">5. Third-Party Provider Independence</h2>
          <p className="text-muted-foreground mb-4">
            As an independent third-party platform, we maintain clear boundaries regarding provider data:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>We are not affiliated with any cable, internet, or streaming provider</li>
            <li>We do not have access to your provider account information</li>
            <li>We do not store or transmit your provider credentials</li>
            <li>We do not modify or access your provider billing or account status</li>
            <li>Your provider privacy practices remain separate from ours</li>
          </ul>
        </section>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">6. Your Rights</h2>
          <p className="text-muted-foreground mb-4">
            You have certain rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Access and review your personal information held by Sappnett</li>
            <li>Request corrections to inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability for information you provided to us</li>
            <li>Right to know what information we collect and how we use it</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">7. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have questions about this Privacy Policy, our data practices, or our independence, 
            please contact us:
          </p>
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <p className="text-primary font-semibold">Sappnett Privacy & Compliance</p>
            <p className="text-muted-foreground">Email: privacy@sappnett.com</p>
            <p className="text-muted-foreground">Phone: <a href="tel:8774969657" className="underline hover:text-primary">(877) 496-9657</a></p>
            <p className="text-muted-foreground text-sm mt-3">
              We are an independent service assistance startup. Your data security and privacy rights are 
              our priority. We never request or access provider credentials.
            </p>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default PrivacyPolicy;
