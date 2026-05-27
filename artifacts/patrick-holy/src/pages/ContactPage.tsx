import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Clock, Info, CheckCircle2 } from "lucide-react";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name muss mindestens 2 Zeichen lang sein." }),
  email: z.string().email({ message: "Bitte eine gültige E-Mail-Adresse eingeben." }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Bitte einen Bereich wählen." }),
  // Winterdienst specific
  area: z.string().optional(),
  address: z.string().optional(),
  clientType: z.string().optional(),
  //
  message: z.string().min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein." }),
});

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
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
          <p className="text-xl text-blue-100">Wir sind für Sie da – in Aschaffenburg und am ganzen Bayerischen Untermain.</p>
        </div>
      </section>

      {/* Emergency Strip */}
      <div className="bg-accent text-accent-foreground py-6 border-b-4 border-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl font-bold">Notfall? Wir sind 365 Tage, 24h für Sie erreichbar.</h2>
            <Button asChild size="lg" variant="default" className="bg-primary text-white hover:bg-primary/90 font-bold text-lg rounded-full">
              <a href={`tel:${companyData.contact.phone.replace(/[\s/-]/g, '')}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                {companyData.contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Left Col: Info & Image */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                <img 
                  src="/images/firmenzentrale.jpg" 
                  alt="Zentrale der Patrick Holy GmbH" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Unsere Zentrale</h3>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Adresse</p>
                        <p className="text-muted-foreground">{companyData.address.street}</p>
                        <p className="text-muted-foreground">{companyData.address.zip} {companyData.address.city}</p>
                        <p className="text-sm text-muted-foreground mt-1">({companyData.address.district})</p>
                        <a 
                          href="https://maps.google.com/?q=Patrick+Holy+GmbH+Aschaffenburg" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary text-sm font-medium mt-2 inline-block hover:underline"
                        >
                          Auf Google Maps öffnen
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
                          <a href={`mailto:${companyData.contact.email}`}>{companyData.contact.email}</a>
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
              <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-6 text-primary">Ihre Ansprechpartner</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-lg">Patrick Holy</p>
                    <p className="text-sm text-muted-foreground mb-1">Geschäftsführer, Projekte & Gesamtleitung</p>
                  </div>
                  <div className="w-full h-px bg-gray-100" />
                  <div>
                    <p className="font-bold text-lg">Alexander Sauer</p>
                    <p className="text-sm text-muted-foreground mb-1">Straßenbauermeister, Technische Fragen</p>
                  </div>
                </div>
                <div className="mt-6 bg-accent/10 p-4 rounded-lg flex gap-3 items-start border border-accent/20">
                  <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    Für alle Anliegen erreichen Sie unser Team zentral unter <strong>{companyData.contact.phone}</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
                <h2 className="text-3xl font-extrabold mb-2">Schreiben Sie uns</h2>
                <p className="text-muted-foreground mb-8">Nutzen Sie unser Formular für allgemeine Anfragen oder konkrete Projektanfragen.</p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name / Firma *</FormLabel>
                            <FormControl>
                              <Input placeholder="Ihr Name" {...field} />
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
                            <FormLabel>E-Mail *</FormLabel>
                            <FormControl>
                              <Input placeholder="ihre@email.de" {...field} />
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
                          <FormLabel>Telefonnummer</FormLabel>
                          <FormControl>
                            <Input placeholder="Für Rückfragen" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Worum geht es?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                            >
                              {[
                                "Tiefbau",
                                "Straßenbau",
                                "Rohrleitungsbau/Fernwärme",
                                "Pflasterarbeiten",
                                "Winterdienst",
                                "Erd-/Abbrucharbeiten",
                                "Sonstiges"
                              ].map((svc) => (
                                <FormItem key={svc} className="flex items-center space-x-3 space-y-0 bg-gray-50 border border-gray-200 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                                  <FormControl>
                                    <RadioGroupItem value={svc} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer w-full">
                                    {svc}
                                  </FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Conditional Winterdienst Fields */}
                    {showWinterdienst && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="bg-accent/10 border border-accent/20 p-6 rounded-xl space-y-6 overflow-hidden"
                      >
                        <h4 className="font-bold flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                          Zusatzangaben Winterdienst
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="area"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Zu räumende Fläche (ca. m²)</FormLabel>
                                <FormControl>
                                  <Input placeholder="z.B. 500" {...field} />
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
                                <FormLabel>Auftraggeber</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Bitte wählen" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="gewerblich">Gewerblich / Unternehmen</SelectItem>
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
                              <FormLabel>Genaue Adresse / Standort</FormLabel>
                              <FormControl>
                                <Input placeholder="Straße, PLZ Ort" {...field} />
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
                          <FormLabel>Ihre Nachricht *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Beschreiben Sie kurz Ihr Anliegen..." 
                              className="min-h-[120px]" 
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
                      className="w-full font-bold text-lg h-14"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Ihre Daten werden sicher übertragen und nur zur Bearbeitung Ihrer Anfrage verwendet.
                    </p>
                  </form>
                </Form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
