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
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                About Us
              </h1>
              <h2 className="text-3xl md:text-4xl text-blue-400 font-semibold">
                Our Story, Mission & Vision
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                Founded with a vision to revolutionize how businesses manage their workforce, we've been at the forefront of HR technology innovation for over a decade.
              </p>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                Our journey began when we recognized the challenges that organizations face in managing employee data efficiently. We set out to create a solution that would not only streamline HR processes but also provide valuable insights for better decision-making.
              </p>
              
              {/* Mission Card */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed mb-4">
                  To provide cutting-edge HR technology solutions that empower organizations to focus on what matters most - their people.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Streamline HR Operations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Enhance Employee Experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Drive Business Growth</span>
                  </div>
                </div>
              </div>
              
              {/* Vision Card */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed mb-4">
                  To become the global standard for employee record management, empowering businesses to focus on what truly matters - their people and their growth.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Global HR Technology Leadership</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>AI-Powered Workforce Insights</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Seamless Global Integration</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Company Info */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Our Core Values</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Innovation</h4>
                      <p className="text-gray-200 text-sm">Pushing boundaries in HR technology</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Customer Focus</h4>
                      <p className="text-gray-200 text-sm">Putting our customers first</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Collaboration</h4>
                      <p className="text-gray-200 text-sm">Working together for success</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">2</div>
                    <p className="text-gray-200 text-sm">Companies Served</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">50+</div>
                    <p className="text-gray-200 text-sm">Employees Managed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">99.9%</div>
                    <p className="text-gray-200 text-sm">Uptime</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">Mon to Fri</div>
                    <p className="text-gray-200 text-sm">Support</p>
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
