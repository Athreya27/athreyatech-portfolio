"use client";

import { motion } from "framer-motion";

const COLORS = [
  { border: "rgba(168,85,247,0.45)",  bg: "linear-gradient(135deg,rgba(46,8,84,0.85),rgba(20,5,50,0.85))",    tc: "#c084fc" },
  { border: "rgba(99,102,241,0.45)",  bg: "linear-gradient(135deg,rgba(15,25,80,0.85),rgba(10,15,50,0.85))",   tc: "#818cf8" },
  { border: "rgba(6,182,212,0.45)",   bg: "linear-gradient(135deg,rgba(8,50,80,0.85),rgba(5,30,60,0.85))",    tc: "#22d3ee" },
  { border: "rgba(248,113,113,0.45)", bg: "linear-gradient(135deg,rgba(69,10,10,0.85),rgba(35,5,5,0.85))",    tc: "#f87171" },
  { border: "rgba(52,211,153,0.45)",  bg: "linear-gradient(135deg,rgba(6,54,30,0.85),rgba(5,30,20,0.85))",    tc: "#34d399" },
  { border: "rgba(251,146,60,0.45)",  bg: "linear-gradient(135deg,rgba(67,30,5,0.85),rgba(30,15,5,0.85))",    tc: "#fb923c" },
  { border: "rgba(251,191,36,0.45)",  bg: "linear-gradient(135deg,rgba(78,52,0,0.85),rgba(40,25,0,0.85))",    tc: "#fbbf24" },
];

export default function TerraformBestPractices() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* glow orbs */}
      <div className="pointer-events-none select-none" aria-hidden>
        <div className="fixed top-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[380px] rounded-full blur-[130px]"
          style={{ background: "rgba(168,85,247,0.2)", zIndex: 0 }} />
        <div className="fixed top-[38%] left-[-100px] w-[420px] h-[420px] rounded-full blur-[140px]"
          style={{ background: "rgba(99,102,241,0.15)", zIndex: 0 }} />
        <div className="fixed top-[62%] right-[-80px] w-[380px] h-[380px] rounded-full blur-[130px]"
          style={{ background: "rgba(52,211,153,0.14)", zIndex: 0 }} />
        <div className="fixed inset-0 opacity-[0.025]" style={{
          backgroundImage: "linear-gradient(#c084fc 1px,transparent 1px),linear-gradient(90deg,#c084fc 1px,transparent 1px)",
          backgroundSize: "48px 48px", zIndex: 0,
        }} />
      </div>

      <main className="relative max-w-3xl mx-auto py-20 px-4" style={{ zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center rounded-3xl border p-10 relative overflow-hidden"
          style={{
            borderColor: "rgba(168,85,247,0.4)",
            background: "linear-gradient(160deg,rgba(46,10,80,0.85) 0%,rgba(10,5,40,0.9) 60%,rgba(20,5,50,0.75) 100%)",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[160px] rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(168,85,247,0.22)" }} />
          <span className="inline-block border text-purple-300 text-xs font-mono tracking-widest uppercase px-5 py-1.5 rounded-full mb-5"
            style={{ borderColor: "rgba(168,85,247,0.5)", background: "rgba(168,85,247,0.1)" }}>
            Infrastructure as Code
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Terraform{" "}
            <span style={{ background: "linear-gradient(90deg,#c084fc,#818cf8,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Best Practices
            </span>
            {" "}I Follow
          </h1>
          <p className="text-slate-400 mt-3 text-sm">Designing Infrastructure That Scales Safely</p>
        </motion.div>

        <Section title="Why Structure Matters in Infrastructure as Code" idx={0}>
          <p>
            Infrastructure as Code becomes dangerous without discipline.
            As environments grow, unstructured Terraform leads to state corruption,
            resource drift, and unpredictable deployments.
          </p>
          <p>
            My approach focuses on modularity, state safety, environment isolation,
            and failure prevention.
          </p>
        </Section>

        <Section title="Modular Architecture Design" idx={1}>
          <p>Instead of a monolithic Terraform file, I design reusable modules for:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>VPC (public/private subnet segmentation)</li>
            <li>IAM roles and policies</li>
            <li>EKS clusters</li>
            <li>RDS databases</li>
            <li>Load balancers</li>
          </ul>
          <p>
            This ensures separation of concerns and promotes environment reuse.
            Modules are version-controlled and treated like software components.
          </p>
        </Section>

        <Section title="Remote State & Locking Strategy" idx={2}>
          <p>
            Terraform state is a critical system component. Storing state locally
            creates race conditions in team environments.
          </p>
          <p>I use:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>S3 for remote state storage</li>
            <li>DynamoDB for state locking</li>
            <li>Environment-specific state files</li>
          </ul>
          <p>This prevents concurrent modification and ensures deployment consistency.</p>
        </Section>

        <Section title="Environment Isolation Strategy" idx={3}>
          <p>Dev, QA, Staging, and Production are fully isolated.</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Separate state backends</li>
            <li>Separate variable files</li>
            <li>Strict IAM boundary enforcement</li>
          </ul>
          <p>
            Cross-environment drift is one of the most common infrastructure risks.
            Isolation minimizes blast radius.
          </p>
        </Section>

        <Section title="Security-First Infrastructure Design" idx={4}>
          <ul className="list-disc ml-6 space-y-2">
            <li>No hardcoded credentials</li>
            <li>Least-privilege IAM</li>
            <li>Private subnet databases</li>
            <li>Security group restriction by CIDR</li>
          </ul>
          <p>
            Infrastructure security should be enforced in code —
            not manually configured in the console.
          </p>
        </Section>

        <Section title="Failure & Drift Prevention" idx={5}>
          <p>Every Terraform change is preceded by:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>terraform plan validation</li>
            <li>Code review approval</li>
            <li>CI-based linting</li>
          </ul>
          <p>Idempotency and predictability are the core reliability principles.</p>
        </Section>

        <Section title="Operational Impact" idx={6}>
          <p>
            Structured Terraform reduces manual errors, improves collaboration,
            and enables repeatable infrastructure deployments across environments.
          </p>
        </Section>

      </main>
    </div>
  );
}

function Section({ title, children, idx = 0 }: { title: string; children: React.ReactNode; idx?: number }) {
  const c = COLORS[idx % COLORS.length];
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-6 rounded-2xl border p-6 space-y-4"
      style={{ borderColor: c.border, background: c.bg }}
    >
      <h2 className="text-xl font-bold" style={{ color: c.tc }}>{title}</h2>
      <div className="text-slate-300 leading-7 space-y-4">{children}</div>
    </motion.section>
  );
}
