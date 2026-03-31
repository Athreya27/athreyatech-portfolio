"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="relative max-w-6xl mx-auto py-16">

      {/* BACKGROUND GLOW EFFECT */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="absolute top-60 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        About Me
      </motion.h1>

      {/* INTRO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-gray-300 text-lg leading-8 text-center max-w-3xl mx-auto mb-20"
      >
        I am a DevOps Engineer focused on building scalable, resilient, and automated cloud systems that operate reliably under real-world production demands. With hands-on experience in AWS and GCP environments, I design infrastructure that prioritizes performance, security, cost-efficiency, and operational simplicity.
        <br /><br />
        As a Certified AWS Solutions Architect – Associate, I approach infrastructure with architectural discipline—designing fault-tolerant systems, implementing Infrastructure as Code using Terraform, and orchestrating containerized workloads with Kubernetes. My work emphasizes automation-first principles, ensuring that deployments are predictable, repeatable, and measurable.
        <br /><br />
        Beyond infrastructure, I bring experience in backend development using Python (FastAPI) and Java (Spring Boot), allowing me to understand application-layer challenges and bridge the gap between development and operations. This cross-functional perspective enables me to design systems that scale both technically and organizationally.
        <br /><br />
        I have working knowledge of networking fundamentals (HTTP, DNS, REST APIs), scripting with Python and Bash, and exposure to MLOps workflows—designing and managing machine learning pipelines in cloud environments for efficient model deployment and lifecycle governance.
        <br /><br />
        I thrive in collaborative environments, partnering with development, QA, and security teams to deliver reliable software systems. Whether operating in a startup-paced setting or within enterprise-scale infrastructure, I focus on building systems that are observable, maintainable, and engineered for long-term growth.
        <br /><br />
        My long-term goal is to evolve into a high-impact DevOps and Site Reliability Engineer, contributing to platforms that serve global-scale users with stability, efficiency, and engineering excellence.
      </motion.div>

      {/* WHAT I DO */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">
          What I Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Design AWS & GCP Cloud Architecture",
            "Automate Infrastructure with Terraform",
            "Build and Optimize CI/CD Pipelines",
            "Orchestrate Containers with Kubernetes",
            "Improve System Reliability & Observability",
            "Optimize Cloud Performance & Cost Efficiency"
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#020617] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition"
            >
              <p className="text-gray-300">{item}</p>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* TECH STACK */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {[
            "AWS",
            "GCP",
            "Terraform",
            "Kubernetes",
            "GitHub Actions",
            "Docker",
            "Python",
            "Java",
            "FastAPI",
            "Spring Boot",
            "Linux",
            "Networking"
          ].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium"
            >
              {tech}
            </motion.div>
          ))}

        </div>
      </motion.section>

    </main>
  );
}