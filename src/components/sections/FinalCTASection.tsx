"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function FinalCTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Memora
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ne perdez plus jamais une excellente idée. Construisez votre base de connaissances personnelle avec une organisation alimentée par l&apos;IA.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg"
              className="bg-[#7c3bed] hover:bg-[#6929d4] text-white px-8 text-base font-semibold rounded-lg cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                <path d="M10.88 21.94 15.46 14"></path>
                <path d="M21.17 8H12"></path>
                <path d="M3.95 6.06 8.54 14"></path>
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
              </svg>
              Ajouter sur Chrome
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

