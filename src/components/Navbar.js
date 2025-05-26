// Navbar.jsx
import React, { useEffect, useState } from "react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import Style from "./Navbar.module.scss";
import { Box, IconButton, Drawer } from "@mui/material";
import Toggler from "./home/Toggler";
import { Link } from "react-router-dom";
import { info } from "../info/Info";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Navbar({ darkMode, handleClick }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      Splitting();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/portfolio" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <Box className={Style.navbar} component="nav">
      <Box className={Style.container}>
        <Box className={Style.left}>
          <img
            src={info.selfPortrait}
            alt={`${info.firstName} ${info.lastName}`}
            className={`${Style.avatar} ${Style.shadowed}`}
          />
          <a
            href="/"
            className={`${Style.logo} ${
              darkMode ? Style.darkText : Style.lightText
            }`}
            data-splitting="chars"
          >
            {info.firstName} {info.lastName}
          </a>
        </Box>

        <Box className={Style.right}>
          <IconButton
            component="a"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${Style.hideOnMobile} ${
              darkMode ? Style.darkIcon : Style.lightIcon
            }`}
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${Style.hideOnMobile} ${
              darkMode ? Style.darkIcon : Style.lightIcon
            }`}
            aria-label="Instagram"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${Style.hideOnMobile} ${
              darkMode ? Style.darkIcon : Style.lightIcon
            }`}
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>

          <Box className={Style.togglerWrapper}>
            <Toggler darkMode={darkMode} handleClick={handleClick} />
          </Box>

          {!sidebarOpen && (
            <IconButton
              onClick={toggleSidebar}
              className={Style.menuButton}
              aria-label="Open Menu"
            >
              <span className={Style.bar}></span>
              <span className={Style.bar}></span>
              <span className={Style.bar}></span>
            </IconButton>
          )}
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={sidebarOpen}
        onClose={toggleSidebar}
        PaperProps={{ className: Style.drawerPaper }}
      >
        <Box className={Style.sidebar} role="presentation">
          <Box className={Style.sidebarTop}>
            <p>
              Looking for a full-time position where I can make a meaningful
              impact through my technical and leadership abilities.
              <br />
              <br />
              Let’s <strong>connect</strong> and talk about the possibilities.
            </p>
            <Box className={Style.socialIcons}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            </Box>
          </Box>

          <Box className={Style.sidebarBottom}>
            {navLinks.map((link, index) => (
              <Link key={index} to={link.path} className={Style.sidebarNavLink}>
                {link.name}
              </Link>
            ))}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
