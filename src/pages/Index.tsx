import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Soluciones from "@/components/Soluciones";
import Mantenimiento from "@/components/Mantenimiento";
import EsenciaCorporativa from "@/components/EsenciaCorporativa";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <QuienesSomos />
      <Soluciones />
      <Mantenimiento />
      <EsenciaCorporativa />
      <Contacto />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
