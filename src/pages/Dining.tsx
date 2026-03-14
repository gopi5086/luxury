import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import diningImg from "@/assets/dining-rooftop.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import { Utensils, Leaf, Globe, Coffee, Bed, Mountain } from "lucide-react";

const highlights = [
  { icon: Utensils, title: "Rooftop Restaurant", desc: "Dine under the stars with panoramic views." },
  { icon: Globe, title: "Multi-Cuisine Menu", desc: "Global flavors with local authenticity." },
  { icon: Leaf, title: "Fresh Ingredients", desc: "Farm-to-table sourcing for every dish." },
  { icon: Coffee, title: "In-Room Dining", desc: "24/7 room service for your comfort." },
  { icon: Mountain, title: "Valley View Dining", desc: "Ooty's breathtaking views with your meal." },
  { icon: Bed, title: "Breakfast Included", desc: "Complimentary breakfast with every stay." },
];

export default function Dining() {
  return (
    <div className="pt-24">
      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-background/60 z-10" />
          <img src={diningImg} className="w-full h-full object-cover" alt="Rooftop dining" />
        </div>
        <div className="relative z-20 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="label-caps text-primary mb-4">Culinary</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-display text-4xl md:text-6xl"
          >
            A Feast for the Senses
          </motion.h1>
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
                <h.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-serif text-xl font-semibold mb-2">{h.title}</h3>
                <p className="body-text text-sm">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/50">
        <div className="container-luxury grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="label-caps text-primary mb-4">Experience</p>
            <h2 className="heading-section mb-6">Authentic Recipes, Unforgettable Ambiance</h2>
            <p className="body-text mb-4">
              Our chefs craft each dish with passion, blending traditional recipes with modern techniques. From the rooftop restaurant in Chennai to the valley-view dining in Ooty, every meal is an experience.
            </p>
            <p className="body-text">
              Enjoy fresh, locally sourced ingredients prepared to perfection. Whether it's a romantic dinner or a family feast, our restaurants cater to every palate and occasion.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden"
          >
            <img src={roomDeluxe} alt="Dining experience" className="w-full h-80 object-cover" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
