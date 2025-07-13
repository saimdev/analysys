import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Download,
  MessageCircle,
  CheckCircle,
  Star,
  Globe,
  Users,
} from "lucide-react";

const IndustriesCTA = () => {
  const ctaOptions = [
    {
      icon: Calendar,
      title: "Industry-Specific Demo",
      description:
        "See Analysys in action with use cases tailored to your industry",
      features: [
        "Customized demo scenarios",
        "Industry expert walkthrough",
        "ROI analysis for your sector",
        "Implementation timeline",
      ],
      action: "Schedule Demo",
      color: "from-blue-500 to-blue-600",
      popular: true,
    },
    {
      icon: Download,
      title: "Industry Solution Brief",
      description: "Download detailed documentation for your specific industry",
      features: [
        "Use case examples",
        "Feature comparison",
        "Implementation guide",
        "Pricing information",
      ],
      action: "Download Brief",
      color: "from-green-500 to-green-600",
      popular: false,
    },
    {
      icon: MessageCircle,
      title: "Expert Consultation",
      description:
        "Speak with industry specialists about your specific requirements",
      features: [
        "30-minute consultation",
        "Industry best practices",
        "Custom solution design",
        "Implementation roadmap",
      ],
      action: "Book Consultation",
      color: "from-purple-500 to-purple-600",
      popular: false,
    },
  ];

  const industryStats = [
    { number: "500+", label: "Organizations Trust Us", icon: Users },
    { number: "6", label: "Industries Served", icon: Globe },
    { number: "99.5%", label: "Customer Satisfaction", icon: Star },
    { number: "24/7", label: "Global Support", icon: CheckCircle },
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
              <span className="gradient-text">Industry Workflow?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join industry leaders who have already revolutionized their media
              monitoring processes with Analysys. Get started with solutions
              designed specifically for your sector.
            </p>
          </motion.div>

          {/* Industry Stats */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
          >
            {industryStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
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
                  {/* Popular Badge */}
                  {option.popular && (
                    <div className="absolute -top-3 -right-3">
                      <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

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
                Start Your Industry Transformation Today
              </h3>
              <p className="text-lg lg:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Don't see your industry listed? No problem. Analysys adapts to
                any organization that relies on broadcast monitoring and media
                intelligence.
              </p>

              {/* Key Points */}
              <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-semibold mb-1">Free Consultation</div>
                  <div className="text-sm opacity-80">
                    No commitment required
                  </div>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-semibold mb-1">Custom Solutions</div>
                  <div className="text-sm opacity-80">
                    Tailored to your needs
                  </div>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-semibold mb-1">Expert Support</div>
                  <div className="text-sm opacity-80">Industry specialists</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-white text-primary-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Started Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105">
                  Contact Our Team
                </button>
              </div>

              <p className="text-sm opacity-80 mt-6">
                Join 500+ organizations already transforming their workflows
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Have specific questions about your industry?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Industry experts available</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Same-day response guaranteed</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>No sales pressure promise</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesCTA;
