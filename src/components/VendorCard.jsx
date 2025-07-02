import { Star, MapPin, Clock, Mail, MessageCircle } from "lucide-react";

export default function VendorCard({ vendor }) {
  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = vendor.contact.whatsapp?.replace(/\D/g, '') || vendor.contact.phone?.replace(/\D/g, '');
    if (phoneNumber) {
      const message = `Olá ${vendor.name}! Gostaria de mais informações sobre seus produtos.`;
      const url = `https://wa.me/55${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  };

  // Função para abrir email
  const openEmail = () => {
    if (vendor.contact.email) {
      const subject = `Interesse nos produtos - ${vendor.business}`;
      const body = `Olá ${vendor.name}!\n\nGostaria de mais informações sobre seus produtos no Mercado do Porto.\n\nObrigado!`;
      const url = `mailto:${vendor.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(url);
    }
  };

  return (
    <div className="vendor-card">
      {/* Header com foto, nome e rating */}
      <div className="vendor-header">
        <img 
          src={vendor.avatar} 
          alt={vendor.name}
          className="vendor-avatar"
        />
        <div className="vendor-info">
          <h3 className="vendor-name">{vendor.name}</h3>
          <p className="vendor-business">{vendor.business}</p>
          <div className="vendor-rating">
            <Star size={16} fill="#fbbf24" color="#fbbf24" />
            <span className="rating-value">{vendor.rating}</span>
            <span className="specialty-badge">• {vendor.specialty}</span>
          </div>
        </div>
      </div>
      
      {/* Descrição */}
      <p className="vendor-description">{vendor.description}</p>
      
      {/* Localização e Horário */}
      <div className="vendor-meta">
        <div className="meta-item">
                      <MapPin size={16} color="#439355" />
            <span>{vendor.location}</span>
          </div>
          <div className="meta-item">
            <Clock size={16} color="#439355" />
          <span>{vendor.hours}</span>
        </div>
      </div>
      
      {/* Produtos principais */}
      <div className="vendor-products">
        <h4>Produtos principais:</h4>
        <div className="products-tags">
          {vendor.products.map((product, index) => (
            <span key={index} className="product-tag">{product}</span>
          ))}
        </div>
      </div>
      
      {/* Botões de contato */}
      <div className="vendor-contact">
        {(vendor.contact.whatsapp || vendor.contact.phone) && (
          <button 
            onClick={openWhatsApp}
            className="whatsapp-btn"
          >
            <MessageCircle size={18} />
            Conversar no WhatsApp
          </button>
        )}
        
        {vendor.contact.email && (
          <button 
            onClick={openEmail}
            className="email-btn"
          >
            <Mail size={18} />
            E-mail
          </button>
        )}
      </div>
    </div>
  );
} 