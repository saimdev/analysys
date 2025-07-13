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

          {/* Client Logos Slider */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden"
          >
            <div className="flex items-center justify-center space-x-8 md:space-x-12 lg:space-x-16">
              {CLIENTS.map((client, index) => (
                <motion.div
                  key={client.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="h-12 md:h-16 lg:h-20 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            {/* Infinite scroll animation for larger screens */}
            <div className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="animate-scroll flex items-center justify-center space-x-16">
                {CLIENTS.concat(CLIENTS).map((client, index) => (
                  <div
                    key={`scroll-${index}`}
                    className="flex-shrink-0 grayscale opacity-60"
                  >
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className="h-20 w-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
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
