import React from 'react'
import Hero from './Hero'
import About from './About'
import ExportCapabilities from './ExportCapabilities'
import OurCoreValues from './OurCoreValues'
import WhyChooseUs from './WhyChooseUs'
import Testimonials from './Testimonials'

const Home = () => {
    return (
        <div className='outfit'>
            <Hero />
            <About />
            <ExportCapabilities />
            <OurCoreValues />
            <WhyChooseUs />
            <Testimonials />
        </div>
    )
}

export default Home