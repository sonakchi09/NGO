"use client";

import Link from "next/link";
import { useState } from "react";
import HeroVideoModal from "./HeroVideoModal";

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-white">
        {/* CONTAINER */}
        <div
          className="
            mx-auto
            max-w-7xl
            px-4 sm:px-6 lg:px-10
            grid
            grid-cols-1
            md:grid-cols-2
            gap-y-12 md:gap-x-12
            items-center
            min-h-[calc(100vh-80px)]
          "
        >
          {/* TEXT */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#111d51]">
              Uniting for Change, <br />
              Building a Brighter <br />
              Future
            </h1>

            <p className="mt-4 text-base sm:text-lg lg:text-xl text-[#111d51]">
              Join us in creating lasting impact through{" "}
              <br className="hidden sm:block" />
              collaboration, compassion, and action.
            </p>

            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                href="/whatwedo"
                className="bg-[#2E8B57] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#257a4c] transition"
              >
                What We Do
              </Link>

              <button
                onClick={() => setOpen(true)}
                className="border border-[#2E8B57] px-6 py-3 rounded-lg text-[#2E8B57] font-semibold hover:bg-[#2E8B57]/10 transition"
              >
                Watch Video
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              w-full
              mx-auto
              aspect-[4/5]
              max-w-[240px]
              sm:max-w-[300px]
              md:max-w-[360px]
              lg:max-w-[430px]
              xl:max-w-[430px]
              flex
              justify-center
            "
          >
            <img
              src="/images/hero.jpeg"
              alt="Happy children"
              className="w-full h-full object-cover rounded-[40px]"
            />
          </div>
        </div>
      </section>

      <HeroVideoModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
