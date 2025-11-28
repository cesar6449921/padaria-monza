import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Clock, Instagram, Facebook, MapPin } from 'lucide-react';

const whatsappLink = 'https://api.whatsapp.com/send?phone=5527999999999';

export default function Header() {
    return (
        <div className="fixed w-full z-50 drop-shadow">
            <div className="bg-monza-red text-white text-xs md:text-sm py-2">
                <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-wrap">
                        <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> (27) 3000-0001</span>
                        <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> (27) 99999-9999</span>
                        <span className="hidden sm:inline-flex items-center gap-2"><Clock className="w-4 h-4" /> Encomendas: Seg-Sex, 8h-18h</span>
                    </div>
                    <div className="hidden md:flex items-center gap-3 text-white/80">
                        <a href="https://www.instagram.com/padariamonza/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                            <Instagram className="w-4 h-4" /> Instagram
                        </a>
                        <span className="w-px h-4 bg-white/40" />
                        <a href="https://www.facebook.com/padaria.monza" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                            <Facebook className="w-4 h-4" /> Facebook
                        </a>
                    </div>
                </div>
            </div>
            <nav className="bg-white/95 backdrop-blur border-b border-monza-cream/60">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/images/image_1.png" alt="Padaria Monza" className="h-12 w-auto object-contain" />
                        <div className="hidden sm:block leading-tight">
                            <p className="text-xs uppercase tracking-[0.2em] text-monza-red font-bold">Desde 1983</p>
                            <p className="text-sm text-monza-brown">Sabor em todos os momentos</p>
                        </div>
                    </Link>
                    <div className="hidden lg:flex items-center gap-8 font-medium ml-6">
                        <Link to="/" className="hover:text-monza-red transition">Início</Link>
                        <a href="/#sobre" className="hover:text-monza-red transition">Sobre</a>
                        <a href="/#produtos" className="hover:text-monza-red transition">Produtos</a>
                        <Link to="/lojas" className="hover:text-monza-red transition">Lojas</Link>
                        <a href="/#historia" className="hover:text-monza-red transition">História</a>
                        <a href="/#contato" className="hover:text-monza-red transition">Contato</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href={`${whatsappLink}&text=Quero%20fazer%20uma%20encomenda%20com%20a%20Padaria%20Monza`}
                            className="bg-[#25D366] text-white h-10 px-4 md:px-5 rounded-full font-semibold shadow-lg hover:bg-green-600 transition flex items-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" /> Encomendar
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
