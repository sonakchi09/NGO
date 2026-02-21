"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LuHeart, LuMenu } from "react-icons/lu";
import MobileNav from "./MobNav";
import { FaHandHoldingHeart } from "react-icons/fa";

export const navLinks = [
  { label: "Home", url: "/" },
  { label: "About", url: "/#about" },
  { label: "Campaigns", url: "/#campaigns" },
  { label: "Blogs", url: "/#blogs" },
  { label: "Contact", url: "/#contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
       <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

  {/* Left Side */}
  <div className="flex items-center gap-3">
    <img 
      src="/images/logo.png" 
      alt="Logo" 
      className="w-12 h-12 object-contain" 
    />

    <Link href="/" className="text-xl font-bold text-[#111D15]">
      Divya Prakash Foundation
    </Link>
  </div>

  {/* Right Side (your nav links / donate button) */}
  



          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.url}>
                <Link href={link.url} className="hover:text-[#2e8b57] transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Donate button (desktop) */}
 <Link
  href="/donate"
  className="
    hidden md:inline-flex
    items-center gap-2
    bg-[#2E8B57]
    text-white
    px-6 py-3
    rounded-full
    font-semibold
    text-sm
    hover:bg-green-700
    transition
  "
>
  <FaHandHoldingHeart className="text-base" />
  Donate Now
</Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setNavOpen(true)}
            className="md:hidden text-2xl text-gray-700"
            aria-label="Open menu"
          >
            <LuMenu />
          </button>
        </nav>
      </header>

      {/* Spacer so content doesn’t go under fixed navbar */}
      <div className="h-[72px]" />

      <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
    </>
  );
}
