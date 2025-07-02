import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import VendorsPage from "./pages/VendorsPage";
import AboutPage from "./pages/AboutPage";
import InfoSection from "./components/InfoSection";

function App() {
  const [currentSection, setCurrentSection] = useState("inicio");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const renderCurrentSection = () => {
    switch (currentSection) {
      case "feirantes":
        return <VendorsPage searchTerm={searchTerm} />;
      case "informacoes":
        return <InfoSection />;
      case "sobre":
        return <AboutPage />;
      default:
        return (
          <HomePage 
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
    }
  };

  return (
    <div className="App">
      <Header 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection} 
      />
      
      <Hero 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        currentSection={currentSection}
      />
      
      {renderCurrentSection()}
      
      <Footer />
    </div>
  );
}

export default App;