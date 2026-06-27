import { motion } from "framer-motion";
import { 
  Building2, 
  FlaskConical, 
  ActivitySquare, 
  Stethoscope, 
  Pill, 
  Glasses, 
  BrainCircuit, 
  Sparkles, 
  Accessibility, 
  Home, 
  Smile, 
  Stethoscope as StethoscopeIcon
} from "lucide-react";

export default function Services() {
  const services = [
    { title: "Hospitals", desc: "All outpatient specialties, inpatient care and surgeries", icon: <Building2 className="w-6 h-6" /> },
    { title: "Laboratories", desc: "Comprehensive testing and diagnostics", icon: <FlaskConical className="w-6 h-6" /> },
    { title: "Radiology Centers", desc: "Advanced imaging and scans", icon: <ActivitySquare className="w-6 h-6" /> },
    { title: "Private Clinics", desc: "All specialties and specialized centers", icon: <Stethoscope className="w-6 h-6" /> },
    { title: "Pharmacies", desc: "Local, imported, chronic, and chemotherapy medications", icon: <Pill className="w-6 h-6" /> },
    { title: "Optical Centers", desc: "Sunglasses, eyeglasses, contact lenses", icon: <Glasses className="w-6 h-6" /> },
    { title: "Psychiatry", desc: "Mental health and addiction treatment", icon: <BrainCircuit className="w-6 h-6" /> },
    { title: "Beauty Centers", desc: "Cosmetic procedures and treatments", icon: <Sparkles className="w-6 h-6" /> },
    { title: "Prosthetic Devices", desc: "Physiotherapy aids and sports injuries equipment", icon: <Accessibility className="w-6 h-6" /> },
    { title: "Home Care", desc: "Professional nursing and medical care at home", icon: <Home className="w-6 h-6" /> },
    { title: "Dental Centers", desc: "Comprehensive oral care and surgeries", icon: <Smile className="w-6 h-6" /> },
    { title: "Other Specialties", desc: "Cosmetics, speech therapy, childcare, therapeutic nutrition", icon: <StethoscopeIcon className="w-6 h-6" /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">Our Network</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Comprehensive Coverage</h3>
          <p className="text-lg text-muted-foreground font-light">
            A vast network of over 4,000 healthcare providers covering every medical necessity across Egypt.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="group p-6 rounded-2xl bg-card border border-white/5 hover:bg-primary hover:border-primary transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white flex items-center justify-center mb-6 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
              <p className="text-sm text-muted-foreground group-hover:text-white/80 font-light leading-relaxed transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
