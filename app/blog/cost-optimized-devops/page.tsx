"use client";

import { motion } from "framer-motion";

const COLORS = [
  { border: "rgba(52,211,153,0.45)",  bg: "linear-gradient(135deg,rgba(6,54,30,0.85),rgba(5,30,20,0.85))",    tc: "#34d399" },
  { border: "rgba(6,182,212,0.45)",   bg: "linear-gradient(135deg,rgba(8,50,80,0.85),rgba(5,30,60,0.85))",    tc: "#22d3ee" },
  { border: "rgba(99,102,241,0.45)",  bg: "linear-gradient(135deg,rgba(15,25,80,0.85),rgba(10,15,50,0.85))",   tc: "#818cf8" },
  { border: "rgba(251,146,60,0.45)",  bg: "linear-gradient(135deg,rgba(67,30,5,0.85),rgba(30,15,5,0.85))",    tc: "#fb923c" },
  { border: "rgba(168,85,247,0.45)",  bg: "linear-gradient(135deg,rgba(46,8,84,0.85),rgba(20,5,50,0.85))",    tc: "#c084fc" },
  { border: "rgba(251,191,36,0.45)",  bg: "linear-gradient(135deg,rgba(78,52,0,0.85),rgba(40,25,0,0.85))",    tc: "#fbbf24" },
];

export default function CostOptimizedDevOps() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* glow orbs */}
      <div className="pointer-events-none select-none" aria-hidden>
        <div className="fixed top-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[380px] rounded-full blur-[130px]"
          style={{ background: "rgba(52,211,153,0.18)", zIndex: 0 }} />
        <div className="fixed top-[40%] left-[-100px] w-[420px] h-[420px] rounded-full blur-[140px]"
          style={{ background: "rgba(6,182,212,0.14)", zIndex: 0 }} />
        <div className="fixed top-[65%] right-[-80px] w-[380px] h-[380px] rounded-full blur-[130px]"
          style={{ background: "rgba(99,102,241,0.14)", zIndex: 0 }} />
        <div className="fixed inset-0 opacity-[0.025]" style={{
          backgroundImage: "linear-gradient(#34d399 1px,transparent 1px),linear-gradient(90deg,#34d399 1px,transparent 1px)",
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
            borderColor: "rgba(52,211,153,0.4)",
            background: "linear-gradient(160deg,rgba(5,45,30,0.85) 0%,rgba(5,20,15,0.9) 60%,rgba(5,30,40,0.75) 100%)",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[160px] rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(52,211,153,0.2)" }} />
          <span className="inline-block border text-emerald-300 text-xs font-mono tracking-widest uppercase px-5 py-1.5 rounded-full mb-5"
            style={{ borderColor: "rgba(52,211,153,0.5)", background: "rgba(52,211,153,0.1)" }}>
            Cost Engineering
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Cost-Optimized{" "}
            <span style={{ background: "linear-gradient(90deg,#34d399,#22d3ee,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              DevOps Strategy
            </span>
          </h1>
          <p className="text-slate-400 mt-3 text-sm">Hybrid Deployment with On-Prem &amp; AWS EKS</p>
        </motion.div>

        <Section title="1. Context: The Real Problem Behind Cloud Bills" idx={0}>
          <p>
            As infrastructure scales, cloud cost compounds rapidly. Running
            Dev, QA, UAT, and Production entirely in AWS results in continuous
            compute, NAT gateway, and load balancer costs — even when environments
            are idle.
          </p>
          <p>
            Development environments rarely require production-grade scalability
            or 24/7 availability. Treating all environments equally introduces
            unnecessary financial overhead.
          </p>
          <p>This creates an opportunity for architectural optimization.</p>
        </Section>

        <Section title="2. Strategic Environment Distribution" idx={1}>
          <p>The environment model was redesigned as follows:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Dev → On-Prem Docker</li>
            <li>QA → On-Prem Docker</li>
            <li>UAT → AWS EKS</li>
            <li>Production → AWS EKS</li>
            <li>Container Registry → Amazon ECR</li>
          </ul>
          <p>
            This model separates experimentation workloads from
            revenue-critical systems while maintaining container parity.
          </p>
        </Section>

        <Section title="3. Architecture Overview" idx={2}>
          <p className="font-mono text-sm px-4 py-3 rounded-xl border border-slate-700/40"
            style={{ background: "rgba(0,0,0,0.3)" }}>
            Developer → Docker Build → Amazon ECR → EKS Cluster → ALB → End Users
          </p>
          <p>
            Dev &amp; QA environments operate locally using identical Docker images,
            ensuring consistency while eliminating unnecessary cloud compute cost.
          </p>
          <p>
            Production workloads leverage EKS auto-scaling and managed control
            plane reliability.
          </p>
        </Section>

        <Section title="4. Trade-Offs Considered" idx={3}>
          <ul className="list-disc ml-6 space-y-3">
            <li>Secrets management across hybrid environments</li>
            <li>Monitoring separation between cloud and on-prem</li>
            <li>Ensuring image version consistency</li>
            <li>Rollback safety validation</li>
            <li>Network configuration complexity</li>
          </ul>
          <p>
            Hybrid architectures reduce cost but increase operational complexity.
            Strict CI enforcement and container immutability mitigated these risks.
          </p>
        </Section>

        <Section title="5. Operational Impact" idx={4}>
          <p>
            Migrating Dev &amp; QA off-cloud reduced unnecessary AWS compute costs
            while preserving full production scalability and reliability.
          </p>
          <p>
            Infrastructure decisions became aligned with workload behavior rather
            than convenience.
          </p>
        </Section>

        <Section title="Architectural Rationale" idx={5}>
          <p>Cost optimization is not about reducing infrastructure.</p>
          <p>
            It is about intelligent workload placement, minimizing idle resource
            waste, and designing systems that fail safely without compromising
            scalability.
          </p>
          <p>
            Modern DevOps is system economics combined with reliability engineering.
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
