import Image from "next/image";

interface ConcertBannerProps {
  image: string;
  alt: string;
}

export function ConcertBanner({ image, alt }: ConcertBannerProps) {
  return (
    <section className="w-full">
      <div className="relative w-full" style={{ aspectRatio: "1568 / 734" }}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
