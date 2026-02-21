import Link from "next/link";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111D15] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* NGO Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Divya Prakash Foundation
            </h3>
            <p className="text-sm leading-relaxed">
              A smile on everyone's face
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="hover:text-[#2E8B57] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#campaigns"
                  className="hover:text-[#2E8B57] transition"
                >
                  Campaigns
                </Link>
              </li>
              <li>
                <Link href="/#blogs" className="hover:text-[#2E8B57] transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#2E8B57] transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-[#2E8B57] transition">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <LuMail className="text-[#2E8B57]" />
                <a
                  href="mailto:contact@divyaprakashfoundation.org"
                  className="hover:text-[#2E8B57] transition"
                >
                  contact@divyaprakashfoundation.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LuPhone className="text-[#2E8B57]" />
                <a
                  href="tel:+919999999999"
                  className="hover:text-[#2E8B57] transition"
                >
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-start gap-2">
                <LuMapPin className="mt-1 text-[#2E8B57]" />
                <span>
                  Bhubaneswar, Odisha <br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          
          {/* Copyright */}
          <p className="text-xs text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Divya Prakash Foundation. All rights
            reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-[#2E8B57] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-[#2E8B57] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-[#2E8B57] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-[#2E8B57] transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
