import React from "react";
import ChatComponent from "./components/ChatComponent";
import { BookOpen, Feather, History, Users, HelpCircle } from "lucide-react";
import { MaxWidthWrapper } from "./components/max-width-wrapper";
import WhatIsPoetry from "./components/WhatIsPoetry";
import PoetryGuide from "./components/WritingGuide";
import PoetryOrigins from "./components/PoetryOrigins";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FlowerAnimation from "./components/FlowerAnimation";

export default function Home() {
    return (
      <div className="min-h-screen">
        <HeroSection />
        <div id="explore">
          <WhatIsPoetry />
        </div>
        <div id="journey">
          <PoetryOrigins />
        </div>
        <div id="craft">
          <PoetryGuide />
        </div>
        <div id="chat">
          <ChatComponent />
        </div>
        <Footer />
         {/* <FlowerAnimation /> */}
      </div>
      
    );
  }