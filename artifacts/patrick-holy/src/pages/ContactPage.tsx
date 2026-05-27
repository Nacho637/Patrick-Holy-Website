import { useEffect, useState } from "react";
import { useSearch } from "wouter";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Info,
  CheckCircle2,
  Send,
  Building2,
  Construction,
  Snowflake,
  Hammer,
  Flame,
  Route,
  HelpCircle,
} from "lucide-react";

import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name muss mindestens 2 Zeichen lang sein." }),
  email: z.string().email({ message: "Bitte eine gültige E-Mail-Adresse eingeben." }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Bitte einen Bereich wählen." }),
  area: z.string().optional(),
  address: z.string().optional(),
  clientType: z.string().optional(),
  message: z.string().min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein." }),
});

const SERVICES = [
  { value: "Tiefbau", icon: Construction },
  { value: "Straßenbau", icon: Route },
  { value: "Rohrleitungsbau/Fernwärme", icon: Flame },
  { value: "Pflasterarbeiten", icon: Hammer },
  { value: "Winterdienst", icon: Snowflake },
  { value: "Erd-/Abbrucharbeiten", icon: Building2 },
  { value: "Sonstiges", icon: HelpCircle },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "Tiefbau",
      area: "",
      address: "",
      clientType: "",
      message: "",
    },
  });

  const selectedService = form.watch("service");
  const showWinterdienst = selectedService === "Winterdienst";

  const search = useSearch();
  useEffect(() => {
    const params = new URLSearchParams(search);
    const svc = params.get("service");
    if (svc && SERVICES.some((s) => s.value === svc)) {
      form.setValue("service", svc);
      requestAnimationFrame(() => {
        document.getElementById("anfrage-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [search]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Anfrage erfolgreich gesendet",
        description: "Wir werden uns schnellstmöglich bei Ihnen melden.",
      });
      form.reset();
    }, 1000);
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary text-white py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Kontakt & Anfrage</h1>
          <p className="text-xl text-blue-100">
            Wir sind für Sie da – in Aschaffenburg und am ganzen Bayerischen Untermain.
          </p>
        </div>
      </section>

      {/* Emergency Strip */}
      <div className="bg-accent text-accent-foreground py-6 border-b-4 border-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl font-bold">
              Notfall? Wir sind 365 Tage, 24h für Sie erreichbar.
            </h2>
            <Button
              asChild
              size="lg"
              variant="default"
              className="bg-primary text-white hover:bg-primary/90 font-bold text-lg rounded-full"
            >
              <a
                href={`tel:${companyData.contact.phone.replace(/[\s/-]/g, "")}`}
                className="flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {companyData.contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>

      <section id="anfrage-form" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Left Col: Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                <img
                  src="/images/firmenzentrale.jpg"
                  alt="Zentrale der Patrick Holy GmbH"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold mb-6 text-primary">Unsere Zentrale</h3>

                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Adresse</p>
                        <p className="text-muted-foreground">{companyData.address.street}</p>
                        <p className="text-muted-foreground">
                          {companyData.address.zip} {companyData.address.city}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          ({companyData.address.district})
                        </p>
                        <a
                          href="https://maps.google.com/?q=Patrick+Holy+GmbH+Aschaffenburg"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary text-sm font-medium mt-2 inline-block hover:underline"
                        >
                          Auf Google Maps öffnen →
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Kontakt</p>
                        <p className="text-muted-foreground">Tel: {companyData.contact.phone}</p>
                        <p className="text-muted-foreground">Fax: {companyData.contact.fax}</p>
                        <p className="text-primary hover:underline mt-1">
                          <a href={`mailto:${companyData.contact.email}`}>
                            {companyData.contact.email}
                          </a>
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Bürozeiten</p>
                        <p className="text-muted-foreground">{companyData.hours.mo_do}</p>
                        <p className="text-muted-foreground">{companyData.hours.fr}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Ansprechpartner */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-extrabold mb-6 text-primary">Ihre Ansprechpartner</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-lg shrink-0">
                      PH
                    </div>
                    <div>
                      <p className="font-bold text-lg">Patrick Holy</p>
                      <p className="text-sm text-muted-foreground">
                        Geschäftsführer · Projekte & Gesamtleitung
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-100" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-lg shrink-0">
                      AS
                    </div>
                    <div>
                      <p className="font-bold text-lg">Alexander Sauer</p>
                      <p className="text-sm text-muted-foreground">
                        Straßenbauermeister · Technische Fragen
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-accent/10 p-4 rounded-xl flex gap-3 items-start border border-accent/30">
                  <Info className="w-5 h-5 text-accent-foreground shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    Für alle Anliegen erreichen Sie unser Team zentral unter{" "}
                    <strong>{companyData.contact.phone}</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Schreiben Sie uns</h2>
                  <p className="text-muted-foreground mb-10 text-lg">
                    Beschreiben Sie uns Ihr Anliegen — wir melden uns schnellstmöglich zurück.
                  </p>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-bold uppercase tracking-wide text-foreground">
                                Name / Firma *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Ihr Name"
                                  className="h-12 rounded-xl border-gray-200 focus-visible:border-primary focus-visible:ring-primary/20"
                                  data-testid="input-name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-bold uppercase tracking-wide text-foreground">
                                E-Mail *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="ihre@email.de"
                                  className="h-12 rounded-xl border-gray-200 focus-visible:border-primary focus-visible:ring-primary/20"
                                  data-testid="input-email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-bold uppercase tracking-wide text-foreground">
                              Telefonnummer
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Für Rückfragen"
                                className="h-12 rounded-xl border-gray-200 focus-visible:border-primary focus-visible:ring-primary/20"
                                data-testid="input-phone"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-bold uppercase tracking-wide text-foreground mb-3 block">
                              Worum geht es?
                            </FormLabel>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {SERVICES.map((svc) => {
                                const Icon = svc.icon;
                                const active = field.value === svc.value;
                                return (
                                  <button
                                    key={svc.value}
                                    type="button"
                                    onClick={() => field.onChange(svc.value)}
                                    data-testid={`button-service-${svc.value}`}
                                    className={`group relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all text-center min-h-[100px] ${
                                      active
                                        ? "border-primary bg-primary shadow-lg scale-[1.02]"
                                        : "border-gray-200 bg-white text-foreground hover:border-primary/40 hover:bg-primary/5"
                                    }`}
                                  >
                                    <Icon
                                      className={`w-6 h-6 ${
                                        active ? "text-white" : "text-primary"
                                      }`}
                                    />
                                    <span
                                      className={`text-xs font-bold leading-tight ${
                                        active ? "text-white" : "text-foreground"
                                      }`}
                                    >
                                      {svc.value}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {showWinterdienst && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="bg-gradient-to-br from-accent/15 to-accent/5 border-2 border-accent/30 p-6 rounded-2xl space-y-6 overflow-hidden"
                        >
                          <h4 className="font-bold flex items-center gap-2 text-foreground">
                            <Snowflake className="w-5 h-5 text-primary" />
                            Zusatzangaben Winterdienst
                          </h4>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="area"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-bold uppercase tracking-wide">
                                    Fläche (ca. m²)
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="z.B. 500"
                                      className="h-12 rounded-xl bg-white"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="clientType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-bold uppercase tracking-wide">
                                    Auftraggeber
                                  </FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="h-12 rounded-xl bg-white">
                                        <SelectValue placeholder="Bitte wählen" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="gewerblich">
                                        Gewerblich / Unternehmen
                                      </SelectItem>
                                      <SelectItem value="kommune">Kommune / Behörde</SelectItem>
                                      <SelectItem value="privat">Privat</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-bold uppercase tracking-wide">
                                  Genaue Adresse / Standort
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Straße, PLZ Ort"
                                    className="h-12 rounded-xl bg-white"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                      )}

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-bold uppercase tracking-wide text-foreground">
                              Ihre Nachricht *
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                                className="min-h-[140px] rounded-xl border-gray-200 focus-visible:border-primary focus-visible:ring-primary/20"
                                data-testid="input-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        data-testid="button-submit-contact"
                        className="w-full font-bold text-lg h-16 rounded-2xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="text-white">Wird gesendet...</span>
                        ) : (
                          <>
                            <span className="text-white">Anfrage absenden</span>
                            <Send className="w-5 h-5 text-white" />
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        Ihre Daten werden sicher übertragen und nur zur Bearbeitung Ihrer Anfrage
                        verwendet.
                      </p>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
