"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [menuState, setMenuState] = React.useState(false);

  return (
    <header>
      <nav className="fixed z-20 mt-2 w-full">
        <div className="mx-auto bg-background/40 max-w-5xl px-4 rounded-2xl border backdrop-blur-xl transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-5 lg:gap-0 lg:py-5">
            {/* Logo */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2 font-bold tracking-wider"
              >
                KAWSER
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                {menuState ? (
                  <X className="size-6 duration-200" />
                ) : (
                  <Menu className="size-6 duration-200" />
                )}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu */}
            {menuState && (
              <div className="lg:hidden w-full bg-background border rounded-3xl p-6 mt-4 shadow-2xl">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col mt-6 space-y-3 sm:flex-row sm:gap-3 sm:space-y-0">
                  <Button asChild size="sm">
                    <Link href="#">Get Started</Link>
                  </Button>
                </div>
              </div>
            )}

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex lg:w-fit lg:gap-6">
              <Button asChild size="sm">
                <Link href="#">Contact Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
