"use client";

import Header from "../components/header";
import Footer from "../components/footer";

export default function FeaturesPage() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col">
      <Header />
      


      {/* Main Content Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 w-full h-full">
          {/* Floating Circles */}
          <div 
            className="absolute top-20 left-10 w-16 h-16 border-2 border-white/20 rounded-full"
            style={{
              animation: 'float-slow 6s ease-in-out infinite',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1)',
              filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))'
            }}
          ></div>
          <div 
            className="absolute top-40 right-20 w-12 h-12 border-2 border-white/30 rounded-full"
            style={{
              animation: 'float-medium 5s ease-in-out infinite',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.3), 0 0 45px rgba(255, 255, 255, 0.2)',
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'
            }}
          ></div>
          <div 
            className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-white/25 rounded-full"
            style={{
              animation: 'float-fast 4s ease-in-out infinite',
              boxShadow: '0 0 25px rgba(255, 255, 255, 0.35), 0 0 50px rgba(255, 255, 255, 0.25), 0 0 75px rgba(255, 255, 255, 0.15)',
              filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.45))'
            }}
          ></div>
          
          {/* Additional Circles */}
          <div 
            className="absolute top-1/6 right-1/3 w-10 h-10 border-2 border-white/25 rounded-full"
            style={{
              animation: 'float-medium 7s ease-in-out infinite',
              boxShadow: '0 0 18px rgba(255, 255, 255, 0.35), 0 0 35px rgba(255, 255, 255, 0.25)',
              filter: 'drop-shadow(0 0 9px rgba(255, 255, 255, 0.4))'
            }}
          ></div>
          <div 
            className="absolute bottom-1/3 left-1/5 w-14 h-14 border-2 border-white/20 rounded-full"
            style={{
              animation: 'float-slow 8s ease-in-out infinite',
              boxShadow: '0 0 22px rgba(255, 255, 255, 0.3), 0 0 45px rgba(255, 255, 255, 0.2)',
              filter: 'drop-shadow(0 0 11px rgba(255, 255, 255, 0.35))'
            }}
          ></div>
          
          {/* Floating Triangles */}
          <div 
            className="absolute top-1/3 right-1/3 w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-white/20 border-r-[20px] border-r-transparent"
            style={{
              animation: 'rotate-slow 20s linear infinite',
              filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 25px rgba(255, 255, 255, 0.2))'
            }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-white/30 border-r-[15px] border-r-transparent"
            style={{
              animation: 'rotate-medium 15s linear infinite',
              filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
            }}
          ></div>
          
          {/* Additional Triangles */}
          <div 
            className="absolute top-2/3 left-1/4 w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-b-white/25 border-r-[12px] border-r-transparent"
            style={{
              animation: 'rotate-fast 12s linear infinite',
              filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.35))'
            }}
          ></div>
          <div 
            className="absolute top-1/2 right-1/6 w-0 h-0 border-l-[18px] border-l-transparent border-b-[30px] border-b-white/20 border-r-[18px] border-r-transparent"
            style={{
              animation: 'rotate-slow 18s linear infinite',
              filter: 'drop-shadow(0 0 14px rgba(255, 255, 255, 0.3))'
            }}
          ></div>
          
          {/* Floating Squares */}
          <div 
            className="absolute top-1/2 left-1/6 w-8 h-8 border-2 border-white/25 rotate-45"
            style={{
              animation: 'bounce-slow 3s ease-in-out infinite',
              boxShadow: '0 0 18px rgba(255, 255, 255, 0.4), 0 0 35px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.2)',
              filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
            }}
          ></div>
          <div 
            className="absolute bottom-20 right-1/6 w-12 h-12 border-2 border-white/20 rotate-45"
            style={{
              animation: 'pulse-slow 4s ease-in-out infinite',
              boxShadow: '0 0 22px rgba(255, 255, 255, 0.35), 0 0 40px rgba(255, 255, 255, 0.25), 0 0 60px rgba(255, 255, 255, 0.15)',
              filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.45))'
            }}
          ></div>
          
          {/* Additional Squares */}
          <div 
            className="absolute top-1/4 right-1/5 w-6 h-6 border-2 border-white/25 rotate-45"
            style={{
              animation: 'bounce-fast 2s ease-in-out infinite',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.3)',
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.45))'
            }}
          ></div>
          <div 
            className="absolute bottom-1/3 left-2/3 w-10 h-10 border-2 border-white/25 rotate-45"
            style={{
              animation: 'pulse-fast 3s ease-in-out infinite',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.35), 0 0 40px rgba(255, 255, 255, 0.25)',
              filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))'
            }}
          ></div>
          
          {/* Hexagons */}
          <div 
            className="absolute top-1/4 left-1/3 w-16 h-16 border-2 border-white/15"
            style={{
              animation: 'spin-slow 25s linear infinite',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1)',
              filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))'
            }}
          >
            <div className="w-full h-full bg-white/5" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
          </div>
          
          {/* Additional Hexagon */}
          <div 
            className="absolute bottom-1/6 right-1/3 w-12 h-12 border-2 border-white/20"
            style={{
              animation: 'spin-medium 20s linear infinite',
              boxShadow: '0 0 18px rgba(255, 255, 255, 0.35), 0 0 35px rgba(255, 255, 255, 0.25)',
              filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))'
            }}
          >
            <div className="w-full h-full bg-white/5" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
          </div>
          
          {/* Stars (using CSS clip-path) */}
          <div 
            className="absolute top-1/5 left-1/5 w-8 h-8 border-2 border-white/25"
            style={{
              animation: 'twinkle 4s ease-in-out infinite',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.3)',
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'
            }}
          ></div>
          
          {/* Diamond */}
          <div 
            className="absolute bottom-1/4 left-1/6 w-10 h-10 border-2 border-white/20 rotate-45"
            style={{
              animation: 'float-medium 6s ease-in-out infinite',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.35), 0 0 40px rgba(255, 255, 255, 0.25)',
              filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))'
            }}
          ></div>
          
          {/* Octagon */}
          <div 
            className="absolute top-3/4 right-1/4 w-14 h-14 border-2 border-white/15"
            style={{
              animation: 'rotate-medium 22s linear infinite',
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
              boxShadow: '0 0 18px rgba(255, 255, 255, 0.3), 0 0 35px rgba(255, 255, 255, 0.2)',
              filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.35))'
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl">
              Core <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-2xl text-white max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              Our comprehensive system provides everything you need to manage your workforce efficiently
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Feature 1: Employee Management */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100 ring-2 ring-blue-500/20 hover:ring-blue-500/40 shadow-blue-500/25 hover:shadow-blue-500/40">
              <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url(/images/x.png)' }}>
                <div className=""></div>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="text-center">
                   
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg"></h3>
                    <p className="text-white/90 text-sm px-4 font-medium"></p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Employee Management</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Comprehensive employee profiles with personal information, contact details, and employment history.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 shadow-sm"></span>
                    Personal Information
                  </li>
                  <li className="flex items-center text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 shadow-sm"></span>
                    Contact Details
                  </li>
                  <li className="flex items-center text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 shadow-sm"></span>
                    Employment History
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2: Attendance Tracking */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100 ring-2 ring-green-500/20 hover:ring-green-500/40 shadow-green-500/25 hover:shadow-green-500/40">
              <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url(/images/att.jpg)' }}>
                <div className=""></div>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg"></h3>
                    <p className="text-white/90 text-sm px-4 font-medium"></p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Attendance Tracking</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Real-time attendance monitoring with clock-in/out functionality and time tracking.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3 shadow-sm"></span>
                    Clock In/Out
                  </li>
                  <li className="flex items-center text-sm text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3 shadow-sm"></span>
                    Time Tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3 shadow-sm"></span>
                    Overtime Calculation
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3: Payroll Management */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100 ring-2 ring-purple-500/20 hover:ring-purple-500/40 shadow-purple-500/25 hover:shadow-purple-500/40">
              <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url(/images/pay.png)' }}>
                <div className=""></div>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg"></h3>
                    <p className="text-white/90 text-sm px-4 font-medium"></p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Payroll Management</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Automated payroll processing with tax calculations and multiple payment methods.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-3 shadow-sm"></span>
                    Tax Calculations
                  </li>
                  <li className="flex items-center text-sm text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-3 shadow-sm"></span>
                    Multiple Payment Methods
                  </li>
                  <li className="flex items-center text-sm text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                    <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-3 shadow-sm"></span>
                    Automated Processing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom row with 2 centered cards */}
          <div className="flex justify-center mt-12">
            <div className="grid grid-cols-2 gap-8">
              
              {/* Feature 6: Reporting & Analytics */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100 ring-2 ring-indigo-500/20 hover:ring-indigo-500/40 shadow-indigo-500/25 hover:shadow-indigo-500/40">
                <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url(/images/report.png)' }}>
                  <div className=""></div>
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="">
                      
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg"></h3>
                      <p className="text-white/90 text-sm px-4 font-medium"></p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Reporting & Analytics</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Advanced reporting tools with customizable dashboards and data visualization.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">
                      <span className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mr-3 shadow-sm"></span>
                      Custom Dashboards
                    </li>
                    <li className="flex items-center text-sm text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">
                      <span className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mr-3 shadow-sm"></span>
                      Data Visualization
                    </li>
                    <li className="flex items-center text-sm text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">
                      <span className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mr-3 shadow-sm"></span>
                      Export Capabilities
                    </li>
                  </ul>
                </div>
              </div>

              {/* System Statistics Table */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100 ring-2 ring-emerald-500/20 hover:ring-emerald-500/40 shadow-emerald-500/25 hover:shadow-emerald-500/40">
                <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: 'url(/images/security.png)' }}>
                  <div className=""></div>
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="">
                        
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg"></h3>
                      <p className="text-white/90 text-sm px-4 font-medium"></p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Compliance & Security</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Enterprise-grade security with encryption, role-based access control, and compliance features.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">
                      <span className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mr-3 shadow-sm"></span>
                      Data Encryption
                    </li>
                    <li className="flex items-center text-sm text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">
                      <span className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mr-3 shadow-sm"></span>
                      Audit Logs
                    </li>
                    <li className="flex items-center text-sm text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">
                      <span className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mr-3 shadow-sm"></span>
                      Access Control
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          

          {/* System Information */}
          <div className="mt-32 mb-24">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl">
                System <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Information</span>
              </h2>
              <p className="text-2xl text-white max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                Get detailed insights into our system architecture and capabilities
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-10">
                <div className="group bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ring-2 ring-blue-500/20 hover:ring-blue-500/40">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Cloud-Based Architecture</h3>
                      <p className="text-gray-700 leading-relaxed text-xl">
                        Built on modern cloud infrastructure ensuring scalability, reliability, and 24/7 availability for your business needs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ring-2 ring-green-500/20 hover:ring-green-500/40">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Real-Time Synchronization</h3>
                      <p className="text-gray-700 leading-relaxed text-xl">
                        All data updates are synchronized in real-time across devices and locations, ensuring consistency and accuracy.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ring-2 ring-purple-500/20 hover:ring-purple-500/40">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Advanced Security</h3>
                      <p className="text-gray-700 leading-relaxed text-xl">
                        Enterprise-grade security with encryption, role-based access control, and compliance with industry standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-12 rounded-3xl text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-2 border border-blue-400/20">
                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/30">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold mb-4">Technical Specifications</h3>
                  <p className="text-xl text-blue-200">Enterprise-grade infrastructure</p>
                </div>
                <div className="space-y-6">
                  <div className="group/item flex items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="w-5 h-5 bg-blue-400 rounded-full mr-6 animate-pulse group-hover/item:bg-blue-300 transition-colors duration-300"></div>
                    <span className="text-xl font-semibold">99.9% Uptime Guarantee</span>
                  </div>
                  <div className="group/item flex items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="w-5 h-5 bg-green-400 rounded-full mr-6 animate-pulse group-hover/item:bg-green-300 transition-colors duration-300"></div>
                    <span className="text-xl font-semibold">256-bit SSL Encryption</span>
                  </div>
                  <div className="group/item flex items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="w-5 h-5 bg-purple-400 rounded-full mr-6 animate-pulse group-hover/item:bg-purple-300 transition-colors duration-300"></div>
                    <span className="text-xl font-semibold">Role-Based Access Control</span>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
            
            </div>
          </div>
        </div>
      </section>

      <Footer textColor="white" />
    </div>
  );
}
