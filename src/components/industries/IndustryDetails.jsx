import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tv,
  Megaphone,
  TrendingUp,
  Building,
  Scale,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  BarChart3,
  Shield,
} from "lucide-react";
import { INDUSTRIES } from "../../data/industries";

const IndustryDetails = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const iconMap = {
    Tv,
    Megaphone,
    TrendingUp,
    Building,
    Scale,
    GraduationCap,
  };

  const industryBenefits = {
    0: [
      // News & Broadcast
      {
        icon: Clock,
        title: "75% Faster",
        description: "Content discovery and compilation",
      },
      {
        icon: BarChart3,
        title: "Real-time",
        description: "Breaking news monitoring",
      },
      {
        icon: Users,
        title: "Team",
        description: "Collaborative workflow tools",
      },
      { icon: Shield, title: "Verified", description: "Source authentication" },
    ],
    1: [
      // PR & Communications
      { icon: Clock, title: "24/7", description: "Brand mention monitoring" },
      {
        icon: BarChart3,
        title: "Sentiment",
        description: "Analysis and tracking",
      },
      { icon: Users, title: "Crisis", description: "Response management" },
      { icon: Shield, title: "Reputation", description: "Protection tools" },
    ],
    2: [
      // Marketing Teams
      { icon: Clock, title: "Instant", description: "Trend identification" },
      { icon: BarChart3, title: "Viral", description: "Content detection" },
      { icon: Users, title: "Social", description: "Media optimization" },
      { icon: Shield, title: "Brand", description: "Safety monitoring" },
    ],
    3: [
      // Government & NGOs
      { icon: Clock, title: "Archive", description: "Policy discussions" },
      {
        icon: BarChart3,
        title: "Transparency",
        description: "Reporting tools",
      },
      { icon: Users, title: "Public", description: "Communication tracking" },
      { icon: Shield, title: "Compliance", description: "Record keeping" },
    ],
    4: [
      // Legal & Compliance
      { icon: Clock, title: "Timestamped", description: "Evidence collection" },
      { icon: BarChart3, title: "Audit", description: "Trail maintenance" },
      { icon: Users, title: "Legal", description: "Documentation" },
      { icon: Shield, title: "Regulatory", description: "Compliance" },
    ],
    5: [
      // Academic & Research
      { icon: Clock, title: "Historical", description: "Data analysis" },
      {
        icon: BarChart3,
        title: "Research",
        description: "Trend identification",
      },
      { icon: Users, title: "Academic", description: "Collaboration" },
      { icon: Shield, title: "Citation", description: "Source verification" },
    ],
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

  const currentIndustry = INDUSTRIES[activeIndustry];
  const Icon = iconMap[currentIndustry.icon];

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
              Industry-Specific <span className="gradient-text">Solutions</span>
            </h2>
            <p className="section-subtitle">
              Explore how Analysys adapts to your industry's unique requirements
              and workflows. Click on each industry to learn more about specific
              use cases and benefits.
            </p>
          </motion.div>

          {/* Industry Selector */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {INDUSTRIES.map((industry, index) => {
                const IndustryIcon = iconMap[industry.icon];
                return (
                  <button
                    key={industry.id}
                    onClick={() => setActiveIndustry(index)}
                    className={`p-4 rounded-xl transition-all duration-300 ${
                      activeIndustry === index
                        ? "bg-primary-600 text-white shadow-lg scale-105"
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <IndustryIcon className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium text-center leading-tight">
                      {industry.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Industry Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
            >
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {currentIndustry.title}
                      </h3>
                      <p className="text-primary-600 font-medium">
                        Industry Solution
                      </p>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {currentIndustry.description}
                  </p>
                </div>

                {/* Use Cases */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Key Use Cases
                  </h4>
                  <div className="space-y-3">
                    {currentIndustry.useCases.map((useCase, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{useCase}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Benefits Grid */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Key Benefits
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {industryBenefits[activeIndustry].map((benefit, index) => {
                      const BenefitIcon = benefit.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-50 rounded-lg p-4 text-center"
                        >
                          <BenefitIcon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                          <div className="font-semibold text-gray-900">
                            {benefit.title}
                          </div>
                          <div className="text-sm text-gray-600">
                            {benefit.description}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <button className="btn-primary text-lg px-8 py-4 flex items-center">
                  Learn More About {currentIndustry.title}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 shadow-2xl">
                  {/* Mock Dashboard */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">
                        {currentIndustry.title} Dashboard
                      </h4>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-blue-600">
                          247
                        </div>
                        <div className="text-xs text-gray-600">
                          Active Channels
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-green-600">
                          98.2%
                        </div>
                        <div className="text-xs text-gray-600">
                          Accuracy Rate
                        </div>
                      </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="space-y-3">
                      <h5 className="font-medium text-gray-900 text-sm">
                        Recent Activity
                      </h5>
                      {currentIndustry.useCases
                        .slice(0, 3)
                        .map((useCase, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-2 bg-gray-50 rounded"
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">
                              {useCase}
                            </span>
                          </div>
                        ))}
                    </div>
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
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border-l-4 border-primary-500"
                >
                  <Icon className="w-8 h-8 text-primary-600" />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryDetails;
