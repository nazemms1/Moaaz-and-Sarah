import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { useCountdown } from "../../../hooks/useCountdown";
import { config } from "../config";
import { useLanguage } from "../context";

/* ── Palette ── */
const OW = "#F5F0E8";
const GOLD_LT = "#E8CC80";
const dk = (a: number) => `rgba(42,31,8,${a})`;
// const g = (a: number) => `rgba(201,168,76,${a})`;

const SCH = "'Scheherazade New', 'Amiri', serif";
const AMIRI = "'Amiri', 'Scheherazade New', serif";

/* ── Single countdown box ── */
function CountdownBox({
  value,
  label,
  delay,
  inView,
}: {
  value: number;
  label: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: 40, scale: 0.85 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay, duration: 0.7, type: "spring", stiffness: 120 }}
    >
      {/* Box */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: "clamp(82px, 20vw, 118px)",
          height: "clamp(82px, 20vw, 118px)",
          background: `rgba(245,240,232,0.05)`,
          border: `1px solid rgba(245,240,232,0.2)`,
          boxShadow: `0 4px 24px rgba(0,0,0,0.4)`,
        }}
      >
        {/* Corner ticks */}
        <div
          className="absolute top-0 left-0 w-3 h-3 border-t border-l"
          style={{ borderColor: "rgba(245,240,232,0.3)" }}
        />
        <div
          className="absolute top-0 right-0 w-3 h-3 border-t border-r"
          style={{ borderColor: "rgba(245,240,232,0.3)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-3 h-3 border-b border-l"
          style={{ borderColor: "rgba(245,240,232,0.3)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-3 h-3 border-b border-r"
          style={{ borderColor: "rgba(245,240,232,0.3)" }}
        />

        <span
          style={{
            fontFamily: AMIRI,
            fontSize: "clamp(2.2rem, 6.5vw, 3.2rem)",
            fontWeight: 400,
            color: OW,
            textShadow: `0 2px 10px ${dk(0.25)}`,
            lineHeight: 1,
          }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>

      {/* Label */}
      <span
        style={{
          fontFamily: SCH,
          fontSize: "clamp(1rem, 2.8vw, 1.35rem)",
          letterSpacing: "0.08em",
          color: OW,
          opacity: 0.85,
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

/* ── Divider ── */
function Divider({
  delay = 0,
  inView = true,
}: {
  delay?: number;
  inView?: boolean;
}) {
  return (
    <motion.div
      className="flex items-center gap-3 w-full max-w-65 mx-auto"
      initial={{ opacity: 0, scaleX: 0.3 }}
      animate={inView ? { opacity: 1, scaleX: 1 } : {}}
      transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to right, transparent, rgba(245,240,232,0.35))`,
        }}
      />
      <svg width="10" height="10" viewBox="0 0 10 10">
        <path
          d="M5 0 L6.2 3.8 L10 5 L6.2 6.2 L5 10 L3.8 6.2 L0 5 L3.8 3.8 Z"
          fill={GOLD_LT}
          opacity="0.9"
        />
      </svg>
      <div
        className="flex-1 h-px"
        style={{
          background: `linear-gradient(to left, transparent, ${dk(0.35)})`,
        }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
export function DateSection() {
  const { t } = useLanguage();
  const [ref, inView] = useScrollAnimation();
  const { days, hours, minutes, isPast } = useCountdown(
    config.event.weddingDate,
  );

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9 }}
    >
      {/* Background photo */}
      <div
        // aria-hidden="true"
        // className="absolute inset-0"
        style={
          {
            // backgroundImage: `url(${config.sectionImages.date})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // backgroundAttachment: "fixed",
          }
        }
      />

      {/* Dark overlay — covers photo completely */}
      <div className="absolute inset-0" style={{ background: "#C5A46D" }} />

      {/* Stardust particles */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {Array.from({ length: 32 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 1 + (i % 4) * 0.5,
              height: 1 + (i % 4) * 0.5,
              left: `${(i * 7.3 + 3) % 100}%`,
              top: `${(i * 4.7 + 6) % 100}%`,
              background: [
                OW,
                `rgba(245,240,232,0.7)`,
                GOLD_LT,
                `rgba(245,240,232,0.5)`,
              ][i % 4],
            }}
            animate={{ opacity: [0, 0.6, 0], scale: [0, 1.3, 0] }}
            transition={{
              duration: 3.5 + (i % 6) * 0.6,
              repeat: Infinity,
              delay: (i * 0.22) % 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Corner bracket ornaments */}
      {[
        {
          cls: "absolute top-5 left-5",
          d1: "M2 30 L2 2 L30 2",
          d2: "M8 30 L8 8 L30 8",
          cx: 2,
          cy: 2,
        },
        {
          cls: "absolute top-5 right-5",
          d1: "M62 30 L62 2 L34 2",
          d2: "M56 30 L56 8 L34 8",
          cx: 62,
          cy: 2,
        },
        {
          cls: "absolute bottom-5 left-5",
          d1: "M2 34 L2 62 L30 62",
          d2: "M8 34 L8 56 L30 56",
          cx: 2,
          cy: 62,
        },
        {
          cls: "absolute bottom-5 right-5",
          d1: "M62 34 L62 62 L34 62",
          d2: "M56 34 L56 56 L34 56",
          cx: 62,
          cy: 62,
        },
      ].map((c, i) => (
        <motion.div
          key={i}
          className={c.cls}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d={c.d1} stroke={OW} strokeWidth="1.5" opacity="0.3" />
            <path d={c.d2} stroke={OW} strokeWidth="0.8" opacity="0.12" />
            <circle cx={c.cx} cy={c.cy} r="2" fill={OW} opacity="0.3" />
          </svg>
        </motion.div>
      ))}

      {/* ══ CONTENT ══ */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center gap-6">
        {/* مَوْعِدُ الفَرَح */}
        <motion.h2
          initial={{ opacity: 0, y: -14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.9 }}
          style={{
            fontFamily: SCH,
            fontSize: "clamp(1.7rem, 5.5vw, 3rem)",
            fontWeight: 700,
            color: OW,
            textShadow: `0 2px 16px ${dk(0.35)}`,
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          باقي لموعد العرس
        </motion.h2>

        {/* THE CELEBRATION BEGINS IN */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontFamily: AMIRI,
            // fontSize: "clamp(0.6rem, 1.6vw, 0.78rem)",
            letterSpacing: "0.4em",
            color: OW,

            direction: "ltr",
            margin: 0,
          }}
        >
          THE CELEBRATION BEGINS IN
        </motion.p>

        {/* Divider */}
        <Divider delay={0.42} inView={inView} />

        {/* Countdown — 3 boxes */}
        {isPast ? (
          <motion.p
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            style={{
              fontFamily: SCH,
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              color: OW,
            }}
          >
            {t.weAreMarried}
          </motion.p>
        ) : (
          <div className="flex items-start justify-center gap-3 sm:gap-6">
            {[
              { value: days, label: "يَوْم" },
              { value: hours, label: "سَاعَة" },
              { value: minutes, label: "دَقِيقَة" },
            ].map((box, i) => (
              <div key={box.label} className="flex items-start gap-3 sm:gap-6">
                <CountdownBox
                  value={box.value}
                  label={box.label}
                  delay={0.52 + i * 0.13}
                  inView={inView}
                />
                {i < 2 && (
                  <motion.span
                    className="mt-5 sm:mt-7"
                    style={{
                      fontFamily: AMIRI,
                      fontSize: "clamp(1.6rem, 4.5vw, 2.4rem)",
                      color: OW,
                      opacity: 0.35,
                      lineHeight: 1,
                    }}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 0.35 } : {}}
                    transition={{ delay: 0.6 + i * 0.13 }}
                  >
                    :
                  </motion.span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Bottom divider */}
        <Divider delay={0.9} inView={inView} />
      </div>
    </motion.section>
  );
}
