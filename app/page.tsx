'use client'
import React from "react";

import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

import PoetryDemoSection from "./components/PoetryDemoSection";
import FAQAndFeatures from "./components/FAQAndFeatures";

export default function Home() {
    return (
      <div className="min-h-screen">
        <HeroSection />
     
        <PoetryDemoSection/>
       
          
       
        <FAQAndFeatures/>
        <Footer />
        
      </div>
      
    );
  }