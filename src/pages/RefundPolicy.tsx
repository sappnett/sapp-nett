import React from "react";
import { Footer } from "@/components/Footer";

const RefundPolicy = () => (
  <div className="min-h-screen bg-gradient-surface">
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gradient-neon">Refund Policy</h1>
      <div className="glass border-neon rounded-2xl p-8 space-y-6">
        <p className="text-muted-foreground mb-6">
          <strong>Effective Date:</strong> January 1, 2025<br />
          <strong>Last Updated:</strong> January 1, 2025
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">1. 30-Day Money-Back Guarantee</h2>
          <p className="text-muted-foreground mb-4">
            We stand behind our service quality. If you're not completely satisfied with your Sappnett internet service, 
            you may request a full refund within 30 days of your service activation.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Full refund of monthly service fees paid</li>
            <li>Refund of installation fees (if applicable)</li>
            <li>No questions asked policy for the first 30 days</li>
            <li>Quick processing within 5-7 business days</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">2. Refund Eligibility</h2>
          <p className="text-muted-foreground mb-4">
            To be eligible for a refund, the following conditions must be met:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Request must be made within 30 days of service activation</li>
            <li>Account must be in good standing with no outstanding balances</li>
            <li>Equipment must be returned in original condition</li>
            <li>Service cancellation must be completed through official channels</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">3. Refund Process</h2>
          <p className="text-muted-foreground mb-4">
            To request a refund, follow these simple steps:
          </p>
          <div className="space-y-3 ml-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <p className="text-muted-foreground">Contact our customer service team at <a href="tel:+18883140268" className="underline text-primary">(888) 314-0268</a></p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <p className="text-muted-foreground">Provide your account information and reason for refund</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <p className="text-muted-foreground">Schedule equipment return pickup (if applicable)</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              <p className="text-muted-foreground">Receive refund within 5-7 business days after equipment return</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">4. Equipment Return</h2>
          <p className="text-muted-foreground mb-4">
            All Sappnett-provided equipment must be returned for a full refund:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Modem/Router and power adapters</li>
            <li>Cable TV boxes and remotes</li>
            <li>All cables and accessories</li>
            <li>Equipment must be in working condition</li>
            <li>Original packaging preferred but not required</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">5. Non-Refundable Items</h2>
          <p className="text-muted-foreground mb-4">
            The following items are non-refundable:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Third-party services and subscriptions</li>
            <li>Premium channel packages (after first 30 days)</li>
            <li>Custom installation work</li>
            <li>Damaged or missing equipment fees</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">6. Contact Information</h2>
          <p className="text-muted-foreground mb-4">
            For refund requests or questions about this policy:
          </p>
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <p className="text-primary font-semibold">Sappnett Customer Service</p>
            <p className="text-muted-foreground">Email: billing@sappnett.com</p>
            <p className="text-muted-foreground">Phone: <a href="tel:+18883140268" className="underline hover:text-primary">(888) 314-0268</a></p>
            <p className="text-muted-foreground">Hours: Monday-Sunday, 24/7 Support</p>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default RefundPolicy;
