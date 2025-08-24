import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTwitter,
  FaYoutube,
  FaTelegram
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-10 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-white text-xl font-semibold border-b-2 border-yellow-400 inline-block pb-1">
            Company
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-5"
        >
          <h3 className="text-white text-xl font-semibold border-b-2 border-yellow-400 inline-block pb-1">
            Contact Info
          </h3>
          <p>📍 3/677,2nd floor, Thaikavu Pukkattupady Road 
          ,(Edappally toll Pukkattupady road),opp. Kingston Factory outlet or Veejay Enterprises,
            Thrikkakara P.O,Near Edappally,Pin : 682021, Ernakulam, Kerala
</p>
          <p>📞 Phone: +91  8848839295 , 9745280649</p>
          <p>✉️ Email: customercareidentity@gmail.com<br/>
          ✉️Official: identitypestcontrolservices@gmail.com</p>
          <a
            href="https://wa.me/+918848839295"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 font-medium hover:underline flex items-center space-x-2"
          >
            <FaWhatsapp /> <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-white text-xl font-semibold border-b-2 border-yellow-400 inline-block pb-1">
            Follow Us
          </h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://www.facebook.com/share/16CTCaEyDP/"
              className="hover:text-blue-500 transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/identity_ipcs?utm_source=qr&igsh=djd0MGV1Nnk5ajRl"
              className="hover:text-pink-500 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/identity-pest-control-services-ipcs-ipcs-504a13377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="hover:text-blue-400 transition transform hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/8848839295"
              className="hover:text-green-400 transition transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://x.com/123ipcs?t=A8rmzS9cRkuVeT8XbyULAg&s=08"
              className="hover:text-black transition transform hover:scale-110"

            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com/@identitypestcontrolservices?si=1JEdElFqelkm58HH"
              className="hover:text-red-400 transition transform hover:scale-110"
            >
              <FaYoutube />
            </a>
            <a
              href="https://t.me/identityipcs"
              className="hover:text-blue-400 transition transform hover:scale-110"
            >
              <FaTelegram />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="border-t border-gray-700 text-center mt-10 pt-6 text-sm text-gray-400"
      >
        © {new Date().getFullYear()} Identity Pest Control Services. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
