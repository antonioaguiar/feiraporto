import { Building, Store, Award, MapPin, ExternalLink } from "lucide-react";
import { structureInfo } from "../data/timeline";

const iconMap = {
  Building,
  Store,
  Award,
  MapPin
};

export default function StructureSection() {
  return (
    <section className="structure-section">
      <h3>Estrutura Atual</h3>
      <div className="structure-grid">
        {structureInfo.map(item => {
          const IconComponent = iconMap[item.icon];
          return (
            <div key={item.id} className="structure-item">
              <IconComponent size={40} color="#439355" />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className="structure-source">
                <ExternalLink size={12} />
                <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
                  [{item.sourceId}]
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
} 