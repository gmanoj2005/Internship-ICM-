import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "2024 Guide: Studying in the UK Post-Brexit",
    excerpt: "Everything you need to know about student visas, fees, and opportunities for international students in the United Kingdom.",
    image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=400&h=250&fit=crop",
    category: "UK Guide",
    date: "Dec 15, 2024",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Top Scholarships for Indian Students in 2025",
    excerpt: "A comprehensive list of fully-funded and partial scholarships available for Indian students pursuing higher education abroad.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
    category: "Scholarships",
    date: "Dec 10, 2024",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "How to Write a Winning Statement of Purpose",
    excerpt: "Expert tips and real examples to help you craft an SOP that stands out to admission committees worldwide.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop",
    category: "Application Tips",
    date: "Dec 5, 2024",
    readTime: "10 min read",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Latest Insights</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Study Abroad
              <span className="text-gradient"> Resources</span>
            </h2>
          </div>
          <Button variant="outline">
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-card rounded-2xl overflow-hidden card-elevated animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-medium group/link"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
