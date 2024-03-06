"use client";

import { Navbar } from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { homePage } from "./home-page.constants";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="font-bold text-center mt-56 mb-4 text-5xl md:text-7xl">
        {homePage.header.title}
      </h1>
      <p className="mx-16 text-center text-2xl font-extralight">
        {homePage.description.title}
      </p>
      <Button variant="outline" className="rounded-full my-8 mx-auto block">
        Get Started
      </Button>
    </div>
  );
}
