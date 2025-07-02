# 🏪 Mercado do Porto Digital

Uma aplicação web moderna para o histórico **Mercado do Porto de Cuiabá**, desenvolvida em React para conectar feirantes e consumidores.

![Mercado do Porto](https://images.unsplash.com/photo-1567826722186-9b3d63c8787e?w=800&h=400&fit=crop)

## ✨ Funcionalidades

### 🏠 **Página Inicial**
- **Busca inteligente** de produtos e feirantes
- **Categorias interativas** (Peixes, Carnes, Verduras, Frutas, Temperos)
- **Grid de produtos** com informações detalhadas
- **Links diretos** para WhatsApp dos feirantes

### 👥 **Feirantes**
- **Perfis completos** dos vendedores
- **Avaliações e especializações**
- **Horários de funcionamento**
- **Localização no mercado**
- **Produtos principais**
- **Contato direto** (WhatsApp e Email)

### 📚 **História Institucional**
- **Timeline histórica** completa (1899-2024)
- **Marcos importantes** do Mercado do Porto
- **Patrimônio histórico** e cultural
- **Estrutura atual** e modernizações
- **Fontes históricas** documentadas

## 🏛️ História do Mercado do Porto

O **Mercado Varejista Antônio Moisés Nadaf** é um patrimônio histórico, artístico e cultural de Cuiabá com mais de 125 anos de história:

- **1899**: Construção do primeiro Mercado Municipal do Peixe
- **1974**: Transferência devido à grande enchente
- **1983**: Tombamento pelo IPHAN
- **1995**: Inauguração do mercado atual no "Campo do Bode"
- **2024**: Modernização com infraestrutura padrão A

*Fonte: [Prefeitura de Cuiabá](https://www.cuiaba.mt.gov.br/noticias/mercado-do-porto-segunda-etapa-do-processo-de-requalificacao-entra-na-reta-final-com-novo-piso-em-fase-de-implantacao), [História do Mercado do Porto](https://extensaoantropologia.wordpress.com/2013/04/11/a-historia-do-mercado-do-porto-de-cuiaba/)*

## 🚀 Tecnologias

- **React 18** + **Vite**
- **Lucide React** (ícones)
- **CSS moderno** com animations
- **Design responsivo**
- **PWA ready**

## 📱 Características

- ✅ **Interface moderna** e intuitiva
- ✅ **Totalmente responsivo** (mobile-first)
- ✅ **Navegação fluida** entre seções
- ✅ **Busca em tempo real**
- ✅ **Links WhatsApp** funcionais
- ✅ **Otimizado** para produção
- ✅ **Acessível** e inclusivo

## 🎯 Deploy para Produção

### **Para Apache com subdiretório `/feira/`:**

```bash
# Build automático
./deploy-feira.sh

# Upload manual
unzip mercado-do-porto-complete.zip -d /var/www/html/feira/
```

### **Configuração Apache:**
```apache
# Habilitar mod_rewrite
LoadModule rewrite_module modules/mod_rewrite.so

# Permitir .htaccess
<Directory "/var/www/html">
    AllowOverride All
</Directory>
```

## 📦 Estrutura do Projeto

```
mercado-do-porto/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos da aplicação
│   └── main.jsx         # Entry point
├── dist/                # Build de produção
├── deploy-feira.sh      # Script de deploy
└── *.zip               # Arquivos prontos para upload
```

## 🌐 URLs de Acesso

- **Desenvolvimento**: `http://localhost:5173`
- **Produção**: `http://seusite.com/feira/`

## 📊 Dados Inclusos

- **6 feirantes** cadastrados com informações completas
- **6 produtos** em destaque com imagens otimizadas
- **6 categorias** de produtos organizadas
- **Timeline histórica** com 6 marcos importantes

## 🎨 Design System

- **Cores primárias**: Verde (#439355) e gradientes
- **Tipografia**: Segoe UI, system fonts
- **Componentes**: Cards, timeline, grid responsivo
- **Animações**: Transições suaves e hover effects

## 📄 Licença

Desenvolvido com ❤️ para a comunidade cuiabana.

---

**© 2025 Mercado do Porto Digital** - Preservando tradições, abraçando o futuro.
