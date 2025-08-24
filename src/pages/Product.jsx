import React, { useState, useRef, useMemo, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import product from "../data/product";

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const premiumRef = useRef(null); // New ref for premium div
  const location = useLocation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // Prevent default scroll restoration on route change
  useEffect(() => {
    const handleScrollRestoration = () => {
      window.scrollTo(0, window.scrollY);
    };

    window.history.scrollRestoration = "manual";
    window.addEventListener("popstate", handleScrollRestoration);

    return () => {
      window.removeEventListener("popstate", handleScrollRestoration);
      window.history.scrollRestoration = "auto";
    };
  }, []);

  // Handle product selection with scroll to premium div
  const handleSelectProduct = (index) => {
    setSelectedProduct(index);
    // Scroll to the premium div smoothly
    if (premiumRef.current) {
      premiumRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  const featuredVariants = {
    hidden: { opacity: 0, x: -100, rotateY: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Ensure selectedProduct is valid
  const currentProduct = product && product.length > 0 && selectedProduct < product.length ? product[selectedProduct] : null;

  // Reorder products so the selected product is first
  const reorderedProducts = useMemo(() => {
    if (!Array.isArray(product) || product.length === 0) return [];
    const selected = product[selectedProduct];
    const others = product.filter((_, index) => index !== selectedProduct);
    return [selected, ...others].filter(Boolean); // Place selected product first
  }, [product, selectedProduct]);

  // Memoize product cards
  const productCards = useMemo(() => {
    if (!Array.isArray(reorderedProducts) || reorderedProducts.length === 0) return [];

    return reorderedProducts.map((prod, index) => (
      <motion.div
        key={prod.id || `product-${index}`}
        className={`group relative cursor-pointer transition-all duration-300 ${
          selectedProduct === product.findIndex((p) => p.id === prod.id) ? "scale-105" : ""
        }`}
        variants={cardVariants}
        onClick={() => handleSelectProduct(product.findIndex((p) => p.id === prod.id))}
        onHoverStart={() => setHoveredCard(index)}
        onHoverEnd={() => setHoveredCard(null)}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20"
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderColor: "rgba(255, 255, 255, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        />

        <AnimatePresence>
          {selectedProduct === product.findIndex((p) => p.id === prod.id) && (
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl opacity-60 blur-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        <div className="relative p-6 h-full flex flex-col">
          <motion.div className="relative mb-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <img
                src={prod.mainImage || "/fallback-image.jpg"}
                alt={prod.title || "Product image"}
                className="w-full h-32 object-contain"
                loading="lazy"
              />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {selectedProduct === product.findIndex((p) => p.id === prod.id) && (
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white text-xs">✓</span>
              </motion.div>
            )}
          </motion.div>

          <div className="flex-1 flex flex-col">
            <motion.h3
              className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {prod.title || "Untitled Product"}
            </motion.h3>

            <p className="text-white/70 text-sm mb-4 line-clamp-2">{prod.desc || "No description available"}</p>

            <div className="space-y-2 mb-6">
              {Array.isArray(prod.features) && prod.features.length > 0 ? (
                prod.features.slice(0, 2).map((feature, idx) => (
                  <motion.div
                    key={`feature-${index}-${idx}`}
                    className="flex items-center text-xs text-white/80"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                    {feature}
                  </motion.div>
                ))
              ) : (
                <span className="text-xs text-white/50">No features available</span>
              )}
              {Array.isArray(prod.features) && prod.features.length > 2 && (
                <span className="text-xs text-white/50">+{prod.features.length - 2} more features</span>
              )}
            </div>

            <div className="mt-auto space-y-3">
              <motion.button
                className="w-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg text-white py-2 px-4 rounded-xl font-medium border border-white/30 hover:from-white/30 hover:to-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectProduct(product.findIndex((p) => p.id === prod.id));
                }}
              >
                {selectedProduct === product.findIndex((p) => p.id === prod.id) ? "Selected ✓" : "Select Product"}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    ));
  }, [reorderedProducts, selectedProduct]);

  return (
    <section
      ref={containerRef}
      id="products"
      className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden"
      style={{ overflowAnchor: "none" }}
    >
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 border-4 border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl"
          animate={{
            rotate: [0, 45, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-4 h-4 bg-white/30 rounded-full blur-sm"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_ personally_50px]" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20 py-20">
        <motion.div
          className="text-center mb-20"
          style={{ y: textY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-8 mt-20"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-300 font-semibold tracking-wider text-sm">
              ✨ PREMIUM PEST SOLUTIONS
            </span>
          </motion.div>

          <motion.h2
            className="text-6xl lg:text-8xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Our Elite
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Arsenal
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Cutting-edge pest control solutions engineered for maximum impact and environmental harmony
          </motion.p>
        </motion.div>

        <div className="mb-20" ref={premiumRef}>
          <motion.div
            className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 lg:p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {currentProduct ? (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div className="relative" variants={featuredVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                    <motion.img
                      src={currentProduct.mainImage || "/fallback-image.jpg"}
                      alt={currentProduct.title || "Featured product"}
                      className="w-full h-64 lg:h-80 object-contain"
                      whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
                      transition={{ duration: 0.6 }}
                      loading="lazy"
                    />
                    <motion.div
                      className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      ⭐ FEATURED
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div className="space-y-6" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
                  <div>
                    <motion.h3
                      className="text-4xl lg:text-5xl font-bold text-white mb-4"
                      key={selectedProduct}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {currentProduct.title}
                    </motion.h3>
                    <motion.p
                      className="text-xl text-white/80 leading-relaxed mb-6"
                      key={`desc-${selectedProduct}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {currentProduct.desc}
                    </motion.p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-cyan-300 mb-4">Key Features:</h4>
                    <motion.div className="grid gap-3">
                      {Array.isArray(currentProduct.features) && currentProduct.features.length > 0 ? (
                        currentProduct.features.map((feature, idx) => (
                          <motion.div
                            key={`feature-selected-${idx}`}
                            className="flex items-center bg-white/10 backdrop-blur-lg rounded-2xl px-4 py-3 border border-white/20"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                          >
                            <span className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3" />
                            <span className="text-white/90 font-medium">{feature}</span>
                          </motion.div>
                        ))
                      ) : (
                        <span className="text-white/50">No features available</span>
                      )}
                    </motion.div>
                  </div>

                  <motion.div className="flex flex-col sm:flex-row gap-4 pt-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
                    <Link to={`/product/${currentProduct.id}`} replace>
                      <motion.button
                        className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center justify-center">
                          <span className="mr-2">📋</span>
                          View Full Details
                        </span>
                      </motion.button>
                    </Link>
                    <motion.a
                      href="tel:+91+918848839295"
                      className="bg-white/10 backdrop-blur-lg border border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center justify-center">
                        <span className="mr-2">📞</span>
                        Call Expert
                      </span>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            ) : (
              <div className="text-center text-white/50">No product selected</div>
            )}
          </motion.div>
        </div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {productCards}
        </motion.div>

        <motion.div className="text-center mt-20" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(168, 85, 247, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(168, 85, 247, 0.4)",
                "0 0 0 20px rgba(168, 85, 247, 0)",
                "0 0 0 0 rgba(168, 85, 247, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Link
  to="/contact"
  className="inline-flex items-center text-white font-semibold hover:text-pink-400 transition transform hover:scale-105"
>
            <span className="mr-3">🚀</span>
            Get Personalized Solution
            <span className="ml-3">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Product;