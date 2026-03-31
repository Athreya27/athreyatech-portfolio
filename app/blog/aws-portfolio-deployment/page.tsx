"use client";

import { motion } from "framer-motion";

const COLORS = [
  { border: "rgba(6,182,212,0.45)",   bg: "linear-gradient(135deg,rgba(8,50,80,0.85),rgba(5,30,60,0.85))",    tc: "#22d3ee" },
  { border: "rgba(99,102,241,0.45)",  bg: "linear-gradient(135deg,rgba(15,25,80,0.85),rgba(10,15,50,0.85))",   tc: "#818cf8" },
  { border: "rgba(52,211,153,0.45)",  bg: "linear-gradient(135deg,rgba(6,54,30,0.85),rgba(5,30,20,0.85))",    tc: "#34d399" },
  { border: "rgba(168,85,247,0.45)",  bg: "linear-gradient(135deg,rgba(46,8,84,0.85),rgba(20,5,50,0.85))",    tc: "#c084fc" },
  { border: "rgba(251,146,60,0.45)",  bg: "linear-gradient(135deg,rgba(67,30,5,0.85),rgba(30,15,5,0.85))",    tc: "#fb923c" },
  { border: "rgba(248,113,113,0.45)", bg: "linear-gradient(135deg,rgba(69,10,10,0.85),rgba(35,5,5,0.85))",    tc: "#f87171" },
  { border: "rgba(34,211,238,0.45)",  bg: "linear-gradient(135deg,rgba(5,50,60,0.85),rgba(3,30,40,0.85))",    tc: "#22d3ee" },
];

export default function AWSDeploymentBlog() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* glow orbs */}
      <div className="pointer-events-none select-none" aria-hidden>
        <div className="fixed top-[-80px] left-1/2 -translate-x-1/2 w-[800px] h-[380px] rounded-full blur-[130px]"
          style={{ background: "rgba(6,182,212,0.2)", zIndex: 0 }} />
        <div className="fixed top-[40%] left-[-100px] w-[420px] h-[420px] rounded-full blur-[140px]"
          style={{ background: "rgba(99,102,241,0.15)", zIndex: 0 }} />
        <div className="fixed top-[65%] right-[-80px] w-[380px] h-[380px] rounded-full blur-[130px]"
          style={{ background: "rgba(52,211,153,0.14)", zIndex: 0 }} />
        <div className="fixed inset-0 opacity-[0.025]" style={{
          backgroundImage: "linear-gradient(#22d3ee 1px,transparent 1px),linear-gradient(90deg,#22d3ee 1px,transparent 1px)",
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
            borderColor: "rgba(6,182,212,0.4)",
            background: "linear-gradient(160deg,rgba(5,40,70,0.85) 0%,rgba(5,15,40,0.9) 60%,rgba(5,30,50,0.75) 100%)",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[160px] rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(6,182,212,0.22)" }} />
          <span className="inline-block border text-cyan-300 text-xs font-mono tracking-widest uppercase px-5 py-1.5 rounded-full mb-5"
            style={{ borderColor: "rgba(6,182,212,0.5)", background: "rgba(6,182,212,0.1)" }}>
            AWS Architecture
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Deploying My Portfolio on{" "}
            <span style={{ background: "linear-gradient(90deg,#22d3ee,#60a5fa,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              AWS
            </span>
          </h1>
          <p className="text-slate-400 mt-3 text-sm">Production-Grade Static Architecture</p>
        </motion.div>

        <Section title="Problem Statement" idx={0}>
          <p>
            Even though a portfolio website is relatively simple, deployment
            decisions still define its scalability, security posture, and cost profile.
            The goal was to deploy this application using a production-aligned
            architecture rather than a quick hosting solution.
          </p>
          <p>The system needed to be:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Globally accessible with low latency</li>
            <li>Secure by default</li>
            <li>Cost-efficient (no idle compute)</li>
            <li>Fully automated via CI/CD</li>
            <li>Aligned with real-world DevOps practices</li>
          </ul>
        </Section>

        <Section title="Architecture Overview" idx={1}>
          <p>Client Request → Route53 → CloudFront CDN → Private S3 Bucket</p>
          <p>CI/CD Flow → GitHub Actions → Build → S3 Upload → CloudFront Cache Invalidation</p>
          <p>
            The architecture eliminates direct public access to S3. Instead,
            CloudFront acts as the secure distribution layer using Origin Access
            Control (OAC). This ensures the storage layer remains private while
            maintaining global accessibility.
          </p>
        </Section>

        <Section title="Domain & DNS Management Strategy (GoDaddy + Route53)" idx={2}>
          <p>
            The domain was registered using GoDaddy as the external domain registrar.
            DNS routing, however, is fully managed inside AWS Route53.
          </p>
          <p>This reflects a common real-world production setup:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Domain purchased via GoDaddy</li>
            <li>Hosted zone created in AWS Route53</li>
            <li>Nameservers updated in GoDaddy to Route53 nameservers</li>
            <li>Route53 Alias record pointing to CloudFront</li>
            <li>SSL certificate provisioned via AWS ACM</li>
          </ul>
          <p>
            Separating the registrar and DNS management layer provides flexibility
            and tighter integration with AWS services.
          </p>
        </Section>

        <Section title="Why S3 + CloudFront Instead of EC2?" idx={3}>
          <p>
            Hosting on EC2 would introduce unnecessary compute overhead and
            persistent infrastructure cost.
          </p>
          <p>Since the application is static, S3 static hosting combined with CloudFront provides:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>No always-running server cost</li>
            <li>Automatic scaling</li>
            <li>Edge-level caching</li>
            <li>DDoS mitigation via AWS Shield</li>
            <li>Global distribution with minimal latency</li>
          </ul>
        </Section>

        <Section title="Security Considerations" idx={4}>
          <ul className="list-disc ml-6 space-y-2">
            <li>S3 public access fully blocked</li>
            <li>CloudFront Origin Access Control enforced</li>
            <li>HTTPS-only access via ACM certificate</li>
            <li>Least-privilege IAM deployment user</li>
            <li>GitHub secrets encrypted</li>
          </ul>
          <p>
            Even for a personal project, infrastructure should be treated
            as production-grade. Security discipline builds operational maturity.
          </p>
        </Section>

        <Section title="CI/CD Automation" idx={5}>
          <p>The deployment pipeline is fully automated using GitHub Actions.</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Triggered on code push</li>
            <li>Builds production-ready bundle</li>
            <li>Uploads static assets to S3</li>
            <li>Invalidates CloudFront cache</li>
          </ul>
          <p>This eliminates manual deployment risk and ensures repeatability.</p>
        </Section>

        <Section title="Outcome & Operational Impact" idx={6}>
          <p>The final system delivers:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Zero idle compute cost</li>
            <li>Global CDN-backed performance</li>
            <li>Secure private storage layer</li>
            <li>Automated and repeatable deployments</li>
            <li>Production-aligned infrastructure design</li>
          </ul>
          <p>
            Small systems deserve clean architecture. Operational discipline
            should not depend on project size.
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
