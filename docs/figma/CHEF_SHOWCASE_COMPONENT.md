# 🎨 Chef Showcase Component - Documentação Final

## ✅ Visão Geral

Componente moderno de destaque para chefs e produtos, totalmente integrado à identidade visual da Padaria Monza e responsivo.

### 🎯 Características Principais:

1. **Design Híbrido (Figma + Monza)**
   - Layout inspirado no template "Bakery Shop" do Figma.
   - Identidade visual (cores, fontes) da Padaria Monza.
   - Imagens reais de produtos e placeholders profissionais.

2. **Estrutura Visual**
   - **Imagens Circulares**: Chefs em destaque com borda decorativa vermelha (#C8102E).
   - **Cards Flutuantes**:
     - *Rating*: Nota e selo de qualidade.
     - *Produto*: Destaque para item do cardápio com preço e botão.
   - **Layout Alternado**: Esquerda/Direita para dinamismo.

3. **Responsividade (Mobile First)** 📱
   - **Mobile**: Cards fixos, posicionados nas extremidades para não cobrir o rosto. Fontes e tamanhos ajustados.
   - **Desktop**: Layout amplo, cards posicionados estrategicamente.

4. **Conteúdo em Português** 🇧🇷
   - Textos focados na tradição e qualidade Monza.
   - Botões com Call-to-Action claro ("FAZER PEDIDO", "Cardápio").

5. **Integração WhatsApp** 💬
   - Botões redirecionam diretamente para o WhatsApp da padaria.
   - Mensagens personalizadas ("Quero fazer um pedido", "Gostaria de ver o cardápio").

---

## 🎨 Estilos e Identidade

### Cores
- **Principal**: Vermelho Monza (`#C8102E`)
- **Background**: Creme Suave (`monza-cream/30`)
- **Texto**: Marrom Monza (`monza-brown`)
- **Cards**: Branco com borda sutil (`monza-cream`)

### Tipografia
- **Títulos**: `Playfair Display` (Serif) - Elegância e tradição.
- **Corpo**: `Inter` (Sans) - Legibilidade moderna.

---

## 💻 Estrutura do Código

### Arquivo: `src/components/ChefShowcase.jsx`

```jsx
// Exemplo de estrutura de dados
const chefs = [
  {
    id: 1,
    name: 'Excelência que Você Prova...',
    image: 'url-da-imagem',
    rating: 4.5,
    ratingLabel: 'Qualidade Premium',
    position: 'left',
    // ...
  },
  // ...
];
```

### Imagens Utilizadas
- **Chef 1**: Unsplash (Placeholder profissional)
- **Chef 2**: Unsplash (Placeholder profissional)
- **Produto**: `/images/image_10.jpg` (Pão Artesanal Real)

---

## 🚀 Como Utilizar

O componente é importado e utilizado no `App.jsx`:

```jsx
import ChefShowcase from './components/ChefShowcase';

// ...
<HeroSection />
<AboutSection />
<ChefShowcase /> {/* Inserido aqui */}
<ProductsSection />
// ...
```

---

## 📊 Histórico de Mudanças

1. **Criação**: Baseado no template Figma (Bakery Shop).
2. **Adaptação**: Cores e fontes ajustadas para Padaria Monza.
3. **Conteúdo**: Tradução e copywriting focado na marca.
4. **Funcionalidade**: Botões transformados em links de WhatsApp.
5. **Mobile Fix**: Ajuste de posicionamento e remoção de animação flutuante em telas pequenas.

---

**Status**: ✅ Pronto e Integrado na branch `test-layout`.
