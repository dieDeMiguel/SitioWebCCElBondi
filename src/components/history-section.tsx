"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

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

function useActiveTimeline(count: number) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [reached, setReached] = useState<boolean[]>(() =>
    Array(count).fill(false)
  );

  const setRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      itemRefs.current[index] = el;
    },
    []
  );

  useEffect(() => {
    const nodes = itemRefs.current;
    if (!nodes.length) return;

    const observers: IntersectionObserver[] = [];

    nodes.forEach((node, index) => {
      if (!node) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
            setReached((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        },
        {
          rootMargin: "-35% 0px -35% 0px",
          threshold: 0.1,
        }
      );

      observer.observe(node);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [count]);

  return { activeIndex, reached, setRef };
}

function TimelineNode({ isActive, hasReached }: { isActive: boolean; hasReached: boolean }) {
  return (
    <div className="relative z-10 flex flex-col items-center">
      {/* Outer pulse ring - only when active */}
      {isActive && (
        <span className="absolute mt-1 h-7 w-7 animate-ping rounded-full bg-bondi-purple-light/40 lg:h-8 lg:w-8" />
      )}
      {/* Main node */}
      <span
        className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full border-[2.5px] transition-all duration-500 ease-out lg:h-6 lg:w-6 ${
          isActive
            ? "scale-125 border-white bg-bondi-purple-light shadow-[0_0_20px_rgba(168,77,168,0.9)]"
            : hasReached
              ? "scale-100 border-white/80 bg-bondi-purple shadow-[0_0_8px_rgba(168,77,168,0.4)]"
              : "scale-75 border-white/30 bg-white/10 shadow-none"
        }`}
      >
        {/* Inner dot */}
        <span
          className={`h-1.5 w-1.5 rounded-full transition-all duration-500 lg:h-2 lg:w-2 ${
            isActive
              ? "scale-100 bg-white"
              : hasReached
                ? "scale-75 bg-white/60"
                : "scale-0 bg-transparent"
          }`}
        />
      </span>
    </div>
  );
}

function TimelineCard({
  item,
  isActive,
  hasReached,
}: {
  item: HistoryItem;
  isActive: boolean;
  hasReached: boolean;
}) {
  return (
    <div
      className={`flex-1 rounded-xl border px-5 py-4 transition-all duration-500 ease-out ${
        isActive
          ? "translate-y-0 scale-[1.02] border-white/30 bg-white/15 opacity-100 shadow-lg shadow-bondi-purple/20"
          : hasReached
            ? "translate-y-0 scale-100 border-white/10 bg-white/8 opacity-70"
            : "translate-y-4 scale-95 border-transparent bg-white/5 opacity-30"
      }`}
    >
      {/* Date badge */}
      <div className="mb-2">
        <span
          className={`inline-block rounded-full px-3 py-0.5 text-xs font-semibold tracking-wide transition-colors duration-500 ${
            isActive
              ? "bg-bondi-purple-light text-white"
              : "bg-white/15 text-white/80"
          }`}
        >
          {item.date}
        </span>
      </div>
      <h3
        className={`mb-1 text-base font-semibold leading-snug transition-colors duration-500 lg:text-lg ${
          isActive ? "text-white" : "text-white/80"
        }`}
      >
        {item.title}
      </h3>
      <p
        className={`text-sm leading-relaxed transition-colors duration-500 ${
          isActive ? "text-white/90" : "text-white/50"
        }`}
      >
        {item.description}
      </p>
    </div>
  );
}

export function HistorySection({
  titleImage,
  titleAlt,
  items,
}: HistorySectionProps) {
  const { activeIndex, reached, setRef } = useActiveTimeline(items.length);

  /* Progress line height: percentage of how far we've scrolled through items */
  const progressPercent =
    activeIndex < 0 ? 0 : ((activeIndex + 1) / items.length) * 100;

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
            {/* Background track line */}
            <div className="absolute left-[9px] top-3 bottom-3 w-[2px] bg-white/20 lg:left-[11px]" />

            {/* Animated progress line */}
            <div
              className="absolute left-[9px] top-3 w-[2px] bg-gradient-to-b from-white via-bondi-purple-light to-white/40 transition-all duration-700 ease-out lg:left-[11px]"
              style={{ height: `${progressPercent}%` }}
            />

            <div className="flex flex-col gap-10">
              {items.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  ref={setRef(index)}
                  className="relative flex items-start gap-5"
                >
                  <TimelineNode
                    isActive={activeIndex === index}
                    hasReached={reached[index]}
                  />
                  <TimelineCard
                    item={item}
                    isActive={activeIndex === index}
                    hasReached={reached[index]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
