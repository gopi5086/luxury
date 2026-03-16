import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wifi, Tv, BedDouble, Car, Coffee, Wind, Droplets } from "lucide-react";
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
  { name: "Executive Standard", desc: "Well-furnished room ideal for business travelers, featuring smart Google TV and ergonomic work space.", price: "₹2,999", image: roomStandard, amenities: ["WiFi", "Google TV", "Work Desk", "Toiletries"] },
  { name: "Premium Deluxe", desc: "Spacious and sophisticated accommodation with upscale furnishings and prodigious hospitality.", price: "₹4,499", image: roomDeluxe, amenities: ["WiFi", "Google TV", "Mini Bar", "Laundry"] },
  { name: "Luxury Suite", desc: "Our highest category offering separate seating area and panoramic views of the Rajiv Gandhi Salai.", price: "₹6,499", image: roomStandard, amenities: ["WiFi", "Google TV", "Seating Area", "24h Hot Water"] },
];

const ootyRooms: Room[] = [
  { name: "Hill-View Apartment", desc: "Individual apartment-type room with private balcony offering excellent panoramic views of the hills.", price: "₹3,999", image: roomStandard, amenities: ["Balcony", "WiFi", "Google TV", "Scenic View"] },
  { name: "Mountain Retreat", desc: "Quaint room on the lap of nature, perfectly located to view the famous Nilgiris toy train.", price: "₹5,499", image: roomDeluxe, amenities: ["Mountain View", "Private Balcony", "Heater", "WiFi"] },
];

const amenityIcons: Record<string, any> = {
  WiFi: Wifi, "Google TV": Tv, "Work Desk": BedDouble, "Seating Area": Car, "Mini Bar": Coffee, "Heater": Wind, "24h Hot Water": Droplets
};

function RoomCard({ room, location }: { room: Room; location: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
    >
      <div className="relative h-64 overflow-hidden">
        <img src={room.image} alt={`${room.name} - ${location}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-4 right-4 px-4 py-2 bg-background/95 backdrop-blur-sm rounded-full shadow-lg border border-border/50">
          <span className="font-serif text-xl font-bold text-primary">{room.price}</span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground"> / night</span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-serif text-2xl font-bold mb-3">{room.name}</h3>
        <p className="body-text text-sm mb-6 leading-relaxed text-muted-foreground/80">{room.desc}</p>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {room.amenities.map((a) => (
            <div key={a} className="flex items-center gap-2 text-xs text-foreground/70">
                <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                {a}
            </div>
          ))}
        </div>
        <Link
          to="/rooms"
          className="block w-full text-center px-6 py-4 bg-primary text-white text-sm font-bold tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300 hover:shadow-lg rounded-xl"
        >
          Check Availability
        </Link>
      </div>
    </motion.div>
  );
}

export default function Rooms() {
  return (
    <div className="pt-24 min-h-screen bg-secondary/5">
      {/* Header */}
      <section className="py-16 text-center">
        <div className="container-luxury px-4">
            <h1 className="heading-display text-5xl md:text-7xl mb-4">Our Accommodations</h1>
            <p className="max-w-2xl mx-auto body-text">Hassle-free stays with 35 curated rooms in Chennai and 8 enchanting hill-view apartments in Ooty.</p>
        </div>
      </section>

      {/* Chennai */}
      <section className="pb-24">
        <div className="container-luxury px-4">
          <SectionHeading label="Chennai, Tamil Nadu" title="Urban Sophistication" subtitle="3-star hospitality at Rajiv Gandhi Salai OMR IT Corridor" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {chennaiRooms.map((room) => (
              <RoomCard key={room.name + "chennai"} room={room} location="Chennai" />
            ))}
          </div>
        </div>
      </section>

      {/* Ooty */}
      <section className="py-24 bg-background">
        <div className="container-luxury px-4">
          <SectionHeading label="Udhagamandalam" title="Mountain Sanctuaries" subtitle="8 Hill-view apartments on the lap of mother nature" />
          <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
            {ootyRooms.map((room) => (
              <RoomCard key={room.name + "ooty"} room={room} location="Ooty" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
