import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const coverageAreas = [
	{ name: "Digital City", status: "active", customers: "15,000+" },
	{ name: "Tech Valley", status: "active", customers: "12,500+" },
	{ name: "Innovation District", status: "active", customers: "8,200+" },
	{ name: "Future Town", status: "active", customers: "6,800+" },
	{ name: "Cyber Heights", status: "expanding", customers: "Coming Q1 2025" },
	{ name: "Smart Villages", status: "expanding", customers: "Coming Q2 2025" },
	{ name: "Metro Connect", status: "planned", customers: "Coming 2025" },
	{ name: "Rural Link", status: "planned", customers: "Coming 2025" },
];

const getStatusInfo = (status: string) => {
	switch (status) {
		case "active":
			return {
				icon: CheckCircle,
				color: "text-green-500",
				bg: "bg-green-500/20",
				label: "Active Coverage",
			};
		case "expanding":
			return {
				icon: Clock,
				color: "text-yellow-500",
				bg: "bg-yellow-500/20",
				label: "Expanding Soon",
			};
		case "planned":
			return {
				icon: AlertCircle,
				color: "text-blue-500",
				bg: "bg-blue-500/20",
				label: "Planned Coverage",
			};
		default:
			return {
				icon: MapPin,
				color: "text-muted-foreground",
				bg: "bg-muted/20",
				label: "Unknown",
			};
	}
};

export function CoverageMap() {
	return (
		<section className="py-24 bg-gradient-surface">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
						No Internet Outage{" "}
						<span className="text-gradient-neon">In Your Area</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Check if Sappnett's reliable internet service is available in your location. Our expanding fiber network prevents internet down situations and wifi outage emergencies across multiple cities.
					</p>
				</div>

				<div className="max-w-6xl mx-auto">
					{/* Map Visualization */}
					<Card className="glass border-neon p-8 mb-12 animate-slide-up">
						<div className="text-center mb-8">
							<div className="relative w-96 h-64 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-neon/30 overflow-hidden">
								{/* Simulated Map Background */}
								<div className="absolute inset-0 bg-grid-white/[0.02] bg-grid opacity-20" />

								{/* Coverage Areas as Dots */}
								<div className="absolute top-1/4 left-1/3 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
								<div
									className="absolute top-1/3 right-1/4 w-4 h-4 bg-green-500 rounded-full animate-pulse"
									style={{ animationDelay: "0.5s" }}
								/>
								<div
									className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-green-500 rounded-full animate-pulse"
									style={{ animationDelay: "1s" }}
								/>
								<div
									className="absolute top-1/2 center w-4 h-4 bg-green-500 rounded-full animate-pulse"
									style={{ animationDelay: "1.5s" }}
								/>

								{/* Expanding Areas */}
								<div className="absolute top-2/3 right-1/3 w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
								<div
									className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
									style={{ animationDelay: "0.7s" }}
								/>

								{/* Planned Areas */}
								<div className="absolute top-1/6 right-1/6 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
								<div
									className="absolute bottom-1/6 left-1/6 w-2 h-2 bg-blue-500 rounded-full animate-pulse"
									style={{ animationDelay: "0.3s" }}
								/>

								{/* Network Lines */}
								<svg className="absolute inset-0 w-full h-full">
									<defs>
										<linearGradient
											id="lineGradient"
											x1="0%"
											y1="0%"
											x2="100%"
											y2="0%"
										>
											<stop
												offset="0%"
												stopColor="hsl(200 100% 50%)"
												stopOpacity="0.6"
											/>
											<stop
												offset="50%"
												stopColor="hsl(280 100% 70%)"
												stopOpacity="0.4"
											/>
											<stop
												offset="100%"
												stopColor="hsl(320 100% 70%)"
												stopOpacity="0.6"
											/>
										</linearGradient>
									</defs>
									<path
										d="M 64 64 Q 192 32 320 96"
										stroke="url(#lineGradient)"
										strokeWidth="2"
										fill="none"
										className="animate-pulse"
									/>
									<path
										d="M 96 160 Q 224 128 288 192"
										stroke="url(#lineGradient)"
										strokeWidth="2"
										fill="none"
										className="animate-pulse"
										style={{ animationDelay: "0.5s" }}
									/>
								</svg>

								{/* Legend Overlay */}
								<div className="absolute bottom-4 right-4 text-xs text-muted-foreground">
									Sappnett Fiber Network
								</div>
							</div>
						</div>

						<div className="text-center">
							<h3 className="text-xl font-orbitron font-bold mb-4">
								Regional Coverage Overview
							</h3>
							<p className="text-muted-foreground mb-6">
								Our fiber-optic network spans across 15+ cities and growing, with
								over 5,000km of fiber infrastructure.
							</p>

							{/* Legend */}
							<div className="flex justify-center gap-6 text-sm">
								<div className="flex items-center gap-2">
									<div className="w-3 h-3 bg-green-500 rounded-full" />
									<span>Active Coverage</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-3 h-3 bg-yellow-500 rounded-full" />
									<span>Expanding</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-3 h-3 bg-blue-500 rounded-full" />
									<span>Planned</span>
								</div>
							</div>
						</div>
					</Card>

					{/* Coverage Areas List */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{coverageAreas.map((area, index) => {
							const statusInfo = getStatusInfo(area.status);
							return (
								<Card
									key={index}
									className="glass border-neon hover-lift p-6 animate-scale-in"
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									<div className="flex items-start gap-4">
										<div className={`p-2 rounded-full ${statusInfo.bg}`}>
											<statusInfo.icon
												className={`h-5 w-5 ${statusInfo.color}`}
											/>
										</div>
										<div className="flex-1">
											<h4 className="font-orbitron font-bold mb-1">
												{area.name}
											</h4>
											<p
												className={`text-xs mb-2 ${statusInfo.color}`}
											>
												{statusInfo.label}
											</p>
											<p className="text-sm text-muted-foreground">
												{area.customers}
											</p>
										</div>
									</div>
								</Card>
							);
						})}
					</div>

					{/* Call to Action */}
					<div className="text-center mt-16">
						<Card className="glass border-neon p-8 max-w-2xl mx-auto">
							<h3 className="text-2xl font-orbitron font-bold mb-4">
								Prevent Internet Outage{" "}
								<span className="text-gradient-neon">In Your Area</span>
							</h3>
							<p className="text-muted-foreground mb-6">
								Stop dealing with internet down emergencies and wifi not working situations. Check if our reliable fiber internet service is available to end your internet connection problems forever.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
								<input
									type="text"
									placeholder="Enter your zip code to check for outages"
									className="flex-1 px-4 py-3 bg-muted/20 border border-muted rounded-lg focus:border-primary focus:outline-none"
								/>
								<Button className="bg-gradient-neon glow-primary hover:glow-secondary px-6" asChild>
									<Link to="/services">Stop Internet Problems</Link>
								</Button>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}