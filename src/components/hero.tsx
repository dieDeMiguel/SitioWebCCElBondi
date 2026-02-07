"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

interface HeroProps {
  videoUrl?: string;
  posterImage?: string;
}

export function Hero({
  videoUrl = "https://www.youtube.com/embed/VIDEO_ID",
  posterImage = "/hero-background.jpg",
}: HeroProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={posterImage}
          alt="El Bondi - Centro Cultural Comunitario"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-bondi-purple/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 py-10 lg:px-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4">
            <Image
              src="/el-bondi-logo-white.png"
              alt="El Bondi"
              width={200}
              height={60}
              className="h-auto w-36 lg:w-44"
            />
            <div className="border-l-2 border-white/80 pl-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/90 lg:text-sm">
                Centro Cultural Comunitario
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70 lg:text-sm">
                El Bondi
              </p>
            </div>
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Cultura, educación y comunicación que se viven en comunidad.
          </h1>
          <p className="mt-4 text-base text-white/90 sm:text-lg">
            Un espacio abierto para crear, aprender y encontrarnos. Sumate a las
            actividades, talleres y propuestas culturales de la semana.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/eventos"
              className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-bondi-purple transition-colors hover:bg-white/90"
            >
              Ver agenda
            </Link>
            <Link
              href="/centro-cultural/quienes-somos"
              className="rounded-full border border-white/70 px-6 py-2 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Conocé el centro
            </Link>
            <button
              type="button"
              onClick={() => setIsVideoPlaying(true)}
              className="flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white transition-colors hover:border-white/80 hover:bg-white/10"
              aria-label="Reproducir video institucional"
            >
              <Play className="h-4 w-4" />
              Ver video
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => setIsVideoPlaying(false)}
            aria-label="Cerrar video"
          />
          <div
            className="relative aspect-video w-full max-w-4xl"
          >
            <button
              type="button"
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              aria-label="Cerrar video"
            >
              Cerrar
            </button>
            <iframe
              src={`${videoUrl}?autoplay=1`}
              className="h-full w-full"
              title="Video institucional de El Bondi"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
