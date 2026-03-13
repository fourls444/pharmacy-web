"use client";

import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Navbar from "./Navbar";
import MemberNavbar from "./MemberNavbar";

export default function AppHeader() {
  const pathname = usePathname();
  const { isLoggedIn } = useAuth();

  // Hide navbar on login page (login page has its own layout)
  if (pathname === "/login") {
    return (
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50">
      {isLoggedIn ? <MemberNavbar /> : <Navbar />}
    </header>
  );
}
