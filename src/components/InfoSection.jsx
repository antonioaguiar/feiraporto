import React from 'react';
import { MapPin, Clock, Users, Phone, ExternalLink } from 'lucide-react';
import { practicalInfo, contactInfo } from '../data/info';

const InfoSection = () => {
  // Função para obter o ícone correto
  const getIcon = (iconName, color) => {
    const iconProps = { size: 20, color: color === 'blue' ? '#2563eb' : color === 'green' ? '#439355' : color === 'purple' ? '#a855f7' : '#ea580c' };
    
    switch (iconName) {
      case 'MapPin':
        return <MapPin {...iconProps} />;
      case 'Clock':
        return <Clock {...iconProps} />;
      case 'Users':
        return <Users {...iconProps} />;
      case 'Phone':
        return <Phone {...iconProps} />;
      default:
        return <MapPin {...iconProps} />;
    }
  };

  // Função para abrir Google Maps
  const openGoogleMaps = () => {
    const { lat, lng } = contactInfo.coordinates;
    const url = `https://www.google.com/maps?q=${lat},${lng}&z=17`;
    window.open(url, '_blank');
  };

  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = contactInfo.phone.replace(/\D/g, ''); // Remove caracteres não numéricos
    const message = `Olá! Gostaria de mais informações sobre o ${contactInfo.history.nickname}.`;
    const url = `https://wa.me/55${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="main-content">
      <div className="container">
        <div className="about-page">
          
          {/* Introdução */}
          <section className="about-intro">
            <h2 className="section-title">
              {contactInfo.history.name}
            </h2>
            
            <div className="intro-content">
              <div className="intro-text">
                <h3>{contactInfo.history.nickname}</h3>
                <p className="lead">
                  {contactInfo.history.slogan}
                </p>
                <p>
                  {contactInfo.history.location} - {contactInfo.history.revitalization}
                </p>
              </div>
              
              <div className="intro-image">
                <img 
                  src="https://www.gov.br/sudeco/pt-br/assuntos/noticias/2020/mercado-do-porto-em-cuiaba-mt-recebe-r-1-5-milhao-para-sua-ampliacao-e-modernizacao/mercado-do-porto_velho.jpg/@@images/01fc56e4-d885-463b-852e-3926e209d1b2.jpeg" 
                  alt={`${contactInfo.history.nickname} - Vista Atual`}
                />
              </div>
            </div>
          </section>

          {/* Informações Essenciais */}
          <section className="structure-section">
            <h3>Informações Essenciais</h3>
            <div className="structure-grid">
              {practicalInfo.map((info) => (
                <div key={info.id} className="structure-item">
                  <div className="flex items-center mb-3">
                    {getIcon(info.icon, info.color)}
                    <h4 style={{marginLeft: '0.5rem'}}>{info.title}</h4>
                  </div>
                  {info.icon === 'Phone' ? (
                    <p>
                      <button 
                        onClick={openWhatsApp}
                        className="text-green-600 hover:text-green-700 font-bold underline"
                      >
                        {info.content}
                      </button>
                    </p>
                  ) : (
                    <p><strong>{info.content}</strong></p>
                  )}
                  {info.details && <p>{info.details}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Localização */}
          <section className="cultural-section">
            <h3>Localização e Acesso</h3>
            <div className="cultural-content">
              <div className="cultural-text">
                <p>
                  <strong>Endereço:</strong> {contactInfo.address.fullAddress}
                </p>
                                 <p>
                   <strong>Telefone:</strong> 
                   <button 
                     onClick={openWhatsApp}
                     className="text-green-600 hover:text-green-700 font-medium ml-2 underline"
                   >
                     {contactInfo.phone}
                   </button>
                   <span className="text-gray-600 ml-1">(WhatsApp)</span>
                 </p>
                
                {/* Mapa */}
                <div style={{marginTop: '2rem', marginBottom: '1rem'}}>
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.7866823926584!2d${contactInfo.coordinates.lng}!3d${contactInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM2JzUwLjAiUyA1NsKwMDYnMzYuOCJX!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr&q=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}`}
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Localização do ${contactInfo.history.nickname}`}
                  />
                </div>
                
                <button
                  onClick={openGoogleMaps}
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  Abrir no Google Maps
                </button>
              </div>
            </div>
          </section>

          {/* Horários de Funcionamento */}
          <section className="structure-section">
            <h3>Horários de Funcionamento</h3>
            <div className="structure-grid">
              {Object.entries(contactInfo.schedule).map(([day, hours]) => (
                <div key={day} className="structure-item">
                  <h4 className="capitalize">{day.replace('-feira', '')}</h4>
                  <p><strong className="text-green-600">{hours}</strong></p>
                </div>
              ))}
            </div>
          </section>

          {/* Informações Complementares */}
          <section className="cultural-section">
            <h3>Como Chegar e Acessibilidade</h3>
            <div className="cultural-content">
              <div className="cultural-text">
                
                <h4 style={{color: '#439355', marginBottom: '1rem'}}>🚌 Transporte</h4>
                {contactInfo.transport.map((transport, index) => {
                  const [title, description] = transport.split(': ');
                  return (
                    <p key={index}>
                      <strong>{title}:</strong> {description}
                    </p>
                  );
                })}
                
                <h4 style={{color: '#439355', marginTop: '2rem', marginBottom: '1rem'}}>♿ Acessibilidade</h4>
                {contactInfo.accessibility.map((feature, index) => (
                  <p key={index}>• {feature}</p>
                ))}
                
                <h4 style={{color: '#439355', marginTop: '2rem', marginBottom: '1rem'}}>✨ Melhorias 2024</h4>
                {contactInfo.improvements.slice(0, 5).map((improvement, index) => (
                  <p key={index}>• {improvement}</p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default InfoSection; 