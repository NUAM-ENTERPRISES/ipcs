import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Why Us", href: "/why" },
  { name: "Services", href: "/service" },
  { name: "Products", href: "/product" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Animation variants for the header container
  const headerVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animation variants for nav links
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
<motion.div
  variants={headerVariants}
  initial="hidden"
  animate="visible"
  className="bg-gray-300 shadow-lg"
>
        <div className="max-w-7xl mx-auto flex items-center justify-between py-0 px-6">
          {/* Logo */}
 <motion.a
  href="#home"
  whileHover={{ scale: 1.05, rotate: 2, transition: { type: "spring", stiffness: 300 } }}
  whileTap={{ scale: 0.95 }}
  className="flex flex-col items-start cursor-pointer ml-4 mb-1"
>
  {/* Logo + TM side by side */}
  <div className="flex items-center">
    <img
      src={Logo}
      alt="Logo"
      className="w-26 h-auto object-contain m-0 p-0"
    />
    {/* TM placed a little to right of logo */}
    <span
      className="ml-1 flex items-center justify-center 
                 w-5 h-5 text-[10px] font-bold border border-gray-600 rounded-full 
                 bg-white text-gray-700"
    >
      TM
    </span>
  </div>

  {/* Handwriting text with px size */}
  <p
    className="font-['Dancing_Script'] text-center m-0 p-0 -mt-5"
    style={{ fontSize: "14px", lineHeight: "5px" }}
  >
    <span className="text-[#2F3CBF]">Pest-Free Living,</span>{" "}
    <span className="text-[#35A853]">Peace of Mind</span>
  </p>
</motion.a>


          {/* Desktop Navbar */}
          <nav className="hidden md:flex space-x-8 text-green-600 font-medium">
  {navLinks.map((link, index) => (
    <motion.a
      key={link.name}
      href={link.href}
      custom={index}
      variants={linkVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.1,
        color: "#facc15", // hover color (yellow-400)
        transition: { type: "spring", stiffness: 400 },
      }}
      className="relative group"
    >
      {link.name}
      <motion.span
        className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400"
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.a>
  ))}
</nav>

          {/* CTA Button (Desktop) */}
          <motion.a
            href="tel:+91 8848839295"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#facc15",
              boxShadow: "0px 8px 25px rgba(250,204,21,0.6)",
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-block bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-semibold shadow-lg transition"
          >
            Call Now
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-teal-500"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Navbar */}
    <AnimatePresence>
  {menuOpen && (
    <>
      {/* Enhanced overlay background with blur effect */}
      <motion.div
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ opacity: 0.8, backdropFilter: "blur(8px)" }}
        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 bg-gradient-to-br from-black/60 via-gray-900/70 to-black/60 md:hidden z-40"
        onClick={() => setMenuOpen(false)}
      />

      {/* Enhanced sidebar menu with glassmorphism */}
      <motion.div
        variants={{
          hidden: { 
            x: "100%", 
            opacity: 0,
            scale: 0.8,
            rotateY: -15
          },
          visible: { 
            x: 0, 
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.6,
              staggerChildren: 0.1,
              delayChildren: 0.2
            }
          },
          exit: { 
            x: "100%", 
            opacity: 0,
            scale: 0.9,
            rotateY: 15,
            transition: {
              duration: 0.4,
              ease: "easeInOut"
            }
          }
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed top-0 right-0 w-2/3 h-screen bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-gray-900/90 backdrop-blur-xl shadow-2xl flex flex-col px-8 py-12 space-y-6 md:hidden z-50 border-l border-white/10"
        style={{
          background: "linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.9) 50%, rgba(17, 24, 39, 0.95) 100%)",
        }}
      >
        {/* Animated background pattern */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 80% 20%, rgba(250, 204, 21, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
          }}
        />

        {/* Enhanced cross button with ripple effect */}
        <motion.button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white/80 hover:text-yellow-400 transition-colors duration-300 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          whileHover={{ 
            scale: 1.2, 
            rotate: 90,
            backgroundColor: "rgba(250, 204, 21, 0.1)",
            boxShadow: "0 0 20px rgba(250, 204, 21, 0.3)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="text-xl font-light"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            ✕
          </motion.span>
        </motion.button>

        {/* Navigation links with enhanced animations */}
        <motion.div className="flex flex-col space-y-6 mt-16">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              variants={{
                hidden: { 
                  opacity: 0, 
                  x: 60, 
                  scale: 0.8,
                  filter: "blur(10px)"
                },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  filter: "blur(0px)",
                  transition: { 
                    delay: 0.3 + index * 0.1, 
                    duration: 0.6,
                    type: "spring",
                    damping: 20,
                    stiffness: 200
                  }
                }
              }}
              className="relative group"
            >
              {/* Animated underline */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              
              {/* Glowing dot indicator */}
              <motion.div
                className="absolute -left-4 top-1/2 w-2 h-2 bg-yellow-400 rounded-full opacity-0"
                whileHover={{ opacity: 1, scale: 1.5 }}
                transition={{ duration: 0.2 }}
              />

              <motion.a
                href={link.href}
                className="text-white/90 text-xl font-medium transition-all duration-300 block py-2 relative z-10"
                whileHover={{ 
                  scale: 1.05, 
                  x: 15,
                  color: "#facc15",
                  textShadow: "0 0 20px rgba(250, 204, 21, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMenuOpen(false)}
              >
                <motion.span
                  whileHover={{ 
                    letterSpacing: "0.05em",
                    transition: { duration: 0.2 }
                  }}
                >
                  {link.name}
                </motion.span>
              </motion.a>

              {/* Background hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-400/5 rounded-lg -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced call button with premium effects */}
        <motion.div
          className="mt-auto"
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.8 },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                delay: 0.8, 
                duration: 0.6,
                type: "spring",
                damping: 15,
                stiffness: 300
              }
            }
          }}
        >
          <motion.a
            href="tel:+919745280649"
            className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 text-gray-900 px-8 py-4 rounded-2xl font-bold shadow-2xl transition text-center block overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 35px rgba(250,204,21,0.4), 0 0 30px rgba(250,204,21,0.3)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen(false)}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            
            {/* Button text with icon */}
            <motion.span 
              className="relative z-10 flex items-center justify-center gap-2"
              whileHover={{ 
                letterSpacing: "0.05em",
                transition: { duration: 0.2 }
              }}
            >
              <motion.span
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                📞
              </motion.span>
              Call Now
            </motion.span>

            {/* Pulsing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-yellow-400"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.a>
        </motion.div>

        {/* Decorative floating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </motion.div>
    </>
  )}
</AnimatePresence>
    </header>
  );
};

export default Header;