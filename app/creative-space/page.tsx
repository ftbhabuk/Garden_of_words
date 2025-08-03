"use client";
import React, { useState } from "react";
import Link from "next/link";
import ChatComponent from "../components/ChatComponent";
import Footer from "../components/Footer";

export default function CreativeSpacePage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="p-4">
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-transparent border border-none rounded-lg text-red-600 "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          ←{" "}
          <img
            src={isHovered ? "/bongocat.gif" : "/bongocat-static.png"}
            alt="Bongo Cat"
            className="w-10 h-10 ml-2 object-contain"
          />
        </Link>
      </div>
      <ChatComponent />
      <Footer />
    </div>
  );
}