import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, X, Star, Crown, Zap } from "lucide-react";

const FeatureComparison = () => {
  const [activePlan, setActivePlan] = useState("professional");

  const plans = [
    {
      id: "starter",
      name: "Starter",
      icon: Zap,
      price: "Custom",
      description:
        "Perfect for small teams getting started with broadcast monitoring",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      popular: false,
    },
    {
      id: "professional",
      name: "Professional",
      icon: Star,
      price: "Custom",
      description:
        "Advanced features for growing organizations and media companies",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      description:
        "Complete solution for large enterprises with custom requirements",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      popular: false,
    },
  ];

  const features = [
    {
      category: "Core Features",
      items: [
        {
          name: "Multi-Channel Ingestion",
          starter: "10 channels",
          professional: "100 channels",
          enterprise: "Unlimited",
        },
        {
          name: "AI-Powered Search",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Real-time Monitoring",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Basic Analytics",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Video Editing Suite",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Professional",
        },
        {
          name: "Storage Capacity",
          starter: "1TB",
          professional: "10TB",
          enterprise: "Unlimited",
        },
      ],
    },
    {
      category: "AI & Analytics",
      items: [
        {
          name: "OCR Recognition",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Speech-to-Text",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Face Detection",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Object Recognition",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Sentiment Analysis",
          starter: false,
          professional: "Basic",
          enterprise: "Advanced",
        },
        {
          name: "Custom AI Models",
          starter: false,
          professional: false,
          enterprise: true,
        },
      ],
    },
    {
      category: "Collaboration & Sharing",
      items: [
        {
          name: "Team Collaboration",
          starter: "5 users",
          professional: "25 users",
          enterprise: "Unlimited",
        },
        {
          name: "Clip Sharing",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Social Media Export",
          starter: "Basic",
          professional: true,
          enterprise: true,
        },
        {
          name: "White-label Options",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "API Access",
          starter: "Limited",
          professional: "Full",
          enterprise: "Full + Custom",
        },
        {
          name: "Webhook Integration",
          starter: false,
          professional: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "Security & Compliance",
      items: [
        {
          name: "Role-based Access",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Granular",
        },
        {
          name: "SSO Integration",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Audit Logging",
          starter: "Basic",
          professional: "Detailed",
          enterprise: "Comprehensive",
        },
        {
          name: "Compliance Reporting",
          starter: false,
          professional: "Standard",
          enterprise: "Custom",
        },
        {
          name: "Data Encryption",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "On-premise Deployment",
          starter: false,
          professional: false,
          enterprise: true,
        },
      ],
    },
    {
      category: "Support & Services",
      items: [
        {
          name: "Email Support",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Phone Support",
          starter: false,
          professional: "Business hours",
          enterprise: "24/7",
        },
        {
          name: "Dedicated Account Manager",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "Custom Training",
          starter: false,
          professional: "Group sessions",
          enterprise: "Personalized",
        },
        {
          name: "SLA Guarantee",
          starter: "99%",
          professional: "99.5%",
          enterprise: "99.9%",
        },
        {
          name: "Professional Services",
          starter: false,
          professional: "Available",
          enterprise: "Included",
        },
      ],
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

  const renderFeatureValue = (value, planId) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-300 mx-auto" />
      );
    }

    const plan = plans.find((p) => p.id === planId);
    return (
      <span
        className={`text-sm font-medium ${
          planId === activePlan ? "text-gray-900" : "text-gray-600"
        }`}
      >
        {value}
      </span>
    );
  };

  return (
    <section className="section-padding bg-gray-50">
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
              Choose Your <span className="gradient-text">Perfect Plan</span>
            </h2>
            <p className="section-subtitle">
              Compare features across all plans to find the perfect fit for your
              organization. All plans include core broadcast monitoring
              capabilities.
            </p>
          </motion.div>

          {/* Plan Selector */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <div className="bg-white p-2 rounded-xl shadow-sm border">
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <button
                    key={plan.id}
                    onClick={() => setActivePlan(plan.id)}
                    className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activePlan === plan.id
                        ? "bg-primary-600 text-white shadow-md"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span>{plan.name}</span>
                    </div>
                    {plan.popular && (
                      <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-6 px-6 font-semibold text-gray-900">
                      Features
                    </th>
                    {plans.map((plan) => {
                      const Icon = plan.icon;
                      return (
                        <th key={plan.id} className="text-center py-6 px-6">
                          <div
                            className={`${
                              activePlan === plan.id ? plan.bgColor : ""
                            } rounded-xl p-4 transition-colors duration-300`}
                          >
                            <div
                              className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="font-semibold text-gray-900">
                              {plan.name}
                            </div>
                            <div className="text-sm text-gray-500 mb-2">
                              {plan.price}
                            </div>
                            {plan.popular && (
                              <div className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
                                Most Popular
                              </div>
                            )}
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {features.map((category, categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                      <tr className="bg-gray-25">
                        <td
                          colSpan={4}
                          className="py-4 px-6 font-semibold text-gray-900 border-t"
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((feature, featureIndex) => (
                        <tr
                          key={featureIndex}
                          className="border-b hover:bg-gray-50 transition-colors duration-200"
                        >
                          <td className="py-4 px-6 font-medium text-gray-700">
                            {feature.name}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {renderFeatureValue(feature.starter, "starter")}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {renderFeatureValue(
                              feature.professional,
                              "professional"
                            )}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {renderFeatureValue(
                              feature.enterprise,
                              "enterprise"
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Every organization has unique requirements. Let's discuss how we
                can tailor Analysys to meet your specific broadcast monitoring
                needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                  Contact Sales
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                  Schedule Demo
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureComparison;
