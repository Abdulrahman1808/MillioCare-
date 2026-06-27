import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/60 z-10" />
        <img 
          src="/images/hero.png" 
          alt="Cinematic Abstract Healthcare" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
      </div>

      <div className="container relative z-30 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8"
          >
            Over 20 Years of Excellence
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight mb-6"
          >
            YOUR HEALTH IS<br />OUR PRIORITY
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 font-light"
          >
            MillioCare — Where Quality Healthcare Meets Smart Savings
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#about" className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-white transition-all hover:bg-primary/90 hover:scale-105 shadow-[0_0_40px_-10px_rgba(6,151,167,0.5)]">
              Discover MillioCare
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 border-t border-white/10 pt-12"
        >
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
              <Counter end={4000} suffix="+" />
            </h3>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">Service Providers</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
              <Counter end={27} />
            </h3>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">Governorates</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
              <Counter end={380000} suffix="+" />
            </h3>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">Subscribers</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
