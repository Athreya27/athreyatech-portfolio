"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { GitCommit, Search, Package, Upload, Server, CheckCircle, RotateCcw } from "lucide-react";

/* ── body background override ── */
function usePageBackground(bg: string) {
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = bg;
    return () => { document.body.style.background = prev; };
  }, [bg]);
}

/* ── helpers ── */
function IC({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono bg-slate-800 text-cyan-300 px-1.5 py-0.5 rounded text-[13px] border border-slate-700/60">
      {children}
    </code>
  );
}

function CB({ filename, children }: { filename: string; children: string }) {
  return (
    <div className="rounded-xl my-4 border border-indigo-500/30" style={{ maxWidth: "100%", background: "linear-gradient(135deg, rgba(30,27,75,0.6) 0%, rgba(15,23,42,0.9) 100%)" }}>
      <div className="flex items-center gap-3 px-4 py-2.5 rounded-t-xl border-b border-indigo-500/20"
        style={{ background: "linear-gradient(90deg, rgba(49,46,129,0.7) 0%, rgba(15,23,42,0.8) 100%)" }}>
        <div className="flex gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[11px] font-mono text-indigo-300/80 truncate">{filename}</span>
      </div>
      <div className="overflow-x-auto rounded-b-xl" style={{ background: "linear-gradient(180deg, #0d1117 0%, #080c18 100%)" }}>
        <pre className="p-5 text-[13px] font-mono text-slate-300 leading-relaxed w-max min-w-full">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}

function Note({ children, c = "blue" }: { children: React.ReactNode; c?: string }) {
  const map: Record<string, string> = {
    blue:   "border-blue-400/60   bg-blue-400/8   text-blue-100",
    green:  "border-green-400/60  bg-green-400/8  text-green-100",
    purple: "border-purple-400/60 bg-purple-400/8 text-purple-100",
    yellow: "border-yellow-400/60 bg-yellow-400/8 text-yellow-100",
  };
  return (
    <div className={`border-l-4 ${map[c] ?? map.blue} rounded-r-xl pl-5 pr-4 py-3 text-sm my-4`}>
      {children}
    </div>
  );
}

/* colorful section card */
function S({
  title, tag, children,
  from, via, to, border, titleColor,
}: {
  title: string; tag?: string; children: React.ReactNode;
  from: string; via?: string; to: string; border: string; titleColor: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-8 rounded-2xl border p-6 space-y-4"
      style={{
        borderColor: border,
        background: via
          ? `linear-gradient(135deg, ${from}, ${via}, ${to})`
          : `linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      {tag && <span className="text-xs font-mono tracking-widest uppercase opacity-60" style={{ color: titleColor }}>{tag}</span>}
      <h2 className="text-xl font-bold" style={{ color: titleColor }}>{title}</h2>
      <div className="text-slate-300 leading-7 space-y-4">{children}</div>
    </motion.section>
  );
}

/* ── inline DevOps visuals ── */
function GitFlowVisual() {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-700/50 my-4"
      style={{ background: "rgba(10,15,35,0.8)" }}>
      <div className="px-4 pt-4 pb-2 text-[10px] font-mono text-slate-500 tracking-widest uppercase">
        Branch → Environment trigger map
      </div>
      <div className="p-4 space-y-2">
        {[
          { b: "push → dev/*",   e: "Dev Cluster",     bg: "rgba(37,99,235,0.3)",  bc: "#3b82f6" },
          { b: "push → qa",      e: "QA Cluster",      bg: "rgba(124,58,237,0.3)", bc: "#a855f7" },
          { b: "push → staging", e: "Staging",         bg: "rgba(234,88,12,0.3)",  bc: "#f97316" },
          { b: "tag  → v*.*.*",  e: "Production ✓",    bg: "rgba(22,163,74,0.3)",  bc: "#22c55e" },
        ].map(r => (
          <div key={r.b} className="flex items-center gap-3">
            <div className="flex-1 rounded-lg px-3 py-2 font-mono text-xs text-slate-300 border border-slate-700/50"
              style={{ background: "rgba(255,255,255,0.04)" }}>{r.b}</div>
            <span className="text-slate-500 font-bold shrink-0">→</span>
            <div className="flex-1 rounded-lg px-3 py-2 font-mono text-xs font-semibold text-white border"
              style={{ background: r.bg, borderColor: r.bc }}>{r.e}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DockerVisual() {
  return (
    <div className="rounded-xl border border-orange-500/30 p-4 my-4 space-y-3"
      style={{ background: "rgba(120,53,15,0.2)" }}>
      <p className="text-[10px] font-mono text-orange-400/70 tracking-widest uppercase">Docker → ECR pipeline</p>
      <div className="flex items-center gap-2 flex-wrap">
        {[
          { l: "Source",   s: "FastAPI",          c: "#94a3b8", bc: "rgba(148,163,184,0.3)" },
          { l: "Build",    s: "python:3.10-slim", c: "#22d3ee", bc: "rgba(34,211,238,0.3)" },
          { l: "Tag",      s: "sha+timestamp",    c: "#60a5fa", bc: "rgba(96,165,250,0.3)" },
          { l: "ECR Push", s: "ap-south-1",       c: "#fb923c", bc: "rgba(251,146,60,0.3)" },
        ].map((b, i, a) => (
          <div key={b.l} className="flex items-center gap-2">
            <div className="rounded-lg border px-3 py-2 text-center min-w-[90px]"
              style={{ borderColor: b.bc, background: `${b.bc}` }}>
              <p className="text-xs font-semibold" style={{ color: b.c }}>{b.l}</p>
              <p className="text-[10px] text-slate-500 mt-0.5 font-mono">{b.s}</p>
            </div>
            {i < a.length - 1 && <span className="text-slate-600 font-bold text-sm shrink-0">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function HealthVisual() {
  return (
    <div className="rounded-xl border border-green-500/30 p-4 my-4"
      style={{ background: "rgba(6,78,59,0.2)" }}>
      <p className="text-[10px] font-mono text-green-400/70 tracking-widest uppercase mb-3">Health verification logic</p>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { n: "1", t: "Pod Phase", d: "phase == Running",   c: "#60a5fa", bg: "rgba(37,99,235,0.2)",  bc: "rgba(96,165,250,0.4)" },
          { n: "2", t: "App Logs",  d: '"startup complete"', c: "#c084fc", bg: "rgba(124,58,237,0.2)", bc: "rgba(192,132,252,0.4)" },
          { n: "3", t: "No Errors", d: 'grep error|exception',c: "#4ade80", bg: "rgba(22,163,74,0.2)",  bc: "rgba(74,222,128,0.4)" },
        ].map(s => (
          <div key={s.n} className="rounded-lg border p-3 text-center"
            style={{ background: s.bg, borderColor: s.bc }}>
            <div className="text-base font-black opacity-40 mb-1" style={{ color: s.c }}>{s.n}</div>
            <p className="text-xs font-semibold text-white">{s.t}</p>
            <p className="text-[10px] text-slate-400 mt-1 font-mono leading-tight">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="flex-1 rounded-lg border border-green-500/40 px-3 py-1.5 text-xs font-semibold text-green-300 text-center"
          style={{ background: "rgba(22,163,74,0.2)" }}>ALL PASS → Success ✓</div>
        <div className="flex-1 rounded-lg border border-red-500/40 px-3 py-1.5 text-xs font-semibold text-red-300 text-center"
          style={{ background: "rgba(220,38,38,0.2)" }}>ANY FAIL → Rollback ✗</div>
      </div>
    </div>
  );
}

function RollbackVisual() {
  return (
    <div className="rounded-xl border border-red-500/30 p-4 my-4 space-y-2"
      style={{ background: "rgba(127,29,29,0.2)" }}>
      <p className="text-[10px] font-mono text-red-400/70 tracking-widest uppercase mb-2">Rollback sequence</p>
      {[
        { n: "01", t: "Delete bad ECR image",        cmd: "aws ecr batch-delete-image ...",      c: "#f87171", bg: "rgba(220,38,38,0.2)",   bc: "rgba(248,113,113,0.3)" },
        { n: "02", t: "Kubernetes rollout undo",     cmd: "kubectl rollout undo deployment/...", c: "#fb923c", bg: "rgba(194,65,12,0.2)",   bc: "rgba(251,146,60,0.3)" },
        { n: "03", t: "Send SES alert to team",      cmd: "aws ses send-email ...",              c: "#fbbf24", bg: "rgba(161,98,7,0.2)",    bc: "rgba(251,191,36,0.3)" },
      ].map(r => (
        <div key={r.n} className="rounded-lg border px-4 py-2.5 flex gap-3 items-start"
          style={{ background: r.bg, borderColor: r.bc }}>
          <span className="font-mono text-xs font-black opacity-40 shrink-0 mt-0.5" style={{ color: r.c }}>{r.n}</span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">{r.t}</p>
            <p className="text-[11px] font-mono text-slate-400 truncate">{r.cmd}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ══════════ MAIN PAGE ══════════ */
export default function ReducedDeploymentTime() {
  usePageBackground(
    "linear-gradient(160deg, #060d20 0%, #0a0420 40%, #060d20 80%, #071520 100%)"
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* visible glow orbs */}
      <div className="pointer-events-none select-none" aria-hidden>
        <div className="fixed top-[-80px] left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full blur-[130px]"
          style={{ background: "rgba(59,130,246,0.22)", zIndex: 0 }} />
        <div className="fixed top-[30%] left-[-100px] w-[450px] h-[450px] rounded-full blur-[140px]"
          style={{ background: "rgba(124,58,237,0.18)", zIndex: 0 }} />
        <div className="fixed top-[55%] right-[-80px] w-[400px] h-[400px] rounded-full blur-[130px]"
          style={{ background: "rgba(6,182,212,0.14)", zIndex: 0 }} />
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full blur-[110px]"
          style={{ background: "rgba(16,185,129,0.14)", zIndex: 0 }} />
        {/* grid */}
        <div className="fixed inset-0 opacity-[0.035]" style={{
          backgroundImage: "linear-gradient(#60a5fa 1px,transparent 1px),linear-gradient(90deg,#60a5fa 1px,transparent 1px)",
          backgroundSize: "48px 48px", zIndex: 0,
        }} />
      </div>

      <main className="relative max-w-3xl mx-auto py-20 px-4" style={{ zIndex: 1 }}>

        {/* ═══ HERO ═══ */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center rounded-3xl border p-10 overflow-hidden relative"
          style={{
            borderColor: "rgba(99,102,241,0.35)",
            background: "linear-gradient(160deg, rgba(23,38,120,0.7) 0%, rgba(10,5,40,0.85) 60%, rgba(5,30,60,0.7) 100%)",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[160px] rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(99,102,241,0.2)" }} />

          <span className="inline-block border text-blue-300 text-xs font-mono tracking-widest uppercase px-5 py-1.5 rounded-full mb-6"
            style={{ borderColor: "rgba(99,102,241,0.5)", background: "rgba(99,102,241,0.12)" }}>
            Real-World Case Study
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
            How I Reduced Deployment Time by{" "}
            <span style={{ background: "linear-gradient(90deg,#60a5fa,#22d3ee,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              50%
            </span>
            <br />Using GitHub Actions + Docker
          </h1>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-slate-400 mb-8">
            <span className="text-slate-300 font-medium">Josyula Athreya Sharma</span>
            <span className="text-slate-600">·</span><span>Ilumina Health Pvt. Ltd.</span>
            <span className="text-slate-600">·</span><span>March 2026</span>
            <span className="text-slate-600">·</span><span>8 min read</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }}>
            {[
              { num: "50%",   label: "Faster\nDeploys",  color: "#60a5fa", glow: "rgba(96,165,250,0.25)" },
              { num: "60%",   label: "Latency\nReduced", color: "#c084fc", glow: "rgba(192,132,252,0.25)" },
              { num: "99.9%", label: "Uptime\nAchieved", color: "#34d399", glow: "rgba(52,211,153,0.25)" },
              { num: "0",     label: "Manual\nRollbacks", color: "#fbbf24", glow: "rgba(251,191,36,0.25)" },
            ].map(s => (
              <div key={s.label} className="rounded-xl p-4 text-center border border-white/10"
                style={{ background: s.glow, boxShadow: `0 0 24px ${s.glow}` }}>
                <div className="text-2xl font-extrabold mb-0.5" style={{ color: s.color }}>{s.num}</div>
                <div className="text-[10px] text-slate-400 leading-tight whitespace-pre-line">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ═══ INTRODUCTION ═══ */}
        <S title="The Problem We Were Facing" tag="// Introduction"
          from="rgba(15,25,80,0.85)" via="rgba(20,10,60,0.75)" to="rgba(10,15,50,0.85)"
          border="rgba(99,102,241,0.45)" titleColor="#818cf8">
          <p>
            When I joined Ilumina Health (November 2024), every release to our WhatsApp
            healthcare chatbot backend was slow and anxiety-inducing — manual steps,
            inconsistent environments, zero automatic rollback on failure.
          </p>
          <Note c="blue">
            "The biggest risk in software delivery isn't bugs — it's slow, unpredictable
            deployments that make teams afraid to release."
          </Note>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="rounded-xl border p-4" style={{ borderColor: "rgba(239,68,68,0.4)", background: "rgba(127,29,29,0.3)" }}>
              <p className="text-xs font-mono text-red-400 tracking-widest uppercase mb-3">✗ Before</p>
              <ul className="space-y-1.5 text-sm text-slate-300">
                {["Manual Docker builds locally","No consistent image tagging","Manual kubectl apply","No automatic rollback","Zero deployment visibility","Env configs mixed up"].map(i => (
                  <li key={i} className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border p-4" style={{ borderColor: "rgba(34,197,94,0.4)", background: "rgba(6,78,59,0.3)" }}>
              <p className="text-xs font-mono text-green-400 tracking-widest uppercase mb-3">✓ After</p>
              <ul className="space-y-1.5 text-sm text-slate-300">
                {["Fully automated build → deploy","SHA + timestamp image tags","Auto-deploy on push / tag","Automatic rollback + SES alert","GitHub Actions step summaries","Per-env secrets & configs"].map(i => (
                  <li key={i} className="flex gap-2"><span className="text-green-400 shrink-0">✓</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </S>

        {/* ═══ ARCHITECTURE ═══ */}
        <S title="The Complete Pipeline Design" tag="// Architecture"
          from="rgba(8,50,80,0.85)" to="rgba(5,30,60,0.85)"
          border="rgba(6,182,212,0.45)" titleColor="#22d3ee">
          <p>Multi-stage GitHub Actions workflow: validation → build → deploy → health check → rollback.</p>

          {/* pipeline icons */}
          <div className="rounded-xl overflow-hidden border border-slate-700/50 p-5"
            style={{ background: "rgba(5,15,35,0.9)" }}>
            <p className="text-[10px] font-mono text-slate-600 tracking-widest uppercase mb-5">CI/CD Pipeline Flow</p>
            <div className="overflow-x-auto">
              <div className="flex items-start gap-0 w-max">
                {[
                  { icon: <GitCommit size={17} />,   label: "Commit\nValidate",   c: "rgba(34,211,238,0.15)",  bc: "rgba(34,211,238,0.5)",  tc: "#22d3ee" },
                  { icon: <Search size={17} />,      label: "Lint\nFlake8",       c: "rgba(168,85,247,0.15)", bc: "rgba(168,85,247,0.5)", tc: "#a855f7" },
                  { icon: <Package size={17} />,     label: "Docker\nBuild",      c: "rgba(96,165,250,0.15)", bc: "rgba(96,165,250,0.5)", tc: "#60a5fa" },
                  { icon: <Upload size={17} />,      label: "Push to\nECR",       c: "rgba(251,146,60,0.15)", bc: "rgba(251,146,60,0.5)", tc: "#fb923c" },
                  { icon: <Server size={17} />,      label: "EKS\nDeploy",        c: "rgba(52,211,153,0.15)", bc: "rgba(52,211,153,0.5)", tc: "#34d399" },
                  { icon: <CheckCircle size={17} />, label: "Health\nCheck",      c: "rgba(74,222,128,0.15)", bc: "rgba(74,222,128,0.5)", tc: "#4ade80" },
                  { icon: <RotateCcw size={17} />,   label: "Rollback\n(if fail)", c: "rgba(248,113,113,0.15)",bc: "rgba(248,113,113,0.5)",tc: "#f87171" },
                ].map((step, i, arr) => (
                  <div key={step.label} className="flex items-center">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-10 h-10 rounded-xl border flex items-center justify-center"
                        style={{ background: step.c, borderColor: step.bc, color: step.tc }}>
                        {step.icon}
                      </div>
                      <div className="text-[9px] font-mono text-center whitespace-pre-line leading-tight max-w-[52px]"
                        style={{ color: step.tc, opacity: 0.8 }}>{step.label}</div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex items-center mb-5 mx-0.5">
                        <div className="w-4 h-px" style={{ background: "rgba(96,165,250,0.5)" }} />
                        <div className="border-l-[4px] border-y-[3px] border-y-transparent"
                          style={{ borderLeftColor: "rgba(96,165,250,0.7)" }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <GitFlowVisual />
        </S>

        {/* ═══ STEP 1 ═══ */}
        <S title="Step 1 — Commit Validation + Code Quality" tag="// Gate the Pipeline"
          from="rgba(46,8,84,0.85)" to="rgba(20,5,50,0.85)"
          border="rgba(168,85,247,0.45)" titleColor="#c084fc">
          <p>Two mandatory gates on every PR before any code reaches an environment:</p>
          <h3 className="text-sm font-bold text-purple-300">1a. Commit Message Validation</h3>
          <p>Every commit must start with <IC>MTP-&lt;number&gt;:</IC> — enforces JIRA traceability.</p>
          <CB filename="validate-commits.yml">{`- name: Validate commit messages
  run: |
    commits=$(git log $TARGET_BRANCH..HEAD --pretty=format:"%s")
    while IFS= read -r msg; do
      [[ $msg =~ ^Merge ]] && continue
      if [[ ! $msg =~ ^MTP-[0-9]+: ]]; then
        echo "✗ '$msg' must start with MTP-<number>:"
        exit 1
      fi
    done <<< "$commits"`}</CB>
          <h3 className="text-sm font-bold text-purple-300">1b. Flake8 on diff only (not full repo)</h3>
          <CB filename="pylint_validation.yml">{`- name: Get changed Python files
  run: |
    echo "pyfiles=$(git diff --name-only --diff-filter=ACMRT \\
      origin/\${{ github.event.pull_request.base.ref }} HEAD \\
      -- '*.py' | uniq | jq -R -s -c 'split("\\n")[:-1]')" >> $GITHUB_OUTPUT

- name: Run flake8
  if: \${{ needs.pythonFiles.outputs.pyfiles != '' }}
  run: python3.8 -m flake8 --max-line-length=160 \\
      --filename=\${{ needs.pythonFiles.outputs.pyfiles }}`}</CB>
          <Note c="purple">Linting only diff&apos;d files cut CI time by ~60% and gives faster per-change feedback.</Note>
        </S>

        {/* ═══ STEP 2 ═══ */}
        <S title="Step 2 — Docker Build: Slim, Fast, Reproducible" tag="// Containerization"
          from="rgba(67,30,5,0.85)" to="rgba(30,15,5,0.85)"
          border="rgba(251,146,60,0.45)" titleColor="#fb923c">
          <p>Built on <IC>python:3.10-slim</IC> — same image every environment, config injected via K8s secrets.</p>
          <DockerVisual />
          <CB filename="Dockerfile">{`FROM python:3.10-slim
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1
WORKDIR /.
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8001
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8001"]`}</CB>
          <h3 className="text-sm font-bold text-orange-300">SHA + Timestamp Image Tagging</h3>
          <p>Replaced <IC>:latest</IC> with unique tags — every image traceable, rollbacks instant.</p>
          <CB filename="build-deploy.yml">{`- name: Generate IMAGE_TAG
  run: |
    TAG_INPUT=\${{ github.event.inputs.tag || 'auto' }}
    echo "image_tag=\${{ github.sha }}-\${TAG_INPUT}-$(date +'%Y%m%d%H%M%S')" \\
      >> $GITHUB_OUTPUT

- name: Tag and Push to ECR
  run: |
    docker tag \${{ vars.REPO }}:latest \\
      \${{ secrets.ACCOUNT_ID }}.dkr.ecr.ap-south-1.amazonaws.com/\${{ vars.REPO }}:\${IMAGE_TAG}
    docker push \${{ secrets.ACCOUNT_ID }}.dkr.ecr.ap-south-1.amazonaws.com/\${{ vars.REPO }}:\${IMAGE_TAG}`}</CB>
        </S>

        {/* ═══ STEP 3 ═══ */}
        <S title="Step 3 — EKS Deployment: Zero-Touch" tag="// Kubernetes Deploy"
          from="rgba(6,54,30,0.85)" to="rgba(5,30,20,0.85)"
          border="rgba(52,211,153,0.45)" titleColor="#34d399">
          <p>Uses <IC>envsubst</IC> to inject image tag + secrets into K8s manifests — no hardcoded values.</p>
          <CB filename="deployment-onboarding-dev.yml">{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: onboarding-backend-dev
spec:
  template:
    metadata:
      annotations:
        image-id: \${IMAGE_TAG}
    spec:
      containers:
      - image: 654654486194.dkr.ecr.ap-south-1.amazonaws.com/onboarding-backend-dev:\${IMAGE_TAG}
        envFrom:
          - secretRef:
              name: \${ENV_SECRET}
      nodeSelector:
        alpha.eksctl.io/nodegroup-name: ilumina-portal-dev`}</CB>
          <h3 className="text-sm font-bold text-green-300">Pod Health Verification</h3>
          <HealthVisual />
          <CB filename="health-check.sh">{`# 1. Poll until Running
while true; do
  STATUS=$(kubectl get pod "$POD_NAME" -o jsonpath='{.status.phase}')
  [ "$STATUS" == "Running" ] && break
  sleep $SLEEP_INTERVAL
done
# 2. Check app logs
if echo "$LOGS" | grep -q "Application startup complete" && \\
   ! echo "$LOGS" | grep -Eiq "error|exception"; then
  echo "✓ Healthy — deploy complete"
else
  echo "✗ Unhealthy — triggering rollback"
fi`}</CB>
          <Note c="green">
            <strong>Game-changer:</strong> Pod &quot;Running&quot; ≠ app working. Log-level checks
            catch silent failures Kubernetes alone never would.
          </Note>
        </S>

        {/* ═══ STEP 4 ═══ */}
        <S title="Step 4 — Automatic Rollback + SES Alert" tag="// Failure Recovery"
          from="rgba(69,10,10,0.85)" to="rgba(35,5,5,0.85)"
          border="rgba(248,113,113,0.45)" titleColor="#f87171">
          <p>Health check fails → pipeline self-heals automatically, no human required.</p>
          <RollbackVisual />
          <CB filename="rollback.yml">{`- name: ROLLBACK TRIGGERED
  if: \${{ steps.health.outputs.status == 'failure' }}
  run: |
    aws ecr batch-delete-image \\
      --repository-name $REPOSITORY --image-ids imageTag=\${IMAGE_TAG}
    kubectl rollout undo deployment/\${{ vars.APP_NAME }}
    aws ses send-email \\
      --from "no-reply@ilumina.health" \\
      --destination "ToAddresses=tech@ilumina.health" \\
      --message "$MESSAGE"
    exit 1`}</CB>
        </S>

        {/* ═══ RESULTS ═══ */}
        <S title="The Numbers After Implementation" tag="// Results"
          from="rgba(8,40,70,0.85)" via="rgba(20,8,60,0.75)" to="rgba(5,40,30,0.85)"
          border="rgba(99,102,241,0.4)" titleColor="#818cf8">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }}>
            {[
              { num: "50%",   label: "Deploy time",  color: "#60a5fa", g: "rgba(96,165,250,0.2)" },
              { num: "60%",   label: "Latency drop", color: "#c084fc", g: "rgba(192,132,252,0.2)" },
              { num: "99.9%", label: "Uptime",       color: "#34d399", g: "rgba(52,211,153,0.2)" },
              { num: "0",     label: "Rollbacks",    color: "#fbbf24", g: "rgba(251,191,36,0.2)" },
            ].map(r => (
              <div key={r.label} className="rounded-xl border border-white/10 p-4 text-center"
                style={{ background: r.g, boxShadow: `0 0 18px ${r.g}` }}>
                <div className="text-2xl font-extrabold" style={{ color: r.color }}>{r.num}</div>
                <div className="text-[11px] text-slate-400 mt-1">{r.label}</div>
              </div>
            ))}
          </div>
          <div className="relative pl-7 space-y-4 mt-2">
            <div className="absolute left-1.5 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, #60a5fa, #a855f7, #34d399)" }} />
            {[
              { t: "Diff-based linting",           d: "Flake8 only on changed files → ~60% faster CI per PR.",           dot: "#60a5fa" },
              { t: "SHA + timestamp image tags",    d: "Every image uniquely identifiable → instant reliable rollbacks.",  dot: "#c084fc" },
              { t: "Log-level health checks",       d: '"startup complete" in logs catches silent failures.',              dot: "#22d3ee" },
              { t: "Automated rollback + cleanup",  d: "Bad images deleted from ECR on failure automatically.",            dot: "#fb923c" },
              { t: "Environment-aware workflows",   d: "One workflow for dev / QA / staging / prod via branch conditions.",dot: "#34d399" },
            ].map(item => (
              <div key={item.t} className="relative">
                <div className="absolute -left-5 top-1.5 w-2.5 h-2.5 rounded-full shadow-lg"
                  style={{ background: item.dot, boxShadow: `0 0 8px ${item.dot}` }} />
                <p className="text-white font-semibold text-sm">{item.t}</p>
                <p className="text-xs text-slate-400">{item.d}</p>
              </div>
            ))}
          </div>
        </S>

        {/* ═══ LESSONS ═══ */}
        <S title="3 Things I'd Tell My Past Self" tag="// Lessons Learned"
          from="rgba(30,10,70,0.85)" to="rgba(10,8,40,0.85)"
          border="rgba(167,139,250,0.45)" titleColor="#a78bfa">
          {[
            { n: "01", t: '"Running" ≠ "Working"',        d: 'Pod Running ≠ app working. Always check logs for "Application startup complete".', c: "#60a5fa", bg: "rgba(37,99,235,0.2)", bc: "rgba(96,165,250,0.35)" },
            { n: "02", t: "Image Tagging Matters",         d: ":latest makes rollbacks unreliable. SHA + timestamp tags from day one.",           c: "#c084fc", bg: "rgba(124,58,237,0.2)", bc: "rgba(192,132,252,0.35)" },
            { n: "03", t: "Automate the Failure Path",     d: "Real DevOps = automating recovery (rollback + alerts + cleanup), not just deploys.",c: "#22d3ee", bg: "rgba(8,145,178,0.2)", bc: "rgba(34,211,238,0.35)" },
          ].map(l => (
            <div key={l.n} className="rounded-xl border p-5 flex gap-4"
              style={{ background: l.bg, borderColor: l.bc }}>
              <span className="text-2xl font-black opacity-30 shrink-0" style={{ color: l.c }}>{l.n}</span>
              <div>
                <p className="text-white font-semibold mb-1">{l.t}</p>
                <p className="text-sm text-slate-400">{l.d}</p>
              </div>
            </div>
          ))}
          <Note c="yellow">
            "A CI/CD pipeline isn&apos;t done when it can deploy. It&apos;s done when it can
            recover from failure automatically."
          </Note>
        </S>

      </main>
    </div>
  );
}
