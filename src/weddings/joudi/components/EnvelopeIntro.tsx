import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { theme } from "../theme";

interface EnvelopeIntroProps {
  onOpen: () => void;
}

export function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const [stage, setStage] = useState<"idle" | "playing">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.addEventListener("ended", onOpen);
    return () => video.removeEventListener("ended", onOpen);
  }, [onOpen]);

  async function handleClick() {
    if (stage !== "idle") return;
    const video = videoRef.current;
    if (!video) return;

    setStage("playing");
    setErrorMsg(null);

    try {
      video.muted = true;
      video.currentTime = 0;
      await video.play();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setErrorMsg(msg);
      setStage("idle");
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
        src="/Moaaz-Habbab-Wedding/intro.mp4"
        playsInline
        muted
        preload="auto"
        className="w-full h-full object-cover"
      />

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
                width: 48,
                height: 1,
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
                width: 48,
                height: 1,
                background: `linear-gradient(to right, transparent, ${theme.color.gold}, transparent)`,
                marginTop: 20,
              }}
              animate={{ scaleX: [0.6, 1, 0.6], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />

            {/* Error message for debugging */}
            {errorMsg && (
              <p style={{
                color: "#ff6b6b",
                fontSize: "0.75rem",
                marginTop: 12,
                padding: "4px 12px",
                background: "rgba(0,0,0,0.6)",
                borderRadius: 4,
                maxWidth: "80vw",
                textAlign: "center",
              }}>
                {errorMsg}
              </p>
            )}
          </motion.div>
        </>
      )}
    </div>
  );
}
