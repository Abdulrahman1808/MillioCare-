import { motion } from "framer-motion";
import yasserImg from "@assets/image_1782520274401.png";
import mohamedAtiaImg from "@assets/image_1782520360802.png";
import hossamSafwatImg from "@assets/image_1782520358298.png";
import hamedNasrImg from "@assets/image_1782520363231.png";
import mohamedMeqledImg from "@assets/image_1782520356141.png";
import haythamFekryImg from "@assets/image_1782520354184.png";
import nohaHendyImg from "@assets/image_1782520328591.png";
import hanaaElMasryImg from "@assets/image_1782520321541.png";
import jolianaNadyImg from "@assets/image_1782520319882.png";
import mohamedDarwishImg from "@assets/image_1782520318432.png";

const team = [
  {
    name: "Dr. Yasser El-Ghazzawy",
    role: "Founder and Chairman of the Board",
    img: yasserImg,
  },
  {
    name: "Dr. Mohamed Atia",
    role: "Vice Chairman of the Board for Marketing and Sales",
    img: mohamedAtiaImg,
  },
  {
    name: "Eng. Hossam Safwat",
    role: "Vice Chairman of the Board for Development and Information Technology",
    img: hossamSafwatImg,
  },
  {
    name: "Dr. Hamed Nasr",
    role: "Vice Chairman of the Board for Public Relations",
    img: hamedNasrImg,
  },
  {
    name: "Con. Mohamed Meqled",
    role: "Vice Chairman of the Board and Legal Counsel",
    img: mohamedMeqledImg,
  },
  {
    name: "Haytham Fekry",
    role: "Head of Sales for the Cairo Capital Region",
    img: haythamFekryImg,
  },
  {
    name: "Noha Hendy",
    role: "Sales Manager for the Delta Region",
    img: nohaHendyImg,
  },
  {
    name: "Hanaa El-Masry",
    role: "Administrative and Medical Director",
    img: hanaaElMasryImg,
  },
  {
    name: "Joliana Nady",
    role: "Human Resources Manager",
    img: jolianaNadyImg,
  },
  {
    name: "Mohamed Darwish",
    role: "Alexandria Branch Manager",
    img: mohamedDarwishImg,
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-secondary/30 relative border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">Our Leadership</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">The Minds Behind MillioCare</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative mb-4 bg-card border border-white/5">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h4 className="text-sm font-bold text-white leading-tight">{member.name}</h4>
                  <p className="text-[10px] text-primary font-medium tracking-wide uppercase mt-1 leading-snug">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
