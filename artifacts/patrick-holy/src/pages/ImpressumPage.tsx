import SectionHeader from "@/components/shared/SectionHeader";

export default function ImpressumPage() {
  return (
    <div className="w-full">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Impressum</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>Patrick Holy GmbH</strong><br />
              Feldchenstraße 114–118<br />
              63743 Aschaffenburg
            </p>

            <h3>Vertreten durch:</h3>
            <p>
              Geschäftsführer: Patrick Holy, Reiner Reisnecker
            </p>

            <h3>Kontakt:</h3>
            <p>
              Telefon: 0 60 21 / 4 57 44-0<br />
              Telefax: 0 60 21 / 4 57 44-99<br />
              E-Mail: info@patrick-holy-gmbh.de
            </p>

            <h3>Handelsregister:</h3>
            <p>
              Registergericht: Amtsgericht Aschaffenburg<br />
              Registernummer: HRB 6036
            </p>

            <h3>Umsatzsteuer-ID:</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE [Platzhalter]
            </p>

            <h3 className="mt-12">Haftungsausschluss (Disclaimer)</h3>
            <h4>Haftung für Inhalte</h4>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
