import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { theme } from "../theme";

interface EnvelopeIntroProps {
  onOpen: () => void;
}

export function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const [stage, setStage] = useState<"idle" | "playing">("idle");
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try muted autoplay first (required by iOS/Chrome autoplay policy)
    const tryAutoPlay = () => {
      video.muted = true;
      video.play()
        .then(() => setStage("playing"))
        .catch(() => setStage("idle"));
    };

    if (video.readyState >= 3) {
      tryAutoPlay();
    } else {
      video.addEventListener("canplaythrough", tryAutoPlay, { once: true });
    }
  }, []);

  function handleClick() {
    const video = videoRef.current;
    if (!video) return;

    if (stage === "playing") return;

    video.muted = true;
    video.play().catch(() => onOpen());
    setStage("playing");
  }

  function handleVideoEnded() {
    onOpen();
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
        onEnded={handleVideoEnded}
        className="w-full h-full object-cover"
      />
      {stage === "idle" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: isMobile ? 64 : 80,
              height: isMobile ? 64 : 80,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.5)",
              border: `2px solid ${theme.color.gold}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width={isMobile ? 24 : 30}
              height={isMobile ? 24 : 30}
              viewBox="0 0 24 24"
              fill={theme.color.gold}
            >
              <polygon points="6,4 20,12 6,20" />
            </svg>
          </motion.div>
        </div>
      )}
    </div>
  );
}
