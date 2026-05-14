import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { config } from "../config";

const GOLD = "#C9A84C";
const GOLD_LT = "#D4AF6E";
// const BG = "#FDFAF4";
const g = (a: number) => `rgba(201,168,76,${a})`;

const SCH = "'Scheherazade New', 'Amiri', serif";
// const AMIRI = "'Amiri', 'Scheherazade New', serif";

function BowIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1.2,
        duration: 1,
        type: "spring",
        stiffness: 55,
        damping: 14,
      }}
    >
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
        {/* Left loop */}
        <path
          d="M60 40 C50 30 28 18 18 24 C10 29 14 42 24 44 C36 47 52 38 60 40"
          stroke={GOLD}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M60 40 C52 32 32 22 22 26 C16 29 18 38 26 41 C38 44 54 37 60 40"
          stroke={GOLD_LT}
          strokeWidth="0.7"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* Right loop */}
        <path
          d="M60 40 C70 30 92 18 102 24 C110 29 106 42 96 44 C84 47 68 38 60 40"
          stroke={GOLD}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M60 40 C68 32 88 22 98 26 C104 29 102 38 94 41 C82 44 66 37 60 40"
          stroke={GOLD_LT}
          strokeWidth="0.7"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* Left tail */}
        <path
          d="M60 40 C54 50 38 64 28 68 C22 70 18 66 22 62 C28 56 48 48 60 40"
          stroke={GOLD}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
        {/* Right tail */}
        <path
          d="M60 40 C66 50 82 64 92 68 C98 70 102 66 98 62 C92 56 72 48 60 40"
          stroke={GOLD}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
        {/* Center knot */}
        <ellipse
          cx="60"
          cy="40"
          rx="5"
          ry="6"
          stroke={GOLD}
          strokeWidth="1.3"
          fill="none"
        />
        <ellipse cx="60" cy="40" rx="2.5" ry="3.5" fill={GOLD} opacity="0.35" />
      </svg>
    </motion.div>
  );
}

export function WelcomeSection() {
  const [ref, inView] = useScrollAnimation();

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 3rem)",
      }}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${config.sectionImages.backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(255,253,248,0.6)" }}
      />

      {/* Thin gold top border */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "3px",
          background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
        }}
      />
      {/* Thin gold bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "3px",
          background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
        }}
      />

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 45%, rgba(201,168,76,0.04) 0%, transparent 70%)`,
        }}
      />

      {/* Corner ornaments */}
      {[
        { cls: "absolute top-5 left-5", d: "M0 28 L0 0 L28 0", flip: false },
        { cls: "absolute top-5 right-5", d: "M32 28 L32 0 L4 0", flip: false },
        {
          cls: "absolute bottom-5 left-5",
          d: "M0 4 L0 32 L28 32",
          flip: false,
        },
        {
          cls: "absolute bottom-5 right-5",
          d: "M32 4 L32 32 L4 32",
          flip: false,
        },
      ].map((c, i) => (
        <motion.div
          key={i}
          className={c.cls}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d={c.d}
              stroke={GOLD}
              strokeWidth="1.2"
              opacity="0.4"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto gap-0">
        {/* Arabic calligraphy title */}
        <motion.h1
          style={{
            fontFamily: SCH,
            fontSize: "clamp(2.4rem, 9vw, 4.2rem)",
            fontWeight: 700,
            color: GOLD,
            lineHeight: 1.3,
            textShadow: `0 0 30px ${g(0.15)}`,
            marginBottom: "0.3em",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.3,
            duration: 0.9,
            type: "spring",
            stiffness: 60,
          }}
        >
          بِحُضُورِكُم تَكْتَمِلُ فَرْحَتُنَا
        </motion.h1>

        {/* Decorative dots */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-7"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 4 - i * 0.8,
                height: 4 - i * 0.8,
                borderRadius: "50%",
                background: `rgba(201,168,76,${0.6 - i * 0.15})`,
              }}
            />
          ))}
        </motion.div>

        {/* Divider with diamond */}
        <motion.div
          className="flex items-center gap-3 w-full justify-center mb-6"
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div
            className="h-px flex-1"
            style={{
              background: `linear-gradient(to right, transparent, ${g(0.35)})`,
            }}
          />
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path d="M5 0 L10 5 L5 10 L0 5 Z" fill={GOLD} opacity="0.65" />
          </svg>
          <div
            className="h-px flex-1"
            style={{
              background: `linear-gradient(to left, transparent, ${g(0.35)})`,
            }}
          />
        </motion.div>

        {/* Welcome message */}
        <motion.p
          style={{
            fontFamily: SCH,
            fontSize: "clamp(1.3rem, 4vw, 1.9rem)",
            color: `rgba(80,60,20,0.75)`,
            lineHeight: 1.9,
            direction: "rtl",
            marginBottom: "2.2em",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.9 }}
        >
  سعادتنا لا تكتمل إلا بوجودكم معنا
        </motion.p>

        {/* Bow icon */}
        <BowIcon />
      </div>
    </motion.section>
  );
}
