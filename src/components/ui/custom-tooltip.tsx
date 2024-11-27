import React, { ReactNode } from "react";
import { TooltipContentProps } from "@radix-ui/react-tooltip";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip as TooltipBase,
} from "./shadcn/tooltip";

type TooltipProps = {
  children: ReactNode;
  text: string;
  side?: "top" | "right" | "bottom" | "left";
  _content?: TooltipContentProps;
};

export function Tooltip({
  children,
  text,
  side = "top",
  _content,
}: TooltipProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <TooltipBase>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className="z-[1000] border-0 p-1 px-2 text-xs bg-black/80 text-white cursor-none"
          side={side}
          {..._content}
        >
          {text}
        </TooltipContent>
      </TooltipBase>
    </TooltipProvider>
  );
}
