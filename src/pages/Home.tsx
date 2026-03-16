import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, MapPin, ChevronDown, Wifi, Car, Shield, MessageCircle, Phone, Mail } from "lucide-react";
import heroImg from "@/assets/hero-lobby.jpg";
import chennaiImg from "@/assets/chennai-hotel.jpg";
import ootyImg from "@/assets/ooty-valley.jpg";
import SectionHeading from "@/components/SectionHeading";
import BookingBar from "@/components/BookingBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const reviews = [
  { name: "Ananya S.", text: "Beautiful stay experience with amazing hospitality. The rooftop dining was unforgettable.", rating: 5 },
  { name: "Rahul M.", text: "Perfect business hotel in Chennai. Clean rooms, fast WiFi, and excellent service.", rating: 5 },
  { name: "Priya K.", text: "Our Ooty trip was magical. The valley views from our room were breathtaking.", rating: 5 },
  { name: "David L.", text: "World-class hospitality at an incredible value. Will definitely return.", rating: 4 },
];

const faqs = [
  { q: "What time is check-in and check-out?", a: "Check-in is at 12:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available upon request and subject to availability." },
  { q: "Is parking available?", a: "Yes, we offer complimentary secure parking at both our Chennai and Ooty properties." },
  { q: "Are pets allowed?", a: "Yes! DrizzleDrop Hotels is pooch friendly. Please inform us during booking so we can prepare your room." },
  { q: "Do you provide airport pickup?", a: "Yes, we offer airport pickup and drop services for our Chennai property. Please book in advance." },
  { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, GPay, PhonePe, Paytm, and WhatsApp Pay." },
];

const blogPosts = [
    { title: "5 Hidden Gems in Ooty You Must Visit", date: "Oct 12, 2023", category: "Travel" },
    { title: "Effective Business Stays in Chennai's IT Corridor", date: "Sep 28, 2023", category: "Business" },
    { title: "The Secret to Our Authentic Nilgiri Tea", date: "Aug 15, 2023", category: "Dining" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] w-full flex items-center justify-center bg-secondary/10 pt-20">

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="label-caps text-primary mb-6"
          >
            Premium Hospitality
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display text-5xl md:text-7xl lg:text-8xl mb-8"
          >
            Luxury Stay. <br />
            <span className="italic text-gradient-gold">Comfort Everywhere.</span>
          </motion.h1>
        </div>

        {/* Floating Booking Bar positioned to overlap the hero bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-30">
          <BookingBar />
        </div>
      </section>

      {/* About - Added padding top to accommodate overlapping BookingBar */}
      <section className="section-padding pt-32 md:pt-40 lg:pt-48">
        <div className="container-luxury">
          <SectionHeading
            label="Welcome"
            title="A Sanctuary of Quiet Luxury"
            subtitle="DrizzleDrop Inn offers hassle-free accommodation where modern facilities meet exceptional service. Whether it's your business stay in Chennai or a scenic vacation in Ooty, we provide an ideal abode for the modern traveller."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Wifi, title: "Modern Facilities", desc: "Electricity Backup, WIFI connectivity, and 24 hours Hot Water in all locations." },
              { icon: Shield, title: "Safety First", desc: "Enhanced cleaning procedures for a secure and confident stay experience." },
              { icon: Car, title: "Ample Parking", desc: "Secure private car parking available for all our guests at no additional charge." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...stagger}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-500 hover-gold-glow"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                <p className="body-text text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="section-padding bg-card/50">
        <div className="container-luxury">
          <SectionHeading label="Our Properties" title="Two Destinations, One Promise" />
          <div className="grid md:grid-cols-2 gap-8">
            {/* Chennai */}
            <motion.div {...fadeUp} className="group overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src={chennaiImg} alt="DrizzleDrop Chennai" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">OMR IT Corridor, Chennai</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-3">DrizzleDrop Inn Chennai</h3>
                <p className="body-text text-sm mb-4">
                  A sophisticated 3-star business hotel located at Thoriaipakkam. Featuring 35 well-furnished rooms and suites with a panoramic terrace, rooftop dining, and multi-cuisine delicacies. Just 30 minutes from the Airport and close to major IT hubs.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-wider font-semibold">
                  {["IT Hubs", "OMR Corridor", "Rooftop Dining", "Airport Nearby"].map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Ooty */}
            <motion.div {...fadeUp} transition={{ delay: 0.15, duration: 0.6 }} className="group overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src={ootyImg} alt="DrizzleDrop Ooty" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Udhagamandalam (Ooty)</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-3">DrizzleDrop Inn Ooty</h3>
                <p className="body-text text-sm mb-4">
                  An enchanting getaway featuring 8 hill-view apartment type individual rooms with private balconies. Enjoy panoramic views of the hills and the historical Nilgiris toy train. Located just 2 km from Ooty Bus-stand and Railway station.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-wider font-semibold">
                  {["Hill Views", "Toy Train Route", "Private Balcony", "Quiet Retreat"].map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Maps & See and Do */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading label="Find Us" title="Explore the Surroundings" />
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <div className="border border-border/50 overflow-hidden rounded-xl">
                <iframe
                    title="DrizzleDrop Chennai"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d80.22!3d12.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUzJzI0LjAiTiA4MMKwMTMnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                />
                <div className="p-4 bg-card border-t border-border/50">
                    <h4 className="font-serif text-lg font-semibold">DrizzleDrop Inn Chennai</h4>
                    <p className="text-sm text-muted-foreground">Rajiv Gandhi Salai, Thoriaipakkam, OMR IT Corridor</p>
                </div>
                </div>
                <div className="border border-border/50 overflow-hidden rounded-xl">
                <iframe
                    title="DrizzleDrop Ooty"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d76.69!3d11.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI0JzM2LjAiTiA3NsKwNDEnMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                />
                <div className="p-4 bg-card border-t border-border/50">
                    <h4 className="font-serif text-lg font-semibold">DrizzleDrop Inn Ooty</h4>
                    <p className="text-sm text-muted-foreground">2 KM from Ooty Bus Stand & Railway Station</p>
                </div>
                </div>
            </div>

            <div className="bg-secondary/10 p-8 rounded-xl border border-border/50">
                <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Ooty: See & Do
                </h3>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {[
                        { name: "Nilgiri mountain Railway", dist: "2.8 KM" },
                        { name: "Ooty Lake", dist: "3.3 KM" },
                        { name: "Rose Garden", dist: "4.0 KM" },
                        { name: "Botanical Garden", dist: "4.9 KM" },
                        { name: "Tea Factory", dist: "7.4 KM" },
                        { name: "Dodabetta View Point", dist: "11 KM" },
                        { name: "Avalanche", dist: "22 KM" },
                        { name: "Coonoor", dist: "21 KM" },
                        { name: "Deer Park", dist: "2.0 KM" },
                        { name: "Arboretum", dist: "1.5 KM" },
                    ].map((att) => (
                        <div key={att.name} className="flex justify-between items-center text-sm border-b border-border/20 pb-2">
                            <span className="font-medium">{att.name}</span>
                            <span className="text-muted-foreground">{att.dist}</span>
                        </div>
                    ))}
                    <p className="text-xs text-muted-foreground mt-4 italic">And many more: Pykara Lake, Kotagiri, Mudumalai, Murugan Temple...</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-card/50">
        <div className="container-luxury">
          <SectionHeading label="Testimonials" title="What Our Guests Say" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < r.rating ? "text-primary fill-primary" : "text-muted"}`} />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 mb-4 italic font-serif">"{r.text}"</p>
                <p className="label-caps">{r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-secondary/5">
        <div className="container-luxury">
          <SectionHeading label="Latest News" title="From Our Journal" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post, i) => (
                <motion.div
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group cursor-pointer"
                >
                    <div className="bg-background p-8 border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-xl">
                        <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4 block">
                            {post.category} • {post.date}
                        </span>
                        <h3 className="font-serif text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                            {post.title}
                        </h3>
                        <div className="h-px bg-border/50 w-full mb-4" />
                        <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            Read More
                            <div className="h-0.5 w-4 bg-primary group-hover:w-8 transition-all duration-300" />
                        </span>
                    </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-luxury max-w-3xl">
          <SectionHeading label="FAQ" title="Frequently Asked Questions" />
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card border border-border/50 px-6">
                <AccordionTrigger className="text-left font-serif text-lg hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="body-text text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-card/50">
        <div className="container-luxury">
          <SectionHeading label="Get in Touch" title="Contact Us" />
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: MessageCircle, label: "WhatsApp", value: "+91 86678 25086", href: "https://wa.me/918667825086" },
              { icon: Mail, label: "Email", value: "info@drizzledrop.com", href: "mailto:info@drizzledrop.com" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-500 hover-gold-glow block"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="label-caps mb-1">{label}</p>
                <p className="text-sm text-foreground/80">{value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
