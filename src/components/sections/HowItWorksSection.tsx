"use client";

import { motion } from "framer-motion";
import { MousePointer2, Save, Sparkles, Search } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: MousePointer2,
      title: "Sélectionnez",
      description: "Surlignez n&apos;importe quel texte sur le web et faites clic droit pour accéder au menu Memora",
      step: 1
    },
    {
      icon: Save,
      title: "Sauvegardez",
      description: "L&apos;IA analyse et enrichit votre citation instantanément",
      step: 2
    },
    {
      icon: Sparkles,
      title: "Retrouvez",
      description: "Recherchez en langage naturel parmi toutes vos connaissances",
      step: 3
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Comment ça marche
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Trois étapes simples pour transformer votre façon de consommer l&apos;information
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8 items-start">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Numéro */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-[#7c3bed] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {step.description}
                </p>
                
                {/* Contenu spécifique à chaque étape */}
                {step.step === 1 && (
                  <div className="bg-white border border-gray-300 rounded-lg shadow-xl p-0 overflow-hidden text-left">
                    <div className="py-1">
                      <div className="px-3 py-1 hover:bg-gray-100 text-xs text-gray-700 text-left">Open Link in New Tab</div>
                      <div className="px-3 py-1 hover:bg-gray-100 text-xs text-gray-700 text-left">Open Link in New Window</div>
                      <div className="px-3 py-1 hover:bg-gray-100 text-xs text-gray-700 text-left">Open Link in New Incognito Window</div>
                      <div className="px-3 py-1 hover:bg-gray-100 text-xs text-gray-700 text-left">Send Link to Your Devices</div>
                      <div className="px-3 py-1 hover:bg-gray-100 text-xs text-gray-700 text-left">Save Link As…</div>
                      <div className="px-3 py-1 hover:bg-gray-100 text-xs text-gray-700 text-left">Copy Link Address</div>
                      <div className="border-t border-gray-200 my-1"></div>
                      <div className="px-3 py-1 bg-[#7c3bed]/10 hover:bg-[#7c3bed]/20 flex items-center gap-2 text-xs text-[#7c3bed] font-medium cursor-pointer">
                        <div className="w-3 h-3 relative">
                          <img 
                            alt="Memora Logo" 
                            className="object-contain w-full h-full" 
                            src="/Logo Memora.svg"
                          />
                        </div>
                        <span>Save to Memora</span>
                        <MousePointer2 className="w-3 h-3 text-[#7c3bed] ml-auto" />
                      </div>
                      <div className="px-3 py-1 hover:bg-gray-100 text-xs text-gray-700 text-left">Copy</div>
                      <div className="px-3 py-1 hover:bg-gray-100 text-xs text-gray-700 text-left">Print…</div>
                      <div className="px-3 py-1 hover:bg-gray-100 text-xs text-gray-700 text-left">Inspect</div>
                    </div>
                  </div>
                )}
                
                {step.step === 2 && (
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-[#7c3bed]" />
                      <span className="text-xs font-medium text-gray-700">Analyse IA en cours...</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 bg-gray-200 rounded-full">
                        <div className="h-1.5 bg-[#7c3bed] rounded-full w-3/4"></div>
                      </div>
                      <div className="text-xs text-gray-500">Génération des tags et résumé</div>
                    </div>
                  </div>
                )}
                
                {step.step === 3 && (
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Search className="w-4 h-4 text-[#7c3bed]" />
                      <span className="text-xs font-medium text-gray-700">Recherche sémantique</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                        <div className="text-xs text-gray-600 mb-1">&quot;recettes végétariennes&quot;</div>
                        <div className="text-xs text-gray-500">→ Trouve &quot;plats sans viande&quot;</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Numéro dans un cercle */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#7c3bed] rounded-full flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
              </div>
              
              {/* Contenu */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <step.icon className="h-6 w-6 text-[#7c3bed]" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


