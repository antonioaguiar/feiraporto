import { Search } from "lucide-react";
import { contactInfo } from '../data/info';

export default function Hero({ searchTerm, setSearchTerm, currentSection }) {
  const getPlaceholder = () => {
    switch (currentSection) {
      case "feirantes":
        return "Buscar feirantes...";
      default:
        return "Buscar produtos...";
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>{contactInfo.history.name}</h1>
        <p>{contactInfo.history.slogan}</p>
        
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder={getPlaceholder()}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="search-icon" size={20} />
        </div>
      </div>
    </section>
  );
} 