import React, { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  User, 
  MessageSquare,
  Star,
  Zap,
  Shield,
  Award,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    href: "https://wa.me/+918848839295",
    info: "+91 8848839295  9745280649",
    subtitle: "24/7 Emergency Service",
    color: "from-green-500 to-emerald-600",
    delay: 0.1
  },
  {
    icon: Mail,
    title: "Email Us",
    href: "mailto:identitypestcontrolservices@gmail.com",
    info: "identitypestcontrolservices@gmail.com",
    subtitle: "Quick Response Guaranteed",
    color: "from-blue-500 to-cyan-600",
    delay: 0.2
  },
  {
    icon: MapPin,
    title: "Visit Us",
    info: "Thrikkakara P.O, Near Edappally, Pin: 682021, Ernakulam, Kerala",
    subtitle: "Service Area Coverage",
    color: "from-purple-500 to-pink-600",
    delay: 0.3
  },
  {
    icon: Clock,
    title: "Working Hours",
    info: "Mon - Sun: 6 AM - 10 PM",
    subtitle: "Always Available",
    color: "from-orange-500 to-red-600",
    delay: 0.4
  },
//   {
//     icon: Instagram,
//     title: "Follow Us",
//     info: "@identitypestcontrol",
//     subtitle: "Instagram Updates",
//     color: "from-pink-500 to-purple-600",
//     delay: 0.5
//   },
//   {
//     icon: Facebook,
//     title: "Like Us",
//     info: "facebook.com/identitypestcontrol",
//     subtitle: "Facebook Community",
//     color: "from-blue-600 to-indigo-600",
//     delay: 0.6
//   },
//   {
//     icon: Whatsapp,
//     title: "Message Us",
//     info: "+91 8848839295",
//     subtitle: "Instant WhatsApp Support",
//     color: "from-green-600 to-teal-600",
//     delay: 0.7
//   }
];

const features = [
  { icon: Zap, text: "Fast Response", color: "text-yellow-400" },
  { icon: Shield, text: "Licensed & Insured", color: "text-green-400" },
  { icon: Award, text: "10+ Years Experience", color: "text-blue-400" },
  { icon: Star, text: "100% Satisfaction", color: "text-purple-400" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    rotateX: -10 
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotateY: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const formVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

export default function ModernContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            animate={{
              x: [0, 80, -40, 0],
              y: [0, -80, 60, 0],
              scale: [1, 1.1, 0.9, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${5 + i * 12}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-16 lg:py-20 max-w-7xl mt-5 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 mt-12"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to eliminate pests from your property? Contact our expert team for a free consultation and customized solution.
          </motion.p>

          {/* Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-10"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.text}
                  variants={itemVariants}
                  className="flex items-center gap-2 sm:gap-3 bg-white/5 px-3 py-2 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <IconComponent size={16} className={feature.color} />
                  <span className="text-gray-300 font-medium text-sm sm:text-base">{feature.text}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20"
        >
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group relative w-full"
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent size={20} className="text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 font-semibold mb-2 text-sm sm:text-base break-words">{item.info}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.subtitle}</p>
                  </div>

                  {/* Hover Effect Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color} w-0 group-hover:w-full transition-all duration-500`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Send Us a Message
              </motion.h2>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name Field */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative">
                        <User 
                          size={16} 
                          className={`absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                            focusedField === 'name' ? 'text-blue-400' : 'text-gray-400'
                          }`} 
                        />
                        <motion.input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField('')}
                          className="w-full pl-10 pr-3 py-3 sm:pl-12 sm:pr-4 sm:py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 text-sm sm:text-base"
                          whileFocus={{ scale: 1.02, borderColor: "#60a5fa" }}
                        />
                      </div>
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative">
                        <Mail 
                          size={16} 
                          className={`absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                            focusedField === 'email' ? 'text-blue-400' : 'text-gray-400'
                          }`} 
                        />
                        <motion.input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          className="w-full pl-10 pr-3 py-3 sm:pl-12 sm:pr-4 sm:py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 text-sm sm:text-base"
                          whileFocus={{ scale: 1.02, borderColor: "#60a5fa" }}
                        />
                      </div>
                    </motion.div>

                    {/* Phone Field */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative">
                        <Phone 
                          size={16} 
                          className={`absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                            focusedField === 'phone' ? 'text-blue-400' : 'text-gray-400'
                          }`} 
                        />
                        <motion.input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField('')}
                          className="w-full pl-10 pr-3 py-3 sm:pl-12 sm:pr-4 sm:py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 text-sm sm:text-base"
                          whileFocus={{ scale: 1.02, borderColor: "#60a5fa" }}
                        />
                      </div>
                    </motion.div>

                    {/* Service Selection */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('service')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-3 py-3 sm:px-4 sm:py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 text-sm sm:text-base"
                        whileFocus={{ scale: 1.02, borderColor: "#60a5fa" }}
                      >
                        <option value="" className="bg-gray-800">Select Service</option>
                        <option value="general" className="bg-gray-800">General Pest Control</option>
                        <option value="termite" className="bg-gray-800">Termite Control</option>
                        <option value="rodent" className="bg-gray-800">Rodent Control</option>
                        <option value="bedbug" className="bg-gray-800">Bed Bug Control</option>
                        <option value="mosquito" className="bg-gray-800">Mosquito Control</option>
                      </motion.select>
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative">
                        <MessageSquare 
                          size={16} 
                          className={`absolute left-3 sm:left-4 top-4 transition-colors duration-300 ${
                            focusedField === 'message' ? 'text-blue-400' : 'text-gray-400'
                          }`} 
                        />
                        <motion.textarea
                          name="message"
                          placeholder="Describe your pest problem..."
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField('')}
                          className="w-full pl-10 pr-3 py-3 sm:pl-12 sm:pr-4 sm:py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 resize-none text-sm sm:text-base"
                          whileFocus={{ scale: 1.02, borderColor: "#60a5fa" }}
                        />
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      className="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 sm:py-4 rounded-2xl overflow-hidden shadow-2xl"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                        <Send size={16} />
                        Send Message
                      </span>
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                    >
                      <CheckCircle size={32} className="text-white" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Map & Additional Info */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Map */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <motion.div
                className="h-64 sm:h-80 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15711.126953125!2d76.3422851!3d9.9711989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d27b97b91f3%3A0x4b6b8c1f8b1b8b1b!2sKanayannur%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </motion.div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Why Choose Us?</h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Licensed & certified professionals",
                  "Eco-friendly treatment methods",
                  "24/7 emergency pest control",
                  "100% satisfaction guarantee",
                  "Free inspection & consultation"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base"
                  >
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <motion.div
              className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-6 sm:p-8 text-center text-white shadow-2xl"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-lg sm:text-xl font-bold mb-2">Emergency Service?</h4>
              <p className="mb-3 sm:mb-4 text-red-100 text-sm sm:text-base">
                Urgent pest problem? Call us now!
              </p>
              <motion.a
                href="tel:+918848839295"
                className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={16} />
                Call Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}