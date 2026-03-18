import { siteConfig } from "@/config/content";
import { Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-primary px-6 py-10 text-primary-foreground">
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
      <div>
        <p className="text-lg font-bold">{siteConfig.title}</p>
        <p className="text-sm opacity-70">{siteConfig.subtitle} · {siteConfig.conference}</p>
      </div>
      <div className="flex items-center gap-4">
        {siteConfig.footer.socialLinks.twitter && (
          <a
            href={siteConfig.footer.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 transition-opacity hover:opacity-100"
            aria-label="Twitter / X"
          >
            <Twitter size={18} />
          </a>
        )}
      </div>
    </div>
  </footer>
);

export default Footer;
