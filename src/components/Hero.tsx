import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-cold-room.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={heroBg}
        alt="Cuarto frío industrial"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      {/* Content */}
      <div className="relative z-10 container text-center px-4 pt-20">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight tracking-tight text-primary-foreground max-w-4xl mx-auto animate-fade-in-up">
          Refrigeramos para Conservar{" "}
          <span className="text-primary">Calidad, Trabajo y Vida</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto opacity-0 animate-fade-in-up [animation-delay:200ms]">
          Más de 20 años diseñando, instalando y manteniendo soluciones
          integrales de refrigeración industrial a nivel nacional
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up [animation-delay:400ms]">
          <a href="#contacto">
            <Button variant="hero" size="lg" className="px-10 py-6">
              Solicitar Cotización
            </Button>
          </a>
          <Button variant="heroOutline" size="lg" className="px-10 py-6">
            Ver Servicios
          </Button>
        </div>
      </div>

      {/* Bottom frost gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
