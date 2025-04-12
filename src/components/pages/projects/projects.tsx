"use client";

import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Define types
type RawProject = {
  name: string;
  description: string;
  img: string;
  client: string;
  server?: string;
  liveLink: string;
  technology: string;
};

type Project = {
  title: string;
  description: string;
  image: string;
  client: string;
  server?: string;
  live: string;
  tech: string[];
};

export default function HomeProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

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
          server: project.server || "",
          live: project.liveLink,
          tech: project.technology.split(",").map((t) => t.trim()),
        }));

        setProjects(formatted.slice(0, 3)); // Only first 3 projects
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          A glimpse of what I’ve been building recently.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-400 dark:hover:border-blue-600"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm mt-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4">
                  <Link
                    href={project.client}
                    target="_blank"
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                  >
                    <Github className="w-5 h-5" /> Client
                  </Link>
                  {project.server ? <Link
                    href={project.server}
                    target="_blank"
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                  >
                    <Github className="w-5 h-5" /> Server
                  </Link> : null}
                  <Link
                    href={project.live}
                    target="_blank"
                    className="ml-auto flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                  >
                    <ExternalLink className="w-5 h-5" /> Live
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline transition"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
