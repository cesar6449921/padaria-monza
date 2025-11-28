import { useState, useEffect, useRef } from 'react';
import { Download, Coffee, Cake, PartyPopper, ChevronRight, Star, ShoppingBag } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Componente para animação de scroll
const FadeIn = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });
        if (domRef.current) observer.observe(domRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={domRef}
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const categories = [
    { id: 'encomendas', label: 'Kits Festa', icon: PartyPopper },
    { id: 'bolos', label: 'Bolos & Tortas', icon: Cake },
    { id: 'salgados', label: 'Salgados', icon: ShoppingBag },
    { id: 'cafe', label: 'Cafeteria', icon: Coffee },
];

const menuItems = {
    encomendas: [
        { title: 'Kit Festa Clássico', desc: 'Bolo 15 fatias, 50 salgados, 20 docinhos e refrigerante.', price: 'A partir de R$ 289,90', image: '/images/cardapio/cardapio_img_5.png' },
        { title: 'Kit Coffee Break', desc: 'Mini sanduíches, pães de queijo, bolo caseiro e garrafa de café.', price: 'Sob consulta', image: '/images/cardapio/cardapio_img_8.png' },
        { title: 'Cesta de Café da Manhã', desc: 'Seleção premium de pães, frios, frutas e suco natural.', price: 'A partir de R$ 159,90', image: '/images/cardapio/cardapio_img_12.png' },
    ],
    bolos: [
        { title: 'Torta de Morango', desc: 'Massa branca leve, creme de confeiteiro e morangos frescos.', price: 'R$ 89,90 /kg', image: '/images/cardapio/cardapio_img_15.png' },
        { title: 'Bolo Chocolate Trufado', desc: 'Camadas generosas de chocolate nobre e ganache.', price: 'R$ 95,90 /kg', image: '/images/cardapio/cardapio_img_18.png' },
        { title: 'Red Velvet', desc: 'O clássico veludo vermelho com frosting de cream cheese.', price: 'R$ 98,90 /kg', image: '/images/cardapio/cardapio_img_20.png' },
        { title: 'Banoffee', desc: 'Base crocante, doce de leite, banana e chantilly.', price: 'R$ 85,90 /kg', image: '/images/cardapio/cardapio_img_22.png' },
    ],
    salgados: [
        { title: 'Cento de Salgados', desc: 'Coxinhas, quibes, bolinhas de queijo e risoles.', price: 'R$ 110,00', image: '/images/cardapio/cardapio_img_25.png' },
        { title: 'Torta de Frango', desc: 'Massa podre que derrete na boca com recheio cremoso.', price: 'R$ 65,90 /kg', image: '/images/cardapio/cardapio_img_28.png' },
        { title: 'Empadão Goiano', desc: 'Recheio rico com frango, linguiça, guariroba e queijo.', price: 'R$ 72,90 /kg', image: '/images/cardapio/cardapio_img_30.png' },
    ],
    cafe: [
        { title: 'Cappuccino Italiano', desc: 'Espresso, leite vaporizado e cacau em pó.', price: 'R$ 12,90', image: '/images/cardapio/cardapio_img_35.png' },
        { title: 'Croissant de Amêndoas', desc: 'Massa folhada francesa com creme de amêndoas.', price: 'R$ 18,90', image: '/images/cardapio/cardapio_img_38.png' },
        { title: 'Toast de Avocado', desc: 'Pão de fermentação natural, avocado e ovos.', price: 'R$ 24,90', image: '/images/cardapio/cardapio_img_40.png' },
    ]
};

export default function Cardapio() {
    const [activeCategory, setActiveCategory] = useState('encomendas');

    const scrollToSection = (id) => {
        setActiveCategory(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-[#fcfaf7] min-h-screen font-sans text-monza-brown">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/image_2.jpeg"
                        alt="Mesa de café colonial"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#fcfaf7]" />
                </div>

                <div className="relative z-10 text-center px-4 pt-20">
                    <FadeIn>
                        <span className="inline-block py-1 px-3 rounded-full bg-monza-red/20 border border-monza-red/30 text-monza-red text-sm font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
                            Gastronomia & Tradição
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                            Nosso Cardápio
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
                            Explore nossas delícias artesanais, dos pães fresquinhos aos bolos de festa que encantam gerações.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* Sticky Navigation */}
            <div className="sticky top-[70px] z-40 bg-white/95 backdrop-blur shadow-sm border-b border-monza-cream/50 py-4 overflow-x-auto">
                <div className="max-w-6xl mx-auto px-4 flex gap-4 md:justify-center min-w-max">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => scrollToSection(cat.id)}
                            className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 font-semibold whitespace-nowrap ${activeCategory === cat.id
                                    ? 'bg-monza-red text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            <cat.icon className="w-4 h-4" />
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Menu Content */}
            <main className="max-w-6xl mx-auto px-4 py-16 space-y-24">
                {categories.map((cat) => (
                    <section key={cat.id} id={cat.id} className="scroll-mt-32">
                        <FadeIn>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-monza-cream rounded-full text-monza-red">
                                    <cat.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-monza-brown">
                                        {cat.label}
                                    </h2>
                                    <p className="text-gray-600 mt-1">Seleção especial feita com carinho</p>
                                </div>
                            </div>
                        </FadeIn>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {menuItems[cat.id].map((item, index) => (
                                <FadeIn key={index} delay={index * 100}>
                                    <div className="group bg-white rounded-2xl overflow-hidden shadow-soft border border-monza-cream hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="h-48 overflow-hidden relative">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <span className="text-white font-semibold flex items-center gap-1">
                                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> Destaque
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-serif font-bold text-monza-brown group-hover:text-monza-red transition-colors">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[40px]">
                                                {item.desc}
                                            </p>
                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <span className="font-bold text-lg text-monza-brown">{item.price}</span>
                                                <button className="w-8 h-8 rounded-full bg-monza-cream text-monza-red flex items-center justify-center hover:bg-monza-red hover:text-white transition-colors">
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </section>
                ))}
            </main>

            {/* PDF Download Section */}
            <section className="bg-monza-brown text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Prefere o cardápio em PDF?
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                            Baixe nosso catálogo completo de encomendas com todos os detalhes, preços e opções para o seu evento.
                        </p>
                        <a
                            href="https://padariamonza.com.br/wp-content/uploads/2025/06/cardapio-encomendas.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 bg-monza-red text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-monza-red transition-all duration-300 transform hover:scale-105"
                        >
                            <Download className="w-6 h-6" />
                            BAIXAR CARDÁPIO COMPLETO
                        </a>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </div>
    );
}
