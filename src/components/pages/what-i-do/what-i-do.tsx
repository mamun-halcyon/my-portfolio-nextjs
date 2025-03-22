"use client";

import { useEffect } from "react";
import { Code, Server, Settings } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const services = [
    {
        title: "Frontend Development",
        description:
            "Building fast, responsive, and accessible web applications using Next.js, TypeScript, and TailwindCSS.",
        icon: <Code size={40} className="text-gray-900 dark:text-gray-100" />,
    },
    {
        title: "Backend Development",
        description:
            "Developing scalable APIs and backend systems using Node.js, Express, and MySQL with authentication and security in mind.",
        icon: <Server size={40} className="text-gray-900 dark:text-gray-100" />,
    },
    {
        title: "Automation & CI/CD",
        description:
            "Automating deployments with Docker, CI/CD pipelines, and efficient DevOps workflows to streamline development.",
        icon: <Settings size={40} className="text-gray-900 dark:text-gray-100" />,
    },
];

export default function WhatIDo() {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [inView, controls]);

    return (
        <section
            ref={ref}
            className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
        >
            <div className="container mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-900 dark:text-gray-100">
                    What I Do
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-center mb-5 md:mb-10">
                    Building efficient, scalable, and modern web applications with cutting-edge technologies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="flex justify-center"
                            initial={{ opacity: 0, y: 40 }}
                            animate={controls}
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                        >
                            <CardSpotlight className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300">
                                <div className="w-[20%] mx-auto flex justify-center items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                                    {service.icon}
                                </div>

                                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    {service.title}
                                </h2>
                                <p className="mt-2 text-gray-700 dark:text-gray-400">
                                    {service.description}
                                </p>
                            </CardSpotlight>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
