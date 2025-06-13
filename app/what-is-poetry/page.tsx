
import React from 'react';
import WhatIsPoetry from '../components/WhatIsPoetry';
import Navbar from '../components/navbar';
import PoetryHistory from '../components/PoetryOrigins';
export default function WhatIsPoetryPage(){
    return (
        <div className='min-h-screen'>
            <Navbar/>
            <WhatIsPoetry/>
            <PoetryHistory/>
        </div>
    )
}