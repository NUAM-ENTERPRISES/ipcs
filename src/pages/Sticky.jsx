import React, { useState, useEffect } from "react";
import { PhoneCall, Mail } from "lucide-react";

const Sticky = () => {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Main Sticky Bar */}
      <div
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[9999] md:hidden transition-all duration-700 ease-out ${
          visible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-16 scale-95 pointer-events-none'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Floating Background with Glassmorphism */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
          
          {/* Main Container */}
          <div className={`relative flex items-center gap-4 px-8 py-4 rounded-full backdrop-blur-xl bg-gradient-to-r from-white/90 to-gray-100/90 border border-white/30 shadow-2xl transform transition-all duration-500 ${
            isHovered ? 'scale-110 shadow-3xl' : ''
          }`}>
            
            {/* Contact Icons */}
            <WhatsAppIcon
              href="https://wa.me/+918848839295"
              delay="0s"
            />
            
            <ContactIcon
              href="tel:+919745280649"
              icon={PhoneCall}
              color="text-blue-500"
              bgColor="bg-blue-50"
              hoverBg="hover:bg-blue-100"
              delay="0.1s"
            />
            
            <ContactIcon
              href="mailto:customercareidentity@gmail.com"
              icon={Mail}
              color="text-red-500"
              bgColor="bg-red-50"
              hoverBg="hover:bg-red-100"
              delay="0.2s"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

const WhatsAppIcon = ({ href, delay }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group bg-green-50 hover:bg-green-100 p-4 rounded-full transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 active:scale-110 animate-float"
      style={{
        animationDelay: delay,
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      
      {/* WhatsApp SVG Icon */}
      <svg 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        fill="none"
        className={`transition-all duration-300 ${
          isPressed ? 'scale-90' : ''
        } group-hover:drop-shadow-lg`}
      >
        <path 
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"
          fill="#25D366"
        />
      </svg>
      
      {/* Hover Tooltip */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
          WhatsApp
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </a>
  );
};

const ContactIcon = ({ href, icon: Icon, color, bgColor, hoverBg, delay }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`relative group ${bgColor} ${hoverBg} p-4 rounded-full transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 active:scale-110 animate-float`}
      style={{
        animationDelay: delay,
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      
      {/* Icon with Bounce */}
      <Icon 
        size={28} 
        className={`${color} transition-all duration-300 ${
          isPressed ? 'scale-90' : ''
        } group-hover:drop-shadow-lg`}
      />
      
      {/* Hover Tooltip */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
          {href.includes('wa.me') ? 'WhatsApp' : 
           href.includes('tel:') ? 'Call' : 
           href.includes('mailto:') ? 'Email' : 'Contact'}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </a>
  );
};

export default Sticky;