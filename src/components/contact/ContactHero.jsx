import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Clock, Users } from "lucide-react";

const ContactHero = () => {
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

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      info: "+92 42 3584 6201 / 6202",
      availability: "Mon-Fri, 9 AM - 6 PM PKT",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      info: "info@analysys.tech",
      availability: "Response within 24 hours",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant support",
      info: "Available on website",
      availability: "Mon-Fri, 9 AM - 6 PM PKT",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const quickStats = [
    { number: "< 2hrs", label: "Average Response Time" },
    { number: "24/7", label: "System Monitoring" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "50+", label: "Countries Served" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-200"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-400"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header Content */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-primary-100 mb-6">
              <MessageCircle className="w-4 h-4 text-primary-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Get in Touch
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-6 leading-tight">
              Let's Start the
              <br />
              <span className="gradient-text">Conversation</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your broadcast monitoring? Our team of experts
              is here to help you find the perfect solution for your
              organization.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {method.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{method.description}</p>

                  <div className="space-y-2">
                    <div className="font-semibold text-gray-900">
                      {method.info}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {method.availability}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Office Location Preview */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Visit Our Office
                </h3>
              </div>

              <p className="text-gray-600 mb-4">
                D-1 Sea Breeze, Shershah Block, New Garden Town
                <br />
                Lahore, Pakistan
              </p>

              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>In-person meetings welcome</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>By appointment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Get in touch</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div> */}
    </section>
  );
};

export default ContactHero;
