"use client";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export default function FlipWordsDemo() {
  const words = ["LIGHTNING FAST", "PROVEN RESULTS", "FROM 0 TO 100"];

  return (
    <div className="text-3xl md:text-5xl font-bold text-purple-300 mb-8">
      <FlipWords words={words} className="text-purple-300" />
    </div>
  );
} 