import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { config } from "../config";
import { theme } from "../theme";
import { useLanguage } from "../context";

const GOLD = "#C9A84C";
const BG_CARD = "#FFFDF8";
// const BG_DEEP = "#F5F0E8";
const g = (a: number) => `rgba(201,168,76,${a})`;

const SCH = "'Scheherazade New', 'Amiri', serif";
const AMIRI = "'Amiri', 'Scheherazade New', serif";

export function VenueSection() {
  const { t } = useLanguage();
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
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${config.sectionImages.venue})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: theme.bg.section, opacity: 0.9 }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: theme.bg.vignette }}
      />

      {/* Gold glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background: `radial-gradient(ellipse 55% 40% at 50% 50%, ${g(0.07)} 0%, transparent 70%)`,
        }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dust particles */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 1 + (i % 5) * 0.5,
              height: 1 + (i % 5) * 0.5,
              left: `${(i * 4.7 + 2) % 100}%`,
              top: `${(i * 5.1 + 4) % 100}%`,
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
            <path d={c.d1} stroke={GOLD} strokeWidth="1.5" opacity="0.45" />
            <path d={c.d2} stroke={GOLD} strokeWidth="0.8" opacity="0.18" />
            <circle cx={c.cx} cy={c.cy} r="2" fill={GOLD} opacity="0.55" />
          </svg>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-xl mx-auto">
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
          className="text-center mb-8"
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
          تَفَاصِيلُ الحَفْل
        </motion.h2>

        {/* ── Main card ── */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            delay: 0.45,
            duration: 1,
            type: "spring",
            stiffness: 55,
            damping: 15,
          }}
        >
          <div
            className="relative flex flex-col items-center"
            style={{
              background: BG_CARD,
              border: `1px solid ${g(0.18)}`,
              boxShadow: `0 6px 40px ${g(0.12)}, 0 1px 0 ${g(0.15)}`,
              padding: "clamp(2rem, 5vw, 3rem) clamp(1.6rem, 4vw, 2.5rem)",
            }}
          >
            {/* Corner marks */}
            {(["tl", "tr", "bl", "br"] as const).map((pos) => {
              const t2 = pos[0] === "t";
              const l = pos[1] === "l";
              return (
                <div
                  key={pos}
                  className="absolute"
                  style={{
                    top: t2 ? 6 : undefined,
                    bottom: t2 ? undefined : 6,
                    left: l ? 6 : undefined,
                    right: l ? undefined : 6,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d={
                        t2 && l
                          ? "M0 10 L0 0 L10 0"
                          : t2
                            ? "M12 10 L12 0 L2 0"
                            : l
                              ? "M0 2 L0 12 L10 12"
                              : "M12 2 L12 12 L2 12"
                      }
                      stroke={GOLD}
                      strokeWidth="1.2"
                      opacity="0.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              );
            })}

            {/* Swans image */}
            <motion.div
              className="flex items-center justify-center mb-2"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.5,
                duration: 1,
                type: "spring",
                stiffness: 55,
              }}
            >
              <img
                src="/wedding/swans-framed-ByH4RE7t.png"
                alt=""
                aria-hidden="true"
                style={{
                  width: "clamp(130px, 35vw, 220px)",
                  objectFit: "contain",
                }}
              />
            </motion.div>

            {/* Venue name */}
            <motion.h3
              className="text-center mt-5 mb-1"
              style={{
                fontFamily: SCH,
                fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
                fontWeight: 700,
                color: GOLD,
                lineHeight: 1.3,
                textShadow: `0 0 24px ${g(0.2)}`,
              }}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {t.venueName}
            </motion.h3>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.7 }}
              style={{
                width: "40%",
                height: "1px",
                background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
                margin: "0.8em 0",
              }}
            />

            {/* Location row */}
            <motion.div
              className="flex items-center justify-center gap-2 mb-3"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.85, duration: 0.7 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={GOLD}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span
                style={{
                  fontFamily: AMIRI,
                  fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)",
                  color: `rgba(120,90,30,0.75)`,
                }}
              >
                {t.venueAddress}
              </span>
            </motion.div>

            {/* Time row */}
            <motion.div
              className="flex items-center justify-center gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.92, duration: 0.7 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={GOLD}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span
                style={{
                  fontFamily: AMIRI,
                  fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)",
                  color: `rgba(120,90,30,0.75)`,
                }}
              >
                {t.displayTime}
              </span>
            </motion.div>

            {/* Dotted divider */}
            <motion.div
              className="w-full mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.0, duration: 0.6 }}
              style={{ borderTop: `1px dashed ${g(0.2)}` }}
            />

            {/* Welcome message */}
            <motion.p
              className="text-center mb-7"
              style={{
                fontFamily: AMIRI,
                fontSize: "clamp(0.95rem, 2.3vw, 1.1rem)",
                color: `rgba(100,75,20,0.65)`,
                lineHeight: 1.85,
                direction: "rtl",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.05, duration: 0.8 }}
            >
              سعدانا لا تكتمل إلا بوجودكم معنا
            </motion.p>

            {/* No children notice */}
            <motion.div
              className="flex items-center justify-center gap-3 w-full mb-6 px-4 py-3"
              style={{
                border: `1px solid ${g(0.25)}`,
                background: g(0.05),
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.15, duration: 0.7 }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke={GOLD}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              </svg>
              <p
                style={{
                  fontFamily: SCH,
                  fontSize: "clamp(0.95rem, 2.3vw, 1.1rem)",
                  color: `rgba(120,90,30,0.85)`,
                  direction: "rtl",
                  lineHeight: 1.7,
                  textAlign: "center",
                }}
              >
                إدارة الصالة لا تَسمح بإدخال الأطفال
              </p>
            </motion.div>

            {/* Map button */}
            <motion.a
              href={config.venue.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-2.5"
              style={{
                border: `1px solid ${g(0.45)}`,
                color: GOLD,
                fontFamily: AMIRI,
                fontSize: "clamp(0.9rem, 2.2vw, 1rem)",
                letterSpacing: "0.08em",
                background: "transparent",
                textDecoration: "none",
              }}
              whileHover={{ background: g(0.08), scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {t.getDirections}
            </motion.a>
          </div>
        </motion.div>

        {/* Map embed */}
        <motion.div
          className="relative mt-5"
          style={{
            border: `1px solid ${g(0.18)}`,
            boxShadow: `0 4px 28px ${g(0.1)}`,
            overflow: "hidden",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.9 }}
        >
          {/* Top gold line */}
          <div
            className="h-0.5 w-full"
            style={{
              background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
            }}
          />
          <div
            className="relative w-full"
            style={{ paddingBottom: "60%", minHeight: "240px" }}
          >
            <iframe
              src={config.venue.googleMapsEmbedUrl}
              title={`Map to ${t.venueName}`}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          {/* Corner accents */}
          <div
            className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2"
            style={{ borderColor: GOLD }}
          />
          <div
            className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2"
            style={{ borderColor: GOLD }}
          />
          <div
            className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2"
            style={{ borderColor: GOLD }}
          />
          <div
            className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2"
            style={{ borderColor: GOLD }}
          />
        </motion.div>

        {/* Bottom divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
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
