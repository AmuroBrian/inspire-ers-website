"use client";

export default function Hero() {
  const title = "EMPLOYEE RECORD SYSTEM";
  const description = "The Employee Record System is a centralized platform for securely storing, managing, and tracking employee information and work history.";
  
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20 px-4 w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sweeping White Wave Element */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute bottom-0 left-0 w-full h-full">
          <svg 
            className="absolute bottom-0 left-0 w-full h-full" 
            viewBox="0 0 1200 800" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,800 Q300,600 600,700 Q900,800 1200,700 L1200,800 L0,800 Z" 
              fill="white" 
              opacity="0.9"
            />
          </svg>
        </div>
      </div>

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 w-full h-full">
        {/* Floating Circles */}
        <div 
          className="absolute top-8 sm:top-10 md:top-20 left-3 sm:left-5 md:left-10 w-6 h-6 sm:w-8 md:w-16 sm:h-8 md:h-16 border-2 border-white/20 rounded-full"
          style={{
            animation: 'float-slow 6s ease-in-out infinite',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1)',
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))'
          }}
        ></div>
        <div 
          className="absolute top-16 sm:top-20 md:top-40 right-3 sm:right-5 md:right-20 w-4 h-4 sm:w-6 md:w-12 sm:h-4 md:h-12 border-2 border-white/30 rounded-full"
          style={{
            animation: 'float-medium 5s ease-in-out infinite',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.3), 0 0 45px rgba(255, 255, 255, 0.2)',
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'
          }}
        ></div>
        <div 
          className="absolute bottom-12 sm:bottom-16 md:bottom-32 left-1/4 w-8 h-8 sm:w-10 md:w-20 sm:h-8 md:h-20 border-2 border-white/25 rounded-full"
          style={{
            animation: 'float-fast 4s ease-in-out infinite',
            boxShadow: '0 0 25px rgba(255, 255, 255, 0.35), 0 0 50px rgba(255, 255, 255, 0.25), 0 0 75px rgba(255, 255, 255, 0.15)',
            filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.45))'
          }}
        ></div>
        
        {/* Additional Circles */}
        <div 
          className="absolute top-1/6 right-1/3 w-4 h-4 sm:w-5 md:w-10 sm:h-4 md:h-10 border-2 border-white/25 rounded-full"
          style={{
            animation: 'float-medium 7s ease-in-out infinite',
            boxShadow: '0 0 18px rgba(255, 255, 255, 0.35), 0 0 35px rgba(255, 255, 255, 0.25)',
            filter: 'drop-shadow(0 0 9px rgba(255, 255, 255, 0.4))'
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/5 w-5 h-5 sm:w-7 md:w-14 sm:h-5 md:h-14 border-2 border-white/20 rounded-full"
          style={{
            animation: 'float-slow 8s ease-in-out infinite',
            boxShadow: '0 0 22px rgba(255, 255, 255, 0.3), 0 0 45px rgba(255, 255, 255, 0.2)',
            filter: 'drop-shadow(0 0 11px rgba(255, 255, 255, 0.35))'
          }}
        ></div>
        
        {/* Floating Triangles */}
        <div 
          className="absolute top-1/3 right-1/3 w-0 h-0 border-l-[8px] sm:border-l-[10px] md:border-l-[20px] border-l-transparent border-b-[14px] sm:border-b-[18px] md:border-b-[35px] border-b-white/20 border-r-[8px] sm:border-r-[10px] md:border-r-[20px] border-r-transparent"
          style={{
            animation: 'rotate-slow 20s linear infinite',
            filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 25px rgba(255, 255, 255, 0.2))'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-0 h-0 border-l-[6px] sm:border-l-[8px] md:border-l-[15px] border-l-transparent border-b-[10px] sm:border-b-[13px] md:border-b-[25px] border-b-white/30 border-r-[6px] sm:border-r-[8px] md:border-r-[15px] border-r-transparent"
          style={{
            animation: 'rotate-medium 15s linear infinite',
            filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
          }}
        ></div>
        
        {/* Additional Triangles */}
        <div 
          className="absolute top-2/3 left-1/4 w-0 h-0 border-l-[5px] sm:border-l-[6px] md:border-l-[12px] border-l-transparent border-b-[8px] sm:border-b-[10px] md:border-b-[20px] border-b-white/25 border-r-[5px] sm:border-r-[6px] md:border-r-[12px] border-r-transparent"
          style={{
            animation: 'rotate-fast 12s linear infinite',
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.35))'
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/6 w-0 h-0 border-l-[7px] sm:border-l-[9px] md:border-l-[18px] border-l-transparent border-b-[12px] sm:border-b-[15px] md:border-b-[30px] border-b-white/20 border-r-[7px] sm:border-r-[9px] md:border-r-[18px] border-r-transparent"
          style={{
            animation: 'rotate-slow 18s linear infinite',
            filter: 'drop-shadow(0 0 14px rgba(255, 255, 255, 0.3))'
          }}
        ></div>
        
        {/* Floating Squares */}
        <div 
          className="absolute top-1/2 left-1/6 w-3 h-3 sm:w-4 md:w-8 sm:h-3 md:h-8 border-2 border-white/25 rotate-45"
          style={{
            animation: 'bounce-slow 3s ease-in-out infinite',
            boxShadow: '0 0 18px rgba(255, 255, 255, 0.4), 0 0 35px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.2)',
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
          }}
        ></div>
        <div 
          className="absolute bottom-8 sm:bottom-10 md:bottom-20 right-1/6 w-4 h-4 sm:w-6 md:w-12 sm:h-4 md:h-12 border-2 border-white/20 rotate-45"
          style={{
            animation: 'pulse-slow 4s ease-in-out infinite',
            boxShadow: '0 0 22px rgba(255, 255, 255, 0.35), 0 0 40px rgba(255, 255, 255, 0.25), 0 0 60px rgba(255, 255, 255, 0.15)',
            filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.45))'
          }}
        ></div>
        
        {/* Additional Squares */}
        <div 
          className="absolute top-1/4 right-1/5 w-2 h-2 sm:w-3 md:w-6 sm:h-2 md:h-6 border-2 border-white/25 rotate-45"
          style={{
            animation: 'bounce-fast 2s ease-in-out infinite',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.3)',
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.45))'
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-2/3 w-4 h-4 sm:w-5 md:w-10 sm:h-4 md:h-10 border-2 border-white/25 rotate-45"
          style={{
            animation: 'pulse-fast 3s ease-in-out infinite',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.35), 0 0 40px rgba(255, 255, 255, 0.25)',
            filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))'
          }}
        ></div>
        
        {/* Hexagons */}
        <div 
          className="absolute top-1/4 left-1/3 w-6 h-6 sm:w-8 md:w-16 sm:h-6 md:h-16 border-2 border-white/15"
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
          className="absolute bottom-1/6 right-1/3 w-4 h-4 sm:w-6 md:w-12 sm:h-4 md:h-12 border-2 border-white/20"
          style={{
            animation: 'spin-medium 20s linear infinite',
            boxShadow: '0 0 18px rgba(255, 255, 255, 0.35), 0 0 35px rgba(255, 255, 255, 0.25)',
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))'
          }}
        >
          <div className="w-full h-full bg-white/5" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto max-w-7xl text-center flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight text-center animate-fade-in-down whitespace-nowrap"
            style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4)',
              filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.8))',
              animation: 'fadeInDown 1.5s ease-out, glowPulse 3s ease-in-out infinite'
            }}>
          {title.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-wave"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '2s',
                animationFillMode: 'both',
                animationIterationCount: 'infinite'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white mb-4 sm:mb-6 md:mb-8 lg:mb-12 max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed text-center animate-fade-in-up px-2"
           style={{
             textShadow: '0 0 15px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.5), 0 0 45px rgba(255, 255, 255, 0.3)',
             filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))',
             animation: 'fadeInUp 2s ease-out 0.5s both'
           }}>
          {description}
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4)';
            filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.8))';
          }
          50% {
            textShadow: '0 0 30px rgba(59, 130, 246, 0.9), 0 0 60px rgba(59, 130, 246, 0.7), 0 0 90px rgba(59, 130, 246, 0.5)';
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(2deg);
          }
          50% {
            transform: translateY(-5px) rotate(-1deg);
          }
          75% {
            transform: translateY(-8px) rotate(1deg);
          }
        }

        @keyframes letterAppear {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
            filter: blur(2px);
          }
          50% {
            opacity: 0.7;
            transform: translateY(-5px) scale(1.1);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1);
            filter: blur(0px);
          }
        }

        .animate-letter-appear {
          animation: letterAppear 1s ease-out both;
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 1.5s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 2s ease-out 0.5s both;
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(360deg); }
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes rotate-medium {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        
        @keyframes rotate-fast {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-10px) rotate(45deg); }
        }
        
        @keyframes bounce-fast {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-8px) rotate(45deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1) rotate(45deg); }
          50% { opacity: 0.4; transform: scale(1.1) rotate(45deg); }
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.2; transform: scale(1) rotate(45deg); }
          50% { opacity: 0.4; transform: scale(1.05) rotate(45deg); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes spin-medium {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
} 