import React from 'react';
import { Star, ArrowRight, ShoppingBag } from 'lucide-react';

const ChefShowcase = () => {
    const chefs = [
        {
            id: 1,
            name: 'Best Chef in Field',
            image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&h=800&fit=crop',
            rating: 4.5,
            ratingLabel: 'Good Taste!',
            description: 'A line of tasty and healthy specialities rich in fiber and vegetable protein baked specially for you and your loved ones, directly from the oven. Taste and See, the wonders of Mybakery.',
            position: 'left',
            productCard: {
                name: 'Doughnut',
                price: '$3.55/Slice',
                image: '/images/doughnut.jpg'
            }
        },
        {
            id: 2,
            name: 'Discover Goodness',
            image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=800&fit=crop',
            rating: 4.8,
            ratingLabel: 'Excellent!',
            description: 'A line of tasty and healthy specialities rich in fiber and vegetable protein baked specially for you and your loved ones, directly from the oven. Taste and See, the wonders of Mybakery.',
            position: 'right',
            productCard: {
                name: 'Doughnut',
                price: '$3.55/Slice',
                image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=200&h=200&fit=crop'
            }
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {chefs.map((chef, index) => (
                    <div
                        key={chef.id}
                        className={`flex flex-col ${chef.position === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
                            } items-center gap-12 mb-32 last:mb-0`}
                    >
                        {/* Chef Image Section */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative">
                                {/* Decorative Circle */}
                                <div className={`absolute ${chef.position === 'left' ? 'left-0' : 'right-0'
                                    } top-1/2 -translate-y-1/2 w-[400px] h-[400px] border-[3px] border-black rounded-full ${chef.position === 'left' ? '-translate-x-12' : 'translate-x-12'
                                    }`} />

                                {/* Chef Image */}
                                <div className="relative z-10 w-[380px] h-[380px] mx-auto rounded-full overflow-hidden shadow-2xl">
                                    <img
                                        src={chef.image}
                                        alt={chef.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Floating Rating Card */}
                                <div className={`absolute ${chef.position === 'left' ? 'right-8 top-12' : 'left-8 top-12'
                                    } bg-white rounded-2xl shadow-xl p-4 z-20 animate-float`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center">
                                            <Star className="w-6 h-6 text-white fill-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-800">{chef.rating}/5</div>
                                        </div>
                                    </div>
                                    <div className="text-sm font-medium text-gray-600">{chef.ratingLabel}</div>
                                </div>

                                {/* Floating Product Card */}
                                {chef.productCard && chef.position === 'right' && (
                                    <div className="absolute right-0 bottom-16 bg-white rounded-2xl shadow-xl p-4 z-20 animate-float-delayed">
                                        <div className="flex items-center gap-3">
                                            <div className="w-16 h-16 bg-orange-100 rounded-lg overflow-hidden">
                                                <img
                                                    src={chef.productCard.image}
                                                    alt={chef.productCard.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-800">{chef.productCard.name}</div>
                                                <div className="text-sm text-gray-600">{chef.productCard.price}</div>
                                            </div>
                                        </div>
                                        <button className="mt-3 w-full bg-orange-400 text-white text-sm font-semibold py-2 rounded-lg hover:bg-orange-500 transition">
                                            Add Item
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                {chef.name}
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {chef.description}
                            </p>
                            <button className="group bg-black text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-xl">
                                <ShoppingBag className="w-5 h-5" />
                                ORDER NOW
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChefShowcase;
