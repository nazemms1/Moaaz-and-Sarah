import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const GOLD = "#C5A46D";
const OW = "#F5F0E8";
const o = (a: number) => `rgba(245,240,232,${a})`;

const SCH = "'Scheherazade New', 'Amiri', serif";
const AMIRI = "'Amiri', 'Scheherazade New', serif";

function Divider({
  delay = 0,
  inView = true,
}: {
  delay?: number;
  inView?: boolean;
}) {
  return (
    <motion.div
      className="flex items-center gap-3 w-full max-w-xs mx-auto"
      initial={{ opacity: 0, scaleX: 0.3 }}
      animate={inView ? { opacity: 1, scaleX: 1 } : {}}
      transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${o(0.5)})`,
        }}
      />
      <div
        className="w-1 h-1 rounded-full"
        style={{ background: OW, opacity: 0.6 }}
      />
      <div
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to left, transparent, ${o(0.5)})`,
        }}
      />
    </motion.div>
  );
}

export function PresenceSection() {
  const [ref, inView] = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative w-full flex flex-col items-center justify-center py-20 px-6 text-center overflow-hidden"
      style={{ background: "#F5F0E8" }}
    >
      {/* Subtle corner ornaments */}
      {[
        { cls: "absolute top-4 left-4", d1: "M2 24 L2 2 L24 2", cx: 2, cy: 2 },
        {
          cls: "absolute top-4 right-4",
          d1: "M46 24 L46 2 L24 2",
          cx: 46,
          cy: 2,
        },
        {
          cls: "absolute bottom-4 left-4",
          d1: "M2 24 L2 46 L24 46",
          cx: 2,
          cy: 46,
        },
        {
          cls: "absolute bottom-4 right-4",
          d1: "M46 24 L46 46 L24 46",
          cx: 46,
          cy: 46,
        },
      ].map((c, i) => (
        <motion.div
          key={i}
          className={c.cls}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path
              d={c.d1}
              stroke={OW}
              strokeWidth="1.2"
              opacity="0.35"
              strokeLinecap="round"
            />
            <circle cx={c.cx} cy={c.cy} r="1.8" fill={OW} opacity="0.3" />
          </svg>
        </motion.div>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-5 max-w-lg w-full">
        {/* بِحُضُورِكُم تَكْتَمِل قِرَّتُنَا */}
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.9 }}
          style={{
            fontFamily: SCH,
            fontSize: "clamp(1.9rem, 6vw, 3.2rem)",
            fontWeight: 700,
            color: GOLD,
            lineHeight: 1.35,
            margin: 0,
            textShadow: `0 2px 18px rgba(0,0,0,0.15)`,
          }}
        >
          بِحُضُورِكُم تَكْتَمِل فَرْحَتُنَا
        </motion.h2>

        {/* YOUR PRESENCE COMPLETES OUR JOY */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontFamily: AMIRI,
            fontSize: "clamp(0.58rem, 1.5vw, 0.72rem)",
            letterSpacing: "0.38em",
            color: GOLD,
            direction: "ltr",
            margin: 0,
          }}
        >
          YOUR PRESENCE COMPLETES OUR JOY
        </motion.p>

        {/* Divider */}
        <Divider delay={0.42} inView={inView} />

        {/* سَعَادَتُنَا لَا تَكْتَمِل إِلَّا بِوُجُودِكُم مَعَنَا */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.9 }}
          style={{
            fontFamily: SCH,
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            fontWeight: 400,
            // color: GOLD,
            color: "#5A4A3ACC",
            lineHeight: 1.8,
            margin: 0,
            opacity: 0.85,
          }}
        >
          سَعَادَتُنَا لَا تَكْتَمِل إِلَّا بِوُجُودِكُم مَعَنَا
        </motion.p>

        {/* Bow image */}
        <motion.img
          src="/Moaaz-Habbab-Wedding/bow.png"
          alt=""
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            delay: 0.85,
            duration: 1,
            type: "spring",
            stiffness: 60,
          }}
          style={{ width: "clamp(90px, 22vw, 140px)" }}
        />
      </div>
    </section>
  );
}
