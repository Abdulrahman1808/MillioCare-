import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import logoImg from "@assets/image_1782600921185.png";

export default function Contact() {
  return (
    <footer id="contact" className="bg-background pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <a href="#home" className="inline-block mb-6">
              <img src={logoImg} alt="MillioCare" className="h-14 w-auto object-contain" />
            </a>
            <p className="text-muted-foreground font-light leading-relaxed max-w-sm">
              The trusted guardian of Egyptian families' health. Breaking financial barriers through smart cash discounts.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:Info@Milliocare.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors font-light"
              >
                <Mail className="w-4 h-4 text-primary shrink-0" />
                Info@Milliocare.com
              </a>
              <a
                href="https://www.Milliocare.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors font-light"
              >
                <Globe className="w-4 h-4 text-primary shrink-0" />
                www.Milliocare.com
              </a>
            </div>
          </motion.div>

          {/* Locations with phones inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-8"
          >
            <h4 className="text-white font-bold mb-8 tracking-wide uppercase text-sm">Locations</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Head Office */}
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-white font-semibold text-sm">HEAD OFFICE</p>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    128 City Road, London,<br />EC1V 2NX, United Kingdom
                  </p>
                </div>
              </div>

              {/* Giza Branch */}
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-white font-semibold text-sm">GIZA</p>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    72 St. Gamete Al Dewal Al Arabia – Al Mohandseen
                  </p>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                    <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>010 1500 1884 / 01020306525 / 01098342292</span>
                  </div>
                </div>
              </div>

              {/* Alsharqia Branch */}
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-white font-semibold text-sm">ALSHARQIA</p>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    10 of Ramadan City
                  </p>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                    <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>01002802830 / 01008218240</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-light">
          <p>© {new Date().getFullYear()} MillioCare Healthcare. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
