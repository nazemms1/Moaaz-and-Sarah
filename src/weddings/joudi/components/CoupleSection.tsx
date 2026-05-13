import { motion } from "framer-motion";
import { config } from "../config";
import { useLanguage } from "../context";

/* ── Palette ── */
const GOLD = "#C9A84C";
const GOLD_LT = "#E8CC80";
const GOLD_DK = "#A8883A";
const IVORY = "#FAF6EE";
const DEEP = "#1A1208";
const g = (a: number) => `rgba(201,168,76,${a})`;
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
        const col = [GOLD, GOLD_LT, GOLD_DK, g(0.5), "#fff"][i % 5];
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
          stroke={GOLD}
          strokeWidth="1.4"
          strokeOpacity="0.6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M14 80 L14 14 L80 14"
          stroke={GOLD}
          strokeWidth="0.7"
          strokeOpacity="0.28"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M6 6 L12 6 L6 12 Z" fill={GOLD} opacity="0.9" />
        <line
          x1="6"
          y1="44"
          x2="14"
          y2="44"
          stroke={GOLD}
          strokeWidth="0.8"
          strokeOpacity="0.45"
        />
        <line
          x1="44"
          y1="6"
          x2="44"
          y2="14"
          stroke={GOLD}
          strokeWidth="0.8"
          strokeOpacity="0.45"
        />
        <circle cx="14" cy="14" r="2.2" fill={GOLD} opacity="0.35" />
        <circle cx="6" cy="30" r="1.2" fill={GOLD} opacity="0.3" />
        <circle cx="30" cy="6" r="1.2" fill={GOLD} opacity="0.3" />
        <path
          d="M6 80 Q6 68 14 62 Q22 56 26 44"
          stroke={GOLD}
          strokeWidth="0.5"
          strokeOpacity="0.22"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M80 6 Q68 6 62 14 Q56 22 44 26"
          stroke={GOLD}
          strokeWidth="0.5"
          strokeOpacity="0.22"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ROD OF ASCLEPIUS — vertical (desktop sidebar) variant
───────────────────────────────────────────────────────────── */
function AsclepiusVertical() {
  return (
    <motion.div
      className="hidden sm:flex items-center justify-center shrink-0 z-20 select-none"
      style={{ width: "clamp(60px, 11vw, 90px)" }}
      initial={{ opacity: 0, scale: 0.2, rotate: -15 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        delay: 1,
        duration: 1.4,
        type: "spring",
        stiffness: 60,
        damping: 14,
      }}
    >
      <svg width="70" height="260" viewBox="0 0 70 260" fill="none">
        <defs>
          <linearGradient id="staffGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={GOLD_LT} stopOpacity="0" />
            <stop offset="15%" stopColor={GOLD} stopOpacity="1" />
            <stop offset="50%" stopColor={GOLD_LT} stopOpacity="1" />
            <stop offset="85%" stopColor={GOLD} stopOpacity="1" />
            <stop offset="100%" stopColor={GOLD_LT} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="serpentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={GOLD_DK} />
            <stop offset="50%" stopColor={GOLD_LT} />
            <stop offset="100%" stopColor={GOLD_DK} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#glow)">
          <path
            d="M35 8 L37.5 20 L48 14 L41 24 L53 27 L41 30 L48 40 L37.5 34 L35 46 L32.5 34 L22 40 L29 30 L17 27 L29 24 L22 14 L32.5 20 Z"
            fill={GOLD}
            opacity="0.95"
          />
          <circle cx="35" cy="27" r="5.5" fill={IVORY} opacity="0.65" />
          <circle cx="35" cy="27" r="2.5" fill={GOLD} opacity="1" />
        </g>
        <rect
          x="33.5"
          y="50"
          width="3"
          height="195"
          rx="1.5"
          fill="url(#staffGrad)"
        />
        <path
          d="M35 65 C52 72 52 84 35 90 C18 96 18 108 35 114"
          stroke="url(#serpentGrad)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M35 65 C52 72 52 84 35 90 C18 96 18 108 35 114"
          stroke={IVORY}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M35 114 C52 121 52 133 35 139 C18 145 18 157 35 163"
          stroke="url(#serpentGrad)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M35 114 C52 121 52 133 35 139 C18 145 18 157 35 163"
          stroke={IVORY}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M35 163 C52 170 52 182 35 188 C18 194 18 200 35 204"
          stroke="url(#serpentGrad)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M35 163 C52 170 52 182 35 188 C18 194 18 200 35 204"
          stroke={IVORY}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
        />
        <ellipse cx="35" cy="61" rx="6" ry="8" fill={GOLD} opacity="0.9" />
        <ellipse cx="35" cy="59" rx="4" ry="3" fill={GOLD_LT} opacity="0.7" />
        <circle cx="32.5" cy="59" r="1.2" fill={DEEP} opacity="0.9" />
        <circle cx="37.5" cy="59" r="1.2" fill={DEEP} opacity="0.9" />
        <path
          d="M33 67 L35 70 L37 67"
          stroke={GOLD_LT}
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path d="M28 245 L35 255 L42 245 L35 248 Z" fill={GOLD} opacity="0.8" />
        <line
          x1="35"
          y1="245"
          x2="35"
          y2="248"
          stroke={GOLD_LT}
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ROD OF ASCLEPIUS — horizontal (mobile between cards) variant
   The staff goes left-right with the serpent coiling over it.
───────────────────────────────────────────────────────────── */
function AsclepiusHorizontal() {
  return (
    <motion.div
      className="flex sm:hidden items-center justify-center w-full select-none"
      style={{ height: "72px" }}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.9,
        duration: 1.2,
        type: "spring",
        stiffness: 60,
        damping: 14,
      }}
    >
      <svg width="220" height="60" viewBox="0 0 220 60" fill="none">
        <defs>
          <linearGradient id="hStaffGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={GOLD_LT} stopOpacity="0" />
            <stop offset="15%" stopColor={GOLD} stopOpacity="1" />
            <stop offset="50%" stopColor={GOLD_LT} stopOpacity="1" />
            <stop offset="85%" stopColor={GOLD} stopOpacity="1" />
            <stop offset="100%" stopColor={GOLD_LT} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hSerpentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={GOLD_DK} />
            <stop offset="50%" stopColor={GOLD_LT} />
            <stop offset="100%" stopColor={GOLD_DK} />
          </linearGradient>
          <filter id="hGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Horizontal staff */}
        <rect
          x="10"
          y="29"
          width="200"
          height="2.5"
          rx="1.25"
          fill="url(#hStaffGrad)"
        />

        {/* Central 8-pointed star */}
        <g filter="url(#hGlow)">
          <path
            d="M110 18 L112 25 L119 27 L112 29 L110 36 L108 29 L101 27 L108 25 Z"
            fill={GOLD}
            opacity="0.95"
          />
          <circle cx="110" cy="27" r="4" fill={IVORY} opacity="0.6" />
          <circle cx="110" cy="27" r="2" fill={GOLD} opacity="1" />
        </g>

        {/* Serpent coiling over horizontal staff — two S-curves */}
        <path
          d="M40 30 C50 15 65 15 75 30 C85 45 100 45 110 30 C120 15 135 15 145 30 C155 45 170 45 180 30"
          stroke="url(#hSerpentGrad)"
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M40 30 C50 15 65 15 75 30 C85 45 100 45 110 30 C120 15 135 15 145 30 C155 45 170 45 180 30"
          stroke={IVORY}
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.38"
        />

        {/* Serpent head (left side) */}
        <ellipse cx="36" cy="30" rx="8" ry="5.5" fill={GOLD} opacity="0.9" />
        <ellipse
          cx="34"
          cy="30"
          rx="5"
          ry="3.5"
          fill={GOLD_LT}
          opacity="0.65"
        />
        <circle cx="34" cy="28" r="1.1" fill={DEEP} opacity="0.9" />
        <circle cx="34" cy="32" r="1.1" fill={DEEP} opacity="0.9" />
        <path
          d="M28 29 L25 27 M28 31 L25 33"
          stroke={GOLD_LT}
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* End finial */}
        <path d="M190 25 L200 30 L190 35 L193 30 Z" fill={GOLD} opacity="0.8" />
      </svg>
    </motion.div>
  );
}


/* ─────────────────────────────────────────────────────────────
   HORIZONTAL DIVIDER — decorative gold line used on mobile
   between the eyebrow and cards, and between cards.
───────────────────────────────────────────────────────────── */
function GoldLine({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="flex items-center gap-3 w-full"
      initial={{ opacity: 0, scaleX: 0.4 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${g(0.6)})`,
        }}
      />
      <svg width="16" height="16" viewBox="0 0 16 16">
        <path
          d="M8 0 L9.8 6.2 L16 8 L9.8 9.8 L8 16 L6.2 9.8 L0 8 L6.2 6.2 Z"
          fill={GOLD}
          opacity="0.82"
        />
        <circle cx="8" cy="8" r="2.2" fill={IVORY} opacity="0.5" />
      </svg>
      <div
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to left, transparent, ${g(0.6)})`,
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MINI SERPENT-STAFF ICON — flanks the doctor title
───────────────────────────────────────────────────────────── */
function StaffIcon({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="14"
      height="26"
      viewBox="0 0 14 26"
      fill="none"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <line
        x1="7"
        y1="2"
        x2="7"
        y2="24"
        stroke={GOLD_DK}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M7 5 C12 7.5 12 11 7 13 C2 15 2 18.5 7 21"
        stroke={GOLD}
        strokeWidth="1.9"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="7" cy="2.5" r="2.2" fill={GOLD} opacity="0.9" />
      <circle cx="7" cy="2.5" r="0.9" fill={IVORY} opacity="0.65" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   PERSON CARD
   • Mobile  (< sm): full-width, centered, text-center
   • Desktop (≥ sm): half-width panel, text aligned to its side
───────────────────────────────────────────────────────────── */
function PersonCard({
  relation,
  fatherName,
  title,
  name,
  delay,
  side,
}: {
  relation: string;
  fatherName: string;
  title: string;
  name: string;
  delay: number;
  side: "right" | "left";
}) {
  const isRight = side === "right";
  const enterX = isRight ? 70 : -70;

  return (
    <motion.div
      className="relative flex-1 flex flex-col min-w-0 px-3 py-3"
      initial={{ opacity: 0, x: enterX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 1.4, type: "spring", stiffness: 52, damping: 17 }}
    >
      {/* Card frame */}
      <div
        className="relative flex flex-col items-center z-10 h-full"
        style={{
          padding: "clamp(1.2rem, 3vw, 2.4rem) clamp(1rem, 3vw, 2.5rem)",
          textAlign: "center",
          background: `linear-gradient(170deg, rgba(201,168,76,0.12) 0%, rgba(26,18,8,0.32) 50%, rgba(201,168,76,0.08) 100%)`,
          border: `1px solid ${g(0.28)}`,
          boxShadow: `0 4px 28px ${d(0.25)}, inset 0 1px 0 ${g(0.20)}, inset 0 -1px 0 ${g(0.10)}`,
        }}
      >
        {/* ── Corner marks ── */}
        {(["tl","tr","bl","br"] as const).map(pos => {
          const t2 = pos[0] === "t";
          const l  = pos[1] === "l";
          return (
            <div key={pos} className="absolute" style={{ top: t2 ? 6 : undefined, bottom: t2 ? undefined : 6, left: l ? 6 : undefined, right: l ? undefined : 6 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d={t2 && l ? "M0 12 L0 0 L12 0" : t2 ? "M14 12 L14 0 L2 0" : l ? "M0 2 L0 14 L12 14" : "M14 2 L14 14 L2 14"}
                  stroke={GOLD} strokeWidth="1.2" opacity="0.55" strokeLinecap="round" />
              </svg>
            </div>
          );
        })}

        {/* ── Relation + father name on one line ── */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.12, duration: 0.7 }}
          style={{
            fontFamily: AMIRI,
            fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
            color: IVORY,
            lineHeight: 1.6,
            marginBottom: "0.4em",
          }}
        >
          <span style={{ color: g(0.75), letterSpacing: "0.06em" }}>{relation}</span>
          {" "}
          <span style={{ color: IVORY, fontWeight: 600 }}>{fatherName}</span>
        </motion.p>

        {/* ── Thin gold rule ── */}
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.7 }}
          style={{ width: "40%", height: "1px", background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`, marginBottom: "0.9em" }}
        />

        {/* ── Doctor title + flanking staff icons ── */}
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.28, duration: 0.8, type: "spring" }}
          style={{ marginBottom: "0.15em" }}
        >
          <StaffIcon />
          <p style={{ fontFamily: AMIRI, fontSize: "clamp(0.95rem, 2.2vw, 1.2rem)", fontWeight: 500, color: GOLD_LT, letterSpacing: "0.04em" }}>
            {title}
          </p>
          <StaffIcon flip />
        </motion.div>

        {/* ── NAME — hero ── */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.42, duration: 1.1, type: "spring", stiffness: 70 }}
          style={{
            fontFamily: SCH,
            fontSize: "clamp(3rem, 10vw, 6rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            color: GOLD,
            textShadow: `0 0 50px ${g(0.5)}, 0 0 100px ${g(0.2)}, 0 3px 14px ${d(0.1)}`,
            margin: "0.05em 0 0.5em",
          }}
        >
          {name}
        </motion.h1>

        {/* ── Three animated dots ── */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-3"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.88, duration: 0.7 }}
        >
          {[GOLD, g(0.5), g(0.22)].map((col, i) => (
            <motion.div key={i}
              style={{ width: 5 - i * 1.2, height: 5 - i * 1.2, borderRadius: "50%", background: col, flexShrink: 0 }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
export function CoupleSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background photo — same pattern as other sections */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${config.sectionImages.couple})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
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
          background: `linear-gradient(to top,    ${d(0.18)}, transparent)`,
        }}
      />

      <StarDust />
      <Filigree pos="tl" />
      <Filigree pos="tr" />
      <Filigree pos="bl" />
      <Filigree pos="br" />

      {/* Corner bracket ornaments — same as other sections */}
      {[
        { cls: "absolute top-5 left-5",  d1: "M2 30 L2 2 L30 2",   d2: "M8 30 L8 8 L30 8",   cx: 2,  cy: 2,  delay: 0.2 },
        { cls: "absolute top-5 right-5", d1: "M62 30 L62 2 L34 2",  d2: "M56 30 L56 8 L34 8",  cx: 62, cy: 2,  delay: 0.3 },
        { cls: "absolute bottom-5 left-5",  d1: "M2 34 L2 62 L30 62",  d2: "M8 34 L8 56 L30 56",  cx: 2,  cy: 62, delay: 0.4 },
        { cls: "absolute bottom-5 right-5", d1: "M62 34 L62 62 L34 62", d2: "M56 34 L56 56 L34 56", cx: 62, cy: 62, delay: 0.5 },
      ].map((c, i) => (
        <motion.div key={i} className={c.cls} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: c.delay, duration: 0.7 }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d={c.d1} stroke={GOLD} strokeWidth="1.5" opacity="0.5" />
            <path d={c.d2} stroke={GOLD} strokeWidth="0.8" opacity="0.2" />
            <circle cx={c.cx} cy={c.cy} r="2" fill={GOLD} opacity="0.6" />
          </svg>
        </motion.div>
      ))}

      {/* Ambient gold pulse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 42% at 50% 46%, ${g(0.16)} 0%, transparent 70%)`,
        }}
        animate={{ opacity: [0.25, 0.75, 0.25], scale: [0.95, 1.08, 0.95] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ══ CONTENT ══ */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 flex flex-col items-center gap-6 sm:gap-8 py-14">
        {/* Top ornamental divider — matches other sections */}
        <motion.div
          className="flex items-center justify-center gap-3 w-full"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          <div className="h-px w-10 sm:w-16" style={{ background: `linear-gradient(to right, transparent, ${g(0.5)})` }} />
          <div className="w-1 h-1 rounded-full" style={{ background: GOLD, opacity: 0.5 }} />
          <div className="h-px w-10 sm:w-16" style={{ background: `linear-gradient(to left, transparent, ${g(0.5)})` }} />
        </motion.div>

        {/* Eyebrow label */}
        <motion.p
          className="text-xs tracking-[0.45em] uppercase"
          style={{ color: GOLD, fontFamily: AMIRI }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {t.cordiallyInvited}
        </motion.p>

        {/* ══ MAIN LAYOUT ══
            Mobile:  column  — card 1 / horizontal staff / card 2
            Desktop: row     — card 1 / vertical staff  / card 2  */}
        <div className="flex flex-col sm:flex-row items-stretch w-full gap-0">
          <PersonCard
            relation={t.partner1Relation}
            fatherName={t.partner1FatherName}
            title={t.partner1Title}
            name={t.partner1}
            delay={0.5}
            side="right"
          />

          {/* Desktop staff */}
          <div className="hidden sm:flex items-center justify-center px-1 sm:px-3 shrink-0">
            <AsclepiusVertical />
          </div>

          {/* Mobile staff — sits between the two cards */}
          <AsclepiusHorizontal />

          {/* Mobile separator line above card 2 */}
          <div className="block sm:hidden px-6">
            <GoldLine delay={0.75} />
          </div>

          <PersonCard
            relation={t.partner2Relation}
            fatherName={t.partner2FatherName}
            title={t.partner2Title}
            name={t.partner2}
            delay={0.72}
            side="left"
          />
        </div>

        {/* Tagline */}
        <motion.p
          style={{
            fontFamily: AMIRI,
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: GOLD,
            letterSpacing: "0.1em",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          {t.tagline}
        </motion.p>

        <motion.p
          style={{
            fontFamily: AMIRI,
            fontSize: "clamp(0.85rem, 1.6vw, 1rem)",
            color: IVORY,
            letterSpacing: "0.08em",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {t.displayDate}
        </motion.p>

        {/* Bottom closing divider — matches other sections */}
        <motion.div
          className="flex items-center justify-center gap-3 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        >
          <div className="h-px w-16 sm:w-24" style={{ background: `linear-gradient(to right, transparent, ${g(0.4)})` }} />
          <div className="w-1.5 h-1.5 rotate-45 border" style={{ borderColor: g(0.4) }} />
          <div className="h-px w-16 sm:w-24" style={{ background: `linear-gradient(to left, transparent, ${g(0.4)})` }} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
      >
        <span
          style={{
            color: g(0.38),
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
            background: `linear-gradient(to bottom, ${GOLD}, transparent)`,
          }}
          animate={{ y: [0, 8, 0], opacity: [0.3, 0.85, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.1 }}
        />
      </motion.div>
    </section>
  );
}
