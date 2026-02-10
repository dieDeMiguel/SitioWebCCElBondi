import { Header } from "@/components/header";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Hero } from "@/components/hero";
import { ContentSection } from "@/components/content-section";
import { HistorySection } from "@/components/history-section";
import { RadioMapSection } from "@/components/radio-map-section";
import { SectionDivider } from "@/components/section-divider";
import { Footer } from "@/components/footer";
import type { EventCardProps } from "@/components/event-card";

// Sample data - replace with real data from CMS/API
const eventosData: EventCardProps[] = [
  {
    image: "/eventos/variete.jpg",
    title: "Varieté Bajo las Estrellas",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/eventos/variete-bajo-las-estrellas",
  },
  {
    image: "/eventos/acrobacia.jpg",
    title: "Noche de Acrobacia",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/eventos/noche-acrobacia",
  },
  {
    image: "/eventos/musica.jpg",
    title: "Pitu Rock en Vivo",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/eventos/pitu-rock",
  },
  {
    image: "/eventos/suspendido.jpg",
    title: "A la Canasta - Suspendido",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/eventos/a-la-canasta",
  },
];

const talleresData: EventCardProps[] = [
  {
    image: "/talleres/teatro.jpg",
    title: "Taller de Teatro",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/talleres/teatro",
  },
  {
    image: "/talleres/charla.jpg",
    title: "Charlas Comunitarias",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/talleres/charlas",
  },
  {
    image: "/talleres/boda.jpg",
    title: "Eventos Especiales",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/talleres/eventos-especiales",
  },
  {
    image: "/talleres/variete.jpg",
    title: "Varieté",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    date: "At vero eos et accusam",
    href: "/talleres/variete",
  },
];

const historiaData = [
  {
    title: "Fundacion del Colectivo Cultural",
    date: "2009",
    description:
      "Nace como ONG sin fines de lucro para promover la integracion social, los Derechos Humanos y el medio ambiente a traves del arte en Ingeniero Maschwitz.",
  },
  {
    title: "Construccion comunitaria",
    date: "Primera decada",
    description:
      "El Bondi se consolida con talleres de teatro, danza, musica y cursos abiertos con entrada libre y a conciencia.",
  },
  {
    title: "FM RadioActiva 96.9",
    date: "Radio comunitaria",
    description:
      "La primera radio comunitaria de Maschwitz nace dentro de El Bondi, promoviendo la diversidad y la pluralidad de voces locales.",
  },
  {
    title: "Agenda cultural permanente",
    date: "Eventos regulares",
    description:
      "Ciclos de teatro, cine, espectaculos y talleres especiales integran a la comunidad en fechas conmemorativas y encuentros periodicos.",
  },
  {
    title: 'Festival "Flor de Pena"',
    date: "2025",
    description:
      "La segunda edicion del festival mezcla arte popular, danza y gastronomia, consolidando a El Bondi como punto de encuentro festivo.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnnouncementBanner
        message='¡Últimas novedades! Próximo Varite: "Circo, música en vivo y exposición de arte urbano" para la comunidad el 10 de enero de 2026. ¡Compra tus entradas aquí!'
        linkText="Tickets."
        linkHref="/tickets"
      />
      <Header />
      <main>
        <Hero
          posterImage="/hero-background.jpg"
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

        <RadioMapSection />
      </main>
      <Footer />
    </div>
  );
}
