
import React from 'react';
import WhatIsPoetry from '../components/WhatIsPoetry';
import Navbar from '../components/navbar';
import PoetryHistory from '../components/PoetryOrigins';
import Footer from '../components/Footer';

export default function WhatIsPoetryPage(){
    return (
        <div className='min-h-screen'>
            <Navbar/>
            <WhatIsPoetry/>
            <PoetryHistory/>
            <Footer/>
        </div>
    )
}