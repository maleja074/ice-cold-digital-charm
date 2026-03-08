import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const servicios = [
  "Cuartos Fríos",
  "Sistemas de Extracción de Calor (Pre Cooler / Prefríos)",
  "Cuartos de Fosfinas",
  "Reformas y Ampliaciones",
  "Mantenimiento Preventivo y Correctivo",
  "Suministro e Instalación de Tableros Eléctricos",
];

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio").max(100),
  empresa: z.string().trim().max(100).optional(),
  telefono: z.string().trim().min(1, "El teléfono es obligatorio").max(20),
  servicio: z.string().min(1, "Seleccione un servicio"),
  mensaje: z.string().trim().min(1, "El mensaje es obligatorio").max(1000),
});

type FormData = z.infer<typeof contactSchema>;

const Contacto = () => {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    empresa: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const text = `Hola, soy ${encodeURIComponent(result.data.nombre)}${result.data.empresa ? ` de ${encodeURIComponent(result.data.empresa)}` : ""}. Estoy interesado en: ${encodeURIComponent(result.data.servicio)}. ${encodeURIComponent(result.data.mensaje)}`;
    window.open(`https://wa.me/573102479910?text=${text}`, "_blank");
    toast.success("Redirigido a WhatsApp para completar tu solicitud.");
  };

  return (
    <section id="contacto" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-card border border-border rounded-lg p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nombre *</label>
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tu nombre"
                />
                {errors.nombre && <p className="text-destructive text-xs mt-1">{errors.nombre}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Empresa</label>
                <input
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tu empresa"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Teléfono *</label>
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tu teléfono"
                />
                {errors.telefono && <p className="text-destructive text-xs mt-1">{errors.telefono}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Tipo de Servicio *</label>
                <select
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Seleccionar servicio</option>
                  {servicios.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.servicio && <p className="text-destructive text-xs mt-1">{errors.servicio}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Mensaje *</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Describe tu necesidad..."
              />
              {errors.mensaje && <p className="text-destructive text-xs mt-1">{errors.mensaje}</p>}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              <Send className="w-4 h-4" />
              Enviar Solicitud
            </button>
          </form>

          {/* Info de contacto */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-lg p-8 space-y-6">
              <h3 className="text-lg font-heading font-semibold text-foreground">Información de Contacto</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Correo Electrónico</p>
                  <a href="mailto:jbcrefrigeracion@hotmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    jbcrefrigeracion@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Teléfonos</p>
                  <p className="text-sm text-muted-foreground">601-024-2468 / 310-247-9910</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Ubicación</p>
                  <p className="text-sm text-muted-foreground">AU Medellín Km 1.5 Vía Siberia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
