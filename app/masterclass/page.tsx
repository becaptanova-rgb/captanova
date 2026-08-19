"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Check,
  Plus,
  Eye,
  RefreshCw,
  Brain,
  Compass,
  Footprints,
  X,
} from "lucide-react";
import { MASTERCLASS_DATE_ISO } from "@/lib/data";
import { trackLead, trackViewContent } from "@/lib/analytics";
import styles from "./masterclass-premium.module.css";

const dateObj = new Date(MASTERCLASS_DATE_ISO);
const dateLabel = dateObj.toLocaleDateString("en-IN", {
  weekday: "long",
  day: "numeric",
  month: "long",
  timeZone: "Asia/Kolkata",
});
const timeLabel = dateObj.toLocaleTimeString("en-IN", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: "Asia/Kolkata",
});

interface FormState {
  firstName: string;
  phone: string;
  email: string;
}

const initialForm: FormState = { firstName: "", phone: "", email: "" };

const CYCLE_STEPS = ["Think", "Doubt", "Analyse", "Delay", "Regret", "Think Again"];
const APPROACH_STEPS = ["Awareness", "Clarity", "Choice", "Action"];

const DISCOVER_ITEMS = [
  {
    number: "01",
    title: "Why You Overthink",
    description:
      "Understand what is happening beneath the constant mental noise and why your mind keeps returning to the same questions.",
  },
  {
    number: "02",
    title: "Why Knowing Isn't Always Enough",
    description: "You can know exactly what you should do and still struggle to act. Discover why.",
  },
  {
    number: "03",
    title: "The Difference Between Thought and Awareness",
    description:
      "Learn how to notice your thoughts without automatically allowing them to make your decisions for you.",
  },
  {
    number: "04",
    title: "How Awareness Creates Clarity",
    description:
      "Discover why thinking harder isn't always the answer — and how awareness can help you see what is actually happening.",
  },
  {
    number: "05",
    title: "How to Make Conscious Choices",
    description: "You don't need complete certainty to make a meaningful decision. Learn how to create space between thought and response.",
  },
  {
    number: "06",
    title: "How to Start Moving Forward",
    description: "Turn awareness into clarity. Clarity into choice. And choice into action.",
  },
];

const WALK_AWAY_ITEMS = [
  "Why your mind keeps going in circles.",
  "Why certain patterns keep repeating.",
  "Why knowing what to do isn't always enough.",
  "Why you keep waiting for certainty.",
  "How awareness can create space for a different response.",
  "What your next conscious step could be.",
];

const FOR_YOU_IF_ITEMS = [
  "You overthink even simple decisions.",
  "You constantly question yourself.",
  "You replay conversations long after they've happened.",
  "You worry about the future before it arrives.",
  "You know what you want but keep postponing action.",
  "You feel stuck even though you are trying to move forward.",
  "You are tired of being mentally busy but emotionally disconnected from your life.",
  "You want more clarity and less mental noise.",
  "You want to understand yourself instead of constantly fighting yourself.",
  "You are ready to stop merely thinking about your life and start consciously living it.",
];

const FAQ_ITEMS = [
  { q: "Is the masterclass really free?", a: "Yes. The masterclass is completely free to attend." },
  { q: "How long is it?", a: "The live masterclass is approximately 60 minutes." },
  { q: "Do I need any previous experience?", a: "No. You don't need any previous coaching or personal-development experience." },
  {
    q: "Is this therapy?",
    a: "No. This is a personal-development coaching masterclass focused on awareness, clarity and conscious action. It is not therapy or medical treatment.",
  },
  {
    q: "What if I already know a lot about personal development?",
    a: "That's okay. The masterclass isn't about how much information you know. It's about how clearly you can see yourself and the patterns influencing your choices.",
  },
  { q: "Is the masterclass live?", a: "Yes. It is a live online masterclass with Coach Renu Sharma." },
  { q: "What happens after I register?", a: "You'll receive the masterclass access details by email." },
  {
    q: "Will I be offered a Captanova program?",
    a: "At the end of the masterclass, you'll have the opportunity to learn more about how you can continue your journey with Captanova if you choose. There is no obligation.",
  },
];

export default function MasterclassPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    trackViewContent({ content_name: "Free Masterclass Landing Page" });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.firstName.trim() || !form.phone.trim() || !form.email.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (form.phone.trim().replace(/[^0-9]/g, "").length < 8) {
      setError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.firstName,
          phone: form.phone,
          email: form.email,
          type: "masterclass",
          source: "masterclass-landing",
        }),
      });
      if (!res.ok) throw new Error("Registration failed");

      trackLead({ content_name: "Free Masterclass" });
      setRegistered(true);
      setForm(initialForm);
    } catch {
      setError("Something went wrong — please try again.");
    } finally {
      setLoading(false);
    }
  }

  function RegistrationCard({ idPrefix, heading, ctaLabel }: { idPrefix: string; heading: string; ctaLabel: string }) {
    return (
      <div className={styles.registrationContainer}>
        <p className={styles.registrationEyebrow}>Save Your Seat</p>
        <h2 className={styles.registrationTitle}>{heading}</h2>

        <div className={styles.eventChips}>
          <span className={styles.eventChip}>📅 {dateLabel}</span>
          <span className={styles.eventChip}>⏰ {timeLabel} IST</span>
          <span className={styles.eventChip}>💻 Live Online</span>
          <span className={styles.eventChip}>⏱ 60 Minutes</span>
          <span className={styles.eventChip}>🎟 100% Free</span>
        </div>

        {registered ? (
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className={styles.successMessage}>
            <div className={styles.successIcon}>
              <CheckCircle2 className={styles.successIconSvg} />
            </div>
            <h3 className={styles.successTitle}>You're All Set! 🎉</h3>
            <p className={styles.successText}>
              Your spot is secured. Check your email for confirmation details and the link to join.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.registrationForm}>
            <div className={styles.formGroup}>
              <label htmlFor={`${idPrefix}-firstName`} className={styles.formLabel}>First Name</label>
              <input
                id={`${idPrefix}-firstName`}
                type="text"
                placeholder="Enter your first name"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor={`${idPrefix}-phone`} className={styles.formLabel}>Phone Number</label>
              <input
                id={`${idPrefix}-phone`}
                type="tel"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor={`${idPrefix}-email`} className={styles.formLabel}>Email Address</label>
              <input
                id={`${idPrefix}-email`}
                type="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={styles.formInput}
                required
              />
            </div>

            {error && <p className={styles.formError}>{error}</p>}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.submitButton}
            >
              {loading ? (
                <>
                  <span className={styles.loadingSpinner} />
                  Reserving your seat...
                </>
              ) : (
                <>
                  {ctaLabel}
                  <ArrowRight className={styles.submitIcon} />
                </>
              )}
            </motion.button>

            <p className={styles.formNote}>Your masterclass access details will be sent to your email after registration.</p>
          </form>
        )}
      </div>
    );
  }

  return (
    <main className={styles.main}>
      {/* ── STICKY HEADER ── */}
      <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className={styles.stickyHeader}>
        <div className={styles.stickyContent}>
          <div className={styles.stickyLeft}>
            <h2 className={styles.stickyTitle}>Free Masterclass</h2>
            <p className={styles.stickyMeta}>
              <Clock className={styles.stickyIcon} />
              {dateLabel} • {timeLabel}
            </p>
          </div>
          <a href="#register" className={styles.stickyCtaButton}>
            Reserve Now
            <ArrowRight className={styles.stickyCtaIcon} />
          </a>
        </div>
      </motion.header>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <p className={styles.brandMark}>CAPTANOVA</p>

        <div className={styles.heroContainer}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={styles.heroContent}>
            <div className={styles.premiumBadge}>
              <Sparkles className={styles.badgeIcon} />
              <span>Free Live Masterclass with Coach Renu Sharma</span>
            </div>

            <h1 className={styles.heroHeadline}>
              Stop Overthinking.<br />
              <span className={styles.heroAccent}>Start Living.</span>
            </h1>

            <p className={styles.heroLead}>You know what you want. So why do you keep getting stuck in your own head?</p>

            <div className={styles.bubbleStack}>
              <p className={`${styles.bubble} ${styles.bubbleLeft}`}>You think about the decision.</p>
              <p className={`${styles.bubble} ${styles.bubbleRight}`}>Then you question it.</p>
              <p className={`${styles.bubble} ${styles.bubbleLeft}`}>You replay the conversation.</p>
              <p className={`${styles.bubble} ${styles.bubbleRight}`}>You imagine what could go wrong.</p>
              <p className={`${styles.bubble} ${styles.bubbleLeft}`}>You know what you should do... but somehow, you still don&apos;t do it.</p>
            </div>

            <p className={styles.heroClosing}>
              What if the problem isn&apos;t that you don&apos;t know enough? What if you&apos;re simply not seeing what&apos;s really driving you?
            </p>

            <p className={styles.heroClosing}>
              Join <strong>Coach Renu Sharma</strong>, Founder of Captanova, for a powerful 60-minute masterclass on overthinking, awareness, clarity and conscious choice.
            </p>

            <motion.a href="#register-top" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={styles.primaryCtaButton}>
              Reserve My Free Seat
              <ArrowRight className={styles.ctaIcon} />
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className={styles.heroImage}>
            <div className={styles.heroImageWrapper}>
              <Image src="/mentors/renu-speaking-stage.jpg" alt="Coach Renu Sharma" fill priority className={styles.heroImageTag} />
              <div className={styles.heroImageOverlay} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EARLY REGISTRATION: SAVE YOUR SEAT ── */}
      <section id="register-top" className={styles.registrationSection}>
        <RegistrationCard idPrefix="top" heading="Stop Overthinking. Start Living." ctaLabel="Yes — Reserve My Free Seat" />
      </section>

      {/* ── MAYBE THIS IS YOU ── */}
      <section className={styles.narrativeSection}>
        <div className={styles.narrativeContainer}>
          <p className={styles.sectionEyebrow}>A Familiar Pattern</p>
          <h2 className={styles.sectionHeadline}>Maybe This Is You.</h2>
          <div className={styles.bubbleStack}>
            <p className={`${styles.bubble} ${styles.bubbleLeft}`}>You wake up already thinking about everything that needs to be done.</p>
            <p className={`${styles.bubble} ${styles.bubbleRight}`}>You make a decision... and then question whether it was the right one.</p>
            <p className={`${styles.bubble} ${styles.bubbleLeft}`}>You have a conversation... and replay it in your head later.</p>
            <p className={`${styles.bubble} ${styles.bubbleRight}`}>You want to make a change... but keep waiting for the right moment.</p>
            <p className={`${styles.bubble} ${styles.bubbleLeft}`}>You want clarity... so you think harder.</p>
            <p className={`${styles.bubble} ${styles.bubbleRight}`}>But the more you think... <strong>the more confused you become.</strong></p>
          </div>

          <div className={styles.narrativeQuoteList}>
            <p>&ldquo;What if I make the wrong decision?&rdquo;</p>
            <p>&ldquo;What will people think?&rdquo;</p>
            <p>&ldquo;Maybe I should wait.&rdquo;</p>
            <p>&ldquo;I&apos;ll start when things settle down.&rdquo;</p>
            <p>&ldquo;I just need to figure things out first.&rdquo;</p>
          </div>

          <p className={styles.narrativeEmphasis}>&ldquo;Why can&apos;t I just switch my mind off?&rdquo;</p>
          <div className={styles.narrativeBody} style={{ marginTop: "1.5rem" }}>
            <p>If you&apos;ve experienced this, you&apos;re not alone. And you&apos;re not broken.</p>
            <p><strong>You may simply be caught in a pattern your mind has learned.</strong></p>
          </div>
        </div>
      </section>

      {/* ── WHEN THINKING STOPS HELPING ── */}
      <section className={`${styles.narrativeSection} ${styles.altBg}`}>
        <div className={styles.narrativeContainer}>
          <p className={styles.sectionEyebrow}>The Pattern</p>
          <h2 className={styles.sectionHeadline}>When Thinking Stops Helping</h2>
          <div className={styles.narrativeBody}>
            <p>Your mind is designed to think. To remember. To predict. To protect. To look for answers.</p>
            <p>But there is a point where useful thinking becomes <strong>overthinking</strong>. And the cycle can look like this:</p>
          </div>

          <div className={styles.cycleFlow}>
            {CYCLE_STEPS.map((step, i) => (
              <span key={step} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span className={styles.cycleChip}>{step}</span>
                {i < CYCLE_STEPS.length - 1 && <span className={styles.cycleArrow}>→</span>}
              </span>
            ))}
          </div>

          <div className={styles.narrativeBody}>
            <p>You don&apos;t move forward because you are waiting to feel certain.</p>
            <p>But life rarely gives us certainty first.</p>
          </div>
          <p className={styles.narrativeEmphasis}>
            Sometimes clarity doesn&apos;t come from thinking more.<br />It comes from becoming more aware.
          </p>
        </div>
      </section>

      {/* ── WHAT IF YOU COULD SEE YOURSELF MORE CLEARLY ── */}
      <section className={styles.narrativeSection}>
        <div className={styles.narrativeContainer}>
          <p className={styles.sectionEyebrow}>A Different Way</p>
          <h2 className={styles.sectionHeadline}>What If You Could See Yourself More Clearly?</h2>

          <div className={styles.mosaicGrid}>
            {[
              { icon: Eye, color: "#7c3aed", text: "Imagine noticing a thought without automatically believing it." },
              { icon: RefreshCw, color: "#d97706", text: "Recognising a pattern without automatically repeating it." },
              { icon: Brain, color: "#a855f7", text: "Understanding why you react the way you do." },
              { icon: Compass, color: "#b45309", text: "Making a decision without needing every possible outcome guaranteed." },
              { icon: Footprints, color: "#6d28d9", text: "Taking your next step without having your entire future figured out." },
            ].map(({ icon: Icon, color, text }) => (
              <motion.div key={text} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className={styles.mosaicCard}>
                <span className={styles.mosaicIcon} style={{ backgroundColor: color }}>
                  <Icon size={20} />
                </span>
                <span>{text}</span>
              </motion.div>
            ))}
          </div>

          <p className={styles.narrativeEmphasis}>That&apos;s the shift we&apos;re exploring in this masterclass.</p>

          <div className={styles.pillWrap}>
            <span className={styles.pillItem}><X className={styles.pillIcon} /> Control every thought</span>
            <span className={styles.pillItem}><X className={styles.pillIcon} /> Eliminate fear</span>
            <span className={styles.pillItem}><X className={styles.pillIcon} /> Have all the answers</span>
          </div>
          <p className={styles.narrativeEmphasis}>You need enough awareness to create a conscious choice.</p>
        </div>
      </section>

      {/* ── MEET YOUR COACH ── */}
      <section className={styles.coachSection}>
        <div className={styles.coachContainer}>
          <div className={styles.coachGrid}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={styles.coachImageWrapper}>
              <div className={styles.coachImageContainer}>
                <Image src="/mentors/renu-portrait.jpg" alt="Renu Sharma" fill className={styles.coachImageTag} />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={styles.coachInfo}>
              <p className={styles.coachLabel}>Meet Your Coach</p>
              <h2 className={styles.coachName}>Renu Sharma</h2>
              <p className={styles.coachTitle}>Coach | Founder of Captanova — Be the Captain of Your Life</p>

              <p className={styles.coachBio}>
                Renu Sharma is a coach and the founder of Captanova — a personal-development platform built around
                awareness, clarity, conscious choice and personal leadership. Her work comes from a simple belief:
              </p>
              <p className={styles.coachBelief}>You cannot consciously change what you have not become aware of.</p>
              <p className={styles.coachBio}>
                Renu&apos;s approach is not about telling people how they should live. It is about helping them
                understand themselves more clearly so they can make better choices for themselves.
              </p>
              <p className={styles.coachBio}>
                After years of working with people and navigating her own journey of growth, change and rebuilding,
                Renu created Captanova around one central question:
              </p>
              <p className={styles.coachBelief}>What would change if you stopped living on autopilot and started consciously leading your life?</p>

              <div className={styles.coachQuote}>
                &ldquo;I don&apos;t want to tell you how to live your life. I want to help you become aware enough to lead it yourself.&rdquo;
                <div className={styles.coachSignature}>— Renu Sharma</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── IN THIS FREE MASTERCLASS, YOU'LL DISCOVER ── */}
      <section className={styles.discoverSection}>
        <div className={styles.discoverHeader}>
          <p className={styles.sectionEyebrow} style={{ textAlign: "center" }}>What You&apos;ll Learn</p>
          <h2 className={styles.sectionHeadline} style={{ textAlign: "center" }}>In This Free Masterclass, You&apos;ll Discover</h2>
        </div>
        <div className={styles.discoverGrid}>
          {DISCOVER_ITEMS.map((item) => (
            <motion.div key={item.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={styles.discoverCard}>
              <div className={styles.discoverNumber}>{item.number}</div>
              <h3 className={styles.discoverTitle}>{item.title}</h3>
              <p className={styles.discoverDescription}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHAT WILL YOU WALK AWAY WITH ── */}
      <section className={`${styles.checklistSection} ${styles.altBg}`}>
        <div className={styles.checklistContainer}>
          <p className={styles.sectionEyebrow}>The Outcome</p>
          <h2 className={styles.sectionHeadline}>What Will You Walk Away With?</h2>
          <div className={styles.narrativeBody}>
            <p>By the end of the masterclass, you won&apos;t have your entire life figured out. And that&apos;s not the goal.</p>
            <p>You will have something more useful: <strong>a different way of seeing yourself.</strong></p>
            <p>You may begin to understand:</p>
          </div>
          <div className={styles.checklistGrid}>
            {WALK_AWAY_ITEMS.map((item) => (
              <div key={item} className={styles.checklistItem}>
                <Check className={styles.checklistIcon} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className={styles.checklistClosing}>
            Because you don&apos;t need to know the entire road. You need to see the next step clearly enough to take it.
          </p>
        </div>
      </section>

      {/* ── THIS MASTERCLASS IS FOR YOU IF... ── */}
      <section className={styles.checklistSection}>
        <div className={styles.checklistContainer}>
          <p className={styles.sectionEyebrow}>Is This You?</p>
          <h2 className={styles.sectionHeadline}>This Masterclass Is for You If...</h2>
          <div className={styles.checklistGrid}>
            {FOR_YOU_IF_ITEMS.map((item) => (
              <div key={item} className={styles.checklistItem}>
                <Check className={styles.checklistIcon} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className={styles.checklistClosing}>If you recognised yourself here, this masterclass was created for you.</p>
        </div>
      </section>

      {/* ── THIS IS NOT ABOUT FIXING YOU ── */}
      <section className={`${styles.narrativeSection} ${styles.altBg}`}>
        <div className={styles.narrativeContainer}>
          <h2 className={styles.sectionHeadline}>This Is Not About Fixing You.</h2>
          <div className={styles.narrativeBody}>
            <p><strong>You don&apos;t need to be fixed.</strong></p>
            <p>You need to understand yourself.</p>
            <p>Because the more clearly you see your thoughts, your patterns, your fears, your choices, the more freedom you have to decide what comes next.</p>
            <p>You don&apos;t have to transform your entire life tomorrow.</p>
          </div>
          <p className={styles.narrativeEmphasis}>You can begin with one conscious choice.</p>
        </div>
      </section>

      {/* ── THE CAPTANOVA APPROACH ── */}
      <section className={styles.narrativeSection}>
        <div className={styles.narrativeContainer}>
          <p className={styles.sectionEyebrow}>The Captanova Approach</p>
          <h2 className={styles.sectionHeadline}>Awareness → Clarity → Choice → Action</h2>

          <div className={styles.approachFlow}>
            {APPROACH_STEPS.map((step, i) => (
              <span key={step} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span className={styles.approachChip}>{step}</span>
                {i < APPROACH_STEPS.length - 1 && <span className={styles.approachArrow}>→</span>}
              </span>
            ))}
          </div>

          <div className={styles.narrativeBody}>
            <p>Awareness helps you see. Clarity helps you understand. Choice gives you direction. Action moves you forward.</p>
            <p>And when conscious choices are repeated... they begin to shape your identity and your life.</p>
            <p>That&apos;s the beginning of becoming:</p>
          </div>

          <p className={styles.captainStatement}>The Captain of Your Life.</p>
        </div>
      </section>

      {/* ── READY TO TAKE YOUR FIRST STEP (soft CTA) ── */}
      <section className={styles.softCtaSection}>
        <div className={styles.softCtaContainer}>
          <h2 className={styles.sectionHeadline} style={{ color: "white" }}>Ready to Take Your First Step?</h2>
          <div className={styles.softCtaBody}>
            <p>You can keep thinking about it.</p>
            <p>You can wait until the timing feels perfect.</p>
            <p>You can wait until you&apos;re more certain.</p>
            <p className={styles.softCtaEmphasis}>Or you can simply give yourself one hour.</p>
            <p>One hour to step out of the noise.</p>
            <p>One hour to understand your patterns.</p>
            <p>One hour to see your life from a different perspective.</p>
          </div>
          <p className={styles.softCtaEmphasis} style={{ marginBottom: "2rem" }}>
            One hour could change the way you see what comes next.
          </p>
          <motion.a href="#register" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={styles.secondaryCtaButton}>
            Reserve My Free Seat
            <ArrowRight className={styles.ctaIcon} />
          </motion.a>
        </div>
      </section>

      {/* ── BOTTOM REGISTRATION: RESERVE YOUR FREE SEAT ── */}
      <section id="register" className={styles.registrationSection}>
        <RegistrationCard idPrefix="bottom" heading="Reserve Your Free Seat" ctaLabel="Yes — Save My Free Seat" />
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <p className={styles.sectionEyebrow} style={{ textAlign: "center" }}>Questions</p>
            <h2 className={styles.sectionHeadline} style={{ textAlign: "center" }}>Frequently Asked Questions</h2>
          </div>
          <div className={styles.faqList}>
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  {item.q}
                  <Plus className={styles.faqQuestionIcon} />
                </summary>
                <p className={styles.faqAnswer}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUR LIFE IS HAPPENING NOW (final CTA) ── */}
      <section className={styles.finalSection}>
        <div className={styles.finalContainer}>
          <h2 className={styles.sectionHeadline} style={{ color: "white" }}>Your Life Is Happening Now.</h2>
          <div className={styles.finalBody}>
            <p>Not when you finally have the perfect plan.</p>
            <p>Not when everyone understands your choices.</p>
            <p>Not when you have every answer.</p>
            <p>Not when you&apos;re no longer afraid.</p>
          </div>
          <p className={styles.finalWord}>NOW.</p>
          <p className={styles.finalQuestion}>
            Are you going to keep watching your life from the passenger seat?<br />
            Or are you ready to take the captain&apos;s seat?
          </p>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "2rem" }}>Stop Overthinking. Start Living.</h3>

          <motion.a href="#register" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={styles.primaryCtaButton} style={{ margin: "0 auto" }}>
            Reserve My Free Seat
            <ArrowRight className={styles.ctaIcon} />
          </motion.a>

          <div className={styles.finalMeta}>
            <span>📅 {dateLabel}</span>
            <span>⏰ {timeLabel}</span>
            <span>💻 Online</span>
            <span>⏱ 60 Minutes</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p className={styles.footerBrand}>CAPTANOVA ♾️</p>
          <p className={styles.footerTagline}>BE THE CAPTAIN OF YOUR LIFE.</p>
          <p className={styles.footerSignature}>Coach Renu Sharma — Founder, Captanova</p>

          <div className={styles.footerWhySection}>
            <p className={styles.footerWhyTitle}>Why Captanova?</p>
            <div className={styles.footerWhyGrid}>
              <div className={styles.footerWhyItem}>
                <strong>CAPTAIN</strong>
                <p>You take responsibility for the direction of your life.</p>
              </div>
              <div className={styles.footerWhyItem}>
                <strong>NOVA</strong>
                <p>A new beginning. A new light. A new way of seeing.</p>
              </div>
            </div>
            <p className={styles.footerCombined}>Together: Captanova — Be the Captain of Your Life.</p>
          </div>

          <p className={styles.footerLocation}>
            — Renu Sharma, Coach | Founder, Captanova<br />
            Copenhagen, Denmark | Indian Roots | Global Vision
          </p>
        </div>
      </footer>
    </main>
  );
}
