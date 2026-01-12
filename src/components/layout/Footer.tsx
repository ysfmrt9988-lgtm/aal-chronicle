import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-16">
      <div className="container-editorial py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Atakent Anatolian High School Logo"
                className="h-12 w-12 object-contain bg-background rounded-full p-1"
              />
              <div>
                <h3 className="font-display text-xl font-bold">Voice of AAL</h3>
                <p className="text-sm text-background/60">
                  Official Newspaper of Atakent Anatolian High School
                </p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed max-w-md">
              Delivering the latest news, stories, and updates from our vibrant school community. 
              Voice of AAL is written by students, for students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "News", path: "/news" },
                { label: "Our Team", path: "/team" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {["News", "Clubs", "Events", "Sports", "Culture"].map((category) => (
                <li key={category}>
                  <Link
                    to={`/news?category=${category.toLowerCase()}`}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © {currentYear} Voice of AAL. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-background/40">
                İzmir • Karşıyaka • Atakent Anatolian High School
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
