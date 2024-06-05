"use client";

import Link from "next/link";

export default function Learn() {
  const lessons = [
    {
      title: "921",
      description: "gen ai platform from the future",
      link: "https://www.921.studio",
    },
    {
      title: "kuzoo",
      description: "intelligent language learning platform",
      link: "https://kuzoo.921.studio",
    },
    {
      title: "dyno",
      description: "delightful dynamodb app",
      link: "https://www.composeui.io",
    },
  ];
  return (
    <div className="flex items-center justify-center flex-col mt-56 space-y-12">
      {lessons.map((lesson) => {
        return (
          <div key={lesson.title} className="flex flex-col items-center">
            <Link
              target="_blank"
              rel="noreferrer"
              href={lesson.link}
              className="font-bold text-4xl"
            >
              {lesson.title}
            </Link>

            <p className="text-gray-800 font-extralight">
              {lesson.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
