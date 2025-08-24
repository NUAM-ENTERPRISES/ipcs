// src/components/WhyChooseUs.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Import your images
import new1 from "../assets/new1.jpeg";
import iden1 from "../assets/iden1.png";
import iden2 from "../assets/iden2.png";
import iden3 from "../assets/iden3.png";
import iden4 from "../assets/iden4.png";
import iden5 from "../assets/iden5.png";
import iden6 from "../assets/iden6.png";
import iden7 from "../assets/iden7.png";
import iden8 from "../assets/iden8.png";
import new2 from "../assets/new2.jpeg";
import iden10 from "../assets/iden10.png";
import iden11 from "../assets/iden11.png";
import new3 from "../assets/new3.jpeg";
import iden13 from "../assets/iden13.png";
import iden14 from "../assets/iden14.png";

const reasons = [
  {
    id: 1,
    title: "Free Pest Inspection",
    subtitle: "Complete Property Assessment",
    description: "Schedule a comprehensive free inspection today and take the first step towards a pest-free environment with our expert evaluation.",
    images: [new1],
    icon: "🔍",
    color: "from-emerald-500 to-teal-600",
    stats: { number: "100%", label: "Free Service" }
  },
  {
    id: 2,
    title: "24/7 Customer Support",
    subtitle: "Always Here When You Need Us",
    description: "Emergency pest control services available around the clock. Our dedicated team responds quickly to urgent situations anytime.",
    images: [iden1, iden2],
    icon: "🚨",
    color: "from-blue-500 to-indigo-600",
    stats: { number: "24/7", label: "Availability" }
  },
  {
    id: 3,
    title: "Professional Excellence",
    subtitle: "Decade of Expertise",
    description: "Over 10 years of industry experience with certified professionals who understand proper pesticide usage and safety protocols.",
    images: [iden3, iden4, iden5],
    icon: "👨‍🔬",
    color: "from-purple-500 to-violet-600",
    stats: { number: "10+", label: "Years Experience" }
  },
  {
    id: 4,
    title: "ISO Certified Excellence",
    subtitle: "Quality & Environmental Standards",
    description: "Certified to ISO 9001:2015 and ISO 14001:2015, demonstrating our commitment to quality and environmental management.",
    images: [iden6, iden7],
    icon: "🏆",
    color: "from-amber-500 to-orange-600",
    stats: { number: "ISO", label: "Certified" }
  },
  {
    id: 5,
    title: "Government Licensed",
    subtitle: "Official Authorization",
    description: "Fully government-approved and licensed company ensuring compliance with all regulatory standards and legal requirements.",
    images: [iden8],
    icon: "🏛️",
    color: "from-red-500 to-rose-600",
    stats: { number: "100%", label: "Legal Compliance" }
  },
  {
    id: 6,
    title: "Eco-Friendly Solutions",
    subtitle: "Safe for Family & Environment",
    description: "CIB-approved chemicals and eco-friendly methods that prioritize safety for your family, pets, and the environment.",
    images: [new2],
    icon: "🌱",
    color: "from-green-500 to-emerald-600",
    stats: { number: "CIB", label: "Approved" }
  },
  {
    id: 7,
    title: "Pet-Friendly Service",
    subtitle: "Safe for Your Furry Friends",
    description: "Specialized pet-safe treatments that protect your beloved animals while effectively eliminating pests from your home.",
    images: [iden10],
    icon: "🐕",
    color: "from-pink-500 to-rose-600",
    stats: { number: "100%", label: "Pet Safe" }
  },
  {
    id: 8,
    title: "Affordable Quality",
    subtitle: "Premium Service, Fair Pricing",
    description: "Transparent, competitive pricing that delivers exceptional value without compromising on service quality or effectiveness.",
    images: [iden11],
    icon: "💰",
    color: "from-cyan-500 to-blue-600",
    stats: { number: "Best", label: "Value" }
  },
  {
    id: 9,
    title: "Hassle-Free Service",
    subtitle: "Integrated Pest Management",
    description: "Comprehensive solutions with easy booking, flexible scheduling, and clear communication for complete peace of mind.",
    images: [new3],
    icon: "✨",
    color: "from-indigo-500 to-purple-600",
    stats: { number: "IPM", label: "System" }
  },
  {
    id: 10,
    title: "Warranty & Follow-up",
    subtitle: "Guaranteed Results",
    description: "Tailored treatments with warranties and follow-up services ensuring long-term success and customer satisfaction.",
    images: [iden13, iden14],
    icon: "🛡️",
    color: "from-slate-500 to-gray-600",
    stats: { number: "100%", label: "Guaranteed" }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.2, rotate: 10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      id="why-choose-us"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)`
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
               radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`,
              `radial-gradient(circle at 60% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
               radial-gradient(circle at 30% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
               radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20 py-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          style={{ y, opacity }}
        >
          <motion.div
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/10 mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-300 font-semibold text-sm tracking-wider">
              🏆 TRUSTED BY THOUSANDS
            </span>
          </motion.div>
          
          <motion.h2
            className="text-5xl lg:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="text-white">Identity Pest Control?</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Experience the difference with Kerala's most trusted pest control service. 
            From eco-friendly solutions to 24/7 support, we deliver excellence in every treatment.
          </motion.p>
        </motion.div>

        {/* Masonry Grid Layout */}
        <motion.div
          className="columns-1 lg:columns-2 xl:columns-3 gap-8 space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              className={`break-inside-avoid relative group cursor-pointer ${
                index % 3 === 0 ? 'mb-12' : index % 3 === 1 ? 'mb-8' : 'mb-10'
              }`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              onClick={() => setActiveCard(activeCard === reason.id ? null : reason.id)}
              onHoverStart={() => setHoveredCard(reason.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Card Background with Gradient Border */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden">
                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{
                    background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)`,
                    backgroundSize: '200% 200%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Icon & Stats */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${reason.color} flex items-center justify-center text-2xl shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {reason.icon}
                  </motion.div>
                  
                  <motion.div
                    className="text-right"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className={`text-2xl font-bold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>
                      {reason.stats.number}
                    </div>
                    <div className="text-sm text-gray-400">{reason.stats.label}</div>
                  </motion.div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {reason.title}
                  </h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>
                    {reason.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {reason.description}
                </p>

                {/* Images */}
                <div className={`grid gap-3 ${
                  reason.images.length === 1 ? 'grid-cols-1' : 
                  reason.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2'
                }`}>
                  {reason.images.map((img, i) => (
                    <motion.div
                      key={i}
                      className="relative overflow-hidden rounded-xl aspect-video"
                      variants={imageVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={img}
                        alt={`${reason.title} ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-t ${reason.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Expand Indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.div
                    className="text-white text-sm"
                    animate={{ rotate: activeCard === reason.id ? 45 : 0 }}
                  >
                    +
                  </motion.div>
                </motion.div>

                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl bg-gradient-to-r ${reason.color}`}
                  style={{ zIndex: -1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-bold text-lg shadow-2xl cursor-pointer"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" 
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(59, 130, 246, 0.4)",
                "0 0 0 20px rgba(59, 130, 246, 0)",
                "0 0 0 0 rgba(59, 130, 246, 0.4)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="mr-2">🚀</span>
            Start Your Pest-Free Journey Today
            <span className="ml-2">→</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}