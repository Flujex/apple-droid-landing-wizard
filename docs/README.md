# AppleDroidGV - Landing Page

## 🎯 Visão Geral
Landing page moderna e responsiva para a AppleDroidGV, loja especializada em iPhones originais em Governador Valadares, MG. Focada em conversão via WhatsApp com design atrativo e acessível.

## 🏗️ Arquitetura do Projeto

### Estrutura de Pastas
```
src/
├── components/           # Componentes React reutilizáveis
│   ├── ui/              # Componentes base (shadcn/ui)
│   ├── Header.tsx       # Cabeçalho com menu responsivo
│   ├── HeroSection.tsx  # Seção principal de apresentação
│   ├── ProductSection.tsx # Showcase dos iPhones
│   ├── AccessoriesSection.tsx # Acessórios Apple
│   ├── DifferentialsSection.tsx # Diferenciais da loja
│   ├── TestimonialsSection.tsx # Depoimentos de clientes
│   ├── FAQSection.tsx   # Perguntas frequentes
│   ├── FinalCTASection.tsx # Call-to-action final
│   └── Footer.tsx       # Rodapé com informações
├── hooks/               # Hooks personalizados
│   └── useWhatsApp.ts   # Lógica de links WhatsApp
├── assets/              # Imagens e recursos
├── pages/               # Páginas da aplicação
└── lib/                 # Utilitários e configurações
```

## 🎨 Design System

### Paleta de Cores
```css
/* Cores principais baseadas no logo AppleDroidGV */
--primary: 20 95% 58%      /* Laranja vibrante */
--accent: 91 45% 58%       /* Verde destaque */
--whatsapp: 142 70% 49%    /* Verde WhatsApp */
--background: 0 0% 100%    /* Branco */
--foreground: 20 14% 12%   /* Texto escuro */
```

### Tipografia
- **Headings**: Inter/Poppins, bold
- **Body**: Sans-serif, regular/medium
- **Escala**: H1 (4xl-6xl), H2 (2xl-4xl), H3 (xl-2xl)

### Espaçamentos
- **Seções**: `.section-padding` (py-16 md:py-20 lg:py-24)
- **Container**: `.container-spacing` (px-4 md:px-6 lg:px-8)

## 🧩 Componentes Principais

### Header
- **Funcionalidades**: Menu responsivo, logo oficial, botão WhatsApp
- **Acessibilidade**: ARIA labels, navegação por teclado, foco visual
- **Mobile**: Menu overlay, bloqueio de scroll, animações suaves

### ProductSection
- **Conteúdo**: 3 modelos de iPhone com imagens, preços e CTAs
- **WhatsApp**: Links personalizados por produto
- **Acessibilidade**: Alt text descritivo, estrutura semântica

### useWhatsApp Hook
```typescript
const { generateWhatsAppLink, links, phoneNumber } = useWhatsApp();

// Links pré-definidos
links.general      // Contato geral
links.chooseIphone // Escolher iPhone
links.accessories  // Acessórios
links.support      // Suporte
links.pricing      // Preços
links.store        // Informações da loja
links.final        // CTA final
```

## 🔧 Tecnologias Utilizadas

### Core
- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização utilitária

### UI/UX
- **shadcn/ui** - Componentes base
- **Lucide React** - Ícones SVG
- **Radix UI** - Primitivos acessíveis
- **CSS Custom Properties** - Design tokens

### Funcionalidades
- **React Router** - Navegação SPA
- **TanStack Query** - State management
- **React Hook Form** - Formulários (se necessário)

## 🎯 Otimizações Implementadas

### Performance
- ✅ Lazy loading de imagens
- ✅ Componentes otimizados com React.memo
- ✅ Bundle splitting automático
- ✅ Compressão de assets

### SEO
- ✅ Meta tags otimizadas
- ✅ Estrutura semântica HTML5
- ✅ Schema markup (futuro)
- ✅ Sitemap.xml (futuro)

### Acessibilidade
- ✅ WCAG 2.1 AA compliance
- ✅ Navegação por teclado
- ✅ Screen reader compatibility
- ✅ Contraste adequado
- ✅ Focus management

### UX
- ✅ Design mobile-first
- ✅ Animações suaves
- ✅ Loading states
- ✅ Error boundaries
- ✅ Progressive enhancement

## 📱 Responsividade

### Breakpoints
```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Estratégia
- **Mobile-first**: Estilos base para mobile
- **Progressive enhancement**: Melhorias em telas maiores
- **Fluid typography**: Escalas responsivas
- **Flexible layouts**: Grid e flexbox

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint

# Formatação
npm run format

# Testes (futuro)
npm run test
```

## 🔮 Roadmap Futuro

### Funcionalidades
- [ ] Sistema de avaliações
- [ ] Chat ao vivo integrado
- [ ] Catálogo de produtos dinâmico
- [ ] Sistema de agendamento
- [ ] Blog integrado

### Técnicas
- [ ] PWA (Progressive Web App)
- [ ] Service Worker para cache
- [ ] Testes automatizados
- [ ] CI/CD pipeline
- [ ] Monitoramento de performance

### Analytics
- [ ] Google Analytics 4
- [ ] Facebook Pixel
- [ ] Hotjar/Mixpanel
- [ ] Conversion tracking

## 🤝 Contribuição

### Padrões de Código
- **ESLint + Prettier** para consistência
- **Conventional Commits** para mensagens
- **TypeScript strict mode** habilitado
- **Componentes funcionais** apenas

### Pull Request Process
1. Fork do repositório
2. Branch feature/fix específica
3. Implementação com testes
4. Review de código
5. Merge após aprovação

---

**Desenvolvido com ❤️ para AppleDroidGV**  
*12 anos conectando Governador Valadares ao universo Apple*