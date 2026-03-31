"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Master of Business Administration (MBA) – Finance",
    institution: "Andhra University Affiliated, Visakhapatnam",
    duration: "2024 – April 2026 (Ongoing)",
    description:
      "Currently pursuing MBA with specialization in Finance, focusing on financial management, investment analysis, business strategy, and corporate decision-making. Enhancing analytical thinking and strategic planning skills alongside technical engineering background.",
  },
  {
    degree: "Bachelor of Technology (B.Tech) – Computer Science (Data Science)",
    institution: "Raghu Engineering College, Visakhapatnam",
    duration: "January 2020 – April 2024",
    description:
      "Graduated with CGPA: 7.20. Specialized in Data Science with strong foundations in Data Structures, Machine Learning fundamentals, Operating Systems, Networking, and Cloud Computing. Built multiple academic and practical projects involving analytics, automation, and system design.",
  },
  {
    degree: "Intermediate (MPC – Mathematics, Physics, Chemistry)",
    institution: "Gayatri College, Rama Talkies, Visakhapatnam",
    duration: "2018 – 2020",
    description:
      "Completed Higher Secondary Education with focus on Mathematics and core analytical subjects, building strong quantitative and logical reasoning foundation.",
  },
  {
    degree: "Secondary School Education",
    institution: "Akshara E.M. School, Visakhapatnam",
    duration: "2018",
    description:
      "Completed schooling with CGPA: 8.8. Developed foundational academic discipline and early interest in analytical and technical subjects.",
  },
];

export default function Education() {
  return (
    <main className="relative max-w-5xl mx-auto py-20">

      {/* Soft academic glow */}
      <div className="absolute -top-32 left-20 w-80 h-80 bg-indigo-600/20 blur-3xl rounded-full"></div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, letterSpacing: "-0.05em" }}
        animate={{ opacity: 1, letterSpacing: "0em" }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent"
      >
        Education
      </motion.h1>

      {/* Timeline */}
      <div className="relative border-l border-gray-700 pl-8 space-y-16">

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-[#020617] p-8 rounded-2xl border border-gray-800 shadow-lg hover:border-indigo-500 transition"
          >

            {/* Timeline dot */}
            <div className="absolute -left-[38px] top-10 w-5 h-5 bg-indigo-500 rounded-full border-4 border-[#0f172a]"></div>

            <h2 className="text-2xl font-semibold mb-2">
              {edu.degree}
            </h2>

            <p className="text-gray-400 mb-4">
              {edu.institution} • {edu.duration}
            </p>

            <p className="text-gray-300 leading-7">
              {edu.description}
            </p>

          </motion.div>
        ))}

      </div>

    </main>
  );
}