import React from "react";
import { motion } from "framer-motion";
import { CLIENTS } from "../../data/clients";

const TrustedBySection = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-lg font-medium text-gray-500 mb-12"
          >
            Trusted by leading organizations worldwide
          </motion.h2>

          {/* Client Logos Grid */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden py-8"
          >
            {/* Desktop View - Single Row */}
            <div className="hidden lg:flex items-center justify-center space-x-12 xl:space-x-16">
              {CLIENTS.slice(0, 6).map((client, index) => (
                <motion.div
                  key={client.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-center h-24 w-32 p-2">
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className="max-h-20 max-w-28 w-auto h-auto opacity-60 hover:opacity-100 transition-opacity duration-300 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.target.src = `https://via.placeholder.com/120x80/e5e7eb/6b7280?text=${encodeURIComponent(
                          client.name
                        )}`;
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tablet View - Two Rows */}
            <div className="hidden md:grid lg:hidden grid-cols-4 gap-8 items-center justify-items-center">
              {CLIENTS.slice(0, 8).map((client, index) => (
                <motion.div
                  key={client.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-center h-20 w-28 p-2">
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className="max-h-16 max-w-24 w-auto h-auto opacity-60 hover:opacity-100 transition-opacity duration-300 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/100x64/e5e7eb/6b7280?text=${encodeURIComponent(
                          client.name
                        )}`;
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile View - Grid */}
            <div className="grid md:hidden grid-cols-2 gap-8 items-center justify-items-center">
              {CLIENTS.slice(0, 6).map((client, index) => (
                <motion.div
                  key={client.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-center h-16 w-24 p-2">
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className="max-h-12 max-w-20 w-auto h-auto opacity-60 hover:opacity-100 transition-opacity duration-300 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/80x48/e5e7eb/6b7280?text=${encodeURIComponent(
                          client.name
                        )}`;
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                100+
              </div>
              <div className="text-gray-600">Channels Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Real-time Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                99.9%
              </div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                1M+
              </div>
              <div className="text-gray-600">Hours Processed</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
