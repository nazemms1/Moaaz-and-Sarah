import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { theme } from "../theme";
import { config } from "../config";

const GOLD = "#C5A46D";
const BG_CARD = "#FFFFFF";
const g = (a: number) => `rgba(197,164,109,${a})`;

const SCH = "'Scheherazade New', 'Amiri', serif";
const AMIRI = "'Amiri', 'Scheherazade New', serif";


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
      transition={{ delay, duration: 0.9, type: "spring", stiffness: 55, damping: 16 }}
    >
      <div
        className="relative flex flex-col items-center"
        style={{
          background: BG_CARD,
          border: `1px solid ${g(0.18)}`,
          boxShadow: `0 4px 24px ${g(0.08)}, 0 1px 0 ${g(0.12)}`,
          padding: "clamp(1.6rem, 4vw, 2.4rem) clamp(1.4rem, 4vw, 2.2rem)",
        }}
      >
        {/* Corner marks */}
        {(["tl", "tr", "bl", "br"] as const).map((pos) => {
          const t2 = pos[0] === "t";
          const l  = pos[1] === "l";
          return (
            <div key={pos} className="absolute" style={{
              top: t2 ? 8 : undefined, bottom: t2 ? undefined : 8,
              left: l ? 8 : undefined, right: l ? undefined : 8,
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d={t2 && l ? "M0 14 L0 0 L14 0" : t2 ? "M16 14 L16 0 L2 0" : l ? "M0 2 L0 16 L14 16" : "M16 2 L16 16 L2 16"}
                  stroke={GOLD} strokeWidth="1.2" opacity="0.5" strokeLinecap="round"
                />
              </svg>
            </div>
          );
        })}

        {/* Tag pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.1, duration: 0.55 }}
          style={{
            background: g(0.1),
            border: `1px solid ${g(0.3)}`,
            borderRadius: "999px",
            padding: "0.22em 1.1em",
            marginBottom: "1rem",
          }}
        >
          <span style={{
            fontFamily: AMIRI,
            fontSize: "clamp(0.72rem, 1.8vw, 0.86rem)",
            color: GOLD,
            letterSpacing: "0.04em",
          }}>
            {tag}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.22, duration: 0.85, type: "spring" }}
          style={{
            fontFamily: SCH,
            fontSize: "clamp(1.65rem, 5.5vw, 2.7rem)",
            fontWeight: 700,
            color: GOLD,
            lineHeight: 1.35,
            textAlign: "center",
            marginBottom: "0.15em",
            direction: "rtl",
          }}
        >
          {title}
        </motion.h2>

        {/* Gold thin rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: delay + 0.38, duration: 0.7 }}
          style={{
            width: "38%",
            height: "1px",
            background: `linear-gradient(to right, transparent, ${g(0.55)}, transparent)`,
            margin: "0.65em 0",
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.48, duration: 0.7 }}
          style={{
            fontFamily: AMIRI,
            fontSize: "clamp(0.9rem, 2.3vw, 1.1rem)",
            color: `rgba(100,72,20,0.65)`,
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
          className="text-center mb-1"
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

        {/* English subtitle */}
        <motion.p
          className="text-center mb-8"
          style={{
            fontFamily: AMIRI,
            fontSize: "clamp(0.6rem, 1.6vw, 0.74rem)",
            letterSpacing: "0.38em",
            color: g(0.65),
            direction: "ltr",
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          THE FAMILIES
        </motion.p>

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
