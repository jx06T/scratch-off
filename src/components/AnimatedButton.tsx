"use client"
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';

function AnimatedButton({ text, url, cls = "" }: { text: string, url: string, cls?: string }) {
    return (
        <motion.button
            className={cls + " text-2xl rounded-full z-10 bg-red-400 text-white font-medium px-8 py-2 shadow-lg"
            }
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{
                scale: 1.05,
                backgroundColor: "#f87171", // bg-red-400 hover effect
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
            }}
        >
            <motion.span
                className="inline-block"
                animate={{
                    y: [0, -2, 0],
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            >
                <Link href={url}>
                    {text}
                </Link>
            </motion.span>
        </motion.button >
    );
};

export default AnimatedButton