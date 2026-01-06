import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    universities: "150+ Universities",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
    popular: ["Oxford", "Cambridge", "Imperial College"],
  },
  {
    country: "United States",
    flag: "🇺🇸",
    universities: "200+ Universities",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=300&fit=crop",
    popular: ["MIT", "Stanford", "Harvard"],
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    universities: "100+ Universities",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop",
    popular: ["Toronto", "UBC", "McGill"],
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    universities: "45+ Universities",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop",
    popular: ["Melbourne", "Sydney", "ANU"],
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    universities: "80+ Universities",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop",
    popular: ["TU Munich", "Heidelberg", "LMU"],
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
    universities: "20+ Universities",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&h=300&fit=crop",
    popular: ["Auckland", "Otago", "Victoria"],
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Study Destinations</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Explore Top Education
            <span className="text-gradient"> Destinations</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover opportunities in the world's leading education hubs with our expert country-specific guidance.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={destination.country}
              className="group relative bg-card rounded-2xl overflow-hidden card-elevated animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.country}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-3xl">{destination.flag}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary-foreground">
                      {destination.country}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">{destination.universities}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-3">Popular Universities:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.popular.map((uni) => (
                    <span
                      key={uni}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {uni}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="w-full group/btn">
                  Explore {destination.country}
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
