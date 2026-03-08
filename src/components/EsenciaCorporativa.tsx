import { Target, Eye } from "lucide-react";

const valores = [
  "Calidad humana y profesional",
  "Honestidad",
  "Actitud de servicio",
  "Trabajo en equipo",
  "Respeto",
];

const EsenciaCorporativa = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Nuestra Esencia Corporativa
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Misión */}
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-colors">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Misión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser la empresa líder en refrigeración industrial en Colombia, reconocida por excelencia
              en diseño, instalación y mantenimiento de cuartos fríos, aplicando tecnología de punta
              y minimizando costos sin sacrificar calidad.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-colors">
            <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Visión</h3>
            <p className="text-muted-foreground leading-relaxed">
              En los próximos cinco años proyectarnos como empresa de alto reconocimiento nacional,
              expandiendo servicios a diversos sectores industriales, con mejora continua y un servicio
              ágil, confiable y centrado en el cliente.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="text-center">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-6">Nuestros Valores</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {valores.map((valor) => (
              <span
                key={valor}
                className="px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
              >
                {valor}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EsenciaCorporativa;
