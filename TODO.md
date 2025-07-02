# TODO - Mercado do Porto

## ✅ Atividades Realizadas

### 🏗️ **Estrutura Base**
- [x] Conversão completa do protótipo HTML para React/Vite
- [x] Reestruturação do CSS para componentes React
- [x] Sistema de navegação entre 3 seções principais (Início, Feirantes, Sobre)
- [x] Layout responsivo para desktop e mobile
- [x] Configuração do projeto com Vite e dependências

### 🛍️ **Módulo de Produtos**
- [x] Grid de produtos com categorias (Peixes, Frutas, Verduras, Carnes, Temperos, Pães)
- [x] Sistema de busca por nome de produto
- [x] Filtragem por categorias clicáveis
- [x] Cards de produtos com informações detalhadas
- [x] Botões de contato para cada produto
- [x] Badges de qualidade (Fresco, Premium, Orgânico, Artesanal)

### 👥 **Módulo de Feirantes**
- [x] Base de dados com 6 feirantes cadastrados
- [x] Perfis completos com avatar, rating, especialidade
- [x] Informações de localização, horários e produtos
- [x] Contatos (email, telefone, redes sociais)
- [x] Sistema de busca específico para feirantes
- [x] Cards detalhados com todas as informações

### 📚 **Página Institucional "Sobre"**
- [x] História completa do Mercado Varejista Antônio Moisés Nadaf
- [x] Timeline interativa com marcos históricos (1899-2024)
- [x] Seção de estrutura atual com dados verificados
- [x] Importância cultural e patrimonial
- [x] Sistema de referências acadêmicas numeradas [1-6]
- [x] Links diretos para todas as fontes consultadas

### 🖼️ **Otimização de Imagens**
- [x] URLs específicas e relevantes para cada produto
- [x] Testes e ajustes de imagens (especialmente peixes)
- [x] Imagens finais: peixes no gelo, verduras orgânicas, carnes premium
- [x] Frutas tropicais, temperos naturais, pães artesanais

### 🚀 **Configuração para Deploy**
- [x] Configuração do baseURL para `/feira/` no vite.config.js
- [x] Arquivo .htaccess para Apache com regras de rewrite
- [x] Scripts de deploy automatizados
- [x] Geração de arquivos ZIP para upload

### 📖 **Sistema de Referências Acadêmicas**
- [x] 7 fontes históricas numeradas e verificadas
- [x] Links clicáveis em todas as referências [n]
- [x] Fontes: Prefeitura, IPHAN, UFMT, Gazeta Digital, AL-MT, Arquivo Público, SUDECO
- [x] Sistema padronizado de citação acadêmica
- [x] **Link SUDECO adicionado**: Notícia oficial sobre investimento de R$ 1,5 milhão (2020)

### 🏗️ **Refatoração e Componentização**
- [x] Estrutura de pastas organizada (components/, pages/, data/)
- [x] Componentes reutilizáveis (Header, Hero, ProductCard, VendorCard, etc.)
- [x] Separação de dados mock em arquivos específicos
- [x] Páginas modulares (HomePage, VendorsPage, AboutPage)
- [x] Preparação para integração futura com APIs
- [x] Documentação completa da arquitetura componentizada
- [x] **Logotipo implementado**: Imagem personalizada no header junto com o texto

### ℹ️ **Informações Práticas** (Baseado em dados oficiais da Prefeitura de Cuiabá)
- [x] Nova seção "Informações" na navegação principal
- [x] **Dados oficiais verificados**: Matéria da Prefeitura de Cuiabá (27/12/2024)
- [x] **Nome oficial atualizado**: "Mercado Antônio Moysés Nadaf" (Feira do Porto)
- [x] **Estrutura real**: 176 espaços comerciais + 400 vagas de estacionamento
- [x] **Revitalização documentada**: Segunda etapa entregue em dezembro 2024
- [x] Sistema dinâmico de informações práticas (localização, horários, transporte)
- [x] Dados organizados em `/data/info.js` seguindo padrão do projeto
- [x] Cards informativos com ícones dinâmicos (MapPin, Clock, Users, Car, Phone)
- [x] **Melhorias 2024 listadas**: Câmaras frias, climatização, quadros de energia individualizados
- [x] Seção histórica com contexto cultural ("Coração histórico de Cuiabá")
- [x] **Integração Google Maps**: Mapa incorporado + botão direto
- [x] **Fonte oficial citada**: Link para matéria da prefeitura
- [x] **Dados de contato atualizados**: Endereço, telefone e horários corretos
- [x] **Presidente da Associação**: Jorge Antônio Lemes Júnior mencionado
- [x] **Galeria removida**: Layout mais limpo conforme solicitação
- [x] **Seção histórica removida**: Evitando redundância de informações
- [x] **Rodapé atualizado**: Nome oficial, endereço correto e telefone atualizado
- [x] **Layout das informações redesenhado**: Cards elegantes com melhor hierarquia visual
- [x] **Rodapé dinamizado**: Todas as informações agora vêm do arquivo info.js
- [x] **InfoSection completamente dinâmico**: Todos os textos e dados vêm do info.js
- [x] **Design reformulado**: InfoSection redesenhada com estilo clean da página About

## ✅ Implementações Concluídas

### Padronização do WhatsApp (21/12/2024)

### Logotipo no Header (21/12/2024)
- ✅ Imagem `logo-mercado.png` adicionada em `/public/`
- ✅ Header atualizado com logotipo junto ao texto
- ✅ CSS para logotipo (altura 40px, border-radius)
- ✅ Build testado e funcionando

### Nova Cor Primária (21/12/2024)
- ✅ Cor primária atualizada de #38a169 para #439355
- ✅ Paleta de cores harmonizada:
  - Primária: #439355 (equivalente a color(display-p3 0.2627 0.5922 0.3333))
  - Clara: #5ba66a (gradientes)
  - Escura: #336b42 (hover e estados secundários)
  - Mais escura: #2d5e37 (gradientes finais)
- ✅ Atualização em todos os componentes e arquivos CSS
- ✅ Ícones dos VendorCard atualizados
- ✅ Gradientes e estados de hover harmonizados
- ✅ README.md atualizado com nova cor
- ✅ Gradiente de fundo corrigido (de roxo para verde)
- ✅ Build testado e funcionando

### Melhoria do Footer - Botão de Telefone (21/12/2024)
- ✅ Botão de telefone redesenhado com melhor apresentação
- ✅ Ícone de telefone à esquerda
- ✅ Ícone do WhatsApp à direita (indicando funcionalidade)
- ✅ Gradiente verde harmonizado com a nova paleta
- ✅ Efeitos de hover aprimorados
- ✅ Melhor estruturação visual no footer
- ✅ Responsividade mantida
- ✅ Build testado e funcionando

### Atualização de Imagem - Peixe Fresco (21/12/2024)
- ✅ Imagem do produto "Peixe Fresco" substituída
- ✅ **Imagem personalizada**: Usando arquivo local `/public/peixe_fresco.jpg`
- ✅ **Imagem própria**: Foto real dos peixes do Mercado do Porto
- ✅ **Alta qualidade**: Arquivo de 2.5MB com detalhes nítidos
- ✅ **Performance otimizada**: Imagem local em vez de URL externa
- ✅ **Autenticidade**: Representa exatamente os produtos vendidos
- ✅ **Build funcionando**: Imagem copiada corretamente para `/dist/`
- ✅ Melhor representação visual do produto
- ✅ Contexto real de mercado brasileiro
- ✅ Mantém consistência com outros produtos

### Favicon Personalizado (21/12/2024)
- ✅ **Favicon customizado**: Substituído vite.svg pelo logo do Mercado
- ✅ **Logo próprio**: Usando `/logo-mercado.png` como favicon
- ✅ **Conversão para SVG**: Logo convertido para formato vetorial
- ✅ **Dois ícones SVG criados**:
  - `/logo-mercado.svg` - Logo completo (200x80px)
  - `/favicon.svg` - Ícone simplificado para favicon (32x32px)
- ✅ **Favicon SVG**: Usando formato vetorial escalável
- ✅ **Apple Touch Icon**: PNG mantido para compatibilidade iOS
- ✅ **SEO melhorado**: Meta description e título otimizados
- ✅ **Idioma correto**: HTML lang alterado para "pt-BR"
- ✅ **Título completo**: "Mercado do Porto - Cuiabá MT"
- ✅ **Build testado**: Ambos os SVGs funcionando corretamente
- ✅ **Identidade visual**: Consistente com a marca
- ✅ **Performance**: SVG é menor e escala perfeitamente

### PWA - Progressive Web App (21/12/2024)
- ✅ **Web App Manifest**: Arquivo `/manifest.json` criado
- ✅ **Display standalone**: App sem barras do navegador
- ✅ **Ícones PWA**: Múltiplos tamanhos e formatos configurados
- ✅ **Service Worker**: Cache offline e performance
- ✅ **Meta tags PWA**: Configurações para mobile/tablet
- ✅ **Apple PWA**: Suporte completo para iOS Safari
- ✅ **Android PWA**: Suporte para Chrome/Edge mobile
- ✅ **Theme color**: Verde da marca (#439355)
- ✅ **Orientação**: Portrait otimizado
- ✅ **Instalável**: App pode ser instalado na home screen
- ✅ **Fullscreen**: Remove barras de título em mobile
- ✅ **Cache estratégico**: Recursos principais em cache
- ✅ **Build testado**: Todos os arquivos PWA funcionando

## 🔄 Melhorias Contínuas

### 🎨 **UX/UI Avançado**
- [ ] Animações e transições mais sofisticadas
- [ ] Modo escuro/claro (dark mode)
- [ ] Personalização de cores e tema
- [ ] Micro-interações nos botões e cards
- [ ] Loading states para melhor experiência
- [ ] Skeleton loading para cards

### 🔍 **Sistema de Busca Avançado**
- [ ] Busca global (produtos + feirantes + histórico)
- [ ] Filtros avançados (preço, localização, horário)
- [ ] Busca por voz (Web Speech API)
- [ ] Autocomplete e sugestões
- [ ] Histórico de buscas do usuário
- [ ] Busca geográfica (próximo a mim)

### 📱 **Funcionalidades Mobile**
- [ ] Progressive Web App (PWA)
- [ ] Notificações push para ofertas
- [ ] Modo offline básico
- [ ] Integração com GPS para localização
- [ ] Compartilhamento nativo
- [ ] Instalação como app

### 🗺️ **Mapa e Localização**
- [ ] Mapa interativo do mercado
- [ ] Localização de cada feirante/box
- [ ] Navegação interna do mercado
- [ ] Realidade aumentada para encontrar boxes
- [ ] Integração com Google Maps/Apple Maps

### 💬 **Comunicação e Social**
- [ ] Chat ao vivo com feirantes
- [ ] Sistema de avaliações e comentários
- [ ] Galeria de fotos dos usuários
- [ ] Compartilhamento em redes sociais
- [ ] Newsletter com novidades
- [ ] Blog com receitas e dicas

### 🛒 **E-commerce Básico**
- [ ] Carrinho de compras virtual
- [ ] Agendamento de retirada
- [ ] Lista de desejos
- [ ] Comparador de preços
- [ ] Alertas de produtos disponíveis
- [ ] Sistema de reservas

### 📊 **Analytics e Dados**
- [ ] Google Analytics 4
- [ ] Tracking de eventos e conversões
- [ ] Heatmaps de navegação
- [ ] Dashboard administrativo
- [ ] Relatórios de produtos mais buscados
- [ ] Métricas de engajamento

### 🌐 **SEO e Performance**
- [ ] Meta tags dinâmicas
- [ ] Schema.org markup
- [ ] Sitemap XML automático
- [ ] Otimização de imagens (WebP, lazy loading)
- [ ] Service Worker para cache
- [ ] Compressão Gzip/Brotli

### ♿ **Acessibilidade**
- [ ] Suporte completo a leitores de tela
- [ ] Navegação por teclado
- [ ] Alto contraste
- [ ] Tamanhos de fonte ajustáveis
- [ ] Descrições alt em todas as imagens
- [ ] ARIA labels e landmarks

### 🔧 **Administrativo**
- [ ] Painel admin para gerenciar feirantes
- [ ] Sistema de cadastro de novos feirantes
- [ ] Upload de imagens pelos feirantes
- [ ] Moderação de conteúdo
- [ ] Backup automático de dados
- [ ] Logs de atividade

### 🎯 **Funcionalidades Especiais**
- [ ] Sistema de fidelidade/pontos
- [ ] Eventos e promoções especiais
- [ ] Receitas com produtos do mercado
- [ ] Calendário de eventos culturais
- [ ] Tours virtuais 360°
- [ ] Histórias em vídeo dos feirantes

### 🔗 **Integrações**
- [ ] WhatsApp Business API
- [ ] Instagram Shopping
- [ ] Facebook Marketplace
- [ ] Google My Business
- [ ] Plataformas de pagamento
- [ ] Sistema de delivery (iFood, Uber Eats)

### 🚀 **Tecnologia**
- [ ] Migração para TypeScript
- [ ] Testes automatizados (Jest, Cypress)
- [ ] CI/CD pipeline
- [ ] Docker para deploy
- [ ] CDN para assets
- [ ] Monitoramento de errors (Sentry)

---

## 📋 Prioridades

### 🔥 **Alta Prioridade (Próximos 30 dias)**
1. PWA básico para instalação mobile
2. Google Analytics e tracking básico
3. Otimização de performance e SEO
4. Sistema de avaliações simples

### 🟡 **Média Prioridade (2-3 meses)**
1. Mapa interativo do mercado
2. Chat com feirantes via WhatsApp
3. Sistema de eventos/promoções
4. Painel administrativo básico

### 🟢 **Baixa Prioridade (6+ meses)**
1. E-commerce completo
2. Realidade aumentada
3. Sistema de delivery próprio
4. App nativo (React Native)

---

## 📝 Notas Técnicas

- **Framework**: React 18 + Vite
- **Styling**: CSS puro (sem frameworks)
- **Icons**: Lucide React
- **Deploy**: Apache com subdiretório `/feira/`
- **Responsivo**: Mobile-first approach
- **Browser Support**: IE11+ (pode ser atualizado)
- **Estrutura de Dados**: 5 arquivos mock em `/data/` (products.js, vendors.js, timeline.js, sources.js, info.js)
- **Componentes**: 10 componentes reutilizáveis + 3 páginas principais
- **Navegação**: 4 seções (Início, Feirantes, Informações, Sobre)
- **Galeria**: Sistema de filtros e categorização dinâmica

---

*Última atualização: Dezembro 2024* 