import SectionHeader from "@/components/shared/SectionHeader";

export default function FacebookSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Aktuelles aus unserem Unternehmen" 
          subtitle="Social Media"
          alignment="center"
          className="mb-12"
        >
          Bleiben Sie auf dem Laufenden und verfolgen Sie unsere aktuellen Projekte, Neuigkeiten und Einblicke in den Arbeitsalltag auf Facebook.
        </SectionHeader>

        <div className="flex justify-center">
          <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-full overflow-hidden flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPatrick.Holy.GmbH&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="500"
              height="500"
              style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Patrick Holy Facebook Page"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
