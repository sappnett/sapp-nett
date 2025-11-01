import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Signal, Gauge, Router, Activity, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
            className="w-full h-full object-cover object-center sm:object-top"
            style={{
              minWidth: '100%',
              minHeight: '100%'
            }}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          {/* Fallback to gradient background if video fails to load */}
        </video>
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40" />
      </div>

      {/* Background Geometric Patterns */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-10 right-4 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-gradient-surface opacity-20 blur-3xl" />
        <div className="absolute bottom-10 left-4 sm:left-10 w-36 h-36 sm:w-72 sm:h-72 rounded-full bg-gradient-neon opacity-10 blur-2xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-16 sm:py-20">
          
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in max-w-xl mx-auto lg:mx-0 text-center lg:text-left lg:ml-4">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-5xl text-white font-semibold leading-tight">
              Ultra-Fast
              <br />
              Internet & Cable
              <br />
              Solutions
            </h1>

            {/* Subtext */}
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0 font-normal">
              Never worry about internet down or wifi not working again. Lightning-fast fiber internet with 99.9% uptime, unlimited data, and emergency internet troubleshooting support for your home and business.
            </p>

            {/* Customer Stat */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 pt-1">
              <div className="text-2xl sm:text-3xl font-semibold text-white">25K+</div>
              <div className="text-left">
                <div className="text-white font-medium text-xs">satisfied</div>
                <div className="text-white font-medium text-xs">customers</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
              <Button 
                size="default" 
                className="bg-white text-black hover:bg-gray-100 font-medium px-5 py-2 text-sm rounded-lg shadow-sm transition-all w-full sm:w-auto"
                asChild
              >
                <Link to="+18774968608">
                  Check Availability
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-6 pt-6 justify-center lg:justify-start">
              <div className="flex flex-col items-center justify-center bg-white/10 rounded-xl px-3 sm:px-5 py-3 min-w-[90px] sm:min-w-[110px]">
                <div className="text-base sm:text-lg font-bold text-white">25K+</div>
                <div className="text-xs text-gray-300">Customers</div>
              </div>
              <div className="flex flex-col items-center justify-center bg-white/10 rounded-xl px-3 sm:px-5 py-3 min-w-[90px] sm:min-w-[110px]">
                <div className="text-base sm:text-lg font-bold text-green-400">99.9%</div>
                <div className="text-xs text-gray-300">Uptime</div>
              </div>
              <div className="flex flex-col items-center justify-center bg-white/10 rounded-xl px-3 sm:px-5 py-3 min-w-[90px] sm:min-w-[110px]">
                <div className="text-base sm:text-lg font-bold text-blue-400">100+</div>
                <div className="text-xs text-gray-300">Cities Covered</div>
              </div>
              <div className="flex flex-col items-center justify-center bg-white/10 rounded-xl px-3 sm:px-5 py-3 min-w-[90px] sm:min-w-[110px]">
                <div className="text-base sm:text-lg font-bold text-purple-400">250+</div>
                <div className="text-xs text-gray-300">HD TV Channels</div>
              </div>
            </div>
          </div>

          {/* Right Visual Elements */}
          <div className="relative w-full h-[300px] sm:h-[400px] flex items-stretch mt-8 lg:mt-0">
            {/* Floating icon cards around both cards - Hidden on mobile */}
            <div className="hidden sm:block absolute top-2 left-10 animate-float">
              <div className="glass rounded-lg p-2 shadow-lg">
                <Wifi className="h-5 w-5 text-blue-400" />
              </div>
            </div>
            <div className="hidden sm:block absolute top-24 left-32 animate-float-slow">
              <div className="glass rounded-lg p-2 shadow-lg">
                <Router className="h-4 w-4 text-green-400" />
              </div>
            </div>
            <div className="hidden sm:block absolute bottom-10 left-20 animate-float">
              <div className="glass rounded-lg p-2 shadow-lg">
                <Signal className="h-4 w-4 text-purple-400" />
              </div>
            </div>
            <div className="hidden sm:block absolute top-10 right-32 animate-float">
              <div className="glass rounded-lg p-2 shadow-lg">
                <Gauge className="h-5 w-5 text-blue-400" />
              </div>
            </div>
            <div className="hidden sm:block absolute bottom-16 right-16 animate-float-slow">
              <div className="glass rounded-lg p-2 shadow-lg">
                <Activity className="h-4 w-4 text-green-400" />
              </div>
            </div>
            <div className="hidden sm:block absolute bottom-2 right-32 animate-float">
              <div className="glass rounded-lg p-2 shadow-lg">
                <Zap className="h-4 w-4 text-yellow-400" />
              </div>
            </div>
            
            {/* Mobile: Single card stacked, Desktop: Grid layout */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 w-full h-full gap-2">
              {/* Network Status Card */}
              <div className="flex items-center justify-center mb-2 sm:mb-0">
                <div className="glass border-neon rounded-2xl p-3 sm:p-4 w-full max-w-xs sm:w-72 shadow-lg flex flex-col justify-center items-center animate-float">
                  <h3 className="text-sm font-semibold text-white mb-2">Network Status</h3>
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-400">Online</span>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-xl p-3 sm:p-4 text-white relative overflow-hidden mb-2 w-full">
                    <div className="absolute top-2 right-2 text-white/80">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold tracking-wider">987.5</div>
                      <div className="text-xs opacity-80 mt-1">Mbps Download</div>
                    </div>
                    <div className="flex justify-between items-end mt-2 sm:mt-3">
                      <div>
                        <div className="text-xs opacity-80">Upload</div>
                        <div className="text-sm font-bold">45.2 Mbps</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs opacity-80">Ping</div>
                        <div className="text-sm font-bold">2ms</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <div className="bg-white/10 rounded-lg p-2 text-center">
                      <Wifi className="w-4 h-4 mx-auto mb-1 text-green-400" />
                      <div className="text-xs text-white">WiFi</div>
                      <div className="text-xs text-green-400">Strong</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 text-center">
                      <Router className="w-4 h-4 mx-auto mb-1 text-blue-400" />
                      <div className="text-xs text-white">Router</div>
                      <div className="text-xs text-blue-400">Active</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Service Status Card */}
              <div className="flex items-end justify-center sm:justify-end">
                <div className="glass border-neon rounded-2xl p-3 sm:p-4 w-full max-w-xs sm:w-64 shadow-lg mb-0 sm:mb-2 mr-0 sm:mr-2 animate-float">
                  <h4 className="font-semibold text-white mb-2 text-xs">Service Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <Signal className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-xs">Internet</div>
                          <div className="text-gray-400 text-xs">Active</div>
                        </div>
                      </div>
                      <div className="text-green-400 font-semibold text-xs">99.9%</div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <Activity className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-xs">Cable TV</div>
                          <div className="text-gray-400 text-xs">HD Channels</div>
                        </div>
                      </div>
                      <div className="text-blue-400 font-semibold text-xs">250+</div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-purple-500 rounded-full flex items-center justify-center">
                          <Gauge className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-xs">Bandwidth</div>
                          <div className="text-gray-400 text-xs">Unlimited</div>
                        </div>
                      </div>
                      <div className="text-purple-400 font-semibold text-xs">1GB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center glow-primary">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
