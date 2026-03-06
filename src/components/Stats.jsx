import React from 'react'
import { motion } from 'framer-motion'

const stats = [
    { value: '81%', label: 'dos consumidores pesquisam online antes de comprar.' },
    { value: '75%', label: 'das pessoas julgam a credibilidade de uma empresa pelo site.' },
    { value: '24/7', label: 'de presença digital, vendendo por você a qualquer hora.' },
    { value: '+50%', label: 'de aumento médio na percepção de autoridade.' }
]

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="stat-card"
                        >
                            <h3>{stat.value}</h3>
                            <p>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats
