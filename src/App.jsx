import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

// Components
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import PainPoints from './components/PainPoints'
import Stats from './components/Stats'
import Solution from './components/Solution'
import Benefits from './components/Benefits'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const App = () => {
    return (
        <div className="app-container">
            <header>
                <nav>
                    <div className="logo">Paloma<span>Dev</span></div>
                    <div className="nav-links">
                        <a href="#solucao">Solução</a>
                        <a href="#beneficios">Benefícios</a>
                        <a href="#faq">FAQ</a>
                        <a href="https://wa.me/557374009455" target="_blank" rel="noreferrer" className="cta-small">
                            Quero meu site <ArrowRight size={16} />
                        </a>
                    </div>
                </nav>
            </header>

            <main>
                <Hero />
                <SocialProof />
                <PainPoints />
                <Stats />
                <Solution />
                <Benefits />

                {/* Final CTA Section */}
                <section className="final-cta">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="final-cta-card"
                        >
                            <h2>O seu próximo cliente está a um site de distância.</h2>
                            <p>Não espere a concorrência se profissionalizar primeiro. Comece hoje a construir sua autoridade digital.</p>
                            <a href="https://wa.me/557374009455" target="_blank" rel="noreferrer" className="btn btn-primary lg">
                                Solicitar meu site profissional
                            </a>
                        </motion.div>
                    </div>
                </section>

                <FAQ />
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default App
