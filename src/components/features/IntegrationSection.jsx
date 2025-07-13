import React from "react";
import { motion } from "framer-motion";
import {
  Plug,
  Globe,
  Database,
  Share2,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const IntegrationSection = () => {
  const integrationCategories = [
    {
      title: "Social Media Platforms",
      icon: Share2,
      color: "from-blue-500 to-blue-600",
      integrations: [
        {
          name: "YouTube",
          description: "Direct upload and publishing",
          status: "available",
        },
        {
          name: "Facebook",
          description: "Page and group posting",
          status: "available",
        },
        {
          name: "Twitter",
          description: "Tweet and thread creation",
          status: "available",
        },
        {
          name: "LinkedIn",
          description: "Professional content sharing",
          status: "available",
        },
        {
          name: "Instagram",
          description: "Stories and feed posting",
          status: "available",
        },
        {
          name: "TikTok",
          description: "Short-form video publishing",
          status: "coming-soon",
        },
      ],
    },
    {
      title: "Cloud Storage",
      icon: Database,
      color: "from-green-500 to-green-600",
      integrations: [
        {
          name: "AWS S3",
          description: "Scalable cloud storage",
          status: "available",
        },
        {
          name: "Google Cloud",
          description: "Enterprise storage solutions",
          status: "available",
        },
        {
          name: "Microsoft Azure",
          description: "Hybrid cloud integration",
          status: "available",
        },
        {
          name: "Dropbox Business",
          description: "Team collaboration storage",
          status: "available",
        },
        {
          name: "Box",
          description: "Enterprise content management",
          status: "available",
        },
        {
          name: "OneDrive",
          description: "Microsoft ecosystem integration",
          status: "available",
        },
      ],
    },
    {
      title: "Analytics & BI Tools",
      icon: Zap,
      color: "from-purple-500 to-purple-600",
      integrations: [
        {
          name: "Google Analytics",
          description: "Web analytics integration",
          status: "available",
        },
        {
          name: "Tableau",
          description: "Advanced data visualization",
          status: "available",
        },
        {
          name: "Power BI",
          description: "Microsoft business intelligence",
          status: "available",
        },
        {
          name: "Looker",
          description: "Modern BI platform",
          status: "available",
        },
        {
          name: "Grafana",
          description: "Monitoring and observability",
          status: "coming-soon",
        },
        {
          name: "Custom Dashboards",
          description: "API-driven integrations",
          status: "available",
        },
      ],
    },
    {
      title: "Enterprise Systems",
      icon: Shield,
      color: "from-orange-500 to-orange-600",
      integrations: [
        {
          name: "Active Directory",
          description: "User authentication",
          status: "available",
        },
        {
          name: "LDAP",
          description: "Directory services",
          status: "available",
        },
        {
          name: "SAML SSO",
          description: "Single sign-on",
          status: "available",
        },
        {
          name: "Slack",
          description: "Team communication",
          status: "available",
        },
        {
          name: "Microsoft Teams",
          description: "Collaboration platform",
          status: "available",
        },
        {
          name: "Jira",
          description: "Project management",
          status: "coming-soon",
        },
      ],
    },
  ];

  const apiFeatures = [
    {
      title: "RESTful API",
      description: "Complete REST API with comprehensive documentation",
      features: [
        "100+ endpoints",
        "Rate limiting",
        "Authentication",
        "Webhooks",
      ],
    },
    {
      title: "SDK Support",
      description: "Official SDKs for popular programming languages",
      features: ["Python SDK", "JavaScript SDK", "Java SDK", "C# SDK"],
    },
    {
      title: "Real-time Events",
      description: "WebSocket connections for live data streaming",
      features: [
        "Live notifications",
        "Real-time updates",
        "Event streaming",
        "Custom triggers",
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
              Seamless <span className="gradient-text">Integrations</span>
            </h2>
            <p className="section-subtitle">
              Connect Analysys with your existing tools and workflows. Our
              comprehensive integration ecosystem ensures smooth data flow
              across your organization.
            </p>
          </motion.div>

          {/* Integration Categories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {integrationCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-2xl p-8"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {category.integrations.map(
                      (integration, integrationIndex) => (
                        <div
                          key={integrationIndex}
                          className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">
                              {integration.name}
                            </h4>
                            <div
                              className={`w-2 h-2 rounded-full ${
                                integration.status === "available"
                                  ? "bg-green-500"
                                  : "bg-yellow-500"
                              }`}
                            ></div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {integration.description}
                          </p>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              integration.status === "available"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {integration.status === "available"
                              ? "Available"
                              : "Coming Soon"}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* API & Developer Tools */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Developer-Friendly APIs
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {apiFeatures.map((api, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {api.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{api.description}</p>
                  <div className="space-y-2">
                    {api.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Integration Workflow */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 rounded-2xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              How Integration Works
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Connect</h4>
                <p className="text-sm text-gray-600">
                  Choose from 100+ pre-built integrations or use our API
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Configure</h4>
                <p className="text-sm text-gray-600">
                  Set up data flows and automation rules
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Sync</h4>
                <p className="text-sm text-gray-600">
                  Real-time data synchronization across platforms
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Monitor</h4>
                <p className="text-sm text-gray-600">
                  Track integration health and performance
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Need a Custom Integration?
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Our integration team can build custom connectors for your
                specific tools and workflows.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                  View API Docs
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                  Contact Integration Team
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationSection;
