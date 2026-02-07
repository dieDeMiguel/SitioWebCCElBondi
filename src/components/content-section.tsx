"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { EventCard, type EventCardProps } from "./event-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-[1430px] px-6 sm:px-8 lg:px-12">
        {/* Decorative Title */}
        <div className="mb-10 flex justify-center">
          <Image
            src={titleImage}
            alt={titleAlt}
            width={400}
            height={150}
            className="h-auto w-auto max-w-md"
          />
        </div>

        {/* Cards Grid */}
        <div
          ref={carouselRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {visibleItems.map((item, index) => (
            <EventCard key={`${item.title}-${index}`} {...item} />
          ))}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goToPrevious}
              className="hidden rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 sm:block"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, page) => page).map(
                (page) => (
                  <button
                    type="button"
                    key={`page-${page}`}
                    onClick={() => goToPage(page)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      currentPage === page
                        ? "bg-bondi-cyan"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Ir a página ${page + 1}`}
                    aria-current={currentPage === page ? "page" : undefined}
                  />
                ),
              )}
            </div>

            <button
              type="button"
              onClick={goToNext}
              className="hidden rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 sm:block"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
