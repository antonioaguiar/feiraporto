import { historicalSources } from "../data/sources";

export default function SourcesSection() {
  return (
    <section className="sources-section">
      <h3>Fontes Históricas</h3>
      <div className="sources-simple">
        <ol>
          {historicalSources.map(source => (
            <li key={source.id}>
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.name}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
} 