import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 border border-primary/20 rounded-2xl" />
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-background to-transparent z-10" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                {/* We'll use a CSS pattern instead of an image here to keep it abstract and premium */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center p-6 text-center">
                <p className="font-serif text-primary text-lg leading-tight">20+ Years<br/>of Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">About MillioCare</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              A Legacy of Care in the Egyptian Market
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                MillioCare Healthcare Company, with over 20 years of experience in the Egyptian market, has aimed from the beginning to work on everything related to human health.
              </p>
              <p>
                We have focused on designing, implementing, managing, and marketing innovative healthcare programs specifically designed to suit the needs and circumstances of the Egyptian citizen. We designed the MillioCare program with a direct cash discount system to meet the needs and desires of our clients in government agencies, public and private companies, unions, educational institutions, sports clubs, NGOs, groups, and individuals.
              </p>
              <p>
                Through continuous work and development, we have been able to understand the requirements of clients and be closer to meeting their needs in terms of the speed of service delivery, while ensuring their utmost satisfaction by contracting and selecting medical providers from hospitals, testing centers (analyses and radiology), doctors, specialized medical centers, pharmacies, and other healthcare professionals.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
