"use client"; // Mark this as a client-side component

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forget Password", href: "/forgetpassword" }
];

export default function Layout() {
  const path = usePathname(); // Use inside the component

  return (
    <div>
      {navlinks.map((link) => (
        <Link href={link.href} key={link.name}>
          <a style={{ color: path === link.href ? "red" : "blue" }}>
            {link.name}
          </a>
        </Link>
      ))}
    </div>
  );
}

