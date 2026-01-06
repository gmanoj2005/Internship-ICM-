import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onOpenInquiry: () => void;
}

const CTASection = ({ onOpenInquiry }: CTASectionProps) => {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-secondary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary-foreground rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Begin Your
            <span className="text-secondary block mt-2">International Education Journey?</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Take the first step towards your dream university. Our expert counselors are here to guide you every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="hero" onClick={onOpenInquiry}>
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="xl" variant="heroOutline">
              <Phone className="h-5 w-5" />
              Call: +1 (234) 567-890
            </Button>
          </div>

          <p className="mt-8 text-primary-foreground/70 text-sm">
            ✓ Free Profile Assessment &nbsp;&nbsp; ✓ No Hidden Fees &nbsp;&nbsp; ✓ 15+ Years Experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
