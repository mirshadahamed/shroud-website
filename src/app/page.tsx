
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  Check,
  ChevronDown,
  Command,
  EyeOff,
  LockKeyhole,
  Menu,
  Monitor,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";

const SHROUD_DOWNLOAD_URL =
  "https://github.com/mirshadahamed/Shroud/releases/download/v1.0.0/Shroud-1.0.0-arm64.dmg";

const features = [
  {
    icon: EyeOff,
    title: "Protects when you look away",
    description:
      "Shroud detects when you turn away and automatically covers your screen.",
  },
  {
    icon: LockKeyhole,
    title: "Private by design",
    description:
      "Camera frames are processed locally on your Mac. No cloud processing is required.",
  },
  {
    icon: Sparkles,
    title: "Your screen, your style",
    description:
      "Choose between solid black, dark frosted glass, and liquid-glass-inspired overlays.",
  },
  {
    icon: SlidersHorizontal,
    title: "Fine-tuned for you",
    description:
      "Adjust detection sensitivity, activation delay, and overlay opacity.",
  },
  {
    icon: Monitor,
    title: "Multi-display protection",
    description:
      "Designed to cover connected displays when privacy protection activates.",
  },
  {
    icon: Command,
    title: "Always within reach",
    description:
      "Control Shroud from your menu bar and use a keyboard shortcut for emergency stop.",
  },
];

const faqs = [
  {
    question: "Does Shroud upload camera footage?",
    answer:
      "No. Shroud processes camera frames locally for face-orientation detection.",
  },
  {
    question: "Does Shroud record video?",
    answer:
      "Shroud uses camera frames for live detection rather than recording video.",
  },
  {
    question: "Does Shroud work with external monitors?",
    answer:
      "Shroud is designed to protect multiple connected displays. Compatibility may vary depending on your Mac and display configuration.",
  },
  {
    question: "Where can I download Shroud?",
    answer:
      "Shroud v1.0.0 is available as a direct DMG download for Apple Silicon Macs. Click Download for macOS to get the installer.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "Shroud v1.0.0 is built for Apple Silicon Macs and declares macOS 14.0 or later as its minimum system version.",
  },
  {
    question: "Why might macOS show a security warning?",
    answer:
      "Shroud v1.0.0 is not yet signed with an Apple Developer ID or notarized by Apple. macOS may block its first launch. If you trust the download, review the warning and use the exception option in System Settings > Privacy & Security, where available.",
  },
];

function BrandMark({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/shroud-icon.png"
      alt="Shroud app icon"
      width={size}
      height={size}
      className="rounded-xl"
      priority
    />
  );
}

function DownloadButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href={SHROUD_DOWNLOAD_URL}
      className={`download-button ${large ? "download-large" : ""}`}
      aria-label="Download Shroud v1.0.0 for macOS"
    >
      <ArrowDownToLine size={18} />
      Download for macOS
    </a>
  );
}

function ProductVisual() {
  return (
    <div
      className="product-scene"
      aria-label="Shroud privacy overlay illustration"
    >
      <div className="scene-glow" />

      <div className="product-device">
        <div className="device-camera" />

        <div className="device-screen">
          <div className="mock-menu">
            <span>● ● ●</span>
            <span>Shroud ◈</span>
          </div>

          <div className="screen-orb orb-one" />
          <div className="screen-orb orb-two" />
          <div className="screen-grid" />

          <div className="privacy-glass">
            <div className="glass-shine" />
            <ShieldCheck size={48} strokeWidth={1.2} />
            <strong>Privacy protected</strong>
            <span>Your screen is covered.</span>
          </div>
        </div>

        <div className="device-base" />
      </div>

      <div className="floating-status">
        <span className="status-dot" />
        <span>Shroud is active</span>
        <Check size={15} />
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      {/* HEADER */}
      <header className="site-header">
        <div className="container nav-inner">
          <a
            href="#home"
            className="brand"
            aria-label="Shroud home"
          >
            <BrandMark />
            <span>Shroud</span>
          </a>

          <nav
            className={
              menuOpen ? "nav-links nav-open" : "nav-links"
            }
          >
            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>

            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
            >
              How it works
            </a>

            <a
              href="#privacy"
              onClick={() => setMenuOpen(false)}
            >
              Privacy
            </a>

            <a
              href="#faq"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </a>
          </nav>

          <div className="nav-actions">
            <a className="nav-cta" href="#download">
              Get Shroud <ArrowRight size={15} />
            </a>

            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-ambient ambient-left" />
        <div className="hero-ambient ambient-right" />

        <div className="container hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            INTRODUCING SHROUD FOR MAC
          </div>

          <h1>
            Your screen.
            <br />
            <span className="gradient-text">
              Your privacy.
            </span>
          </h1>

          <p className="hero-description">
            Privacy that moves with you. Shroud automatically
            protects your Mac screen when you look away, so
            your workspace stays yours.
          </p>

          <div className="hero-actions">
            <DownloadButton large />

            <a
              href="#how-it-works"
              className="secondary-button"
            >
              See how it works <ArrowRight size={17} />
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <Check size={15} /> Built for macOS
            </span>
            <span>
              <Check size={15} /> On-device detection
            </span>
            <span>
              <Check size={15} /> No account required
            </span>
          </div>

          <ProductVisual />

          <div className="visual-caption">
            <ShieldCheck size={16} />
            Automatically protected when your attention shifts.
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="section features-section"
      >
        <div className="container">
          <div className="section-heading">
            <div className="section-kicker">
              THE DETAILS MATTER
            </div>

            <h2>
              Thoughtful privacy.
              <br />
              <span className="muted-heading">
                Without the extra effort.
              </span>
            </h2>

            <p>
              Shroud works quietly in the background,
              ready to protect your workspace when you need it.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  className="feature-card"
                  key={feature.title}
                >
                  <div
                    className={`feature-icon feature-icon-${index}`}
                  >
                    <Icon size={24} strokeWidth={1.6} />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="section how-section"
      >
        <div className="container how-layout">
          <div className="how-copy">
            <div className="section-kicker">
              EFFORTLESS BY DESIGN
            </div>

            <h2>
              Look away.
              <br />
              <span className="gradient-text">
                Stay private.
              </span>
            </h2>

            <p className="section-intro">
              No manual screen locking every time you turn
              your head. Shroud brings a new layer of privacy
              to your everyday workflow.
            </p>

            <div className="steps">
              <div className="step">
                <span className="step-number">01</span>
                <div>
                  <h3>Enable Shroud</h3>
                  <p>
                    Start protection from the macOS menu bar.
                  </p>
                </div>
              </div>

              <div className="step">
                <span className="step-number">02</span>
                <div>
                  <h3>Focus on your work</h3>
                  <p>
                    Shroud monitors face orientation locally
                    using your camera.
                  </p>
                </div>
              </div>

              <div className="step">
                <span className="step-number">03</span>
                <div>
                  <h3>Your screen is covered</h3>
                  <p>
                    When you look away, your chosen privacy
                    overlay appears. It clears when you return.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="how-art">
            <div className="how-art-glow" />

            <div className="how-art-card">
              <div className="how-art-top">
                <span>
                  <span className="status-dot" />
                  SHROUD ACTIVE
                </span>
                <ShieldCheck size={20} />
              </div>

              <div className="how-art-center">
                <div className="large-shield">
                  <ShieldCheck
                    size={72}
                    strokeWidth={1.1}
                  />
                </div>

                <h3>Protected by Shroud</h3>
                <p>Privacy follows your attention.</p>
              </div>

              <div className="how-art-bottom">
                <span>ON-DEVICE PROCESSING</span>
                <span>● ENABLED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section
        id="privacy"
        className="section privacy-section"
      >
        <div className="container privacy-panel">
          <div className="privacy-symbol">
            <LockKeyhole
              size={34}
              strokeWidth={1.5}
            />
          </div>

          <div className="section-kicker">
            PRIVACY IS THE POINT
          </div>

          <h2>
            Your camera.
            <br />
            <span className="gradient-text">
              Your device.
            </span>
          </h2>

          <p>
            Shroud processes camera frames locally to detect
            when you turn away. No cloud-based face analysis,
            online account, or internet connection is needed
            for core protection.
          </p>

          <div className="privacy-points">
            <span>
              <Check size={16} /> Local processing
            </span>
            <span>
              <Check size={16} /> No account required
            </span>
            <span>
              <Check size={16} /> You stay in control
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="section faq-section"
      >
        <div className="container faq-layout">
          <div>
            <div className="section-kicker">
              QUESTIONS & ANSWERS
            </div>

            <h2>Good to know.</h2>

            <p className="faq-intro">
              A few things you might want to know
              before using Shroud.
            </p>
          </div>

          <div className="faq-items">
            {faqs.map((faq, index) => (
              <div
                className="faq-item"
                key={faq.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index ? null : index
                    )
                  }
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>

                  <ChevronDown
                    size={19}
                    className={
                      openFaq === index
                        ? "chevron-open"
                        : ""
                    }
                  />
                </button>

                {openFaq === index && (
                  <p className="faq-answer">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section
        id="download"
        className="section download-section"
      >
        <div className="container download-panel">
          <div className="download-glow" />

          <BrandMark size={70} />

          <div className="section-kicker">
            SHROUD FOR MAC
          </div>

          <h2>
            A little more privacy.
            <br />
            <span className="gradient-text">
              A lot more peace of mind.
            </span>
          </h2>

          <p>
            Shroud v1.0.0 is available for macOS.
            Download the installer and bring automatic
            privacy protection to your Mac.
          </p>

          <DownloadButton large />

          <span className="download-note">
            Version 1.0.0 · Apple Silicon · macOS 14+
          </span>

          <p className="download-note">
            Installation notice: This release is not yet
            Developer ID-signed or notarized by Apple.
            macOS may block its first launch.
          </p>

          <a
            href="https://github.com/mirshadahamed/Shroud/releases/tag/v1.0.0"
            target="_blank"
            rel="noopener noreferrer"
            className="download-note"
          >
            View release notes
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <BrandMark size={32} />
              <span>Shroud</span>
            </a>

            <p>Your screen. Your privacy.</p>
          </div>

          <div className="footer-right">
            <a
              href="https://github.com/mirshadahamed/Shroud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">⌘</span> GitHub
            </a>

            <a href="#privacy">Privacy</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Shroud.</span>
          <span>Made for a more private Mac.</span>
        </div>
      </footer>
    </main>
  );
}
