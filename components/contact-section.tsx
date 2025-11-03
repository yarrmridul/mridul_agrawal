"use client";
import type React from "react";
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import { useState } from "react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      // ✅ Reset form if success
      setFormData({ name: "", email: "", message: "" });
      alert("✅ Message sent successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className=" text-center pt-3 pb-10  max-w-6xl mx-auto"
      id="contact"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 className="text-15xl md:text-4xl font-bold text-gray-900 mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600 font-black"></span>
        </h2>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
          Got a Vision?{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let’s Bring It to Life!
          </span>
        </h2>
        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 my-3">
          I'm always interested in discussing new opportunities, innovative
          projects, and ways to create measurable business impact through
          technology and operations.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 pt-3 animate-fade-in delay-700">
          <SocialIcon
            icon={Mail}
            label="Email"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mridulagrawal06@gmail.com&su=Portfolio%20Inquiry&body=Hello%2C%20I%20just%20visited%20your%20portfolio."
          />
          <SocialIcon
            icon={Linkedin}
            href="https://www.linkedin.com/in/mridul-agrawal-62029522b"
            label="LinkedIn"
          />

          {/* <SocialIcon
            icon={SiWhatsapp}
            href="https://wa.me/917983738443" // your WhatsApp link; use your number without + and leading zeros
            label="WhatsApp"
          /> */}

          <SocialIcon icon={Phone} href="tel:+917983738443" label="Call" />
        </div>
      </div>
    </section>
  );
}

interface SocialIconProps {
  icon: React.ElementType;
  href: string;
  label: string;
}
function SocialIcon({ icon: Icon, href, label }: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank" // 👈 always open in new tab
      rel="noopener noreferrer" // 👈 security best practice
      className="w-14 h-14 rounded-full bg-card/60 glassmorphism flex items-center justify-center text-card-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
    >
      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </a>
  );
}
