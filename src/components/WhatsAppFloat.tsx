import { Button } from "@/components/ui/button";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918420797474";
    const message =
      "Hi! I'm interested in your Durga Puja travel packages. Please share more details.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="rounded-full w-16 h-16 bg-transparent hover:bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 group p-0"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
        />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;
