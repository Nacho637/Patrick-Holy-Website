import { Link } from "wouter";
import { Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";
import { companyData } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-[#213d86] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <div className="flex flex-col items-start">
            <div className="bg-white p-4 rounded-md inline-block mb-6">
              <img src="/images/logo.png" alt={companyData.name} className="h-10 w-auto" />
            </div>
            <p className="text-blue-100 mb-6 max-w-xs">
              Ihr zuverlässiger Partner für Tiefbau, Straßenbau und Rohrleitungsbau in Aschaffenburg und Umgebung seit 1995.
            </p>
            <a 
              href={companyData.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-[#213d86] transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-blue-100">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p>{companyData.address.street}</p>
                  <p>{companyData.address.zip} {companyData.address.city}</p>
                  <p className="text-sm opacity-80">{companyData.address.district}</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-blue-100">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <a href={`tel:${companyData.contact.phone.replace(/[\s/-]/g, '')}`} className="hover:text-white transition-colors">
                    {companyData.contact.phone}
                  </a>
                  <p className="text-xs opacity-80">Fax: {companyData.contact.fax}</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-blue-100">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-white transition-colors">
                  {companyData.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Emergency */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent">Öffnungszeiten</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-blue-100">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p>{companyData.hours.mo_do}</p>
                  <p>{companyData.hours.fr}</p>
                </div>
              </li>
            </ul>
            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <div className="flex items-center gap-2 text-accent font-bold mb-1">
                <Phone className="w-4 h-4" />
                <span>Notfall 24h Bereitschaft</span>
              </div>
              <a href={`tel:${companyData.contact.phone.replace(/[\s/-]/g, '')}`} className="text-xl font-bold text-white hover:text-accent transition-colors block">
                {companyData.contact.phone}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent">Links</h3>
            <ul className="space-y-3 text-blue-100">
              <li>
                <Link href="/ueber-uns" className="hover:text-white transition-colors inline-block">Über uns</Link>
              </li>
              <li>
                <Link href="/karriere" className="hover:text-white transition-colors inline-block">Karriere</Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white transition-colors inline-block">Kontakt</Link>
              </li>
              <li>
                <Link href="/impressum" className="hover:text-white transition-colors inline-block">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white transition-colors inline-block">Datenschutz</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} {companyData.name}. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4">
            <span>{companyData.stats.employees} Mitarbeiter</span>
            <span className="w-1 h-1 rounded-full bg-accent"></span>
            <span>Seit {companyData.founded}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
