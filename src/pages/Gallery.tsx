import { useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import roomStandard from "@/assets/room-standard.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import diningImg from "@/assets/dining-rooftop.jpg";
import ootyImg from "@/assets/ooty-valley.jpg";
import heroImg from "@/assets/hero-lobby.jpg";
import chennaiImg from "@/assets/chennai-hotel.jpg";

const galleryData = {
  chennai: [
    { src: roomStandard, label: "Rooms" },
    { src: diningImg, label: "Dining" },
    { src: heroImg, label: "Lobby" },
    { src: roomDeluxe, label: "Deluxe Suite" },
    { src: chennaiImg, label: "Exterior" },
    { src: roomStandard, label: "Bathroom" },
  ],
  ooty: [
    { src: ootyImg, label: "Valley View" },
    { src: roomStandard, label: "Rooms" },
    { src: roomDeluxe, label: "Balcony" },
    { src: diningImg, label: "Dining" },
    { src: heroImg, label: "Campfire" },
    { src: ootyImg, label: "Mountain View" },
  ],
};

export default function Gallery() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("location") === "ooty" ? "ooty" : "chennai";
  const [tab, setTab] = useState<"chennai" | "ooty">(initialTab);

  const images = galleryData[tab];

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading label="Gallery" title="Visual Journey" subtitle="Explore our properties through stunning imagery" />

          <div className="flex justify-center gap-4 mb-12">
            {(["chennai", "ooty"] as const).map((loc) => (
              <button
                key={loc}
                onClick={() => setTab(loc)}
                className={`px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  tab === loc
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {loc === "chennai" ? "Chennai" : "Ooty"}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div
                key={`${tab}-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="break-inside-avoid group relative overflow-hidden cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                    i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-64" : "h-72"
                  }`}
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-end">
                  <span className="p-4 label-caps opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-foreground">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
