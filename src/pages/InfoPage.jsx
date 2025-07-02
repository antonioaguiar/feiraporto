import React from 'react';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';

const InfoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Informações Práticas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Tudo que você precisa saber para visitar o Mercado do Porto
            </p>
          </div>
        </div>
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default InfoPage; 