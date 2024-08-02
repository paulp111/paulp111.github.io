import Head from "next/head";
import "../../assets/styles/globals.css";
import { HeroHighlightSection } from "@/components/HeroHighlightSection";
import { FlipWordsSection } from "@/components/FlipWordsSection";
import { LayoutGridSection } from "@/components/LayoutGridSection";
import CustomScroll from "@/components/CustomScroll";
import { CardHoverEffectSection } from "@/components/CardHoverEffectSection";
import { TextGenerateEffectSection } from "@/components/TextGenerateEffectSection";
import { StaticHighlight } from "@/components/ui/static-highlight";
import { Navbar } from "@/components/Navbar";

export default function MainPage() {
  return (
    <div>
      <Head>
        <title>Main Page</title>
        <meta name="description" content="Description of the main page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-black">
        <Navbar /> {/* Hier wird die Navbar eingefügt */}
        <HeroHighlightSection />
        <CustomScroll />
        <div className="flex flex-col items-center justify-center min-h-screen pt-20">
          <StaticHighlight className="text-4xl mb-6">About me</StaticHighlight>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Tip: Click on a picture to reveal more details! 🔥
          </p>
          <LayoutGridSection />
        </div>
        <div className="flex items-center justify-center min-h-screen pt-10">
          <TextGenerateEffectSection />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen pt-10">
          <StaticHighlight className="text-4xl mb-6">My work</StaticHighlight>
          <CardHoverEffectSection />
        </div>
        <div className="flex items-center justify-center min-h-screen pt-10">
          <FlipWordsSection />
        </div>
      </main>
    </div>
  );
}
