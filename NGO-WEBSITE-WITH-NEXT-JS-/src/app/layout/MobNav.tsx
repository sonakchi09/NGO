"use client";

import Link from "next/link";
import { navLinks } from "./Navbar";
import { LuX, LuHeart } from "react-icons/lu";

interface MobileNavProps {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({ navOpen, setNavOpen }: MobileNavProps) {
  const showMobileNav = navOpen ? "translate-x-0" : "translate-x-full";

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setNavOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          navOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide panel */}
      <ul
        className={`fixed right-0 top-0 z-50 flex h-full w-[80%] sm:w-[60%] flex-col items-center justify-center space-y-2 bg-slate-800 text-white transform transition-all duration-500 ${showMobileNav}`}
      >
        <button
          onClick={() => setNavOpen(false)}
          className="absolute top-6 right-6 text-2xl"
          aria-label="Close menu"
        >
          <LuX />
        </button>

        {navLinks.map((link) => (
          <li key={link.url} className="w-full">
            <Link
              href={link.url}
              onClick={() => setNavOpen(false)}
              className="flex w-full justify-center rounded-lg py-4 px-6 text-xl font-medium hover:bg-slate-700/50 hover:text-cyan-300 transition"
            >
              {link.label}
            </Link>
          </li>
        ))}

        <Link
          href="/donate"
          onClick={() => setNavOpen(false)}
          className="mt-6 flex items-center gap-2 rounded-md bg-[#2E8B57] px-6 py-3 text-sm font-semibold text-white hover:bg-black transition"
        >
          <LuHeart />
          Donate Now
        </Link>
      </ul>
    </>
  );
}
