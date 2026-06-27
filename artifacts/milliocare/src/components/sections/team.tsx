import { motion } from "framer-motion";

export default function Team() {
  const team = [
    { name: "Dr. Yasser El-Ghazzawy", role: "Founder and Chairman of the Board" },
    { name: "Dr. Hamed Nasr", role: "Vice Chairman for Marketing and Sales" },
    { name: "Haytham Fekry", role: "Administrative and Medical Director" },
    { name: "Dr. Mohamed Atia", role: "Vice Chairman for Public Relations" },
    { name: "Eng. Hossam Safwat", role: "Vice Chairman for Development and IT" },
    { name: "Con. Mohamed Meqled", role: "Vice Chairman and Legal Counsel" },
    { name: "Noha Hendy", role: "Sales Manager for the Delta Region" },
    { name: "Hanaa El-Masry", role: "Head of Sales for the Cairo Capital Region" },
    { name: "Joliana Nady", role: "Human Resources Manager" },
    { name: "Mohamed Darwish", role: "Alexandria Branch Manager" },
  ];

  return (
    <section id="team" className="py-24 md:py-32 bg-secondary/30 relative border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">Our Leadership</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">The Minds Behind MillioCare</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group"
            >
              <div className="aspect-[4/5] rounded-2xl bg-card border border-white/5 mb-4 overflow-hidden relative flex items-end p-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-background to-transparent opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center text-primary/10">
                  <span className="font-serif text-8xl font-bold italic">{member.name.charAt(0)}</span>
                </div>
                <div className="relative z-10 w-full text-center">
                  <h4 className="text-lg font-bold text-white mb-1 leading-tight">{member.name}</h4>
                  <p className="text-xs text-primary font-medium tracking-wide uppercase">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
