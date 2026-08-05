import { Link, useLocation } from "wouter";
import {
  Phone,
  Mail,
  MapPin,
  Construction,
  Info,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import { useState, useEffect, MouseEvent } from "react";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const isHome = location === "/";

  const handleHashNav = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;
    e.preventDefault();
    const path = href.slice(0, hashIndex) || "/";
    const id = href.slice(hashIndex + 1);
    const scrollTo = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (location !== path) {
      setLocation(path);
      setTimeout(scrollTo, 80);
    } else {
      scrollTo();
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    const onScrollImmediate = () => {
      const top = window.scrollY <= 0;
      setScrolled(!top);
      setAtTop(top);
    };

    const attach = () => {
      if (cancelled) return;

      // Landing, Über-uns, Karriere & Kontakt: Header weiß beim ersten Scrollen
      if (
        location === "/" ||
        location === "/ueber-uns" ||
        location === "/karriere" ||
        location === "/kontakt"
      ) {
        onScrollImmediate();
        window.addEventListener("scroll", onScrollImmediate, { passive: true });
        return;
      }

      setAtTop(false);
      const hero = document.querySelector<HTMLElement>("[data-hero]");
      if (!hero) {
        setScrolled(true);
        return;
      }
      setScrolled(false);
      observer = new IntersectionObserver(
        ([entry]) => {
          setScrolled(!entry.isIntersecting);
        },
        { rootMargin: "-80px 0px 0px 0px", threshold: 0 },
      );
      observer.observe(hero);
    };

    const raf = requestAnimationFrame(attach);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      observer?.disconnect();
      window.removeEventListener("scroll", onScrollImmediate);
    };
  }, [location]);

  const navLinks = [
    { label: "Leistungen", href: "/#leistungen", icon: Construction },
    { label: "Über uns", href: "/ueber-uns", icon: Info },
    { label: "Karriere", href: "/karriere", icon: Briefcase },
    { label: "Kontakt", href: "/kontakt", icon: MessageSquare },
  ];

  const transparent = !scrolled;
  const showContactBar = isHome && atTop;

  const handleMobileLinkClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setMenuOpen(false);
    handleHashNav(e, href);
  };

  const phoneHref = `tel:${companyData.contact.phone.replace(/[\s/-]/g, "")}`;

  return (
    <header
      data-testid="header-main"
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-[background-color,box-shadow] duration-300 ${
        transparent ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      {/* Kontakt-Leiste — nur Landingpage, nur am Seitenanfang */}
      <div
        data-testid="header-contact-bar"
        className={`hidden md:grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${
          showContactBar
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="min-h-0">
          <div
            className={`border-b transition-colors duration-300 ${
              transparent
                ? "border-white/15 bg-transparent text-white"
                : "border-gray-100 bg-white text-foreground"
            }`}
          >
            <div className="container mx-auto px-4 md:px-6 h-9 flex items-center justify-between text-xs tracking-wide">
              <div className="flex items-center gap-5">
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-semibold">{companyData.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>{companyData.contact.email}</span>
                </a>
              </div>
              <div
                className={`flex items-center gap-1.5 ${
                  transparent ? "text-white/85" : "text-muted-foreground"
                }`}
              >
                <MapPin className="w-3.5 h-3.5 shrink-0 text-accent" />
                <span>
                  {companyData.address.street}, {companyData.address.zip}{" "}
                  {companyData.address.city}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
          <img
            src="/images/logo.png"
            alt={companyData.name}
            className={`h-9 md:h-12 w-auto transition-all ${transparent ? "drop-shadow-lg" : ""}`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleHashNav(e, link.href)}
              data-testid={`link-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              className={`font-medium hover:text-accent transition-colors text-sm uppercase tracking-wide ${
                transparent ? "text-white" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            variant="default"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
            data-testid="button-header-apply"
          >
            <a
              href={`mailto:${companyData.contact.email}?subject=Bewerbung`}
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Jetzt bewerben</span>
            </a>
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                data-testid="button-mobile-menu"
                className={`relative w-11 h-11 flex items-center justify-center rounded-md transition-colors ${
                  menuOpen
                    ? "text-white hover:bg-white/10"
                    : transparent
                      ? "text-white hover:bg-white/10"
                      : "text-primary hover:bg-primary/10"
                }`}
              >
                <span className="relative block w-6 h-[18px]">
                  <span
                    className={`absolute left-0 right-0 h-[2px] bg-current will-change-transform transition-[top,bottom,transform] duration-[450ms] [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] ${
                      menuOpen
                        ? "top-1/2 -translate-y-1/2 rotate-45 [transition-delay:120ms]"
                        : "top-0 rotate-0 [transition-delay:0ms]"
                    }`}
                  />
                  <span
                    className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-current transition-[opacity,transform] duration-150 ease-out origin-center ${
                      menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100 delay-150"
                    }`}
                  />
                  <span
                    className={`absolute left-0 right-0 h-[2px] bg-current will-change-transform transition-[top,bottom,transform] duration-[450ms] [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] ${
                      menuOpen
                        ? "bottom-1/2 translate-y-1/2 -rotate-45 [transition-delay:120ms]"
                        : "bottom-0 rotate-0 [transition-delay:0ms]"
                    }`}
                  />
                </span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[78vw] max-w-[320px] p-0 border-0 bg-[#213d86] text-white flex flex-col [&>button]:hidden"
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.07]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, #ffffff 0 1px, transparent 1px 14px)",
                }}
              />
              <div className="relative flex items-center justify-end px-4 h-20 border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Menü schließen"
                  className="relative w-11 h-11 flex items-center justify-center rounded-md text-white hover:bg-white/10 transition-colors"
                >
                  <span className="relative block w-6 h-[18px]">
                    <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-current rotate-45" />
                    <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-current -rotate-45" />
                  </span>
                </button>
              </div>

              <nav className="relative flex-1 overflow-y-auto px-3 py-6">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const active =
                      link.href === location ||
                      (link.href.startsWith("/#") && location === "/");
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={(e) => handleMobileLinkClick(e, link.href)}
                          className={`group flex items-center gap-4 px-4 py-4 rounded-xl transition-colors ${
                            active
                              ? "bg-white/10 text-white"
                              : "text-white/85 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span
                            className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                              active
                                ? "bg-accent text-accent-foreground"
                                : "bg-white/5 text-accent group-hover:bg-white/10"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </span>
                          <span className="flex-1 font-semibold text-base tracking-wide">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="relative px-6 py-6 border-t border-white/10 space-y-4 bg-black/10">
                <a
                  href={`tel:${companyData.contact.phone.replace(/[\s/-]/g, "")}`}
                  className="flex items-center gap-3 text-white/90 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-semibold">{companyData.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="flex items-center gap-3 text-white/90 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <span className="truncate">{companyData.contact.email}</span>
                </a>
                <div className="flex items-start gap-3 text-white/75 text-xs leading-relaxed">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    {companyData.address.street}
                    <br />
                    {companyData.address.zip} {companyData.address.city}
                  </span>
                </div>

                <Button
                  asChild
                  className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base rounded-xl shadow-lg shadow-black/20"
                >
                  <a
                    href={`mailto:${companyData.contact.email}?subject=Bewerbung`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Jetzt bewerben</span>
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
