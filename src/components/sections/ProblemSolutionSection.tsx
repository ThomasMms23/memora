"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { X, CheckCircle, Sparkles, Search, Link } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Colonne 1 - Le Problème */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-red-100 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <X className="h-8 w-8 text-red-500" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Le chaos de l&apos;information
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Citations perdues dans l&apos;historique
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Impossible de retrouver ce texte important que vous avez lu il y a quelques semaines
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Recherche inefficace
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Les mots-clés exacts ne suffisent pas pour retrouver le contexte et les idées
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Pas de lien entre les idées
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Vos connaissances restent fragmentées sans connexions intelligentes
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Colonne 2 - La Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-green-100 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="h-8 w-8 text-[#7c3bed]" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Memora résout tout ça
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Sparkles className="h-6 w-6 text-[#7c3bed] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Sauvegarde en 1 clic depuis n&apos;importe quelle page
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Capturez instantanément tout texte important avec l&apos;analyse IA automatique
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Search className="h-6 w-6 text-[#7c3bed] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Recherche sémantique : demandez en langage naturel
                      </h3>
                      <p className="text-gray-600 text-sm">
                        &quot;Trouve-moi des recettes végétariennes&quot; même si vous avez sauvegardé &quot;plats sans viande&quot;
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Link className="h-6 w-6 text-[#7c3bed] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Découvrez automatiquement les liens entre vos citations
                      </h3>
                      <p className="text-gray-600 text-sm">
                        L&apos;IA connecte vos idées et révèle des patterns dans vos connaissances
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


