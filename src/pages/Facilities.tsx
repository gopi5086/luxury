import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import {
  Wifi, Zap, Tv, BedDouble, Briefcase, MapPin, Shield,
  Sparkles, Car, Dumbbell, Smartphone, Dog, BookOpen, Coffee, Navigation
} from "lucide-react";

const facilities = [
  { title: "FIBRED UP", icon: Wifi, desc: "Ultra-fast fibre broadband" },
  { title: "FULLY GENERATED", icon: Zap, desc: "Complete power backup" },
  { title: "SMART TV & STREAMING", icon: Tv, desc: "Smart TVs in every room" },
  { title: "HYPNOS MATTRESS", icon: BedDouble, desc: "Premium mattresses" },
  { title: "IN-SUITE WORK STATION", icon: Briefcase, desc: "Dedicated work areas" },
  { title: "LOCAL HOTSPOTS", icon: MapPin, desc: "Curated local guides" },
  { title: "24 HR SECURITY", icon: Shield, desc: "Round-the-clock safety" },
  { title: "LUXED-UP LIVING", icon: Sparkles, desc: "Premium furnishings" },
  { title: "FREE PARKING", icon: Car, desc: "Complimentary parking" },
  { title: "GYM PARTNERSHIP", icon: Dumbbell, desc: "Fitness access" },
  { title: "CONTACTLESS CHECK-IN", icon: Smartphone, desc: "Digital check-in" },
  { title: "POOCH FRIENDLY", icon: Dog, desc: "Pets welcome" },
  { title: "HOMEWORK ROOM", icon: BookOpen, desc: "Study and kids area" },
  { title: "CAFÉ", icon: Coffee, desc: "In-house café" },
  { title: "PERFECTLY LOCATED", icon: Navigation, desc: "Prime locations" },
];

export default function Facilities() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading
            label="Amenities"
            title="Everything You Need"
            subtitle="Every DrizzleDrop property comes fully equipped with premium amenities designed for modern travelers."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border/30">
            {facilities.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="bg-background p-8 flex flex-col items-center justify-center text-center group hover:bg-gold-subtle transition-all duration-500 cursor-default"
              >
                <f.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary mb-4 transition-colors duration-300 group-hover:scale-110 transition-transform" />
                <span className="label-caps group-hover:text-primary transition-colors duration-300">{f.title}</span>
                <span className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{f.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
