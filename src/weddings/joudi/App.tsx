import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnvelopeIntro } from "./components/EnvelopeIntro";
import { CoupleSection } from "./components/CoupleSection";
import { QuranSection } from "./components/QuranSection";
import { FamiliesSection } from "./components/FamiliesSection";
// import { MessageSection } from "./components/MessageSection";
import { DateSection } from "./components/DateSection";
import { PresenceSection } from "./components/PresenceSection";
import { VenueSection } from "./components/VenueSection";
import { RsvpSection } from "./components/RsvpSection";
import { EngagementTimeline } from "./components/EngagementTimeline";
// import { BackToTop } from "../../shared/BackToTop";
import { SectionDivider } from "../../shared/SectionDivider";
import { useEffect, useRef } from "react";

function App() {
  const [stage, setStage] = useState<"envelope" | "main">("envelope");
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  useEffect(() => {
    if (stage === "main") {
      // Small delay before starting auto-scroll
      const startTimeout = setTimeout(() => {
        setIsAutoScrolling(true);
      }, 3000);

      return () => clearTimeout(startTimeout);
    }
  }, [stage]);

  useEffect(() => {
    if (!isAutoScrolling || stage !== "main") {
      document.documentElement.classList.remove("auto-scrolling");
      return;
    }

    document.documentElement.classList.add("auto-scrolling");
    let animationFrameId: number;
    let lastTime = performance.now();
    const scrollSpeed = 1.4; // Faster scroll speed

    const step = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      // Ensure delta is reasonable to avoid jumps after tab switching
      const normalizedDelta = Math.min(delta, 32);

      window.scrollBy(0, scrollSpeed * (normalizedDelta / 16));

      // Check if we reached the bottom
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (!isAtBottom) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setIsAutoScrolling(false);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    const stopScroll = () => {
      setIsAutoScrolling(false);
      document.documentElement.classList.remove("auto-scrolling");
    };

    // Events that should stop the auto-scroll
    window.addEventListener("wheel", stopScroll, { passive: true });
    window.addEventListener("touchmove", stopScroll, { passive: true });
    window.addEventListener("mousedown", stopScroll, { passive: true });
    window.addEventListener("keydown", stopScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.documentElement.classList.remove("auto-scrolling");
      window.removeEventListener("wheel", stopScroll);
      window.removeEventListener("touchmove", stopScroll);
      window.removeEventListener("mousedown", stopScroll);
      window.removeEventListener("keydown", stopScroll);
    };
  }, [isAutoScrolling, stage]);

  return (
    <>
      <audio ref={audioRef} loop src={"/Moaaz-and-Sarah/wedding-song.m4a"} />
      <AnimatePresence>
        {stage === "envelope" && (
          <EnvelopeIntro onOpen={() => setStage("main")} audioRef={audioRef} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage === "main" && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#F5F0E8]"
          >
            <CoupleSection />
            <SectionDivider />
            <QuranSection />

            <SectionDivider />
            <DateSection />
            <SectionDivider />
            <PresenceSection />
            <SectionDivider />
            <FamiliesSection />
            <SectionDivider />

            <EngagementTimeline />
            <SectionDivider />

            <VenueSection />
            <SectionDivider />
            <RsvpSection />

            {/* Resume Scroll Button - only shows if user interrupted and isn't at bottom */}
            {!isAutoScrolling && window.scrollY > 100 && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed bottom-24 right-6 z-50 bg-[#D4AF6E] text-white p-3 rounded-full shadow-lg flex items-center justify-center"
                onClick={() => setIsAutoScrolling(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.button>
            )}
          </motion.main>
        )}
      </AnimatePresence>

      {/* <BackToTop /> */}
    </>
  );
}

export default App;
