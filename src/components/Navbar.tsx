"use client";

import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav style={{ background: "#f8f8f8", padding: "1rem" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
