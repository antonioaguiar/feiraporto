import { ExternalLink } from "lucide-react";
import { timelineEvents } from "../data/timeline";

export default function Timeline() {
  return (
    <section className="timeline-section">
      <h3 className="timeline-title">Linha do Tempo</h3>
      <div className="timeline">
        {timelineEvents.map(event => (
          <div key={event.id} className="timeline-item">
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-content">
              <h4>{event.title}</h4>
              <p>{event.description}</p>
              <div className="timeline-source">
                <ExternalLink size={12} />
                <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer">
                  [{event.sourceId}]
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 