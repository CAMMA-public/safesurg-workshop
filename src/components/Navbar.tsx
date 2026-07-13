import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "@/config/content";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const onHome = pathname === "/";

  const isActiveLink = (href: string) => {
    if (href.startsWith("#")) {
      return onHome && hash === href;
    }

    return pathname === href;
  };

  const navLinkClass = (active: boolean) =>
    cn(
      "relative text-sm font-medium text-white/70 transition-colors hover:text-amber-400 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:rounded-full after:bg-[#D9A066] after:transition-transform",
      active ? "text-white after:scale-x-100" : "after:scale-x-0",
    );

  const mobileNavLinkClass = (active: boolean) =>
    cn(
      "w-fit border-b-2 pb-1 text-sm font-medium transition-colors hover:text-amber-400",
      active ? "border-[#D9A066] text-white" : "border-transparent text-white/70",
    );

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
            const active = isActiveLink(l.href);
            return href.startsWith("/") ? (
              <Link
                key={l.href}
                to={href}
                className={navLinkClass(active)}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={href}
                className={navLinkClass(active)}
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
            const active = isActiveLink(l.href);
            return href.startsWith("/") ? (
              <Link
                key={l.href}
                to={href}
                onClick={() => setMobileOpen(false)}
                className={mobileNavLinkClass(active)}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={mobileNavLinkClass(active)}
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
