import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, MessageCircle, ShieldCheck, Zap, Star, Layout } from 'lucide-react'

const solutions = [
    { icon: <MessageCircle size={24} />, title: 'Venda Mais', desc: 'Sua oferta clara e direta para o seu cliente.' },
    { icon: <ShieldCheck size={24} />, title: 'Autoridade', desc: 'Passe confiança e profissionalismo imediato.' },
    { icon: <Zap size={24} />, title: 'Conversão', desc: 'Site otimizado para transformar visitas em leads.' },
    { icon: <Layout size={24} />, title: 'Organização', desc: 'Centralize seus serviços e contatos em um só lugar.' }
]

const Solution = () => {
    return (
        <section className="solution-section" id="solucao">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">A Solução</span>
                    <h2>Um site <span>estratégico</span> é o seu melhor vendedor</h2>
                </div>

                <div className="solution-grid">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="solution-card"
                        >
                            <div className="sol-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="solution-cta">
                    <motion.a
                        href="https://wa.me/557374009455"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Quero minha estrutura de vendas
                    </motion.a>
                </div>
            </div>
        </section>
    )
}

export default Solution
