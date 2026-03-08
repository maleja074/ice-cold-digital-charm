import { MessageCircle } from "lucide-react";

const PHONE = "573000000000";
const MESSAGE = "Hola JB Refrigeraciones, me gustaría solicitar información sobre sus servicios.";

const WhatsAppButton = () => {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
