import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../../utils/constants";

const Navigation = ({ isMobile = false, onItemClick }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClasses = isMobile
    ? "block px-4 py-2 font-medium transition-colors duration-200"
    : "relative font-medium transition-colors duration-200";

  const activeLinkClasses = isMobile
    ? "text-primary-600 bg-primary-50"
    : "text-primary-600";

  const inactiveLinkClasses = isMobile
    ? "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
    : "text-gray-700 hover:text-primary-600";

  return (
    <nav
      className={isMobile ? "py-4 space-y-2" : "flex items-center space-x-8"}
    >
      {NAV_LINKS.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          onClick={onItemClick}
          className={`${linkClasses} ${
            isActive(link.href) ? activeLinkClasses : inactiveLinkClasses
          }`}
        >
          {link.name}
          {!isMobile && isActive(link.href) && (
            <motion.div
              layoutId="activeTab"
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
