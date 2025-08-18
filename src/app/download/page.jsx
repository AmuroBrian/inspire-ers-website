"use client";

import Header from "../components/header";
import Footer from "../components/footer";

export default function DownloadPage() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col">
      <Header />
      
      {/* Main Content Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Download Inspire ERS</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Get the latest version of our Employee Record System application
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Download Options */}
            <div className="space-y-8">
              {/* Windows */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Windows</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Download the official Windows installer package for easy installation and setup.
                  </p>
                  <div className="space-y-3 mb-6">
                    <button 
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = "#";
                        link.download = "#";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
                    >
                      Installer
                    </button>
                    <button 
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/downloads/windows-portable.zip';
                        link.download = 'Inspire-ERS-Windows-Portable.zip';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
                    >
                      Installer v2
                    </button>
                  </div>
                 
                </div>
              </div>

              {/* Linux */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Linux</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Available for Ubuntu, Debian, CentOS, and other major Linux distributions.
                  </p>
                  <div className="space-y-3 mb-6">
                    <button 
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = "#";
                        link.download = "#";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
                    >
                      Installer Linux
                    </button>
                    <button 
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = "#";
                        link.download = "#";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
                    >
                      Installer Linux v2
                    </button>

                  </div>
                 
                </div>
              </div>

              {/* iOS */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">iOS</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Native iOS app available on the App Store for iPhone and iPad users.
                  </p>
                  <div className="space-y-3 mb-6">
                    <button 
                      onClick={() => {
                        window.open('https://apps.apple.com/app/inspire-ers/id123456789', '_blank');
                      }}
                      className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
                    >
                      Installer iOS
                    </button>
                    <button 
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = "#";
                        link.download = "#";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
                    >
                      Installer iOS v2
                    </button>
                  </div>
                 
                </div>
              </div>
            </div>

            {/* Right Side - System Requirements & Instructions */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-white">
                <h3 className="text-3xl font-bold mb-6 text-center">System Requirements</h3>
                
                {/* Windows Requirements */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">Windows</h4>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-sm">Windows 10 or later (64-bit)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-sm">4GB RAM minimum (8GB recommended)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-sm">500MB available disk space</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-sm">DirectX 11 compatible graphics</span>
                    </div>
                  </div>
                </div>

                {/* Linux Requirements */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-orange-400">Linux</h4>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                      <span className="text-sm">Ubuntu 18.04+, Debian 10+, CentOS 8+</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                      <span className="text-sm">4GB RAM minimum (8GB recommended)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                      <span className="text-sm">400MB available disk space</span>
                    </div>
                    <div className="flex items-center">
                      
                     
                    </div>
                  </div>
                </div>

                {/* iOS Requirements */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-indigo-400">iOS</h4>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-indigo-400 rounded-full mr-3"></div>
                      <span className="text-sm">iOS 13.0 or later</span>
                    </div>
                  
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-indigo-400 rounded-full mr-3"></div>
                      <span className="text-sm">2GB RAM minimum</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-indigo-400 rounded-full mr-3"></div>
                      <span className="text-sm">200MB available storage</span>
                    </div>
                  </div>
                </div>

                {/* General Requirements */}
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-green-400">General</h4>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-sm">Internet connection for updates</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-sm">1024x768 minimum resolution</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-sm">Administrator privileges (Windows/Linux)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-white">
                <h3 className="text-3xl font-bold mb-6 text-center">Installation Guide</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-lg">Download the Installer</h4>
                      <p className="text-gray-200">Click the download button above to get the Windows installer</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-lg">Run the Installer</h4>
                      <p className="text-gray-200">Double-click the downloaded MSI file to start installation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-lg">Follow the Wizard</h4>
                      <p className="text-gray-200">Complete the installation wizard with default settings</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-lg">Launch the Application</h4>
                      <p className="text-gray-200">Start using Inspire ERS from your Start menu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Help?</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              If you encounter any issues during download or installation, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold cursor-default">
                inspirenextglobal@gmail.com
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer textColor="white" />
    </div>
  );
} 