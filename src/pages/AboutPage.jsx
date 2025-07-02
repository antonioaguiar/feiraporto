import { Info } from "lucide-react";
import Timeline from "../components/Timeline";
import StructureSection from "../components/StructureSection";
import SourcesSection from "../components/SourcesSection";

export default function AboutPage() {
  return (
    <main className="main-content">
      <div className="container">
        <div className="about-page">
          {/* Introdução */}
          <section className="about-intro">
            <h2 className="section-title">
              História do Mercado do Porto
            </h2>
            
            <div className="intro-content">
              <div className="intro-text">
                <h3>Mercado Varejista Antônio Moisés Nadaf</h3>
                <p className="lead">
                  Com mais de 60 anos de história, o Mercado do Porto é um dos principais pontos 
                  comerciais e culturais de Cuiabá. Começou como uma pequena feira na década de 1960 
                  com pouco mais de 10 feirantes e hoje representa um patrimônio histórico, artístico, 
                  cultural e imaterial do estado de Mato Grosso.
                </p>
              </div>
              
              <div className="intro-image">
                <img 
                  src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=400&fit=crop&crop=center" 
                  alt="Mercado do Porto - Visão Histórica"
                />
              </div>
            </div>
          </section>

          {/* Timeline */}
          <Timeline />

          {/* Estrutura Atual */}
          <StructureSection />

          {/* Importância Cultural */}
          <section className="cultural-section">
            <h3>Importância Cultural</h3>
            <div className="cultural-content">
              <div className="cultural-text">
                <p>
                  O Mercado do Porto é um símbolo da cultura cuiabana e da região do cerrado, 
                  refletindo a identidade local por meio da oferta de produtos típicos e da 
                  gastronomia regional, como o pixé, furrundú, doce de caju, bananinhas fritas 
                  e pequi. Além de ser um importante entreposto comercial, o mercado mantém 
                  tradições locais, como o método tradicional de preparo de peixes, valorizando 
                  os saberes dos feirantes e pescadores da Baixada Cuiabana.
                </p>
                <p>
                  Com cerca de 167 permissionários distribuídos em setores como pescados, açougues, 
                  doces, hortigranjeiros, confecções e utilidades domésticas, o mercado movimenta 
                  aproximadamente R$ 240 milhões por ano. O reconhecimento como patrimônio cultural 
                  em 2021 reforça seu papel na preservação da memória e da cultura popular cuiabana, 
                  sendo também um ponto turístico relevante para a capital mato-grossense.
                </p>
              </div>
            </div>
          </section>

          {/* Fontes */}
          <SourcesSection />
        </div>
      </div>
    </main>
  );
} 