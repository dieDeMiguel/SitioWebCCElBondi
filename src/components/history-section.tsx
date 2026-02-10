"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

function TimelineItem({
  item,
  index,
}: {
  item: HistoryItem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group relative flex items-start gap-5">
      {/* Timeline node */}
      <div className="relative z-10 flex flex-col items-center">
        <span
          className={`mt-1.5 h-4 w-4 flex-none rounded-full border-[2.5px] transition-all duration-700 ease-out lg:h-5 lg:w-5 ${
            isVisible
              ? "scale-100 border-white bg-bondi-purple-light shadow-[0_0_14px_rgba(168,77,168,0.7)]"
              : "scale-50 border-white/30 bg-transparent shadow-none"
          }`}
        />
      </div>

      {/* Content card */}
      <div
        className={`flex-1 rounded-xl bg-white/10 px-5 py-4 transition-all duration-700 ease-out hover:bg-white/15 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        <div className="mb-2">
          <span className="inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold tracking-wide text-white">
            {item.date}
          </span>
        </div>
        <h3 className="mb-1 text-base font-semibold leading-snug text-white lg:text-lg">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-white/80">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function HistorySection({
  titleImage,
  titleAlt,
  items,
}: HistorySectionProps) {
  return (
    <section className="w-full bg-[#74297E] py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-10 px-6 sm:px-10 lg:flex-row lg:items-start lg:gap-12 lg:px-[74px]">
        {/* Title Image - Left Side */}
        <div className="flex-1 lg:sticky lg:top-24">
          <Image
            src={titleImage}
            alt={titleAlt}
            width={692}
            height={386}
            className="h-auto w-full max-w-[692px]"
          />
        </div>

        {/* Timeline - Right Side */}
        <div className="flex-1">
          <div className="relative w-full max-w-[560px]">
            {/* Vertical connecting line */}
            <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-white/30 lg:left-[9px]" />

            <div className="flex flex-col gap-10">
              {items.map((item, index) => (
                <TimelineItem
                  key={`${item.title}-${index}`}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
