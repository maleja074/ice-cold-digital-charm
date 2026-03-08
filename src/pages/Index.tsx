import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Soluciones from "@/components/Soluciones";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <QuienesSomos />
      <Soluciones />
    </div>
  );
};

export default Index;
