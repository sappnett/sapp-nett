import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, Zap, Wifi, Shield, Settings, CheckCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const coreServices = [
	{
		icon: Home,
		title: "Residential Internet - No More Outages",
		description:
			"End internet down situations and wifi not working problems at home. Perfect for streaming, gaming, and working without internet connection issues.",
		features: [
			"Up to 1 Gbps speeds - No slowdowns",
			"Unlimited data - No throttling",
			"Free WiFi 6 router - No wifi problems",
			"24/7 emergency internet support",
		],
		price: "Starting at $49/month",
	},
	{
		icon: Building,
		title: "Business Internet - Zero Downtime",
		description:
			"Enterprise-grade connectivity that prevents internet service disruptions and eliminates wifi outage emergencies for your business.",
		features: [
			"Scalable bandwidth - No connection limits",
			"Static IP addresses - Consistent connectivity",
			"99.9% uptime SLA - No internet down time",
			"Emergency internet troubleshooting team",
		],
		price: "Starting at $129/month",
	},
	{
		icon: Zap,
		title: "Fiber Optic - Internet Trouble Free",
		description: "Pure fiber-optic technology that eliminates internet problems and provides the fastest speeds without wifi connectivity issues.",
		features: [
			"Symmetrical speeds - No upload issues",
			"Ultra-low latency - No connection delays",
			"Future-proof technology - No obsolescence",
			"Professional installation - No setup problems",
		],
		price: "Starting at $199/month",
	},
	{
		icon: Wifi,
		title: "Wireless Solutions - No Dead Zones",
		description:
			"High-speed wireless internet that prevents wifi not working situations in areas where fiber isn't available yet.",
		features: [
			"5G wireless technology",
			"Quick deployment",
			"Flexible coverage",
			"Weather-resistant equipment",
		],
		price: "Starting at $79/month",
	},
];

const addOnServices = [
	{
		icon: Settings,
		title: "Professional Installation",
		description: "Expert installation and setup by certified technicians.",
		price: "FREE with annual plans",
	},
	{
		icon: Shield,
		title: "Network Security",
		description: "Advanced firewall and security monitoring for businesses.",
		price: "$29/month",
	},
	{
		icon: Home,
		title: "Smart Home Setup",
		description: "Complete smart home integration and WiFi optimization.",
		price: "$99 one-time",
	},
];

const Services = () => {
	return (
		<div className="pt-16">
			{/* Hero Section */}
			<section className="py-24 bg-gradient-hero">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center animate-fade-in">
						<h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
							Stop{" "}
							<span className="text-gradient-neon">Internet Problems</span> Forever
						</h1>
						<p className="text-xl text-muted-foreground leading-relaxed">
							End your internet down emergencies, wifi not working issues, and connection problems with our reliable internet services. No more internet outages or wireless network disruptions.
						</p>
					</div>
				</div>
			</section>

			{/* Core Services */}
			<section className="py-24 bg-gradient-surface">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
							No More{" "}
							<span className="text-gradient-neon">Internet Outages</span> or WiFi Issues
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Our reliable internet solutions eliminate wifi not working problems, internet connection issues, and emergency internet troubleshooting needs.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
						{coreServices.map((service, index) => (
							<Card
								key={index}
								className="glass border-neon hover-lift p-8 animate-slide-up"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className="flex items-start gap-6">
									<div className="p-4 rounded-full bg-gradient-neon glow-primary">
										<service.icon className="h-8 w-8 text-primary-foreground" />
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-orbitron font-bold mb-3">
											{service.title}
										</h3>
										<p className="text-muted-foreground mb-6">
											{service.description}
										</p>

										<ul className="space-y-2 mb-6">
											{service.features.map((feature, featureIndex) => (
												<li
													key={featureIndex}
													className="flex items-center text-sm"
												>
													<CheckCircle className="h-4 w-4 text-primary mr-2" />
													{feature}
												</li>
											))}
										</ul>

										<div className="flex items-center justify-between">
											<span className="text-lg font-semibold text-gradient-neon">
												{service.price}
											</span>
											<Button className="bg-gradient-neon glow-primary hover:glow-secondary" asChild>
												<Link to="/contact">Learn More</Link>
											</Button>
										</div>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Add-on Services */}
			<section className="py-24 bg-background/50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
							Add-on <span className="text-gradient-neon">Services</span>
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Enhance your internet experience with our professional services and
							add-ons.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{addOnServices.map((service, index) => (
							<Card
								key={index}
								className="glass border-neon hover-lift p-8 text-center animate-scale-in"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className="p-4 rounded-full bg-gradient-neon glow-primary mx-auto mb-6 w-fit">
									<service.icon className="h-8 w-8 text-primary-foreground" />
								</div>
								<h3 className="text-xl font-orbitron font-bold mb-4">
									{service.title}
								</h3>
								<p className="text-muted-foreground mb-6">
									{service.description}
								</p>
								<div className="text-lg font-semibold text-gradient-neon mb-4">
									{service.price}
								</div>
								<Button
									variant="outline"
									className="border-neon hover:bg-primary/10"
									asChild
								>
									<Link to="/contact">Add to Plan</Link>
								</Button>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Service Guarantee */}
			<section className="py-24 bg-gradient-surface">
				<div className="container mx-auto px-4">
					<div className="text-center">
						<h2 className="text-4xl font-orbitron font-bold mb-8">
							Our{" "}
							<span className="text-gradient-neon">Service Guarantee</span>
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
							<div className="text-center">
								<div className="text-4xl font-orbitron font-bold text-gradient-neon mb-2">
									99.9%
								</div>
								<div className="text-lg font-semibold mb-2">
									Uptime Guarantee
								</div>
								<div className="text-muted-foreground">
									Reliable service you can count on
								</div>
							</div>
							<div className="text-center">
								<div className="text-4xl font-orbitron font-bold text-gradient-neon mb-2">
									24/7
								</div>
								<div className="text-lg font-semibold mb-2">
									Expert Support
								</div>
								<div className="text-muted-foreground">
									Round-the-clock technical assistance
								</div>
							</div>
							<div className="text-center">
								<div className="text-4xl font-orbitron font-bold text-gradient-neon mb-2">
									48hrs
								</div>
								<div className="text-lg font-semibold mb-2">
									Quick Installation
								</div>
								<div className="text-muted-foreground">
									Fast professional setup
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="bg-background py-8">
				<div className="container mx-auto px-4 text-center">
					<p className="text-lg text-primary font-semibold mb-8">
						Call us:{" "}
						<a
							href="tel:+18774195028"
							className="underline hover:text-primary/80 transition"
						>
							+1 (877) 419-5028
						</a>
					</p>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Services;