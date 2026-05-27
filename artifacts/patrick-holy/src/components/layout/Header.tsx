import { Link, useLocation } from "wouter";
import { Phone, Menu } from "lucide-react";
import { useState, useEffect, MouseEvent } from "react";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const navLinks = [
    { label: "Leistungen", href: "/#leistungen" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Karriere", href: "/karriere" },
  ];

  const transparent = !scrolled;

  return (
    <header
      data-testid="header-main"
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        transparent ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
          <img
            src="/images/logo.png"
            alt={companyData.name}
            className={`h-12 w-auto transition-all ${transparent ? "drop-shadow-lg" : ""}`}
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
            data-testid="button-header-phone"
          >
            <Link href="/kontakt" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{companyData.contact.phone}</span>
            </Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                data-testid="button-mobile-menu"
                className={transparent ? "text-white hover:bg-white/10" : "text-primary"}
              >
                <Menu className="w-6 h-6" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col pt-12">
              <nav className="flex flex-col gap-6 items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleHashNav(e, link.href)}
                    className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/kontakt"
                  className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  Kontakt
                </Link>
                <div className="mt-8 w-full border-t pt-8 flex flex-col items-center">
                  <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wide">
                    Notfall 24h Service
                  </p>
                  <Button
                    asChild
                    variant="default"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg"
                  >
                    <a
                      href={`tel:${companyData.contact.phone.replace(/[\s/-]/g, "")}`}
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      <span>{companyData.contact.phone}</span>
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
