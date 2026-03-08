import { Snowflake, Wind, FlaskConical, Wrench, Settings, Zap } from "lucide-react";
import solCuartosFrios from "@/assets/sol-cuartos-frios.jpeg";
import solEquipos from "@/assets/sol-equipos.jpeg";
import solInterior from "@/assets/sol-interior.jpeg";
import solEstructura from "@/assets/sol-estructura.jpeg";
import solMantenimiento from "@/assets/sol-mantenimiento.jpeg";
import solTableros from "@/assets/sol-tableros.jpeg";

const soluciones = [
  {
    icon: Snowflake,
    title: "Cuartos Fríos",
    description:
      "Asesoramos, diseñamos y ejecutamos el montaje de cuartos fríos para conservación y congelación, bajo cubierta o a la intemperie.",
    image: solCuartosFrios,
  },
  {
    icon: Wind,
    title: "Sistemas de Extracción de Calor (Pre Cooler / Prefríos)",
    description:
      "Diseñamos y fabricamos sistemas que optimizan el intercambio gaseoso y térmico, acelerando la conservación al controlar humedad y temperatura.",
    image: solInterior,
  },
  {
    icon: FlaskConical,
    title: "Cuartos de Fosfinas",
    description:
      "Espacios herméticos especializados para procesos de fumigación con fosfinas, diseñados con los más altos estándares de seguridad.",
    image: solEquipos,
  },
  {
    icon: Wrench,
    title: "Reformas y Ampliaciones",
    description:
      "Realizamos reformas y ampliaciones modulares adaptadas exactamente a las necesidades de cada cliente.",
    image: solEstructura,
  },
  {
    icon: Settings,
    title: "Mantenimiento Preventivo y Correctivo",
    description:
      "Solucionamos problemas de atención inmediata y realizamos actividades que optimizan el equipo para reducir costos energéticos.",
    image: solMantenimiento,
  },
  {
    icon: Zap,
    title: "Suministro e Instalación de Tableros Eléctricos",
    description:
      "Automatización y control eléctrico: contactores, protecciones, recalibración y limpieza de tableros.",
    image: solTableros,
  },
];

const Soluciones = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Soluciones Integrales en Refrigeración
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {soluciones.map((item) => (
            <div
              key={item.title}
              className="group bg-card border border-border rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="h-[200px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col items-start flex-1">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
                >
                  Saber más →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Soluciones;
