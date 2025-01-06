import React from "react";
import ChatComponent from "./components/ChatComponent";
import { BookOpen, Feather, History, Users, HelpCircle } from "lucide-react";
import { Navbar } from "./components/navbar";
import { MaxWidthWrapper } from "./components/max-width-wrapper";
import WhatIsPoetry from "./components/WhatIsPoetry";
import PoetryGuide from "./components/WritingGuide";
import PoetryOrigins from "./components/PoetryOrigins";
import PoetryCommunity from "./components/CommunityComponent";
import HeroSection from "./components/HeroSection";

export default function Home() {
    return (
        <div className="min-h-screen ">
            <Navbar />
            <HeroSection />
            <WhatIsPoetry />
            <PoetryOrigins/>
            <PoetryGuide/>
            <ChatComponent />
            <PoetryCommunity/>

           
        </div>
    );
}