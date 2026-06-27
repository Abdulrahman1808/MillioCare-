import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";

export default function Cards() {
  const cards = [
    { title: "Individual Card", type: "Standard" },
    { title: "Family Card", type: "Up to 5 Members" },
    { title: "VIP Card", type: "Premium" },
    { title: "Plus Card", type: "Extended" },
    { title: "Elite Card", type: "Exclusive" },
    { title: "Limited Card", type: "Basic" },
  ];

  return (
    <section id="cards" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">Membership Plans</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Tailored for Every Lifestyle
            </h3>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
              Because the concept of care varies depending on the details of your life, we haven't created a one-size-fits-all approach. At MillioCare, we've developed a comprehensive healthcare card system tailored to suit every lifestyle.
            </p>
            <button className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-white transition-colors hover:bg-primary/90">
              Compare All Cards
            </button>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {cards.map((card, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative h-48 rounded-2xl bg-gradient-to-br from-card to-secondary p-6 border border-white/10 overflow-hidden group hover:border-primary/50 transition-colors"
                >
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                  
                  <CreditCard className="w-8 h-8 text-primary mb-12 opacity-80" />
                  
                  <div className="mt-auto">
                    <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-1">{card.type}</p>
                    <h4 className="text-xl font-bold text-white tracking-wide">{card.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
