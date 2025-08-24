import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Success from "@/components/Success";
import GlobalImpact from "@/components/GlobalImpact";
import Application from "@/components/Application";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Programs />
      <Success />
      <GlobalImpact />
      <Application />
      <Footer />
    </div>
  );
};

export default Index;
