# Estrutura Componentizada - Mercado do Porto

## 📁 Organização dos Arquivos

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx      # Cabeçalho e navegação
│   ├── Hero.jsx        # Seção hero com busca
│   ├── Categories.jsx  # Grid de categorias
│   ├── ProductCard.jsx # Card individual de produto
│   ├── VendorCard.jsx  # Card individual de feirante
│   ├── Timeline.jsx    # Timeline histórica
│   ├── StructureSection.jsx  # Seção estrutura atual
│   ├── SourcesSection.jsx    # Seção fontes históricas
│   └── Footer.jsx      # Rodapé
├── pages/              # Páginas principais
│   ├── HomePage.jsx    # Página inicial (produtos)
│   ├── VendorsPage.jsx # Página de feirantes
│   └── AboutPage.jsx   # Página institucional
├── data/               # Dados mock (preparado para API)
│   ├── products.js     # Produtos e categorias
│   ├── vendors.js      # Feirantes
│   ├── timeline.js     # Eventos históricos e estrutura
│   ├── sources.js      # Fontes históricas
│   └── info.js         # Informações práticas e galeria
├── App.jsx             # Componente principal
├── App.css             # Estilos globais
└── main.jsx            # Ponto de entrada
```

## 🔧 Componentes

### **Header.jsx**
- **Props**: `currentSection`, `setCurrentSection`
- **Função**: Navegação entre seções
- **Dependências**: `lucide-react` (Store icon)

### **Hero.jsx**
- **Props**: `searchTerm`, `setSearchTerm`, `currentSection`
- **Função**: Seção hero com busca adaptativa
- **Dependências**: `lucide-react` (Search icon)

### **Categories.jsx**
- **Props**: `selectedCategory`, `setSelectedCategory`
- **Função**: Grid de categorias clicáveis
- **Dados**: `categories` de `../data/products`

### **ProductCard.jsx**
- **Props**: `product`
- **Função**: Card individual de produto com badge
- **Dependências**: `lucide-react` (Star, Mail icons)

### **VendorCard.jsx**
- **Props**: `vendor`
- **Função**: Card completo de feirante
- **Dependências**: `lucide-react` (vários icons)

### **Timeline.jsx**
- **Props**: Nenhuma
- **Função**: Timeline histórica interativa
- **Dados**: `timelineEvents` de `../data/timeline`

### **StructureSection.jsx**
- **Props**: Nenhuma
- **Função**: Grid de informações da estrutura atual
- **Dados**: `structureInfo` de `../data/timeline`

### **SourcesSection.jsx**
- **Props**: Nenhuma
- **Função**: Lista numerada de fontes históricas
- **Dados**: `historicalSources` de `../data/sources`

### **Footer.jsx**
- **Props**: Nenhuma
- **Função**: Rodapé com informações de contato
- **Dependências**: `lucide-react` (social icons)

### **InfoSection.jsx**
- **Props**: Nenhuma
- **Função**: Seção completa de informações práticas e galeria
- **Estado**: `selectedCategory` (filtro da galeria)
- **Dependências**: `lucide-react` (vários icons)
- **Dados**: `practicalInfo`, `photoGallery`, `galleryCategories`, `contactInfo` de `../data/info`
- **Funcionalidades**:
  - Informações práticas com ícones dinâmicos
  - Galeria de fotos com filtros por categoria
  - Integração com Google Maps
  - Horários detalhados de funcionamento
  - Seções de transporte e acessibilidade

## 📄 Páginas

### **HomePage.jsx**
- **Props**: `searchTerm`, `selectedCategory`, `setSelectedCategory`
- **Função**: Página inicial com produtos e categorias
- **Componentes**: `Categories`, `ProductCard`
- **Dados**: `products` de `../data/products`

### **VendorsPage.jsx**
- **Props**: `searchTerm`
- **Função**: Página de feirantes com busca
- **Componentes**: `VendorCard`
- **Dados**: `vendors` de `../data/vendors`

### **AboutPage.jsx**
- **Props**: Nenhuma
- **Função**: Página institucional completa
- **Componentes**: `Timeline`, `StructureSection`, `SourcesSection`

## 📊 Dados Mock

### **products.js**
```javascript
export const products = [...]    // Array de produtos
export const categories = [...]  // Array de categorias
```

### **vendors.js**
```javascript
export const vendors = [...]     // Array de feirantes
```

### **timeline.js**
```javascript
export const timelineEvents = [...] // Eventos históricos
export const structureInfo = [...]  // Informações da estrutura
```

### **sources.js**
```javascript
export const historicalSources = [...] // Fontes históricas
```

### **info.js**
```javascript
export const practicalInfo = [...]      // Informações práticas (localização, horários, contato)
export const photoGallery = [...]       // Galeria de fotos com categorias
export const galleryCategories = [...]  // Categorias para filtros
export const contactInfo = {...}        // Dados de contato e coordenadas
```

## 🔄 Preparação para API

### **Estrutura dos Dados**
Todos os dados mock seguem uma estrutura consistente com IDs únicos, facilitando a migração para APIs:

```javascript
// Produto
{
  id: 1,
  name: "Nome",
  vendor: "Feirante",
  price: "R$ 00,00",
  category: "categoria",
  // ... outros campos
}

// Feirante
{
  id: 1,
  name: "Nome Completo",
  business: "Nome do Negócio",
  contact: {
    email: "email@exemplo.com",
    // ... outros contatos
  }
  // ... outros campos
}
```

### **Migração para API**
Para migrar para uma API real:

1. **Substituir imports**: 
   ```javascript
   // De:
   import { products } from "../data/products";
   
   // Para:
   import { fetchProducts } from "../services/api";
   ```

2. **Adicionar estados de loading**:
   ```javascript
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   ```

3. **Usar useEffect para chamadas assíncronas**:
   ```javascript
   useEffect(() => {
     fetchProducts().then(setProducts).catch(setError);
   }, []);
   ```

## 🎯 Benefícios da Componentização

### **Manutenibilidade**
- Cada componente tem responsabilidade única
- Facilita debugging e testes
- Código mais organizado e legível

### **Reutilização**
- Componentes podem ser usados em diferentes contextos
- Evita duplicação de código
- Facilita expansão futura

### **Performance**
- Componentes podem ser otimizados individualmente
- Melhor controle de re-renderizações
- Preparado para lazy loading

### **Escalabilidade**
- Fácil adicionar novos componentes
- Estrutura preparada para crescimento
- Separação clara entre dados e UI

## 🚀 Próximos Passos

1. **Adicionar PropTypes ou TypeScript** para validação de props
2. **Implementar testes unitários** para cada componente
3. **Adicionar Storybook** para documentação visual
4. **Criar hooks customizados** para lógica compartilhada
5. **Implementar Context API** para estado global
6. **Adicionar service layer** para chamadas de API

---

*Estrutura criada para facilitar manutenção e evolução do projeto* 