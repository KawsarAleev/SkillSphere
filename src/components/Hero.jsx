"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const featuredCourses = [
    {
        title: "Complete Web Development Bootcamp",
        instructor: "Kawsar Ahmed",
        category: "Development",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "UI/UX Design Masterclass",
        instructor: "Tasin Kabir",
        category: "Design",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Machine Learning with TensorFlow",
        instructor: "Anwar Hossain",
        category: "Data Science",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    }
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev === featuredCourses.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[600px] bg-black overflow-hidden rounded-xl my-10">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
                        style={{ backgroundImage: `url(${featuredCourses[index].image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

                    <div className="relative h-full flex flex-col justify-center px-10 md:px-20 z-10">
                        <div className="inline-block bg-primary text-primary-content px-4 py-1 font-bold uppercase tracking-widest mb-6 rounded-sm">
                            {featuredCourses[index].category}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white max-w-3xl leading-[1.1] mb-4 uppercase">
                            {featuredCourses[index].title}
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 max-w-xl">
                            Learn from <span className="text-white font-bold underline decoration-primary underline-offset-4">{featuredCourses[index].instructor}</span> and other industry leaders.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/courses" className="bg-white text-black px-10 py-4 font-black uppercase hover:bg-primary hover:text-white transition-all rounded-md shadow-lg">
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-10 right-10 flex gap-4 z-20">
                {featuredCourses.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-12 h-2 transition-all duration-300 ${index === i ? "bg-primary w-20" : "bg-white/20 hover:bg-white/50"
                            } rounded-full`}
                    />
                ))}
            </div>
        </section>
    );
}
