# Análise do Design Figma - Food Delivery App

## 📊 Informações Gerais
- **Nome**: Food delivery app Ui kit (Community)
- **Última modificação**: 2025-12-04
- **Autor**: Marvis Dosa

## 🎨 Paleta de Cores Extraída

### Cores Principais
```css
/* Background Principal */
--bg-cream: rgb(240, 210, 203); /* #F0D2CB */
--bg-light: rgb(236, 242, 247); /* #ECF2F7 */

/* Cores de Destaque */
--accent-pink: rgb(255, 112, 206); /* #FF70CE */
--accent-orange: rgb(255, 6, 0); /* #FF0600 */
--accent-rose: rgb(247, 145, 153); /* #F79199 */

/* Texto */
--text-primary: rgb(0, 0, 0); /* #000000 */
--text-secondary: rgba(0, 0, 0, 0.7); /* 70% opacity */

/* Neutros */
--gray: rgb(196, 196, 196); /* #C4C4C4 */
```

## ✍️ Tipografia

### Fonte Principal
- **Família**: Inter
- **Pesos usados**: 
  - Regular (400)
  - Medium (500)
  - SemiBold (600)
  - Bold (700)

### Tamanhos de Fonte
```css
--font-hero: 90px;        /* Títulos principais */
--font-subtitle: 24px;    /* Subtítulos */
--font-body: 16px;        /* Texto corpo */
--font-small: 14px;       /* Texto pequeno */
```

## 📐 Espaçamento e Layout

### Border Radius
- Cards de imagem: 30px
- Botões: 20-25px (estimado)

### Shadows
```css
/* Sombra suave para cards */
box-shadow: 30px 50px 100px rgba(0, 0, 0, 0.05);

/* Blur effects */
backdrop-filter: blur(100px);
filter: blur(150px); /* Para elementos de fundo */
```

## 🎯 Componentes Identificados

### 1. Hero Section
- Background com gradiente blur
- Imagens de comida com cantos arredondados (30px)
- Título grande (90px, Inter Medium)
- Subtítulo com opacidade reduzida

### 2. Cards de Produto
- Dimensões: ~370-400px largura x 835-840px altura
- Border radius: 30px
- Imagens em destaque
- Efeitos de blur para profundidade

### 3. Layout de Apresentação
- Grid com múltiplas imagens sobrepostas
- Efeito de profundidade com blur
- Background com formas geométricas coloridas

## 🚀 Recomendações para Padaria Monza

### Adaptações Sugeridas

1. **Cores**:
   - Manter o vermelho Monza (#C8102E) como cor principal
   - Usar o cream/bege do Figma como background secundário
   - Adicionar os efeitos de blur para modernizar

2. **Tipografia**:
   - Já usamos Inter ✅
   - Adicionar mais variações de peso (Medium, SemiBold)

3. **Componentes**:
   - Implementar cards de produtos com border-radius 30px
   - Adicionar sombras suaves aos cards
   - Usar backdrop-filter para efeitos glassmorphism

4. **Hero Section**:
   - Criar versão similar com imagens de pães/bolos
   - Usar blur effects no background
   - Título grande e impactante

## 📝 Próximos Passos

1. Atualizar `tailwind.config.js` com novas cores
2. Criar componentes de card modernos
3. Implementar hero section com blur effects
4. Adicionar animações suaves (já temos algumas)
