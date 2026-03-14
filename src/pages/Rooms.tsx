import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wifi, Tv, BedDouble, Car, Coffee } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import roomStandard from "@/assets/room-standard.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";

interface Room {
  name: string;
  desc: string;
  price: string;
  image: string;
  amenities: string[];
}

const chennaiRooms: Room[] = [
  { name: "Standard Room", desc: "Comfortable room with modern amenities, ideal for business travelers.", price: "₹2,999", image: roomStandard, amenities: ["WiFi", "Smart TV", "Work Desk", "AC"] },
  { name: "Deluxe Room", desc: "Spacious room with premium furnishings and city views.", price: "₹4,499", image: roomDeluxe, amenities: ["WiFi", "Smart TV", "Mini Bar", "City View"] },
  { name: "Family Room", desc: "Extra space for families with connecting areas and kid-friendly amenities.", price: "₹5,999", image: roomStandard, amenities: ["WiFi", "Smart TV", "Extra Beds", "Family Area"] },
  { name: "Triple Room", desc: "Perfect for groups with three beds and ample living space.", price: "₹5,499", image: roomDeluxe, amenities: ["WiFi", "Smart TV", "3 Beds", "Spacious"] },
];

const ootyRooms: Room[] = [
  { name: "Standard Room", desc: "Cozy room with garden views surrounded by nature.", price: "₹3,499", image: roomStandard, amenities: ["WiFi", "Heater", "Garden View", "Hot Water"] },
  { name: "Deluxe Room", desc: "Premium room with valley views and private balcony.", price: "₹5,999", image: roomDeluxe, amenities: ["WiFi", "Valley View", "Balcony", "Fireplace"] },
  { name: "Family Room", desc: "Spacious family room with scenic views and bonfire access.", price: "₹7,499", image: roomStandard, amenities: ["WiFi", "Family Area", "Valley View", "Bonfire"] },
  { name: "Triple Room", desc: "Comfortable triple occupancy with mountain backdrop.", price: "₹6,999", image: roomDeluxe, amenities: ["WiFi", "3 Beds", "Mountain View", "Heater"] },
];

const amenityIcons: Record<string, typeof Wifi> = {
  WiFi: Wifi, "Smart TV": Tv, "Work Desk": BedDouble, AC: Car, "Mini Bar": Coffee,
};

function RoomCard({ room, location }: { room: Room; location: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500"
    >
      <div className="relative h-56 overflow-hidden">
        <img src={room.image} alt={`${room.name} - ${location}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute top-4 right-4 px-4 py-2 bg-background/90 backdrop-blur-sm">
          <span className="font-serif text-xl font-semibold text-primary">{room.price}</span>
          <span className="text-xs text-muted-foreground"> / night</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-2">{room.name}</h3>
        <p className="body-text text-sm mb-4">{room.desc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.map((a) => (
            <span key={a} className="px-3 py-1 text-xs bg-secondary text-secondary-foreground">{a}</span>
          ))}
        </div>
        <Link
          to="/rooms"
          className="inline-block px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:bg-primary/90 transition-all duration-300 hover-gold-glow"
        >
          Reserve This Room
        </Link>
      </div>
    </motion.div>
  );
}

export default function Rooms() {
  return (
    <div className="pt-24">
      {/* Chennai */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading label="Chennai" title="DrizzleDrop Hotels Chennai" subtitle="35 premium rooms in the heart of OMR IT Corridor" />
          <div className="grid sm:grid-cols-2 gap-8">
            {chennaiRooms.map((room) => (
              <RoomCard key={room.name + "chennai"} room={room} location="Chennai" />
            ))}
          </div>
        </div>
      </section>

      {/* Ooty */}
      <section className="section-padding bg-card/50">
        <div className="container-luxury">
          <SectionHeading label="Ooty" title="DrizzleDrop Hotels Ooty" subtitle="Scenic hill resort rooms with valley and mountain views" />
          <div className="grid sm:grid-cols-2 gap-8">
            {ootyRooms.map((room) => (
              <RoomCard key={room.name + "ooty"} room={room} location="Ooty" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
