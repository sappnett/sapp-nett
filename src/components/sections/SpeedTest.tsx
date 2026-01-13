import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Zap, Download, Upload, Gauge } from "lucide-react";

export function SpeedTest() {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState({ download: 0, upload: 0, ping: 0 });
  const [progress, setProgress] = useState(0);

  const runSpeedTest = async () => {
    setIsRunning(true);
    setProgress(0);
    setResults({ download: 0, upload: 0, ping: 0 });

    // Simulate speed test with progress
    const simulateTest = () => {
      return new Promise<void>((resolve) => {
        let currentProgress = 0;
        const interval = setInterval(() => {
          currentProgress += Math.random() * 15;
          if (currentProgress >= 100) {
            currentProgress = 100;
            clearInterval(interval);
            resolve();
          }
          setProgress(currentProgress);
        }, 200);
      });
    };

    await simulateTest();

    // Simulate realistic results
    const mockResults = {
      download: Math.floor(Math.random() * 300) + 700, // 700-1000 Mbps
      upload: Math.floor(Math.random() * 200) + 800,   // 800-1000 Mbps
      ping: Math.floor(Math.random() * 3) + 2,         // 2-5 ms
    };

    setResults(mockResults);
    setIsRunning(false);
  };

  return (
    <section id="SpeedTest" className="py-12 sm:py-16 lg:py-24 bg-gradient-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-4 sm:mb-6">
            <span className="text-gradient-neon">Service Information</span>{" "}
            <br className="sm:hidden" />
            & Resources
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Explore our interactive tools to learn about your internet and cable services. This informational resource helps you understand service performance and general technical concepts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass border-neon p-4 sm:p-6 lg:p-8 text-center animate-slide-up">
            {!isRunning && results.download === 0 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="p-4 sm:p-6 rounded-full bg-gradient-neon glow-primary mx-auto w-fit">
                  <Gauge className="h-12 w-12 sm:h-16 sm:w-16 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-orbitron font-bold mb-3 sm:mb-4">Explore Service Information</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 px-4">
                    Click below to learn more about internet and cable service concepts. This is informational only and does not provide technical support.
                  </p>
                  <Button 
                    size="lg" 
                    onClick={runSpeedTest} 
                    className="bg-gradient-neon glow-primary hover:glow-secondary hover-lift px-8 sm:px-12 w-full sm:w-auto"
                  >
                    <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Learn More
                  </Button>
                </div>
              </div>
            )}

            {isRunning && (
              <div className="space-y-6 sm:space-y-8">
                <div className="p-4 sm:p-6 rounded-full bg-gradient-neon glow-primary animate-pulse mx-auto w-fit">
                  <Gauge className="h-12 w-12 sm:h-16 sm:w-16 text-primary-foreground animate-spin" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-orbitron font-bold mb-3 sm:mb-4">Loading Information...</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">Please wait while we generate service information.</p>
                  <div className="max-w-md mx-auto px-4">
                    <Progress value={progress} className="h-2 sm:h-3 mb-2" />
                    <p className="text-xs sm:text-sm text-muted-foreground">{Math.round(progress)}% Complete</p>
                  </div>
                </div>
              </div>
            )}

            {!isRunning && results.download > 0 && (
              <div className="space-y-6 sm:space-y-8">
                <div className="p-4 sm:p-6 rounded-full bg-gradient-neon glow-primary mx-auto w-fit">
                  <Zap className="h-12 w-12 sm:h-16 sm:w-16 text-primary-foreground" />
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-orbitron font-bold mb-6 sm:mb-8">Your Speed Test Results</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                    <div className="text-center">
                      <div className="p-3 sm:p-4 rounded-full bg-primary/20 mx-auto mb-3 sm:mb-4 w-fit">
                        <Download className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-orbitron font-bold text-gradient-neon mb-2">
                        {results.download}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Mbps Download</div>
                    </div>

                    <div className="text-center">
                      <div className="p-3 sm:p-4 rounded-full bg-secondary/20 mx-auto mb-3 sm:mb-4 w-fit">
                        <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-orbitron font-bold text-gradient-neon mb-2">
                        {results.upload}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Mbps Upload</div>
                    </div>

                    <div className="text-center">
                      <div className="p-3 sm:p-4 rounded-full bg-accent/20 mx-auto mb-3 sm:mb-4 w-fit">
                        <Gauge className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-orbitron font-bold text-gradient-neon mb-2">
                        {results.ping}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">ms Ping</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 sm:mt-12 p-4 sm:p-6 glass rounded-lg">
                    <h4 className="font-orbitron font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                      Information Generated
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
                      This is informational content for educational purposes. Contact us for independent guidance on your specific internet or cable service needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                      <Button 
                        onClick={runSpeedTest}
                        variant="outline" 
                        className="border-neon hover:bg-primary/10 w-full sm:w-auto"
                      >
                        Learn Again
                      </Button>
                      <Button className="bg-gradient-neon glow-primary hover:glow-secondary w-full sm:w-auto">
                        Get Expert Guidance
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}