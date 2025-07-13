import React, { useState } from "react";
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
  CheckCircle,
  Shield,
} from "lucide-react";
import { FEATURES } from "../../data/features";

const FeaturesOverview = () => {
  const [activeFeature, setActiveFeature] = useState(0);

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
              Complete <span className="gradient-text">Feature Arsenal</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to monitor, analyze, and manage broadcast
              content with enterprise-grade reliability and performance.
            </p>
          </motion.div>

          {/* Interactive Feature Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Feature List */}
            <div className="space-y-4">
              {FEATURES.map((feature, index) => {
                const Icon = iconMap[feature.icon];
                const isActive = activeFeature === index;

                return (
                  <motion.div
                    key={feature.id}
                    variants={cardVariants}
                    onClick={() => setActiveFeature(index)}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "border-primary-500 bg-primary-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-primary-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                          isActive ? "bg-primary-600" : "bg-gray-100"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            isActive ? "text-white" : "text-gray-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                            isActive ? "text-primary-900" : "text-gray-900"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed ${
                            isActive ? "text-primary-700" : "text-gray-600"
                          }`}
                        >
                          {feature.description}
                        </p>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 space-y-2"
                          >
                            {feature.details.slice(0, 2).map((detail, idx) => (
                              <div
                                key={idx}
                                className="flex items-center text-sm text-primary-600"
                              >
                                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                                {detail}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                      <ArrowRight
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive
                            ? "text-primary-600 translate-x-1"
                            : "text-gray-400 group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Feature Preview */}
            <motion.div variants={itemVariants} className="lg:sticky lg:top-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 h-full min-h-[600px] flex flex-col">
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center mb-4`}
                  >
                    {React.createElement(
                      iconMap[FEATURES[activeFeature].icon],
                      {
                        className: "w-8 h-8 text-white",
                      }
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {FEATURES[activeFeature].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {FEATURES[activeFeature].description}
                  </p>
                </div>

                {/* Feature Details */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Key Capabilities:
                  </h4>
                  {FEATURES[activeFeature].details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Mock Interface */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-inner">
                  <div className="h-full bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                        {React.createElement(
                          iconMap[FEATURES[activeFeature].icon],
                          {
                            className: "w-8 h-8 text-gray-400",
                          }
                        )}
                      </div>
                      <p className="text-sm">Interactive Demo</p>
                      <p className="text-xs">{FEATURES[activeFeature].title}</p>
                    </div>
                  </div>
                </div>

                <button className="mt-6 btn-primary w-full">
                  Try This Feature
                </button>
              </div>
            </motion.div>
          </div>

          {/* Feature Categories */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI & Analytics
              </h3>
              <p className="text-gray-600 text-sm">
                Advanced AI-powered search, recognition, and analytics
                capabilities
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Content Management
              </h3>
              <p className="text-gray-600 text-sm">
                Complete video ingestion, recording, and editing suite
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Enterprise Security
              </h3>
              <p className="text-gray-600 text-sm">
                Role-based access, compliance logging, and secure deployment
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
