"use client";
import React from "react";
import { Button } from "../../ui/moving-border";
import { Download } from "lucide-react";

export function MovingBorderDemo(props: any) {
  return (
    <div>
      <Button
        borderRadius="1rem"
        className="bg-transparent dark:bg-slate-900 text-white  border-slate-500 dark:border-slate-800 py-2 px-6"
      >
        {props.title === "Download CV" ? (
          <div className="flex  justify-between items-center gap-x-2">
            {props.title}
            <Download size={18} />
          </div>
        ) : (
          props.title
        )}
      </Button>
    </div>
  );
}
