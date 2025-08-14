export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4 w-full min-h-screen flex items-center justify-center">
      <div className="w-full mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Employee Record
          <span className="text-[#2E5A88] block">System</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
        The Employee Record System is a centralized platform for securely storing, managing, and tracking employee information and work history.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#2E5A88] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1e3a5f] transition-colors duration-200 shadow-lg">
            Get Started
          </button>
          <button className="border-2 border-[#2E5A88] text-[#2E5A88] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2E5A88] hover:text-white transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
} 