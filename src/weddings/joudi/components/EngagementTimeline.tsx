import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { config } from "../config";
import { theme } from "../theme";
import { useLanguage } from "../context";

const GOLD = "#C9A84C";
const GOLD_LT = "#E8CC80";
const BG_CARD = "#FFFDF8";
const g = (a: number) => `rgba(201,168,76,${a})`;
const SCH = "'Scheherazade New', 'Amiri', serif";
const AMIRI = "'Amiri', 'Scheherazade New', serif";

const STEP_ICONS = [
  <svg key="0" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M14 2 L16.4 9.8 L24.5 9.8 L18.1 14.9 L20.5 22.7 L14 17.6 L7.5 22.7 L9.9 14.9 L3.5 9.8 L11.6 9.8 Z"
      fill={GOLD}
      opacity="0.95"
    />
  </svg>,
  <svg key="1" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle
      cx="14"
      cy="14"
      r="10"
      stroke={GOLD}
      strokeWidth="2"
      fill="none"
      opacity="0.9"
    />
    <circle cx="14" cy="14" r="5" fill={GOLD} opacity="0.85" />
    <circle cx="14" cy="14" r="2.5" fill={BG_CARD} opacity="0.9" />
  </svg>,
  <svg key="2" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M19 4 C11 4 5 9 5 14 C5 19.5 10 24 16 24 C12 21 9 17.5 9 14 C9 10 12 6.5 19 4 Z"
      fill={GOLD}
      opacity="0.9"
    />
    <path
      d="M19 9 L20.5 13.5 L25 14.5 L20.5 15.5 L19 20 L17.5 15.5 L13 14.5 L17.5 13.5 Z"
      fill={GOLD_LT}
      opacity="0.85"
    />
  </svg>,
];

function ProgramCard({
  event,
  index,
  inView,
}: {
  event: { date: string; title: string; description: string };
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="flex flex-col items-center w-full"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.5 + index * 0.2,
        duration: 0.9,
        type: "spring",
        stiffness: 55,
        damping: 16,
      }}
    >
      {/* Time badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.55 + index * 0.2, duration: 0.7 }}
        style={{
          background: `linear-gradient(135deg, ${g(0.18)}, ${g(0.08)})`,
          border: `1px solid ${g(0.45)}`,
          borderRadius: "999px",
          padding: "0.3em 1.4em",
          marginBottom: "0.9em",
        }}
      >
        <span
          style={{
            fontFamily: SCH,
            fontSize: "clamp(1rem, 3vw, 1.25rem)",
            fontWeight: 700,
            color: GOLD,
            letterSpacing: "0.04em",
            direction: "rtl",
          }}
        >
          {event.date}
        </span>
      </motion.div>

      {/* Icon */}
      <motion.div
        className="flex items-center justify-center mb-4"
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${g(0.2)}, ${g(0.06)})`,
          border: `1.5px solid ${g(0.5)}`,
          boxShadow: `0 0 20px ${g(0.25)}, 0 0 0 4px ${g(0.07)}`,
        }}
        animate={{
          boxShadow: [
            `0 0 14px ${g(0.2)}`,
            `0 0 28px ${g(0.5)}`,
            `0 0 14px ${g(0.2)}`,
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
      >
        {STEP_ICONS[index] ?? STEP_ICONS[0]}
      </motion.div>

      {/* Card */}
      <div
        className="relative w-full flex flex-col items-center"
        style={{
          background: BG_CARD,
          border: `1px solid ${g(0.2)}`,
          boxShadow: `0 6px 32px ${g(0.1)}, inset 0 1px 0 ${g(0.14)}, inset 0 -1px 0 ${g(0.06)}`,
          padding: "clamp(1.4rem, 4vw, 2rem) clamp(1.2rem, 4vw, 1.8rem)",
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
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d={
                    t2 && l
                      ? "M0 11 L0 0 L11 0"
                      : t2
                        ? "M13 11 L13 0 L2 0"
                        : l
                          ? "M0 2 L0 13 L11 13"
                          : "M13 2 L13 13 L2 13"
                  }
                  stroke={GOLD}
                  strokeWidth="1.2"
                  opacity="0.45"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          );
        })}

        {/* Title */}
        <h3
          style={{
            fontFamily: SCH,
            fontSize: "clamp(1.3rem, 4.5vw, 1.9rem)",
            fontWeight: 700,
            color: GOLD,
            textAlign: "center",
            lineHeight: 1.3,
            marginBottom: "0.5em",
            textShadow: `0 0 20px ${g(0.2)}`,
            direction: "rtl",
          }}
        >
          {event.title}
        </h3>

        {/* Gold rule */}
        <div
          style={{
            width: "38%",
            height: "1px",
            background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
            marginBottom: "0.8em",
          }}
        />

        {/* Description */}
        <p
          style={{
            fontFamily: AMIRI,
            fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
            color: `rgba(100,75,20,0.7)`,
            textAlign: "center",
            lineHeight: 1.85,
            direction: "rtl",
          }}
        >
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}

export function EngagementTimeline() {
  const { t } = useLanguage();
  const [ref, inView] = useScrollAnimation();
  const events = t.timelineEvents;

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 md:py-40 px-6 overflow-hidden"
      dir="rtl"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9 }}
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${config.sectionImages.engagment})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: theme.bg.section, opacity: 0.92 }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: theme.bg.vignette }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{ inset: 0, background: theme.bg.glow }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dust */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 1.2 + (i % 5) * 0.5,
              height: 1.2 + (i % 5) * 0.5,
              left: `${(i * 3.7 + 4) % 100}%`,
              top: `${(i * 5.5 + 2) % 100}%`,
              background: theme.dust[i % 4],
            }}
            animate={{ opacity: [0, 0.8, 0], scale: [0, 1.6, 0] }}
            transition={{
              duration: 3 + (i % 6) * 0.7,
              repeat: Infinity,
              delay: (i * 0.3) % 5,
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

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            className="flex items-center justify-center gap-3 mb-7"
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

          <motion.h2
            style={{
              fontFamily: SCH,
              fontSize: "clamp(2.2rem, 7vw, 3.6rem)",
              fontWeight: 700,
              color: GOLD,
              lineHeight: 1.2,
              textShadow: `0 0 40px ${g(0.2)}`,
            }}
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.85 }}
          >
            {t.timelineTitle}
          </motion.h2>

          <motion.p
            className="mt-3"
            style={{
              fontFamily: AMIRI,
              fontSize: "clamp(0.9rem, 2.3vw, 1.05rem)",
              color: `rgba(120,90,30,0.65)`,
              lineHeight: 1.75,
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.42, duration: 0.7 }}
          >
            {t.timelineSubtitle}
          </motion.p>
        </div>

        {/* Cards — vertical stack with connector dots */}
        <div className="flex flex-col gap-0">
          {events.map((event, i) => (
            <div key={i} className="flex flex-col items-center">
              <ProgramCard event={event} index={i} inView={inView} />

              {/* Connector between cards */}
              {i < events.length - 1 && (
                <motion.div
                  className="flex flex-col items-center py-3"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.2, duration: 0.6 }}
                >
                  <div
                    className="w-px h-6"
                    style={{
                      background: `linear-gradient(to bottom, ${g(0.4)}, ${g(0.15)})`,
                    }}
                  />
                  <div
                    className="w-2 h-2 rotate-45 border"
                    style={{ borderColor: g(0.45), margin: "2px 0" }}
                  />
                  <div
                    className="w-px h-6"
                    style={{
                      background: `linear-gradient(to bottom, ${g(0.15)}, ${g(0.4)})`,
                    }}
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.8 }}
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
