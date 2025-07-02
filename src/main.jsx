import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Função para limpar cache antigo
const clearOldCaches = async () => {
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    const oldCaches = cacheNames.filter(name => name.startsWith('mercado-porto-v1'));
    await Promise.all(oldCaches.map(name => caches.delete(name)));
    console.log('Old caches cleared:', oldCaches);
  }
};

// Registrar Service Worker para PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      // Limpar caches antigos primeiro
      await clearOldCaches();
      
      // Desregistrar service workers antigos
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map(reg => reg.unregister()));
      console.log('Old service workers unregistered');
      
      // Registrar novo service worker
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered successfully:', registration);
      
      // Forçar atualização se houver nova versão
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // Nova versão disponível, recarregar
            window.location.reload();
          }
        });
      });
      
    } catch (error) {
      console.error('SW registration failed:', error);
    }
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
