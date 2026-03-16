import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Utensils, Sprout, Heart, Sparkles, Map, Mountain, LucideIcon } from "lucide-react";

interface Highlight {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const highlights: Highlight[] = [
  { icon: Sprout, title: "Freshest Ingredients", desc: "Mostly sourced directly from our garden for maximum flavor." },
  { icon: Heart, title: "Authentic Recipes", desc: "Traditional methods passed down to preserve true taste." },
  { icon: Sparkles, title: "Delicate Flavours", desc: "We strive to preserve the subtle nuances of every dish." },
  { icon: Utensils, title: "Rooftop Dining", desc: "Dine with a view at both our Chennai and Ooty locations." },
  { icon: Map, title: "Multi-Cuisine", desc: "From multi-cuisine delicacies to Asian specialties." },
  { icon: Mountain, title: "Valley Views", desc: "Magnificent views of the Ooty valley from our roof top." },
];

export default function Dining() {
  return (
    <div className="pt-24">
      <section className="relative h-[40vh] bg-secondary/10 flex items-center justify-center">
        <div className="relative z-20 text-center px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="label-caps text-primary mb-4 text-center">Dining at DrizzleDrop Inn</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-display text-4xl md:text-6xl text-center"
          >
            A Feast for the Senses
          </motion.h1>
          <p className="body-text max-w-2xl mx-auto mt-6 text-center">
            At DrizzleDrop Inn, we believe in three simple principles: the freshest ingredients, authentic recipes, and preserving delicate flavours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-500 hover-gold-glow"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <h.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{h.title}</h3>
                <p className="body-text text-sm">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/5">
        <div className="container-luxury">
           <SectionHeading label="Destinations" title="Locally Curated Flavours" />
           <div className="grid md:grid-cols-2 gap-12 mt-12">
                <div className="glass-card p-10">
                    <h3 className="font-serif text-2xl font-bold mb-4">Chennai Rooftop</h3>
                    <p className="body-text mb-6">
                    Our rooftop specialty restaurant in Chennai offers Multi-Cuisine and Asian delicacies. A modern vibe with exceptional services makes it an ideal abode for the modern traveller.
                    </p>
                    <div className="flex gap-4">
                        <span className="text-[10px] tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">CAFE</span>
                        <span className="text-[10px] tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">ASIAN SPECIALTY</span>
                    </div>
                </div>

                <div className="glass-card p-10">
                    <h3 className="font-serif text-2xl font-bold mb-4">Ooty Valley View</h3>
                    <p className="body-text mb-6">
                    Located on the rooftop with a magnificent view of the valley. Enjoy fine-dine or the comfort of your room. Treat your taste buds to new and exciting dishes every single day.
                    </p>
                    <div className="flex gap-4">
                        <span className="text-[10px] tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">VALLEY VIEW</span>
                        <span className="text-[10px] tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">GARDEN FRESH</span>
                    </div>
                </div>
           </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury text-center max-w-3xl">
            <h2 className="heading-section mb-6">Curated with Passion</h2>
            <p className="body-text mb-8">
            "Our chefs have carefully curated a diverse menu that highlights the finest elements of every cuisine. Treat your taste buds to new and exciting dishes every single day at DrizzleDrop Inn."
            </p>
            <div className="bg-primary/5 p-8 border-l-4 border-primary italic font-serif text-lg text-foreground/80">
            "Dining at DrizzleDrop Inn will be a memorable experience for your taste buds."
            </div>
        </div>
      </section>
    </div>
  );
}
