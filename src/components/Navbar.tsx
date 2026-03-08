import { useState } from "react";
import logoJB from "@/assets/logo-jb.png";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Mantenimiento", href: "#mantenimiento" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md border-b border-primary/20">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logoJB} alt="JB Refrigeraciones" className="h-10 w-auto" />
          <div className="hidden sm:block">
            <span className="font-heading text-primary-foreground text-lg font-bold leading-none tracking-wide">
              JB Refrigeraciones
            </span>
            <span className="block text-xs text-muted-foreground tracking-widest uppercase">
              Industriales SAS
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-foreground/98 border-t border-primary/20 pb-4">
          <ul className="flex flex-col items-center gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
