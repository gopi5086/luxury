import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import driLogo from "../assets/drilogo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Facilities", path: "/facilities" },
  { label: "Room / Tariff", path: "/rooms" },
  {
    label: "Gallery",
    path: "/gallery",
    dropdown: [
      { label: "Chennai", path: "/gallery?location=chennai" },
      { label: "Ooty", path: "/gallery?location=ooty" },
    ],
  },
  { label: "Deals", path: "/deals" },
  { label: "Dining", path: "/dining" },
  { label: "Overview", path: "/overview" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container-luxury flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={driLogo} alt="DrizzleDrop Inn" className="h-[72px] lg:h-[84px] w-auto object-contain bg-transparent" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className="relative"
              onMouseEnter={() => link.dropdown && setGalleryOpen(true)}
              onMouseLeave={() => link.dropdown && setGalleryOpen(false)}
            >
              <Link
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 relative group flex items-center gap-1 ${location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
                  }`}
              >
                {link.label}
                {link.dropdown && <ChevronDown className="w-3 h-3" />}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
              {link.dropdown && (
                <AnimatePresence>
                  {galleryOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 glass-card rounded-md py-2 min-w-[160px]"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-secondary/50 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/rooms"
            className="hidden sm:inline-flex px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:bg-primary/90 transition-all duration-300 hover-gold-glow"
          >
            Book Now
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border/50 overflow-hidden"
          >
            <nav className="container-luxury py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 text-base font-medium transition-colors ${location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground/70"
                      }`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-8">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/rooms"
                className="mt-4 mx-4 text-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold tracking-wide"
              >
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
