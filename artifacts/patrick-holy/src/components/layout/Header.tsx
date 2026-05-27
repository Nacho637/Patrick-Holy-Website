import { Link } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Leistungen", href: "/#leistungen" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Karriere", href: "/karriere" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt={companyData.name} className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground font-medium hover:text-primary transition-colors text-sm uppercase tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            variant="default"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
          >
            <a href={`tel:${companyData.contact.phone.replace(/[\s/-]/g, '')}`} className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{companyData.contact.phone}</span>
            </a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary">
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
                    className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-8 w-full border-t pt-8 flex flex-col items-center">
                  <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wide">Notfall 24h Service</p>
                  <Button
                    asChild
                    variant="default"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg"
                  >
                    <a href={`tel:${companyData.contact.phone.replace(/[\s/-]/g, '')}`} className="flex items-center justify-center gap-2">
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
