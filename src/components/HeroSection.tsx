import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookingBar from "./BookingBar";

// Hero slide images
import heroChennai from "@/assets/hero-chennai.png";
import heroOoty from "@/assets/hero-ooty.png";
import heroLobby from "@/assets/hero-lobby-luxury.png";
import heroBeach from "@/assets/hero-beach.png";

interface HeroSlide {
  image: string;
  location: string;
  tagline: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: heroChennai,
    location: "Chennai",
    tagline: "Sophisticated Business Stay",
  },
  {
    image: heroOoty,
    location: "Ooty",
    tagline: "Enchanting Nature Escapes",
  },
  {
    image: heroLobby,
    location: "Welcome",
    tagline: "The Prodigious Hospitality",
  },
  {
    image: heroBeach,
    location: "Coastal",
    tagline: "Serenity by the Shore",
  },
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

// Shimmer particles for that premium floating effect
function ShimmerParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 4,
        opacity: Math.random() * 0.4 + 0.1,
      })),
    []
  );

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, p.opacity, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Slide progress indicator
function SlideIndicators({
  total,
  current,
  onSelect,
}: {
  total: number;
  current: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className="group relative flex items-center justify-center"
          aria-label={`Go to slide ${i + 1}`}
        >
          <div
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === current
                ? "w-10 bg-[#C5A861]"
                : "w-6 bg-white/40 group-hover:bg-white/70"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    },
    [currentSlide]
  );

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* === Background Slides with Ken Burns Effect === */}
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Ken Burns slow zoom & pan */}
          <motion.img
            src={slide.image}
            alt={slide.location}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.15 }}
            transition={{
              duration: SLIDE_DURATION / 1000 + 2,
              ease: "linear",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* === Cinematic Gradient Overlays === */}
      <div className="absolute inset-0 z-[5]">
        {/* Dark base overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {/* Top gradient for navbar blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        {/* Subtle gold warm tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C5A861]/10 via-transparent to-[#1a2744]/20" />
      </div>

      {/* === Shimmer Particles === */}
      <ShimmerParticles />

      {/* === Foreground Content === */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        {/* Location badge */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#C5A861]/40 bg-white/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A861] animate-pulse" />
              <span
                className="text-[11px] tracking-[0.25em] uppercase font-medium text-[#C5A861]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {slide.location} — {slide.tagline}
              </span>
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tight leading-[0.9] text-white mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Welcome to
            <br />
            <span className="italic bg-gradient-to-r from-[#C5A861] via-[#E8D5A3] to-[#C5A861] bg-clip-text text-transparent">
              DrizzleDrop Hotels
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-white/70 font-light tracking-wide mt-4 mb-10 max-w-2xl"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Luxury Stays in Chennai & Ooty
        </motion.p>

        {/* Decorative gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C5A861] to-transparent mb-10"
        />

        {/* Book Now CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#C5A861] hover:bg-[#b0944f] text-white text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(197,168,97,0.3)] group"
          >
            Book Now
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* === Slide Indicators === */}
      <SlideIndicators
        total={heroSlides.length}
        current={currentSlide}
        onSelect={goToSlide}
      />

      {/* === Floating Booking Bar === */}
      <div
        id="booking"
        className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-30"
      >
        <BookingBar />
      </div>

      {/* === Bottom Fade Edge === */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[25]" />
    </section>
  );
}
