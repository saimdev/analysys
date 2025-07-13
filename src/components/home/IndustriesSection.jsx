import React from "react";
import { motion } from "framer-motion";
import {
  Tv,
  Megaphone,
  TrendingUp,
  Building,
  Scale,
  GraduationCap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { INDUSTRIES } from "../../data/industries";

const IndustriesSection = () => {
  const iconMap = {
    Tv,
    Megaphone,
    TrendingUp,
    Building,
    Scale,
    GraduationCap,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
              Tailored for Every{" "}
              <span className="gradient-text">Media-Critical Industry</span>
            </h2>
            <p className="section-subtitle">
              From newsrooms to government agencies, our platform adapts to your
              specific workflow and compliance requirements.
            </p>
          </motion.div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {INDUSTRIES.map((industry, index) => {
              const Icon = iconMap[industry.icon];
              return (
                <motion.div
                  key={industry.id}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Icon and Title */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary-600 group-hover:to-accent-600 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {industry.description}
                    </p>
                  </div>

                  {/* Use Cases */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      Key Use Cases
                    </h4>
                    {industry.useCases.slice(0, 3).map((useCase, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {useCase}
                      </div>
                    ))}
                  </div>

                  {/* Learn More */}
                  <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 lg:p-12 text-center text-white"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our flexible platform adapts to any industry that relies on
              broadcast monitoring and media intelligence. Let's discuss your
              specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-200">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
