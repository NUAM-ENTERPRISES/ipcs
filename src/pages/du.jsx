import { motion, useReducedMotion } from "framer-motion";
import {React,useState,useEffect} from "react"
import { CheckCircle2,CheckCircle,ClipboardList, Search, ShieldCheck  } from "lucide-react";
import Home from "../assets/Home.png";
import About from "../assets/About.png";
import About1 from "../assets/About1.png";
import About2 from "../assets/About2.png";
import About3 from "../assets/About3.png";
import iden from "../assets/iden.png";
import iden1 from "../assets/iden1.png";
import iden2 from "../assets/iden2.png";
import iden3 from "../assets/iden3.png";
import iden4 from "../assets/iden4.png";
import iden5 from "../assets/iden5.png";
import iden6 from "../assets/iden6.png";
import iden7 from "../assets/iden7.png";
import iden8 from "../assets/iden8.png";
import iden9 from "../assets/iden9.png";
import iden10 from "../assets/iden10.png";
import iden11 from "../assets/iden11.png";
import iden12 from "../assets/iden12.png";
import iden13 from "../assets/iden13.png";
import iden14 from "../assets/iden14.png";
import iden15 from "../assets/iden15.png";
import Logo from "../assets/Logo.png"; 
import Sticky from "../pages/Sticky"
export default function HeroSection() {
  // Check for reduced motion preference
  const shouldReduceMotion = useReducedMotion();

  // Staggered animation for image grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  // Up-down animation for square image
  const squareImageVariants = {
    visible: {
      y: shouldReduceMotion ? 0 : [0, 10, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
  };
  const points = [
    {
    heading: "Free Pest Control Inspection for Your Home or Business",
    description:
      "Schedule a free inspection today and take the first step towards a pest-free environment.",
    images: [iden],
  },
  {
    heading: "24/7 Hours Customer Support",
    description:
      "We provide emergency pest control services to help you address urgent situations quickly and effectively. When you require a service, you can turn to our team at anytime.",
    images: [iden1,iden2],
  },
  {
    heading: "Professional Pest Control : ",
    description:
      "We are a professional team with more than 10 years Experience in the Pest Control industry which is well-versed with the proper usage of pesticides and chemicals.",
    images: [iden3,iden4,iden5]
  },
  {
    heading: "ISO certified Company ",
    description:
      "We are a company certified to ISO 9001:2015 and ISO 14001:2015, demonstrating our commitment to quality, customer satisfaction, and environmental management. Our focus is on helping organizations minimize their environmental impact and promote sustainability",
    images: [iden6,iden7],
  },
  {
    heading: "Government approved and licensed Company ",
    description:
      "The Identity Pest Control Services is a Government approved & licensed Company.",
    images: [iden8],
  },
   {
    heading: "Eco-Friendly Solutions",
    description:
      "We use eco-friendly and safe pest control solutions that are safe for your family, pets, and the environment. We prioritize using non-toxic or low-toxicity products wherever possible and provide detailed safety instructions for each treatment. IPCS uses only Central Insecticides Board (CIB approved) Chemicals in Customer Premise.",
    images: [iden9],
  },
   {
    heading: "Pet Friendly Pest Control",
    description:
      "We understand that pets are part of the family. That's why we offer pet-friendly pest control solutions that ensure the safety of your furry friends while effectively eliminating pests.",
    images: [iden10],
  },
  {
    heading: "Quality Service on affordable Pricing",
    description:
      "We believe in providing top-notch pest control services without breaking the bank. Our pricing is transparent and competitive, ensuring you receive the best value for your investment.",
    images: [iden11],
  },
  {
    heading: "Hassle Free Pest Control Service and Integrated Pest Management (IPM): ",
    description:
      "We are focus to provide easy and convenient comprehensive solutions , easy booking, ,flexible scheduling and clear communications to the customers We deliver effective, lasting pest control solutions that eliminate current infestations , prevent recurrence, and ensure long-term peace of mind guidance to the customers on how to prevent future pest problems, as well as ongoing monitoring and support. ",
    images: [iden12],
  },
  {
    heading: "Warranty and follow - up and Tailored Pest Treatments",
    description:
      "We offer warranties or follow-up treatments to ensure the long-term success for some of the services.The Services are customized to target specific pests and their behaviors, ensuring effective results",
    images: [iden13,iden14],
  },
];
const steps = [
    {
      icon: <ClipboardList className="w-12 h-12 text-white" />,
      title: "Book Free Inspection",
      desc: "Schedule your free inspection in just a few clicks. Our team will respond quickly to arrange a visit.",
    },
    {
      icon: <Search className="w-12 h-12 text-white" />,
      title: "Technician Visits & Analyzes",
      desc: "Our expert technician inspects your property thoroughly and identifies the pest issues with precision.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-white" />,
      title: "Safe & Effective Treatment",
      desc: "We provide eco-friendly and CIB approved pest control solutions that ensure long-lasting protection.",
    },
  ];
  const images = [
    iden1,
    iden2,
    iden3,
    iden4,
    iden5,
    iden6,
    iden7,
    iden8,
    iden9,
    iden10,
    iden11,
    iden12,
    iden13,
    iden14,
    iden15,
  ];
   const [current, setCurrent] = useState(0);

  // Auto-slide every 4s for smoother pacing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Animation variants for images
  const imageVariantss = {
    hidden: { opacity: 0, scale: 1.1, x: 50 },
    visible: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 1.1, x: -50 },
  };

  // Animation variants for dots
  const dotVariants = {
    active: { scale: 1.5, backgroundColor: "#ffffff" },
    inactive: { scale: 1, backgroundColor: "#9CA3AF" },
  };
  return (
    <>
      <section id="home"
        className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${Home})` }}
      >
        {/* Gradient Overlay with Animation */}
        <div className="absolute inset-0 animate-gradient"></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Say Goodbye to Pests, <br /> Hello to Peace of Mind 🛡️
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Safe, Effective & Eco-Friendly Pest Control Solutions <br /> for Homes & Businesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <a
              href="#booking"
              aria-label="Book a free pest control inspection"
              className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl shadow-lg hover:bg-pink-700 transition"
            >
              Book a Free Inspection
            </a>
            <a
              href="tel:+919876543210"
              aria-label="Call for pest control services"
              className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition"
            >
              Call Now: +91 98765 43210
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={20} />
              <span>Government Approved Chemicals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={20} />
              <span>100% Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={20} />
              <span>Expert Technicians</span>
            </div>
          </motion.div>
        </div>

        {/* Gradient Animation CSS */}
        <style jsx>{`
          .animate-gradient {
            background: linear-gradient(270deg, #1b51a1, #575757, #1b51a1);
            background-size: 400% 400%;
            opacity: 0.6;
            will-change: background-position;
            animation: gradientShift 12s ease infinite;
          }
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </section>
 
      <section id="about" className="relative w-full py-20 px-6 md:px-16 bg-gradient-to-r from-[#1b51a1] to-[#575757] overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto">
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About <span className="text-pink-400">Us</span>
          </motion.h2>

          {/* Content & Image Layout */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                The Identity Pest Control Services company (IPCS) is one of the best Residential & Commercial Pest Control Companies in Kerala, established in 2025 by a professional team with over 10 years of experience in the pest control industry. We are certified to ISO 9001:2015 and ISO 14001:2015, demonstrating our commitment to quality, customer satisfaction, and environmental management. Our focus is on helping organizations minimize their environmental impact and promote sustainability. Our trained and experienced staff and technicians can easily identify pest origins and eliminate pests from premises. IPCS is a government-approved and licensed company, using only Central Insecticides Board (CIB)-approved chemicals. We prioritize eco-friendly, innovative, and cost-effective quality services for our customers.
              </p>

              {/* Mission, Vision & Values */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Our Mission</h3>
                  <p className="text-gray-300">
                    Our mission is to provide safe, effective, and reliable pest management solutions while prioritizing customer satisfaction.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Our Vision</h3>
                  <p className="text-gray-300">
                    Our vision is to deliver eco-friendly and safe pest control solutions that protect the environment.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Our Values</h3>
                  <ul className="text-gray-300 list-disc pl-5">
                    <li><strong>Safety and Health:</strong> Ensuring the safety of technicians, customers, and employees is a top priority. We use eco-friendly methods to minimize risks.</li>
                    <li><strong>Customer Satisfaction:</strong> We prioritize excellent service and building strong client relationships.</li>
                    <li><strong>Innovation and Expertise:</strong> We stay updated with the latest pest control methods and technologies.</li>
                    <li><strong>Ethics:</strong> We build trust through honesty, transparency, and ethical behavior.</li>
                    <li><strong>Prevention:</strong> We educate customers on preventative measures to keep pests away.</li>
                    <li><strong>Teamwork:</strong> Collaboration among employees ensures comprehensive and efficient service.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Image Layout: 4 Circular + 1 Square */}
            <motion.div
              className="relative flex flex-col items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* 2x2 Grid of Circular Images */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.img
                  src={About}
                  alt="Team at work"
                  className="rounded-full shadow-xl w-32 h-32 sm:w-40 sm:h-40 object-cover"
                  variants={imageVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  loading="lazy"
                />
                <motion.img
                  src={About1}
                  alt="Certified technician"
                  className="rounded-full shadow-xl w-32 h-32 sm:w-40 sm:h-40 object-cover"
                  variants={imageVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  loading="lazy"
                />
                <motion.img
                  src={About2}
                  alt="Pest control process"
                  className="rounded-full shadow-xl w-32 h-32 sm:w-40 sm:h-40 object-cover"
                  variants={imageVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  loading="lazy"
                />
                <motion.img
                  src={About3}
                  alt="Eco-friendly service"
                  className="rounded-full shadow-xl w-32 h-32 sm:w-40 sm:h-40 object-cover"
                  variants={imageVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  loading="lazy"
                />
              </div>

              {/* Square Image with Up-Down Animation */}
              <motion.img
                src={Home}
                alt="Identity оформление Pest Control Services office"
                className="rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md object-cover"
                variants={squareImageVariants}
                animate="visible"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section> 

      <section id="why" className="bg-gradient-to-b from-[#1b51a1] to-[#575757] py-16 px-6 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Why Families & Businesses Choose Identity Pest Control
        </h2>
        <p className="text-lg opacity-90">
          Trusted by thousands of homes & businesses for safe, eco-friendly, and
          long-lasting pest control solutions.
        </p>
      </div>

      <div className="space-y-20">
        {points.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Text Content */}
            <div className={`text-left ${index % 2 === 1 ? "md:order-2" : ""}`}>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                {item.heading}
              </h3>
              <p className="text-base leading-relaxed">{item.description}</p>
            </div>

            {/* Dynamic Images */}
            <div
              className={`grid gap-4 ${
                item.images.length === 1
                  ? "grid-cols-1"
                  : item.images.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-2 md:grid-cols-3"
              }`}
            >
              {item.images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={item.heading}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <section className="relative py-20 bg-gradient-to-r from-[#1b51a1] to-[#575757] text-white overflow-hidden">
      {/* Background Overlay Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Simple <span className="text-yellow-300">3-Step Process</span>
        </motion.h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-400 p-4 rounded-full shadow-md">
                  {step.icon}
                </div>
              </div>
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              {/* Description */}
              <p className="text-gray-200">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  <section
  id="cta2"
  className="relative w-full min-h-[70vh] flex items-center justify-center bg-fixed bg-center bg-cover px-4 md:px-8"
  style={{ backgroundImage: `url(${Logo})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative z-10 text-center text-white max-w-3xl w-full"
  >
    <motion.h2
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug"
    >
      Don’t Let Pests Take Over —<br /> Call Us Today!
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4 justify-center mb-6 flex-wrap"
    >
      {/* Book Now Button */}
      <motion.a
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px rgba(255, 221, 0, 0.9)",
        }}
        whileTap={{ scale: 0.95 }}
        href="#contact"
        className="bg-yellow-400 text-[#1b51a1] px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 relative overflow-hidden flex-1 min-w-[150px] text-center"
      >
        <span className="relative z-10">Book Now</span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px rgba(255, 221, 0, 0.9)",
        }}
        whileTap={{ scale: 0.95 }}
        href="tel:+919876543210"
        className="border-2 border-yellow-400 px-6 py-3 rounded-full font-semibold text-yellow-400 transition duration-300 flex-1 min-w-[150px] text-center"
      >
        <span className="relative z-10">Call +91-9876543210</span>
      </motion.a>
    </motion.div>

    {/* Small Contact Form */}
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="bg-white/20 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 max-w-md mx-auto w-full"
    >
      <input
        type="text"
        placeholder="Your Name"
        className="px-4 py-2 rounded-lg border border-white/40 bg-white/30 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition w-full"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="px-4 py-2 rounded-lg border border-white/40 bg-white/30 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition w-full"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="px-4 py-2 rounded-lg border border-white/40 bg-white/30 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition w-full"
      />
      <button
        type="submit"
        className="bg-yellow-400 text-[#1b51a1] font-semibold py-2 rounded-full shadow-lg hover:bg-yellow-300 transition w-full"
      >
        Submit
      </button>
    </motion.form>
  </motion.div>
</section>

      <section id="gallery"className="relative py-16 px-6 lg:px-20 bg-gradient-to-br from-[#1b51a1] via-[#575757] to-[#1b51a1] overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Our Pest Control Work Gallery 🏡
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto"
        >
          A glimpse of our safe, eco-friendly, and professional pest control
          treatments in action.
        </motion.p>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-md mx-auto h-[600px] overflow-hidden rounded-2xl shadow-2xl">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`gallery-${index}`}
            className="absolute w-full h-full object-cover rounded-2xl"
            variants={imageVariantss}
            initial="hidden"
            animate={current === index ? "visible" : "hidden"}
            exit="exit"
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}
        {/* Overlay for subtle depth */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none rounded-2xl" />
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrent(index)}
            className="w-3 h-3 rounded-full transition"
            variants={dotVariants}
            animate={current === index ? "active" : "inactive"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* CTA Below Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="text-center mt-12"
      >
        <motion.button
          className="bg-white text-[#1b51a1] font-semibold px-8 py-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Book Your Free Inspection
        </motion.button>
      </motion.div>
    </section>
      <section id="contact" className="relative w-full py-16 bg-[#575757]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 bg-[#1b51a1] shadow-xl rounded-2xl p-8 md:p-12 text-white"
        >
          <h2 className="text-3xl font-bold text-[#facc15] mb-6">Contact Us</h2>
          <p className="text-white/80 mb-8">
            Have questions or need a free inspection? Fill out the form below and our expert team will get back to you promptly.
          </p>

          <form className="flex flex-col gap-4">
            <motion.input
              type="text"
              placeholder="Your Name"
              whileFocus={{ scale: 1.02, borderColor: "#facc15" }}
              className="px-4 py-3 rounded-lg border border-white/40 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition w-full"
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              whileFocus={{ scale: 1.02, borderColor: "#facc15" }}
              className="px-4 py-3 rounded-lg border border-white/40 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition w-full"
            />
            <motion.input
              type="tel"
              placeholder="Phone Number"
              whileFocus={{ scale: 1.02, borderColor: "#facc15" }}
              className="px-4 py-3 rounded-lg border border-white/40 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition w-full"
            />
            <motion.textarea
              placeholder="Your Message"
              rows={4}
              whileFocus={{ scale: 1.02, borderColor: "#facc15" }}
              className="px-4 py-3 rounded-lg border border-white/40 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition w-full"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(250,204,21,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#facc15] text-[#1b51a1] py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition w-full"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 h-[400px] rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086867121893!2d144.95592731531565!3d-37.81720977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43b3c3c15f%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1629999999999!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
    </>
  );
}