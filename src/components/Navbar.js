import React, { useState, useEffect } from 'react';
import { useEnquiryModal } from './EnquiryModal';
import { motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';

function BrochureButton({ isScrolled, onClick, className = '', variant = 'default' }) {
  const isMobileMenu = variant === 'mobile';
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 border px-4 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition ${className} ${
        isMobileMenu
          ? 'bg-transparent border-[#997736] text-[#997736]' // ✅ Mobile override
          : isScrolled
            ? 'bg-white border-gray-300 text-[#997736]'
            : 'bg-transparent border-white text-white'
      }`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: 'easeInOut',
        }}
        className={`${isMobileMenu ? 'text-[#997736]' : isScrolled ? 'text-[#997736]' : 'text-white'} text-lg`}
      >
        <FaFilePdf />
      </motion.div>{' '}
      <span
        className={`text-sm sm:text-base ${
          isMobileMenu ? 'text-[#997736]' : isScrolled ? 'text-[#997736]' : 'text-white'
        }`}
      >
        Download Brochure{' '}
      </span>{' '}
    </button>
  );
}

export default function Navbar() {
  const { openModal } = useEnquiryModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {' '}
      {/* Tailwind CSS CDN */}{' '}
      <script src="https://cdn.tailwindcss.com"> </script>
      {/* Font Awesome for icons */}{' '}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-md text-[#997736]'
          : 'bg-transparent text-white'
          }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="space-x-8 flex items-center">
            <a href="#home">
              <img src="../Assets/logo.png" alt="logo" className="w-28" />
            </a>
            {/* Desktop Menu */}{' '}
            <div className="hidden md:flex items-center gap-6 font-medium">
              {' '}
              {[
                { href: '#home', label: 'HOME' },
                { href: '#about', label: 'ABOUT' },
                { href: '#site-floor-plans', label: 'SITE & FLOOR PLANS' },
                { href: '#amenities', label: 'AMENITIES' },
                { href: '#gallery', label: 'GALLERY' },
                { href: '#location', label: 'LOCATION' },
                { href: '#contact', label: 'CONTACT' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-300 ${isScrolled
                    ? 'hover:text-[#997736]/70'
                    : 'hover:text-[#997736]'
                    }`}
                >
                  {' '}
                  {item.label}{' '}
                </a>
              ))}
              {/* 🔥 Animated Download Brochure Button */}{' '}
              <BrochureButton
                isScrolled={isScrolled}
                onClick={openModal}
              />{' '}
            </div>{' '}
          </div>
          {/* Mobile Menu Toggle */}{' '}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#3d3d3d] focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}{' '}
              </svg>{' '}
            </button>{' '}
          </div>{' '}
        </div>
        {/* Mobile Menu */}{' '}
        <div
          className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } lg:hidden p-8 pt-20`}
        >
          <div className="flex flex-col space-y-6 text-xl text-[#997736] text-center font-semibold">
            {' '}
            {[
              { href: '#home', label: 'HOME' },
              { href: '#about', label: 'ABOUT' },
              { href: '#site-floor-plans', label: 'SITE & FLOOR PLANS' },
              { href: '#amenities', label: 'AMENITIES' },
              { href: '#gallery', label: 'GALLERY' },
              { href: '#location', label: 'LOCATION' },
              { href: '#contact', label: 'CONTACT' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {' '}
                {item.label}{' '}
              </a>
            ))}
            {/* 🔥 Mobile Animated Button */}{' '}
            <BrochureButton
              isScrolled={isScrolled}
              onClick={openModal}
              variant="mobile"
              className="mx-auto "
            />
          </div>{' '}
        </div>{' '}
      </nav>
      {/* Floating Buttons */}{' '}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-2 z-50">
        <button
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="flex items-center justify-end px-4 py-2 bg-white text-gray-800 rounded-l-full shadow-lg hover:bg-gray-100 transition-colors group"
        >
          <span className="mr-2 text-sm text-[#997736] font-semibold whitespace-nowrap group-hover:block hidden">
            ENQUIRY NOW{' '}
          </span>{' '}
          <i className="fas fa-envelope text-lg text-[#997736]" />
        </button>
        <button
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="flex items-center justify-end px-4 py-2 bg-white text-gray-800 rounded-l-full shadow-lg hover:bg-gray-100 transition-colors group">
          <span className="mr-2 text-sm text-[#997736] font-semibold whitespace-nowrap group-hover:block hidden">
            CALL{' '}
          </span>{' '}
          <i className="fas fa-phone-alt text-lg text-[#997736]" />
        </button>
        <button
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="flex items-center justify-end px-4 py-2 bg-white text-gray-800 rounded-l-full shadow-lg hover:bg-gray-100 transition-colors group">
          <span className="mr-2 text-sm text-[#997736] font-semibold whitespace-nowrap group-hover:block hidden">
            WHATSAPP{' '}
          </span>{' '}
          <i className="fab fa-whatsapp text-lg text-[#997736]" />
        </button>{' '}
      </div>{' '}
    </div>
  );
}
