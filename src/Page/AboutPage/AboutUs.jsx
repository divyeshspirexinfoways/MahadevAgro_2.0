import React from 'react'
import AboutMahadev from './AboutMahadev'
import VisionMission from './VisionMission'
import WhatWeDo from './WhatWeDo'
import PageHeader from '../../Components/common/PageHeader'

const AboutUs = () => {
    return (
        <div className='outfit'>
            <PageHeader 
                title="About Us" 
                subtitle="Dedicated to excellence in every grain, bridging the gap between nature and the global market."
                image="https://i.pinimg.com/736x/59/ee/41/59ee41e8ca73762a5589ffd9c8d3195c.jpg"
            />
            <AboutMahadev />
            <VisionMission />
            <WhatWeDo />
        </div>
    )
}

export default AboutUs