import { Link } from 'react-router-dom';
import { Phone, MessageCircle, PhoneCall, Clock, Instagram, Facebook } from 'lucide-react';

const whatsappLink = 'https://api.whatsapp.com/send?phone=5527999999999';

export default function Footer() {
    return (
        <footer className="bg-[#1b1412] text-gray-400 py-12 border-t-4 border-monza-red">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-10">
                <div>
                    <img src="/images/image_15.png" alt="Logotipo Monza" className="h-12 w-auto mb-4" />
                    <p className="text-gray-400 leading-relaxed">
                        Há 42 anos levando tradição, qualidade e acolhimento para a Grande Vitória.
                    </p>
                    <div className="flex gap-3 mt-4">
                        <a
                            href="https://www.instagram.com/padariamonza/"
                            target="_blank"
                            rel="noreferrer"
                            className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/15 transition"
                        >
                            <Instagram className="w-5 h-5 text-white" />
                        </a>
                        <a
                            href="https://www.facebook.com/padaria.monza"
                            target="_blank"
                            rel="noreferrer"
                            className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/15 transition"
                        >
                            <Facebook className="w-5 h-5 text-white" />
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-3">Links rápidos</h4>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-white transition">Início</Link></li>
                        <li><a href="/#sobre" className="hover:text-white transition">Sobre</a></li>
                        <li><a href="/#encomendas" className="hover:text-white transition">Encomendas</a></li>
                        <li><Link to="/lojas" className="hover:text-white transition">Lojas</Link></li>
                        <li>
                            <a
                                href={`${whatsappLink}&text=Quero%20trabalhar%20na%20Monza`}
                                className="hover:text-white transition"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Trabalhe Conosco
                            </a>
                        </li>
                        <li>
                            <a
                                href={`${whatsappLink}&text=Quero%20ser%20fornecedor%20da%20Monza`}
                                className="hover:text-white transition"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Seja um Fornecedor
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-3">Contatos</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-monza-red" /> (27) 3000-0000 - Encomendas</li>
                        <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-monza-red" /> (27) 99999-9999 - WhatsApp</li>
                        <li className="flex items-center gap-2"><PhoneCall className="w-4 h-4 text-monza-red" /> (27) 3000-0001 - Atendimento geral</li>
                        <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-monza-red" /> Encomendas: Seg-Sex, 8h às 18h</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-3">Institucional</h4>
                    <ul className="space-y-2">
                        <li>CNPJ: 00.000.000/0001-00</li>
                        <li><a href="/#historia" className="hover:text-white transition">História</a></li>
                        <li><a href="/#social" className="hover:text-white transition">Prova social</a></li>
                        <li><a href="/#contato" className="hover:text-white transition">Contato</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
                2025 © Padaria e Confeitaria Monza. Todos os direitos reservados.
            </div>
        </footer>
    );
}
