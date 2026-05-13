import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { config } from "../config";
import { useLanguage } from "../context";

const GOLD = "#C5A46D";
const OW = "#F5F0E8";
const g = (a: number) => `rgba(197,164,109,${a})`;

const SCH = "'Scheherazade New', 'Amiri', serif";
const AMIRI = "'Amiri', 'Scheherazade New', serif";

/* English label for each event */
const EN_LABELS = ["WEDDING START", "GROOM'S ENTRANCE", "THE WEDDING ENDS"];

function TimelineEvent({
  date,
  title,
  enLabel,
  index,
  inView,
  isLast,
}: {
  date: string;
  title: string;
  enLabel: string;
  index: number;
  inView: boolean;
  isLast: boolean;
}) {
  // Odd indices (1) go left; even indices (0, 2) go right
  const isLeft = index % 2 === 1;

  const timeBlock = (
    <motion.div
      className="flex flex-col items-end justify-center"
      style={{
        width: "44%",
        paddingRight: isLeft ? 0 : "1.2rem",
        paddingLeft: isLeft ? "1.2rem" : 0,
        alignItems: isLeft ? "flex-start" : "flex-end",
      }}
      initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.4 + index * 0.18, duration: 0.7 }}
    >
      <span
        style={{
          fontFamily: AMIRI,
          fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
          fontWeight: 700,
          color: GOLD,
          lineHeight: 1,
          direction: "ltr",
        }}
      >
        {date}
      </span>
      <span
        style={{
          fontFamily: SCH,
          fontSize: "clamp(1rem, 3.5vw, 1.35rem)",
          fontWeight: 700,
          color: GOLD,
          lineHeight: 1.3,
          direction: "rtl",
          marginTop: "0.3em",
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontFamily: AMIRI,
          fontSize: "clamp(0.55rem, 1.5vw, 0.68rem)",
          letterSpacing: "0.2em",
          color: g(0.65),
          direction: "ltr",
          marginTop: "0.25em",
        }}
      >
        {enLabel}
      </span>
    </motion.div>
  );

  const centerLine = (
    <div className="flex flex-col items-center" style={{ width: "12%" }}>
      <div
        style={{
          flex: index === 0 ? "0 0 28px" : 1,
          width: 1,
          background: index === 0 ? "transparent" : g(0.35),
        }}
      />
      <motion.div
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: GOLD,
          border: `2px solid ${OW}`,
          flexShrink: 0,
          zIndex: 1,
        }}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{
          delay: 0.45 + index * 0.18,
          duration: 0.5,
          type: "spring",
        }}
      />
      <div
        style={{
          flex: 1,
          width: 1,
          background: isLast ? "transparent" : g(0.35),
          minHeight: isLast ? 0 : 32,
        }}
      />
    </div>
  );

  const emptyBlock = <div style={{ width: "44%" }} />;

  return (
    <div className="flex items-stretch w-full" style={{ minHeight: 90 }}>
      {isLeft ? emptyBlock : timeBlock}
      {centerLine}
      {isLeft ? timeBlock : emptyBlock}
    </div>
  );
}

export function EngagementTimeline() {
  const { t } = useLanguage();
  const [ref, inView] = useScrollAnimation();
  const events = t.timelineEvents;

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 md:py-36 px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9 }}
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${config.sectionImages.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        className="absolute inset-0"
        // style={{ background: "rgba(250,246,238,0.94)" }}
      />

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
            <path d={c.d1} stroke={GOLD} strokeWidth="1.5" opacity="0.35" />
            <path d={c.d2} stroke={GOLD} strokeWidth="0.8" opacity="0.14" />
            <circle cx={c.cx} cy={c.cy} r="2" fill={GOLD} opacity="0.4" />
          </svg>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-12" dir="rtl">
          {/* Top thin divider */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
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

          {/* بَرْنَامَجُ الحَفْل */}
          <motion.h2
            style={{
              fontFamily: SCH,
              fontSize: "clamp(2rem, 7vw, 3.4rem)",
              fontWeight: 700,
              color: GOLD,
              lineHeight: 1.2,
              textShadow: `0 0 36px ${g(0.18)}`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.85 }}
          >
            {t.timelineTitle}
          </motion.h2>

          {/* EVENT SCHEDULE */}
          <motion.p
            style={{
              fontFamily: AMIRI,
              fontSize: "clamp(0.6rem, 1.6vw, 0.74rem)",
              letterSpacing: "0.38em",
              color: g(0.65),
              direction: "ltr",
              marginTop: "0.4em",
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.38, duration: 0.7 }}
          >
            EVENT SCHEDULE
          </motion.p>

          {/* Thin divider below header */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-6"
            initial={{ opacity: 0, scaleX: 0.3 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.45, duration: 0.9 }}
          >
            <div
              className="h-px w-16 sm:w-24"
              style={{
                background: `linear-gradient(to right, transparent, ${g(0.4)})`,
              }}
            />
            <div
              className="w-1.5 h-1.5 rotate-45"
              style={{ background: g(0.5) }}
            />
            <div
              className="h-px w-16 sm:w-24"
              style={{
                background: `linear-gradient(to left, transparent, ${g(0.4)})`,
              }}
            />
          </motion.div>
        </div>

        {/* Timeline events */}
        <div className="flex flex-col">
          {events.map((event, i) => (
            <TimelineEvent
              key={i}
              date={event.date}
              title={event.title}
              enLabel={EN_LABELS[i] ?? ""}
              index={i}
              inView={inView}
              isLast={i === events.length - 1}
            />
          ))}
        </div>

        {/* Bottom divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
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
