import { useEffect, useState } from "react";
import { useSearch } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Phone,
  MapPin,
  Clock,
  Info,
  Send,
  Briefcase,
  FileText,
  GraduationCap,
  Upload,
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
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name muss mindestens 2 Zeichen lang sein." }),
  email: z.string().email({ message: "Bitte eine gültige E-Mail-Adresse eingeben." }),
  phone: z.string().optional(),
  topic: z.string().min(1, { message: "Bitte ein Anliegen wählen." }),
  message: z.string().min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein." }),
});

const TOPICS = [
  { value: "Bewerbung auf eine Stelle", icon: Briefcase },
  { value: "Initiativbewerbung", icon: FileText },
  { value: "Ausbildung", icon: GraduationCap },
  { value: "Allgemeine Anfrage", icon: HelpCircle },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: "Bewerbung auf eine Stelle",
      message: "",
    },
  });

  const search = useSearch();
  useEffect(() => {
    const params = new URLSearchParams(search);
    const topic = params.get("topic");
    if (topic && TOPICS.some((t) => t.value === topic)) {
      form.setValue("topic", topic);
      requestAnimationFrame(() => {
        document.getElementById("anfrage-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [search]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log({ ...values, file: fileName });
      setIsSubmitting(false);
      toast({
        title: "Nachricht erfolgreich gesendet",
        description: "Wir melden uns schnellstmöglich bei dir.",
      });
      form.reset();
      setFileName("");
    }, 1000);
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section data-hero className="bg-primary text-white py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Kontakt & Bewerbung</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Du möchtest Teil unseres Teams werden oder hast eine Frage? Schreib uns – wir freuen
            uns auf dich.
          </p>
        </div>
      </section>

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
                <h3 className="text-xl font-extrabold mb-6 text-primary">Deine Ansprechpartner</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-lg shrink-0">
                      PH
                    </div>
                    <div>
                      <p className="font-bold text-lg">Patrick Holy</p>
                      <p className="text-sm text-muted-foreground">
                        Geschäftsführer · Gesamtleitung
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
                        Straßenbauermeister · Ausbildung & Technik
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-accent/10 p-4 rounded-xl flex gap-3 items-start border border-accent/30">
                  <Info className="w-5 h-5 text-accent-foreground shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    Für alle Anliegen erreichst du unser Team zentral unter{" "}
                    <strong>{companyData.contact.phone}</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Schreib uns</h2>
                  <p className="text-muted-foreground mb-10 text-lg">
                    Erzähl uns kurz von dir — wir melden uns schnellstmöglich zurück.
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
                                Name *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Dein Name"
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
                                  placeholder="deine@email.de"
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
                        name="topic"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-bold uppercase tracking-wide text-foreground mb-3 block">
                              Dein Anliegen
                            </FormLabel>
                            <div className="grid grid-cols-2 gap-3">
                              {TOPICS.map((topic) => {
                                const Icon = topic.icon;
                                const active = field.value === topic.value;
                                return (
                                  <button
                                    key={topic.value}
                                    type="button"
                                    onClick={() => field.onChange(topic.value)}
                                    data-testid={`button-topic-${topic.value}`}
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
                                      {topic.value}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-bold uppercase tracking-wide text-foreground">
                              Deine Nachricht *
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Erzähl uns kurz von dir oder deinem Anliegen..."
                                className="min-h-[140px] rounded-xl border-gray-200 focus-visible:border-primary focus-visible:ring-primary/20"
                                data-testid="input-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Optional file upload */}
                      <div>
                        <label className="text-sm font-bold uppercase tracking-wide text-foreground mb-3 block">
                          Bewerbungsunterlagen (optional)
                        </label>
                        <label
                          htmlFor="file-upload"
                          className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-all text-center"
                        >
                          <Upload className="w-6 h-6 text-primary" />
                          <span className="text-sm font-semibold text-foreground">
                            {fileName || "Lebenslauf / Zeugnisse hochladen"}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            PDF, JPG oder PNG – alternativ gerne per E-Mail
                          </span>
                          <input
                            id="file-upload"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="hidden"
                            data-testid="input-file"
                            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                          />
                        </label>
                      </div>

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
                            <span className="text-white">Nachricht absenden</span>
                            <Send className="w-5 h-5 text-white" />
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        Deine Daten werden sicher übertragen und nur zur Bearbeitung deiner Anfrage
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
