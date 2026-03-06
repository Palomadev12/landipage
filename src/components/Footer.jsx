import React from 'react'
import { Instagram, MessageCircle, Heart } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">Paloma<span>Dev</span></div>
                        <p>Criando sites profissionais que transformam negócios e elevam sua autoridade no digital.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Navegação</h4>
                        <a href="#">Início</a>
                        <a href="#beneficios">Benefícios</a>
                        <a href="#faq">Dúvidas</a>
                    </div>

                    <div className="footer-social">
                        <h4>Siga-me</h4>
                        <div className="social-icons">
                            <a href="#" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
                            <a href="https://wa.me/557374009455" target="_blank" rel="noreferrer"><MessageCircle size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Paloma Dev. Todos os direitos reservados.</p>
                    <p className="made-with">Feito com <Heart size={14} fill="#C97A87" color="#C97A87" /> por Paloma Dev</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
