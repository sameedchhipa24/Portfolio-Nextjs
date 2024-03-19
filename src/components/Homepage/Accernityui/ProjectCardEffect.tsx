"use client"

import Link from "next/link";
import { HoverEffect } from "../../ui/ProjectCards";
import { LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

export function CardHoverEffectDemo() {
  return (
  <div className="max-w-screen-xl mx-auto px-8">
     
        <h1 className="flex justify-center mx-auto md:text-6xl lg:text-7xl  text-5xl font-bold md:font-semibold p-4  ">
      Projects
  
        </h1>

        <HoverEffect items={projects} />
      </div>
 
  );
}
export const projects = [
  {
    title: "HTML Project",
    description: "A simple static website built using HTML for the frontend.",
    link: "/example.com/html",
  },
  {
    title: "CSS Project",
    description: "A stylish webpage designed using CSS for layout and styling.",
    link: "/cssproject",
  },
  {
    title: "TypeScript Project",
    description:
      "An application developed using TypeScript, adding static typing to JavaScript for better code quality.",
    link: "/typescriptprojects",
  },
  {
    title: "React Project",
    description:
      "A dynamic web application created using React, a popular JavaScript library for building user interfaces.",
    link: "/example.com/react",
  },
  {
    title: "Next.js Project",
    description:
      "A server-side rendered web application built with Next.js, providing efficient and scalable solutions for React applications.",
    link: "/example.com/nextjs",
  },
  {
    title: "PostgreSQL Project",
    description:
      "A database management system powered by PostgreSQL, offering robust features and reliability for handling data.",
    link: "/example.com/postgresql",
  },
];
