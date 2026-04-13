"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  title: string;
  items: { id: string; title: string; imageSrc: string }[];
  aspectRatio?: "poster" | "logo";
}

export default function Carousel({ title, items, aspectRatio = "poster" }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const pausedRef = useRef(false);
  const isLogo = aspectRatio === "logo";

  const getPageWidth = useCallback(() => scrollRef.current ? scrollRef.current.clientWidth * 0.85 : 300, []);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scrollLeftFn = useCallback(() => { scrollRef.current?.scrollBy({ left: -getPageWidth(), behavior: "smooth" }); }, [getPageWidth]);
  const scrollRightFn = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 5) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: getPageWidth(), behavior: "smooth" });
  }, [getPageWidth]);

  useEffect(() => {
    autoScrollRef.current = setInterval(() => { if (!pausedRef.current) scrollRightFn(); }, 5000);
    return () => { if (autoScrollRef.current) clearInterval(autoScrollRef.current); };
  }, [scrollRightFn]);

  return (
    <div className="relative w-full py-4 md:py-8">
      <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-6 px-4 md:px-8 border-l-4 border-[var(--color-brand-primary)] ml-4 md:ml-8">{title}</h2>
      <div className="relative group" onMouseEnter={() => { pausedRef.current = true; }} onMouseLeave={() => { setTimeout(() => { pausedRef.current = false; }, 2000); }} onTouchStart={() => { pausedRef.current = true; }} onTouchEnd={() => { setTimeout(() => { pausedRef.current = false; }, 2000); }}>
        {canScrollLeft && (
          <button onClick={scrollLeftFn} className="absolute left-0 top-0 bottom-0 z-20 w-10 md:w-14 bg-black/40 hover:bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 rounded-r-md" aria-label="Scroll left">
            <ChevronLeft className="w-7 h-7 md:w-9 md:h-9 text-white" />
          </button>
        )}
        <div ref={scrollRef} className="flex overflow-x-auto gap-1.5 sm:gap-2 md:gap-3 px-4 md:px-12 scrollbar-hide py-2 md:py-4" style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollBehavior: "smooth" }}>
          {items.map((item) => (
            <div key={item.id} className={`relative flex-none cursor-pointer rounded-md overflow-hidden transition-all duration-300 ease-out md:hover:scale-110 md:hover:z-20 md:hover:shadow-xl md:hover:shadow-black/60 ${isLogo ? "w-[130px] sm:w-[170px] md:w-[250px] aspect-[2/1] bg-[#111118] border border-white/5 flex items-center justify-center" : "w-[105px] sm:w-[135px] md:w-[200px] aspect-[2/3]"}`} style={{ scrollSnapAlign: "start" }}>
              <Image src={item.imageSrc} alt={item.title || "Channel Logo"} fill sizes={isLogo ? "250px" : "200px"} unoptimized className={isLogo ? "object-contain p-3 md:p-5" : "object-cover"} />
              {!isLogo && item.title && (
                <>
                  <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-6 pb-1.5 px-2">
                    <span className="text-white font-medium text-[10px] sm:text-xs w-full truncate block">{item.title}</span>
                  </div>
                  <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 items-end p-3">
                    <span className="text-white font-semibold text-sm w-full truncate">{item.title}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        {canScrollRight && (
          <button onClick={scrollRightFn} className="absolute right-0 top-0 bottom-0 z-20 w-10 md:w-14 bg-black/40 hover:bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 rounded-l-md" aria-label="Scroll right">
            <ChevronRight className="w-7 h-7 md:w-9 md:h-9 text-white" />
          </button>
        )}
      </div>
    </div>
  );
}
