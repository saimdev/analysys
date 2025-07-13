import React from "react";
import { motion } from "framer-motion";
import {
  Headphones,
  BookOpen,
  Video,
  MessageCircle,
  Clock,
  Users,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const SupportSection = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat Support",
      description: "Get instant help from our support team",
      availability: "Mon-Fri, 9 AM - 6 PM PKT",
      responseTime: "< 5 minutes",
      color: "from-blue-500 to-blue-600",
      features: [
        "Instant responses",
        "Screen sharing",
        "File uploads",
        "Chat history",
      ],
    },
    {
      icon: Headphones,
      title: "Phone Support",
      description: "Speak directly with technical experts",
      availability: "Mon-Fri, 9 AM - 6 PM PKT",
      responseTime: "Immediate",
      color: "from-green-500 to-green-600",
      features: [
        "Direct expert access",
        "Complex troubleshooting",
        "Guided setup",
        "Priority queue",
      ],
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Comprehensive self-service resources",
      availability: "24/7 Access",
      responseTime: "Instant",
      color: "from-purple-500 to-purple-600",
      features: [
        "Step-by-step guides",
        "Video tutorials",
        "API documentation",
        "Best practices",
      ],
    },
    {
      icon: Video,
      title: "Video Consultations",
      description: "One-on-one sessions with specialists",
      availability: "By appointment",
      responseTime: "Same day booking",
      color: "from-orange-500 to-orange-600",
      features: [
        "Personalized training",
        "Custom workflows",
        "Advanced features",
        "Q&A sessions",
      ],
    },
  ];

  const supportStats = [
    { icon: Clock, number: "< 2hrs", label: "Average Response Time" },
    { icon: Users, number: "98%", label: "Customer Satisfaction" },
    { icon: Shield, number: "24/7", label: "System Monitoring" },
    { icon: Zap, number: "99.9%", label: "Platform Uptime" },
  ];

  const supportTiers = [
    {
      title: "Community Support",
      description: "Access to basic resources and community forums",
      features: [
        "Knowledge base access",
        "Community forums",
        "Basic documentation",
        "Email support (48hr response)",
      ],
      badge: "Free",
      color: "border-gray-300",
    },
    {
      title: "Professional Support",
      description: "Enhanced support for growing teams",
      features: [
        "Everything in Community",
        "Priority email support (24hr)",
        "Live chat support",
        "Video tutorials library",
        "Phone support (business hours)",
      ],
      badge: "Included",
      color: "border-primary-500",
      popular: true,
    },
    {
      title: "Enterprise Support",
      description: "Dedicated support for mission-critical operations",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Priority phone support (4hr)",
        "Custom training sessions",
        "SLA guarantees",
        "Direct escalation path",
      ],
      badge: "Premium",
      color: "border-accent-500",
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
              Comprehensive <span className="gradient-text">Support</span>
            </h2>
            <p className="section-subtitle">
              Our dedicated support team ensures you get the most out of
              Analysys. From initial setup to advanced features, we're here to
              help every step of the way.
            </p>
          </motion.div>

          {/* Support Stats */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {supportStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Support Options */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Availability:</span>
                      <span className="font-medium text-gray-900">
                        {option.availability}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Response Time:</span>
                      <span className="font-medium text-gray-900">
                        {option.responseTime}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full mt-6 py-3 px-6 bg-gradient-to-r ${option.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
                  >
                    Get Support
                  </button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Support Tiers */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              Support Tiers
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {supportTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`bg-white border-2 ${tier.color} rounded-2xl p-8 ${
                    tier.popular ? "shadow-xl scale-105" : "shadow-lg"
                  } transition-all duration-300 relative`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {tier.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {tier.description}
                    </p>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        tier.badge === "Free"
                          ? "bg-gray-100 text-gray-700"
                          : tier.badge === "Included"
                          ? "bg-primary-100 text-primary-700"
                          : "bg-accent-100 text-accent-700"
                      }`}
                    >
                      {tier.badge}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full mt-8 py-3 px-6 font-semibold rounded-lg transition-all duration-300 ${
                      tier.popular
                        ? "bg-primary-600 hover:bg-primary-700 text-white"
                        : "border-2 border-gray-300 hover:border-primary-500 text-gray-900"
                    }`}
                  >
                    {tier.badge === "Free" ? "Get Started" : "Contact Sales"}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Emergency Support */}
          <motion.div
            variants={itemVariants}
            className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-16"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Emergency Support
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                For critical system issues affecting your operations, our
                emergency support team is available 24/7 for Enterprise
                customers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>24/7 availability for Enterprise</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Zap className="w-4 h-4 mr-2" />
                  <span> 1 hour response time</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Self-Service Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              Self-Service Resources
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Documentation",
                  description: "Comprehensive guides and API docs",
                },
                {
                  icon: Video,
                  title: "Video Library",
                  description: "Step-by-step video tutorials",
                },
                {
                  icon: MessageCircle,
                  title: "Community Forum",
                  description: "Connect with other users",
                },
                {
                  icon: Headphones,
                  title: "Webinars",
                  description: "Live training sessions",
                },
              ].map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
                  >
                    <Icon className="w-8 h-8 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {resource.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {resource.description}
                    </p>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center mx-auto">
                      Access Now
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
