import React, { useState } from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
// Import your images
import Abouts from "../assets/Abouts.png";
import About1 from "../assets/About1.png";
import iden6 from "../assets/iden6.png";
import About3 from "../assets/About3.png";
import Homes from "../assets/Homes.jpeg";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.1 
    },
  },
};

const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const cardHover = {
  scale: 1.05,
  y: -10,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
  transition: { duration: 0.3 }
};

const tabAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const tabContent = {
    mission: {
      title: "Our Mission",
      content: "Our mission is to provide safe, effective, and reliable pest management solutions while prioritizing customer satisfaction.",
      icon: "🎯"
    },
    vision: {
      title: "Our Vision", 
      content: "Our vision is to deliver eco-friendly and safe pest control solutions that protect the environment.",
      icon: "👁️"
    },
    values: {
      title: "Our Values",
      content: "Safety and Health: Ensuring the safety of technicians, customers, and employees is a top priority. We use eco-friendly methods to minimize risks. Customer Satisfaction: We prioritize excellent service and building strong client relationships. Innovation and Expertise: We stay updated with the latest pest control methods and technologies. Ethics: We build trust through honesty, transparency, and ethical behavior. Prevention: We educate customers on preventative measures to keep pests away. Teamwork: Collaboration among employees ensures comprehensive and efficient service.",
      icon: "💎"
    }
  };

  const stats = [
    { number: "10+", label: "Years Experience" },
    // { number: "5+", label: "Expert Technicians" },
    { number: "ISO", label: "Certified" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section
      id="about"
      className="relative w-full py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-5 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-5 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-l from-pink-200/30 to-yellow-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16 mt-15"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-medium rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          >
            About Identity Pest Control
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Protecting Your Space,
            <br />
            <span className="text-pink-500">Preserving Nature</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Established in 2025, we are Kerala's premier eco-friendly pest control service with over 10 years of industry expertise.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-white/20"
              variants={slideInFromLeft}
              whileHover={cardHover}
            >
              <motion.div
                className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <p className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Company Description Card */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20"
              whileHover={cardHover}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">🏢</span>
                Who We Are
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Identity Pest Control Services (IPCS) is one of the best Residential & Commercial Pest Control Companies in Kerala, established in 2025 by a professional team with over 10 years of experience in the pest control industry. We are certified to ISO 9001:2015 and ISO 14001:2015, demonstrating our commitment to quality, customer satisfaction, and environmental management. Our trained and experienced staff and technicians can easily identify pest origins and eliminate pests from premises. IPCS is a government-approved and licensed company, using only Central Insecticides Board (CIB)-approved chemicals. We prioritize eco-friendly, innovative, and cost-effective quality services for our customers.
              </p>
            </motion.div>

            {/* Interactive Tabs */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20">
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
                {Object.keys(tabContent).map((tab) => (
                  <motion.button
                    key={tab}
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base transition-all ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTab(tab)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tabContent[tab].icon} {tabContent[tab].title}
                  </motion.button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                variants={tabAnimation}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6"
              >
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                  <span className="mr-2 text-xl sm:text-2xl">{tabContent[activeTab].icon}</span>
                  {tabContent[activeTab].title}
                </h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  {tabContent[activeTab].content}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Visual Section */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Hero Image */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-300"></div>
              <img
                src={Homes}
                alt="Identity Pest Control Services office"
                className="relative w-full rounded-xl sm:rounded-2xl shadow-2xl object-cover h-48 sm:h-64 lg:h-80 border-2 sm:border-4 border-white"
                loading="lazy"
              />
              <motion.div
                className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-2xl px-3 sm:px-4 py-1 sm:py-2 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-xs sm:text-sm font-bold text-blue-600">EST. 2025</span>
              </motion.div>
            </motion.div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {[
                { src: Abouts, alt: "Professional team", label: "Expert Team" },
                { src: About1, alt: "Certified service", label: "ISO Certified" },
                { src: iden6, alt: "Advanced equipment", label: "Modern Tech" },
                { src: About3, alt: "Eco-friendly methods", label: "Eco-Friendly" }
              ].map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  variants={slideInFromRight}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: index % 2 === 0 ? 2 : -2,
                    zIndex: 10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg sm:rounded-2xl shadow-lg border-2 border-white"
                    loading="lazy"
                  />
                  <motion.div
                    className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileInView={{ y: 0 }}
                  >
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">{image.label}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Certification Badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {['ISO 9001:2015', 'ISO 14001:2015', 'CIB Approved'].map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ✓ {cert}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Call-to-Action */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link to="/contact">
  <motion.button
    className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-2xl hover:shadow-3xl transform transition-all duration-300"
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.95 }}
  >
    Get Free Consultation Today
  </motion.button>
</Link>
        </motion.div>
      </div>
    </section>
  );
}