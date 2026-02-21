import { Header } from "@/components/header";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Hero } from "@/components/hero";
import { ContentSection } from "@/components/content-section";
import { HistorySection } from "@/components/history-section";
import { RadioMapSection } from "@/components/radio-map-section";
import { SectionDivider } from "@/components/section-divider";
import { ConcertBanner } from "@/components/concert-banner";
import type { EventCardProps } from "@/components/event-card";

// Sample data - replace with real data from CMS/API
const eventosData: EventCardProps[] = [
  {
    image: "/eventos/danza.webp",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/eventos/danza",
  },
  {
    image: "/eventos/acrobacia.jpg",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/eventos/noche-acrobacia",
  },
  {
    image: "/eventos/musica.jpg",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/eventos/pitu-rock",
  },
  {
    image: "/eventos/zunino.webp",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/eventos/zunino",
  },
];

const talleresData: EventCardProps[] = [
  {
    image: "/talleres/orquesta.webp",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/talleres/orquesta",
  },
  {
    image: "/talleres/tambor.webp",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/talleres/tambor",
  },
  {
    image: "/talleres/cintia.webp",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/talleres/cintia",
  },
  {
    image: "/talleres/radio.webp",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/talleres/radio",
  },
];

const historiaData = [
  {
    title: "Lorem ipsum",
    date: "12.01.2025",
    description: "At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    title: "Taller cuerda balance",
    date: "12.01.2025",
    description: "At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    title: "Taller cuerda balance",
    date: "12.01.2025",
    description: "At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    title: "Taller cuerda balance",
    date: "12.01.2025",
    description: "At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    title: "Taller cuerda balance",
    date: "12.01.2025",
    description: "At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    title: "Taller cuerda balance",
    date: "12.01.2025",
    description: "At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    title: "Taller cuerda balance",
    date: "12.01.2025",
    description: "At vero eos et accusam et justo duo dolores et ea rebum.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <AnnouncementBanner
        message={'¡Últimas novedades! Próximo Varite: \u201CCirco, música en vivo y exposición de arte urbano\u201D para la comunidad el 10 de enero de 2026. ¡Compra tus entradas aquí!'}
        linkText="Tickets."
        linkHref="/tickets"
      />
      <main>
        <Hero
          posterImage="/andy-hero.webp"
          videoUrl="https://www.youtube.com/embed/VIDEO_ID"
        />

        {/* Eventos y Novedades Section */}
        <ContentSection
          titleImage="/titles/eventos-y-novedades.png"
          titleAlt="Eventos y Novedades"
          items={eventosData}
        />

        {/* Divider */}
        <SectionDivider />

        {/* Talleres y Bachillerato Section */}
        <ContentSection
          titleImage="/titles/talleres-y-bachillerato.png"
          titleAlt="Talleres y Bachillerato"
          items={talleresData}
        />

        <HistorySection
          titleImage="/titles/historia-del-lugar.png"
          titleAlt="Historia del Lugar"
          items={historiaData}
        />

        {/* Full-width Community Photo */}
        <ConcertBanner
          image="/sections/concert-banner.jpg"
          alt="Foto grupal de la comunidad de El Bondi"
        />

        <RadioMapSection />
      </main>
    </div>
  );
}
