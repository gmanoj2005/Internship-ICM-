import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    university: "University of Toronto",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote: "ICM made my dream of studying in Canada a reality. From course selection to visa approval, their guidance was exceptional. I'm now pursuing my Masters at U of T!",
    program: "MS Computer Science",
  },
  {
    id: 2,
    name: "Rahul Patel",
    university: "Imperial College London",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote: "The scholarship guidance from ICM helped me secure a 50% tuition waiver. Their team's expertise in UK applications is unmatched. Highly recommend!",
    program: "MSc Data Science",
  },
  {
    id: 3,
    name: "Ananya Reddy",
    university: "MIT",
    country: "United States",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote: "I never thought MIT was possible until ICM showed me how. Their personalized approach and SOP guidance were game-changers. Forever grateful!",
    program: "PhD Robotics",
  },
  {
    id: 4,
    name: "Arjun Mehta",
    university: "University of Melbourne",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    quote: "ICM's pre-departure briefing prepared me for everything—from accommodation to cultural adjustments. Made my transition to Australia so smooth!",
    program: "MBA",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Hear From Our
            <span className="text-gradient"> Global Achievers</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from students who transformed their careers with our guidance.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 card-elevated">
            <Quote className="h-12 w-12 text-secondary/30 mb-6" />
            
            <div className="min-h-[200px] flex flex-col justify-between">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-display italic">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-secondary/20"
                  />
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[activeIndex].program}
                    </p>
                    <p className="text-secondary font-medium text-sm">
                      {testimonials[activeIndex].university}, {testimonials[activeIndex].country}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-secondary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
