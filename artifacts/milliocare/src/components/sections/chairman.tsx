import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import chairmanImg from "@assets/image_1782520274401.png";

export default function Chairman() {
  return (
    <section id="chairman" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={chairmanImg}
                  alt="Dr. Yasser El-Ghazzawy - Chairman of the Board"
                  className="w-full h-full object-cover object-top grayscale-[0.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h4 className="text-2xl font-serif font-bold text-white">Dr. Yasser El-Ghazzawy</h4>
                  <p className="text-primary font-medium tracking-wide text-sm mt-1">FOUNDER AND CHAIRMAN OF THE BOARD</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <Quote className="w-16 h-16 text-primary/20 mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 leading-snug">
                "There is no point in any success or financial gain if its aim is not to please God Almighty and then to serve humanity."
              </h2>

              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>
                  My focus when I began working in the insurance field more than 20 years ago was humanitarian work. The health of the individual in society has become the measure of a nation's progress, the foundation for future economic plans, and the driving force behind development.
                </p>
                <p>
                  From this perspective, the availability of healthcare services without discrimination or exceptions is our highest and most important standard at Million Group. We offer this to all members of society and everyone living on the beloved land of Egypt through the MillioCare Healthcare Program.
                </p>
                <p>
                  We strive to provide these services with sophisticated and modern development to achieve equity among all segments of society. Just as we have managed the past and evolved with the present, we are now setting a strategy for the future. Human healthcare needs are increasing day by day, and since illness comes without warning, economic factors and medical expenses are the primary obstacles in confronting it. Therefore, we established MillionCare Healthcare to be a support for everyone who needs it.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
