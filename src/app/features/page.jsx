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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Core Features</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Our comprehensive system provides everything you need to manage your workforce efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Employee Management */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <img 
                  src="/images/employee-management.png" 
                  alt="Employee Management"
                  className="w-24 h-24 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Employee Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive employee profiles with personal information, contact details, and employment history.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Personal Information
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Contact Details
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Employment History
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2: Attendance Tracking */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <img 
                  src="/images/attendance-tracking.png" 
                  alt="Attendance Tracking"
                  className="w-24 h-24 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Attendance Tracking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Real-time attendance monitoring with clock-in/out functionality and time tracking.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Clock In/Out
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Time Tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Overtime Calculation
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3: Payroll Management */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <img 
                  src="/images/payroll-management.png" 
                  alt="Payroll Management"
                  className="w-24 h-24 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Payroll Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Automated payroll processing with tax calculations and multiple payment methods.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Tax Calculations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Multiple Payment Methods
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Automated Processing
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 4: Performance Reviews */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <img 
                  src="/images/performance-reviews.png" 
                  alt="Performance Reviews"
                  className="w-24 h-24 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Performance Reviews</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive performance evaluation system with goal setting and feedback management.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Goal Setting
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Feedback Management
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Progress Tracking
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 5: Leave Management */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <img 
                  src="/images/leave-management.png" 
                  alt="Leave Management"
                  className="w-24 h-24 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Leave Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Streamlined leave request and approval system with calendar integration.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Leave Requests
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Approval Workflow
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Calendar Integration
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 6: Reporting & Analytics */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                <img 
                  src="/images/reporting-analytics.png" 
                  alt="Reporting & Analytics"
                  className="w-24 h-24 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Reporting & Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced reporting tools with customizable dashboards and data visualization.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Custom Dashboards
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Data Visualization
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Export Capabilities
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* System Information */}
          <div className="mt-32 mb-24">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">System Information</h2>
                          <p className="text-2xl text-white max-w-4xl mx-auto leading-relaxed">
              Get detailed insights into our system architecture and capabilities
            </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-10">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Cloud-Based Architecture</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Built on modern cloud infrastructure ensuring scalability, reliability, and 24/7 availability for your business needs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Real-Time Synchronization</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        All data updates are synchronized in real-time across devices and locations, ensuring consistency and accuracy.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Security</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Enterprise-grade security with encryption, role-based access control, and compliance with industry standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-10 rounded-3xl text-white shadow-2xl">
                <h3 className="text-4xl font-bold mb-8 text-center">Technical Specifications</h3>
                <div className="space-y-6">
                  <div className="flex items-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="w-4 h-4 bg-blue-400 rounded-full mr-4 animate-pulse"></div>
                    <span className="text-lg font-medium">99.9% Uptime Guarantee</span>
                  </div>
                  <div className="flex items-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="w-4 h-4 bg-green-400 rounded-full mr-4 animate-pulse"></div>
                    <span className="text-lg font-medium">256-bit SSL Encryption</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white mb-8">
              Experience the power of our Employee Record System today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Request Demo
              </button>
              <button className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer textColor="white" />
    </div>
  );
}
