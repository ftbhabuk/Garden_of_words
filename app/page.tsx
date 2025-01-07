import React from "react";
import ChatComponent from "./components/ChatComponent";
import { BookOpen, Feather, History, Users, HelpCircle } from "lucide-react";
import { MaxWidthWrapper } from "./components/max-width-wrapper";
import WhatIsPoetry from "./components/WhatIsPoetry";
import PoetryGuide from "./components/WritingGuide";
import PoetryOrigins from "./components/PoetryOrigins";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export default function Home() {
    return (
        <div className="min-h-screen ">

            <HeroSection />
            <WhatIsPoetry />
            <PoetryOrigins/>
            <PoetryGuide/>
            <ChatComponent />
            <Footer/>

           
        </div>
    );
}