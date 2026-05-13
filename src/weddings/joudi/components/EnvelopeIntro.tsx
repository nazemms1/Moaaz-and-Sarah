import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { theme } from "../theme";

interface EnvelopeIntroProps {
  onOpen: () => void;
}

export function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const [stage, setStage] = useState<"idle" | "playing">("idle");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onEnded = () => onOpen();
    const onStalled = () => {
      // iOS Safari stalls sometimes — reload and retry
      video.load();
    };

    video.addEventListener("ended", onEnded);
    video.addEventListener("stalled", onStalled);
    return () => {
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("stalled", onStalled);
    };
  }, [onOpen]);

  async function handleClick() {
    if (stage !== "idle") return;
    const video = videoRef.current;
    if (!video) return;

    setStage("playing");

    try {
      video.muted = true;
      video.currentTime = 0;
      await video.play();
    } catch {
      // If video fails on iOS, open invitation directly
      onOpen();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      onClick={handleClick}
      style={{ cursor: stage === "idle" ? "pointer" : "default" }}
    >
      <video
        ref={videoRef}
        playsInline
        muted
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src="/Moaaz-Habbab-Wedding/intro.mp4" type="video/mp4" />
      </video>

      {stage === "idle" && (
        <>
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: "45%",
              background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />

          <motion.div
            className="absolute bottom-0 inset-x-0 flex flex-col items-center"
            style={{ paddingBottom: "clamp(32px, 8vh, 64px)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              style={{
                width: 48, height: 1,
                background: `linear-gradient(to right, transparent, ${theme.color.gold}, transparent)`,
                marginBottom: 20,
              }}
              animate={{ scaleX: [0.6, 1, 0.6], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.p
              style={{
                color: "#fff",
                fontFamily: theme.font.display,
                fontSize: "clamp(1.1rem, 4vw, 1.5rem)",
                fontWeight: 500,
                letterSpacing: "0.04em",
                margin: 0,
                textShadow: "0 2px 12px rgba(0,0,0,0.6)",
              }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              اضغط لفتح الدعوة
            </motion.p>

            <motion.div
              style={{
                width: 48, height: 1,
                background: `linear-gradient(to right, transparent, ${theme.color.gold}, transparent)`,
                marginTop: 20,
              }}
              animate={{ scaleX: [0.6, 1, 0.6], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
          </motion.div>
        </>
      )}
    </div>
  );
}
