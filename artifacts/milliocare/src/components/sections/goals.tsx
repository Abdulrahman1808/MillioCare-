import { motion } from "framer-motion";
import { Users, ShieldCheck, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Goals() {
  const categories = [
    {
      title: "Customer-Focused Objectives",
      icon: <Users className="w-6 h-6" />,
      items: [
        { title: "Easing Financial Burden", desc: "Providing real and tangible discounts that reduce treatment costs by up to 70% on most medical services." },
        { title: "Expanding Choice", desc: "Building a broad geographical medical network covering all specialties and regions." },
        { title: "Complete Transparency", desc: "Enabling customers to know service prices and discount percentages before visiting." }
      ]
    },
    {
      title: "Quality & Service Objectives",
      icon: <ShieldCheck className="w-6 h-6" />,
      items: [
        { title: "Partner Selection", desc: "Contracting only with centers and hospitals that adhere to the highest medical quality standards." },
        { title: "Simplifying Procedures", desc: "Eliminating administrative complexities and waiting periods associated with approvals — service is provided instantly." },
        { title: "Ongoing Support", desc: "Providing 24/7 customer service to answer inquiries and guide members." }
      ]
    },
    {
      title: "Strategic & Expansion Objectives",
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        { title: "Preventive Health Awareness", desc: "Encouraging clients to undergo regular checkups at discounted prices." },
        { title: "Digital Transformation", desc: "Launching an electronic platform or smart application for doctors search, savings accounts, and network tracking." },
        { title: "Market Leadership", desc: "To become the leading company and the preferred choice in the cash discount healthcare sector across Egypt." }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="goals" className="py-24 md:py-32 bg-background border-t border-white/5 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">Our Goals</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Setting the Standard for Excellence</h3>
          <p className="text-lg text-muted-foreground font-light">
            We operate with clear objectives that prioritize our members, uphold uncompromising quality, and drive sustainable innovation.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {categories.map((category, idx) => (
            <motion.div key={idx} variants={item} className="bg-card border border-white/5 rounded-2xl p-8 hover:bg-white/[0.02] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h4 className="text-xl font-serif font-bold text-white mb-6">{category.title}</h4>
              <ul className="space-y-6">
                {category.items.map((li, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-white font-medium text-sm mb-1">{li.title}</h5>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed">{li.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
