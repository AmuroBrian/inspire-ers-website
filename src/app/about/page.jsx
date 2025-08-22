"use client";

import Header from "../components/header";
import Footer from "../components/footer";

export default function AboutPage() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col">
      <Header />
      
      {/* Hero Section - Split Layout */}
      <section className="relative py-20 px-4 w-full min-h-screen flex items-center overflow-hidden">
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

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                  About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Us</span>
                </h1>
                <h2 className="text-3xl md:text-4xl text-blue-400 font-semibold drop-shadow-lg">
                  Our Story, Mission & Vision
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-200 leading-relaxed mb-6 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                  Founded with a vision to revolutionize how businesses manage their workforce, we've been at the forefront of HR technology innovation for over a decade.
                </p>
                <p className="text-xl text-gray-200 leading-relaxed mb-6 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                  Our journey began when we recognized the challenges that organizations face in managing employee data efficiently. We set out to create a solution that would not only streamline HR processes but also provide valuable insights for better decision-making.
                </p>
              </div>
              
              {/* Mission Card */}
              <div className="group bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-8 rounded-3xl text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-2 border border-blue-400/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4 border border-white/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold">Our Mission</h3>
                </div>
                <p className="text-xl leading-relaxed mb-6">
                  To provide cutting-edge HR technology solutions that empower organizations to focus on what matters most - their people.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-white rounded-full mr-4 shadow-lg"></div>
                    <span className="text-lg font-medium">Streamline HR Operations</span>
                  </div>
                  <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <div className="w-3 h-3 bg-white rounded-full mr-4 shadow-lg"></div>
                    <span className="text-lg font-medium">Enhance Employee Experience</span>
                  </div>
                  <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <div className="w-3 h-3 bg-white rounded-full mr-4 shadow-lg"></div>
                    <span className="text-lg font-medium">Drive Business Growth</span>
                  </div>
                </div>
              </div>
              
              {/* Vision Card */}
              <div className="group bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 p-8 rounded-3xl text-white shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 transform hover:-translate-y-2 border border-indigo-400/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4 border border-white/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-xl leading-relaxed mb-6">
                  To become the global standard for employee record management, empowering businesses to focus on what truly matters - their people and their growth.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-white rounded-full mr-4 shadow-lg"></div>
                    <span className="text-lg font-medium">Global HR Technology Leadership</span>
                  </div>
                  <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <div className="w-3 h-3 bg-white rounded-full mr-4 shadow-lg"></div>
                    <span className="text-lg font-medium">AI-Powered Workforce Insights</span>
                  </div>
                  <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <div className="w-3 h-3 bg-white rounded-full mr-4 shadow-lg"></div>
                    <span className="text-lg font-medium">Seamless Global Integration</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Company Info */}
            <div className="space-y-8">
              <div className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 shadow-2xl hover:shadow-white/10">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  Our Core Values
                </h3>
                <div className="space-y-6">
                  <div className="group/item flex items-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover/item:shadow-blue-500/50 transition-all duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">Innovation</h4>
                      <p className="text-gray-200">Pushing boundaries in HR technology</p>
                    </div>
                  </div>
                  <div className="group/item flex items-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover/item:shadow-green-500/50 transition-all duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">Customer Focus</h4>
                      <p className="text-gray-200">Putting our customers first</p>
                    </div>
                  </div>
                  <div className="group/item flex items-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover/item:shadow-purple-500/50 transition-all duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">Collaboration</h4>
                      <p className="text-gray-200">Working together for success</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 shadow-2xl hover:shadow-white/10">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group/item p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl font-bold text-blue-400 mb-2 group-hover/item:text-blue-300 transition-colors duration-300">2</div>
                    <p className="text-gray-200 font-medium">Companies Served</p>
                  </div>
                  <div className="text-center group/item p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl font-bold text-green-400 mb-2 group-hover/item:text-green-300 transition-colors duration-300">50+</div>
                    <p className="text-gray-200 font-medium">Employees Managed</p>
                  </div>
                  <div className="text-center group/item p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl font-bold text-purple-400 mb-2 group-hover/item:text-purple-300 transition-colors duration-300">99.9%</div>
                    <p className="text-gray-200 font-medium">Uptime</p>
                  </div>
                  <div className="text-center group/item p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover/item:text-cyan-300 transition-colors duration-300">Mon to Fri</div>
                    <p className="text-gray-200 font-medium">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>







      <Footer textColor="white" />
    </div>
  );
}
