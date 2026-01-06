import { CheckCircle, Target, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "15+ years of experience in education consulting",
  "Personalized counseling for every student",
  "Strong partnerships with top universities",
  "98% visa success rate",
  "Post-arrival support in destination countries",
  "Transparent and ethical practices",
];

const values = [
  {
    icon: Target,
    title: "Student-First Approach",
    description: "Every decision we make is centered around your success and well-being.",
  },
  {
    icon: Heart,
    title: "Passionate Guidance",
    description: "Our counselors are genuinely invested in helping you achieve your dreams.",
  },
  {
    icon: Shield,
    title: "Trusted & Transparent",
    description: "No hidden fees, no false promises. Just honest, reliable guidance.",
  },
];

interface AboutSectionProps {
  onOpenInquiry: () => void;
}

const AboutSection = ({ onOpenInquiry }: AboutSectionProps) => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About ICM</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Your Trusted Partner in
                <span className="text-gradient"> International Education</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Since 2008, ICM has been transforming students' lives by opening doors to world-class education opportunities. We don't just process applications—we build futures.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" variant="secondary" onClick={onOpenInquiry}>
              Book Free Consultation
            </Button>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex gap-5 bg-card rounded-2xl p-6 card-elevated animate-slide-in-right"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Stats Card */}
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="font-display text-3xl font-bold text-secondary">10K+</div>
                  <div className="text-sm opacity-80">Students Placed</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-secondary">50+</div>
                  <div className="text-sm opacity-80">Partner Unis</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-secondary">15+</div>
                  <div className="text-sm opacity-80">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
