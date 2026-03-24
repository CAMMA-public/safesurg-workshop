import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "@/config/content";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-glass border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link to="/" aria-label="SafeSurg home">
          <Logo variant="light" size="md" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navLinks.map((l) => {
            const href = !onHome && l.href.startsWith("#") ? `/${l.href}` : l.href;
            return href.startsWith("/") ? (
              <Link
                key={l.href}
                to={href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-amber-400"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-amber-400"
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-white/10 px-6 py-4 md:hidden nav-glass">
          {siteConfig.navLinks.map((l) => {
            const href = !onHome && l.href.startsWith("#") ? `/${l.href}` : l.href;
            return href.startsWith("/") ? (
              <Link
                key={l.href}
                to={href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-white/70 hover:text-amber-400"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-white/70 hover:text-amber-400"
              >
                {l.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
