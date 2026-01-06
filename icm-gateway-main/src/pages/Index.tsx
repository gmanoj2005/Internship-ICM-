import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";
import InquiryModal from "@/components/InquiryModal";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Auto-show inquiry popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("icm-popup-shown");
      if (!hasSeenPopup) {
        setShowPopup(true);
        sessionStorage.setItem("icm-popup-shown", "true");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const openInquiry = () => setIsInquiryOpen(true);
  const closeInquiry = () => {
    setIsInquiryOpen(false);
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenInquiry={openInquiry} />
      
      <main>
        <HeroSection onOpenInquiry={openInquiry} />
        <ServicesSection />
        <DestinationsSection />
        <AboutSection onOpenInquiry={openInquiry} />
        <TestimonialsSection />
        <BlogSection />
        <CTASection onOpenInquiry={openInquiry} />
      </main>

      <Footer />

      {/* Inquiry Modal - triggered by CTA buttons or auto-popup */}
      <InquiryModal isOpen={isInquiryOpen || showPopup} onClose={closeInquiry} />

      {/* Floating Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
