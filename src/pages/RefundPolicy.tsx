import React from "react";
import { Footer } from "@/components/Footer";

const RefundPolicy = () => (
  <div className="min-h-screen bg-gradient-surface">
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gradient-neon">Refund Policy</h1>
      
      {/* Disclosure Section */}
      <div className="glass border-neon rounded-2xl p-6 mb-8 bg-primary/5">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-primary">Important Disclosure:</strong> Sappnett is an independent 
          third-party service assistance startup. Our refunds apply only to our service fees, not to 
          any provider charges. Provider service disruptions and issues are beyond our control and do 
          not entitle you to refunds from Sappnett.
        </p>
      </div>

      <div className="glass border-neon rounded-2xl p-8 space-y-6">
        <p className="text-muted-foreground mb-6">
          <strong>Effective Date:</strong> January 2026<br />
          <strong>Last Updated:</strong> January 2026
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">1. Refund Window & Eligibility</h2>
          <p className="text-muted-foreground mb-4">
            Refund requests for Sappnett assistance services can be submitted within 7 to 15 days of 
            service purchase, depending on the type of assistance provided. Refund eligibility depends on 
            service type and whether assistance has already been delivered.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Refund requests must be submitted within the 7-15 day window from service date</li>
            <li>Eligibility depends on the specific service type purchased</li>
            <li>Eligibility depends on whether assistance has been delivered or used</li>
            <li>Account must be in good standing with no outstanding balances</li>
            <li>Please review the full policy below for specific conditions applicable to your service</li>
          </ul>
          <p className="text-muted-foreground mt-4 font-semibold">
            For complete eligibility details specific to your service, see the "Refund Eligibility" section below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">2. Refund Eligibility</h2>
          <p className="text-muted-foreground mb-4">
            To be eligible for a refund, the following conditions must be met:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Refund request must be made within 7 to 15 days of service purchase (varies by service type)</li>
            <li>For guidance services: refund available if assistance has not yet been provided</li>
            <li>For ongoing support services: refund eligibility depends on service duration and usage</li>
            <li>Account must be in good standing (no outstanding balances)</li>
            <li>Refund applies only to Sappnett service fees, not provider charges</li>
            <li>Cancellation must be completed through official Sappnett channels</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">3. Refund Process</h2>
          <p className="text-muted-foreground mb-4">
            To request a refund for Sappnett assistance services, follow these steps:
          </p>
          <div className="space-y-3 ml-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <p className="text-muted-foreground">Contact our support team at <a href="tel:8774969657" className="underline text-primary">(877) 496-9657</a> or email support@sappnett.com</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <p className="text-muted-foreground">Provide your account information, service dates, and reason for refund request</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <p className="text-muted-foreground">Our team will review your request and confirm eligibility based on your service type</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              <p className="text-muted-foreground">If approved, refund will be processed within 7-10 business days to original payment method</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">4. What is Refundable</h2>
          <p className="text-muted-foreground mb-4">
            The following are eligible for refund:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Sappnett service fees within the 7-15 day refund window</li>
            <li>Assistance service charges (if service not yet delivered)</li>
            <li>Setup or enrollment fees for Sappnett services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">5. What is NOT Refundable</h2>
          <p className="text-muted-foreground mb-4">
            The following are NOT refundable:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Any charges from your service provider (cable, internet, or streaming)</li>
            <li>Provider service disruptions, outages, or service quality issues</li>
            <li>Services already fully delivered and completed</li>
            <li>Assistance provided after the initial request (partial usage)</li>
            <li>Any claims related to provider billing or account issues</li>
            <li>Refunds requested after the 7-15 day refund window has closed</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">6. Important Provider Disclaimer</h2>
          <p className="text-muted-foreground mb-4">
            As an independent third-party service assistance platform:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Sappnett refunds are for our assistance services only</li>
            <li>Provider billing, service quality, and outages are not Sappnett's responsibility</li>
            <li>We cannot control provider service delivery or network performance</li>
            <li>Provider service issues do not entitle refunds from Sappnett</li>
            <li>For provider billing issues, contact your provider directly</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">7. Contact Information</h2>
          <p className="text-muted-foreground mb-4">
            For refund requests or questions about this policy:
          </p>
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <p className="text-primary font-semibold">Sappnett Refund & Support</p>
            <p className="text-muted-foreground">Email: support@sappnett.com or refunds@sappnett.com</p>
            <p className="text-primary font-semibold">Sappnett Customer Service</p>
            <p className="text-muted-foreground">Email: billing@sappnett.com</p>
            <p className="text-muted-foreground">Phone: <a href="tel:8774969657" className="underline hover:text-primary">(877) 496-9657</a></p>
            <p className="text-muted-foreground">Hours: Monday-Sunday, 24/7 Support</p>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default RefundPolicy;
