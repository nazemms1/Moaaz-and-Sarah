import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { theme } from "../theme";
import { config } from "../config";

const GOLD = "#C9A84C";
const BG_CARD = "#FFFDF8";
const g = (a: number) => `rgba(201,168,76,${a})`;

const SCH = "'Scheherazade New', 'Amiri', serif";
const AMIRI = "'Amiri', 'Scheherazade New', serif";

function RingIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <defs>
        <filter id="ringGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#ringGlow)">
        <circle
          cx="22"
          cy="22"
          r="16"
          stroke={GOLD}
          strokeWidth="1.5"
          strokeOpacity="0.7"
          fill="none"
        />
        <circle
          cx="22"
          cy="22"
          r="11"
          stroke={GOLD}
          strokeWidth="0.7"
          strokeOpacity="0.35"
          fill="none"
          strokeDasharray="2 3"
        />
        <circle cx="22" cy="22" r="4.5" fill={GOLD} opacity="0.9" />
        <circle cx="22" cy="22" r="2.5" fill="#FFFDF8" opacity="0.8" />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const r = (deg * Math.PI) / 180;
          return (
            <circle
              key={i}
              cx={22 + Math.cos(r) * 16}
              cy={22 + Math.sin(r) * 16}
              r="1.5"
              fill={GOLD}
              opacity="0.6"
            />
          );
        })}
      </g>
    </svg>
  );
}

function FamilyCard({
  tag,
  title,
  subtitle,
  delay,
}: {
  tag: string;
  title: string;
  subtitle: string;
  delay: number;
}) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.9,
        type: "spring",
        stiffness: 55,
        damping: 16,
      }}
    >
      <div
        className="relative flex flex-col items-center"
        style={{
          background: BG_CARD,
          border: `1px solid ${g(0.2)}`,
          boxShadow: `0 6px 36px ${g(0.1)}, inset 0 1px 0 ${g(0.15)}, inset 0 -1px 0 ${g(0.07)}`,
          padding: "clamp(1.8rem, 5vw, 2.8rem) clamp(1.6rem, 5vw, 2.4rem)",
        }}
      >
        {/* Top gold bar */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{
            background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
          }}
        />

        {/* Corner marks */}
        {(["tl", "tr", "bl", "br"] as const).map((pos) => {
          const t2 = pos[0] === "t";
          const l = pos[1] === "l";
          return (
            <div
              key={pos}
              className="absolute"
              style={{
                top: t2 ? 7 : undefined,
                bottom: t2 ? undefined : 7,
                left: l ? 7 : undefined,
                right: l ? undefined : 7,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d={
                    t2 && l
                      ? "M0 12 L0 0 L12 0"
                      : t2
                        ? "M14 12 L14 0 L2 0"
                        : l
                          ? "M0 2 L0 14 L12 14"
                          : "M14 2 L14 14 L2 14"
                  }
                  stroke={GOLD}
                  strokeWidth="1.3"
                  opacity="0.45"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          );
        })}

        {/* Tag pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.12, duration: 0.6 }}
          style={{
            background: g(0.09),
            border: `1px solid ${g(0.28)}`,
            borderRadius: "999px",
            padding: "0.28em 1.2em",
            marginBottom: "1.1em",
          }}
        >
          <span
            style={{
              fontFamily: AMIRI,
              fontSize: "clamp(0.78rem, 1.9vw, 0.92rem)",
              color: GOLD,
              letterSpacing: "0.06em",
            }}
          >
            {tag}
          </span>
        </motion.div>

        {/* Ring icon */}
        <motion.div
          className="mb-3"
          initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            delay: delay + 0.2,
            duration: 1,
            type: "spring",
            stiffness: 60,
          }}
        >
          <RingIcon />
        </motion.div>

        {/* Title — حَرَمُ ... */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.3, duration: 0.85, type: "spring" }}
          style={{
            fontFamily: SCH,
            fontSize: "clamp(1.55rem, 5.5vw, 2.6rem)",
            fontWeight: 700,
            color: GOLD,
            lineHeight: 1.4,
            textAlign: "center",
            textShadow: `0 0 28px ${g(0.22)}`,
            marginBottom: "0.2em",
            direction: "rtl",
          }}
        >
          {title}
        </motion.h2>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: delay + 0.42, duration: 0.75 }}
          style={{
            width: "40%",
            height: "1px",
            background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
            margin: "0.7em 0",
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.52, duration: 0.7 }}
          style={{
            fontFamily: AMIRI,
            fontSize: "clamp(0.92rem, 2.4vw, 1.12rem)",
            color: `rgba(120,90,30,0.72)`,
            textAlign: "center",
            lineHeight: 1.8,
            direction: "rtl",
          }}
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function FamiliesSection() {
  const [ref, inView] = useScrollAnimation();

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 md:py-36 px-6 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9 }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${config.sectionImages.backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(255,253,248,0.48)" }}
      />

      {/* Dust particles */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 1 + (i % 4) * 0.5,
              height: 1 + (i % 4) * 0.5,
              left: `${(i * 5.1 + 3) % 100}%`,
              top: `${(i * 4.7 + 6) % 100}%`,
              background: theme.dust[i % 4],
            }}
            animate={{ opacity: [0, 0.7, 0], scale: [0, 1.5, 0] }}
            transition={{
              duration: 3.5 + (i % 5) * 0.8,
              repeat: Infinity,
              delay: (i * 0.37) % 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Corner ornaments */}
      {[
        {
          cls: "absolute top-5 left-5",
          d1: "M2 30 L2 2 L30 2",
          d2: "M8 30 L8 8 L30 8",
          cx: 2,
          cy: 2,
          delay: 0.2,
        },
        {
          cls: "absolute top-5 right-5",
          d1: "M62 30 L62 2 L34 2",
          d2: "M56 30 L56 8 L34 8",
          cx: 62,
          cy: 2,
          delay: 0.3,
        },
        {
          cls: "absolute bottom-5 left-5",
          d1: "M2 34 L2 62 L30 62",
          d2: "M8 34 L8 56 L30 56",
          cx: 2,
          cy: 62,
          delay: 0.4,
        },
        {
          cls: "absolute bottom-5 right-5",
          d1: "M62 34 L62 62 L34 62",
          d2: "M56 34 L56 56 L34 56",
          cx: 62,
          cy: 62,
          delay: 0.5,
        },
      ].map((c, i) => (
        <motion.div
          key={i}
          className={c.cls}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: c.delay, duration: 0.7 }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d={c.d1} stroke={GOLD} strokeWidth="1.5" opacity="0.4" />
            <path d={c.d2} stroke={GOLD} strokeWidth="0.8" opacity="0.15" />
            <circle cx={c.cx} cy={c.cy} r="2" fill={GOLD} opacity="0.5" />
          </svg>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Top divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          <div
            className="h-px w-10 sm:w-16"
            style={{
              background: `linear-gradient(to right, transparent, ${g(0.45)})`,
            }}
          />
          <div
            className="w-1 h-1 rounded-full"
            style={{ background: GOLD, opacity: 0.5 }}
          />
          <div
            className="h-px w-10 sm:w-16"
            style={{
              background: `linear-gradient(to left, transparent, ${g(0.45)})`,
            }}
          />
        </motion.div>

        {/* Section title */}
        <motion.h2
          className="text-center mb-2"
          style={{
            fontFamily: SCH,
            fontSize: "clamp(2.2rem, 7vw, 3.8rem)",
            fontWeight: 700,
            color: GOLD,
            lineHeight: 1.2,
            textShadow: `0 0 40px ${g(0.2)}`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          أَهْلُ العَرُوسَيْن
        </motion.h2>

        {/* Dot separator */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: g(0.5) }}
          />
        </motion.div>

        {/* Family cards */}
        <div className="flex flex-col gap-6">
          <FamilyCard
            tag="عائلة العريس"
            title="حَرَمُ الحَاجِّ صُبْحِي حَبَّاب"
            subtitle="مُحَمَّد مُعَاذ حَبَّاب"
            delay={0.5}
          />
          <FamilyCard
            tag="عائلة العروسة"
            title="حَرَمُ الدُّكتُور عِمَاد رَيحَاوِي"
            subtitle="سَارَة رَيحَاوِي"
            delay={0.72}
          />
        </div>

        {/* Bottom divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <div
            className="h-px w-16 sm:w-24"
            style={{
              background: `linear-gradient(to right, transparent, ${g(0.35)})`,
            }}
          />
          <div
            className="w-1.5 h-1.5 rotate-45 border"
            style={{ borderColor: g(0.35) }}
          />
          <div
            className="h-px w-16 sm:w-24"
            style={{
              background: `linear-gradient(to left, transparent, ${g(0.35)})`,
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
