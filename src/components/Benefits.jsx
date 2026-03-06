import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const benefits = [
    'Site profissional e moderno',
    'Design pensado para conversão',
    'Integração com WhatsApp',
    'Presença digital mais forte',
    'Mais confiança para o cliente',
    'Mais clareza na oferta',
    'Mais chances de fechar vendas',
    'Estrutura para tráfego pago',
    'Vitrine digital 24 horas'
]

const Benefits = () => {
    return (
        <section className="benefits-section" id="beneficios">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Benefícios</span>
                    <h2>Por que escolher a <span>Paloma Dev</span>?</h2>
                </div>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="benefit-item"
                        >
                            <div className="check-icon"><Check size={18} /></div>
                            <p>{benefit}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits
