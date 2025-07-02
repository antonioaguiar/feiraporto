// Informações práticas do Mercado do Porto
export const practicalInfo = [
  {
    id: 1,
    icon: 'MapPin',
    title: 'Localização',
    content: 'Av. Oito de Abril - Porto, Cuiabá - MT',
    details: 'CEP: 78045-700',
    note: 'Mercado Antônio Moysés Nadaf (Feira do Porto)',
    color: 'blue'
  },
  {
    id: 2,
    icon: 'Clock',
    title: 'Horários de Funcionamento',
    content: 'Segunda a Sábado: 5h às 18h',
    details: 'Domingo: 5h às 14h',
    note: 'Funcionamento todos os dias da semana',
    color: 'green'
  },
  {
    id: 3,
    icon: 'Phone',
    title: 'Contato',
    content: '(65) 99342-3369',
    details: 'Clique para WhatsApp',
    note: 'Atendimento direto dos feirantes',
    color: 'purple'
  },
  {
    id: 4,
    icon: 'Users',
    title: 'Estrutura',
    content: '176 espaços comerciais',
    details: 'Mais de 400 vagas de estacionamento',
    note: 'Revitalizado em dezembro de 2024',
    color: 'orange'
  }
];

// Galeria de fotos do mercado
export const photoGallery = [
  {
    id: 1,
    title: 'Entrada Principal',
    description: 'Fachada histórica do mercado preservada desde 1899',
    category: 'arquitetura',
    src: '/images/entrada-principal.jpg',
    alt: 'Entrada principal do Mercado do Porto',
    placeholder: true,
    featured: true
  },
  {
    id: 2,
    title: 'Corredores Internos',
    description: 'Boxes dos feirantes organizados em corredores amplos',
    category: 'interior',
    src: '/images/corredores-internos.jpg',
    alt: 'Corredores internos com boxes dos feirantes',
    placeholder: true,
    featured: true
  },
  {
    id: 3,
    title: 'Produtos Locais',
    description: 'Variedade de produtos frescos e regionais',
    category: 'produtos',
    src: '/images/produtos-locais.jpg',
    alt: 'Produtos frescos e regionais',
    placeholder: true,
    featured: true
  },
  {
    id: 4,
    title: 'Ambiente Histórico',
    description: 'Arquitetura centenária preservada com estrutura original',
    category: 'arquitetura',
    src: '/images/ambiente-historico.jpg',
    alt: 'Estrutura histórica do mercado',
    placeholder: true,
    featured: true
  },
  {
    id: 5,
    title: 'Feira de Frutas',
    description: 'Boxes especializados em frutas regionais e tropicais',
    category: 'produtos',
    src: '/images/feira-frutas.jpg',
    alt: 'Boxes de frutas frescas',
    placeholder: true,
    featured: false
  },
  {
    id: 6,
    title: 'Açougue Tradicional',
    description: 'Carnes frescas e cortes especiais',
    category: 'produtos',
    src: '/images/acougue-tradicional.jpg',
    alt: 'Açougue com carnes frescas',
    placeholder: true,
    featured: false
  },
  {
    id: 7,
    title: 'Peixaria do Porto',
    description: 'Peixes frescos do Rio Cuiabá e região',
    category: 'produtos',
    src: '/images/peixaria-porto.jpg',
    alt: 'Peixaria com peixes frescos',
    placeholder: true,
    featured: false
  },
  {
    id: 8,
    title: 'Temperos e Especiarias',
    description: 'Variedade de temperos regionais e especiarias',
    category: 'produtos',
    src: '/images/temperos-especiarias.jpg',
    alt: 'Boxes de temperos e especiarias',
    placeholder: true,
    featured: false
  },
  {
    id: 9,
    title: 'Movimento Matinal',
    description: 'Mercado em pleno funcionamento pela manhã',
    category: 'ambiente',
    src: '/images/movimento-matinal.jpg',
    alt: 'Movimento de pessoas pela manhã',
    placeholder: true,
    featured: false
  },
  {
    id: 10,
    title: 'Arquitetura Colonial',
    description: 'Detalhes da arquitetura colonial preservada',
    category: 'arquitetura',
    src: '/images/arquitetura-colonial.jpg',
    alt: 'Detalhes arquitetônicos coloniais',
    placeholder: true,
    featured: false
  }
];

// Categorias para filtrar a galeria
export const galleryCategories = [
  { id: 'todas', name: 'Todas as Fotos', count: photoGallery.length },
  { id: 'arquitetura', name: 'Arquitetura', count: photoGallery.filter(p => p.category === 'arquitetura').length },
  { id: 'produtos', name: 'Produtos', count: photoGallery.filter(p => p.category === 'produtos').length },
  { id: 'interior', name: 'Interior', count: photoGallery.filter(p => p.category === 'interior').length },
  { id: 'ambiente', name: 'Ambiente', count: photoGallery.filter(p => p.category === 'ambiente').length }
];

// Informações de contato e endereço
export const contactInfo = {
  address: {
    street: 'Av. Oito de Abril',
    neighborhood: 'Porto',
    city: 'Cuiabá',
    state: 'Mato Grosso',
    zipCode: '78045-700',
    fullAddress: 'Av. Oito de Abril - Porto, Cuiabá - MT, 78045-700'
  },
  coordinates: {
    lat: -15.613900741291369,
    lng: -56.11022492881828
  },
  phone: '(65) 99342-3369',
  schedule: {
    'segunda-feira': '05:00–18:00',
    'terça-feira': '05:00–18:00',
    'quarta-feira': '05:00–18:00',
    'quinta-feira': '05:00–18:00',
    'sexta-feira': '05:00–18:00',
    'sábado': '05:00–18:00',
    'domingo': '05:00–14:00'
  },
  transport: [
    'Ônibus: Linhas urbanas com paradas próximas',
    'Estacionamento: +400 vagas gratuitas',
    'Taxi/Uber: Acesso fácil pela Av. Oito de Abril',
    'A pé: Centro histórico de Cuiabá'
  ],
  accessibility: [
    'Acessibilidade melhorada na revitalização',
    'Banheiros acessíveis',
    'Corredores amplos para cadeirantes'
  ],
  improvements: [
    'Câmaras frias exclusivas',
    'Quadros de energia individualizados', 
    'Medidores de água individuais',
    'Sistema de climatização',
    'Calçamento renovado',
    'Sistema de drenagem melhorado',
    'Telhado substituído'
  ],
  history: {
    name: 'Mercado Antônio Moysés Nadaf',
    nickname: 'Mercado do Porto',
    slogan: 'Tradição, qualidade e frescor no coração de Cuiabá',
    location: 'Coração histórico e cultural de Cuiabá',
    revitalization: 'Segunda etapa entregue em dezembro de 2024',
    president: 'Jorge Antônio Lemes Júnior',
    spaces: '176 espaços comerciais'
  }
}; 