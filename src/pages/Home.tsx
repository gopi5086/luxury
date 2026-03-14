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
  { q: "What time is check-in and check-out?", a: "Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available upon request." },
  { q: "Is parking available?", a: "Yes, we offer complimentary secure parking at both our Chennai and Ooty properties." },
  { q: "Are pets allowed?", a: "Yes! DrizzleDrop Hotels is pooch friendly. Please inform us during booking so we can prepare your room." },
  { q: "Do you provide airport pickup?", a: "Yes, we offer airport pickup and drop services for our Chennai property. Please book in advance." },
  { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, GPay, PhonePe, Paytm, and bank transfers." },
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

          {/* Booking Bar */}
          <BookingBar />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border border-foreground/30 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading
            label="Welcome"
            title="The Art of the Arrival"
            subtitle="Whether overlooking the silicon corridor of Chennai or the mist-veiled peaks of Ooty, DrizzleDrop is a sanctuary of quiet luxury."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Wifi, title: "Connected", desc: "High-speed WiFi and modern amenities in every room." },
              { icon: Shield, title: "Secure", desc: "24/7 security with contactless check-in technology." },
              { icon: Car, title: "Accessible", desc: "Prime locations with free parking and transport services." },
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
                  <span className="text-sm font-medium">Chennai, Tamil Nadu</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-3">DrizzleDrop Inn Chennai</h3>
                <p className="body-text text-sm mb-4">
                  A modern business hotel in the OMR IT Corridor near Rajiv Gandhi Salai. 35 rooms designed for business and leisure travelers, with rooftop dining and premium amenities.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["IT Hubs", "Airport", "Marina Beach", "ECR", "Dakshina Chitra"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-secondary text-secondary-foreground">{tag}</span>
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
                  <span className="text-sm font-medium">Ooty, Tamil Nadu</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-3">DrizzleDrop Inn Ooty</h3>
                <p className="body-text text-sm mb-4">
                  A scenic hill resort offering peaceful stays surrounded by nature. Valley-view rooms, Nilgiris toy train route views, bonfire experiences, and rejuvenating mountain air.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Valley Views", "Toy Train", "Bonfire", "Nature", "Restaurant"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-secondary text-secondary-foreground">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Maps */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading label="Find Us" title="Our Locations" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border/50 overflow-hidden">
              <iframe
                title="DrizzleDrop Chennai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d80.22!3d12.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUzJzI0LjAiTiA4MMKwMTMnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
              <div className="p-4 bg-card">
                <h4 className="font-serif text-lg font-semibold">Chennai</h4>
                <p className="text-sm text-muted-foreground">OMR IT Corridor, Rajiv Gandhi Salai</p>
              </div>
            </div>
            <div className="border border-border/50 overflow-hidden">
              <iframe
                title="DrizzleDrop Ooty"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d76.69!3d11.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI0JzM2LjAiTiA3NsKwNDEnMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
              <div className="p-4 bg-card">
                <h4 className="font-serif text-lg font-semibold">Ooty</h4>
                <p className="text-sm text-muted-foreground">Nilgiris District, Tamil Nadu</p>
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
              { icon: MessageCircle, label: "WhatsApp", value: "+91 98765 43210", href: "https://wa.me/919876543210" },
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
