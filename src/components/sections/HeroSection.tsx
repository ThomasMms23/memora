"use client";

import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/hero-highlight";
import { ShineBorder } from "@/components/ui/shine-border";
import { motion } from "framer-motion";
import { CheckCircle, Chrome, Sparkles } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge amélioré au-dessus du titre */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Gratuit</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <Chrome className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">Chrome</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <Sparkles className="h-4 w-4 text-[#7c3bed]" />
              <span className="text-sm font-medium text-gray-700">Gemini AI</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 max-w-4xl leading-tight lg:leading-tight text-center mx-auto tracking-tight"
          >
            Optimisez votre{" "}
            <Highlight className="text-white bg-gradient-to-r from-[#7c3bed] to-[#a855f7]">
              curiosité
            </Highlight>,<br />
            pas votre temps de recherche
          </motion.h1>
          
          <motion.p 
            className="mt-8 text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Memora capture, analyse et organise vos citations grâce à l&apos;IA.
            Retrouvez instantanément ce qui compte avec la recherche sémantique.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-[#7c3bed] hover:bg-[#6929d4] text-white px-8 text-base font-semibold rounded-lg cursor-pointer"
              asChild
            >
              <a 
                href="https://chromewebstore.google.com/detail/memora-knowledge-manageme/maeafdobfcoofbkegpnkllmlbmpmlabe?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Installer l'extension Memora sur Chrome"
              >
                Installer l&apos;extension
              </a>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Screenshot de l&apos;interface Memora */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <div className="relative w-full max-w-2xl rounded-xl bg-white p-4 shadow-lg overflow-hidden">
              <ShineBorder 
                shineColor={["#7c3bed", "#a855f7", "#c084fc"]}
                duration={8}
                borderWidth={2}
              />
              <div className="relative z-10 p-4">
                <Image 
                  src="/dashboard-white.png" 
                  alt="Interface Memora - Capturez et organisez vos citations"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg max-w-lg mx-auto"
                />
                <div className="mt-4 text-center text-gray-500 text-sm">
                  Interface Memora - Capturez et organisez vos citations
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

