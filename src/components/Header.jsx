// Logo implementado com imagem

export default function Header({ currentSection, setCurrentSection }) {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img 
              src="logo-mercado.png" 
              alt="Logotipo Mercado do Porto"
              className="logo-image"
            />
            <span>Mercado do Porto</span>
          </div>
          <nav className="nav-menu">
            <a 
              href="#" 
              className={currentSection === "inicio" ? "active" : ""}
              onClick={() => setCurrentSection("inicio")}
            >
              Início
            </a>
            <a 
              href="#" 
              className={currentSection === "feirantes" ? "active" : ""}
              onClick={() => setCurrentSection("feirantes")}
            >
              Feirantes
            </a>
            <a 
              href="#" 
              className={currentSection === "informacoes" ? "active" : ""}
              onClick={() => setCurrentSection("informacoes")}
            >
              Informações
            </a>
            <a 
              href="#" 
              className={currentSection === "sobre" ? "active" : ""}
              onClick={() => setCurrentSection("sobre")}
            >
              Sobre
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
} 