import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Play,
  Download,
  Settings,
  BarChart3,
  Zap,
  Shield,
} from "lucide-react";

const FeatureDetails = () => {
  const [expandedSection, setExpandedSection] = useState(0);

  const featureCategories = [
    {
      id: 1,
      title: "AI-Powered Intelligence",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      description:
        "Advanced artificial intelligence capabilities that transform how you interact with broadcast content.",
      features: [
        {
          name: "Smart Content Recognition",
          description:
            "OCR, speech-to-text, face detection, and object recognition with 99.9% accuracy.",
          specs: [
            "Real-time processing",
            "Multi-language support",
            "50+ object categories",
            "Custom model training",
          ],
        },
        {
          name: "Natural Language Search",
          description:
            "Search using conversational language to find exactly what you need.",
          specs: [
            "Semantic understanding",
            "Context-aware results",
            "Boolean operators",
            "Saved search queries",
          ],
        },
        {
          name: "Intelligent Indexing",
          description:
            "Automatic content cataloging with metadata extraction and tagging.",
          specs: [
            "Auto-generated tags",
            "Custom taxonomies",
            "Batch processing",
            "Duplicate detection",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Content Management",
      icon: Play,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      description:
        "Comprehensive tools for ingesting, storing, and managing all your broadcast content.",
      features: [
        {
          name: "Multi-Source Ingestion",
          description:
            "Connect to unlimited broadcast sources with automated failover and monitoring.",
          specs: [
            "100+ source types",
            "Real-time ingestion",
            "Automated failover",
            "Quality monitoring",
          ],
        },
        {
          name: "Professional Editing Suite",
          description:
            "Timeline-based editing with professional-grade tools and effects.",
          specs: [
            "Multi-track editing",
            "Real-time preview",
            "Custom transitions",
            "Batch operations",
          ],
        },
        {
          name: "Format Optimization",
          description:
            "Automatic transcoding and optimization for different platforms and devices.",
          specs: [
            "Universal compatibility",
            "Adaptive streaming",
            "Quality presets",
            "Custom profiles",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Analytics & Reporting",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      description:
        "Deep insights and comprehensive reporting to drive data-driven decisions.",
      features: [
        {
          name: "Real-time Analytics",
          description:
            "Live dashboards with customizable metrics and KPI tracking.",
          specs: [
            "Custom dashboards",
            "Real-time alerts",
            "Trend analysis",
            "Comparative metrics",
          ],
        },
        {
          name: "Advanced Reporting",
          description:
            "Detailed reports with scheduling, automation, and multiple export formats.",
          specs: [
            "Scheduled reports",
            "Custom templates",
            "Multi-format export",
            "White-label options",
          ],
        },
        {
          name: "Compliance Monitoring",
          description:
            "Automated compliance checking with audit trails and regulatory reporting.",
          specs: [
            "Audit logging",
            "Compliance templates",
            "Regulatory reporting",
            "Evidence collection",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Enterprise Security",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      description:
        "Bank-grade security with comprehensive access controls and compliance features.",
      features: [
        {
          name: "Role-Based Access Control",
          description:
            "Granular permissions with hierarchical user management and SSO integration.",
          specs: [
            "Granular permissions",
            "SSO integration",
            "User hierarchies",
            "Activity monitoring",
          ],
        },
        {
          name: "Data Security",
          description:
            "End-to-end encryption with secure storage and transmission protocols.",
          specs: [
            "AES-256 encryption",
            "Secure transmission",
            "Data residency",
            "Backup encryption",
          ],
        },
        {
          name: "Compliance Framework",
          description:
            "Built-in compliance for major regulatory frameworks and industry standards.",
          specs: [
            "GDPR compliance",
            "SOC 2 certified",
            "HIPAA ready",
            "Custom frameworks",
          ],
        },
      ],
    },
  ];

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

  return (
    <section className="section-padding bg-gray-50">
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
              Deep Dive into{" "}
              <span className="gradient-text">Platform Capabilities</span>
            </h2>
            <p className="section-subtitle">
              Explore the technical details and specifications behind each
              feature category. Click to expand and discover the full potential
              of our platform.
            </p>
          </motion.div>

          {/* Feature Categories */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {featureCategories.map((category, index) => {
              const Icon = category.icon;
              const isExpanded = expandedSection === index;

              return (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  className={`${
                    category.bgColor
                  } rounded-2xl overflow-hidden shadow-sm border-2 ${
                    isExpanded ? "border-primary-300" : "border-transparent"
                  } transition-all duration-300`}
                >
                  {/* Category Header */}
                  <button
                    onClick={() => setExpandedSection(isExpanded ? -1 : index)}
                    className="w-full p-8 flex items-center justify-between hover:bg-white/50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 max-w-2xl">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500 hidden sm:block">
                        {isExpanded ? "Collapse" : "Expand"}
                      </span>
                      {isExpanded ? (
                        <ChevronDown className="w-6 h-6 text-gray-500" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-gray-500" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8">
                          <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {category.features.map(
                                (feature, featureIndex) => (
                                  <motion.div
                                    key={featureIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: featureIndex * 0.1 }}
                                    className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-200"
                                  >
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                      {feature.name}
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                      {feature.description}
                                    </p>
                                    <div className="space-y-2">
                                      <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Key Specifications
                                      </h5>
                                      {feature.specs.map((spec, specIndex) => (
                                        <div
                                          key={specIndex}
                                          className="flex items-center text-xs text-gray-600"
                                        >
                                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 flex-shrink-0"></div>
                                          {spec}
                                        </div>
                                      ))}
                                    </div>
                                  </motion.div>
                                )
                              )}
                            </div>

                            {/* Category CTA */}
                            <div className="mt-8 text-center">
                              <button
                                className={`btn-primary bg-gradient-to-r ${category.color} border-0 hover:opacity-90`}
                              >
                                Learn More About {category.title}
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Experience These Features?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                See how our comprehensive feature set can transform your
                broadcast monitoring workflow in a personalized demo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                  Schedule Live Demo
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                  Download Spec Sheet
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureDetails;
