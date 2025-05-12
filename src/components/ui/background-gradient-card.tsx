"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BackgroundGradientCardProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  backgroundImage?: string;
  hoverBackgroundImage?: string;
}

export default function BackgroundGradientCard({
  children,
  className,
  containerClassName,
  backgroundImage = "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80",
  hoverBackgroundImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80"
}: BackgroundGradientCardProps) {
  return (
    <div className={cn("max-w-xs w-full", containerClassName)}>
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-xl mx-auto flex flex-col justify-end p-6 border border-transparent dark:border-neutral-800",
          `bg-[url(${backgroundImage})] bg-cover bg-center`,
          // Preload hover image by setting it in a pseudo-element
          `before:bg-[url(${hoverBackgroundImage})] before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
          `hover:bg-[url(${hoverBackgroundImage})]`,
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-40",
          "transition-all duration-500",
          // Dark gradient overlay for better text readability
          "after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/80 after:via-black/20 after:to-transparent",
          className
        )}
      >
        <div className="relative z-50">
          {children}
        </div>
      </div>
    </div>
  );
} 