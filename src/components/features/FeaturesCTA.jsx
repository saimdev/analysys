import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Download,
  Calendar,
  MessageCircle,
  Zap,
  CheckCircle,
  Star,
} from "lucide-react";

const FeaturesCTA = () => {
  const ctaOptions = [
    {
      icon: Calendar,
      title: "Schedule Live Demo",
      description: "See all features in action with a personalized walkthrough",
      action: "Book Demo",
      color: "from-blue-500 to-blue-600",
      features: [
        "Personalized demo",
        "Feature deep-dive",
        "Q&A session",
        "Custom use cases",
      ],
    },
    {
      icon: Play,
      title: "Watch Feature Tour",
      description: "Quick 5-minute overview of key platform capabilities",
      action: "Watch Now",
      color: "from-purple-500 to-purple-600",
      features: [
        "5-minute overview",
        "Key features",
        "User interface",
        "Real examples",
      ],
    },
    {
      icon: Download,
      title: "Download Resources",
      description:
        "Get detailed feature specs, pricing, and implementation guides",
      action: "Download",
      color: "from-green-500 to-green-600",
      features: [
        "Feature comparison",
        "Pricing guide",
        "Technical specs",
        "Case studies",
      ],
    },
  ];

  const benefits = [
    { icon: Zap, text: "Reduce monitoring time by 90%" },
    { icon: CheckCircle, text: "99.9% AI accuracy guarantee" },
    { icon: Star, text: "Enterprise-grade security" },
    { icon: ArrowRight, text: "Seamless integration" },
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
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-6">
              Ready to Transform Your
              <br />
              <span className="gradient-text">Broadcast Monitoring?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of media professionals who trust Analysys to
              streamline their broadcast monitoring workflows with cutting-edge
              AI technology.
            </p>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">{benefit.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Options */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {ctaOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${option.color}`}
                  ></div>

                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {option.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-6 bg-gradient-to-r ${option.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group`}
                  >
                    {option.action}
                    <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Main CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Start Your Free Trial Today
              </h3>
              <p className="text-lg lg:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Experience the full power of Analysys with a 14-day free trial.
                No credit card required, full access to all features.
              </p>

              {/* Trial Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">14 Days</div>
                  <div className="text-sm opacity-80">Free Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">Full Access</div>
                  <div className="text-sm opacity-80">All Features</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-sm opacity-80">Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-white text-primary-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105">
                  Contact Sales
                </button>
              </div>

              <p className="text-sm opacity-80 mt-6">
                Join 10,000+ media professionals already using Analysys
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Have questions? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Live chat available</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Same-day demo scheduling</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>No commitment required</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesCTA;
