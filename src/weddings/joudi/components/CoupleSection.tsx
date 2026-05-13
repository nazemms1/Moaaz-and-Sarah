import { motion } from "framer-motion";
import { config } from "../config";
import { useLanguage } from "../context";

/* ── Palette ── */
const GOLD_LT = "#C5A46D";
const OW = "#F5F0E8";
const g = (a: number) => `rgba(201,168,76,${a})`;
const w = (a: number) => `rgba(245,240,232,${a})`;
const d = (a: number) => `rgba(26,18,8,${a})`;

const SCH = "'Scheherazade New', 'Amiri', serif";
const AMIRI = "'Amiri', 'Scheherazade New', serif";

/* ─────────────────────────────────────────────────────────────
   STARDUST
───────────────────────────────────────────────────────────── */
function StarDust() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {Array.from({ length: 55 }).map((_, i) => {
        const s = 1 + (i % 7) * 0.55;
        const lft = (i * 7.77 + 2) % 100;
        const top = (i * 4.13 + 7) % 100;
        const col = ["#fff", w(0.8), w(0.6), w(0.4), GOLD_LT][i % 5];
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: s,
              height: s,
              left: `${lft}%`,
              top: `${top}%`,
              background: col,
            }}
            animate={{
              opacity: [0, i % 3 === 0 ? 0.9 : 0.5, 0],
              y: [0, -(20 + (i % 5) * 8), 0],
              scale: [0, 1.4, 0],
            }}
            transition={{
              duration: 4 + (i % 8) * 0.8,
              repeat: Infinity,
              delay: (i * 0.27) % 8,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CORNER FILIGREE
───────────────────────────────────────────────────────────── */
function Filigree({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const sx = pos === "tr" || pos === "br" ? -1 : 1;
  const sy = pos === "bl" || pos === "br" ? -1 : 1;
  const posClass = {
    tl: "top-3 left-3 sm:top-6 sm:left-6",
    tr: "top-3 right-3 sm:top-6 sm:right-6",
    bl: "bottom-3 left-3 sm:bottom-6 sm:left-6",
    br: "bottom-3 right-3 sm:bottom-6 sm:right-6",
  }[pos];
  return (
    <motion.div
      className={`absolute ${posClass} pointer-events-none`}
      initial={{ opacity: 0, scale: 0.5, rotate: sx * sy * -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.4, duration: 1.2, type: "spring", stiffness: 70 }}
    >
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        style={{ transform: `scale(${sx},${sy})` }}
      >
        <path
          d="M6 80 L6 6 L80 6"
          stroke={OW}
          strokeWidth="1.4"
          strokeOpacity="0.45"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M14 80 L14 14 L80 14"
          stroke={OW}
          strokeWidth="0.7"
          strokeOpacity="0.18"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M6 6 L12 6 L6 12 Z" fill={OW} opacity="0.7" />
        <line
          x1="6"
          y1="44"
          x2="14"
          y2="44"
          stroke={OW}
          strokeWidth="0.8"
          strokeOpacity="0.3"
        />
        <line
          x1="44"
          y1="6"
          x2="44"
          y2="14"
          stroke={OW}
          strokeWidth="0.8"
          strokeOpacity="0.3"
        />
        <circle cx="14" cy="14" r="2.2" fill={OW} opacity="0.25" />
        <circle cx="6" cy="30" r="1.2" fill={OW} opacity="0.2" />
        <circle cx="30" cy="6" r="1.2" fill={OW} opacity="0.2" />
        <path
          d="M6 80 Q6 68 14 62 Q22 56 26 44"
          stroke={OW}
          strokeWidth="0.5"
          strokeOpacity="0.15"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M80 6 Q68 6 62 14 Q56 22 44 26"
          stroke={OW}
          strokeWidth="0.5"
          strokeOpacity="0.15"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   GOLD DIVIDER — decorative separator line with centre star
───────────────────────────────────────────────────────────── */
function GoldDivider({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="flex items-center gap-3 w-full max-w-xs sm:max-w-sm"
      initial={{ opacity: 0, scaleX: 0.3 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${w(0.5)})`,
        }}
      />
      <svg width="14" height="14" viewBox="0 0 14 14">
        <path
          d="M7 0 L8.6 5.4 L14 7 L8.6 8.6 L7 14 L5.4 8.6 L0 7 L5.4 5.4 Z"
          fill={OW}
          opacity="0.7"
        />
      </svg>
      <div
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to left, transparent, ${w(0.5)})`,
        }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
export function CoupleSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background photo — no backgroundAttachment:fixed (breaks on iOS Safari) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${config.sectionImages.couple})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Warm overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 110% 90% at 50% 44%,
          rgba(20,12,4,0.45) 0%,
          rgba(15,9,2,0.55) 55%,
          rgba(10,6,1,0.68) 100%)`,
        }}
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, ${d(0.12)} 100%)`,
        }}
      />

      {/* Top / bottom seals */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, ${d(0.18)}, transparent)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${d(0.18)}, transparent)`,
        }}
      />

      <StarDust />
      <Filigree pos="tl" />
      <Filigree pos="tr" />
      <Filigree pos="bl" />
      <Filigree pos="br" />

      {/* Corner bracket ornaments */}
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
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: c.delay, duration: 0.7 }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d={c.d1} stroke={OW} strokeWidth="1.5" opacity="0.35" />
            <path d={c.d2} stroke={OW} strokeWidth="0.8" opacity="0.15" />
            <circle cx={c.cx} cy={c.cy} r="2" fill={OW} opacity="0.4" />
          </svg>
        </motion.div>
      ))}

      {/* Ambient gold pulse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 42% at 50% 46%, ${g(0.16)} 0%, transparent 70%)`,
        }}
        animate={{ opacity: [0.15, 0.45, 0.15], scale: [0.95, 1.08, 0.95] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ══ CONTENT ══ */}
      <div
        className="relative z-10 w-full max-w-2xl mx-auto px-6 flex flex-col items-center gap-5 py-16"
        dir="rtl"
      >
        {/* Basmala */}
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          style={{
            fontFamily: SCH,
            fontSize: "clamp(1.1rem, 3.5vw, 1.5rem)",
            color: OW,
            letterSpacing: "0.04em",
            textAlign: "center",
          }}
        >
          بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
        </motion.p>

        {/* Separator after basmala */}
        <GoldDivider delay={0.3} />

        {/* Bride — title + name */}
        <motion.div
          className="flex flex-col items-center gap-1"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.1, type: "spring", stiffness: 65 }}
        >
          <span
            style={{
              fontFamily: AMIRI,
              fontSize: "clamp(0.85rem, 2.2vw, 1.1rem)",
              color: w(0.6),
              letterSpacing: "0.22em",
              direction: "rtl",
            }}
          >
            {t.partner2Title}
          </span>
          <h1
            style={{
              fontFamily: SCH,
              fontSize: "clamp(3.2rem, 11vw, 6.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: OW,
              textShadow: `0 0 60px ${w(0.35)}, 0 0 120px ${w(0.15)}, 0 3px 16px ${d(0.2)}`,
              textAlign: "center",
              margin: 0,
            }}
          >
            {t.partner2}
          </h1>
        </motion.div>

        {/* White heart */}
        <motion.span
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.78, duration: 0.8, type: "spring", stiffness: 80 }}
          style={{ fontSize: "clamp(1.6rem, 5vw, 2.4rem)", color: OW, lineHeight: 1 }}
        >
          ♡
        </motion.span>

        {/* Groom — title + name */}
        <motion.div
          className="flex flex-col items-center gap-1"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 1.1, type: "spring", stiffness: 65 }}
        >
          <span
            style={{
              fontFamily: AMIRI,
              fontSize: "clamp(0.85rem, 2.2vw, 1.1rem)",
              color: w(0.6),
              letterSpacing: "0.22em",
              direction: "rtl",
            }}
          >
            {t.partner1Title}
          </span>
          <h1
            style={{
              fontFamily: SCH,
              fontSize: "clamp(3.2rem, 11vw, 6.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: OW,
              textShadow: `0 0 60px ${w(0.35)}, 0 0 120px ${w(0.15)}, 0 3px 16px ${d(0.2)}`,
              textAlign: "center",
              margin: 0,
            }}
          >
            {t.partner1}
          </h1>
        </motion.div>

        {/* English names */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            fontFamily: AMIRI,
            fontSize: "clamp(0.95rem, 2.5vw, 1.25rem)",
            color: w(0.65),
            letterSpacing: "0.18em",
            textAlign: "center",
            direction: "ltr",
          }}
        >
          Dr. Sarah &amp; Dr. Muhammad Moaaz
        </motion.p>

        {/* Separator before date */}
        <GoldDivider delay={1.35} />

        {/* Date — Arabic */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            fontFamily: SCH,
            fontSize: "clamp(1.05rem, 3vw, 1.4rem)",
            color: OW,
            letterSpacing: "0.06em",
            textAlign: "center",
          }}
        >
          {t.displayDate}
        </motion.p>

        {/* Date — English */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.65, duration: 0.8 }}
          style={{
            fontFamily: AMIRI,
            fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
            color: w(0.5),
            letterSpacing: "0.12em",
            textAlign: "center",
            direction: "ltr",
          }}
        >
          Tuesday, June 2, 2026
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <span
          style={{
            color: w(0.3),
            fontSize: "0.55rem",
            letterSpacing: "0.35em",
            fontFamily: AMIRI,
          }}
        >
          {t.scrollDown}
        </span>
        <motion.div
          style={{
            width: 1.5,
            height: 40,
            background: `linear-gradient(to bottom, white, transparent)`,
          }}
          animate={{ y: [0, 8, 0], opacity: [0.3, 0.85, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.1 }}
        />
      </motion.div>
    </section>
  );
}
