import { Star, MessageCircle, Store } from "lucide-react";

export default function ProductCard({ product }) {
  const getBadgeClass = (badge) => {
    switch (badge) {
      case "fresh": return "product-badge-fresh";
      case "premium": return "product-badge-premium";
      case "organic": return "product-badge-organic";
      case "artisanal": return "product-badge-artisanal";
      default: return "product-badge-default";
    }
  };

  const getBadgeText = (badge) => {
    switch (badge) {
      case "fresh": return "Fresco";
      case "premium": return "Premium";
      case "organic": return "Orgânico";
      case "artisanal": return "Artesanal";
      default: return "";
    }
  };

  // Função para abrir WhatsApp do vendedor
  const openWhatsApp = () => {
    const message = `Olá! Gostaria de mais informações sobre ${product.name}.`;
    // Para demo, vamos usar um número genérico - em produção seria o número real do vendedor
    const phoneNumber = "5565993423369";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="product-card-modern">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image-modern" />
        {product.badge && (
          <div className={`product-badge ${getBadgeClass(product.badge)}`}>
            {getBadgeText(product.badge)}
          </div>
        )}
      </div>
      
      <div className="product-content">
        <h3 className="product-title-modern">{product.name}</h3>
        
        <div className="product-vendor">
          <Store size={16} color="#9ca3af" />
          <span className="vendor-name-modern">{product.vendor}</span>
        </div>
        
        <div className="product-rating-modern">
          <Star size={16} fill="#fbbf24" color="#fbbf24" />
          <span className="rating-value-modern">{product.rating}</span>
        </div>
        
        <div className="product-price-modern">{product.price}</div>
        
        <button 
          onClick={openWhatsApp}
          className="product-contact-btn"
        >
          <MessageCircle size={18} />
          Entrar em Contato
        </button>
      </div>
    </div>
  );
} 