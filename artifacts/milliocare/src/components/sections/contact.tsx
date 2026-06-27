import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="bg-background pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="font-serif font-bold text-lg text-white">M</span>
              </div>
              <span className="font-serif font-bold text-2xl tracking-wide text-white">MillioCare</span>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed mb-8 max-w-sm">
              The trusted guardian of Egyptian families' health. Breaking financial barriers through smart cash discounts.
            </p>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-6 tracking-wide">Locations</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start text-muted-foreground text-sm font-light">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <strong className="text-white font-medium block mb-1">Head Office (UK)</strong>
                  128 City Road, London,<br/>EC1V 2NX, United Kingdom
                </div>
              </li>
              <li className="flex gap-4 items-start text-muted-foreground text-sm font-light">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <strong className="text-white font-medium block mb-1">Egypt — Giza Branch</strong>
                  72 St. Gamete Al Dewal Al Arabia<br/>Al Mohandseen
                </div>
              </li>
              <li className="flex gap-4 items-start text-muted-foreground text-sm font-light">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <strong className="text-white font-medium block mb-1">Egypt — Alsharqia Branch</strong>
                  10 of Ramadan City
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-4 items-center text-muted-foreground text-sm font-light">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span>010 1500 1884</span><br/>
                  <span>010 2030 6525</span>
                </div>
              </li>
              <li className="flex gap-4 items-center text-muted-foreground text-sm font-light">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:Info@Milliocare.com" className="hover:text-primary transition-colors">Info@Milliocare.com</a>
              </li>
              <li className="flex gap-4 items-center text-muted-foreground text-sm font-light">
                <Globe className="w-5 h-5 text-primary shrink-0" />
                <a href="https://www.Milliocare.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">www.Milliocare.com</a>
              </li>
            </ul>
          </div>

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
