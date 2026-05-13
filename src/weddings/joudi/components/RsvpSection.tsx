import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { useLanguage } from "../context";

const GOLD = "#C5A46D";
const OW = "#F5F0E8";
const g = (a: number) => `rgba(197,164,109,${a})`;
const ow = (a: number) => `rgba(245,240,232,${a})`;

const SCH = "'Scheherazade New', 'Amiri', serif";
const AMIRI = "'Amiri', 'Scheherazade New', serif";

export function RsvpSection() {
  const { t } = useLanguage();
  const [ref, inView] = useScrollAnimation();

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 md:py-28 px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9 }}
    >
      {/* Background — same gold as VenueSection */}
      <div className="absolute inset-0" style={{ background: "#C5A46D" }} />

      {/* Corner ornaments */}
      {[
        { cls: "absolute top-5 left-5",  d1: "M2 30 L2 2 L30 2",   d2: "M8 30 L8 8 L30 8",   cx: 2,  cy: 2,  delay: 0.2 },
        { cls: "absolute top-5 right-5", d1: "M62 30 L62 2 L34 2",  d2: "M56 30 L56 8 L34 8",  cx: 62, cy: 2,  delay: 0.3 },
        { cls: "absolute bottom-5 left-5",  d1: "M2 34 L2 62 L30 62",  d2: "M8 34 L8 56 L30 56",  cx: 2,  cy: 62, delay: 0.4 },
        { cls: "absolute bottom-5 right-5", d1: "M62 34 L62 62 L34 62", d2: "M56 34 L56 56 L34 56", cx: 62, cy: 62, delay: 0.5 },
      ].map((c, i) => (
        <motion.div
          key={i}
          className={c.cls}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: c.delay, duration: 0.7 }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d={c.d1} stroke={OW} strokeWidth="1.5" opacity="0.3" />
            <path d={c.d2} stroke={OW} strokeWidth="0.8" opacity="0.14" />
            <circle cx={c.cx} cy={c.cy} r="2" fill={OW} opacity="0.35" />
          </svg>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">

        {/* Top divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          <div className="h-px w-10 sm:w-20" style={{ background: `linear-gradient(to right, transparent, ${ow(0.55)})` }} />
          <div className="w-1 h-1 rounded-full" style={{ background: OW, opacity: 0.65 }} />
          <div className="h-px w-10 sm:w-20" style={{ background: `linear-gradient(to left, transparent, ${ow(0.55)})` }} />
        </motion.div>

        {/* Icon — envelope / phone */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7, type: "spring", stiffness: 60 }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
            stroke={OW} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
            opacity="0.75"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 8.78A16 16 0 0 0 15.22 16.1l.96-.96a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72a2 2 0 0 1 1.72 2.01z" />
          </svg>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-center mb-3"
          style={{
            fontFamily: SCH,
            fontSize: "clamp(1.9rem, 6vw, 3rem)",
            fontWeight: 700,
            color: OW,
            lineHeight: 1.2,
            textShadow: `0 2px 20px rgba(0,0,0,0.15)`,
            direction: "rtl",
          }}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t.rsvpTitle}
        </motion.h2>

        {/* Thin gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.42, duration: 0.7 }}
          style={{
            width: "35%",
            height: "1px",
            background: `linear-gradient(to right, transparent, ${ow(0.5)}, transparent)`,
            marginBottom: "1.6rem",
          }}
        />

        {/* Main card */}
        <motion.div
          className="w-full flex flex-col items-center text-center"
          style={{
            background: "rgba(255,253,248,0.96)",
            borderRadius: "1.25rem",
            border: `1px solid ${g(0.2)}`,
            boxShadow: `0 8px 40px rgba(0,0,0,0.12)`,
            padding: "clamp(1.8rem, 5vw, 2.8rem) clamp(1.4rem, 4vw, 2.4rem)",
          }}
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.48, duration: 1, type: "spring", stiffness: 55, damping: 15 }}
        >
          {/* Body text */}
          <motion.p
            style={{
              fontFamily: SCH,
              fontSize: "clamp(1.05rem, 3vw, 1.3rem)",
              color: `rgba(100,70,20,0.82)`,
              lineHeight: 1.9,
              direction: "rtl",
              marginBottom: "1.2rem",
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.62, duration: 0.8 }}
          >
            {t.rsvpBody}
          </motion.p>

          {/* Deadline badge */}
          <motion.div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.15rem",
              background: g(0.08),
              border: `1px solid ${g(0.3)}`,
              borderRadius: "0.75rem",
              padding: "0.7rem 2rem",
              marginBottom: "1.4rem",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.72, duration: 0.7, type: "spring" }}
          >
            <span
              style={{
                fontFamily: SCH,
                fontSize: "clamp(1.4rem, 4.5vw, 2rem)",
                fontWeight: 700,
                color: GOLD,
                lineHeight: 1,
                direction: "rtl",
              }}
            >
              {t.rsvpDeadline}
            </span>
            <span
              style={{
                fontFamily: AMIRI,
                fontSize: "clamp(0.6rem, 1.5vw, 0.7rem)",
                letterSpacing: "0.22em",
                color: g(0.7),
                direction: "ltr",
                marginTop: "0.2em",
              }}
            >
              {t.rsvpDeadlineEn}
            </span>
          </motion.div>

          {/* Dotted divider */}
          <div style={{ width: "100%", borderTop: `1px dashed ${g(0.2)}`, marginBottom: "1.2rem" }} />

          {/* Thank-you note */}
          <motion.p
            style={{
              fontFamily: AMIRI,
              fontSize: "clamp(0.9rem, 2.3vw, 1.05rem)",
              color: `rgba(120,90,30,0.65)`,
              direction: "rtl",
              lineHeight: 1.8,
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.85, duration: 0.8 }}
          >
            {t.rsvpContact}
          </motion.p>
        </motion.div>

        {/* Bottom divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <div className="h-px w-16 sm:w-24" style={{ background: `linear-gradient(to right, transparent, ${ow(0.4)})` }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: ow(0.5) }} />
          <div className="h-px w-16 sm:w-24" style={{ background: `linear-gradient(to left, transparent, ${ow(0.4)})` }} />
        </motion.div>
      </div>
    </motion.section>
  );
}
