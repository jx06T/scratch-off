"use client"
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { GravityUiCircleChevronsRight, GravityUiCircleChevronsLeft } from "@/components/Icons";

const ImageCarousel = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (direction: string) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        // 根據螢幕寬度動態計算滾動量
        const scrollAmount = window.innerWidth >= 768
            ? window.innerWidth * 0.8 + 40  // 桌面版寬度 + 間距
            : window.innerWidth * 0.9 + 40; // 手機版寬度 + 間距

        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;

        let targetScroll;
        if (direction === 'left') {
            targetScroll = Math.max(50, currentScroll - scrollAmount);
        } else {
            targetScroll = Math.min(maxScroll - 50, currentScroll + scrollAmount);
        }

        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };

    const handleScrollChange = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        // 根據螢幕寬度動態計算項目寬度
        const itemWidth = window.innerWidth >= 768
            ? window.innerWidth * 0.7 + 40  // 桌面版寬度 + 間距
            : window.innerWidth * 0.9 + 40; // 手機版寬度 + 間距

        const index = Math.round((scrollLeft - 50) / itemWidth);
        setCurrentIndex(Math.max(0, Math.min(index, 9)));
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        container.addEventListener('scroll', handleScrollChange);
        return () => container.removeEventListener('scroll', handleScrollChange);
    }, []);

    return (
        <>
            <div className="relative w-full">
                <div
                    className={` duration-300 transition-opacity absolute left-4 top-1/2 z-10 -translate-y-1/2 ${currentIndex == 0 ? "opacity-0 pointer-events-none" : ""}`}
                    onClick={() => handleScroll('left')}
                >
                    <GravityUiCircleChevronsLeft
                        className="h-10 w-10 text-white/80 hover:text-white cursor-pointer"
                    />
                </div>

                <div
                    ref={scrollContainerRef}
                    className="snap-x snap-mandatory mx-auto flex h-[50vh] md:h-[60vh] space-x-10 overflow-x-auto overflow-y-hidden no-scrollbar"
                >
                    <div className="relative h-full md:w-[calc(15%-40px)] overflow-hidden shrink-0 snap-center"></div>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
                        <div
                            key={e}
                            className="relative h-full w-[90%] md:w-[70%] overflow-hidden shrink-0 snap-center rounded-lg shadow-xl"
                        >
                            <Image
                                objectFit="cover"
                                priority
                                layout="fill"
                                src={`https://picsum.photos/seed/picsum${e}/900/600`}
                                alt="佔位圖片"
                            />
                        </div>
                    ))}
                    <div className="relative h-full md:w-[calc(15%-40px)] overflow-hidden shrink-0 snap-center"></div>
                </div>

                <div
                    className={` duration-300 transition-opacity absolute right-4 top-1/2 z-10 -translate-y-1/2 ${currentIndex == 9 ? "  *:opacity-0 pointer-events-none" : ""}`}
                    onClick={() => handleScroll('right')}
                >
                    <GravityUiCircleChevronsRight
                        className="h-10 w-10 text-white/80 hover:text-white cursor-pointer"
                    />
                </div>
            </div>
            <div className="w-full mt-10">
                <div className="mx-auto bg-white/20 backdrop-blur-sm shadow-lg rounded-md w-[90%] md:w-[70%] h-28 p-6">
                    <h2 className="text-base font-semibold text-slate-100">
                        Current Image: {currentIndex + 1}
                    </h2>
                </div>
            </div>
        </>
    );
};

export default ImageCarousel;