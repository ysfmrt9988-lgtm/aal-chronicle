import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "News", path: "/news" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-editorial">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-center py-2 border-b border-border">
          <span className="text-xs text-caption font-body uppercase tracking-widest">
            Official Newspaper of Atakent Anatolian High School
          </span>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo & Title */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src={logo}
              alt="Atakent Anatolian High School Logo"
              className="h-12 w-12 md:h-16 md:w-16 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
            <div className="flex flex-col">
              <span className="font-display text-xl md:text-3xl font-bold text-headline tracking-tight">
                Voice of AAL
              </span>
              <span className="hidden sm:block text-xs text-caption font-body uppercase tracking-wider">
                İzmir • Karşıyaka • Est. 1992
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? "text-primary after:scale-x-100" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Category Bar */}
        <div className="hidden md:block border-t border-border">
          <div className="flex items-center justify-center gap-8 py-3">
            {["News", "Clubs", "Events", "Sports", "Culture"].map((category) => (
              <Link
                key={category}
                to={`/news?category=${category.toLowerCase()}`}
                className="text-xs font-body uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="container-editorial py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-lg font-display ${
                      isActive(item.path) ? "text-primary" : "text-headline"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-caption uppercase tracking-wider mb-3">Categories</p>
                <div className="flex flex-wrap gap-2">
                  {["News", "Clubs", "Events", "Sports", "Culture"].map((category) => (
                    <Link
                      key={category}
                      to={`/news?category=${category.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="category-badge"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
