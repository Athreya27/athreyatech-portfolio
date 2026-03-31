"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "AWS Production-Ready Portfolio Deployment",
    overview:
      "Designed and deployed a cloud-native static portfolio using AWS services with a focus on scalability, security, and automated delivery.",
    details: [
      "Architected S3 static hosting with CloudFront CDN for global low-latency distribution.",
      "Configured Route53 DNS routing with HTTPS enforcement and secure bucket policies.",
      "Implemented GitHub Actions CI/CD pipeline for automated build and deployment.",
      "Optimized caching strategies for performance and cost efficiency.",
      "Ensured infrastructure security using least-privilege IAM policies.",
    ],
    architecture: `
System Flow:
Client → Route53 → CloudFront CDN → S3 Static Hosting

Deployment Pipeline:
Developer Push → GitHub → GitHub Actions → Build → Deploy to S3 → CloudFront Invalidation

Security:
• HTTPS enforced via CloudFront
• S3 bucket public access blocked
• IAM least privilege model

Scalability:
• Global CDN distribution
• Serverless static hosting
• Handles traffic spikes automatically
    `,
    tech: ["AWS", "S3", "CloudFront", "Route53", "GitHub Actions"],
  },
  {
    title: "Terraform AWS Infrastructure Template",
    overview:
      "Built reusable Terraform modules to provision production-grade AWS infrastructure with environment separation and automation-first principles.",
    details: [
      "Designed modular VPC architecture with public and private subnets.",
      "Provisioned EC2, ALB, RDS, and security groups using Infrastructure as Code.",
      "Implemented remote state management for team-safe deployments.",
      "Enabled environment isolation for dev, staging, and production.",
      "Reduced manual provisioning errors through automated validation.",
    ],
    architecture: `
Infrastructure Flow:
Terraform Modules → AWS VPC → Public & Private Subnets → EC2 / ALB / RDS

Design Principles:
• Modular reusable structure
• Environment separation
• Remote state management
• Idempotent deployments

Security:
• Network isolation
• IAM role-based access
• Controlled variable management

Reliability:
• Version-controlled infrastructure
• Rollback via Terraform state
    `,
    tech: ["Terraform", "AWS", "IAM", "VPC", "RDS"],
  },
  {
    title: "CI/CD Automation & Containerized Deployment",
    overview:
      "Engineered automated CI/CD workflows for containerized applications ensuring predictable, repeatable, and scalable deployments.",
    details: [
      "Built Docker-based container pipelines integrated with GitHub Actions.",
      "Implemented automated testing, build, and deployment workflows.",
      "Enabled versioned container releases with rollback strategy.",
      "Reduced deployment time and eliminated manual release processes.",
      "Designed pipeline structure supporting scalable microservices architecture.",
    ],
    architecture: `
Pipeline Flow:
Developer Push → GitHub → CI Workflow → Docker Build → Image Registry → Deployment

Workflow Stages:
• Code validation
• Automated testing
• Image build & tagging
• Deployment trigger
• Health checks

Security:
• Encrypted secrets management
• Minimal base images

Reliability:
• Automated rollback strategy
• Versioned releases
    `,
    tech: ["GitHub Actions", "Docker", "AWS", "CI/CD"],
  },
];

export default function Projects() {
  // ✅ Properly typed state
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="relative max-w-7xl mx-auto py-20">

      <div className="absolute -top-40 left-20 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-20 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.7 }}
            viewport={{ once: true }}   // ✅ fixed syntax
            whileHover={{ scale: 1.02 }}
            className="relative p-8 rounded-2xl bg-[#020617] border border-gray-800 shadow-xl transition duration-300 flex flex-col"
          >

            <h2 className="text-2xl font-semibold mb-4">
              {project.title}
            </h2>

            <p className="text-gray-400 mb-6">
              {project.overview}
            </p>

            <ul className="space-y-3 text-gray-300 text-sm mb-6">
              {project.details.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-sm">
                GitHub
              </button>

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="px-4 py-2 border border-gray-600 rounded-lg hover:border-blue-500 transition text-sm"
              >
                {openIndex === index
                  ? "Hide Architecture"
                  : "Architecture Overview"}
              </button>
            </div>

            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 p-4 bg-[#0f172a] rounded-lg text-gray-300 text-sm whitespace-pre-line border border-gray-700"
              >
                {project.architecture}
              </motion.div>
            )}

          </motion.div>
        ))}

      </div>
    </main>
  );
}