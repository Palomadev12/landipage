import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
    { id: 1, name: 'Ana Silva', role: 'Estética', img: 'https://i.pravatar.cc/150?u=ana' },
    { id: 2, name: 'Carlos Lima', role: 'Advogado', img: 'https://i.pravatar.cc/150?u=carlos' },
    { id: 3, name: 'Mariana Costa', role: 'Loja Online', img: 'https://i.pravatar.cc/150?u=mari' },
    { id: 4, name: 'Roberto J.', role: 'Consultoria', img: 'https://i.pravatar.cc/150?u=rob' },
]

const SocialProof = () => {
    return (
        <div className="social-proof-mini">
            <div className="avatar-group">
                {testimonials.map((t, index) => (
                    <motion.div
                        key={t.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="avatar"
                    >
                        <img src={t.img} alt={t.name} title={`${t.name} - ${t.role}`} />
                    </motion.div>
                ))}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="avatar-count"
                >
                    +50 empresas
                </motion.div>
            </div>
            <p>Já garantiram sua presença digital com a Paloma Dev</p>
        </div>
    )
}

export default SocialProof
