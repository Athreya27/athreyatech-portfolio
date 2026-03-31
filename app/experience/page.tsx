"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <main className="relative max-w-6xl mx-auto py-20">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Experience
      </motion.h1>

      {/* COMPANY CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#020617] p-10 rounded-2xl border border-gray-800 shadow-xl"
      >

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold">
            DevOps Engineer
          </h2>
          <p className="text-gray-400 mt-2">
            Ilumina Health Pvt. Ltd. • Nov 2024 – Present
          </p>
        </div>

        {/* SECTION 1 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">
            Cloud Architecture & Infrastructure
          </h3>
          <p className="text-gray-300 leading-7">
            Architected and maintained a production-grade multi-region AWS
            infrastructure using Terraform, implementing secure VPC design
            (public/private subnets, Internet Gateway, NAT Gateway, Security Groups).
            Reduced environment provisioning time by 40% while improving scalability
            and operational consistency.
          </p>
        </div>

        {/* SECTION 2 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">
            Kubernetes & Microservices Platform
          </h3>
          <p className="text-gray-300 leading-7 mb-4">
            Designed and deployed a microservices-based healthcare platform on Amazon EKS,
            orchestrating FastAPI services across multiple domains.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li>• Achieved 60% latency reduction through optimized routing.</li>
            <li>• Enabled 4x traffic scalability with horizontal pod scaling.</li>
            <li>• Integrated Application Load Balancer for traffic distribution.</li>
            <li>• Implemented Kubernetes Secrets and EFS for secure configuration and persistent storage.</li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">
            CI/CD & Deployment Engineering
          </h3>

          <ul className="space-y-4 text-gray-300 leading-7">
            <li>
              • Designed and implemented multi-environment CI/CD pipelines supporting
              dev, QA, staging, and production workflows using GitHub Actions.
            </li>
            <li>
              • Automated Docker image builds with dynamic version tagging,
              pushed artifacts to Amazon ECR, and orchestrated deployments to Amazon EKS.
            </li>
            <li>
              • Implemented automated rollout verification by monitoring pod health status
              and validating deployment success through application log inspection.
            </li>
            <li>
              • Engineered automatic rollback mechanisms using Kubernetes rollout strategies
              when deployment validation failed.
            </li>
            <li>
              • Integrated commit message validation, pull request checks, and automated
              repository governance workflows to enforce development standards.
            </li>
            <li>
              • Embedded automated linting and quality gates (Python, TypeScript)
              within pull request pipelines to improve code reliability.
            </li>
            <li>
              • Developed Lambda deployment automation with conditional layer versioning
              and environment-aware release control.
            </li>
            <li>
              • Configured deployment summaries and automated failure notifications to
              enhance release visibility and operational safety.
            </li>
          </ul>
        </div>

        {/* SECTION 4 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">
            Security & Compliance
          </h3>
          <p className="text-gray-300 leading-7">
            Strengthened infrastructure security by integrating AWS WAF,
            implementing Cognito-based authentication, enforcing ISO/IEC 27001
            compliance standards, and managing fine-grained IAM policies.
            Ensured strict network segmentation between public and private services.
          </p>
        </div>

        {/* SECTION 5 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">
            Observability & Reliability
          </h3>
          <p className="text-gray-300 leading-7">
            Implemented proactive monitoring using Grafana and New Relic,
            building dashboards and alerting systems that reduced downtime
            and improved incident response efficiency (MTTR).
          </p>
        </div>

        {/* SECTION 6 */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-4">
            Serverless & Data Architecture
          </h3>
          <p className="text-gray-300 leading-7">
            Managed PostgreSQL and Amazon RDS deployments within private subnets,
            utilized Amazon S3 for storage and log archival, and integrated AWS
            Lambda for event-driven workflows including webhook and notification services.
            Contributed to MLOps initiatives for scalable ML pipeline deployment.
          </p>
        </div>

      </motion.div>

    </main>
  );
}