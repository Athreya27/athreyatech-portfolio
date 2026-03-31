"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
];

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger button - mobile only */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#020617] border-t border-gray-800 px-4 pb-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-300 hover:text-white border-b border-gray-800/50 text-sm transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
