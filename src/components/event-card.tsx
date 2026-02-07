import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

export interface EventCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  href: string;
}

export function EventCard({
  image,
  title,
  description,
  date,
  href,
}: EventCardProps) {
  return (
    <article className="group flex flex-col">
      {/* Image */}
      <Link href={href} className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={280}
          height={200}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-center text-base font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600">
          {description}
        </p>
        <Link
          href={href}
          className="mt-1 flex items-center gap-2 text-sm text-bondi-cyan hover:underline"
        >
          <Calendar className="h-4 w-4" />
          {date}
        </Link>
      </div>
    </article>
  );
}
