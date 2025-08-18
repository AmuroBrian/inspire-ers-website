'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    setIsTransitioning(true);
    
    // Navigate after loading animation
    setTimeout(() => {
      router.push(path);
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Loading Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-md z-[9999] flex items-center justify-center">
          <div className="text-center">
            {/* Simple Spinner */}
            <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-6"></div>
            
            {/* Loading Text */}
            <p className="text-black text-xl font-semibold">Loading...</p>
          </div>
        </div>
      )}
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-transparent' 
          : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-6 bg-blue-500 transform rotate-12"></div>
                  <div className="w-2 h-6 bg-blue-500 transform rotate-12"></div>
                  <div className="w-2 h-6 bg-blue-500 transform rotate-12"></div>
                </div>
                <h1 className="text-white text-2xl font-bold drop-shadow-lg transition-colors duration-300">
                  Inspire ERS
                </h1>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <button
                onClick={() => handleNavigation('/')}
                className="text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center drop-shadow-lg cursor-pointer"
              >
                HOME
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className="text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center drop-shadow-lg cursor-pointer"
              >
                About Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              

              <button
                onClick={() => handleNavigation('/features')}
                className="text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center drop-shadow-lg cursor-pointer"
              >
                FEATURES
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => {
                  // Create a temporary link element to trigger download
                  const link = document.createElement('a');
                  link.href = '/downloads/msi-installer.msi'; // You'll need to add this file to your public folder
                  link.download = 'Inspire-ERS-Installer.msi';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center drop-shadow-lg cursor-pointer"
              >
                Download App Here
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </nav>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-orange-400 focus:outline-none transition-colors duration-300 drop-shadow-lg"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white bg-opacity-95 rounded-b-lg backdrop-blur-md border border-gray-200 shadow-lg">
              <button
                onClick={() => handleNavigation('/')}
                className="text-gray-800 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer w-full text-left"
              >
                HOME
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className="text-gray-800 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer w-full text-left"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigation('/features')}
                className="text-gray-800 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer w-full text-left"
              >
                FEATURES
              </button>
              <button
                onClick={() => {
                  // Create a temporary link element to trigger download
                  const link = document.createElement('a');
                  link.href = '/downloads/msi-installer.msi'; // You'll need to add this file to your public folder
                  link.download = 'Inspire-ERS-Installer.msi';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="text-gray-800 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer w-full text-left"
              >
                Download ERS Here
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
