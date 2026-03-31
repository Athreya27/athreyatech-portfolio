"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "How I Reduced Deployment Time by 50% Using GitHub Actions + Docker",
    slug: "how-i-reduced-deployment-time-by-50",
    date: "March 2026",
    readTime: "8 min read",
    summary:
      "A real-world case study from Ilumina Health: how I built a fully automated CI/CD pipeline with commit validation, smart linting, SHA-based image tagging, EKS deployment, and automatic rollback — cutting deployment time by 50%.",
  },
  {
    title: "Cost-Optimized DevOps Strategy",
    slug: "cost-optimized-devops",
    date: "March 2026",
    readTime: "8 min read",
    summary:
      "Hybrid infrastructure model balancing on-prem development with AWS EKS production workloads for cost-efficient scalability.",
  },
  {
    title: "Deploying My Portfolio on AWS",
    slug: "aws-portfolio-deployment",
    date: "February 2026",
    readTime: "6 min read",
    summary:
      "Production-grade static hosting architecture using S3, CloudFront, Route53, GoDaddy DNS, and CI/CD automation.",
  },
  {
    title: "Terraform Best Practices I Follow",
    slug: "terraform-best-practices",
    date: "January 2026",
    readTime: "5 min read",
    summary:
      "Modular, secure, and environment-isolated Infrastructure as Code design for scalable AWS deployments.",
  },
  {
    title: "Designing Reliable CI/CD Pipelines",
    slug: "reliable-ci-cd-design",
    date: "December 2025",
    readTime: "7 min read",
    summary:
      "Enterprise-grade CI/CD architecture with automated validation, rollback mechanisms, and quality gates.",
  },
];

export default function Blog() {
  return (
    <main className="max-w-4xl mx-auto py-20">

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Engineering Architecture Notes
      </motion.h1>

      {/* BLOG LIST */}
      <div className="space-y-10">
        {blogs.map((blog, index) => (
          <Link key={index} href={`/blog/${blog.slug}`}>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer p-8 bg-[#020617] rounded-xl border border-gray-800 hover:border-blue-500 hover:shadow-xl transition duration-300"
            >
              {/* Date */}
              <div className="text-sm text-gray-500 mb-3">
                {blog.date} • {blog.readTime}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold mb-3 hover:text-blue-400 transition">
                {blog.title}
              </h2>

              {/* Summary */}
              <p className="text-gray-400 leading-7 mb-5">
                {blog.summary}
              </p>

              {/* Read Indicator */}
              <motion.div
                whileHover={{ x: 5 }}
                className="text-blue-400 text-sm font-medium"
              >
                Read Article →
              </motion.div>

            </motion.div>

          </Link>
        ))}
      </div>

    </main>
  );
}