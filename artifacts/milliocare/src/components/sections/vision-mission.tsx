import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section id="vision" className="py-24 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative p-10 md:p-14 rounded-3xl bg-card border border-white/5 overflow-hidden hover:border-primary/30 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
              <Eye className="w-32 h-32 text-primary" />
            </div>
            
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            
            <h3 className="text-3xl font-serif font-bold text-white mb-6">Our Vision</h3>
            <p className="text-lg text-muted-foreground font-light leading-relaxed relative z-10">
              We strive to be the leading force in reshaping the concept of healthcare economics by innovating a pioneering cash discount system that prioritizes the patient and ensures the sustainability of quality medical care for all without burdensome financial strain. We aim to be the trusted partner for families and institutions in providing an integrated medical network that combines efficient service with genuine cash discounts, thereby elevating the quality of life in our community.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-10 md:p-14 rounded-3xl bg-primary border border-primary-foreground/10 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
              <Target className="w-32 h-32 text-white" />
            </div>
            
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/20">
              <Target className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-3xl font-serif font-bold text-white mb-6">Our Mission</h3>
            <p className="text-lg text-primary-foreground/90 font-light leading-relaxed relative z-10">
              We are committed to empowering individuals and families to manage their health financially, by building a bridge between the patient and the best medical centers, to ensure access to high-quality healthcare for all segments of society at competitive prices and with absolute transparency.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
