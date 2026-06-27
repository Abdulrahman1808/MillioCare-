import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="py-32 md:py-48 bg-primary relative flex items-center justify-center text-center overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight italic">
            "At MillioCare, we have never just healed bodies... we have always planted, and still plant, peace in souls."
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
