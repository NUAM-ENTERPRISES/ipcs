import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, Shield, CheckCircle, ArrowRight, Bug, Home, Factory } from "lucide-react";
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
import iden15 from "../assets/iden15.png";

// Service categories with descriptions
const services = [
  { 
    name: "General Pest Control", 
    icon: Bug, 
    color: "from-green-500 to-emerald-600",
    subcategories: ["Ants Control", "Cockroach Control"] 
  },
  { 
    name: "Crawling Pest Control", 
    icon: Shield, 
    color: "from-blue-500 to-cyan-600",
    subcategories: ["Millipedes & Centipedes", "Lizard Control", "Spider Control"] 
  },
  { 
    name: "Termite Control", 
    icon: Home, 
    color: "from-orange-500 to-red-600",
    subcategories: ["Wood Protection", "Foundation Treatment"] 
  },
  { 
    name: "Mosquitoes Control", 
    icon: Shield, 
    color: "from-purple-500 to-pink-600",
    subcategories: ["Indoor & Outdoor Treatment"] 
  },
  { 
    name: "Rodent Control", 
    icon: Factory, 
    color: "from-gray-600 to-slate-700",
    subcategories: ["Rats & Mice Control"] 
  },
  { 
    name: "Bed Bug Control", 
    icon: Home, 
    color: "from-red-500 to-rose-600",
    subcategories: ["Mattress Treatment", "Room Fumigation"] 
  },
  { 
    name: "Other Services", 
    icon: CheckCircle, 
    color: "from-indigo-500 to-purple-600",
    subcategories: ["Flies", "Snake Control", "Disinfection", "Fungus Control"] 
  },
];

// Image data with service mapping
const images = [
  { src: iden1, service: "General Pest Control", title: "Ants Control Treatment", description: "Complete ant colony elimination" },
  { src: iden2, service: "General Pest Control", title: "Cockroach Control", description: "Kitchen and bathroom treatment" },
  { src: iden3, service: "Crawling Pest Control", title: "Spider Web Removal", description: "Corner and ceiling cleaning" },
  { src: iden4, service: "Termite Control", title: "Wood Protection", description: "Furniture and structure treatment" },
  { src: iden5, service: "Mosquitoes Control", title: "Breeding Site Treatment", description: "Water source management" },
  { src: iden6, service: "Rodent Control", title: "Rats & Mice Control", description: "Entry point sealing" },
  { src: iden7, service: "Bed Bug Control", title: "Mattress Treatment", description: "Deep cleaning and fumigation" },
  { src: iden8, service: "Other Services", title: "Disinfection Service", description: "Complete sanitization" },
  { src: new2, service: "Crawling Pest Control", title: "Millipedes Control", description: "Garden and basement treatment" },
  { src: iden10, service: "Termite Control", title: "Foundation Treatment", description: "Pre-construction protection" },
  { src: iden11, service: "Other Services", title: "Flies Control", description: "Restaurant and kitchen areas" },
  { src: new3, service: "Mosquitoes Control", title: "Outdoor Fogging", description: "Garden and yard treatment" },
  { src: iden13, service: "Other Services", title: "Snake Control", description: "Safe removal and relocation" },
  { src: iden14, service: "Bed Bug Control", title: "Room Fumigation", description: "Complete room treatment" },
  { src: iden15, service: "Other Services", title: "Fungus Control", description: "Wall and surface treatment" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50, 
    rotateX: -15 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const serviceVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function PestControlGallery() {
  const [selectedService, setSelectedService] = useState("All");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [viewMode, setViewMode] = useState("grid");

  const filteredImages = selectedService === "All" 
    ? images 
    : images.filter(img => img.service === selectedService);

  // Auto-advance images
  useEffect(() => {
    if (isAutoPlay && filteredImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, filteredImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleServiceChange = (serviceName) => {
    setSelectedService(serviceName);
    setCurrentImageIndex(0);
  };

  return (
    <section id="gallery" className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 py-16 lg:px-20 mt-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Our Pest Control Work Gallery 🏡
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A glimpse of our safe, eco-friendly, and professional pest control treatments in action
          </motion.p>
        </motion.div>

        {/* Service Filter Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <motion.button
              key="All"
              onClick={() => handleServiceChange("All")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedService === "All"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/60 border border-slate-600/50"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye size={16} />
              All Services
            </motion.button>
            
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.button
                  key={service.name}
                  onClick={() => handleServiceChange(service.name)}
                  variants={serviceVariants}
                  className={`px-4 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedService === service.name
                      ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                      : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/60 border border-slate-600/50"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={16} />
                  {service.name}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Main Gallery Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Featured Image Carousel */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-slate-800/30 rounded-3xl overflow-hidden backdrop-blur-sm border border-slate-600/30 shadow-2xl">
              {/* Image Display */}
              <div className="relative h-[500px] overflow-hidden">
                <AnimatePresence mode="wait">
                  {filteredImages.length > 0 && (
                    <motion.img
                      key={currentImageIndex}
                      src={filteredImages[currentImageIndex]?.src}
                      alt={filteredImages[currentImageIndex]?.title}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1, rotateY: 15 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  )}
                </AnimatePresence>

                {/* Navigation Arrows */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <motion.button
                    onClick={prevImage}
                    className="ml-4 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <motion.button
                    onClick={nextImage}
                    className="mr-4 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                </div>

                {/* Auto-play Toggle */}
                <div className="absolute top-4 right-4">
                  <motion.button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-sm ${
                      isAutoPlay 
                        ? "bg-green-500/80 text-white" 
                        : "bg-red-500/80 text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isAutoPlay ? "Auto Play ON" : "Auto Play OFF"}
                  </motion.button>
                </div>
              </div>

              {/* Image Info */}
              {filteredImages.length > 0 && (
                <motion.div
                  className="p-6 bg-gradient-to-r from-slate-900/80 to-slate-800/80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {filteredImages[currentImageIndex]?.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {filteredImages[currentImageIndex]?.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {filteredImages[currentImageIndex]?.service}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {currentImageIndex + 1} of {filteredImages.length}
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Progress Indicators */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex justify-center space-x-2">
                  {filteredImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        currentImageIndex === index
                          ? "w-8 bg-white"
                          : "w-4 bg-white/40 hover:bg-white/60"
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Information Panel */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Selected Service Info */}
            <div className="bg-slate-800/30 rounded-3xl p-6 backdrop-blur-sm border border-slate-600/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedService === "All" ? "All Services" : selectedService}
              </h3>
              {selectedService !== "All" && (
                <div className="space-y-3">
                  {services.find(s => s.name === selectedService)?.subcategories.map((sub, index) => (
                    <motion.div
                      key={sub}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <CheckCircle size={16} className="text-green-400" />
                      {sub}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Image Grid Thumbnails */}
            <div className="bg-slate-800/30 rounded-3xl p-6 backdrop-blur-sm border border-slate-600/30">
              <h4 className="text-lg font-semibold text-white mb-4">Gallery Thumbnails</h4>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-3 gap-3"
              >
                {filteredImages.slice(0, 9).map((image, index) => (
                  <motion.button
                    key={index}
                    variants={cardVariants}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      currentImageIndex === index
                        ? "border-blue-400 shadow-lg shadow-blue-400/25"
                        : "border-slate-600/50 hover:border-slate-400/50"
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    {currentImageIndex === index && (
                      <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                        <Eye size={20} className="text-white" />
                      </div>
                    )}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 text-center"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-bold text-white mb-2">
                Need Our Services?
              </h4>
              <p className="text-blue-100 mb-4">
                Get a free inspection and quote today
              </p>
              <motion.button
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Free Inspection
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}