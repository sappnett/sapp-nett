import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Wifi, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
	{
		name: "Home Guardian",
		speed: "100 Mbps",
		price: "49",
		popular: false,
		features: [
			"End internet down frustrations forever",
			"No more wifi not working issues",
			"24/7 internet troubleshooting support",
			"Free WiFi 6 router included",
			"Emergency internet problem resolution",
			"30-day money-back guarantee",
		],
	},
	{
		name: "Business Shield",
		speed: "500 Mbps",
		price: "129",
		popular: true,
		features: [
			"Stop internet outages from costing money",
			"Eliminate internet connection problems",
			"Priority internet troubleshooting team",
			"Enterprise-grade equipment included",
			"Instant internet problem resolution",
			"Static IP address",
			"Network security suite",
			"99.9% uptime SLA guarantee",
		],
	},
	{
		name: "Ultimate Fix",
		speed: "1 Gbps",
		price: "199",
		popular: false,
		features: [
			"Never experience internet down again",
			"Bulletproof internet connectivity",
			"Dedicated internet troubleshooting manager",
			"Premium mesh router system",
			"Instant internet problem detection & fix",
			"Multiple static IP addresses",
			"Advanced security package",
			"99.95% uptime guarantee",
		],
	},
];

export function PricingPlans() {
	return (
		<section className="py-12 sm:py-16 lg:py-24 bg-gradient-surface">
			<div className="container mx-auto px-4 sm:px-6 lg:px-4">
				<div className="text-center mb-12 sm:mb-16 animate-fade-in">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-4 sm:mb-6">
						Stop{" "}
						<span className="text-gradient-neon">Internet Problems</span>
					</h2>
					<p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
						End internet down frustrations and wifi not working issues with our reliable 
						internet connection plans. No more internet outages or connectivity problems.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
					{plans.map((plan, index) => (
						<Card
							key={index}
							className={`relative p-4 sm:p-6 lg:p-8 glass hover-lift transition-all duration-500 animate-slide-up ${
								plan.popular
									? "border-neon glow-primary scale-100 lg:scale-105"
									: "border-muted hover:border-neon hover:glow-primary"
							}`}
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							{plan.popular && (
								<div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
									<div className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-neon rounded-full text-xs sm:text-sm font-semibold">
										<Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
										Most Popular
									</div>
								</div>
							)}

							<div className="text-center mb-6 sm:mb-8">
								<h3 className="text-xl sm:text-2xl font-orbitron font-bold mb-2">
									{plan.name}
								</h3>
								<div className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">
									{plan.speed}
								</div>
								<div className="flex items-baseline justify-center">
									<span className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-gradient-neon">
										${plan.price}
									</span>
									<span className="text-muted-foreground ml-2 text-sm sm:text-base">
										/month
									</span>
								</div>
							</div>

							<ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
								{plan.features.map((feature, featureIndex) => (
									<li key={featureIndex} className="flex items-start">
										<Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
										<span className="text-xs sm:text-sm text-muted-foreground">
											{feature}
										</span>
									</li>
								))}
							</ul>

							<Button
								className={`w-full ${
									plan.popular
										? "bg-gradient-neon glow-primary hover:glow-secondary"
										: "variant-outline border-neon hover:bg-primary/10"
								}`}
								size="lg"
							>
								Get Started
							</Button>
						</Card>
					))}
				</div>

				<div className="text-center mt-8 sm:mt-12">
					<p className="text-muted-foreground mb-4 text-sm sm:text-base px-4">
						Still experiencing internet problems? Our internet troubleshooting experts 
						will create a custom solution to end your connectivity issues permanently.
					</p>
					<Button variant="outline" className="border-neon hover:bg-primary/10 text-sm sm:text-base" asChild>
						<Link to="/contact">Get Emergency Internet Support</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}