"use client";

import Footer from "@/components/footer/footer";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Define the raw structure of your JSON
type RawProject = {
    name: string;
    description: string;
    img: string;
    client: string;
    server?: string;
    liveLink: string;
    technology: string;
};

// Define the shape your app will use
type Project = {
    title: string;
    description: string;
    image: string;
    client: string;
    server?: string;
    demo: string;
    tech: string[];
};

export default function ProjectSection() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("/projects.json");
                const data: RawProject[] = await res.json();

                const formatted: Project[] = data.map((project) => ({
                    title: project.name,
                    description: project.description,
                    image: project.img,
                    client: project.client,
                    server: project?.server || "",
                    demo: project.liveLink,
                    tech: project.technology.split(",").map((t) => t.trim()),
                }));

                setProjects(formatted);
            } catch (error) {
                console.error("Failed to load projects:", error);
            }
        };

        fetchProjects();
    }, []);

    const allTech = Array.from(new Set(projects.flatMap((p) => p.tech)));
    const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter));

    return (
        <div>
            <section className="py-16 bg-white dark:bg-black">
                <div className="container mx-auto px-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-900 dark:text-gray-100">
                        Projects
                    </h1>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
                        Explore some of the projects I&apos;ve worked on.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {["All", ...allTech].map((tech) => (
                            <button
                                key={tech}
                                onClick={() => setFilter(tech)}
                                className={`px-4 py-1 text-sm rounded-full border transition duration-300 ${filter === tech
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "border-gray-300 text-gray-600 dark:text-gray-300 hover:border-blue-500"
                                    }`}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {filteredProjects.map((project, index) => (
                            <Link key={index} href={project.demo} target="_blank">
                                <motion.div

                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative group p-[2px] rounded-2xl bg-gradient-to-br from-blue-500/50 via-purple-500/30 to-pink-500/30 transition duration-300 hover:shadow-[0_0_40px_4px_rgba(99,102,241,0.3)]"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={400}
                                        className="w-full h-[300px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-2 py-1 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-4 flex gap-4">
                                            <Link
                                                href={project.client}
                                                target="_blank"
                                                className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                            >
                                                <Github className="w-4 h-4" /> Client
                                            </Link>
                                            {project.server ? <Link
                                                href={project.server}
                                                target="_blank"
                                                className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                            >
                                                <Github className="w-4 h-4" /> server
                                            </Link> : null}
                                            <Link
                                                href={project.demo}
                                                target="_blank"
                                                className="ml-auto flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                            >
                                                <ExternalLink className="w-4 h-4" /> Live
                                            </Link>
                                            {/* <Link
                                            href={`/projects/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, "-"))}`}
                                            className="ml-auto text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            Details →
                                        </Link> */}
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
