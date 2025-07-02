import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";
import { contactInfo } from '../data/info';

export default function Footer() {
  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = contactInfo.phone.replace(/\D/g, ''); // Remove caracteres não numéricos
    const message = `Olá! Gostaria de mais informações sobre o ${contactInfo.history.nickname}.`;
    const url = `https://wa.me/55${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{contactInfo.history.name}</h3>
            <p><strong>{contactInfo.history.nickname}</strong></p>
            <p>Tradição e qualidade desde 1899</p>
            <p>{contactInfo.address.street} - {contactInfo.address.neighborhood}</p>
            <p>{contactInfo.address.city} - {contactInfo.address.state}, {contactInfo.address.zipCode}</p>
          </div>
          
          <div className="footer-section">
            <h3>Horários</h3>
            <p>Segunda a Sábado: {contactInfo.schedule['segunda-feira']}</p>
            <p>Domingo: {contactInfo.schedule.domingo}</p>
            
            <div className="footer-contact">
              <button 
                onClick={openWhatsApp}
                className="footer-phone-btn"
                aria-label="Ligar ou enviar WhatsApp"
              >
                <Phone size={18} />
                <span>{contactInfo.phone}</span>
                <MessageCircle size={16} />
              </button>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 {contactInfo.history.nickname}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 