"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export function Header() {
  const scrollToTop = useScrollToTop();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <nav aria-label="Navigation principale" className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.button
            className="flex items-center gap-3 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={scrollToTop}
            aria-label="Retour à l'accueil"
          >
            <Image
              src="/Logo Memora.svg"
              alt="Logo Memora"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <h1 className="text-xl font-bold text-gray-900">Memora</h1>
          </motion.button>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Button 
              size="lg"
              className="bg-[#7c3bed] hover:bg-[#6929d4] text-white px-8 text-base font-semibold rounded-lg cursor-pointer"
              aria-label="Installer l'extension Memora sur Chrome"
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
        </div>
      </nav>
    </header>
  );
}

