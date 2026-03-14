import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-lobby.jpg";
import ootyImg from "@/assets/ooty-valley.jpg";
import { Shield, Heart, Leaf, Sparkles } from "lucide-react";

const values = [
  { icon: Heart, title: "Warm Hospitality", desc: "Every guest is family. We go beyond expectations to make your stay memorable." },
  { icon: Shield, title: "Safety & Hygiene", desc: "Rigorous sanitation protocols, contactless services, and 24/7 security." },
  { icon: Leaf, title: "Nature & Relaxation", desc: "From Chennai's urban energy to Ooty's serene mountains — find your peace." },
  { icon: Sparkles, title: "Comfortable Luxury", desc: "Premium amenities without the pretense. Luxury that feels like home." },
];

export default function Overview() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex flex-col items-center justify-center bg-secondary/10 mt-8 rounded-2xl mx-4 lg:mx-12">
        <div className="relative z-20 text-center px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="label-caps text-primary mb-4">About Us</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="heading-display text-4xl md:text-6xl"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-luxury max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground/90 mb-8">
              "Whether overlooking the silicon corridor of Chennai or the mist-veiled peaks of Ooty, DrizzleDrop is a sanctuary of quiet luxury."
            </p>
            <p className="body-text">
              Founded with a vision to redefine Indian hospitality, DrizzleDrop Hotels brings together modern comfort and authentic warmth. Our two properties — in Chennai and Ooty — offer distinct experiences united by a single promise: your comfort is our craft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card/50">
        <div className="container-luxury">
          <SectionHeading label="Our Values" title="What We Stand For" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-500"
              >
                <v.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-serif text-xl font-semibold mb-2">{v.title}</h3>
                <p className="body-text text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-background/30 z-10" />
        <img src={ootyImg} className="w-full h-full object-cover" alt="Ooty landscape" />
      </section>
    </div>
  );
}
