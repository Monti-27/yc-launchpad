"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Transform your startup idea into a YC-ready company with our accelerated program. Join hundreds of successful founders who made it from zero to funded.`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-normal" />;
} 