import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
    {
        q: 'Por que minha empresa precisa de um site se já tenho Instagram?',
        a: 'O Instagram é uma rede social onde você não tem controle. Um site é sua casa própria digital, onde você controla a jornada do cliente, passa mais profissionalismo e aparece no Google.'
    },
    {
        q: 'Um site realmente ajuda a vender mais?',
        a: 'Sim! Ele organiza suas informações, tira dúvidas frequentes automaticamente e facilita o contato via WhatsApp, reduzindo a barreira de compra.'
    },
    {
        q: 'Serve para qualquer nicho?',
        a: 'Sim! De lojas locais a prestadores de serviços e infoprodutores. Se você vende algo, o site é sua vitrine principal.'
    },
    {
        q: 'Como funciona para solicitar?',
        a: 'Basta clicar em qualquer botão de WhatsApp nesta página. Vamos conversar sobre seu negócio e eu montarei uma proposta personalizada para você.'
    }
]

const FAQ = () => {
    const [active, setActive] = useState(null)

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Dúvidas</span>
                    <h2>Perguntas <span>Frequentes</span></h2>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${active === index ? 'active' : ''}`}>
                            <button onClick={() => setActive(active === index ? null : index)}>
                                <span>{faq.q}</span>
                                {active === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            <AnimatePresence>
                                {active === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="faq-answer"
                                    >
                                        <p>{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
