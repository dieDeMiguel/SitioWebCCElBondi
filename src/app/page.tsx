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
    title: "Fundacion del Colectivo Cultural / El Bondi",
    date: "2009",
    description:
      "El proyecto nace bajo el nombre de Colectivo Cultural, una ONG sin fines de lucro fundada alrededor de agosto de 2009 con el objetivo de promover la integracion social, el respeto por los Derechos Humanos y el cuidado del medio ambiente mediante actividades culturales y artisticas en Ingeniero Maschwitz.",
  },
  {
    title: "Construccion comunitaria y actividades culturales continuas",
    date: "Primera decada",
    description:
      "Desde sus comienzos, El Bondi se consolida como un espacio que ofrece multiples actividades sociales y culturales: talleres artisticos, teatro comunitario, danza, musica y otros cursos abiertos a la comunidad con modalidad de entrada libre y a conciencia.",
  },
  {
    title: "FM Radio Activa Comunitaria 96.9",
    date: "Radio comunitaria",
    description:
      "La radio comunitaria FM RadioActiva 96.9 se establece dentro del Centro Cultural El Bondi, convirtiendose en la primera radio comunitaria de Ingeniero Maschwitz, promoviendo la diversidad local, la participacion sociocomunitaria y la pluralidad de voces.",
  },
  {
    title: "Eventos y actividades comunitarias regulares",
    date: "Agenda cultural",
    description:
      "El Bondi potencia su rol de espacio social con agendas de actividades culturales periodicas: ciclos de teatro, cine, espectaculos para distintas edades, actividades por fechas conmemorativas y talleres especiales que integran a la comunidad local mas alla de lo artistico.",
  },
  {
    title: 'Festival "Flor de Pena" y crecimiento de convocatoria',
    date: "2025",
    description:
      'El Centro Cultural El Bondi fue sede de la segunda edicion del festival "Flor de Pena" en 2025, una propuesta cultural que mezcla arte popular, danza y gastronomia, logrando una convocatoria significativa y consolidando su rol como punto de encuentro festivo de la comunidad.',
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
