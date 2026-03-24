import { siteConfig } from "@/config/content";
import { Linkedin, Mail } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => (
  <footer className="border-t border-white/10 bg-primary px-6 py-10 text-primary-foreground">
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
      <div>
        <Logo variant="light" size="md" />
        <p className="mt-1 text-sm opacity-50">{siteConfig.subtitle} · {siteConfig.conference}</p>
      </div>
      <div className="flex items-center gap-5">
        {siteConfig.footer.email && (
          <a
            href={`mailto:${siteConfig.footer.email}`}
            className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-amber-400"
          >
            <Mail size={16} />
            {siteConfig.footer.email.replace("@", " [at] ")}
          </a>
        )}
        {siteConfig.footer.socialLinks.linkedin && (
          <a
            href={siteConfig.footer.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition-colors hover:text-amber-400"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        )}
      </div>
    </div>
  </footer>
);

export default Footer;
