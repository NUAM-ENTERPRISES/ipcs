import { motion, useReducedMotion } from "framer-motion";
import {React,useState,useEffect,useRef} from "react"
import {Link} from "react-router-dom"
import products from "../data/product"
import { CheckCircle2,CheckCircle,ClipboardList, Search, ShieldCheck, ChevronLeft, ChevronRight, Play, Star, ArrowUpRight, Sparkles  } from "lucide-react";
import Homes from "../assets/Homes.jpeg";

import Abouts from "../assets/Abouts.png";
import About1 from "../assets/About1.png";
import About2 from "../assets/About2.png";
import About3 from "../assets/About3.png";
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
import Logo from "../assets/Logo.png"; 
import side from "../assets/side.png";
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
    images: [new1],
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
    images: [new2],
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
      "We are focus to provide easy and convenient comprehensive solutions , easy booking, ,flexible scheduling and clear communications to the customers. We deliver effective, lasting pest control solutions that eliminate current infestations , prevent recurrence, and ensure long-term peace of mind guidance to the customers on how to prevent future pest problems, as well as ongoing monitoring and support. ",
    images: [new3],
  },
  {
    heading: "Warranty and follow - up and Tailored Pest Treatments",
    description:
      "We offer warranties or follow-up treatments to ensure the long-term success for some of the services. The Services are customized to target specific pests and their behaviors, ensuring effective results",
    images: [iden13,iden14],
  },
];
const steps = [
    {
      icon: <ClipboardList className="w-12 h-12 text-white" />,
      title: "Professional Team Assessment – Book Your Free Inspection",
      desc: "Easily schedule a complimentary inspection online and offline, and our experts will promptly coordinate a convenient visit.",
    },
    {
      icon: <Search className="w-12 h-12 text-white" />,
      title: "Expert Inspection & Safe Treatment",
      desc: "Our skilled technicians thoroughly inspect your property to identify pest issues with precision, then provide eco-friendly, CIB-approved solutions for safe and long-lasting protection.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-white" />,
      title: "Reliable After-Care & Support",
      desc: "We ensure ongoing protection with follow-up visits and expert guidance, keeping your home pest-free long after treatment.",
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
    new2,
    iden10,
    iden11,
    new3,
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
  const dotVariants = {
    active: { scale: 1.5, backgroundColor: "#ffffff" },
    inactive: { scale: 1, backgroundColor: "#9CA3AF" },
  };

  const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.5 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "General Pest Control Service",
      subtitle: " Home Protection",
      description: " Comprehensive pest elimination for homes with family-safe, eco-friendly treatments that protect your loved ones.",
      features: ["Safe for Kids & Pets", "Eco-Friendly Products", "One-Time & Recurring/Annually Contract", "Satisfaction Guaranteed"],
      color: "from-emerald-400 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      darkBg: "from-emerald-900 to-teal-900",
      icon: "🏠",
      // price: "Starting ₹999"
    },
    {
      id: 2,
      title: "Crawling Pest Control Service",
      subtitle: "Commercial Protection",
      description: "Comprehensive pest management solutions for commercial spaces, ensuring a pest-free environment for your business.",
      features: ["Custom Plans", "Discreet Service", "Licensed Technicians", "Eco-Friendly Options"],
      color: "from-blue-400 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      darkBg: "from-blue-900 to-indigo-900",
      icon: "🏢",
      // price: "Custom Quote"
    },
    {
      id: 3,
      title: "Termite Control Service",
      subtitle: "Structure Protection",
      description: "Advanced termite detection and elimination to protect your property's structural integrity.",
      features: ["Pre & Post Construction", "Upto 10-Year Warranty", "Advanced Detection", "Preventive Barriers"],
      color: "from-amber-400 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
      darkBg: "from-amber-900 to-orange-900",
      icon: "🛡️",
      // price: "Starting ₹2499"
    },
    {
      id: 4,
      title: "Rodent Control Service",
      subtitle: "Complete Elimination",
      description: "Effective rodent removal and prevention strategies to keep your space clean and hygienic.",
      features: ["Humane Methods", "Ongoing Monitoring", "Sanitation Advice"],
      color: "from-purple-400 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      darkBg: "from-purple-900 to-pink-900",
      icon: "🐭",
      // price: "Starting ₹1499"
    },
    {
      id: 5,
      title: "Mosquito Control Service",
      subtitle: "Disease Prevention",
      description: "Targeted mosquito control to reduce disease risks and create comfortable outdoor spaces.",
      features: ["Breeding Site Treatment", "Larvicide Application", "Natural Repellents", "Seasonal Programs"],
      color: "from-cyan-400 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50",
      darkBg: "from-cyan-900 to-blue-900",
      icon: "🦟",
      // price: "Starting ₹799"
    },
    {
      id: 6,
      title: "Bed Bug Control Service",
      subtitle: " Sleep Tight",
      description: "Comprehensive bed bug control solutions for a peaceful night's sleep.",
      features: ["Thorough Inspection", "Chemical Solutions", "Preventive Measures"],
      color: "from-rose-400 to-red-600",
      bgColor: "from-rose-50 to-red-50",
      darkBg: "from-rose-900 to-red-900",
      icon: "🛏️",
      // price: "Starting ₹799"
    },
     {
      id: 7,
      title: "Other Services",
      subtitle: " Featured Services",
      description: "Comprehensive pest control solutions for specialized needs and situations.",
      features: ["Flies Control Service", "Snake Control Service", "Disinfection Service", "Fungus Control Service"],
      color: "from-indigo-400 to-purple-600",
      bgColor: "from-indigo-50 to-purple-50",
      darkBg: "from-indigo-900 to-purple-900",
      icon: "⚡",
      // price: "Starting ₹799"
    }
  ];

  // Auto-play functionality - changed to 60 seconds (1 minute)
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 7000); // Changed from 4000 to 60000 (1 minute)
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, services.length]);

  // Mouse tracking for parallax effect
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height
      });
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };


    
  return (
    <>
      <section
  id="home"
  className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(${Homes})` }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 animate-gradient"></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
<div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-4xl mt-25">
  {/* Heading */}
  <motion.div
    className="text-center mb-6"
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
<span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent font-serif font-black italic">
  TRUSTED PROFESSIONAL{" "}
  <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent font-serif font-black italic">
    PEST CONTROL
  </span>
</span>
    <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent font-serif font-black italic mt-2">
      SAY GOODBYE TO   <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent font-serif font-black italic">
    PESTS
  </span>
    </span>
    <img
      src={side}
      alt="logo"
      className="mx-auto mt-2 w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
    />
  </motion.div>
    {/* Description */}
    <motion.p
      className="text-sm sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
    >
      Safe, Effective & Eco-Friendly Pest Control Solutions <br /> for Homes & Businesses.
    </motion.p>

    {/* CTA Buttons */}
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <a
        href="#booking"
        className="px-4 sm:px-6 py-2 sm:py-3 
             bg-gradient-to-r from-pink-500 to-yellow-400 
             font-semibold rounded-xl shadow-lg 
             hover:from-yellow-400 hover:to-pink-500
             text-white hover:text-black
             transition-all duration-500 ease-in-out
             w-full sm:w-auto text-center"
      >
        Book a Free Inspection
      </a>
     <a
  href="tel:+918848839295"
  className="flex justify-center items-center gap-2 
             px-4 sm:px-6 py-2 sm:py-2.5 
             bg-white text-pink-600 font-semibold 
             rounded-xl shadow-md transition-all duration-500 
             w-full sm:w-auto text-center hover:bg-purple-600 hover:text-white"
>
  Call Now: +91 8848839295
</a>

    </motion.div>

    {/* Trust Badges */}
    {/* Mobile Grid */}
    <motion.div
      className="sm:hidden grid grid-cols-2 gap-3 px-2 mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      {[
        "Government Approved Licensed Company",
        "CIB Certified",
        "100% Eco-Friendly Safe",
        "Expert Techs",
        "ISO Certified",
        "10+ Yrs Exp in Pest Control Industry",
        "24/7 Customer Support",
        "Quality Service on Affordable Pricing"
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center text-center p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:scale-105 transition"
        >
          <CheckCircle2 className="text-green-400 mb-1" size={20} />
          <span className="text-white text-sm font-medium leading-snug">{item}</span>
        </div>
      ))}
    </motion.div>

    {/* Desktop Row */}
    <motion.div
      className="hidden sm:flex flex-wrap justify-center gap-6 text-white/90 text-sm md:text-base mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <div className="flex items-center gap-2">
        <CheckCircle2 className="text-green-400" size={20} />
        <span>Government Approved Licenced PestControl Company</span>
      </div>
       <div className="flex items-center gap-2">
        <CheckCircle2 className="text-green-400" size={20} />
        <span>24/7 Hours Customer Support</span>
      </div>
       <div className="flex items-center gap-2">
        <CheckCircle2 className="text-green-400" size={20} />
        <span>Professional Pest Control</span>
      </div>
       <div className="flex items-center gap-2">
        <CheckCircle2 className="text-green-400" size={20} />
        <span>Quality Service Of Affordable Pricing</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="text-green-400" size={20} />
        <span>Central Insecticide Board Approved Chemicals</span>
      </div>
      {/* <div className="flex items-center gap-2">
        <CheckCircle2 className="text-green-400" size={20} />
        <span>100% Eco-Friendly Safe</span>
      </div> */}
      <div className="flex items-center gap-2">
        <CheckCircle2 className="text-green-400" size={20} />
        <span>Expert Technicians</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="text-green-400" size={20} />
        <span>ISO Certified Company</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="text-green-400" size={20} />
        <span>10+ Years Of Experience in Pest Control Industry</span>
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
                  src={Abouts}
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
                  src={iden6}
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
                src={Homes}
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

    <section
  id="why"
  className="bg-gradient-to-b from-[#1b51a1] to-[#575757] py-16 px-6 lg:px-20 text-white"
>
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
          className={`grid gap-4 justify-center ${
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
  className="w-55 h-62 sm:w-66 sm:h-75 object-cover rounded-xl shadow-lg mx-auto"
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 200 }}
/>


          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>


  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden relative">
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 animate-pulse"
            style={{
              background: `radial-gradient(circle, ${services[currentIndex]?.color?.split(' ')[1] || 'rgb(59, 130, 246)'}, transparent)`,
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
        
        {/* Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div 
        ref={containerRef}
        className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
        onMouseMove={handleMouseMove}
      >
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Header */}
          <div className="text-center mb-12 mt-20">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-white/80 text-sm">Our Premium Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Professional Pest Solutions
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive range of pest control services designed to protect your space
            </p>
          </div>

          {/* Main Carousel Container */}
          <div className="relative">
            
            {/* Cards Container */}
            <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center perspective-1000">
              {services.map((service, index) => {
                const isActive = index === currentIndex;
                const offset = index - currentIndex;
                const absOffset = Math.abs(offset);
                
                // Adjust translateX and scale for responsiveness
                const translateX = offset * (window.innerWidth < 640 ? 80 : 120);
                const translateZ = isActive ? 0 : -absOffset * (window.innerWidth < 640 ? 100 : 150);
                const rotateY = isActive ? 0 : offset * (window.innerWidth < 640 ? 15 : 25);
                const scale = isActive ? 1 : Math.max(0.7, 1 - absOffset * 0.15);
                const opacity = isActive ? 1 : Math.max(0.3, 1 - absOffset * 0.3);

                return (
                  <div
                    key={service.id}
                    className={`absolute w-[90vw] max-w-[20rem] sm:max-w-[22rem] md:max-w-[24rem] min-h-[24rem] sm:min-h-[28rem] md:min-h-[32rem] transition-all duration-700 ease-out cursor-pointer ${
                      !isActive ? 'hover:scale-105' : ''
                    }`}
                    style={{
                      transform: `
                        translateX(${translateX + mousePosition.x * (isActive ? 10 : 5)}px) 
                        translateY(${mousePosition.y * (isActive ? 10 : 5)}px)
                        translateZ(${translateZ}px) 
                        rotateY(${rotateY}deg) 
                        scale(${scale})
                      `,
                      opacity,
                      zIndex: isActive ? 10 : 10 - absOffset
                    }}
                    onClick={() => !isActive && goToSlide(index)}
                  >
                    
                    {/* Card */}
                    <div className={`
                      relative w-full h-full rounded-3xl overflow-hidden
                      bg-gradient-to-br ${service.darkBg} backdrop-blur-xl
                      border border-white/20 shadow-2xl
                      ${isActive ? 'shadow-3xl' : ''}
                    `}>
                      
                      {/* Glow effect for active card */}
                      {isActive && (
                        <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} opacity-20 blur-xl rounded-3xl`} />
                      )}
                      
                      {/* Card content */}
                      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                        
                        {/* Header */}
                        <div className="text-center mb-6">
                          <div className="text-3xl sm:text-4xl mb-3">{service.icon}</div>
                          <div className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${service.color} text-white mb-2`}>
                            {service.subtitle}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-white">{service.title}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-1 text-xs sm:text-sm text-gray-300">
                              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between gap-4">
                          <div className="min-w-0">
                            <div className="text-base sm:text-lg font-bold text-white truncate">{service.price}</div>
                            <div className="text-xs sm:text-sm text-gray-400">Best Value</div>
                          </div>
                          <button className={`
                            group px-3 sm:px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm
                            bg-gradient-to-r ${service.color} text-white
                            hover:scale-105 transition-all duration-300
                            flex items-center gap-1 shrink-0
                          `}>
                            Book Now
                            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300
                  ${index === currentIndex 
                    ? `bg-gradient-to-r ${services[currentIndex].color} scale-125` 
                    : 'bg-white/30 hover:bg-white/50'
                  }
                `}
              />
            ))}
          </div>

          {/* Auto-play control */}
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <Play className={`w-4 h-4 ${isAutoPlaying ? 'animate-pulse' : ''}`} />
              <span className="text-xs sm:text-sm">{isAutoPlaying ? 'Pause' : 'AutoPlay'}</span>
            </button>
            
            <a
              href="/services"
              className="px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              View All Services
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }

        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 640px) {
          .perspective-1000 {
            perspective: 800px;
          }
        }
      `}</style>
    </div>

         <section id="products" className="py-20 bg-gradient-to-r from-[#1b51a1] to-[#575757]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#ffffff] text-center mb-16">
          Our Premium Products
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-10 gap-6 shadow-lg"
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(27, 81, 161, 0.3)",
              }}
            >
              <div className="w-full md:w-1/2 h-60 md:h-72">
                 <img
    src={product.mainImage}
    alt={product.title}
    className="w-full h-full object-contain transition-transform duration-300"
  />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#1b51a1] mb-3">
                  {product.title}
                </h3>
                <p className="text-[#575757] mb-4">{product.desc}</p>
                <ul className="text-[#575757] mb-6 list-disc list-inside space-y-1">
                  {/* {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))} */}
                </ul>

                <div className="flex justify-center md:justify-start gap-4">
                 <Link
  to={`/product/${product.id}`}
  className="bg-[#effd25] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#163d7c] transition"
>
  More Details
</Link>

                  <a
                    href="tel:+911234567890"
                    className="border-2 border-[#effd25] px-6 py-3 rounded-full font-semibold text-[#1b51a1] hover:bg-[#1b51a1] hover:text-white transition"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
        href="tel:+918848839295"
        className="border-2 border-yellow-400 px-6 py-3 rounded-full font-semibold text-yellow-400 transition duration-300 flex-1 min-w-[150px] text-center"
      >
        <span className="relative z-10">Call +91-8848839295</span>
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
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3928.825735395184!2d76.31881527503153!3d10.031234990075768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDAxJzUyLjUiTiA3NsKwMTknMTcuMCJF!5e0!3m2!1sen!2sin!4v1756053706157!5m2!1sen!2sin"
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