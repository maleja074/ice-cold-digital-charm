import { Wrench, Droplets, Zap } from "lucide-react";

const columnas = [
  {
    icon: Wrench,
    title: "Revisión Mecánica",
    emoji: "🔧",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "hover:border-orange-500",
    items: [
      "Eliminación de ruidos y vibraciones",
      "Chequeo de componentes mecánicos y digitales",
      "Ajuste de bandas, poleas, bujes, ejes y motores",
      "Revisión de rodamientos en motores y compresores",
      "Toma de presiones según consumo",
      "Limpieza general de equipos",
    ],
  },
  {
    icon: Droplets,
    title: "Revisión Hidráulica",
    emoji: "💧",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    borderColor: "hover:border-sky-500",
    items: [
      "Inspección de tuberías y uniones para detectar fugas",
      "Verificación de válvulas, filtros y trampas de agua",
      "Medición de presión y caudal",
      "Revisión de bombas, sellos y acoplamientos",
      "Purgado de aire y drenaje preventivo",
      "Revisión de aislamientos y protección anticorrosiva",
    ],
  },
  {
    icon: Zap,
    title: "Revisión Eléctrica",
    emoji: "⚡",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "hover:border-yellow-500",
    items: [
      "Verificación de tensión y consumo",
      "Detección de recalentamientos",
      "Revisión de contactores y accesorios de control",
      "Cambio de componentes deteriorados",
      "Recalibración de accesorios eléctricos",
      "Automatización según ciclos de operación",
      "Limpieza de tableros eléctricos",
    ],
  },
];

const Mantenimiento = () => {
  return (
    <section id="mantenimiento" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Características del Mantenimiento
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columnas.map((col) => (
            <div
              key={col.title}
              className={`group bg-card border border-border rounded-lg p-8 transition-all duration-300 ${col.borderColor} hover:shadow-lg`}
            >
              <div className={`w-14 h-14 rounded-lg ${col.bgColor} flex items-center justify-center mb-5`}>
                <col.icon className={`w-7 h-7 ${col.color}`} />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-5">
                {col.emoji} {col.title}
              </h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${col.color.replace("text-", "bg-")} shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mantenimiento;
