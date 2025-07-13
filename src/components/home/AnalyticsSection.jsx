import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Calendar,
  FileText,
  Download,
  Clock,
  Target,
  Zap,
  Globe,
} from "lucide-react";

const AnalyticsSection = () => {
  const analyticsFeatures = [
    {
      icon: BarChart3,
      title: "Channel-wise Analytics",
      description:
        "Track frequency, duration, and performance metrics across all monitored channels.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      title: "Ad Tracking & Verification",
      description:
        "Monitor scheduled vs. actual ad placements with detailed compliance reports.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: TrendingUp,
      title: "Topic-based Trends",
      description:
        "Identify emerging trends and track topic evolution across time periods.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FileText,
      title: "Custom Reports",
      description:
        "Generate tailored reports with interactive graphs and detailed insights.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Download,
      title: "Multi-format Export",
      description:
        "Export data to Excel, PDF, or integrate via APIs with existing systems.",
      color: "from-red-500 to-red-600",
    },
  ];

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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="section-title text-left mb-6">
                Actionable Media Intelligence
                <br />
                <span className="gradient-text">at Your Fingertips</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform raw broadcast data into strategic insights with our
                comprehensive analytics suite. Make data-driven decisions with
                real-time dashboards and customizable reporting.
              </p>
            </motion.div>

            {/* Analytics Features */}
            <motion.div variants={itemVariants} className="space-y-6">
              {analyticsFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
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
          </div>

          {/* Right Content - Dashboard Preview */}
          <motion.div variants={itemVariants} className="relative">
            {/* Dashboard Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  Analytics Dashboard
                </h3>
                <p className="text-primary-100">
                  Real-time insights and reporting
                </p>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">142</div>
                    <div className="text-sm text-gray-600">Channels</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      98.7%
                    </div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      2.4k
                    </div>
                    <div className="text-sm text-gray-600">Hours</div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <BarChart3 className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Interactive Analytics Charts</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    Recent Activity
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        News Alert: Breaking story detected
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        Report generated for Channel 7
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        Trend analysis completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border-l-4 border-green-500"
            >
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-green-500" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Real-time
                  </div>
                  <div className="text-xs text-gray-600">Updates</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border-l-4 border-purple-500"
            >
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-purple-500" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Global
                  </div>
                  <div className="text-xs text-gray-600">Coverage</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              See Your Data Come to Life
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the power of real-time analytics with our interactive
              dashboard demo.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              View Analytics Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
