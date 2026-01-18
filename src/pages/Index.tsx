import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";
import DocumentsSection from "@/components/DocumentsSection";
import DonateSection from "@/components/DonateSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ImageGallery />
      <DocumentsSection />
      <DonateSection />
      <Footer />
    </main>
  );
};

export default Index;
