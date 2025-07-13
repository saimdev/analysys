import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Database,
  Zap,
  Shield,
  Globe,
  Monitor,
  Cpu,
  HardDrive,
  Network,
} from "lucide-react";

const TechnicalSpecs = () => {
  const specCategories = [
    {
      title: "System Performance",
      icon: Cpu,
      color: "from-blue-500 to-blue-600",
      specs: [
        {
          label: "Concurrent Streams",
          value: "Unlimited",
          description: "Scale based on infrastructure",
        },
        {
          label: "Processing Latency",
          value: "<100ms",
          description: "Real-time processing guarantee",
        },
        {
          label: "Search Response",
          value: "<2 seconds",
          description: "Sub-second for cached results",
        },
        {
          label: "Uptime SLA",
          value: "99.9%",
          description: "8.77 hours downtime/year max",
        },
      ],
    },
    {
      title: "Storage & Data",
      icon: Database,
      color: "from-green-500 to-green-600",
      specs: [
        {
          label: "Storage Capacity",
          value: "Unlimited",
          description: "Cloud auto-scaling available",
        },
        {
          label: "Data Retention",
          value: "Configurable",
          description: "90 days to permanent",
        },
        {
          label: "Backup Frequency",
          value: "Real-time",
          description: "Continuous data protection",
        },
        {
          label: "Recovery Time",
          value: "<15 minutes",
          description: "Point-in-time recovery",
        },
      ],
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
      specs: [
        {
          label: "Encryption",
          value: "AES-256",
          description: "End-to-end encryption",
        },
        {
          label: "Authentication",
          value: "Multi-factor",
          description: "SSO, LDAP, SAML support",
        },
        {
          label: "Certifications",
          value: "SOC 2, ISO 27001",
          description: "Enterprise compliance ready",
        },
        {
          label: "Data Residency",
          value: "Configurable",
          description: "Geographic data control",
        },
      ],
    },
    {
      title: "Network & Integration",
      icon: Network,
      color: "from-orange-500 to-orange-600",
      specs: [
        {
          label: "API Endpoints",
          value: "100+",
          description: "RESTful API with rate limiting",
        },
        {
          label: "Webhook Support",
          value: "Real-time",
          description: "Event-driven integrations",
        },
        {
          label: "Bandwidth Usage",
          value: "Optimized",
          description: "Adaptive streaming protocols",
        },
        {
          label: "CDN Coverage",
          value: "Global",
          description: "150+ edge locations worldwide",
        },
      ],
    },
  ];

  const supportedFormats = [
    {
      category: "Video Formats",
      formats: ["MP4", "AVI", "MOV", "WMV", "FLV", "WebM", "MKV", "MPEG"],
    },
    {
      category: "Audio Formats",
      formats: ["MP3", "WAV", "AAC", "FLAC", "OGG", "WMA", "M4A", "AIFF"],
    },
    {
      category: "Streaming Protocols",
      formats: ["RTSP", "RTMP", "HLS", "DASH", "WebRTC", "UDP", "HTTP"],
    },
    {
      category: "Subtitle Formats",
      formats: ["SRT", "VTT", "ASS", "SSA", "TTML", "DFXP", "SCC", "MCC"],
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
              Technical <span className="gradient-text">Specifications</span>
            </h2>
            <p className="section-subtitle">
              Enterprise-grade performance metrics and technical capabilities
              designed for mission-critical broadcast monitoring operations.
            </p>
          </motion.div>

          {/* Performance Specs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {specCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.specs.map((spec, specIndex) => (
                      <div
                        key={specIndex}
                        className="border-b border-gray-100 pb-3 last:border-b-0"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-sm text-gray-600">
                            {spec.label}
                          </span>
                          <span className="text-sm font-semibold text-gray-900">
                            {spec.value}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">
                          {spec.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Supported Formats */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Supported Formats & Protocols
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportedFormats.map((formatGroup, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    {formatGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {formatGroup.formats.map((format, formatIndex) => (
                      <span
                        key={formatIndex}
                        className="px-2 py-1 bg-white text-gray-700 text-xs font-medium rounded-md border"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Infrastructure Requirements */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 rounded-2xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Infrastructure Requirements
            </h3>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Cloud Deployment */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Cloud className="w-8 h-8 text-blue-600" />
                  <h4 className="text-xl font-semibold text-gray-900">
                    Cloud Deployment
                  </h4>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Minimum Bandwidth</span>
                    <span className="font-semibold text-gray-900">10 Mbps</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Recommended Bandwidth</span>
                    <span className="font-semibold text-gray-900">
                      100 Mbps+
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Browser Requirements</span>
                    <span className="font-semibold text-gray-900">
                      Chrome 90+
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">User Concurrent Limit</span>
                    <span className="font-semibold text-gray-900">
                      Unlimited
                    </span>
                  </div>
                </div>
              </div>

              {/* On-Premise Deployment */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Server className="w-8 h-8 text-purple-600" />
                  <h4 className="text-xl font-semibold text-gray-900">
                    On-Premise Deployment
                  </h4>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Minimum CPU</span>
                    <span className="font-semibold text-gray-900">
                      16 cores
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Minimum RAM</span>
                    <span className="font-semibold text-gray-900">64 GB</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Storage (Initial)</span>
                    <span className="font-semibold text-gray-900">
                      10 TB SSD
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Operating System</span>
                    <span className="font-semibold text-gray-900">
                      Linux/Windows
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Performance Benchmarks */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Performance Benchmarks
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
                <div className="text-sm text-gray-600">
                  Hours processed monthly
                </div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  10K+
                </div>
                <div className="text-sm text-gray-600">
                  Concurrent searches/sec
                </div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  99.95%
                </div>
                <div className="text-sm text-gray-600">AI accuracy rate</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  50ms
                </div>
                <div className="text-sm text-gray-600">
                  Average response time
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
