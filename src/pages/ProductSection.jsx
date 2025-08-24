import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/product";

export default function ProductSection() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
        <motion.div
          className="bg-white p-8 rounded-3xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl font-bold text-red-600 text-center">
            Product not found!
          </p>
        </motion.div>
      </div>
    );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16 space-y-20 mt-12">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {product.title}
          </motion.h1>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Main Product Showcase */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, rotateX: 15 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="aspect-video overflow-hidden rounded-2xl">
              <motion.img
                src={product.mainImage}
                alt={product.title}
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Product Description Card */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/30">
            <motion.p
              className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {product.desc}
            </motion.p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/30">
            <motion.h3 
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-8 text-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Key Features
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {product.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center space-x-4 p-4 bg-white/50 rounded-2xl hover:bg-white/70 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03, x: 10 }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
                  <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Detailed Sections */}
        {product.details && product.details.map((section, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 max-w-7xl mx-auto`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Content Side */}
            <div className="flex-1 space-y-6">
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/30">
                <motion.h4 
                  className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {section.heading}
                </motion.h4>
                
                {section.paragraphs && section.paragraphs.map((para, i) => (
                  <motion.p
                    key={i}
                    className="text-gray-700 text-lg mb-4 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    {para}
                  </motion.p>
                ))}
                
                {section.bulletPoints && (
                  <div className="space-y-3 mt-6">
                    {section.bulletPoints.map((point, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-lg">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Image Side */}
            {section.image && (
              <div className="flex-1">
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative bg-white/50 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/30">
                    <img
                      src={section.image}
                      alt={section.heading}
                      className="w-full h-80 object-contain rounded-2xl"
                    />
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}

        {/* Gallery Section */}
        {product.galleryImages && product.galleryImages.length > 0 && (
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Visual Gallery
            </h3>
            
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-6 px-4">
                {product.galleryImages.map((img, i) => (
                  <motion.div
                    key={i}
                    className="flex-shrink-0 group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-blue-200 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                      <div className="relative w-80 h-60 bg-white/60 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/30">
                        <img
                          src={img}
                          alt={`${product.title} ${i + 1}`}
                          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="tel:+91 8848839295"
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Call Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
          
          <motion.a
            href="/contact"
            className="group relative overflow-hidden border-3 border-purple-600 px-8 py-4 rounded-full font-bold text-lg text-purple-600 hover:text-white bg-white/70 backdrop-blur-md shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.a>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          className="flex justify-center pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex space-x-3">
            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-green-500 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}