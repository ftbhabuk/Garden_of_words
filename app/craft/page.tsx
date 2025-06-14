
import React from "react";
import PoetryGuide from "../components/WritingGuide";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function CraftPage() {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <PoetryGuide/>
            <Footer/>
            
        </div>
    );
}