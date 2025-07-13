import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Zap, Shield, Search, VideoIcon } from "lucide-react";

const FeaturesHero = () => {
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

  const floatingIcons = [
    { icon: Zap, color: "text-yellow-500", delay: 0 },
    { icon: Shield, color: "text-green-500", delay: 1 },
    { icon: Search, color: "text-blue-500", delay: 2 },
    { icon: VideoIcon, color: "text-purple-500", delay: 3 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-200"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-400"></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className={`absolute w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center ${item.color}`}
            style={{
              top: `${20 + index * 15}%`,
              left: `${10 + index * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        );
      })}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-primary-100">
              <Zap className="w-4 h-4 text-primary-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Comprehensive Feature Set
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-gray-900 mb-6 leading-tight"
          >
            Powerful Features for
            <br />
            <span className="gradient-text">Modern Broadcasting</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Discover how our comprehensive suite of AI-powered tools transforms
            broadcast monitoring from complex to simple.
          </motion.p>

          {/* Feature Highlights */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary-600 mb-1">8+</div>
              <div className="text-sm text-gray-600">Core Features</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary-600 mb-1">
                100+
              </div>
              <div className="text-sm text-gray-600">Integrations</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary-600 mb-1">
                99.9%
              </div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary-600 mb-1">
                24/7
              </div>
              <div className="text-sm text-gray-600">Operation</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group btn-primary text-lg px-8 py-4 flex items-center">
              Explore All Features
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="group btn-outline text-lg px-8 py-4 flex items-center">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Discover features</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesHero;
