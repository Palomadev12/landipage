import React from 'react'
import { motion } from 'framer-motion'
import { XCircle, ArrowDown } from 'lucide-react'

const pains = [
    'Depende apenas do Instagram para atrair clientes.',
    'Perde vendas fora do horário comercial.',
    'Sua marca não transmite profissionalismo.',
    'Não aparece nas buscas do Google.',
    'Atendimento e vendas ficam bagunçados.',
    'Passa insegurança para novos clientes.'
]

const PainPoints = () => {
    return (
        <section className="pains-section">
            <div className="container">
                <div className="section-header">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="section-badge"
                    >
                        A realidade do mercado
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Quanto custa para o seu negócio <span>não ter um site</span> hoje?
                    </motion.h2>
                    <p className="section-desc">Estar apenas nas redes sociais é estar em um terreno alugado. Sem um site, você perde autoridade e oportunidades todos os dias.</p>
                </div>

                <div className="pains-grid">
                    {pains.map((pain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="pain-card"
                        >
                            <div className="pain-icon">
                                <XCircle size={24} color="#C97A87" />
                            </div>
                            <p>{pain}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="pains-footer"
                >
                    <p>Se você se identificou com algum desses pontos, você precisa de uma mudança.</p>
                    <ArrowDown className="bounce" size={24} />
                </motion.div>
            </div>
        </section>
    )
}

export default PainPoints
