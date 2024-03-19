import React from "react";
import { cn } from "@/components/utils/cn";
import { Spotlight } from "../../ui/Spotlight";
import Herosection from "../Herosection";

export function SpotlightPreview() {
  return (
    <div className="h-full w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-black/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <Herosection />
      </div>
    </div>
  );
}
