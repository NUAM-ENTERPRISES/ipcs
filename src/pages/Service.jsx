import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Star, ArrowUpRight, Sparkles } from "lucide-react";

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "General Pest Control Service",
      subtitle: " Home Protection",
      description: " Comprehensive pest elimination for homes with family-safe, eco-friendly treatments that protect your loved ones.",
      features: ["Safe for Kids & Pets", "Eco-Friendly Products", "One-Time & Recurring", "Satisfaction Guaranteed"],
      color: "from-emerald-400 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      darkBg: "from-emerald-900 to-teal-900",
      icon: "🏠",
      // price: "Starting ₹999"
    },
    {
      id: 2,
      title: "Crawling Pest Control Service",
      subtitle: "Commercial Protection",
      description: "Comprehensive pest management solutions for commercial spaces, ensuring a pest-free environment for your business.",
      features: ["Custom Plans", "Discreet Service", "Licensed Technicians", "Eco-Friendly Options"],
      color: "from-blue-400 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      darkBg: "from-blue-900 to-indigo-900",
      icon: "🏢",
      // price: "Custom Quote"
    },
    {
      id: 3,
      title: "Termite Control Service",
      subtitle: "Structure Protection",
      description: "Advanced termite detection and elimination to protect your property's structural integrity.",
      features: ["Pre & Post Construction", "5-Year Warranty", "Advanced Detection", "Preventive Barriers"],
      color: "from-amber-400 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
      darkBg: "from-amber-900 to-orange-900",
      icon: "🛡️",
      // price: "Starting ₹2499"
    },
    {
      id: 4,
      title: "Rodent Control",
      subtitle: "Complete Elimination",
      description: "Effective rodent removal and prevention strategies to keep your space clean and hygienic.",
      features: ["Humane Methods", "Entry Point Sealing", "Ongoing Monitoring", "Sanitation Advice"],
      color: "from-purple-400 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      darkBg: "from-purple-900 to-pink-900",
      icon: "🐭",
      price: "Starting ₹1499"
    },
    {
      id: 5,
      title: "Mosquito Control",
      subtitle: "Disease Prevention",
      description: "Targeted mosquito control to reduce disease risks and create comfortable outdoor spaces.",
      features: ["Breeding Site Treatment", "Larvicide Application", "Natural Repellents", "Seasonal Programs"],
      color: "from-cyan-400 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50",
      darkBg: "from-cyan-900 to-blue-900",
      icon: "🦟",
      // price: "Starting ₹799"
    },
    {
      id: 6,
      title: "Bed Bug Control Service",
      subtitle: " Sleep Tight",
      description: "Comprehensive bed bug control solutions for a peaceful night's sleep.",
      features: ["Thorough Inspection", "Heat Treatment", "Chemical Solutions", "Preventive Measures"],
      color: "from-rose-400 to-red-600",
      bgColor: "from-rose-50 to-red-50",
      darkBg: "from-rose-900 to-red-900",
      icon: "🛏️",
      // price: "Starting ₹799"
    },
     {
      id: 7,
      title: "Other Services",
      subtitle: " Featured Services",
      description: "Comprehensive pest control solutions for specialized needs and situations.",
      features: ["Flies Control Service", "Snake Control Service", "Disinfection Service", "Fungus Control Service"],
      color: "from-indigo-400 to-purple-600",
      bgColor: "from-indigo-50 to-purple-50",
      darkBg: "from-indigo-900 to-purple-900",
      icon: "⚡",
      // price: "Starting ₹799"
    }
  ];

  // Auto-play functionality - changed to 60 seconds (1 minute)
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 7000); // Changed from 4000 to 60000 (1 minute)
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, services.length]);

  // Mouse tracking for parallax effect
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height
      });
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden relative">
      
      {/* Animated Background - reduced opacity for better visibility */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-5 animate-pulse"
            style={{
              background: `radial-gradient(circle, ${services[currentIndex]?.color?.split(' ')[1] || 'rgb(59, 130, 246)'}, transparent)`,
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
        
        {/* Particles - reduced opacity */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div 
        ref={containerRef}
        className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
        onMouseMove={handleMouseMove}
      >
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Header */}
          <div className="text-center mb-12 mt-20">
            <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/40 rounded-full px-4 sm:px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-white text-sm font-medium">Our Premium Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Professional Pest Solutions
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto font-medium">
              Discover our comprehensive range of pest control services designed to protect your space
            </p>
          </div>

          {/* Main Carousel Container */}
          <div className="relative">
            
            {/* Cards Container */}
            <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center perspective-1000">
              {services.map((service, index) => {
                const isActive = index === currentIndex;
                const offset = index - currentIndex;
                const absOffset = Math.abs(offset);
                
                // Adjust translateX and scale for responsiveness
                const translateX = offset * (window.innerWidth < 640 ? 80 : 120);
                const translateZ = isActive ? 0 : -absOffset * (window.innerWidth < 640 ? 100 : 150);
                const rotateY = isActive ? 0 : offset * (window.innerWidth < 640 ? 15 : 25);
                const scale = isActive ? 1 : Math.max(0.75, 1 - absOffset * 0.12); // Improved visibility
                const opacity = isActive ? 1 : Math.max(0.6, 1 - absOffset * 0.2); // Better visibility for non-active cards

                return (
                  <div
                    key={service.id}
                    className={`absolute w-[90vw] max-w-[20rem] sm:max-w-[22rem] md:max-w-[24rem] min-h-[24rem] sm:min-h-[28rem] md:min-h-[32rem] transition-all duration-700 ease-out cursor-pointer ${
                      !isActive ? 'hover:scale-105' : ''
                    }`}
                    style={{
                      transform: `
                        translateX(${translateX + mousePosition.x * (isActive ? 10 : 5)}px) 
                        translateY(${mousePosition.y * (isActive ? 10 : 5)}px)
                        translateZ(${translateZ}px) 
                        rotateY(${rotateY}deg) 
                        scale(${scale})
                      `,
                      opacity,
                      zIndex: isActive ? 10 : 10 - absOffset
                    }}
                    onClick={() => !isActive && goToSlide(index)}
                  >
                    
                    {/* Card */}
                    <div className={`
                      relative w-full h-full rounded-3xl overflow-hidden
                      bg-gradient-to-br ${service.darkBg} backdrop-blur-sm
                      border border-white/50 shadow-2xl
                      ${isActive ? 'shadow-3xl border-white/60' : 'border-white/40'}
                    `}>
                      
                      {/* Enhanced glow effect for active card */}
                      {isActive && (
                        <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} opacity-40 blur-xl rounded-3xl`} />
                      )}
                      
                      {/* Card content with better visibility */}
                      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                        
                        {/* Header */}
                        <div className="text-center mb-6">
                          <div className="text-3xl sm:text-4xl mb-3">{service.icon}</div>
                          <div className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r ${service.color} text-white mb-3 shadow-lg`}>
                            {service.subtitle}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{service.title}</h3>
                        </div>

                        {/* Description with better visibility */}
                        <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 flex-grow font-medium">
                          {service.description}
                        </p>

                        {/* Features with better visibility */}
                        <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-6">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current flex-shrink-0" />
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between gap-4">
                          <div className="min-w-0">
                            <div className="text-base sm:text-lg font-bold text-white truncate">{service.price || "Custom Quote"}</div>
                            <div className="text-xs sm:text-sm text-gray-300 font-medium">Best Value</div>
                          </div>
                          <button className={`
                            group px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm
                            bg-gradient-to-r ${service.color} text-white shadow-lg
                            hover:scale-105 transition-all duration-300
                            flex items-center gap-2 shrink-0
                          `}>
                            Book Now
                            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation with better visibility */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/50 text-white hover:bg-black/60 transition-all duration-300 flex items-center justify-center group shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/50 text-white hover:bg-black/60 transition-all duration-300 flex items-center justify-center group shadow-lg"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Indicators with better visibility */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 border border-white/40
                  ${index === currentIndex 
                    ? `bg-gradient-to-r ${services[currentIndex].color} scale-125 shadow-lg` 
                    : 'bg-white/70 hover:bg-white/90'
                  }
                `}
              />
            ))}
          </div>

          {/* Auto-play control with 1 minute indicator */}
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/50 text-white hover:bg-black/60 transition-all duration-300 font-medium shadow-lg"
            >
              <Play className={`w-4 h-4 ${isAutoPlaying ? 'animate-pulse' : ''}`} />
              <span className="text-sm sm:text-base">{isAutoPlaying ? 'Pause' : 'AutoPlay'}</span>
            </button>
            
            <a
              href="/services"
              className="px-5 sm:px-7 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              View All Services
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }

        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
        }

        @media (max-width: 640px) {
          .perspective-1000 {
            perspective: 800px;
          }
        }
      `}</style>
    </div>
  );
};

export default Service;