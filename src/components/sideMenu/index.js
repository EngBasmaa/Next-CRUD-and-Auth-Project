import Link from "next/link";
import React from "react";

export default function SideMenu() {
  return <aside className="w-48 min-h-screen  bg-gray-100 p-5 h-100 shadow-md" style={{ backgroundColor: "var(--accent)" }}>
      <nav className="flex flex-col space-y-4">
        <Link className="nav-link mb-5 text-blue-700 transition-colors p-2 rounded duration-300" style={{ border: "2px solid var(--primary)" }} href="/about">
          About
        </Link>
        <Link className="nav-link mb-5 text-blue-70 transition-colors p-2 rounded duration-300" style={{ border: "2px solid var(--primary)" }} href="/about/mision">
          Mision
        </Link>
        <Link className="nav-link text-blue-700  transition-colors p-2 rounded duration-300" style={{ border: "2px solid var(--primary)" }} href="/about/vision">
          Vision
        </Link>
      </nav>
    </aside>;
}
