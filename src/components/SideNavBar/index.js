import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sidenavbar.scss";

const routes = [
  {
    id: 1,
    path: "/",
    name: "Dashboard",
    icon: <i className="bi bi-house-door icon"></i>,
  },
  {
    id: 2,
    path: "/content-management",
    name: "Content Management",
    icon: <i className="bi bi-window-fullscreen icon"></i>,
  },
  {
    id: 3,
    path: "/courses",
    name: "Courses",
    icon: <i className="bi bi-journal-text icon"></i>,
  },
];

const SideNavBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "200px" : "45px",

          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className="sidebar"
      >
        <div className="top_section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                SiddhantApp
              </motion.h1>
            )}
          </AnimatePresence>

          <div className="bars">
            <i className="bi bi-list bar-icon" onClick={toggle}></i>
          </div>
        </div>
        <section className="routes">
          {routes.map((route) => {
            return (
              <NavLink to={route.path} key={route.id} className="link">
                <div className="iconContainer">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default SideNavBar;
