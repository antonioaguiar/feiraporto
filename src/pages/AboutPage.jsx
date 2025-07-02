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
                  Uma tradição centenária que conecta produtores e consumidores no coração de Cuiabá, 
                  preservando a cultura alimentar e o comércio local há mais de 125 anos.
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
                  O Mercado do Porto representa mais que um simples centro de abastecimento: é um patrimônio 
                  cultural vivo que mantém tradições centenárias e conecta gerações de cuiabanos. Tombado 
                  pelo IPHAN em 1983, o mercado preserva não apenas sua arquitetura histórica, mas também 
                  o modo de vida e as relações comerciais que caracterizam a identidade local.
                </p>
                <p>
                  Localizado estrategicamente no centro da capital, próximo ao Rio Cuiabá, o mercado 
                  continua sendo um ponto de encontro fundamental para a comunidade, onde sabores, 
                  histórias e tradições se misturam diariamente, perpetuando o legado de mais de um 
                  século de história comercial em Mato Grosso.
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