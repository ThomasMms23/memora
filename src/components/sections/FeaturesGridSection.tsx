"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";
import { features } from "@/constants/features";
import Image from "next/image";

export function FeaturesGridSection() {
  const shouldReduceMotion = useReducedMotion();
  
  const motionVariants = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Fonctionnalités révolutionnaires
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Découvrez comment Memora transforme votre façon de gérer l&apos;information
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              {...motionVariants}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-[#7c3bed]/10 rounded-lg flex items-center justify-center">
                        <feature.icon className={`h-6 w-6 ${feature.color}`} />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    
                    {/* Screenshot de l&apos;interface */}
                    <Image 
                      src={feature.image} 
                      alt={feature.screenshot}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg max-w-sm mx-auto"
                      loading="lazy"
                    />
                    <div className="mt-3 text-xs text-gray-500 text-center">
                      {feature.screenshot}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


