export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-transparent w-full">
      {/* Transparent Overlay Bar */}
      <div className="bg-transparent backdrop-blur-sm w-full px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 py-4">
          {/* FOLLOW US Text */}
          <div className="text-white font-semibold text-lg drop-shadow-lg">
            CONNECT WITH US:
          </div>
          
          {/* Social Media Links */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Facebook */}
            <a href="https://web.facebook.com/inspirenextglobalinc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-blue-500 transition-all duration-300 drop-shadow-lg">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="font-medium">FACEBOOK</span>
            </a>
            
            {/* TikTok */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-pink-500 transition-all duration-300 drop-shadow-lg">
              <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53-.63 3.11-1.75 4.27-.96 1.08-2.31 1.22-3.56.8-.34-.11-.7-.31-1.01-.54-.32-.24-.6-.52-.84-.83-.48-.6-.87-1.26-1.11-1.96-.15-.42-.23-.87-.24-1.32-.01-.44-.01-.88 0-1.32.01-.44.09-.87.24-1.32.24-.7.63-1.36 1.11-1.96.24-.31.52-.59.84-.83.31-.23.67-.43 1.01-.54.25-.08.51-.12.78-.14.27-.02.54-.02.81-.02.44 0 .88.01 1.32.02.45.01.88.09 1.32.24.7.24 1.36.63 1.96 1.11.31.24.59.52.83.84.23.31.43.67.54 1.01.08.25.12.51.14.78.02.27.02.54.02.81 0 .44-.01.88-.02 1.32-.01.45-.09.88-.24 1.32-.24.7-.63 1.36-1.11 1.96-.24.31-.52.59-.84.83-.31.23-.67.43-1.01.54-.25.08-.51.12-.78.14-.27.02-.54.02-.81.02-.44 0-.88-.01-1.32-.02-.45-.01-.88-.09-1.32-.24-.7-.24-1.36-.63-1.96-1.11-.31-.24-.59-.52-.83-.84-.23-.31-.43-.67-.54-1.01-.08-.25-.12-.51-.14-.78-.02-.27-.02-.54-.02-.81 0-.44.01-.88.02-1.32.01-.45.09-.88.24-1.32.24-.7.63-1.36 1.11-1.96.24-.31.52-.59.84-.83.31-.23.67-.43 1.01-.54.25-.08.51-.12.78-.14.27-.02.54-.02.81-.02z"/>
                </svg>
              </div>
              <span className="font-medium">TIKTOK</span>
            </a>
            
            {/* Instagram */}
            <a href="https://www.instagram.com/inspirenextglobal_inc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-pink-400 transition-all duration-300 drop-shadow-lg">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                </svg>
              </div>
              <span className="font-medium">INSTAGRAM</span>
            </a>
            
            {/* Website Logo */}
            <a href="https://inspirenextglobal.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-green-400 transition-all duration-300 drop-shadow-lg">
              <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-4.62-.5-8-4.93-8-9.93 0-.55.45-1 1-1s1 .45 1 1c0 4.42 3.58 8 8 8 .55 0 1 .45 1 1s-.45 1-1 1zm0-15c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
              </div>
              <span className="font-medium">WEBSITE</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
