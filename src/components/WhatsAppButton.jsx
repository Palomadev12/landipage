import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
    return (
        <div className="whatsapp-fixed">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                        delay: 2,
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        repeatDelay: 5
                    }}
                    className="whatsapp-bubble"
                >
                    Bora fazer seu site? 🚀
                </motion.div>
            </AnimatePresence>

            <motion.a
                href="https://wa.me/557374009455"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                    boxShadow: [
                        "0 0 0 0px rgba(37, 211, 102, 0.7)",
                        "0 0 0 20px rgba(37, 211, 102, 0)",
                        "0 0 0 0px rgba(37, 211, 102, 0)"
                    ]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <MessageCircle size={32} />
            </motion.a>
        </div>
    )
}

export default WhatsAppButton
