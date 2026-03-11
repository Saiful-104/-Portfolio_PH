import { useState, useEffect, useRef } from "react";
import { Code2, Lightbulb, Rocket, Users, Terminal, Braces, Database, Cloud, GitBranch } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", description: "Writing maintainable, scalable code that stands the test of time." },
  { icon: Rocket, title: "Performance", description: "Optimizing for speed and delivering lightning-fast user experiences." },
  { icon: Users, title: "Collaboration", description: "Working closely with teams to bring ideas to life." },
  { icon: Lightbulb, title: "Innovation", description: "Implementing modern tech to solve complex problems." },
];

const techStack = [
  { icon: Braces, label: "React", color: "#61DAFB" },
  { icon: Terminal, label: "Next.js", color: "#ffffff" },
  { icon: Code2, label: "TypeScript", color: "#3178C6" },
  { icon: Code2, label: "Tailwind", color: "#38BDF8" },
  { icon: Terminal, label: "Node.js", color: "#6DA55F" },
  { icon: Database, label: "MongoDB", color: "#4DB33D" },
  { icon: Database, label: "SQL", color: "#F29111" },
  { icon: Cloud, label: "AWS", color: "#FF9900" },
  
];

const stats = [
  { value: "1000+", label: "DSA Problems Solved", sub: "LeetCode / Codeforces" },
  { value: "1+", label: "Years of Experience", sub: "Full Stack Dev" },
  { value: "10+", label: "Projects Delivered", sub: "Web Applications" },
  { value: "∞", label: "Lines of Code", sub: "& counting..." },
];

function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target);
    if (isNaN(num)) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target]);
  return count;
}

function StatCard({ value, label, sub, animate }) {
  const num = parseInt(value);
  const counted = useCountUp(num, 1800, animate);
  const display = isNaN(num) ? value : `${counted}${value.replace(/[0-9]/g, "")}`;
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "24px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      position: "relative",
      overflow: "hidden",
      transition: "border-color 0.3s, transform 0.3s",
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(var(--primary-rgb,99,102,241),0.4)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at top left, rgba(var(--primary-rgb,99,102,241),0.06) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />
      <span style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-1px", color: "var(--primary, #818cf8)", lineHeight: 1 }}>
        {display}
      </span>
      <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--foreground, #fff)", opacity: 0.9 }}>{label}</span>
      <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground, #888)" }}>{sub}</span>
    </div>
  );
}

function TechBadge({ icon: Icon, label, color }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "8px",
      padding: "8px 14px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "999px",
      fontSize: "0.78rem",
      fontWeight: 600,
      color: "var(--foreground, #fff)",
      transition: "all 0.25s",
      cursor: "default",
      whiteSpace: "nowrap",
    }}
    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; e.currentTarget.style.borderColor = color + "66"; e.currentTarget.style.transform = "scale(1.06)"; }}
    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "scale(1)"; }}
    >
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: color, display: "inline-block", flexShrink: 0, boxShadow: `0 0 8px ${color}` }} />
      {label}
    </div>
  );
}

export const About = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}>

      {/* Ambient background blobs */}
      <div style={{
        position: "absolute", top: "10%", left: "-10%", width: 400, height: 400,
        background: "radial-gradient(circle, rgba(var(--primary-rgb,99,102,241),0.08) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none", filter: "blur(40px)"
      }} />
      <div style={{
        position: "absolute", bottom: "5%", right: "-5%", width: 350, height: 350,
        background: "radial-gradient(circle, rgba(var(--primary-rgb,99,102,241),0.06) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none", filter: "blur(50px)"
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        {/* Section Label */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 16px", borderRadius: 999,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(var(--primary-rgb,99,102,241),0.25)",
          fontSize: "0.8rem", fontWeight: 600,
          color: "var(--primary, #818cf8)",
          marginBottom: 48,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(10px)",
          transition: "all 0.6s ease",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary, #818cf8)", animation: "pulse 2s infinite" }} />
        
           <h3 className="text-primary text-xl">
             About Me
           </h3>
        </div>

        {/* MAIN GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>

          {/* ---- LEFT ---- */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

            {/* Hero Heading */}
            <div style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.7s ease 0.1s",
            }}>
              <h2 style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-2px",
                color: "var(--secondary-foreground, #fff)",
                margin: 0,
              }}>
                <span style={{ display: "block" }}>Code</span>
                <span className="text-primary" >Create</span>
                <span style={{ display: "block" }}>Captivate</span>
              </h2>
            </div>

            {/* Bio */}
            <div style={{
              display: "flex", flexDirection: "column", gap: 12,
              opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.7s ease 0.2s",
            }}>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--muted-foreground, #aaa)", margin: 0 }}>
                Hi, I'm <strong style={{ color: "var(--foreground, #fff)", fontWeight: 700 }}>Saiful Islam</strong> — a passionate Full Stack Developer and CSE student at <em>Metropolitan University, Sylhet</em>.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "var(--muted-foreground, #aaa)", margin: 0 }}>
                develop modern, scalable web applications using technologies like React, Next.js, JavaScript, TypeScript, and Node.js.
              </p>
               <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "var(--muted-foreground, #aaa)", margin: 0 }}>
                I also enjoy problem-solving and have solved over 1000 problems in Data Structures and Algorithms.
              </p>
            </div>

            {/* Quote Card */}
            <div style={{
              padding: "20px 24px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(var(--primary-rgb,99,102,241),0.2)",
              borderLeft: "3px solid var(--primary, #818cf8)",
              borderRadius: "12px",
              opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.7s ease 0.3s",
            }}>
              <p style={{ fontSize: "0.95rem", fontStyle: "italic", color: "var(--foreground, #e2e8f0)", margin: 0, lineHeight: 1.6 }}>
                "Code with passion. Build with purpose. Deliver with impact."
              </p>
            </div>

            {/* Tech Stack */}
            <div style={{
              opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.7s ease 0.4s",
            }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-foreground, #888)", marginBottom: 12 }}>
                Tech Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {techStack.map((t) => <TechBadge key={t.label} {...t} />)}
              </div>
            </div>
          </div>

          {/* ---- RIGHT ---- */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Stats Grid */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
              opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.7s ease 0.15s",
            }}>
              {stats.map((s) => <StatCard key={s.label} {...s} animate={visible} />)}
            </div>

            {/* Highlights */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {highlights.map((item, idx) => (
                <div key={idx} style={{
                  padding: "20px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px",
                  display: "flex", flexDirection: "column", gap: 10,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(20px)",
                  transition: `all 0.6s ease ${0.25 + idx * 0.1}s`,
                  cursor: "default",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(var(--primary-rgb,99,102,241),0.35)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: "rgba(var(--primary-rgb,99,102,241),0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <item.icon size={18} color="var(--primary, #818cf8)" />
                  </div>
                  <div>
                    <h4 style={{ margin: "0 0 4px", fontSize: "0.88rem", fontWeight: 700, color: "var(--foreground, #fff)" }}>{item.title}</h4>
                    <p style={{ margin: 0, fontSize: "0.76rem", lineHeight: 1.5, color: "var(--muted-foreground, #888)" }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @media (max-width: 768px) {
          #about > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}