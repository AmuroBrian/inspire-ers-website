"use client";

export default function Hero() {
  const title = "EMPLOYEE RECORD SYSTEM";
  const description = "The Employee Record System is a centralized platform for securely storing, managing, and tracking employee information and work history.";
  
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20 px-4 w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Additional Floating Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400/20 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/15 rounded-full opacity-25"></div>
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

      <div className="relative z-10 w-full mx-auto text-center max-w-6xl">
        <h1 className="text-7xl md:text-9xl font-bold text-white mb-8 min-h-[8rem] md:min-h-[12rem] flex items-center justify-center"
            style={{
              textShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
              filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))'
            }}>
          {title.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-wave"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '2s'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
        <p className="text-3xl md:text-4xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed min-h-[6rem] md:min-h-[8rem] flex items-center justify-center animate-fade-in-up"
           style={{
             textShadow: '0 0 8px rgba(59, 130, 246, 0.4), 0 0 15px rgba(59, 130, 246, 0.2)',
             filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))',
             animationDelay: '0.6s'
           }}>
          {description}
        </p>
        
        {/* Call to Action Button */}
        <div className="mb-16">
          
        </div>
      </div>

      <style jsx>{`
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
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
} 