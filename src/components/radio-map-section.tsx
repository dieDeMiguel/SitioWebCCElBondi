"use client";

import Image from "next/image";
import {
  Facebook,
  Instagram,
  MoreHorizontal,
  Play,
  Volume2,
  Youtube,
} from "lucide-react";

export function RadioMapSection() {
  return (
    <section className="w-full bg-[#F0F1F4]">
      <div className="mx-auto flex w-full max-w-[1516px] flex-col gap-12 px-6 py-16 sm:px-10 lg:gap-16 lg:px-[74px]">
        <div className="grid items-center gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/sections/radio-activa-logo.png"
              alt="Radio Activa Comunitaria"
              width={320}
              height={247}
              className="h-auto w-[320px]"
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

        <div className="overflow-hidden rounded-xl">
          <Image
            src="/sections/mapa-colectivo.svg"
            alt="Mapa de Colectivo Cultural"
            width={1516}
            height={700}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
