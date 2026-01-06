import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

const HeroSection = ({ onOpenInquiry }: HeroSectionProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-primary-foreground">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 animate-fade-in">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-sm font-medium">Trusted by 10,000+ Students</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Your Gateway to
              <span className="block text-secondary">World-Class Education</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Transform your academic dreams into reality. Expert guidance for studying in top universities across the globe, from course selection to visa success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="xl" variant="hero" onClick={onOpenInquiry}>
                Start Your Journey
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="xl" variant="heroOutline">
                <Play className="h-5 w-5" />
                Watch Success Stories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "50+", label: "Partner Universities" },
                { value: "15+", label: "Countries" },
                { value: "98%", label: "Success Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl md:text-4xl font-bold text-secondary">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="hidden lg:block relative h-[500px]">
            {/* Main Image Card */}
            <div className="absolute top-0 right-0 w-80 h-96 rounded-2xl bg-gradient-to-br from-card to-muted shadow-2xl overflow-hidden animate-fade-in card-elevated">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-primary-foreground font-medium">Study in Top Universities</p>
                <p className="text-primary-foreground/80 text-sm">UK • USA • Canada • Australia</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=500&fit=crop" 
                alt="Students graduating"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Testimonial Card */}
            <div className="absolute bottom-10 left-0 w-72 bg-card rounded-xl p-5 shadow-xl animate-slide-in-right card-elevated" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">MIT, USA</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm italic">
                "ICM made my dream of studying at MIT a reality. Their guidance was invaluable!"
              </p>
            </div>

            {/* Stats Floating Card */}
            <div className="absolute top-20 left-10 bg-secondary text-secondary-foreground rounded-xl p-4 shadow-xl animate-bounce-subtle">
              <div className="font-display text-2xl font-bold">$2M+</div>
              <div className="text-sm opacity-90">Scholarships Secured</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
