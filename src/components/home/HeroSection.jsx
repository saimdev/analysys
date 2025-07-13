import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight, Zap, Shield, Globe } from "lucide-react";

const HeroSection = () => {
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

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-200"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-400"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8 mt-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-primary-100">
              <Zap className="w-4 h-4 text-primary-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Powered by Advanced AI Technology
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display text-gray-900 mb-6 leading-tight"
          >
            <span className="gradient-text">AI-Powered</span>
            <br />
            Broadcast Monitoring &<br />
            <span className="text-gray-900">Media Intelligence</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 max-w-4xl mx-auto font-light"
          >
            Ingest. Record. Analyze. Search. Repurpose. All in Real-Time.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your broadcast monitoring workflow with our
            enterprise-grade AI solution. Monitor 100+ channels, search content
            instantly, and create clips in minutes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              to="/demo"
              className="group btn-primary text-lg px-8 py-4 flex items-center"
            >
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <button className="group btn-secondary text-lg px-8 py-4 flex items-center">
              <Play className="mr-2 w-5 h-5" />
              Watch How It Works
            </button>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={floatingVariants}
              animate="float"
              className="text-center"
            >
              <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Search through hours of content in seconds with AI-powered
                indexing
              </p>
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="float"
              className="text-center"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Enterprise Secure
              </h3>
              <p className="text-gray-600">
                Bank-grade security with compliance features for regulated
                industries
              </p>
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="float"
              className="text-center"
              style={{ animationDelay: "2s" }}
            >
              <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Global Scale
              </h3>
              <p className="text-gray-600">
                Monitor unlimited channels across any geographic region
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;
