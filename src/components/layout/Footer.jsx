import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Youtube,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
} from "lucide-react";
import { COMPANY_INFO, QUICK_LINKS, SOCIAL_LINKS } from "../../utils/contants";

const Footer = () => {
  const socialIconMap = {
    Youtube,
    Facebook,
    Twitter,
    Linkedin,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16"
        >
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-2xl font-bold font-display">
                  {COMPANY_INFO.name}
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {COMPANY_INFO.description}
              </p>
              <p className="text-gray-400 text-sm">
                Transform your broadcast monitoring workflow with AI-powered
                media intelligence.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/industries"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    News & Broadcast
                  </Link>
                </li>
                <li>
                  <Link
                    to="/industries"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    PR & Communications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/industries"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Government & NGOs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/industries"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Legal & Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/industries"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Academic Research
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact & Newsletter */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    {COMPANY_INFO.phone}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {COMPANY_INFO.address}
                  </span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="font-medium mb-3">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest updates and insights
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 text-sm"
                  />
                  <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-r-lg transition-colors duration-200">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between"
          >
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {COMPANY_INFO.copyright}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Additional Links */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-gray-800 mt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/security"
                  className="hover:text-white transition-colors duration-200"
                >
                  Security
                </Link>
                <Link
                  to="/cookies"
                  className="hover:text-white transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </div>
              <div className="text-gray-500">Made with ❤️ in Pakistan</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
