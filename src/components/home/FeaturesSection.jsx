import React from "react";
import { motion } from "framer-motion";
import {
  Radio,
  Search,
  Video,
  FileCheck,
  Bell,
  FileVideo,
  Users,
  Cloud,
  ArrowRight,
} from "lucide-react";
import { FEATURES } from "../../data/features";

const FeaturesSection = () => {
  const iconMap = {
    Radio,
    Search,
    Video,
    FileCheck,
    Bell,
    FileVideo,
    Users,
    Cloud,
  };

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">
              Powerful Features,{" "}
              <span className="gradient-text">Minimal Effort</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to monitor, analyze, and repurpose broadcast
              content in one comprehensive platform.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <motion.div
                  key={feature.id}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group card cursor-pointer"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary-600 group-hover:to-accent-600 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                  </div>

                  {/* Feature Details */}
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {feature.details.slice(0, 2).map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></div>
                        {detail}
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center text-primary-600 font-medium text-sm">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your broadcast monitoring workflow?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                Explore All Features
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
