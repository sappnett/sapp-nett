import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
	{
		name: "Sarah Johnson",
		title: "Remote Work Professional",
		location: "Digital City",
		rating: 5,
		text: "Before Sappnett, internet down issues ruined my work calls constantly. Now I never worry about wifi not working during important meetings. Their internet troubleshooting support is incredible!",
		avatar: "SJ",
	},
	{
		name: "Marcus Chen",
		title: "Small Business Owner",
		location: "Tech Valley",
		rating: 5,
		text: "Used to lose thousands when internet connection problems hit our e-commerce site. Since switching to Sappnett, no internet outages, no lost sales. Their internet troubleshooting team prevented disaster!",
		avatar: "MC",
	},
	{
		name: "Emma Rodriguez",
		title: "Content Creator",
		location: "Creative Commons",
		rating: 5,
		text: "Internet problems were killing my channel - uploads failing, streams crashing. Sappnett solved my wifi not working issues permanently. No more internet connectivity problems!",
		avatar: "ER",
	},
	{
		name: "David Thompson",
		title: "Gaming Enthusiast",
		location: "Gamer's Paradise",
		rating: 5,
		text: "Tired of internet down ruining ranked matches? Sappnett ended my internet connection problems forever. No lag, no disconnects, just pure gaming perfection!",
		avatar: "DT",
	},
	{
		name: "Lisa Wang",
		title: "Family of 5",
		location: "Suburban Heights",
		rating: 5,
		text: "With kids always saying 'wifi not working!' and work calls dropping, internet problems were a nightmare. Sappnett's reliable connection ended our internet troubleshooting days!",
		avatar: "LW",
	},
];

export function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	useEffect(() => {
		if (!isAutoPlaying) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % testimonials.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [isAutoPlaying]);

	const goToNext = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
		setIsAutoPlaying(false);
	};

	const goToPrevious = () => {
		setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
		setIsAutoPlaying(false);
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
		setIsAutoPlaying(false);
	};

	return (
		<section className="py-12 sm:py-16 lg:py-24 bg-gradient-surface">
			<div className="container mx-auto px-4 sm:px-6 lg:px-4">
				<div className="text-center mb-12 sm:mb-16 animate-fade-in">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-4 sm:mb-6">
						No More{" "}
						<span className="text-gradient-neon">Internet Problems</span>
					</h2>
					<p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
						Real customers sharing how Sappnett solved their internet down, wifi not working, 
						and internet connection problems permanently.
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					{/* Main Testimonial */}
					<Card className="glass border-neon p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 animate-slide-up">
						<div className="text-center">
							{/* Stars */}
							<div className="flex justify-center mb-4 sm:mb-6">
								{[...Array(testimonials[currentIndex].rating)].map((_, i) => (
									<Star
										key={i}
										className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current"
									/>
								))}
							</div>

							{/* Quote */}
							<blockquote className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 italic">
								"{testimonials[currentIndex].text}"
							</blockquote>

							{/* Author */}
							<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
								<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-neon glow-primary flex items-center justify-center">
									<span className="text-sm font-orbitron font-bold text-primary-foreground">
										{testimonials[currentIndex].avatar}
									</span>
								</div>
								<div className="text-center sm:text-left">
									<div className="font-orbitron font-bold text-sm sm:text-base">
										{testimonials[currentIndex].name}
									</div>
									<div className="text-xs sm:text-sm text-muted-foreground">
										{testimonials[currentIndex].title}
									</div>
									<div className="text-xs sm:text-sm text-primary">
										{testimonials[currentIndex].location}
									</div>
								</div>
							</div>
						</div>
					</Card>

					{/* Navigation Controls */}
					<div className="flex items-center justify-center gap-4 mb-8">
						<Button
							variant="outline"
							size="sm"
							onClick={goToPrevious}
							className="border-neon hover:bg-primary/10"
						>
							<ChevronLeft className="w-4 h-4" />
						</Button>

						{/* Dots */}
						<div className="flex gap-2">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => goToSlide(index)}
									className={`w-3 h-3 rounded-full transition-all duration-300 ${
										index === currentIndex
											? "bg-gradient-neon glow-primary"
											: "bg-muted hover:bg-muted-foreground"
									}`}
								/>
							))}
						</div>

						<Button
							variant="outline"
							size="sm"
							onClick={goToNext}
							className="border-neon hover:bg-primary/10"
						>
							<ChevronRight className="w-4 h-4" />
						</Button>
					</div>

					{/* Mini Testimonials Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
						{testimonials.slice(0, 3).map((testimonial, index) => (
							<Card
								key={index}
								className={`glass p-4 sm:p-6 text-center hover-lift cursor-pointer transition-all duration-300 ${
									index === currentIndex
										? "border-neon glow-primary"
										: "border-muted hover:border-neon"
								}`}
								onClick={() => goToSlide(index)}
							>
								<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-neon mx-auto mb-3 flex items-center justify-center">
									<span className="text-xs font-orbitron font-bold text-primary-foreground">
										{testimonial.avatar}
									</span>
								</div>
								<div className="font-orbitron font-bold text-sm mb-1">
									{testimonial.name}
								</div>
								<div className="text-xs text-muted-foreground mb-3">
									{testimonial.title}
								</div>
								<div className="flex justify-center mb-2">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="w-3 h-3 text-yellow-400 fill-current"
										/>
									))}
								</div>
								<p className="text-xs text-muted-foreground line-clamp-3">
									{testimonial.text}
								</p>
							</Card>
						))}
					</div>

					{/* Overall Rating */}
					<div className="text-center mt-8 sm:mt-12">
						<div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 glass rounded-full border-neon">
							<div className="flex">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
									/>
								))}
							</div>
							<span className="text-base sm:text-lg font-orbitron font-bold">4.9/5</span>
							<span className="text-muted-foreground text-sm sm:text-base">
								from 2,847 reviews
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}