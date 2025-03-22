"use client";
import React from "react";
import { Boxes } from "../../ui/background-boxes";
// import { cn } from "@/lib/utils";
import Image from "next/image"; // Import Next.js Image component
import { FloatingDockDemo } from "../../floating-dock/floating-dock";
import ColourfulText from "../../ui/colourful-text";
import { Button } from "../../ui/moving-border";

export function Header() {
    return (
        <div className="h-[700px] relative w-full overflow-hidden bg-slate-900 flex items-center justify-center">
            {/* Background Overlay */}
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            {/* Background Animation */}
            <Boxes />

            {/* Content Wrapper */}
            <div className="relative z-20 flex flex-col md:flex-row items-center w-full max-w-7xl gap-5 md:gap-0">
                {/* Left Side - Image */}
                <div className="md:w-[40%] w-[95%] flex justify-center items-center">
                    <Image
                        src="/images/mamun-con.jpg" // Replace with your actual image path
                        alt="Md Mamunur Rashid"
                        width={300}
                        height={300}
                        className="rounded-full shadow-lg border-4 border-white"
                    />
                </div>

                {/* Right Side - Name & Info */}
                <div className="md:w-[60%] w-[95%] flex flex-col justify-center items-start text-white">
                    <h1 className="text-2xl md:text-[50px]  font-bold text-center md:mb-5 text-slate-300">Transforming Concepts into <br /> </h1>
                    <h1 className="text-2xl md:text-[56px]  font-bold text-center md:mb-5 text-slate-300"><ColourfulText text="Seamless User Experiences." /></h1>
                    <p className="md:text-3xl text-xl text-slate-400 mt-4 font-gotham font-bold animate-pulse">Md Mamunur Rashid</p>
                    <p className="text-[18px] text-slate-500 font-gotham font-semibold">Full Stack Developer</p>
                    <p className="text-sm text-neutral-400 mt-3">
                        With a year of experience in Full Stack development and a strong foundation in computer science, I
                        specialize in JavaScript, Next.js, and Node.js. Passionate about problem-solving, I excel at building
                        efficient solutions while collaborating effectively in dynamic team environments.
                    </p>
                    <div className="mt-5 flex justify-evenly w-[80%] mx-auto gap-5">
                        <button className="w-full px-8 py-2 rounded-full bg-[rgb(0,191,255)] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[rgb(0,191,255)]">
                            Hire Me
                        </button>
                        <Button
                            borderRadius="1.75rem"
                            className="w-full px-8 py-2  bg-slate-900  text-white  border-slate-800"
                        >
                            View Projects
                        </Button>
                    </div>
                    <FloatingDockDemo />
                </div>
            </div>
        </div>
    );
}
