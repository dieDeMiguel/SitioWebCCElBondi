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
    <article className="group flex flex-col overflow-hidden rounded-lg border border-gray-200">
      {/* Image */}
      <Link href={href} className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={320}
          height={220}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-sm font-bold text-gray-900">
          {title}
        </h3>
        <p className="text-xs leading-relaxed text-gray-600">
          {description}
        </p>
        <Link
          href={href}
          className="mt-auto flex items-center gap-1.5 pt-2 text-xs text-bondi-cyan hover:underline"
        >
          <Calendar className="h-3.5 w-3.5" />
          {date}
        </Link>
      </div>
    </article>
  );
}
