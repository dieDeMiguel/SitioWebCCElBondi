"use client";

import Image from "next/image";

interface HistoryItem {
  title: string;
  date: string;
  description: string;
}

interface HistorySectionProps {
  titleImage: string;
  titleAlt: string;
  items: HistoryItem[];
}

export function HistorySection({
  titleImage,
  titleAlt,
  items,
}: HistorySectionProps) {
  return (
    <section className="w-full bg-[#74297E] py-16 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-10 px-6 sm:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-[74px]">
        {/* Title Image - Left (692x386) */}
        <div className="flex flex-1 items-center justify-center lg:justify-start">
          <Image
            src={titleImage}
            alt={titleAlt}
            width={692}
            height={386}
            className="h-auto w-full max-w-[500px] lg:max-w-[692px]"
          />
        </div>

        {/* Timeline - Right (497x620 Hug) */}
        <div className="w-full max-w-[497px] lg:flex-none">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[5px] top-3 bottom-3 w-px bg-white/40" />

            <div className="flex flex-col gap-10">
              {items.map((item, index) => (
                <div
                  key={`${item.title}-${item.date}-${index}`}
                  className="relative flex items-start gap-5"
                >
                  {/* Dot */}
                  <span className="relative z-10 mt-1.5 h-[11px] w-[11px] flex-none rounded-full border-2 border-white bg-white/80" />

                  {/* Content (497 Fill x 44 Hug) */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <p className="text-base font-bold leading-snug text-white">
                        {item.title}
                      </p>
                      <span className="text-sm text-white/60">{item.date}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
