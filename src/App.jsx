import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  Coffee,
  Download,
  Facebook,
  FileText,
  Gift,
  Heart,
  Instagram,
  Layers,
  List,
  Map,
  MapPin,
  MessageCircle,
  MessageSquare,
  Navigation,
  Package,
  Phone,
  PhoneCall,
  Settings,
  Shield,
  ShoppingBag,
  Star,
  Sunrise,
  TrendingUp,
  Truck,
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChefShowcase from './components/ChefShowcase';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#encomendas', label: 'Encomendas' },
  { href: '/lojas', label: 'Lojas' },
  { href: '/cardapio', label: 'Cardápio' },
  { href: '#historia', label: 'História' },
  { href: '#contato', label: 'Contato' },
];

const heroStats = [
  { icon: Award, label: 'Desde 1983', value: '42 anos', desc: 'de história capixaba' },
  { icon: TrendingUp, label: 'Produção diária', value: '60 mil', desc: 'pães fresquinhos' },
  { icon: Layers, label: 'Variedade', value: '300+', desc: 'opções deliciosas' },
  { icon: Map, label: 'Presença', value: '12 lojas', desc: 'na Grande Vitória' },
];

const aboutPills = [
  'Produção 100% artesanal',
  'Central de encomendas dedicada',
  'Equipe treinada e acolhedora',
];

const aboutCards = [
  { icon: Settings, title: 'Produção central', text: 'Padronização, frescor e controle total de qualidade em 75% do portfólio.', variant: 'red' },
  { icon: Shield, title: 'Atendimento acolhedor', text: 'Tradição familiar, atendimento próximo e soluções rápidas pelo WhatsApp.' },
  { icon: Coffee, title: 'Gastronomia completa', text: 'Padaria, confeitaria, cafeteria gourmet, almoço e pizzas em um só lugar.' },
  { icon: Star, title: 'Conceito Empório', text: 'Novo formato premium na Enseada do Suá com experiências exclusivas.', variant: 'beige' },
];

const productCategories = [
  { icon: Sunrise, title: 'Pães artesanais', text: 'Fermentação natural, multigrãos e receitas especiais feitas diariamente.' },
  { icon: Gift, title: 'Bolos & tortas', text: 'Aniversários, casamentos e sobremesas que roubam a cena.' },
  { icon: Package, title: 'Encomendas para eventos', text: 'Kits completos, salgados sortidos, docinhos e cestas de presente.' },
  { icon: Coffee, title: 'Cafeteria gourmet', text: 'Cafés especiais, cappuccinos, frapuccinos e bebidas com Nutella.' },
  { icon: ShoppingBag, title: 'Salgados & lanches', text: 'Coxinhas, empadinhas, esfihas, quiches e sanduíches caprichados.' },
  { icon: Layers, title: 'Almoço & pizzas', text: 'Pratos executivos, self-service e pizzas assadas na hora.' },
];

const encomendaBullets = [
  'Bolos personalizados e tortas',
  'Salgados sortidos e kits café',
  'Cestas de presente e cafés especiais',
  'Atendimento ágil pelo WhatsApp',
];

const emporioHighlights = ['Cafés especiais', 'Produtos com Nutella', 'Empório de presentes'];

const stores = [
  { title: 'Shopping Vitória', address: 'Av. Américo Buaiz, 200', hours: '10h às 22h', query: 'Padaria+Monza+Shopping+Vitória', image: '/images/image_3.webp', alt: 'Loja Shopping Vitória' },
  { title: 'Praia da Costa', address: 'Shopping Praia da Costa', hours: '10h às 22h', query: 'Padaria+Monza+Praia+da+Costa', image: '/images/image_5.jpg', alt: 'Loja Praia da Costa' },
  { title: 'Praia do Canto', address: 'Rua Aleixo Neto, 1200', hours: '6h às 22h', query: 'Padaria+Monza+Praia+do+Canto', image: '/images/image_6.png', alt: 'Loja Praia do Canto' },
  { title: 'Mata da Praia', address: 'Av. Adalberto Simão Nader', hours: '6h às 22h', query: 'Padaria+Monza+Mata+da+Praia', image: '/images/image_7.png', alt: 'Loja Mata da Praia' },
  { title: 'Itapuã', address: 'Vila Velha - ES', hours: '6h às 22h', query: 'Padaria+Monza+Itapuã', image: '/images/image_9.jpg', alt: 'Loja Itapuã' },
  { title: 'Enseada do Suá', address: 'Monza Empório', hours: '8h às 22h', query: 'Monza+Empório+Enseada+do+Suá', image: '/images/image_8.jpg', alt: 'Loja Enseada do Suá' },
  { title: 'Jardim da Penha', address: 'Vitória - ES', hours: '6h às 22h', query: 'Padaria+Monza+Jardim+da+Penha', image: '/images/image_10.jpg', alt: 'Loja Jardim da Penha' },
  { title: 'Ilha de Santa Maria', address: 'Vitória - ES', hours: '6h às 22h', query: 'Padaria+Monza+Ilha+Santa+Maria', image: '/images/image_11.jpg', alt: 'Loja Ilha de Santa Maria' },
  { title: 'Fradinhos', address: 'Vitória - ES', hours: '6h às 22h', query: 'Padaria+Monza+Fradinhos', image: '/images/image_12.jpg', alt: 'Loja Fradinhos' },
  { title: 'Shopping Montserrat', address: 'Vila Velha - ES', hours: '10h às 22h', query: 'Padaria+Monza+Shopping+Montserrat', image: '/images/image_13.jpg', alt: 'Loja Shopping Montserrat' },
  { title: 'Barro Vermelho', address: 'Vitória - ES', hours: '6h às 22h', query: 'Padaria+Monza+Barro+Vermelho', image: '/images/image_14.jpg', alt: 'Loja Barro Vermelho' },
  { title: 'Jardim Camburi', address: 'Vitória - ES', hours: '6h às 22h', query: 'Padaria+Monza+Jardim+Camburi', image: '/images/image_4.jpg', alt: 'Loja Jardim Camburi' },
];

const timeline = [
  { year: '1983', title: 'Fundação na Ilha de Santa Maria', text: 'Primeira padaria Monza abre as portas com propósito familiar e acolhedor.' },
  { year: '1999', title: 'Expansão com consultoria e treinamento', text: 'Processos aprimorados e bases para crescer preservando a qualidade.' },
  { year: '2008-2010', title: 'Produção centralizada', text: 'Fábrica própria assume 100% do portfólio garantindo padronização.' },
  { year: '2016-2021', title: 'Chegada aos shoppings', text: 'Novas unidades no Shopping Vitória, Praia da Costa e Montserrat.' },
  { year: '2024-2025', title: 'Monza Empório e 12 lojas', text: 'Novo conceito premium na Enseada do Suá e 12 unidades operando.' },
];

const socialQuotes = [
  { icon: MessageSquare, title: 'Avaliação do iFood', text: '“Uma das padarias mais tradicionais do Espírito Santo. Sempre fresquinho e com atendimento impecável.”' },
  { icon: FileText, title: 'Folha Vitória', text: '“42 anos produzindo 60 mil pães por dia. A Monza é parte da rotina capixaba.”' },
  { icon: Heart, title: 'Comunidade', text: '“Mais que uma padaria, é ponto de encontro da família. O cheiro de pão quente é irresistível.”' },
];

const socialImages = [
  { src: '/images/image_3.webp', alt: 'Produtos Monza' },
  { src: '/images/image_5.jpg', alt: 'Loja Monza' },
  { src: '/images/image_4.jpg', alt: 'Café especial' },
  { src: '/images/image_6.png', alt: 'Pratos Monza' },
  { src: '/images/image_8.jpg', alt: 'Ambiente Monza' },
  { src: '/images/image_12.jpg', alt: 'Doces e tortas' },
];

const whatsappLink = 'https://api.whatsapp.com/send?phone=5527999999999';


function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1920&auto=format&fit=crop"
          alt="Pães saindo do forno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b1611]/80 via-[#3E2723]/70 to-[#C8102E]/60 backdrop-blur-sm" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-button text-xs uppercase tracking-[0.25em] font-semibold border border-white/30">
            42 anos de tradição
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mt-6">
            Tradição que aquece o coração há 42 anos
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-4 max-w-2xl font-medium">
            60 mil pães fresquinhos todos os dias, mais de 300 produtos e 12 lojas espalhadas pela Grande Vitória para
            você viver o sabor Monza.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
            <a
              href={`${whatsappLink}&text=Quero%20fazer%20uma%20encomenda%20com%20a%20Padaria%20Monza`}
              className="bg-[#25D366] text-white px-7 py-3.5 rounded-button font-semibold shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5" /> Fazer encomenda
            </a>
            <Link
              to="/cardapio"
              className="bg-white text-monza-red px-7 py-3.5 rounded-button font-semibold shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5" /> Ver Cardápio Digital
            </Link>
            <Link
              to="/lojas"
              className="bg-white/10 backdrop-blur-md border-2 border-white/60 text-white px-7 py-3.5 rounded-button font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" /> Ver lojas
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-4xl">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-card p-5 text-white shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/80 font-medium">
                <stat.icon className="w-4 h-4" /> {stat.label}
              </div>
              <p className="text-3xl font-serif font-bold mt-2">{stat.value}</p>
              <p className="text-sm text-white/80 font-medium">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-monza-red font-semibold mb-3">Quem somos</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-monza-brown mb-5 leading-tight">
              Sabor em todos os momentos, com qualidade que atravessa gerações.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              A Padaria e Confeitaria Monza nasceu em 1983 e se tornou referência de panificação no Espírito Santo.
              Produção centralizada, equipe especializada e receitas artesanais garantem o mesmo padrão em cada uma das
              12 lojas.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {aboutPills.map((pill) => (
                <span key={pill} className="px-5 py-2.5 rounded-button bg-monza-cream/50 backdrop-blur-sm text-monza-brown font-semibold text-sm border border-monza-cream hover:bg-monza-cream hover:scale-105 transition-all duration-300">
                  {pill}
                </span>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {aboutCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-card p-7 shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300 ${card.variant === 'red'
                  ? 'bg-monza-red text-white'
                  : card.variant === 'beige'
                    ? 'bg-monza-beige/80 backdrop-blur-sm text-monza-brown border border-monza-beige'
                    : 'bg-white text-monza-brown border border-monza-cream'
                  }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${card.variant === 'red' ? 'bg-white/20' : 'bg-monza-red/10'}`}>
                  <card.icon className={`w-7 h-7 ${card.variant === 'red' ? 'text-white' : 'text-monza-red'}`} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{card.title}</h3>
                <p className={`leading-relaxed font-medium ${card.variant === 'red' ? 'text-white/90' : 'text-gray-700'}`}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="produtos" className="py-20 bg-monza-cream/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-monza-red font-semibold">Portfólio completo</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-monza-brown mt-3">
            Mais de 300 produtos artesanais
          </h2>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg font-medium">
            Do pão francês que perfuma o bairro aos bolos personalizados que transformam festas. Escolha sua categoria
            favorita e faça seu pedido.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {productCategories.map((item) => (
            <div
              key={item.title}
              className="bg-white/80 backdrop-blur-sm rounded-card p-7 shadow-card border border-monza-cream/50 hover:shadow-card-hover hover:scale-105 hover:bg-white transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 text-monza-red font-semibold mb-3">
                <div className="p-3 bg-monza-red/10 rounded-2xl group-hover:bg-monza-red/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-lg">{item.title}</span>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EncomendasSection() {
  return (
    <section id="encomendas" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-soft">
            <img src="/images/image_2.jpeg" alt="Bolo de encomenda" className="w-full h-full object-cover min-h-[320px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2b1611]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 bg-white/90 text-monza-brown px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow">
              <Clock className="w-4 h-4" /> Entrega combinada para o seu evento
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-monza-red font-semibold mb-3">Encomendas</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-monza-brown mb-4">
              Festas, eventos e momentos especiais com assinatura Monza.
            </h2>
            <p className="text-gray-700 text-lg mb-5">
              Central dedicada para deixar sua celebração perfeita. Escolha produtos, informe a loja para retirada ou
              entrega e combine data e horário.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {encomendaBullets.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-monza-red mt-1" />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${whatsappLink}&text=Quero%20fazer%20uma%20encomenda%20para%20meu%20evento`}
                className="bg-monza-red text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-monza-dark transition flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Falar com a central
              </a>
              <a
                href={`${whatsappLink}&text=Envie%20o%20card%C3%A1pio%20de%20encomendas%2C%20por%20favor`}
                className="bg-white border border-monza-red text-monza-red px-6 py-3 rounded-full font-semibold hover:bg-monza-cream/60 transition flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" /> Baixar cardápio
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-3 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Atendimento: Segunda a Sexta, 8h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmporioSection() {
  return (
    <section id="emporio" className="py-16 bg-gradient-to-r from-[#2b1611] via-[#3E2723] to-[#C8102E] text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/80 font-semibold mb-3">Monza Empório</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Experiência premium na Enseada do Suá.</h2>
          <p className="text-white/90 text-lg mb-6">
            Ambiente sofisticado, cafeteria gourmet, produtos exclusivos e atendimento personalizado. O novo capítulo da
            nossa história.
          </p>
          <div className="flex flex-wrap gap-3">
            {emporioHighlights.map((item) => (
              <span key={item} className="px-4 py-2 rounded-full bg-white/15 border border-white/30 text-sm font-semibold">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a
              href={`${whatsappLink}&text=Quero%20saber%20mais%20sobre%20o%20Monza%20Emp%C3%B3rio`}
              className="bg-white text-monza-brown px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-monza-cream transition flex items-center justify-center gap-2"
            >
              <Star className="w-5 h-5" /> Conhecer o Empório
            </a>
            <a
              href="#lojas"
              className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" /> Ver localização
            </a>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-soft">
          <img src="/images/image_8.jpg" alt="Ambiente Monza Empório" className="w-full h-full object-cover min-h-[320px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 bg-white/90 text-monza-brown px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow">
            <MapPin className="w-4 h-4" /> Enseada do Suá - Vitória
          </div>
        </div>
      </div>
    </section>
  );
}

function StoresSection() {
  return (
    <section id="lojas" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-monza-red font-semibold">Nossas lojas</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-monza-brown">12 unidades na Grande Vitória.</h2>
            <p className="text-gray-700 mt-3 max-w-2xl">
              Escolha a mais próxima para retirar sua encomenda, tomar um café ou aproveitar nosso almoço.
            </p>
          </div>

        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:flex-[1.2] rounded-3xl overflow-hidden border border-monza-cream shadow-soft">
            <iframe
              className="w-full h-[360px] lg:h-full lg:min-h-[500px] block"
              loading="lazy"
              title="Mapa Padaria Monza"
              allowFullScreen
              src="https://www.google.com/maps?q=Vit%C3%B3ria%20ES%20Padaria%20Monza&output=embed"
            />
          </div>
          <div className="lg:flex-1 grid sm:grid-cols-2 gap-4 content-start">
            {stores.slice(0, 6).map((store) => (

              <div key={store.title} className="border border-monza-cream rounded-2xl shadow-soft overflow-hidden bg-white">
                <div className="h-36 w-full overflow-hidden">
                  <img src={store.image} alt={store.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-monza-red font-semibold">
                    <MapPin className="w-4 h-4" /> {store.title}
                  </div>
                  <p className="text-gray-700 mt-2">{store.address}</p>
                  <p className="text-sm text-gray-600">{store.hours}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${store.query}`}
                    className="text-monza-red text-sm font-semibold inline-flex items-center gap-1 mt-3 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Navigation className="w-4 h-4" /> Como chegar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/lojas"
            className="inline-flex items-center gap-2 bg-monza-red text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-monza-dark transition"
          >
            <List className="w-4 h-4" /> Ver todas as unidades
          </Link>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section id="historia" className="py-16 bg-[#fdf8f3]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-monza-red font-semibold">Nossa história</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-monza-brown mt-2">
            Linha do tempo de um sabor capixaba.
          </h2>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-monza-beige" />
          <div className="space-y-6 ml-10">
            {timeline.map((item) => (
              <div key={item.year} className="relative bg-white rounded-2xl shadow-soft border border-monza-cream p-6">
                <span className="absolute -left-8 top-6 w-4 h-4 rounded-full bg-monza-red border-4 border-white shadow" />
                <span className="text-monza-red font-semibold text-sm">{item.year}</span>
                <h3 className="text-2xl font-serif font-bold text-monza-brown">{item.title}</h3>
                <p className="text-gray-700 mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DeliverySection() {
  return (
    <section id="delivery" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-monza-red font-semibold">Delivery</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-monza-brown mt-2">
            Receba em casa com a mesma qualidade.
          </h2>
          <p className="text-gray-700 mt-3">Faça seu pedido pelo iFood ou fale direto pelo WhatsApp para combinações especiais.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-[#fdf8f3] border border-monza-cream rounded-2xl p-6 shadow-soft text-center">
            <Truck className="w-10 h-10 text-monza-red mx-auto mb-3" />
            <h3 className="text-xl font-serif font-bold text-monza-brown mb-2">iFood</h3>
            <p className="text-gray-700 mb-4">Entrega rápida nas principais regiões da Grande Vitória.</p>
            <a
              href="https://www.ifood.com.br"
              target="_blank"
              rel="noreferrer"
              className="text-monza-red font-semibold hover:underline inline-flex items-center gap-2 justify-center"
            >
              Fazer pedido <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="bg-[#fdf8f3] border border-monza-cream rounded-2xl p-6 shadow-soft text-center">
            <MessageCircle className="w-10 h-10 text-monza-red mx-auto mb-3" />
            <h3 className="text-xl font-serif font-bold text-monza-brown mb-2">WhatsApp</h3>
            <p className="text-gray-700 mb-4">Converse com a central, peça o cardápio e acompanhe seu pedido.</p>
            <a
              href={`${whatsappLink}&text=Quero%20fazer%20um%20pedido`}
              className="text-monza-red font-semibold hover:underline inline-flex items-center gap-2 justify-center"
            >
              Falar agora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialSection() {
  // Seleção das melhores imagens para o feed (mix de produtos e lojas)
  const instaImages = [
    { src: '/images/cardapio/cardapio_img_15.png', alt: 'Torta de Morango Monza' }, // Torta
    { src: '/images/image_3.webp', alt: 'Café da manhã colonial' }, // Mesa de café
    { src: '/images/cardapio/cardapio_img_35.png', alt: 'Cappuccino Especial' }, // Café
    { src: '/images/image_8.jpg', alt: 'Loja Enseada do Suá' }, // Loja bonita
    { src: '/images/cardapio/cardapio_img_22.png', alt: 'Banoffee' }, // Doce
    { src: '/images/image_5.jpg', alt: 'Fachada Praia da Costa' }, // Outra loja
  ];

  return (
    <section className="py-20 bg-[#f8f3e9] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="text-monza-red font-bold tracking-widest uppercase text-sm">Social</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-monza-brown mt-2">
              Siga @padariamonza
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Acompanhe nossos bastidores, novidades e promoções exclusivas no Instagram.
            </p>
          </div>
          <a
            href="https://www.instagram.com/padariamonza/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-monza-red font-bold hover:text-monza-brown transition-colors group"
          >
            <Instagram className="w-6 h-6" />
            Seguir no Instagram
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instaImages.map((img, index) => (
            <a
              key={index}
              href="https://www.instagram.com/padariamonza/"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 w-8 h-8 drop-shadow-lg" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {socialQuotes.map((quote, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-monza-cream/50 relative">
              <quote.icon className="w-10 h-10 text-monza-red/20 absolute top-8 right-8" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-monza-cream flex items-center justify-center text-monza-red">
                  <quote.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-monza-brown">{quote.title}</h3>
              </div>
              <p className="text-gray-600 italic leading-relaxed">{quote.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="py-16 bg-gradient-to-r from-monza-red to-monza-dark text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/80 font-semibold mb-2">Contato</p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Faça parte da nossa história de sabor.</h2>
        <p className="text-white/90 text-lg mb-6">
          Fale com a Central de Encomendas, baixe o cardápio ou encontre a loja mais próxima.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href={`${whatsappLink}&text=Quero%20fazer%20uma%20encomenda`}
            className="bg-white text-monza-red px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-monza-cream transition flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp (27) 99999-9999
          </a>
          <a
            href="tel:2730000000"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" /> Central (27) 3000-0000
          </a>
          <a
            href="#lojas"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5" /> Ver lojas
          </a>
        </div>
        <p className="text-sm text-white/80">Horário de encomendas: Seg a Sex, 8h às 18h</p>
      </div>
    </section>
  );
}



function WhatsappFloat() {
  return (
    <a
      href={`${whatsappLink}&text=Quero%20fazer%20uma%20encomenda`}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 whatsapp-float hover:bg-green-600 transition flex items-center justify-center"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

export default function App() {
  return (
    <div className="bg-[#f8f3e9] text-monza-brown font-sans antialiased scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ChefShowcase />
        <ProductsSection />
        <EncomendasSection />
        <EmporioSection />
        <StoresSection />
        <TimelineSection />
        <DeliverySection />
        <SocialSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
