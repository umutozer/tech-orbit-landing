import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-darkBg overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-6">
            <Zap size={14} />
            <span>Yeni Nesil Orbit V2 Çıktı</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Geleceğin <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Teknolojisi</span> Elinizde
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
            Sınırları zorlayan performans ve minimalist tasarımın mükemmel uyumu. Orbit serisi ile dijital dünyanızı yeniden tanımlayın.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-secondary hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all group">
              Hemen Keşfet <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold transition-all">
              Tanıtımı İzle
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-bold text-white">120Hz</p>
              <p className="text-gray-500 text-sm">Yenileme Hızı</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">4nm</p>
              <p className="text-gray-500 text-sm">İşlemci Mimarisi</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">24h+</p>
              <p className="text-gray-500 text-sm">Pil Ömrü</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-20 animate-float">
             <img 
              src="https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=800" 
              alt="Tech Product" 
              className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 mix-blend-lighten"
            />
          </div>
          {/* Glass Card Decoration */}
          <div className="absolute -bottom-10 -left-10 glass-morphism p-6 rounded-2xl z-30 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse" />
              <p className="text-white font-medium">Ultra Düşük Gecikme</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;