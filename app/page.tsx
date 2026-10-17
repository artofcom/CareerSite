"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Box,
  Cloud,
  Code2,
  Gamepad2,
  Mail,
  Menu,
  Sparkles,
  X,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DigitalTwin } from "../components/digital-twin";

const expertise = [
  {
    number: "01",
    icon: Gamepad2,
    title: "Gameplay & Systems",
    text: "Unity and C# for reusable gameplay layers and tools, with C++ experience for performance-critical systems, networking, and custom engines.",
    tags: ["Unity", "C#", "C++", "MVCS"],
  },
  {
    number: "02",
    icon: Box,
    title: "Real-time 3D & XR",
    text: "Unity URP, Timeline, animation systems, and custom shaders for interactive 3D simulation—plus VR interaction and runtime AI navigation.",
    tags: ["VR / XR", "URP", "Shaders", "AI Navigation"],
  },
  {
    number: "03",
    icon: Cloud,
    title: "Live Products",
    text: "Cloud-connected products using Unity Cloud Services, Asset Bundles, Remote Config, Firebase, analytics, and live-operations tooling.",
    tags: ["Unity Cloud", "Asset Bundles", "Firebase", "Analytics"],
  },
];

const certifications = [
  {
    title: "Autodesk AutoCAD - Beginner to Advanced level",
    provider: "Udemy",
    instructor: "Steve Clancy",
    date: "September 6, 2026",
    duration: "19 hours",
    credentialUrl: "https://ude.my/UC-1c17cc85-2144-465a-a712-226752a2ad4e",
  },
  {
    title: "Programming Design Patterns For Unity: Write Better Code",
    provider: "Udemy",
    instructor: "GameDev.tv Team",
    date: "March 19, 2024",
    duration: "3.5 hours",
    credentialUrl: "https://ude.my/UC-fbea1832-6b97-487c-aaac-284a16fe7d09",
  },
  {
    title: "Unreal Engine 4 C++ The Ultimate Shooter Course",
    provider: "Udemy",
    instructor: "Stephen Ulibarri",
    date: "April 3, 2024",
    duration: "56 hours",
    credentialUrl: "https://ude.my/UC-395a5276-c198-4fb9-acbc-953658a89a80",
  },
];

const career = [
  {
    period: "2024 — 2026",
    company: "Blue Goji",
    role: "Senior Game Software Engineer",
    location: "Austin, Texas",
    summary:
      "Shipped rehabilitation and wellness games while establishing reusable gameplay frameworks and shared platform systems. Led Unity Cloud integrations and solved critical VR, iOS, and AI navigation challenges.",
    focus: "Healthcare games · Platform systems · VR",
  },
  {
    period: "2023 — 2024",
    company: "Benevolence Medical Limited",
    role: "Unity Engineer",
    location: "Remote",
    summary:
      "Designed a medical education application from the ground up, combining interactive 3D simulation, custom shaders, dynamic content delivery, and an MVCS-based architecture.",
    focus: "Medical education · Simulation · Architecture",
  },
  {
    period: "2020 — 2023",
    company: "PLAYSTUDIOS",
    role: "Senior Frontend Engineer",
    location: "Austin, Texas",
    summary:
      "Built live-service features, monetization systems, and gameplay content for myKonami Slots, supporting multiple feature releases and ongoing production operations.",
    focus: "Live service · Monetization · Production",
  },
  {
    period: "2013 — 2019",
    company: "Tritone Soft",
    role: "Senior Software Engineer",
    location: "Seoul, South Korea",
    summary:
      "Developed commercial RPG, puzzle, and social casino titles—including gameplay, shops, progression, tutorials, guilds, level editors, and third-party platform integrations.",
    focus: "Mobile games · Gameplay · SDK integrations",
  },
  {
    period: "2012 — 2013",
    company: "MonsterPapa Corp.",
    role: "Head of Development",
    location: "Seoul, South Korea",
    summary:
      "Led client programming for Raonatti, an online educational game, and developed its core structure and gameplay systems in Unity.",
    focus: "Technical leadership · Educational games",
  },
  {
    period: "2009 — 2012",
    company: "Smilegate",
    role: "Client Programming Lead",
    location: "Seoul, South Korea",
    summary:
      "Developed gameplay, networking, anti-cheat, and production systems for CrossFire. Optimized server memory, resolved critical issues, and mentored junior engineers.",
    focus: "FPS · Networking · Optimization",
  },
  {
    period: "2003 — 2009",
    company: "Mgame · Andamiro",
    role: "Program Team Lead · Software Engineer",
    location: "Seoul, South Korea",
    summary:
      "Built the engineering foundation through PC rhythm-action and online games—owning core client logic, gameplay systems, custom engine work, and production tools.",
    focus: "C++ · Custom engines · Tools",
  },
];

const work = [
  {
    index: "A",
    type: "GLOBAL FPS",
    title: "CrossFire",
    description:
      "Gameplay systems, networking functionality, anti-cheat technology, memory optimization, and production support for one of the world's most successful FPS titles.",
    stat: "$1B+",
    statLabel: "annual revenue cited in profile",
    className: "work-crossfire",
    image: "/work/crossfire.webp",
    imageAlt: "CrossFire first-person shooter gameplay",
    stack: ["C++", "Gameplay Systems", "Networking", "Optimization"],
  },
  {
    index: "B",
    type: "LIVE-SERVICE MOBILE",
    title: "myKonami Slots",
    description:
      "Feature delivery, monetization systems, gameplay content, currency standardization, and diagnostic work supporting a continuously operated product.",
    stat: "3+ yrs",
    statLabel: "shipping live-service features",
    className: "work-konami",
    image: "/work/mykonami.webp",
    imageAlt: "myKonami Slots game lobby",
    stack: ["Unity", "C#", "Splunk", "Couchbase"],
  },
  {
    index: "C",
    type: "HEALTHCARE + WELLNESS",
    title: "Play with purpose",
    description:
      "Rehabilitation games, medical education, interactive 3D simulation, and shared platform systems designed for meaningful real-world outcomes.",
    stat: "VR + 3D",
    statLabel: "immersive product experiences",
    className: "work-health",
    image: "/work/digital-surgeon.webp",
    imageAlt: "Digital Surgeon medical training application",
    secondaryImage: "/work/wellness.webp",
    secondaryImageAlt: "Wellness game mobile experience",
    stack: ["Unity", "URP", "Timeline", "Asset Bundles"],
  },
  {
    index: "D",
    type: "PRODUCT OWNERSHIP",
    title: "Independent game project",
    description:
      "Hands-on product ownership spanning publishing, analytics, monetization, live operations, and the practical realities of operating a Unity-based title.",
    stat: "360°",
    statLabel: "from code to live operations",
    className: "work-indie",
    image: "/work/independent-game.webp",
    imageAlt: "Independent tower defense game project",
    stack: ["Unity", "C#", "Analytics", "Live Ops"],
  },
];

function SafeIcon({ icon: Icon, ...props }: LucideProps & { icon: LucideIcon }) {
  return <Icon {...props} suppressHydrationWarning />;
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Back to top">
      <span>HP</span>
      <i />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main id="top">
      <header className="site-header">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <a href="#work">Selected work</a>
          <a href="#digital-twin">Digital Twin</a>
        </nav>
        <a className="header-cta" href="mailto:artofcom2@gmail.com">
          Let&apos;s talk <SafeIcon icon={ArrowUpRight} size={16} />
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <SafeIcon icon={menuOpen ? X : Menu} />
        </button>
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>Journey</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#digital-twin" onClick={() => setMenuOpen(false)}>Digital Twin</a>
          <a href="mailto:artofcom2@gmail.com">Let&apos;s talk</a>
        </div>
      </header>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-kicker">
          <span className="status-dot" /> Austin-based · U.S. permanent resident
        </div>
        <h1 id="hero-title">
          Engineering
          <span>experiences</span>
          that perform.
        </h1>
        <div className="hero-bottom">
          <p className="hero-intro">
            I&apos;m <strong>Hyungtae Park</strong>, a senior software engineer
            turning complex ideas into scalable, real-time products across
            games, healthcare, VR, and mobile.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <SafeIcon icon={ArrowDown} size={18} />
            </a>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-one"><span /></div>
          <div className="orbit orbit-two"><span /></div>
          <div className="orbit-core">
            <SafeIcon icon={Code2} size={42} strokeWidth={1.25} />
            <small>REAL-TIME<br />SYSTEMS</small>
          </div>
        </div>
        <div className="hero-meta">
          <span>Austin, Texas</span>
          <span>Unity · C# · C++</span>
          <span>16+ years of experience</span>
        </div>
      </section>

      <section className="marquee" aria-label="Areas of expertise">
        <div className="marquee-track">
          {["GAMEPLAY SYSTEMS", "REAL-TIME 3D", "VR / XR", "LIVE OPERATIONS", "TECHNICAL LEADERSHIP", "GAMEPLAY SYSTEMS", "REAL-TIME 3D", "VR / XR", "LIVE OPERATIONS", "TECHNICAL LEADERSHIP"].map((item, index) => (
            <span key={`${item}-${index}`}><i />{item}</span>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-label"><span>01</span> About me</div>
        <div className="about-heading">
          <p className="eyebrow">A BUILDER AT THE INTERSECTION OF</p>
          <h2>Deep engineering <em>and</em> human experience.</h2>
        </div>
        <div className="about-copy">
          <p>
            For more than 16 years, I&apos;ve built and shipped commercial
            products across gaming, healthcare, VR, and mobile platforms. My
            work spans the full product lifecycle—from architecture and
            gameplay systems to optimization, production support, and live
            operations.
          </p>
          <p>
            I do my best work where technical depth meets collaborative
            problem-solving: translating ambitious requirements into systems
            that are scalable, maintainable, and genuinely useful to the
            people building and using them.
          </p>
        </div>

        <div className="expertise-grid">
          {expertise.map(({ number, icon: Icon, title, text, tags }) => (
            <article className="expertise-card" key={title}>
              <div className="card-top">
                <span>{number}</span>
                <SafeIcon icon={Icon} size={27} strokeWidth={1.4} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="stack-block">
                <span className="stack-label">Core technology stack</span>
                <div className="tag-list">
                  {tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="credentials">
          <div className="credentials-heading">
            <div>
              <p className="eyebrow">CONTINUOUS LEARNING</p>
              <h3>Certificates &amp; focused training.</h3>
            </div>
            <p>
              Verified coursework expanding practical depth across Unity
              architecture, Unreal C++, and technical drafting.
            </p>
          </div>
          <div className="credential-grid">
            {certifications.map((certificate, index) => (
              <a
                className="credential-card"
                href={certificate.credentialUrl}
                key={certificate.title}
                target="_blank"
                rel="noreferrer"
              >
                <div className="credential-card-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <SafeIcon icon={Award} size={24} strokeWidth={1.4} />
                </div>
                <span className="credential-provider">{certificate.provider} certificate</span>
                <h4>{certificate.title}</h4>
                <p>Instructor: {certificate.instructor}</p>
                <div className="credential-meta">
                  <span>{certificate.date}</span>
                  <span>{certificate.duration}</span>
                  <SafeIcon icon={ArrowUpRight} size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="section-shell">
          <div className="section-label light"><span>02</span> Career journey</div>
          <div className="journey-header">
            <h2>Built through<br /><em>every layer.</em></h2>
            <p>
              From custom C++ engines to cloud-connected Unity products, each
              chapter has expanded both the technical range and the product
              perspective I bring to the next one.
            </p>
          </div>
          <div className="timeline">
            {career.map((item, index) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-role">
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                  <small>{item.location}</small>
                </div>
                <div className="timeline-detail">
                  <p>{item.summary}</p>
                  <span>{item.focus}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-label"><span>03</span> Selected work</div>
        <div className="work-header">
          <h2>Systems that shipped.<br /><em>Products that mattered.</em></h2>
          <a
            className="text-link portfolio-link"
            href="https://artofcom.wixsite.com/journey"
            target="_blank"
            rel="noreferrer"
          >
            Visit original portfolio <SafeIcon icon={ArrowUpRight} size={17} />
          </a>
        </div>
        <div className="work-grid">
          {work.map((item) => (
            <article className={`work-card ${item.className}`} key={item.title}>
              <div className="work-visual" aria-hidden="true">
                {item.secondaryImage ? (
                  <div className="health-collage">
                    <div className="phone-shot phone-shot-main">
                      <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 720px) 45vw, 260px" suppressHydrationWarning />
                    </div>
                    <div className="phone-shot phone-shot-secondary">
                      <Image src={item.secondaryImage} alt={item.secondaryImageAlt} fill sizes="(max-width: 720px) 38vw, 210px" suppressHydrationWarning />
                    </div>
                  </div>
                ) : (
                  <Image
                    className="work-image"
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 720px) 100vw, 50vw"
                    suppressHydrationWarning
                  />
                )}
                <div className="work-image-shade" />
                <span className="work-index">{item.index}</span>
              </div>
              <div className="work-content">
                <span className="work-type">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="work-stack" aria-label={`${item.title} technology stack`}>
                  {item.stack.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <div className="work-stat">
                  <strong>{item.stat}</strong>
                  <span>{item.statLabel}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <DigitalTwin />

      <section className="principles section-shell">
        <div className="section-label"><span>05</span> How I work</div>
        <div className="principle-grid">
          <div>
            <SafeIcon icon={Sparkles} size={26} strokeWidth={1.4} />
            <span>01</span>
            <h3>Start with clarity.</h3>
            <p>Turn ambiguous product needs into a system the whole team can reason about.</p>
          </div>
          <div>
            <SafeIcon icon={Code2} size={26} strokeWidth={1.4} />
            <span>02</span>
            <h3>Build for change.</h3>
            <p>Create maintainable foundations that make the next feature easier—not harder.</p>
          </div>
          <div>
            <SafeIcon icon={Gamepad2} size={26} strokeWidth={1.4} />
            <span>03</span>
            <h3>Ship the experience.</h3>
            <p>Own the details from interaction and performance through production and live support.</p>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="section-shell">
          <div className="footer-top">
            <p>HAVE A COMPLEX IDEA?</p>
            <h2>Let&apos;s build something<br /><em>remarkable.</em></h2>
            <a className="footer-email" href="mailto:artofcom2@gmail.com">
              artofcom2@gmail.com <SafeIcon icon={ArrowUpRight} />
            </a>
          </div>
          <div className="footer-bottom">
            <Logo />
            <p>Senior Software Engineer<br />Austin, Texas</p>
            <div className="social-links">
              <a className="linkedin-mark" href="https://www.linkedin.com/in/hyungtaepark" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span>in</span></a>
              <a href="mailto:artofcom2@gmail.com" aria-label="Email"><SafeIcon icon={Mail} /></a>
              <a href="https://artofcom.wixsite.com/journey" target="_blank" rel="noreferrer" aria-label="Portfolio"><SafeIcon icon={ArrowUpRight} /></a>
            </div>
            <span className="copyright" suppressHydrationWarning>© {new Date().getFullYear()} Hyungtae Park</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
