import React from 'react'
import PageHeader from '../../Components/common/PageHeader'
import ContactForm from './ContactForm'

const ContactUs = () => {
    return (
        <main className='outfit'>
            <PageHeader 
                title="Contact Us" 
                subtitle="Reach out to our global export team for inquiries, partnerships, or quality checks." 
                image="https://i.pinimg.com/736x/2d/c5/56/2dc556e0906e02ccffe437d0c70847ee.jpg" 
            />
            <ContactForm />
        </main>
    )
}

export default ContactUs
