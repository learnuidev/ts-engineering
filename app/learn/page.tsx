"use client";

import { Navbar } from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Learn() {
  const lessons = [
    {
      title: "Getting Started with chadcn + nextjs",
    },
    {
      title: "Setting Up Font Awesome",
    },
    {
      title: "Reusable Component Intro",
    },
    {
      title: "Fixing Icon Loading Issue",
    },
  ];
  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center flex-col mt-56 space-y-8">
        {lessons.map((lesson) => {
          return (
            <Link href={"/"} className="font-light text-2xl" key={lesson.title}>
              {lesson.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
