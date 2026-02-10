"use client";

import Image from "next/image";
import {
  Facebook,
  Instagram,
  MapPin,
  MoreHorizontal,
  Navigation,
  Play,
  Volume2,
  Youtube,
} from "lucide-react";

export function RadioMapSection() {
  return (
    <section className="w-full bg-[#F0F1F4]">
      <div className="mx-auto flex w-full max-w-[1516px] flex-col gap-12 px-6 py-16 sm:px-10 lg:gap-16 lg:px-[74px]">
        {/* Radio Section */}
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,570px)_minmax(0,1fr)]">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/sections/radio-activa-logo.png"
              alt="Radio Activa Comunitaria"
              width={570}
              height={451}
              className="h-auto w-full max-w-[570px]"
            />
          </div>
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <h2 className="text-3xl font-medium text-[#44546F] sm:text-4xl">
              Radio Activa Comunitaria
            </h2>
            <p className="max-w-xl text-base font-medium text-[#44546F]">
              Llevá RadioActiva Comunitaria FM 96.9 con vos, estés donde estés.
              Escuchanos en vivo desde cualquier parte del mundo haciendo clic
              en nuestro enlace a continuación.
            </p>
            <div className="flex w-full max-w-xl items-center gap-3 rounded-full bg-[#44546F]/40 px-4 py-3 text-sm text-white">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white"
                aria-label="Reproducir"
              >
                <Play className="h-4 w-4" />
              </button>
              <span className="text-xs text-white/80">0:00 / 1:23</span>
              <div className="relative h-1 flex-1 rounded-full bg-white/30">
                <span className="absolute left-0 top-0 h-1 w-1/3 rounded-full bg-white" />
              </div>
              <Volume2 className="h-4 w-4 text-white" />
              <MoreHorizontal className="h-4 w-4 text-white" />
            </div>
            <div className="flex items-center gap-3 text-[#44546F]">
              <Instagram className="h-4 w-4" />
              <Facebook className="h-4 w-4" />
              <Youtube className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-medium text-[#44546F] sm:text-4xl">
                Ubicacion
              </h2>
              <div className="flex items-center justify-center gap-2 text-[#44546F]/80 lg:justify-start">
                <MapPin className="h-4 w-4 shrink-0" />
                <p className="text-sm font-medium sm:text-base">
                  El Dorado 1518, Ingeniero Maschwitz, Buenos Aires, Argentina
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=-34.3878,-58.7467"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-bondi-purple px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-bondi-purple-dark"
            >
              <Navigation className="h-4 w-4" />
              Como llegar
            </a>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <iframe
              title="Ubicacion de Colectivo Cultural El Bondi - El Dorado 1518, Ingeniero Maschwitz"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-58.7517%2C-34.3918%2C-58.7417%2C-34.3838&layer=mapnik&marker=-34.3878%2C-58.7467"
              width="100%"
              height="500"
              className="border-0 w-full"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <p className="text-center text-xs text-[#44546F]/60">
            {"Mapa proporcionado por "}
            <a
              href="https://www.openstreetmap.org/?mlat=-34.3878&mlon=-58.7467#map=17/-34.3878/-58.7467"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#44546F]"
            >
              OpenStreetMap
            </a>
            {" - Haz clic en el mapa para interactuar, hacer zoom y desplazarte."}
          </p>
        </div>
      </div>
    </section>
  );
}
