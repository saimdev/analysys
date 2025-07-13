import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  TrendingUp,
  Clock,
  Users,
  Download,
  Play,
  Star,
} from "lucide-react";

const CaseStudies = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Global News Network Reduces Content Discovery Time by 85%",
      industry: "News & Broadcast",
      company: "International Broadcasting Corporation",
      challenge:
        "Manual search through 72 hours of daily content was taking news teams 4-6 hours per story, significantly delaying breaking news coverage.",
      solution:
        "Implemented Analysys AI-powered search across all 150+ news channels with real-time indexing and natural language queries.",
      results: [
        "85% reduction in content discovery time",
        "300% increase in breaking news response speed",
        "40% improvement in story accuracy",
        "92% journalist satisfaction rate",
      ],
      metrics: {
        timeSaved: "4.5 hours per story",
        channelsMonitored: "150+",
        accuracyImprovement: "40%",
        roiIncrease: "280%",
      },
      quote:
        "Analysys transformed our newsroom operations. We're now first to market with breaking stories while maintaining the highest editorial standards.",
      author: "Sarah Chen, News Director",
      image: "/images/case-studies/news-network.jpg",
      tags: ["AI Search", "Real-time Monitoring", "Breaking News"],
    },
    {
      id: 2,
      title: "Fortune 500 Company Achieves 99.5% Brand Mention Detection",
      industry: "PR & Communications",
      company: "TechCorp Industries",
      challenge:
        "Missing critical brand mentions across global media, leading to delayed crisis response and poor reputation management.",
      solution:
        "Deployed comprehensive brand monitoring across 500+ channels with sentiment analysis and real-time alerting systems.",
      results: [
        "99.5% brand mention detection rate",
        "70% faster crisis response time",
        "45% improvement in brand sentiment",
        "60% reduction in reputation risks",
      ],
      metrics: {
        detectionRate: "99.5%",
        responseTime: "15 minutes",
        sentimentImprovement: "45%",
        riskReduction: "60%",
      },
      quote:
        "The real-time alerts and sentiment analysis have been game-changing for our crisis communication strategy.",
      author: "Michael Rodriguez, Head of Communications",
      image: "/images/case-studies/fortune-500.jpg",
      tags: ["Brand Monitoring", "Sentiment Analysis", "Crisis Management"],
    },
    {
      id: 3,
      title: "Government Agency Ensures 100% Transparency Compliance",
      industry: "Government & NGOs",
      company: "Department of Public Information",
      challenge:
        "Manual archiving of policy discussions and media coverage was incomplete and time-consuming, risking compliance violations.",
      solution:
        "Automated policy discussion archiving with searchable transcripts and comprehensive audit trails for transparency reporting.",
      results: [
        "100% compliance with transparency laws",
        "90% reduction in archival time",
        "50% increase in public information requests handled",
        "Zero compliance violations in 24 months",
      ],
      metrics: {
        complianceRate: "100%",
        timeReduction: "90%",
        requestIncrease: "50%",
        violations: "0",
      },
      quote:
        "Analysys ensures we never miss a policy discussion and can respond to freedom of information requests within minutes.",
      author: "Dr. Jennifer Walsh, Information Officer",
      image: "/images/case-studies/government.jpg",
      tags: ["Compliance", "Policy Tracking", "Transparency"],
    },
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentCase(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
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

  const currentStudy = caseStudies[currentCase];

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
              Real Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="section-subtitle">
              Discover how organizations across different industries have
              transformed their media monitoring workflows with measurable
              results.
            </p>
          </motion.div>

          {/* Case Study Showcase */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Content */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                      {currentStudy.industry}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {currentStudy.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {currentStudy.company}
                    </p>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Challenge
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {currentStudy.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {currentStudy.solution}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentStudy.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 italic mb-3">
                      "{currentStudy.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {currentStudy.author}
                        </div>
                        <div className="text-sm text-gray-600">
                          {currentStudy.company}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="btn-primary flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download Full Case Study
                  </button>
                </div>

                {/* Right Content - Metrics */}
                <div className="bg-gradient-to-br from-primary-600 to-accent-600 p-8 lg:p-12 text-white">
                  <h4 className="text-2xl font-bold mb-8">Results Achieved</h4>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {Object.entries(currentStudy.metrics).map(
                      ([key, value], index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl font-bold mb-2">{value}</div>
                          <div className="text-sm opacity-80 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Detailed Results */}
                  <div className="space-y-3">
                    <h5 className="font-semibold mb-4">Detailed Impact</h5>
                    {currentStudy.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <Star className="w-4 h-4 mr-3 flex-shrink-0" />
                        <span className="text-sm">{result}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Video Testimonial */}
                  <div className="mt-8 p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium mb-1">
                          Video Testimonial
                        </div>
                        <div className="text-sm opacity-80">3:42 minutes</div>
                      </div>
                      <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                        <Play className="w-6 h-6 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevCase}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous Case</span>
              </button>

              <div className="flex space-x-2">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCase(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentCase ? "bg-primary-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextCase}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                <span>Next Case</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* All Case Studies Grid */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              More Success Stories
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    index === currentCase ? "ring-2 ring-primary-500" : ""
                  }`}
                  onClick={() => setCurrentCase(index)}
                >
                  <div className="mb-4">
                    <div className="inline-block px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium mb-3">
                      {study.industry}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {study.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {study.company}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {Object.entries(study.metrics)
                      .slice(0, 2)
                      .map(([key, value], idx) => (
                        <div
                          key={idx}
                          className="text-center p-2 bg-gray-50 rounded"
                        >
                          <div className="font-bold text-primary-600">
                            {value}
                          </div>
                          <div className="text-xs text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
