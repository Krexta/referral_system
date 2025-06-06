import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero";
import KeyFeatures from "@/components/key-features";
import AboutSection from "@/components/about";
import DetailedFeatures from "@/components/detailed-features";
import PresaleSection from "@/components/presale";
import BlogSection from "@/components/blog";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <KeyFeatures />
      <AboutSection />
      <DetailedFeatures />
      <PresaleSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
