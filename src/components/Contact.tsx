import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-transparent text-black border-t-2 border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-black mb-4 uppercase tracking-tight bg-white text-black inline-block px-5 py-2 border-3 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Get In Touch</h2>
          <p className="mt-4 sm:mt-6 text-gray-800 max-w-2xl mx-auto text-xs sm:text-base font-medium bg-white p-3 border border-black inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Open for <span className="highlight-marker">Data Analytics</span>, Electronics, and AI/ML opportunities. Feel free to reach out!
          </p>
        </div>
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <a href="mailto:shivamjha9871@gmail.com" className="bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#B8FF65] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex flex-col items-center text-center group">
            <span className="text-xl mb-1 bg-gray-100 group-hover:bg-white p-1 rounded border border-black">📧</span>
            <span className="text-xs font-bold uppercase text-gray-700">Email</span>
            <span className="text-xs sm:text-sm font-bold text-black truncate max-w-full">shivamjha9871@gmail.com</span>
          </a>

          <a href="https://linkedin.com/in/shivamjha" target="_blank" rel="noopener noreferrer" className="bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#B8FF65] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex flex-col items-center text-center group">
            <span className="text-xl mb-1 bg-gray-100 group-hover:bg-white p-1 rounded border border-black">💼</span>
            <span className="text-xs font-bold uppercase text-gray-700">LinkedIn</span>
            <span className="text-xs sm:text-sm font-bold text-black">linkedin.com/in/shivamjha</span>
          </a>

          <a href="https://github.com/shivamjha" target="_blank" rel="noopener noreferrer" className="bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#B8FF65] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex flex-col items-center text-center group">
            <span className="text-xl mb-1 bg-gray-100 group-hover:bg-white p-1 rounded border border-black">💻</span>
            <span className="text-xs font-bold uppercase text-gray-700">GitHub</span>
            <span className="text-xs sm:text-sm font-bold text-black">github.com/shivamjha</span>
          </a>
        </div>

        <div className="bg-white p-5 sm:p-12 border-3 sm:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <form className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-black mb-1.5 sm:mb-2 uppercase">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white border-2 border-black px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-base text-black focus:outline-none focus:ring-4 focus:ring-[#B8FF65] transition-colors placeholder:text-gray-400 font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-black mb-1.5 sm:mb-2 uppercase">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white border-2 border-black px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-base text-black focus:outline-none focus:ring-4 focus:ring-[#B8FF65] transition-colors placeholder:text-gray-400 font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-black mb-1.5 sm:mb-2 uppercase">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-white border-2 border-black px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-base text-black focus:outline-none focus:ring-4 focus:ring-[#B8FF65] transition-colors placeholder:text-gray-400 font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] resize-none"
                placeholder="Hello Shivam, I'd like to connect regarding..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-black text-white hover:bg-[#B8FF65] hover:text-black text-xs sm:text-sm font-black uppercase tracking-widest py-3 sm:py-4 px-6 sm:px-8 border-2 border-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
