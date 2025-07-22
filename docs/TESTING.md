# Guia de Testes - AppleDroidGV

## Configuração para Testes Futuros

Para implementar testes unitários neste projeto, recomenda-se instalar:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

### Configuração Vitest (vitest.config.ts)
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### Setup de Testes (src/test/setup.ts)
```typescript
import '@testing-library/jest-dom'
```

## Componentes Prioritários para Teste

### 1. Header Component
- ✅ Renderização do logo e nome da empresa
- ✅ Menu de navegação desktop/mobile
- ✅ Toggle do menu mobile
- ✅ Bloqueio de scroll quando menu aberto
- ✅ Fechamento com tecla Escape
- ✅ Links do WhatsApp funcionais
- ✅ Atributos de acessibilidade

### 2. ProductSection Component
- ✅ Renderização dos produtos
- ✅ Imagens com alt text apropriado
- ✅ Preços e descrições corretas
- ✅ Botões WhatsApp funcionais
- ✅ Badges "Original" presentes
- ✅ Estrutura de lista acessível

### 3. useWhatsApp Hook
- ✅ Geração correta de links
- ✅ Mensagens pré-definidas
- ✅ Codificação de caracteres especiais
- ✅ Número do WhatsApp correto

### 4. DifferentialsSection Component
- ✅ Renderização dos 6 diferenciais
- ✅ Ícones e textos apropriados
- ✅ Animações hover funcionais
- ✅ Badge de garantia Apple

### 5. Testes de Integração
- ✅ Navegação entre seções
- ✅ Scroll suave para âncoras
- ✅ Responsividade em diferentes dispositivos
- ✅ Performance de carregamento

## Comandos de Teste Recomendados

```bash
# Executar todos os testes
npm run test

# Executar testes em modo watch
npm run test:watch

# Executar testes com coverage
npm run test:coverage

# Executar testes específicos
npm run test Header.test.tsx
```

## Padrões de Teste

### Estrutura de Teste
```typescript
describe('ComponentName', () => {
  beforeEach(() => {
    // Setup antes de cada teste
  });

  it('should render correctly', () => {
    // Teste de renderização básica
  });

  it('should handle user interactions', () => {
    // Teste de interações do usuário
  });

  it('should have proper accessibility', () => {
    // Teste de acessibilidade
  });
});
```

### Mocks Recomendados
- useWhatsApp hook
- Imagens dos produtos
- APIs externas (se houver)
- LocalStorage/SessionStorage
- Window.location

## Métricas de Cobertura Alvo

- **Statements**: >90%
- **Branches**: >85%
- **Functions**: >90%
- **Lines**: >90%

## Testes de Acessibilidade

Usar `@testing-library/jest-dom` para:
- Verificar aria-labels
- Testar navegação por teclado
- Validar estrutura semântica HTML
- Conferir contraste de cores
- Testar screen readers compatibility