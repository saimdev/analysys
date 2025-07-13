import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  CheckCircle,
  X,
  ArrowRight,
  Shield,
  Zap,
  Users,
  Settings,
  Globe,
  Lock,
} from "lucide-react";

const DeploymentSection = () => {
  const [activeTab, setActiveTab] = useState("cloud");

  const deploymentOptions = {
    cloud: {
      title: "Analysys Cloud",
      subtitle: "SaaS (Fully Managed)",
      description:
        "Get started instantly with our fully managed cloud solution. Perfect for agencies and teams that need to scale quickly.",
      icon: Cloud,
      color: "from-blue-500 to-blue-600",
      features: [
        "Instant deployment and setup",
        "Automatic updates and maintenance",
        "Global CDN for optimal performance",
        "Pay-as-you-scale pricing model",
        "Built-in backup and disaster recovery",
        "External API/SDK ready",
        "Multi-tenant architecture",
        "99.9% uptime SLA",
      ],
      idealFor: [
        "Marketing agencies",
        "News organizations",
        "PR companies",
        "Fast-scaling teams",
      ],
      benefits: [
        "No infrastructure management",
        "Rapid deployment",
        "Cost-effective scaling",
        "Always up-to-date features",
      ],
    },
    onpremise: {
      title: "Analysys On-Premise",
      subtitle: "Installed in Your Data Center",
      description:
        "Complete control over your data and infrastructure. Ideal for government agencies and regulated enterprises.",
      icon: Server,
      color: "from-purple-500 to-purple-600",
      features: [
        "Complete data sovereignty",
        "Custom infrastructure integration",
        "Advanced security configurations",
        "Regulatory compliance support",
        "Dedicated support team",
        "Custom deployment options",
        "Air-gapped deployment available",
        "Hardware specification guidance",
      ],
      idealFor: [
        "Government agencies",
        "Financial institutions",
        "Healthcare organizations",
        "Regulated enterprises",
      ],
      benefits: [
        "100% data control",
        "Custom security policies",
        "Regulatory compliance",
        "Performance optimization",
      ],
    },
  };

  const comparisonData = [
    {
      feature: "Deployment",
      cloud: "SaaS (fully managed)",
      onpremise: "Installed in your data center",
    },
    {
      feature: "Ideal For",
      cloud: "Agencies, fast scale teams",
      onpremise: "Governments, regulated enterprises",
    },
    {
      feature: "Data Control",
      cloud: "Encrypted, compliant",
      onpremise: "100% control over storage + residency",
    },
    {
      feature: "Maintenance",
      cloud: "Auto updates",
      onpremise: "We install & update on-prem software",
    },
    {
      feature: "Integration",
      cloud: "External API/SDK ready",
      onpremise: "Compatible with existing infra",
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

  const activeDeployment = deploymentOptions[activeTab];
  const ActiveIcon = activeDeployment.icon;

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
              <span className="gradient-text">Cloud or On-Premise</span>
              <br />
              Your Infrastructure, Your Rules
            </h2>
            <p className="section-subtitle">
              Choose the deployment model that best fits your security
              requirements, compliance needs, and infrastructure preferences.
            </p>
          </motion.div>

          {/* Deployment Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setActiveTab("cloud")}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === "cloud"
                      ? "bg-white text-primary-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Cloud className="w-5 h-5 inline mr-2" />
                  Cloud Solution
                </button>
                <button
                  onClick={() => setActiveTab("onpremise")}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === "onpremise"
                      ? "bg-white text-primary-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Server className="w-5 h-5 inline mr-2" />
                  On-Premise
                </button>
              </div>
            </div>

            {/* Active Deployment Details */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <div
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${activeDeployment.color} text-white rounded-full mb-4`}
                  >
                    <ActiveIcon className="w-5 h-5 mr-2" />
                    {activeDeployment.subtitle}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {activeDeployment.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {activeDeployment.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Features
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeDeployment.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Ideal For
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeDeployment.idealFor.map((type, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="btn-primary text-lg px-8 py-4">
                  Learn More About {activeDeployment.title}
                </button>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div
                  className={`bg-gradient-to-br ${activeDeployment.color} rounded-2xl p-8 text-white`}
                >
                  <div className="text-center mb-8">
                    <ActiveIcon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h4 className="text-2xl font-bold mb-2">
                      {activeDeployment.title}
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {activeDeployment.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4"
                >
                  <Shield className="w-8 h-8 text-green-500" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4"
                >
                  <Zap className="w-8 h-8 text-yellow-500" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Deployment Comparison
            </h3>
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">
                        <Cloud className="w-5 h-5 inline mr-2" />
                        Analysys Cloud
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">
                        <Server className="w-5 h-5 inline mr-2" />
                        Analysys On-Premise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-t border-gray-200">
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600">
                          {row.cloud}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600">
                          {row.onpremise}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Not Sure Which Option is Right for You?
              </h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Our deployment specialists will help you choose the perfect
                solution based on your specific requirements and constraints.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-200">
                  Compare Solutions
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeploymentSection;
