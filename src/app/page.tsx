import { Header } from "@/components/header";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { Hero } from "@/components/hero";

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
      </main>
    </div>
  );
}
