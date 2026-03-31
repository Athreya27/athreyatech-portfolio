"use client";

import { motion } from "framer-motion";

const COLORS = [
  { border: "rgba(99,102,241,0.45)",  bg: "linear-gradient(135deg,rgba(15,25,80,0.85),rgba(10,15,50,0.85))",   tc: "#818cf8" },
  { border: "rgba(6,182,212,0.45)",   bg: "linear-gradient(135deg,rgba(8,50,80,0.85),rgba(5,30,60,0.85))",    tc: "#22d3ee" },
  { border: "rgba(168,85,247,0.45)",  bg: "linear-gradient(135deg,rgba(46,8,84,0.85),rgba(20,5,50,0.85))",    tc: "#c084fc" },
  { border: "rgba(52,211,153,0.45)",  bg: "linear-gradient(135deg,rgba(6,54,30,0.85),rgba(5,30,20,0.85))",    tc: "#34d399" },
  { border: "rgba(251,146,60,0.45)",  bg: "linear-gradient(135deg,rgba(67,30,5,0.85),rgba(30,15,5,0.85))",    tc: "#fb923c" },
  { border: "rgba(248,113,113,0.45)", bg: "linear-gradient(135deg,rgba(69,10,10,0.85),rgba(35,5,5,0.85))",    tc: "#f87171" },
  { border: "rgba(251,191,36,0.45)",  bg: "linear-gradient(135deg,rgba(78,52,0,0.85),rgba(40,25,0,0.85))",    tc: "#fbbf24" },
  { border: "rgba(34,211,238,0.45)",  bg: "linear-gradient(135deg,rgba(5,50,60,0.85),rgba(3,30,40,0.85))",    tc: "#22d3ee" },
];

export default function CICDPipelineDesign() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* glow orbs */}
      <div className="pointer-events-none select-none" aria-hidden>
        <div className="fixed top-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[380px] rounded-full blur-[130px]"
          style={{ background: "rgba(99,102,241,0.2)", zIndex: 0 }} />
        <div className="fixed top-[35%] left-[-100px] w-[420px] h-[420px] rounded-full blur-[140px]"
          style={{ background: "rgba(6,182,212,0.15)", zIndex: 0 }} />
        <div className="fixed top-[60%] right-[-80px] w-[380px] h-[380px] rounded-full blur-[130px]"
          style={{ background: "rgba(168,85,247,0.14)", zIndex: 0 }} />
        <div className="fixed inset-0 opacity-[0.025]" style={{
          backgroundImage: "linear-gradient(#818cf8 1px,transparent 1px),linear-gradient(90deg,#818cf8 1px,transparent 1px)",
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
            borderColor: "rgba(99,102,241,0.4)",
            background: "linear-gradient(160deg,rgba(23,38,120,0.75) 0%,rgba(10,5,40,0.9) 60%,rgba(5,30,60,0.7) 100%)",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[160px] rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(99,102,241,0.22)" }} />
          <span className="inline-block border text-indigo-300 text-xs font-mono tracking-widest uppercase px-5 py-1.5 rounded-full mb-5"
            style={{ borderColor: "rgba(99,102,241,0.5)", background: "rgba(99,102,241,0.12)" }}>
            DevOps Architecture
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Designing Reliable{" "}
            <span style={{ background: "linear-gradient(90deg,#818cf8,#22d3ee,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              CI/CD Pipelines
            </span>
          </h1>
          <p className="text-slate-400 mt-3 text-sm">Automation with Safety Nets</p>
        </motion.div>

        <Section title="Core Philosophy: Deployment Safety Over Speed" idx={0}>
          <p>
            CI/CD is not about pushing code fast.
            It is about pushing code safely.
          </p>
          <p>
            A reliable pipeline validates, observes, and rolls back automatically
            when failure conditions are detected.
          </p>
        </Section>

        <Section title="Pipeline Architecture Overview" idx={1}>
          <p>
            Code Push → GitHub Actions → Docker Build → Amazon ECR →
            EKS Deployment → Health Validation → Log Inspection →
            Success or Rollback
          </p>
          <p>Each stage acts as a validation gate before promotion.</p>
        </Section>

        <Section title="Environment Mapping Strategy" idx={2}>
          <ul className="list-disc ml-6 space-y-2">
            <li>dev → development cluster</li>
            <li>qa → QA cluster</li>
            <li>release/* → staging</li>
            <li>tagged version → production</li>
          </ul>
          <p>This enforces controlled environment promotion.</p>
        </Section>

        <Section title="Containerization & Image Strategy" idx={3}>
          <p>
            Docker ensures build consistency. Images are tagged using
            commit SHA + timestamp for traceability.
          </p>
          <p>This enables rollback to exact working versions.</p>
        </Section>

        <Section title="Health Validation & Log Monitoring" idx={4}>
          <p>Deployment is not declared successful until:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Kubernetes pod reaches Running state</li>
            <li>No error patterns detected in logs</li>
            <li>Application startup confirmation detected</li>
          </ul>
          <p>Silent failures are more dangerous than visible crashes.</p>
        </Section>

        <Section title="Automated Rollback Strategy" idx={5}>
          <p>If validation fails:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Kubernetes rollout undo triggered</li>
            <li>Failed image removed from ECR</li>
            <li>Stakeholder notification sent</li>
          </ul>
          <p>This reduces Mean Time to Recovery (MTTR).</p>
        </Section>

        <Section title="Quality Gate Enforcement" idx={6}>
          <ul className="list-disc ml-6 space-y-2">
            <li>Commit message validation</li>
            <li>Python lint scanning (flake8)</li>
            <li>TypeScript ESLint validation</li>
            <li>PR approval requirement</li>
          </ul>
          <p>CI enforces engineering discipline before deployment.</p>
        </Section>

        <Section title="Operational Impact" idx={7}>
          <p>
            This pipeline design reduces human intervention, enforces
            repeatability, and protects production systems from unstable releases.
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
