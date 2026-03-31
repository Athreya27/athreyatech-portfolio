"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="relative max-w-4xl mx-auto py-20">

      {/* Background glow */}
      <div className="absolute -top-32 right-0 w-80 h-80 bg-blue-600/20 blur-3xl rounded-full"></div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Let’s Connect
      </motion.h1>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#020617]/80 backdrop-blur-md p-10 rounded-2xl border border-gray-800 shadow-2xl space-y-8"
      >

        {/* Email */}
        <ContactItem
          icon={<Mail />}
          label="Email"
          value="athreyajosyula@gmail.com"
          link="mailto:athreyajosyula@gmail.com"
        />

        {/* LinkedIn */}
        <ContactItem
          icon={<Linkedin />}
          label="LinkedIn"
          value="linkedin.com/in/athreya-josyula"
          link="https://www.linkedin.com/in/athreya-josyula"
        />

        {/* GitHub */}
        <ContactItem
          icon={<Github />}
          label="GitHub"
          value="github.com/AthreyaJosyula"  // 🔹 replace with your exact username
          link="https://github.com/AthreyaJosyula"
        />

        {/* Location */}
        <ContactItem
          icon={<MapPin />}
          label="Location"
          value="Visakhapatnam, India"
        />

        {/* Resume Download */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/Athreya_Resume.pdf"
          download
          className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold shadow-lg hover:shadow-blue-500/30 transition"
        >
          <FileText size={18} />
          Download Resume
        </motion.a>

      </motion.div>

    </main>
  );
}


/* Reusable Contact Item */
function ContactItem({ icon, label, value, link }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center justify-between border border-gray-800 p-5 rounded-xl hover:border-blue-500 transition"
    >
      <div className="flex items-center gap-4 text-gray-300">
        <div className="text-blue-400">{icon}</div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="font-medium">{value}</p>
        </div>
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline text-sm"
        >
          Open →
        </a>
      )}
    </motion.div>
  );
}