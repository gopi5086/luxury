import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: MessageCircle, href: "https://wa.me/918667825086", label: "WhatsApp" },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Facilities", path: "/facilities" },
  { label: "Room / Tariff", path: "/rooms" },
  { label: "Gallery", path: "/gallery" },
  { label: "Deals", path: "/deals" },
  { label: "Dining", path: "/dining" },
  { label: "Policies & Terms", path: "/overview" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container-luxury section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <span className="font-serif text-2xl font-semibold tracking-tight">
              <span className="text-primary">Drizzle</span>
              <span className="text-foreground">Drop</span>
              <span className="ml-2 text-sm font-sans font-medium text-muted-foreground">HOTELS</span>
            </span>
            <p className="body-text mt-4 text-sm">
              Hassle-free accommodation for your business stay in Chennai and vacation in scenic Ooty. Experience nature and hospitality in its purest form.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 rounded-full"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="label-caps mb-6 text-foreground font-bold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary/30 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Chennai */}
          <div>
            <h4 className="label-caps mb-6 text-foreground font-bold">Chennai Property</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                Thoriaipakkam, OMR IT Corridor, Rajiv Gandhi Salai, Chennai
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                info@drizzledrop.com
              </li>
            </ul>
          </div>

          {/* Ooty */}
          <div>
            <h4 className="label-caps mb-6 text-foreground font-bold">Ooty Property</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                2km from Ooty Bus-stand & Railway station, Nilgiris
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +91 98765 43211
              </li>
              <li className="flex items-center gap-2 opacity-0 lg:opacity-100">
                {/* Spacer */}
                <div className="h-4" />
              </li>
            </ul>
          </div>
        </div>

        {/* Payment icons & Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-muted-foreground">
              © 2026 DrizzleDrop Hotels. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-muted-foreground">
                <Link to="/overview" className="hover:text-primary transition-colors underline decoration-border underline-offset-4">Terms & Conditions</Link>
                <Link to="/overview" className="hover:text-primary transition-colors underline decoration-border underline-offset-4">Privacy Policy</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-[10px] tracking-widest text-muted-foreground font-bold uppercase">Accepted Payments</span>
            <div className="flex items-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <span className="text-xs font-bold text-foreground">GPAY</span>
                <span className="text-xs font-bold text-foreground">PhonePe</span>
                <span className="text-xs font-bold text-foreground">Paytm</span>
                <span className="text-xs font-bold text-foreground">WhatsApp Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
