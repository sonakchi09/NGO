"use client";

import Link from "next/link";
import { FaHandHoldingHeart } from "react-icons/fa";
import { useState } from "react";
import VolunteerFormModal from "./VolunteerFormModal";

export default function VolunteerCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-[380px] sm:h-[450px] md:h-[550px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/volunteer.png"
            alt="Volunteers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* CTA Content */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 h-full px-4 text-center">
          {/* Volunteer Button */}
          <button
            onClick={() => setOpen(true)}
            className="
              bg-green-600 hover:bg-green-700
              text-white
              px-8 py-3
              rounded-md
              font-semibold
              transition
            "
          >
            Join as a Volunteer
          </button>

          {/* Donate Button */}
          <Link
            href="/donate"
            className="
              inline-flex items-center gap-2
              bg-orange-600 hover:bg-orange-700
              text-white
              px-8 py-3
              rounded-md
              font-semibold
              transition
            "
          >
            <FaHandHoldingHeart />
            Donate Now
          </Link>
        </div>
      </section>

      <VolunteerFormModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
