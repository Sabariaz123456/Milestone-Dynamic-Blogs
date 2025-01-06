import AuthorCard from '../../app/components/AuthoreCard';
import React from 'react';

const Contact = () => {
  return (
    <>

    <div className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/background.jpg')", backgroundColor: '#1A1A1D' }}
    >
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1D] via-[#3B1C32] to-[#6A1E55] opacity-70"></div>
   
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 py-12 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#FAB12F]">Contact Me</h2>
        <p className="text-lg md:text-xl mb-8">
          Feel free to reach out for collaborations, project inquiries, or just to salty
          hello! I&apos;d love to connect with you.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-transparent border border-[#FAB12F] text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#FAB12F]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-transparent border border-[#FAB12F] text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#FAB12F]"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 bg-transparent border border-[#FAB12F] text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#FAB12F]"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-[#FAB12F] text-[#1A1A1D] font-bold uppercase rounded-md hover:bg-white transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <AuthorCard/>
    
    </>
  );
};

export default Contact;
