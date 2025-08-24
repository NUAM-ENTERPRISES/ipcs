import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import servicesData from "../data/servicesData";
import { Link } from "react-router-dom";

const Servicespage = () => {
  // Modern floating card animations
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      rotateX: -15,
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        bounce: 0.4
      },
    },
    hover: {
      y: -15,
      rotateY: 5,
      scale: 1.02,
      boxShadow: "0px 25px 50px rgba(59, 130, 246, 0.15)",
      transition: { 
        duration: 0.4, 
        ease: "easeOut",
        type: "spring",
        bounce: 0.3
      },
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateX: -20 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 1, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        bounce: 0.5
      } 
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="min-h-screen relative overflow-hidden py-24 px-4 mt-5"
      variants={backgroundVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"></div>
      
      <div className="relative z-10">
        {/* Modern Title with Glow Effect */}
        <motion.div
          className="text-center mb-20"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.8 }}
          ></motion.div>
          <motion.p 
            className="text-slate-300 mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Discover our comprehensive range of professional services designed to elevate your business
          </motion.p>
        </motion.div>

        {/* Services Grid with Stagger Animation */}
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                className="group relative"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  
                  {/* Image Section */}
                  {service.subSections?.length > 0 &&
                    service.subSections[0].images?.[0] && (
                      <motion.div 
                        className="relative h-48 overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img
                          src={service.subSections[0].images[0]}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Floating Icon */}
                        <motion.div
                          className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg"></div>
                        </motion.div>
                      </motion.div>
                  )}

                  <div className="p-8 relative z-10">
                    {/* Service Title */}
                    <motion.h2 
                      className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300"
                    >
                      {service.title}
                    </motion.h2>

                    {/* Description */}
                    {service.subSections?.length > 0 &&
                      service.subSections[0].paragraphs?.[0] && (
                        <p className="text-slate-300 mb-6 line-clamp-3 leading-relaxed text-sm">
                          {service.subSections[0].paragraphs[0]}
                        </p>
                    )}

                    {/* Modern CTA Button */}
                    <Link
                      to={`/service/${service.id}`}
                      className="group/btn relative inline-flex items-center justify-center w-full"
                    >
                      <motion.div
                        className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 w-full text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10">Explore Service</span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                        ></motion.div>
                      </motion.div>
                    </Link>
                  </div>

                  {/* Animated Border Glow */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                  ></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Floating Back Button */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, type: "spring", bounce: 0.4 }}
        >
          <Link to="/" className="group relative inline-block">
            <motion.div
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 text-white px-10 py-4 rounded-full font-semibold shadow-2xl overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 20px 40px rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                Back to Home
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ x: [5, -5, 5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
              </span>
              
              {/* Hover Effect Background */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Servicespage;