import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  X,
  Download,
  Zap,
  User,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";


const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Firebase",
  "PostgreSQL",
  "MongoDB",

  "Docker",

  "Vercel",
  "Tailwind CSS",
  "Prisma",

  "Express.js",
  "Figma",
  "Git",
];

const coreSkills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
];

const DOT_POSITIONS = [
  { left: "11%", top: "9%" },
  { left: "22%", top: "22%" },
  { left: "8%", top: "44%" },
  { left: "15%", top: "62%" },
  { left: "6%", top: "80%" },
  { left: "30%", top: "7%" },
  { left: "48%", top: "5%" },
  { left: "72%", top: "8%" },
  { left: "88%", top: "14%" },
  { left: "94%", top: "35%" },
  { left: "91%", top: "58%" },
  { left: "85%", top: "76%" },
  { left: "78%", top: "20%" },
  { left: "62%", top: "12%" },
  { left: "55%", top: "75%" },
  { left: "40%", top: "88%" },
  { left: "25%", top: "82%" },
  { left: "68%", top: "70%" },
];

export const Hero = () => {
    const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/Resume.pdf"; 
  link.download = "Saiful_Resume.pdf"; 
  link.click();
};
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Left Column - Text Content ── */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Available for Hire
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Let’s <span className="text-primary glow-text">Build</span>
                <br />
                Something
                <br />
                <span className="font-serif italic font-normal text-white">
                  Amazing
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Saiful Islam a Full Stack Developer passionate about
                React, Next.js, and TypeScript. I craft web applications that
                are not just functional, but delightful to use.
              </p>
            </div>

            {/* CTAs */}
            <div className="  flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button className="!text-black text-semibold " size="lg">
                  Let's Talk <ArrowRight className=" text-black w-5 h-5" />
                </Button>
              </a>
             <AnimatedBorderButton onClick={handleDownload}>
  <Download className="w-5 h-5" />
  Download CV
</AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              {[
                { icon: Github, href: "https://github.com/Saiful-104" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/saiful-islam-80bb51317/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B2LBg4INOQoKlH9%2BckC2v4w%3D%3D",
                },
                { icon: X, href: "https://x.com/Saiful_104" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right Column - Profile Card ── */}
          <div className="animate-fade-in animation-delay-300 flex justify-center">
            {/* Inline styles for card-specific animations not in Tailwind */}
            <style>{`
              @keyframes floatDot {
                0%, 100% { opacity: .4; transform: translateY(0) scale(1); }
                50%       { opacity: .9; transform: translateY(-5px) scale(1.2); }
              }
              @keyframes glowBreath {
                0%, 100% { opacity: .18; }
                50%       { opacity: .32; }
              }
              @keyframes cardFloat {
                0%, 100% { transform: translateY(0px); }
                50%       { transform: translateY(-8px); }
              }
              .profile-card { animation: cardFloat 6s ease-in-out infinite; }
              .skill-pill-card { transition: all .18s; }
              .skill-pill-card:hover {
                background: rgba(32,178,166,.15) !important;
                border-color: rgba(32,178,166,.4) !important;
                color: #20B2A6 !important;
              }
              .stat-card-inner { transition: all .18s; }
              .stat-card-inner:hover {
                background: rgba(32,178,166,.07) !important;
                border-color: rgba(32,178,166,.28) !important;
              }
            `}</style>

            <div
              className="profile-card"
              style={{
                width: "336px",
                borderRadius: "22px",
                background:
                  "linear-gradient(158deg,#112d2b 0%,#0e2826 60%,#0b201f 100%)",
                border: "1px solid rgba(32,178,166,.22)",
                boxShadow:
                  "0 0 0 1px rgba(0,0,0,.45), 0 24px 64px rgba(0,0,0,.55), 0 0 50px rgba(32,178,166,.08)",
                overflow: "hidden",
              }}
            >
              {/* ── Image Block ── */}
              <div
                style={{
                  position: "relative",
                  height: "308px",
                  background:
                    "linear-gradient(175deg,#0d2927 0%,#0e2d2b 50%,#09201f 100%)",
                  overflow: "hidden",
                }}
              >
                {/* Floating teal dots inside card */}
                {DOT_POSITIONS.map((d, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      left: d.left,
                      top: d.top,
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#20B2A6",
                      animation: `floatDot ${3 + (i % 5) * 0.5}s ${(
                        i * 0.28
                      ).toFixed(1)}s ease-in-out infinite`,
                      pointerEvents: "none",
                    }}
                  />
                ))}

                {/* Bottom radial glow */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "270px",
                    height: "170px",
                    background:
                      "radial-gradient(ellipse,rgba(32,178,166,.24) 0%,transparent 68%)",
                    animation: "glowBreath 4s ease-in-out infinite",
                    pointerEvents: "none",
                  }}
                />

                {/* Profile photo — swap src="/profile.png" for your real image */}
                <img
                  src="/profile.png"
                  alt="Mijanur Rahman Oli"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100%",
                    height: "130%",
                    objectFit: "cover",
                    objectPosition: "center 15%",
                  }}
                />

                {/* Name + title overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "55px 18px 15px",
                    background:
                      "linear-gradient(to top,rgba(9,30,29,.97) 0%,transparent 100%)",
                  }}
                >
                  <h2
                    style={{
                      margin: 0,
                      color: "#fff",
                      fontSize: "19px",
                      fontWeight: "700",
                      lineHeight: 1.2,
                    }}
                  >
                    Saiful Islam
                  </h2>
                  <p
                    style={{
                      margin: "4px 0 0",
                      color: "#20B2A6",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    Full Stack Developer
                  </p>
                </div>
              </div>

              {/* ── Stat Cards ── */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  padding: "14px 14px 0",
                }}
              >
                {[
                  {
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#20B2A6"
                      >
                        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
                      </svg>
                    ),
                    label: "Fast Delivery",
                    sub: "Agile workflow",
                  },
                  {
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="8"
                          r="4"
                          stroke="#20B2A6"
                          strokeWidth="2"
                        />
                        <path
                          d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                          stroke="#20B2A6"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ),
                    label: "Security Focused",
                    sub: "Best practices",
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="stat-card-inner"
                    style={{
                      background: "rgba(255,255,255,.04)",
                      border: "1px solid rgba(255,255,255,.08)",
                      borderRadius: "13px",
                      padding: "14px",
                      cursor: "default",
                    }}
                  >
                    <div style={{ marginBottom: "8px" }}>{s.icon}</div>
                    <div
                      style={{
                        color: "#f0f0f0",
                        fontSize: "13.5px",
                        fontWeight: "600",
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        color: "#678a89",
                        fontSize: "11.5px",
                        marginTop: "3px",
                      }}
                    >
                      {s.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Core Technologies ── */}
              <div style={{ padding: "15px 14px 18px" }}>
                <p
                  style={{
                    color: "#7ea8a7",
                    fontSize: "12px",
                    fontWeight: "500",
                    marginBottom: "10px",
                  }}
                >
                  Core Technologies
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {coreSkills.map((s) => (
                    <span
                      key={s}
                      className="skill-pill-card"
                      style={{
                        background: "rgba(255,255,255,.05)",
                        border: "1px solid rgba(255,255,255,.1)",
                        borderRadius: "20px",
                        padding: "4px 13px",
                        color: "#c5dcdb",
                        fontSize: "12px",
                        fontWeight: "500",
                        cursor: "default",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* ── End Right Column ── */}
        </div>

        {/* ── Skills Marquee ── */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
