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
      {/* Image - with rounded corners and padding */}
      <Link href={href} className="block px-4 pt-4">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            width={295}
            height={200}
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content - 295 Fill x 40 Hug from Figma */}
      <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
        <h3 className="text-center text-sm font-bold text-gray-900">
          {title}
        </h3>
        <p className="text-xs leading-relaxed text-gray-600">
          {description}
        </p>
        <Link
          href={href}
          className="mt-auto flex items-center gap-1.5 pt-2 text-xs text-[#732B8F] hover:underline"
        >
          <Calendar className="h-3.5 w-3.5" />
          {date}
        </Link>
      </div>
    </article>
  );
}
