"use client";

import { useState } from "react";
import Image from "next/image";
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
    <section className="relative w-full overflow-hidden" style={{ aspectRatio: "1512 / 700" }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={posterImage}
          alt="El Bondi - Centro Cultural Comunitario"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-8 lg:px-16 lg:py-10">
        {/* Top: Logo + Title */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/el-bondi-logo-blanco.png"
              alt="El Bondi"
              width={200}
              height={60}
              className="h-auto w-32 lg:w-44"
            />
            <div className="border-l-2 border-white/80 pl-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white lg:text-xs">
                Centro
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white lg:text-xs">
                Cultural
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white lg:text-xs">
                Comunitario
              </p>
            </div>
          </div>
          <div className="mt-4 max-w-md">
            <p className="text-sm text-white lg:text-base">
              Derechos que se viven: cultura, educación y comunicación.
            </p>
            <div className="mt-2 h-0.5 w-full max-w-sm bg-white/60" />
          </div>
        </div>

        {/* Center: Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={() => setIsVideoPlaying(true)}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm transition-colors hover:bg-white/50"
            aria-label="Reproducir video institucional"
          >
            <Play className="h-7 w-7" fill="white" />
          </button>
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
          <div className="relative aspect-video w-full max-w-4xl">
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
