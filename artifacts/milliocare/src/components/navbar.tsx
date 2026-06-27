import { motion } from "framer-motion";
import logoImg from "@assets/image_1782600921185.png";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Message", href: "#chairman" },
    { name: "Vision", href: "#vision" },
    { name: "Goals", href: "#goals" },
    { name: "Team", href: "#team" },
    { name: "Journey", href: "#journey" },
    { name: "Services", href: "#services" },
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
        <a href="#home" className="flex items-center">
          <img
            src={logoImg}
            alt="MillioCare"
            className="h-12 w-auto object-contain"
            data-testid="img-logo"
          />
        </a>

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

        <a
          href="#contact"
          className="hidden md:inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary/90"
        >
          Get Started
        </a>
      </div>
    </motion.header>
  );
}
