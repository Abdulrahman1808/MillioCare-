import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Message", href: "#chairman" },
    { name: "Vision", href: "#vision" },
    { name: "Goals", href: "#goals" },
    { name: "Journey", href: "#journey" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Cards", href: "#cards" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="font-serif font-bold text-lg">M</span>
          </div>
          <span className="font-serif font-bold text-xl tracking-wide">MillioCare</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary/90">
          Get Started
        </a>
      </div>
    </motion.header>
  );
}
