import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  Calendar,
  MessageCircle,
  ArrowRight,
  Zap,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

const DemoSection = () => {
  const demoOptions = [
    {
      icon: Calendar,
      title: "Schedule a Live Demo",
      description:
        "Get a personalized walkthrough of Analysys tailored to your specific use case.",
      features: [
        "30-minute interactive session",
        "Customized to your industry",
        "Q&A with our experts",
        "Free trial access",
      ],
      cta: "Schedule Demo",
      color: "from-blue-500 to-blue-600",
      popular: true,
    },
    {
      icon: MessageCircle,
      title: "Talk to Sales",
      description:
        "Discuss pricing, deployment options, and get answers to your technical questions.",
      features: [
        "Custom pricing quotes",
        "Technical consultation",
        "Implementation planning",
        "ROI analysis",
      ],
      cta: "Contact Sales",
      color: "from-purple-500 to-purple-600",
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "See Real Results",
      description: "Watch live searches through actual broadcast content",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Get insights from our media intelligence specialists",
    },
    {
      icon: Clock,
      title: "Quick Setup",
      description: "Start monitoring your first channels within minutes",
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
            <h2 className="section-title">
              Experience the Power of
              <br />
              <span className="gradient-text">
                Real-Time Broadcast Intelligence
              </span>
            </h2>
            <p className="section-subtitle">
              See how Analysys transforms your media monitoring workflow. Choose
              the demo format that works best for you.
            </p>
          </motion.div>

          {/* Demo Options */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {demoOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    option.popular ? "ring-2 ring-primary-500" : ""
                  }`}
                >
                  {/* Popular Badge */}
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 bg-gradient-to-r ${option.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group`}
                  >
                    {option.cta}
                    <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              What You'll Experience in Your Demo
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Video Demo Teaser */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Video Placeholder */}
              <div className="relative bg-gray-900 aspect-video lg:aspect-auto flex items-center justify-center">
                <div className="text-center text-white">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer"
                  >
                    <Play className="w-10 h-10 text-white ml-1" />
                  </motion.div>
                  <h4 className="text-xl font-semibold mb-2">
                    2-Minute Overview
                  </h4>
                  <p className="text-gray-300">See Analysys in action</p>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Watch Before You Buy
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Get a quick overview of how Analysys transforms broadcast
                  monitoring. See the platform in action before scheduling your
                  personalized demo.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Live AI search demonstration
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Real-time content analysis
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Clip creation workflow
                  </div>
                </div>
                <button className="btn-outline self-start">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo Video
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 pt-16 border-t border-gray-200"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Demos Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  30min
                </div>
                <div className="text-gray-600">Average Demo Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  95%
                </div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  24hrs
                </div>
                <div className="text-gray-600">Demo Response Time</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
