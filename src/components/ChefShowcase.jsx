import React from 'react';
import { Star, ArrowRight, ShoppingBag } from 'lucide-react';

const ChefShowcase = () => {
    const chefs = [
        {
            id: 1,
            name: 'Excelência que Você Prova no Primeiro Bite',
            image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&h=800&fit=crop',
            rating: 4.5,
            ratingLabel: 'Qualidade Premium',
            description: 'Nossos chefs dominam a arte da panificação, criando receitas que unem textura, aroma e sabor em perfeita harmonia. Produtos frescos, feitos diariamente, para transformar qualquer momento em uma experiência especial.',
            position: 'left',
            productCard: {
                name: 'Doughnut',
                price: '$3.55/Slice',
                image: '/images/doughnut.jpg'
            }
        },
        {
            id: 2,
            name: 'Onde a Paixão Pela Padaria Ganha Forma',
            image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=800&fit=crop',
            rating: 4.8,
            ratingLabel: 'Excelente!',
            description: 'Aqui, cada criação nasce do cuidado, da técnica e do olhar atento dos nossos especialistas. Do forno à sua mesa, oferecemos produtos que celebram qualidade, tradição e o prazer de saborear algo realmente bem-feito.',
            position: 'right',
            productCard: {
                name: 'Pão Artesanal',
                price: 'R$ 8,50/un',
                image: '/images/image_10.jpg'
            }
        }
    ];

    return (
        <section className="py-20 bg-monza-cream/30">
            <div className="max-w-7xl mx-auto px-4">
                {chefs.map((chef, index) => (
                    <div
                        key={chef.id}
                        className={`flex flex-col ${chef.position === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
                            } items-center gap-16 mb-32 last:mb-0`}
                    >
                        {/* Chef Image Section */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative">
                                {/* Decorative Circle */}
                                <div className={`absolute ${chef.position === 'left' ? 'left-0' : 'right-0'
                                    } top-1/2 -translate-y-1/2 w-[400px] h-[400px] border-[4px] border-monza-red rounded-full ${chef.position === 'left' ? '-translate-x-12' : 'translate-x-12'
                                    }`} />

                                {/* Chef Image */}
                                <div className="relative z-10 w-[380px] h-[380px] mx-auto rounded-full overflow-hidden shadow-card">
                                    <img
                                        src={chef.image}
                                        alt={chef.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Floating Rating Card */}
                                <div className={`absolute ${chef.position === 'left' ? 'right-8 top-12' : 'left-8 top-12'
                                    } bg-white rounded-card shadow-card p-5 z-20 animate-float border border-monza-cream`}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-monza-red rounded-2xl flex items-center justify-center">
                                            <Star className="w-6 h-6 text-white fill-white" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-monza-brown">{chef.rating}/5</div>
                                        </div>
                                    </div>
                                    <div className="text-sm font-semibold text-monza-red">{chef.ratingLabel}</div>
                                </div>

                                {/* Floating Product Card */}
                                {chef.productCard && chef.position === 'right' && (
                                    <div className="absolute right-0 bottom-16 bg-white rounded-card shadow-card p-5 z-20 animate-float-delayed border border-monza-cream">
                                        <div className="flex items-center gap-3">
                                            <div className="w-16 h-16 bg-monza-cream rounded-2xl overflow-hidden">
                                                <img
                                                    src={chef.productCard.image}
                                                    alt={chef.productCard.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-bold text-monza-brown">{chef.productCard.name}</div>
                                                <div className="text-sm text-gray-600 font-medium">{chef.productCard.price}</div>
                                            </div>
                                        </div>
                                        <a
                                            href="https://api.whatsapp.com/send?phone=5527999999999&text=Gostaria%20de%20ver%20o%20card%C3%A1pio"
                                            className="mt-3 w-full bg-monza-red text-white text-sm font-semibold py-2.5 rounded-button hover:bg-monza-dark transition-all duration-300 hover:scale-105 inline-block text-center"
                                        >
                                            Cardápio
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-monza-brown mb-6 leading-tight">
                                {chef.name}
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                                {chef.description}
                            </p>
                            <a
                                href={`https://api.whatsapp.com/send?phone=5527999999999&text=Quero%20fazer%20um%20pedido`}
                                className="group inline-flex bg-monza-red text-white px-8 py-4 rounded-button font-semibold text-lg items-center gap-3 hover:bg-monza-dark transition-all duration-300 hover:scale-105 shadow-card hover:shadow-card-hover"
                            >
                                <ShoppingBag className="w-5 h-5" />
                                FAZER PEDIDO
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChefShowcase;
