import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { theme } from "../theme";

interface EnvelopeIntroProps {
  onOpen: () => void;
}

export function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const [stage, setStage] = useState<"idle" | "playing">("idle");
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleClick() {
    if (stage !== "idle") return;
    const video = videoRef.current;
    if (!video) return;
    setStage("playing");
    video.muted = true;
    video.play().catch(() => onOpen());
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.addEventListener("ended", onOpen);
    return () => video.removeEventListener("ended", onOpen);
  }, [onOpen]);

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
        style={{ display: stage === "playing" ? "block" : "none" }}
      />

      {stage === "idle" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* Decorative ring */}
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                border: `2px solid ${theme.color.gold}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={theme.color.gold} strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>

            {/* Arabic text */}
            <p style={{
              color: theme.color.gold,
              fontFamily: theme.font.display,
              fontSize: "clamp(1rem, 4vw, 1.4rem)",
              letterSpacing: "0.05em",
              textAlign: "center",
              margin: 0,
            }}>
              اضغط لفتح الدعوة
            </p>

            {/* English text */}
            <p style={{
              color: theme.color.goldLight,
              fontFamily: theme.font.body,
              fontSize: "clamp(0.75rem, 2.5vw, 0.95rem)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textAlign: "center",
              margin: 0,
              opacity: 0.7,
            }}>
              Tap to open invitation
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
