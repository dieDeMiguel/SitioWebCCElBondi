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
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={posterImage}
          alt="El Bondi - Centro Cultural Comunitario"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-8 lg:px-12 lg:py-12">
        {/* Logo and Tagline */}
        <div className="max-w-xl">
          <div className="flex items-center gap-4">
            <Image
              src="/el-bondi-logo-white.png"
              alt="El Bondi"
              width={200}
              height={60}
              className="h-auto w-40 lg:w-52"
            />
            <div className="border-l-2 border-white pl-4">
              <p className="text-sm font-bold uppercase tracking-wider text-white lg:text-base">
                Centro
              </p>
              <p className="text-sm font-bold uppercase tracking-wider text-white lg:text-base">
                Cultural
              </p>
              <p className="text-sm font-bold uppercase tracking-wider text-white lg:text-base">
                Comunitario
              </p>
            </div>
          </div>
          <p className="mt-6 border-l-4 border-white pl-4 text-lg text-white lg:text-xl">
            Derechos que se viven: cultura, educación y comunicación.
          </p>
        </div>

        {/* Play Button */}
        <div className="flex flex-1 items-center justify-center">
          <button
            onClick={() => setIsVideoPlaying(true)}
            className="group flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/30 lg:h-24 lg:w-24"
            aria-label="Reproducir video"
          >
            <Play className="h-8 w-8 text-white transition-transform group-hover:scale-110 lg:h-10 lg:w-10" />
          </button>
        </div>

        {/* Spacer for layout */}
        <div />
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div
            className="relative aspect-video w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              aria-label="Cerrar video"
            >
              Cerrar
            </button>
            <iframe
              src={`${videoUrl}?autoplay=1`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
