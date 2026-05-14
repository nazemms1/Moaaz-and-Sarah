import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "../theme";

interface EnvelopeIntroProps {
  onOpen: () => void;
}

type Stage = "loading" | "ready" | "playing";

export function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const [stage, setStage] = useState<Stage>("loading");
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Track buffering progress
    const onProgress = () => {
      if (video.duration > 0 && video.buffered.length > 0) {
        const buffered = video.buffered.end(video.buffered.length - 1);
        setProgress(Math.min((buffered / video.duration) * 100, 100));
      }
    };

    // Video is ready to play smoothly
    const onCanPlayThrough = () => {
      setProgress(100);
      setStage("ready");
    };

    // Fallback: canplay is enough on iOS
    const onCanPlay = () => {
      if (stage === "loading") {
        setProgress(100);
        setStage("ready");
      }
    };

    const onEnded = () => onOpen();

    const onStalled = () => {
      video.load();
    };

    video.addEventListener("progress", onProgress);
    video.addEventListener("canplaythrough", onCanPlayThrough);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("ended", onEnded);
    video.addEventListener("stalled", onStalled);

    // Force load
    video.load();

    // Fallback: if after 6s still loading, show ready anyway
    const fallback = setTimeout(() => {
      setProgress(100);
      setStage("ready");
    }, 6000);

    return () => {
      video.removeEventListener("progress", onProgress);
      video.removeEventListener("canplaythrough", onCanPlayThrough);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("stalled", onStalled);
      clearTimeout(fallback);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function handleClick() {
    if (stage !== "ready") return;
    const video = videoRef.current;
    if (!video) return;

    setStage("playing");
    try {
      video.muted = true;
      video.currentTime = 0;
      await video.play();
    } catch {
      onOpen();
    }
  }

  const GOLD = theme.color.gold;
  const FONT = theme.font.display;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Video — always mounted so it preloads */}
      <video
        ref={videoRef}
        playsInline
        muted
        preload="auto"
        poster="/Moaaz-and-Sarah/intro-poster.jpg"
        className="w-full h-full object-cover"
        onEnded={onOpen}
      >
        <source src="/Moaaz-and-Sarah/intro.mp4" type="video/mp4" />
      </video>

      {/* Loading screen */}
      <AnimatePresence>
        {stage === "loading" && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ background: "rgba(0,0,0,0.88)" }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Ornament */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ marginBottom: "2rem" }}
            >
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="26" stroke={GOLD} strokeWidth="1" opacity="0.35" />
                <circle cx="28" cy="28" r="18" stroke={GOLD} strokeWidth="0.6" opacity="0.2" />
                <path
                  d="M28 8 L30.4 20.8 L42 16 L33.6 26.2 L44 32 L31.2 31.6 L28 44 L24.8 31.6 L12 32 L22.4 26.2 L14 16 L25.6 20.8 Z"
                  fill={GOLD}
                  opacity="0.7"
                />
              </svg>
            </motion.div>

            {/* Arabic loading text */}
            <motion.p
              style={{
                color: "#fff",
                fontFamily: FONT,
                fontSize: "clamp(1rem, 3.5vw, 1.3rem)",
                letterSpacing: "0.06em",
                marginBottom: "1.8rem",
                opacity: 0.85,
                direction: "rtl",
              }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              جارٍ تحميل الدعوة…
            </motion.p>

            {/* Progress bar */}
            <div
              style={{
                width: "clamp(160px, 45vw, 260px)",
                height: 2,
                background: "rgba(255,255,255,0.12)",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  height: "100%",
                  background: `linear-gradient(to right, ${GOLD}, #e8cc80)`,
                  borderRadius: 2,
                  transformOrigin: "left",
                }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            <motion.p
              style={{
                color: GOLD,
                fontFamily: FONT,
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                marginTop: "0.8rem",
                opacity: 0.6,
                direction: "ltr",
              }}
            >
              {Math.round(progress)}%
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ready — tap to open */}
      <AnimatePresence>
        {stage === "ready" && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-end"
            style={{ cursor: "pointer", paddingBottom: "clamp(32px, 8vh, 64px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            onClick={handleClick}
          >
            {/* Bottom gradient */}
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none"
              style={{
                height: "45%",
                background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
              }}
            />

            <motion.div
              className="relative flex flex-col items-center"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                style={{
                  width: 48, height: 1,
                  background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
                  marginBottom: 20,
                }}
                animate={{ scaleX: [0.6, 1, 0.6], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.p
                style={{
                  color: "#fff",
                  fontFamily: FONT,
                  fontSize: "clamp(1.1rem, 4vw, 1.5rem)",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  margin: 0,
                  textShadow: "0 2px 12px rgba(0,0,0,0.6)",
                  direction: "rtl",
                }}
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                اضغط لفتح الدعوة
              </motion.p>

              <motion.div
                style={{
                  width: 48, height: 1,
                  background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
                  marginTop: 20,
                }}
                animate={{ scaleX: [0.6, 1, 0.6], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
