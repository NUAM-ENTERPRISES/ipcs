import React,{useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import servicesData from "../data/servicesData";

const Detailedservice = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id.toString() === id);

  // Advanced floating entrance animations
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotateX: -30,
      y: -100
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        bounce: 0.4
      },
    },
  };

  // Staggered card animations with 3D effects
  const subsectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      rotateY: -15,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        bounce: 0.3
      },
    },
  };

  // Dynamic image gallery animations
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.6,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        bounce: 0.4
      },
    },
    hover: {
      scale: 1.15,
      rotate: 2,
      zIndex: 10,
      boxShadow: "0px 25px 50px rgba(99, 102, 241, 0.25)",
      transition: { 
        duration: 0.4,
        type: "spring",
        bounce: 0.3
      },
    },
  };

  // Container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Background particle animation
  const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, ease: "easeOut" }
    }
  };
 useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
        
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <motion.div
            className="w-24 h-24 border-4 border-white/30 border-t-white rounded-full mx-auto mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <motion.p
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Service not found
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen relative overflow-hidden"
      variants={backgroundVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 via-transparent to-pink-900/50"></div>
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 10}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        ></motion.div>
      ))}

      <div className="relative z-10 py-24 px-4">
        {/* Hero Title Section */}
        <motion.div
          className="text-center mb-20"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              {service.title}
            </h1>
          </motion.div>
          
          {/* Animated Underline */}
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 128, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          ></motion.div>
          
          {/* Subtitle */}
          <motion.p 
            className="text-slate-300 mt-8 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Comprehensive service details and specifications
          </motion.p>
        </motion.div>

        {/* Content Sections */}
        <motion.div 
          className="max-w-6xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {service.subSections.map((sub, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                variants={subsectionVariants}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden">
                  {/* Card Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.2), transparent)",
                      backgroundSize: "200% 200%",
                    }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  ></motion.div>

                  <div className="relative z-10">
                    {/* Section Header */}
                    <motion.div
                      className="flex items-center gap-4 mb-8"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-6 h-6 bg-white rounded-lg"></div>
                      </motion.div>
                      <h2 className="text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-500">
                        {sub.heading}
                      </h2>
                    </motion.div>

                    {/* Paragraphs with Typewriter Effect */}
                    <div className="space-y-4 mb-8">
                      {sub.paragraphs.map((para, i) => (
                        <motion.p
                          key={i}
                          className="text-slate-300 leading-relaxed text-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 + 0.5 }}
                        >
                          {para}
                        </motion.p>
                      ))}
                    </div>

                    {/* Bullet Points */}
                    {sub.bulletPoints && sub.bulletPoints.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className="text-xl font-semibold mb-6 text-blue-300">
                          {sub.bulletHeading}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {sub.bulletPoints.map((point, j) => (
                            <motion.div
                              key={j}
                              className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.1 + 0.7 }}
                              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            >
                              <motion.div
                                className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: j * 0.2 }}
                              ></motion.div>
                              <span className="text-slate-300">{point}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Image Gallery */}
                    {sub.images && sub.images.length > 0 && (
                      <motion.div
                        className="mt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <h3 className="text-xl font-semibold mb-6 text-blue-300">Gallery</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                          {sub.images.map((img, k) => (
                            <motion.div
                              key={k}
                              className="relative group/image"
                              variants={imageVariants}
                              initial="hidden"
                              animate="visible"
                              whileHover="hover"
                              transition={{ delay: k * 0.1 }}
                            >
                              <motion.img
                                src={img}
                                alt={`${service.title}-${sub.heading}`}
                                className="w-full h-32 object-cover rounded-2xl border border-white/20 shadow-lg"
                              />
                              
                              {/* Image Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                              
                              {/* Zoom Icon */}
                              <motion.div
                                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                                  <div className="w-4 h-4 border-2 border-gray-600 rounded-full"></div>
                                </div>
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Back Button */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, type: "spring", bounce: 0.4 }}
        >
          <Link to="/services" className="group relative inline-block">
            <motion.div
              className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 30px 60px rgba(99, 102, 241, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <motion.div
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{ x: [-8, 8, -8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                Back to Services
                <motion.div
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{ x: [8, -8, 8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
              </span>
              
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Detailedservice;