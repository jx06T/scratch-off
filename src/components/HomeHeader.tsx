"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

function HomeHeader() {
    const [isHidden, setIsHidden] = useState(false);
    let lastScrollY = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsHidden(currentScrollY > lastScrollY && currentScrollY > 50);
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`z-50 fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ${isHidden ? "-translate-y-full" : "translate-y-0"
                }`}
        >
            <div className="container ml-6 text-2xl font-bold py-2 px-0 masked-text w-fit">
                <Link href={"/"}>scratch-off</Link>
            </div>
        </header>
    );
}

export default HomeHeader