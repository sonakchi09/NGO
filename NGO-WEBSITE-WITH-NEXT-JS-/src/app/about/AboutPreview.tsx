"use client";

import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import HeroVideoModal from "../home/HeroVideoModal";


export default function AboutPreview() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="about"
        className="bg-white w-full max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-8 items-start">
          {/* Column 1: Dash */}
          <div className="hidden md:flex items-start pt-3">
            <span className="block w-12 h-[2px] bg-[#F4A261] rounded"></span>
          </div>

          {/* Column 2: Text */}
          <div className="flex flex-col gap-4">
            <span className="text-sm uppercase tracking-wide text-orange-600">
              Know About Us
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#111d51]">
              Creating a Safe Haven <br /> for Children <br /> with Special Needs
            </h2>

            <p className="text-[#111d51] text-base sm:text-lg max-w-xl">
              At our Foundation, we are dedicated to creating a nurturing environment
              where children with special needs receive the care, support, and
              resources they deserve. Through personalized programs and a
              community-driven approach, we empower every child to overcome
              challenges, unlock their potential, and build a brighter future.
            </p>

            <Link
              href="/about"
              className="bg-[#2E8B57] text-white px-6 py-3 rounded-md w-fit mt-4"
            >
              Learn More
            </Link>
          </div>

          {/* Column 3: Image / Video */}
          <div className="relative w-full max-w-sm mx-auto md:mx-0">
            <div className="relative h-[260px] sm:h-[320px] md:h-[400px]">
              <img
                src="/images/about.jpg"
                alt="Children learning"
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setOpen(true)}
                  className="bg-white rounded-full p-5 shadow-lg hover:scale-110 transition"
                >
                  <FaPlay className="text-[#2E8B57] text-lg ml-[2px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HeroVideoModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
