import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnvelopeIntro } from "./components/EnvelopeIntro";
import { CoupleSection } from "./components/CoupleSection";
import { QuranSection } from "./components/QuranSection";
import { FamiliesSection } from "./components/FamiliesSection";
import { MessageSection } from "./components/MessageSection";
import { DateSection } from "./components/DateSection";
import { VenueSection } from "./components/VenueSection";
import { EngagementTimeline } from "./components/EngagementTimeline";
import { BackToTop } from "../../shared/BackToTop";
import { SectionDivider } from "../../shared/SectionDivider";

function App() {
  const [stage, setStage] = useState<"envelope" | "main">("envelope");

  return (
    <>
      <AnimatePresence>
        {stage === "envelope" && (
          <EnvelopeIntro onOpen={() => setStage("main")} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage === "main" && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <CoupleSection />
            <SectionDivider />
            <QuranSection />
            <SectionDivider />
            <FamiliesSection />
            <SectionDivider />
            <EngagementTimeline />
            <SectionDivider />
            <MessageSection />
            <SectionDivider />
            <DateSection />
            <SectionDivider />
            <VenueSection />
          </motion.main>
        )}
      </AnimatePresence>

      <BackToTop />
    </>
  );
}

export default App;
