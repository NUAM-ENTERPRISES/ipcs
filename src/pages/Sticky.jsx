import React, { useState } from "react";
import { PhoneCall, Mail } from "lucide-react";

export default function FloatingContactBar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glowing Background */}
      <div
        className={`absolute inset-0 blur-xl rounded-full transition-all duration-500 ${
          isHovered
            ? "bg-pink-400/40 scale-110 opacity-80"
            : "bg-pink-300/20 scale-100 opacity-60"
        }`}
      ></div>

      {/* Main Container */}
      <div
        className={`relative flex items-center gap-3 px-5 py-2.5 rounded-full backdrop-blur-xl 
                    bg-gradient-to-r from-white/90 to-gray-100/90 border border-white/30 shadow-xl 
                    transform transition-all duration-500 ${
          isHovered ? "scale-105 shadow-2xl" : ""
        }`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/+918848839295"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group bg-green-50 hover:bg-green-100 p-2.5 rounded-full 
                     transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 
                     active:scale-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="text-green-500"
            viewBox="0 0 24 24"
          >
            <path d="M12.04 2C6.55 2 2 6.55 2 12.04c0 2.12.56 4.19 1.64 6.01L2 22l4.11-1.6a9.97 9.97 0 0 0 5.93 1.93c5.49 0 10.04-4.55 10.04-10.04C22.08 6.55 17.53 2 12.04 2Zm0 18.27c-1.94 0-3.82-.57-5.44-1.64l-.39-.25-2.43.95.91-2.52-.26-.41a8.24 8.24 0 0 1-1.3-4.4c0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.27-8.25 8.27Zm4.5-6.2c-.25-.13-1.47-.72-1.7-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.97-.15.17-.3.19-.56.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.48-1.38-1.73-.15-.25-.02-.38.11-.5.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.57-1.37-.78-1.87-.2-.48-.41-.42-.57-.43h-.48c-.17 0-.43.06-.65.31-.23.25-.87.85-.87 2.07s.89 2.41 1.02 2.58c.13.17 1.74 2.64 4.22 3.7.59.26 1.05.42 1.41.54.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
          </svg>
        </a>

        {/* Phone */}
        <a
          href="tel:+919745280649"
          className="relative group bg-blue-50 hover:bg-blue-100 p-2.5 rounded-full 
                     transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 
                     active:scale-100"
        >
          <PhoneCall size={22} className="text-blue-500 transition-all duration-300" />
        </a>

        {/* Email */}
        <a
          href="mailto:customercareidentity@gmail.com"
          className="relative group bg-red-50 hover:bg-red-100 p-2.5 rounded-full 
                     transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 
                     active:scale-100"
        >
          <Mail size={22} className="text-red-500 transition-all duration-300" />
        </a>
      </div>
    </div>
  );
}
