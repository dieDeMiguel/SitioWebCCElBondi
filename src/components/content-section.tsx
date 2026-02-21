"use client";

import { useState } from "react";
import Image from "next/image";
import { EventCard, type EventCardProps } from "./event-card";

interface ContentSectionProps {
  titleImage: string;
  titleAlt: string;
  items: EventCardProps[];
  itemsPerPage?: number;
}

export function ContentSection({
  titleImage,
  titleAlt,
  items,
  itemsPerPage = 4,
}: ContentSectionProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-[1430px] px-6 sm:px-8 lg:px-12">
        {/* Decorative Title - centered, no border */}
        <div className="mx-auto mb-10 flex max-w-[488px] justify-center">
          <Image
            src={titleImage}
            alt={titleAlt}
            width={488}
            height={272}
            className="h-auto w-full max-w-[488px]"
          />
        </div>

        {/* Cards Grid */}
        <div className="px-2">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleItems.map((item, index) => (
              <EventCard key={`${item.title}-${index}`} {...item} />
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, page) => page).map(
              (page) => (
                <button
                  type="button"
                  key={`page-${page}`}
                  onClick={() => setCurrentPage(page)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    currentPage === page
                      ? "bg-[#9D1271]"
                      : "bg-[#9D1271]/30 hover:bg-[#9D1271]/50"
                  }`}
                  aria-label={`Ir a página ${page + 1}`}
                  aria-current={currentPage === page ? "page" : undefined}
                />
              ),
            )}
          </div>
        )}
      </div>
    </section>
  );
}
