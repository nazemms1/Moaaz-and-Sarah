import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { theme } from "../theme";

interface EnvelopeIntroProps {
  onOpen: () => void;
}

export function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const [stage, setStage] = useState<"idle" | "playing">("idle");
  const [debugInfo, setDebugInfo] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const addDebug = (msg: string) => {
    setDebugInfo(prev => [...prev.slice(-6), msg]);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) { addDebug("❌ video ref null"); return; }

    addDebug(`readyState: ${video.readyState}`);

    video.addEventListener("loadstart",    () => addDebug("📥 loadstart"));
    video.addEventListener("loadeddata",   () => addDebug("✅ loadeddata"));
    video.addEventListener("canplay",      () => addDebug("▶️ canplay"));
    video.addEventListener("canplaythrough",() => addDebug("✅ canplaythrough"));
    video.addEventListener("error",        () => {
      const e = video.error;
      addDebug(`❌ error: code=${e?.code} msg=${e?.message}`);
    });
    video.addEventListener("stalled",      () => addDebug("⚠️ stalled"));
    video.addEventListener("ended",        onOpen);
  }, [onOpen]);

  async function handleClick() {
    if (stage !== "idle") return;
    const video = videoRef.current;
    if (!video) return;

    addDebug(`tap — readyState: ${video.readyState}`);
    setStage("playing");

    try {
      video.muted = true;
      video.currentTime = 0;
      await video.play();
      addDebug("✅ play() ok");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      addDebug(`❌ play() failed: ${msg}`);
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

      {/* Debug panel — always visible */}
      <div style={{
        position: "fixed", top: 12, left: 12, right: 12,
        background: "rgba(0,0,0,0.85)",
        color: "#0f0",
        fontFamily: "monospace",
        fontSize: "12px",
        padding: "8px 12px",
        borderRadius: 6,
        zIndex: 9999,
        pointerEvents: "none",
        lineHeight: 1.6,
      }}>
        {debugInfo.length === 0 ? "waiting..." : debugInfo.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  );
}
