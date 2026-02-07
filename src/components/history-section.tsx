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
    <section className="w-full bg-[#74297E] py-16 lg:min-h-[700px] lg:py-20">
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-10 px-6 sm:px-10 lg:flex-row lg:items-center lg:gap-12 lg:px-[74px]">
        <div className="flex-1">
          <Image
            src={titleImage}
            alt={titleAlt}
            width={692}
            height={386}
            className="h-auto w-full max-w-[692px]"
          />
        </div>
        <div className="flex-1">
          <div className="w-full max-w-[497px] space-y-8">
            {items.map((item, index) => (
              <div
                key={`${item.title}-${item.date}-${index}`}
                className="flex items-start gap-6"
              >
                <span className="mt-2 h-[11px] w-[11px] flex-none rounded-full bg-white" />
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <span className="text-xs text-white/60">{item.date}</span>
                  </div>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
