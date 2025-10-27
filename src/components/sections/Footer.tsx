"use client";

import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Icônes sociales */}
          <motion.div 
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <a 
              href="mailto:contact@memora.app" 
              className="text-gray-400 hover:text-[#7c3bed] transition-colors duration-200"
              aria-label="Contactez-nous par email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/memora" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#7c3bed] transition-colors duration-200"
              aria-label="Voir sur GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </motion.div>
          
          {/* Footer info */}
          <motion.div 
            className="text-gray-500 text-sm space-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              Made by{" "}
              <a 
                href="https://dev-thomas.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#7c3bed] hover:underline"
              >
                Thomas Monmousseau
              </a>
            </div>
            <div className="text-xs text-gray-400">
              © 2025 Memora. Tous droits réservés.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

