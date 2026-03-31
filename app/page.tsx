"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative bg-[#0f172a] text-white overflow-x-hidden">

      {/* BACKGROUND GLOW EFFECTS */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-20 pt-16 md:pt-24 gap-12">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Athreya
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-base md:text-lg leading-8"
          >
            DevOps Engineer focused on AWS, Infrastructure as Code, and
            production-grade CI/CD automation. I build scalable, secure,
            and failure-aware cloud systems.
          </motion.p>

          {/* CTA Buttons — flex-wrap fixes overflow on small screens */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-lg text-sm font-medium"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-600 rounded-lg hover:border-blue-500 transition text-sm font-medium"
            >
              Contact Me
            </Link>
          </motion.div>

        </div>

        {/* RIGHT SIDE VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 blur-2xl opacity-30 absolute"></div>

          <div className="relative w-56 h-56 md:w-64 md:h-64 bg-[#020617] rounded-2xl border border-gray-800 shadow-2xl flex items-center justify-center">
            <p className="text-gray-400 text-center px-6 text-sm md:text-base">
              Designing automated infrastructure that scales reliably
              under real-world production workloads.
            </p>
          </div>
        </motion.div>

      </section>

      {/* PROFESSIONAL HIGHLIGHTS */}
      <section className="py-16 md:py-20 px-4 md:px-20 bg-[#020617]">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-center mb-12"
        >
          Professional Highlights
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

          {[
            { number: "1.6+", label: "Years of Production Experience" },
            { number: "10+", label: "Infrastructure & Automation Projects" },
            { number: "100%", label: "Automation-Driven Deployments" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0f172a] p-8 md:p-10 rounded-2xl border border-gray-800 hover:border-blue-500 transition"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-blue-400">
                {item.number}
              </h3>
              <p className="mt-4 text-gray-400 text-sm md:text-base">{item.label}</p>
            </motion.div>
          ))}

        </div>

      </section>

    </main>
  );
}
