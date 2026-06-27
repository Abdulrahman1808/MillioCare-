import { motion } from "framer-motion";

export default function Inspired() {
  return (
    <section className="py-28 md:py-36 bg-secondary/40 relative flex items-center justify-center text-center overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-6">Our Spirit</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
            We Remain Inspired.
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary leading-tight mt-2">
            We Never Stop Developing and Creating.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
