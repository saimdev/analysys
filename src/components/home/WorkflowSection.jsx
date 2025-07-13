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
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      step: "Transcode",
      icon: Zap,
      title: "Smart Transcoding",
      description:
        "Automatically optimize video formats for analysis and storage efficiency.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      step: "Record",
      icon: VideoIcon,
      title: "Continuous Recording",
      description:
        "Capture and store content 24/7 with intelligent scheduling and triggers.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      step: "Catalog",
      icon: Database,
      title: "AI Cataloging",
      description:
        "Automatically index content with metadata, tags, and searchable attributes.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      step: "Search",
      icon: Search,
      title: "Intelligent Search",
      description:
        "Find any moment using voice, text, faces, objects, or natural language queries.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      step: "Report",
      icon: BarChart3,
      title: "Analytics & Reports",
      description:
        "Generate insights with comprehensive analytics and customizable reports.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
    {
      step: "Publish",
      icon: Upload,
      title: "Share & Distribute",
      description:
        "Export clips and content to social media, CDNs, or internal systems.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      step: "Manage",
      icon: Settings,
      title: "System Management",
      description:
        "Monitor system health, manage users, and configure automated workflows.",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
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
            {/* Desktop Flow - Modern Design */}
            <div className="hidden lg:block">
              {/* First Row */}
              <div className="relative mb-20">
                <div className="grid grid-cols-4 gap-6">
                  {workflowData.slice(0, 4).map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.step}
                        variants={stepVariants}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="relative group"
                      >
                        <div
                          className={`h-80 ${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden`}
                        >
                          {/* Step Number */}
                          <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-600 shadow-sm">
                            {index + 1}
                          </div>

                          {/* Icon */}
                          <div
                            className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon className="w-10 h-10 text-white" />
                          </div>

                          {/* Content */}
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                            {item.description}
                          </p>
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-white px-3 py-1 rounded-full">
                            {item.step}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Arrow Connectors for First Row */}
                {/* <div className="absolute top-1/2 left-0 w-full h-0 transform -translate-y-1/2 pointer-events-none">
                  {[0, 1, 2].map((index) => (
                    <div
                      key={index}
                      className="absolute flex items-center"
                      style={{
                        left: `${(index + 1) * 25 - 3}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary-200">
                        <ArrowRight className="w-4 h-4 text-primary-600" />
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>

              {/* Curved Arrow to Second Row */}
              <div className="flex justify-center mb-8 -mt-10">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
                  <ArrowRight className="w-6 h-6 text-white transform rotate-90" />
                </div>
              </div>

              {/* Second Row */}
              <div className="relative">
                <div className="grid grid-cols-4 gap-6">
                  {workflowData.slice(4).map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.step}
                        variants={stepVariants}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="relative group"
                      >
                        <div
                          className={`h-80 ${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden`}
                        >
                          {/* Step Number */}
                          <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-600 shadow-sm">
                            {index + 5}
                          </div>

                          {/* Icon */}
                          <div
                            className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon className="w-10 h-10 text-white" />
                          </div>

                          {/* Content */}
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                            {item.description}
                          </p>
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-white px-3 py-1 rounded-full">
                            {item.step}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Arrow Connectors for Second Row */}
                {/* <div className="absolute top-1/2 left-0 w-full h-0 transform -translate-y-1/2 pointer-events-none">
                  {[0, 1, 2].map((index) => (
                    <div
                      key={index}
                      className="absolute flex items-center"
                      style={{
                        left: `${(index + 1) * 25 - 3}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary-200">
                        <ArrowRight className="w-4 h-4 text-primary-600" />
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>

            {/* Mobile Flow - Vertical Design */}
            <div className="lg:hidden space-y-8">
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
                      <div className="absolute left-10 top-32 w-0.5 h-8 bg-gradient-to-b from-primary-400 to-accent-400 z-10"></div>
                    )}

                    <div className="flex items-start space-x-4">
                      {/* Step Number Circle */}
                      <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>

                      <div
                        className={`flex-1 ${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-6 shadow-sm`}
                      >
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                              {item.description}
                            </p>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-white px-2 py-1 rounded-full inline-block">
                              {item.step}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-20">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                See the Complete Workflow in Action
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Watch how our unified workflow engine transforms broadcast
                monitoring from complex to simple in just minutes.
              </p>
              <button className="bg-white text-primary-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
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
