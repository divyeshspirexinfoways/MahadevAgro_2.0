import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, Mail, ArrowUpRight } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-[3rem] xl:text-[5.5rem] font-bold tracking-tight leading-[1.1] text-neutral-900">
              Feel Free To <br />
              <span className="flex items-center gap-6 mt-2">
                 <span className="inline-block w-8 lg:w-12 h-1 lg:h-1.5 bg-neutral-900"></span> Contact Us
              </span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-sm text-neutral-500 font-medium leading-relaxed lg:text-right pb-4"
          >
            Tell us about your requirements and our export team will get back to you within 24 hours.
          </motion.p>
        </div>

        {/* Form & Image Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 mb-24">
          {/* Left: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 bg-neutral-50/50 p-8 lg:p-12"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-400 ml-1">Name</label>
                <input type="text" placeholder="Your full name" className="w-full mt-2 bg-white border-none rounded-sm py-4 px-6 text-neutral-900 placeholder:text-neutral-300 focus:ring-2 focus:ring-neutral-200 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-400 ml-1">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full mt-2 bg-white border-none rounded-sm py-4 px-6 text-neutral-900 placeholder:text-neutral-300 focus:ring-2 focus:ring-neutral-200 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-400 ml-1">Phone Number</label>
                <input type="tel" placeholder="+91 000 000 0000" className="w-full mt-2 bg-white border-none rounded-sm py-4 px-6 text-neutral-900 placeholder:text-neutral-300 focus:ring-2 focus:ring-neutral-200 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-400 ml-1">Inquiry Type</label>
                <select className="w-full mt-2 bg-white border-none rounded-sm py-4 px-6 text-neutral-900 focus:ring-2 focus:ring-neutral-200 transition-all outline-none appearance-none">
                  <option>Bulk Export</option>
                  <option>Retail Partnership</option>
                  <option>Quality Check</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-neutral-400 ml-1">Message / Requirements</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full mt-2 bg-white border-none rounded-sm py-4 px-6 text-neutral-900 placeholder:text-neutral-300 focus:ring-2 focus:ring-neutral-200 transition-all outline-none resize-none"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="bg-neutral-900 text-white rounded-sm cursor-pointer py-5 px-10 font-bold flex items-center gap-4 hover:bg-neutral-800 transition-colors group">
                  Send Message
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right: Vertical Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 relative group"
          >
            <div className="h-full min-h-[500px] overflow-hidden">
              <img 
                src="https://i.pinimg.com/1200x/08/19/bd/0819bd2a262765ebc497725b0721daea.jpg" 
                alt="Agro Excellence" 
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md border border-white/30 py-2 px-6 rounded-full text-white text-sm font-bold tracking-widest">
                QUALITY FIRST
              </div>
            </div>
          </motion.div>
        </div>

        {/* Get in Touch Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 border-t border-neutral-100 pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone size={24} className="text-neutral-900" />
            </div>
            <h4 className="text-xl font-bold text-neutral-900 mb-4">Call & WhatsApp</h4>
            <p className="text-neutral-500 font-medium">+91 98765 43210</p>
            <p className="text-neutral-500 font-medium">+91 87654 32109</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock size={24} className="text-neutral-900" />
            </div>
            <h4 className="text-xl font-bold text-neutral-900 mb-4">Working Hours</h4>
            <p className="text-neutral-500 font-medium">Mon - Sat: 9am - 6pm</p>
            <p className="text-neutral-500 font-medium">Sunday: Closed</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail size={24} className="text-neutral-900" />
            </div>
            <h4 className="text-xl font-bold text-neutral-900 mb-4">Write to Us</h4>
            <p className="text-neutral-500 font-medium">info@mahadevagro.com</p>
            <p className="text-neutral-500 font-medium">export@mahadevagro.com</p>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8 border-t border-neutral-100 pt-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl sm:text-6xl lg:text-[3rem] xl:text-[5.5rem] font-bold tracking-tight leading-[1.1] text-neutral-900">
                We Are <br />
                <span className="flex items-center gap-6 mt-2">
                   <span className="inline-block w-8 lg:w-12 h-1 lg:h-1.5 bg-neutral-900"></span> Located At
                </span>
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-sm text-neutral-500 font-medium leading-relaxed lg:text-right pb-4"
            >
              Our corporate headquarters is located in the heart of Morbi, Gujarat, serving as our central hub for global agricultural exports.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full h-[400px] lg:h-[550px] grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden shadow-sm"
          >
            <iframe 
              title="Morbi Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117435.535805565!2d70.78164344335937!3d22.8184519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c169429194e3%3A0xc3163e7939103c80!2sMorbi%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715423880000!5m2!1sen!2sin" 
              className="w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
