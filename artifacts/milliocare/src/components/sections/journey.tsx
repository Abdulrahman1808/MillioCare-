import { motion } from "framer-motion";

export default function Journey() {
  const phases = [
    {
      year: "2006",
      title: "Elements of Hope",
      subtitle: "Idea & Establishment",
      desc: "MillioCare was more than just a business plan on paper; it was the driving force behind a deep concern for human well-being. The idea was born from the need for healthcare that transcended traditional treatment, reaching the horizons of holistic care. The initial step was taken confidently, driven by an unwavering belief that health is the most precious thing humankind possesses."
    },
    {
      year: "2014",
      title: "First Steps",
      subtitle: "Growth & Empowerment",
      desc: "Like a young tree whose roots strike deep into the earth and whose branches reach for the light, MillioCare began its positive expansion. This phase saw the establishment of its infrastructure and the recruitment of medical and administrative talent who shared the company's vision. MillioCare transformed from a new name in the market into a safe haven sought for peace of mind."
    },
    {
      year: "2018",
      title: "The Digital Age",
      subtitle: "Innovation & Transformation",
      desc: "MillioCare took a major step towards the future by embracing technology and digital innovation. Digital platforms were launched, telemedicine services were activated, and diagnostic efficiency was enhanced. The company transformed from a service provider to an innovator in care."
    },
    {
      year: "2026",
      title: "Leadership & Excellence",
      subtitle: "Sustainability & Leadership",
      desc: "Today, MillioCare stands at the forefront of the healthcare sector as a beacon of holistic health and sustainable prevention. Extensive strategic partnerships, high-quality accreditations, and expanded geographical reach. MillioCare has become synonymous with health security and an inspiring success story."
    }
  ];

  return (
    <section id="journey" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">Our Journey</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">A Timeline of Growth</h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/0 md:-ml-[1px]" />

          <div className="space-y-12 md:space-y-24">
            {phases.map((phase, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[19px] md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background md:-ml-2 z-10 mt-6 md:mt-0" />

                  {/* Content Box */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/20 transition-colors">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider mb-4">
                        {phase.year}
                      </span>
                      <h4 className="text-2xl font-serif font-bold text-white mb-2">{phase.title}</h4>
                      <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-4">{phase.subtitle}</p>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
