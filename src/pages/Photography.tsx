import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import PhotographyHero from "@/components/photography/PhotographyHero";
import PhotographyAbout from "@/components/photography/PhotographyAbout";
import PhotographyServices from "@/components/photography/PhotographyServices";
import PhotographyPortfolio from "@/components/photography/PhotographyPortfolio";
import PhotographyContact from "@/components/photography/PhotographyContact";
import PhotographyFooter from "@/components/photography/PhotographyFooter";
import PhotographyWhatsAppButton from "@/components/photography/PhotographyWhatsAppButton";
import { Helmet } from "react-helmet-async";

const Photography = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Purvi Photography - Professional Photography Services in Mumbai</title>
        <meta name="description" content="Purvi Photography offers professional photography services including weddings, maternity shoots, baby portraits, fashion shoots, special events, and model portfolios in Mumbai." />
        <meta name="keywords" content="photography, wedding photography, maternity photography, baby portraits, fashion photography, mumbai, kandivali, professional photographer" />
        <link rel="canonical" href="https://murlidharacademy.com/photography" />
      </Helmet>
      
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <PhotographyHero />
        <PhotographyAbout />
        <PhotographyServices />
        <PhotographyPortfolio />
        <PhotographyContact />
        <PhotographyFooter />
        <PhotographyWhatsAppButton />
      </main>
    </>
  );
};

export default Photography;


