import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Zap,
  VideoIcon,
  Database,
  Search,
  BarChart3,
  Upload,
  Settings,
  ArrowRight,
} from "lucide-react";
import { WORKFLOW_STEPS } from "../../utils/contants";

const WorkflowSection = () => {
  const workflowData = [
    {
      step: "Ingest",
      icon: Download,
      title: "Multi-Source Ingest",
      description:
        "Connect to 100+ broadcast sources including satellite, cable, and streaming platforms.",
      color: "from-blue-500 to-blue-600",
    },
    {
      step: "Transcode",
      icon: Zap,
      title: "Smart Transcoding",
      description:
        "Automatically optimize video formats for analysis and storage efficiency.",
      color: "from-purple-500 to-purple-600",
    },
    {
      step: "Record",
      icon: VideoIcon,
      title: "Continuous Recording",
      description:
        "Capture and store content 24/7 with intelligent scheduling and triggers.",
      color: "from-green-500 to-green-600",
    },
    {
      step: "Catalog",
      icon: Database,
      title: "AI Cataloging",
      description:
        "Automatically index content with metadata, tags, and searchable attributes.",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      step: "Search",
      icon: Search,
      title: "Intelligent Search",
      description:
        "Find any moment using voice, text, faces, objects, or natural language queries.",
      color: "from-red-500 to-red-600",
    },
    {
      step: "Report",
      icon: BarChart3,
      title: "Analytics & Reports",
      description:
        "Generate insights with comprehensive analytics and customizable reports.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      step: "Publish",
      icon: Upload,
      title: "Share & Distribute",
      description:
        "Export clips and content to social media, CDNs, or internal systems.",
      color: "from-pink-500 to-pink-600",
    },
    {
      step: "Manage",
      icon: Settings,
      title: "System Management",
      description:
        "Monitor system health, manage users, and configure automated workflows.",
      color: "from-teal-500 to-teal-600",
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

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
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
              Unified Workflow Engine:
              <br />
              <span className="gradient-text">From Broadcast to Insight</span>
            </h2>
            <p className="section-subtitle">
              Our streamlined workflow transforms raw broadcast feeds into
              actionable intelligence through eight seamlessly integrated steps.
            </p>
          </motion.div>

          {/* Workflow Steps */}
          <div className="relative">
            {/* Desktop Flow */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-4 gap-8 mb-12">
                {workflowData.slice(0, 4).map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.step}
                      variants={stepVariants}
                      whileHover={{ y: -10 }}
                      className="relative"
                    >
                      {/* Arrow */}
                      {index < 3 && (
                        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                          <ArrowRight className="w-6 h-6 text-gray-400" />
                        </div>
                      )}

                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {item.description}
                        </p>
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {item.step}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="grid grid-cols-4 gap-8">
                {workflowData.slice(4).map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.step}
                      variants={stepVariants}
                      whileHover={{ y: -10 }}
                      className="relative"
                    >
                      {/* Arrow */}
                      {index < 3 && (
                        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                          <ArrowRight className="w-6 h-6 text-gray-400" />
                        </div>
                      )}

                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {item.description}
                        </p>
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {item.step}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Flow */}
            <div className="lg:hidden space-y-6">
              {workflowData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    variants={stepVariants}
                    className="relative"
                  >
                    {/* Connector Line */}
                    {index < workflowData.length - 1 && (
                      <div className="absolute left-8 top-20 w-0.5 h-6 bg-gray-300"></div>
                    )}

                    <div className="flex items-start space-x-4">
                      <div
                        className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-4 shadow-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {item.description}
                        </p>
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {item.step}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                See the Complete Workflow in Action
              </h3>
              <p className="text-gray-600 mb-6">
                Watch how our unified workflow engine transforms broadcast
                monitoring from complex to simple.
              </p>
              <button className="btn-primary text-lg px-8 py-4">
                Watch Workflow Demo
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;
