"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Zap } from "lucide-react";
import GlowingButton from "./GlowingButton";

// Custom YC Journey Logo Component
const YCJourneyLogo = () => {
  return (
    <a
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal hover:scale-105 transition-transform duration-200"
      aria-label="YC Journey Home"
    >
      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
        <Zap className="h-5 w-5 text-white" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
        YC Journey
      </span>
    </a>
  );
};

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Program",
      link: "/program",
    },
    {
      name: "Mentors",
      link: "/mentors",
    },
    {
      name: "Success Stories",
      link: "/success-stories",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="fixed top-0 z-50">
        {/* Desktop Navigation */}
        <NavBody>
          <YCJourneyLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <GlowingButton className="px-6 py-2 text-sm">
              Apply Now
            </GlowingButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <YCJourneyLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 hover:text-purple-400 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-purple-500/10"
                aria-label={`Navigate to ${item.name}`}
              >
                <span className="block font-medium">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 pt-2">
              <GlowingButton 
                className="w-full py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply Now
              </GlowingButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
} 