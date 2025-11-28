import { MapPin, Navigation, Clock, MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const whatsappLink = 'https://api.whatsapp.com/send?phone=5527992369900';

const stores = [
    { title: 'Shopping Vitória', address: 'Av. Américo Buaiz, 200', hours: '10h às 22h', query: 'Padaria+Monza+Shopping+Vitória', image: '/images/image_3.webp', alt: 'Loja Shopping Vitória' },
    { title: 'Enseada do Suá', address: 'Monza Empório', hours: '8h às 22h', query: 'Monza+Empório+Enseada+do+Suá', image: '/images/image_8.jpg', alt: 'Loja Enseada do Suá' },
    { title: 'Mata da Praia', address: 'Av. Adalberto Simão Nader', hours: '6h às 22h', query: 'Padaria+Monza+Mata+da+Praia', image: '/images/image_7.png', alt: 'Loja Mata da Praia' },
    { title: 'Itapuã', address: 'Vila Velha - ES', hours: '6h às 22h', query: 'Padaria+Monza+Itapuã', image: '/images/image_9.jpg', alt: 'Loja Itapuã' },
    { title: 'Ilha de Santa Maria', address: 'Vitória - ES', hours: '6h às 22h', query: 'Padaria+Monza+Ilha+Santa+Maria', image: '/images/image_10.jpg', alt: 'Loja Ilha de Santa Maria' },
    { title: 'Shopping Montserrat', address: 'Vila Velha - ES', hours: '10h às 22h', query: 'Padaria+Monza+Shopping+Montserrat', image: '/images/image_8.jpg', alt: 'Loja Shopping Montserrat' },
    { title: 'Shopping Vitória', address: 'Av. Américo Buaiz, 200', hours: '10h às 22h', query: 'Padaria+Monza+Shopping+Vitória', image: '/images/image_3.webp', alt: 'Loja Shopping Vitória' },
    { title: 'Praia da Costa', address: 'Shopping Praia da Costa', hours: '10h às 22h', query: 'Padaria+Monza+Praia+da+Costa', image: '/images/image_5.jpg', alt: 'Loja Praia da Costa' },
    { title: 'Praia do Canto', address: 'Rua Aleixo Neto, 1200', hours: '6h às 22h', query: 'Padaria+Monza+Praia+do+Canto', image: '/images/image_6.png', alt: 'Loja Praia do Canto' },
    { title: 'Jardim da Penha', address: 'Vitória - ES', hours: '6h às 22h', query: 'Padaria+Monza+Jardim+da+Penha', image: '/images/image_11.jpg', alt: 'Loja Jardim da Penha' },
    { title: 'Praia da Costa', address: 'Shopping Praia da Costa', hours: '10h às 22h', query: 'Padaria+Monza+Praia+da+Costa', image: '/images/image_5.jpg', alt: 'Loja Praia da Costa' },
    { title: 'Jardim Camburi', address: 'Vitória - ES', hours: '6h às 22h', query: 'Padaria+Monza+Jardim+Camburi', image: '/images/image_4.jpg', alt: 'Loja Jardim Camburi' },
];

export default function Lojas() {
    return (
        <div className="bg-[#f8f3e9] text-monza-brown font-sans antialiased">
            <Header />

            <main className="pt-36 md:pt-40 min-h-screen">
                {/* Header da página */}
                <div className="bg-white border-b border-monza-cream/60 py-16">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-monza-brown mb-4">
                            Nossas Lojas
                        </h1>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            12 unidades espalhadas pela Grande Vitória para servir você com qualidade e tradição
                        </p>
                    </div>
                </div>

                {/* Grid de lojas */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stores.map((store, index) => (
                            <div
                                key={`${store.title}-${index}`}
                                className="bg-white rounded-2xl overflow-hidden shadow-soft border border-monza-cream hover:-translate-y-2 transition-all duration-300"
                            >
                                {/* Imagem da loja */}
                                <div className="h-56 w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={store.image}
                                        alt={store.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Informações da loja */}
                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-bold text-monza-brown mb-3">
                                        {store.title}
                                    </h3>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-start gap-2 text-gray-700">
                                            <MapPin className="w-4 h-4 text-monza-red mt-1 flex-shrink-0" />
                                            <span className="text-sm">{store.address}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-gray-700">
                                            <Clock className="w-4 h-4 text-monza-red flex-shrink-0" />
                                            <span className="text-sm">{store.hours}</span>
                                        </div>
                                    </div>

                                    {/* Botão de como chegar */}
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${store.query}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-monza-red font-semibold text-sm hover:underline"
                                    >
                                        <Navigation className="w-4 h-4" />
                                        SAIBA MAIS →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mapa geral */}
                <div className="bg-white py-16 border-t border-monza-cream">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-serif font-bold text-monza-brown mb-3">
                                Encontre a loja mais próxima
                            </h2>
                            <p className="text-gray-700">
                                Veja todas as nossas unidades no mapa
                            </p>
                        </div>

                        <div className="rounded-3xl overflow-hidden border border-monza-cream shadow-soft">
                            <iframe
                                className="w-full h-[500px] block"
                                loading="lazy"
                                title="Mapa Padaria Monza - Todas as lojas"
                                allowFullScreen
                                src="https://www.google.com/maps?q=Vitória+ES+Padaria+Monza&output=embed"
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            {/* WhatsApp Float Button */}
            <a
                href={`${whatsappLink}&text=Quero%20fazer%20uma%20encomenda`}
                className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 whatsapp-float hover:bg-green-600 transition flex items-center justify-center"
            >
                <MessageCircle className="w-7 h-7" />
            </a>
        </div>
    );
}
