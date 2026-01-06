import { BookOpen, Building2, FileCheck, Plane, Award, Users } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Course Discovery",
    description: "Find the perfect course that aligns with your career goals and academic interests across thousands of programs worldwide.",
  },
  {
    icon: Building2,
    title: "University Selection",
    description: "Get personalized recommendations for universities based on your profile, budget, and career aspirations.",
  },
  {
    icon: FileCheck,
    title: "Admission Support",
    description: "End-to-end application assistance including SOP writing, LOR guidance, and document preparation.",
  },
  {
    icon: Plane,
    title: "Visa Guidance",
    description: "Expert visa counseling with high success rates. We prepare you for interviews and handle documentation.",
  },
  {
    icon: Award,
    title: "Scholarship Assistance",
    description: "Access exclusive scholarship opportunities and receive guidance on securing financial aid for your studies.",
  },
  {
    icon: Users,
    title: "Pre-Departure Support",
    description: "Comprehensive briefings on accommodation, banking, culture, and everything you need before you fly.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Complete Support for Your
            <span className="text-gradient"> Study Abroad Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From finding the right course to landing in your dream country, we're with you every step of the way.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 card-elevated animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
