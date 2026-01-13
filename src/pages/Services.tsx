import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeadphonesIcon, BookOpen, Wrench, ShieldCheck, AlertCircle, LifeBuoy } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const assistanceServices = [
	{
		icon: Wrench,
		title: "Internet Troubleshooting & Optimization",
		description:
			"Expert guidance for diagnosing connection issues, wifi problems, and network optimization across any provider.",
		features: [
			"Connection diagnostics and troubleshooting",
			"WiFi performance optimization",
			"Equipment setup and configuration",
			"Speed optimization recommendations",
			"Outage reporting and escalation",
			"24/7 technical support"
		],
	},
	{
		icon: BookOpen,
		title: "Service Navigation Assistance",
		description:
			"Independent guidance to help you understand, navigate, and maximize your cable, internet, and streaming services.",
		features: [
			"Plan comparison and analysis",
			"Service feature explanation",
			"Bill review and explanation",
			"Contract term clarification",
			"Service upgrade/downgrade guidance",
			"Account optimization advice"
		],
	},
	{
		icon: ShieldCheck,
		title: "Cable & Streaming Support",
		description:
			"Third-party assistance for navigating cable packages, streaming services, and entertainment options.",
		features: [
			"Channel package guidance",
			"Streaming service recommendations",
			"Bundle optimization assistance",
			"Service combination strategies",
			"Compatibility information",
			"Setup and installation support"
		],
	},
	{
		icon: LifeBuoy,
		title: "24/7 Customer Support",
		description:
			"Round-the-clock independent assistance for all your service-related questions and concerns.",
		features: [
			"Phone support: (877) 496-9657",
			"Email support: support@sappnett.com",
			"Live chat assistance",
			"Rapid response times",
			"Expert technicians",
			"Problem resolution support"
		],
	},
];

const howItWorks = [
	{
		step: 1,
		title: "Contact Sappnett",
		description: "Reach out via phone, email, or live chat with any questions about your service."
	},
	{
		step: 2,
		title: "Expert Guidance",
		description: "Our independent experts provide unbiased advice based on your specific situation."
	},
	{
		step: 3,
		title: "Actionable Solutions",
		description: "Receive clear recommendations you can implement directly or discuss with your provider."
	},
	{
		step: 4,
		title: "Ongoing Support",
		description: "Continue receiving assistance as you navigate your services with our 24/7 team."
	},
];

const Services = () => {
	return (
		<div className="pt-16">
			{/* Hero Section */}
			<section className="py-24 bg-gradient-hero">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center animate-fade-in">
						{/* Important Disclaimer - Above Fold */}
						<div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-4 mb-8 flex gap-3 items-start">
							<AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
							<div className="text-left">
								<p className="text-sm font-semibold text-yellow-700">Important Disclosure</p>
								<p className="text-xs text-yellow-600 leading-tight">Sappnett is NOT an internet service provider and does NOT sell internet, cable, or streaming services. We are an independent third-party assistance platform charging separate service fees. See our <Link to="/disclaimer" className="underline hover:text-yellow-500">Disclaimer</Link> and <Link to="/faq" className="underline hover:text-yellow-500">FAQ</Link>.</p>
							</div>
						</div>

						<h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
							Expert <span className="text-gradient-neon">Service Assistance</span>
						</h1>
						<p className="text-xl text-muted-foreground leading-relaxed">
							Sappnett provides independent, expert guidance and 24/7 support for customers navigating cable, 
							internet, and streaming services. We help you troubleshoot issues, understand your options, and 
							optimize your existing services.
						</p>
					</div>
				</div>
			</section>

			{/* Core Services */}
			<section className="py-24 bg-gradient-surface">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
							Our <span className="text-gradient-neon">Assistance Services</span>
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Comprehensive, independent support across all aspects of your cable, internet, and streaming services.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
						{assistanceServices.map((service, index) => {
							const Icon = service.icon;
							return (
								<Card key={index} className="glass border-neon hover-lift p-8 flex flex-col">
									<Icon className="h-12 w-12 text-primary mb-6 glow-primary" />
									<h3 className="text-2xl font-orbitron font-bold mb-3">{service.title}</h3>
									<p className="text-muted-foreground mb-6">{service.description}</p>
									<ul className="space-y-2 text-muted-foreground text-sm mb-6 flex-grow">
										{service.features.map((feature, idx) => (
											<li key={idx} className="flex items-start gap-2">
												<span className="text-primary font-bold">•</span>
												<span>{feature}</span>
											</li>
										))}
									</ul>
									<Button className="w-full bg-gradient-neon glow-primary hover:glow-secondary hover-lift" asChild>
										<a href="tel:8774969657">Get Assistance</a>
									</Button>
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="py-24 bg-background/50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
							How It <span className="text-gradient-neon">Works</span>
						</h2>
					</div>

					<div className="max-w-5xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
							{howItWorks.map((item, index) => (
								<div key={index} className="relative">
									<Card className="glass border-neon p-6 text-center h-full flex flex-col justify-between">
										<div>
											<div className="w-12 h-12 rounded-full bg-gradient-neon glow-primary flex items-center justify-center mx-auto mb-4">
												<span className="font-orbitron font-bold text-primary-foreground">{item.step}</span>
											</div>
											<h3 className="text-lg font-orbitron font-bold mb-3">{item.title}</h3>
											<p className="text-sm text-muted-foreground">{item.description}</p>
										</div>
									</Card>
									{index < howItWorks.length - 1 && (
										<div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-neon glow-primary" />
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Important Clarity Section */}
			<section className="py-24 bg-gradient-surface">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-12 text-center">
							What Makes Us <span className="text-gradient-neon">Different</span>
						</h2>
						
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<Card className="glass border-primary/50 p-6 bg-primary/5">
								<h3 className="text-lg font-bold text-primary mb-3">✓ Independent Platform</h3>
								<p className="text-muted-foreground text-sm">
									We are completely independent from all service providers, offering unbiased guidance 
									that serves YOUR interests, not provider interests.
								</p>
							</Card>
							
							<Card className="glass border-primary/50 p-6 bg-primary/5">
								<h3 className="text-lg font-bold text-primary mb-3">✓ No Provider Affiliation</h3>
								<p className="text-muted-foreground text-sm">
									We are not affiliated with, endorsed by, or authorized by any cable, internet, or 
									streaming service provider. We maintain complete neutrality.
								</p>
							</Card>
							
							<Card className="glass border-primary/50 p-6 bg-primary/5">
								<h3 className="text-lg font-bold text-primary mb-3">✓ Separate Service Fees</h3>
								<p className="text-muted-foreground text-sm">
									We charge a separate service fee for our assistance. Your provider continues billing 
									you separately for their services. Two distinct bills.
								</p>
							</Card>
							
							<Card className="glass border-primary/50 p-6 bg-primary/5">
								<h3 className="text-lg font-bold text-primary mb-3">✓ We Don't Access Your Account</h3>
								<p className="text-muted-foreground text-sm">
									We never request passwords, credentials, or sensitive information. We cannot access your 
									provider account. You maintain control.
								</p>
							</Card>

							<Card className="glass border-primary/50 p-6 bg-primary/5">
								<h3 className="text-lg font-bold text-primary mb-3">✓ 24/7 Expert Support</h3>
								<p className="text-muted-foreground text-sm">
									Round-the-clock guidance from experts who understand multiple providers and can offer 
									truly independent recommendations.
								</p>
							</Card>

							<Card className="glass border-primary/50 p-6 bg-primary/5">
								<h3 className="text-lg font-bold text-primary mb-3">✓ Refund Policy</h3>
								<p className="text-muted-foreground text-sm">
									Unsatisfied with our assistance? Request a refund within 7-15 days of purchase. See our
									<Link to="/refund-policy" className="underline"> Refund Policy</Link> for details.
								</p>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 bg-background/50">
				<div className="container mx-auto px-4 text-center">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-4xl font-orbitron font-bold mb-6">
							Ready for <span className="text-gradient-neon">Expert Assistance</span>?
						</h2>
						<p className="text-xl text-muted-foreground mb-8">
							Get independent, expert guidance for your cable, internet, and streaming services. 
							Available 24/7 for your convenience.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" className="bg-gradient-neon glow-primary hover:glow-secondary hover-lift" asChild>
								<a href="tel:8774969657">Call Now: (877) 496-9657</a>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<Link to="/contact">Request Help</Link>
							</Button>
						</div>
						<p className="text-muted-foreground text-sm mt-6">
							Email: support@sappnett.com | Hours: 24/7 Support Available
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Services;