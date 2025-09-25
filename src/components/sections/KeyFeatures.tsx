import { Card } from "@/components/ui/card";
import { Database, Wrench, Wifi, Shield } from "lucide-react";

const keyFeatures = [
	{
		icon: Database,
		title: "No Internet Connection Limits",
		description:
			"Unlimited data means no more internet trouble due to data caps. Stream, work, and browse without worrying about connection throttling or internet service disruption.",
		highlight: "Truly Unlimited",
	},
	{
		icon: Wrench,
		title: "Emergency Setup & Repair",
		description:
			"Professional installation and emergency internet troubleshooting by certified technicians. When your internet is down, we'll get you back online fast.",
		highlight: "24/7 Support",
	},
	{
		icon: Wifi,
		title: "No More WiFi Problems",
		description:
			"Advanced WiFi 6 routers eliminate wifi not working issues and wifi connection drops. Superior coverage prevents wireless network down situations.",
		highlight: "Latest Technology",
	},
	{
		icon: Shield,
		title: "Outage-Resistant Network",
		description:
			"Enterprise-grade infrastructure prevents internet outages with redundant connections and automatic failover protection against service disruptions.",
		highlight: "Maximum Uptime",
	},
];

export function KeyFeatures() {
	return (
		<section className="py-12 sm:py-16 lg:py-24 bg-gradient-surface">
			<div className="container mx-auto px-4 sm:px-6 lg:px-4">
				<div className="text-center mb-12 sm:mb-16 animate-fade-in">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-4 sm:mb-6">
						Stop{" "}
						<span className="text-gradient-neon">Internet Issues</span> Today
					</h2>
					<p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
						Every Sappnett plan includes advanced features to prevent internet problems, wifi outages, and connection failures. No more emergency internet troubleshooting needed.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
					{keyFeatures.map((feature, index) => (
						<Card
							key={index}
							className="group glass border-neon hover-lift hover:glow-primary p-4 sm:p-6 lg:p-8 animate-slide-up"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
								<div className="flex-shrink-0 mx-auto sm:mx-0">
									<div className="p-3 sm:p-4 rounded-full bg-gradient-neon glow-primary group-hover:pulse-glow">
										<feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
									</div>
								</div>

								<div className="flex-1 text-center sm:text-left">
									<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
										<h3 className="text-lg sm:text-xl font-orbitron font-bold group-hover:text-primary transition-colors">
											{feature.title}
										</h3>
										<span className="px-3 py-1 text-xs font-medium bg-gradient-neon text-primary-foreground rounded-full mx-auto sm:mx-0 w-fit">
											{feature.highlight}
										</span>
									</div>

									<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
										{feature.description}
									</p>
								</div>
							</div>
						</Card>
					))}
				</div>

				{/* Additional Benefits Grid */}
				<div className="mt-12 sm:mt-16 lg:mt-20">
					<div className="text-center mb-8 sm:mb-12">
						<h3 className="text-xl sm:text-2xl font-orbitron font-bold mb-4">
							Plus Many More{" "}
							<span className="text-gradient-neon">Benefits</span>
						</h3>
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
						<div className="text-center p-3 sm:p-4 glass rounded-lg border-neon hover-lift">
							<div className="text-lg sm:text-2xl font-orbitron font-bold text-gradient-neon mb-1 sm:mb-2">
								24/7
							</div>
							<div className="text-xs sm:text-sm text-muted-foreground">
								Technical Support
							</div>
						</div>
						<div className="text-center p-3 sm:p-4 glass rounded-lg border-neon hover-lift">
							<div className="text-lg sm:text-2xl font-orbitron font-bold text-gradient-neon mb-1 sm:mb-2">
								99.9%
							</div>
							<div className="text-xs sm:text-sm text-muted-foreground">Uptime SLA</div>
						</div>
						<div className="text-center p-3 sm:p-4 glass rounded-lg border-neon hover-lift">
							<div className="text-lg sm:text-2xl font-orbitron font-bold text-gradient-neon mb-1 sm:mb-2">
								30-Day
							</div>
							<div className="text-xs sm:text-sm text-muted-foreground">Money Back</div>
						</div>
						<div className="text-center p-3 sm:p-4 glass rounded-lg border-neon hover-lift">
							<div className="text-lg sm:text-2xl font-orbitron font-bold text-gradient-neon mb-1 sm:mb-2">
								FREE
							</div>
							<div className="text-xs sm:text-sm text-muted-foreground">Equipment</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}