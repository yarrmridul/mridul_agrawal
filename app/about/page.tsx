"use client";
import { Mail } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin } from "lucide-react";
import mridul_img from "../../public/mridul_img.jpeg";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-200 to-white flex flex-col items-center justify-center px-2 py-16 ">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {/* Left Section */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600 font-black">
              Me
            </span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Born and raised in Mathura — so yes, I bring both a sweet tooth and
            a knack for balance. As a true Baniya, I’ve mastered the art of
            paisa bachao — from making custom CRMs for me to negotiating deals
            that make everyone smile. I’m big on management, bigger on jugaad
            and happiest when building systems that make work smoother (and
            people happier) and solving real world problems.
          </p>

          {/* LinkedIn + CTA Buttons */}
          <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
            <Link
              href="https://www.linkedin.com/in/mridul-agrawal-62029522b"
              target="_blank"
              className="flex items-center gap-2 bg-cyan-600 text-white px-5 py-2 rounded-lg shadow hover:bg-cyan-700 transition-all duration-300"
            >
              <Linkedin size={18} /> LinkedIn
            </Link>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mridulagrawal06@gmail.com&su=Portfolio%20Inquiry&body=Hello%2C%20I%20just%20visited%20your%20portfolio."
              target="_blank"
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition-all duration-300"
            >
              <Mail size={18} /> Gmail
            </a>
          </div>
        </div>

        {/* Middle Section (Stats) */}
        <div className="flex flex-col items-center justify-center space-y-6 bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
          <div className="py-4">
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-serif">
              Building systems, sipping chai, and figuring life one product at a
              time.
            </p>
          </div>

          <div className="w-65 h-100 relative rounded-2xl overflow-hidden shadow-md ">
            <Image
              src={mridul_img}
              alt="Profile Avatar"
              fill
              className="cover"
            />
            {/* <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-all duration-300"></div> */}
          </div>
        </div>

        {/* Right Section (Experience Text) */}

        <div className="space-y-4 text-center md:text-left">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-5 mt-5">
            I’ve always had a thing for figuring out how things work — and how
            they could work better. That curiosity turned into side gigs back in
            Class 10 (2018). By 2020, that curiosity evolved into Moodale — my
            real-world MBA in operations, marketing, and strategy.I didn’t know
            where it would lead then (and still don’t fully), but that’s the fun
            part — and it continues to shape how I approach work today.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Over the years, I’ve learned that great products aren’t just built —
            they’re understood, tested, and evolved. I love collaborating with
            people who think differently, figuring out why, and building systems
            that make life (and work) smoother.
          </p>
        </div>
      </div>
    </main>
  );
}
