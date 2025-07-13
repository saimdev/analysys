import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, X, Clock, Users, Shield, BarChart3 } from "lucide-react";

const IndustryComparison = () => {
  const comparisonData = [
    {
      feature: "Real-time Monitoring",
      newsbroadcast: true,
      pr: true,
      marketing: true,
      government: true,
      legal: true,
      academic: true,
    },
    {
      feature: "AI-Powered Search",
      newsbroadcast: true,
      pr: true,
      marketing: true,
      government: true,
      legal: true,
      academic: true,
    },
    {
      feature: "Sentiment Analysis",
      newsbroadcast: true,
      pr: true,
      marketing: true,
      government: false,
      legal: false,
      academic: true,
    },
    {
      feature: "Compliance Logging",
      newsbroadcast: false,
      pr: false,
      marketing: false,
      government: true,
      legal: true,
      academic: false,
    },
    {
      feature: "Brand Monitoring",
      newsbroadcast: false,
      pr: true,
      marketing: true,
      government: false,
      legal: false,
      academic: false,
    },
    {
      feature: "Crisis Alerts",
      newsbroadcast: true,
      pr: true,
      marketing: false,
      government: true,
      legal: true,
      academic: false,
    },
    {
      feature: "Historical Archive",
      newsbroadcast: true,
      pr: true,
      marketing: false,
      government: true,
      legal: true,
      academic: true,
    },
    {
      feature: "Trend Analysis",
      newsbroadcast: true,
      pr: true,
      marketing: true,
      government: false,
      legal: false,
      academic: true,
    },
    {
      feature: "Social Media Export",
      newsbroadcast: true,
      pr: true,
      marketing: true,
      government: false,
      legal: false,
      academic: false,
    },
    {
      feature: "Evidence Collection",
      newsbroadcast: false,
      pr: false,
      marketing: false,
      government: true,
      legal: true,
      academic: true,
    },
  ];

  const industries = [
    {
      key: "newsbroadcast",
      name: "News & Broadcast",
      icon: Clock,
      color: "blue",
    },
    { key: "pr", name: "PR & Communications", icon: Users, color: "green" },
    {
      key: "marketing",
      name: "Marketing Teams",
      icon: BarChart3,
      color: "purple",
    },
    {
      key: "government",
      name: "Government & NGOs",
      icon: Shield,
      color: "orange",
    },
    { key: "legal", name: "Legal & Compliance", icon: Shield, color: "red" },
    {
      key: "academic",
      name: "Academic & Research",
      icon: BarChart3,
      color: "indigo",
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
              Feature <span className="gradient-text">Comparison</span>
            </h2>
            <p className="section-subtitle">
              See which features are most relevant for your industry and
              understand how Analysys adapts to different use cases and
              requirements.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            variants={itemVariants}
            className="overflow-hidden bg-white rounded-2xl shadow-lg border"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="text-left py-6 px-6 font-semibold text-gray-900 sticky left-0 bg-gray-50 z-10">
                      Features
                    </th>
                    {industries.map((industry) => {
                      const Icon = industry.icon;
                      return (
                        <th
                          key={industry.key}
                          className="text-center py-6 px-4 min-w-32"
                        >
                          <div className="flex flex-col items-center space-y-2">
                            <div
                              className={`w-12 h-12 bg-${industry.color}-100 rounded-xl flex items-center justify-center`}
                            >
                              <Icon
                                className={`w-6 h-6 text-${industry.color}-600`}
                              />
                            </div>
                            <div className="font-semibold text-gray-900 text-sm text-center leading-tight">
                              {industry.name}
                            </div>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="py-4 px-6 font-medium text-gray-900 sticky left-0 bg-white">
                        {row.feature}
                      </td>
                      {industries.map((industry) => (
                        <td
                          key={industry.key}
                          className="py-4 px-4 text-center"
                        >
                          {row[industry.key] ? (
                            <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-gray-300 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Industry Highlights */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              Industry-Specific Highlights
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => {
                const Icon = industry.icon;
                const relevantFeatures = comparisonData.filter(
                  (row) => row[industry.key]
                ).length;

                return (
                  <motion.div
                    key={industry.key}
                    whileHover={{ y: -5 }}
                    className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`w-16 h-16 bg-${industry.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className={`w-8 h-8 text-${industry.color}-600`} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {industry.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {relevantFeatures} out of {comparisonData.length} features
                      optimized
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-${industry.color}-600 h-2 rounded-full`}
                        style={{
                          width: `${
                            (relevantFeatures / comparisonData.length) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Need a Custom Configuration?
              </h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Every organization has unique requirements. Let's discuss how we
                can tailor Analysys features specifically for your industry and
                use case.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                  Request Custom Demo
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryComparison;
