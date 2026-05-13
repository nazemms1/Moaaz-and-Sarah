import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { theme } from "../theme";
import { config } from "../config";

const GOLD = "#C9A84C";
const GOLD_LT = "#D4AF6E";
// const GOLD_BR = "#E8CC80";
const BG_CARD = "#FFFDF8";
const g = (a: number) => `rgba(201,168,76,${a})`;

const SCH = "'Scheherazade New', 'Amiri', serif";
const AMIRI = "'Amiri', 'Scheherazade New', serif";

export function QuranSection() {
  const [ref, inView] = useScrollAnimation();

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 md:py-40 px-6 overflow-hidden"
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
        style={{ background: "rgba(255,253,248,0.45)" }}
      />

      {/* Dust particles */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 1.2 + (i % 5) * 0.6,
              height: 1.2 + (i % 5) * 0.6,
              left: `${(i * 4.3 + 2) % 100}%`,
              top: `${(i * 5.4 + 4) % 100}%`,
              background: theme.dust[i % 4],
            }}
            animate={{ opacity: [0, 0.9, 0], scale: [0, 1.8, 0] }}
            transition={{
              duration: 3 + (i % 6) * 0.7,
              repeat: Infinity,
              delay: (i * 0.33) % 5,
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
            <path d={c.d1} stroke={GOLD} strokeWidth="1.5" opacity="0.5" />
            <path d={c.d2} stroke={GOLD} strokeWidth="0.8" opacity="0.2" />
            <circle cx={c.cx} cy={c.cy} r="2" fill={GOLD} opacity="0.6" />
          </svg>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Decorative image */}
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            delay: 0.05,
            duration: 0.9,
            type: "spring",
            stiffness: 60,
          }}
        >
          <img
            src="/wedding/imageOn.png"
            alt=""
            aria-hidden="true"
            style={{ width: "clamp(120px, 30vw, 200px)", objectFit: "contain" }}
          />
        </motion.div>

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
              background: `linear-gradient(to right, transparent, ${g(0.5)})`,
            }}
          />
          <div
            className="w-1 h-1 rounded-full"
            style={{ background: GOLD, opacity: 0.5 }}
          />
          <div
            className="h-px w-10 sm:w-16"
            style={{
              background: `linear-gradient(to left, transparent, ${g(0.5)})`,
            }}
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="text-xs tracking-[0.45em] uppercase mb-10 text-center"
          style={{ color: GOLD, fontFamily: AMIRI }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          من آيات الله
        </motion.p>

        {/* Ornate card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.35,
            duration: 0.9,
            type: "spring",
            stiffness: 55,
            damping: 15,
          }}
        >
          <div
            className="relative flex flex-col items-center"
            style={{
              background: BG_CARD,
              border: `1px solid ${g(0.2)}`,
              boxShadow: `0 6px 40px ${g(0.1)}, inset 0 1px 0 ${g(0.18)}, inset 0 -1px 0 ${g(0.08)}`,
              padding: "clamp(2.2rem, 5vw, 3.5rem) clamp(1.8rem, 5vw, 3rem)",
            }}
          >
            {/* Top gold bar */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{
                background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
              }}
            />

            {/* Surah label */}
            <motion.p
              style={{
                fontFamily: AMIRI,
                fontSize: "clamp(0.72rem, 1.8vw, 0.85rem)",
                color: g(0.7),
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "1.2em",
              }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.65, duration: 0.7 }}
            >
              سورة الروم — الآية ٢١
            </motion.p>

            {/* Bismillah */}
            <motion.p
              style={{
                fontFamily: SCH,
                fontSize: "clamp(1rem, 2.8vw, 1.35rem)",
                color: GOLD_LT,
                textAlign: "center",
                lineHeight: 1.9,
                marginBottom: "1em",
                opacity: 0.85,
              }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.85 } : {}}
              transition={{ delay: 0.75, duration: 0.8 }}
            >
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ
            </motion.p>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.85, duration: 0.8 }}
              style={{
                width: "45%",
                height: "1px",
                margin: "0 auto 1.6em",
                background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
              }}
            />

            {/* Ayah */}
            <motion.p
              style={{
                fontFamily: SCH,
                fontSize: "clamp(1.5rem, 4.5vw, 2.4rem)",
                fontWeight: 700,
                color: `rgba(80,58,18,0.9)`,
                textAlign: "center",
                lineHeight: 2.1,
                direction: "rtl",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.95,
                duration: 1,
                type: "spring",
                stiffness: 60,
              }}
            >
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا{" "}
              <span style={{ color: GOLD }}>لِّتَسْكُنُوا إِلَيْهَا</span>{" "}
              وَجَعَلَ بَيْنَكُم{" "}
              <span style={{ color: GOLD }}>مَّوَدَّةً وَرَحْمَةً</span> ۚ إِنَّ
              فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
            </motion.p>

            {/* Animated dots */}
            <motion.div
              className="flex items-center justify-center gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3, duration: 0.7 }}
            >
              {[GOLD, g(0.5), g(0.22)].map((col, i) => (
                <motion.div
                  key={i}
                  style={{
                    width: 5 - i * 1.2,
                    height: 5 - i * 1.2,
                    borderRadius: "50%",
                    background: col,
                    flexShrink: 0,
                  }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <div
            className="h-px w-16 sm:w-24"
            style={{
              background: `linear-gradient(to right, transparent, ${g(0.4)})`,
            }}
          />
          <div
            className="w-1.5 h-1.5 rotate-45 border"
            style={{ borderColor: g(0.4) }}
          />
          <div
            className="h-px w-16 sm:w-24"
            style={{
              background: `linear-gradient(to left, transparent, ${g(0.4)})`,
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
