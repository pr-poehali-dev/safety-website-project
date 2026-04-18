import { useState } from "react";
import NavBar from "@/components/NavBar";
import TopSections from "@/components/TopSections";
import BottomSections from "@/components/BottomSections";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-golos overflow-x-hidden">
      <NavBar
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        onScrollTo={scrollTo}
        onToggleMobile={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
      <TopSections
        activeVideo={activeVideo}
        onScrollTo={scrollTo}
        onSetActiveVideo={setActiveVideo}
      />
      <BottomSections onScrollTo={scrollTo} />
    </div>
  );
}
