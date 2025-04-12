"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Layout,
    Server,
    Database,
    Settings,
    Cloud,
} from "lucide-react";

const categorizedSkills = [
    {
        category: "Programming Languages",
        icon: Code2,
        skills: ["JavaScript", "TypeScript", "C#", "C++", "OOP"],
    },
    {
        category: "Frontend Frameworks",
        icon: Layout,
        skills: ["React.js", "Next.js", "Tailwind CSS", "SCSS", "Bootstrap", "Redux"],
    },
    {
        category: "Backend Frameworks",
        icon: Server,
        skills: ["Node.js", "Express.js", ".NET", "Django"],
    },
    {
        category: "Databases",
        icon: Database,
        skills: ["MongoDB", "MySQL", "Firebase"],
    },
    {
        category: "Tools & DevOps",
        icon: Settings,
        skills: ["GitHub", "CI/CD", "Docker"],
    },
    {
        category: "Deployment Platforms",
        icon: Cloud,
        skills: ["Vercel", "Netlify", "AWS", "Heroku", "DigitalOcean"],
    },
];

export default function SkillsSection() {
    return (
        <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
                    Skills
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-12">
                    A breakdown of the tools and technologies I use across the stack.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {categorizedSkills.map((group, i) => {
                        const Icon = group.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                                        <Icon className="text-blue-600 dark:text-blue-300" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {group.category}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mt-4">
                                    {group.skills.map((skill, j) => (
                                        <div
                                            key={j}
                                            className="rounded-xl bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 text-center py-2 px-3 text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200 shadow-sm hover:shadow"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>

                                {/* Glow on hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 blur-xl transition duration-300 pointer-events-none rounded-2xl" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
