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
    <section className="w-full bg-[#74297E] py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-10 px-6 sm:px-10 lg:flex-row lg:items-start lg:gap-12 lg:px-[74px]">
        {/* Title Image - Left */}
        <div className="flex flex-1 items-center justify-center lg:justify-start">
          <Image
            src={titleImage}
            alt={titleAlt}
            width={692}
            height={386}
            className="h-auto w-full max-w-[500px] lg:max-w-[692px]"
          />
        </div>

        {/* Timeline - Right */}
        <div className="flex-1">
          <div className="relative w-full max-w-[550px]">
            {/* Vertical line */}
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-white/30" />

            <div className="space-y-6">
              {items.map((item, index) => (
                <div
                  key={`${item.title}-${item.date}-${index}`}
                  className="relative flex items-start gap-5 pl-0"
                >
                  {/* Dot */}
                  <span className="relative z-10 mt-1.5 h-[11px] w-[11px] flex-none rounded-full bg-white" />

                  {/* Content */}
                  <div className="space-y-0.5">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <p className="text-sm font-bold text-white">
                        {item.title}
                      </p>
                      <span className="text-xs text-white/60">{item.date}</span>
                    </div>
                    <p className="text-sm text-white/80">{item.description}</p>
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
