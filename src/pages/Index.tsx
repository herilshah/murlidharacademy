import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import VideoShowcase from "@/components/VideoShowcase";
import AmoebaSection from "@/components/AmoebaSection";
import PricingSection from "@/components/PricingSection";
import RulesSection from "@/components/RulesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Murlidhar Academy - Premium Dance Studio Rental in Mumbai</title>
        <meta name="description" content="Book Murlidhar Academy, a premium dance studio in Kandivali West, Mumbai. Perfect for rehearsals, shoots, and workshops with professional lighting and 150+ color modes." />
        <meta name="keywords" content="dance studio, mumbai, kandivali, studio rental, dance rehearsal, choreography, content creation, workshop space" />
        <link rel="canonical" href="https://murlidharacademy.com" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <VideoShowcase />
        <AmoebaSection />
        <PricingSection />
        <RulesSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
