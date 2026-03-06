import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, TrendingUp, Users } from 'lucide-react'

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="badge"
                    >
                        Sua presença digital começa aqui
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Seu negócio precisa de um <span>site profissional</span> para vender mais e passar credibilidade.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="hero-subtitle"
                    >
                        Não deixe dinheiro na mesa por falta de uma estrutura digital. Transforme suas visitas em clientes reais com uma página pensada para conversão.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="hero-ctas"
                    >
                        <a href="https://wa.me/557374009455" target="_blank" rel="noreferrer" className="btn btn-primary">
                            Quero meu site profissional <ArrowRight size={20} />
                        </a>
                        <a href="#beneficios" className="btn btn-secondary">
                            Ver benefícios
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="hero-trust"
                    >
                        <div className="trust-item"><CheckCircle2 size={18} /> Design Estratégico</div>
                        <div className="trust-item"><CheckCircle2 size={18} /> Foco em Conversão</div>
                        <div className="trust-item"><CheckCircle2 size={18} /> Suporte Especializado</div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="hero-image-container"
                >
                    <div className="hero-image-wrapper">
                        {/* Placeholder for Paloma's Image */}
                        <img src="/paloma-hero.png" alt="Paloma Dev" className="hero-main-img" />
                        <div className="floating-card card-1">
                            <div className="icon-box"><TrendingUp size={20} stroke="#C97A87" /></div>
                            <div>
                                <p>+45%</p>
                                <span>Em conversões</span>
                            </div>
                        </div>
                        <div className="floating-card card-2">
                            <div className="icon-box"><Users size={20} stroke="#C97A87" /></div>
                            <div>
                                <p>Presença Real</p>
                                <span>No digital</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
