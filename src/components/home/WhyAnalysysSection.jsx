import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Satellite,
  Zap,
  Share2,
  Shield,
  Globe,
} from "lucide-react";
import { WHY_ANALYSYS_FEATURES } from "../../data/features";

const WhyAnalysysSection = () => {
  const iconMap = {
    Satellite,
    Zap,
    Share2,
    Shield,
    Globe,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants}>
          <h2 className="section-title text-left leading-snug">
            Drowning in News Footage?
            <br />
            <span className="gradient-text">Analysys is Your Lifeline.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Stop spending hours searching through endless video files. Our
            AI-powered platform transforms how media professionals discover,
            analyze, and repurpose broadcast content.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Feature List */}
            <motion.div variants={itemVariants} className="space-y-6">
              {WHY_ANALYSYS_FEATURES.map((feature, index) => {
                const Icon = iconMap[feature.icon];
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="pt-6">
              <button className="btn-primary text-lg px-8 py-4">
                See How It Works
              </button>
            </motion.div>
          </div>

          {/* Right Content - Video/Image Placeholder */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-8 border-r-0 border-t-6 border-b-6 border-l-white border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-lg font-medium">Watch Demo Video</p>
                  <p className="text-sm opacity-80">See Analysys in Action</p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center"
              >
                <CheckCircle className="w-12 h-12 text-green-500" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-600 rounded-xl shadow-lg flex items-center justify-center"
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-600">
              <div className="text-2xl font-bold text-primary-600">10x</div>
              <div className="text-sm text-gray-600">
                Faster Content Discovery
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAnalysysSection;
