import { Award, Users, ShieldCheck, Clock, UserCheck, Wrench, Star } from "lucide-react";

const cards = [
  {
    icon: Award,
    title: "Experiencia",
    desc: "21 años en el mercado, equipo certificado en normas del sector",
  },
  {
    icon: UserCheck,
    title: "Personal capacitado",
    desc: "Certificados en buenas prácticas de refrigeración industrial e instalaciones de R290",
  },
  {
    icon: Star,
    title: "Servicio de calidad",
    desc: "Alta calidad, atención oportuna y soluciones adaptadas a cada cliente",
  },
];

const stats = [
  { value: "20+", label: "Años" },
  { value: "100+", label: "Clientes" },
  { value: "24/7", label: "Servicio" },
  { value: "100%", label: "Compromiso" },
];

const QuienesSomos = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-heading text-primary uppercase tracking-[0.3em] text-sm font-semibold">
            Quiénes Somos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-foreground uppercase">
            Confianza y Experiencia
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text */}
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              En JB Refrigeraciones Industrial S.A.S. contamos con más de 20 años de
              experiencia en el diseño, instalación, operación y mantenimiento de cuartos
              fríos a nivel nacional. Nuestra trayectoria, conocimiento técnico y compromiso
              con la calidad nos han permitido ganarnos la confianza de más de 100 clientes
              satisfechos. Estamos preparados para brindar soluciones rápidas, eficientes y
              adaptadas a las necesidades de cada cliente.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-5">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <card.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="font-heading text-4xl md:text-5xl font-bold text-primary">
                {stat.value}
              </span>
              <span className="block mt-1 text-sm uppercase tracking-widest text-muted-foreground font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
