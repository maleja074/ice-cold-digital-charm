import { Mail, Phone, MapPin } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Mantenimiento", href: "#mantenimiento" },
  { label: "Contacto", href: "#contacto" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-2">JB Refrigeraciones</h3>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Industriales SAS</p>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              "Refrigeramos para Conservar Calidad, Trabajo y Vida"
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                jbcrefrigeracion@hotmail.com
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                601-024-2468 / 310-247-9910
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                AU Medellín Km 1.5 Vía Siberia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} JB Refrigeraciones Industriales SAS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
