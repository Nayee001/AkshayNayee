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
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar({ darkMode, handleClick }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      Splitting();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    if (sidebarOpen) {
      setClosing(true);
      setTimeout(() => {
        setSidebarOpen(false);
        setClosing(false);
      }, 400);
    } else {
      setSidebarOpen(true);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/portfolio" },
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
          >
            {"Akshaykumar".split("").map((char, i) => (
              <span key={i} style={{ "--char-index": i }}>
                {char}
              </span>
            ))}
            &nbsp;
            {"Nayee".split("").map((char, i) => (
              <span key={i + 20} style={{ "--char-index": i + 20 }}>
                {char}
              </span>
            ))}
          </a>
        </Box>

        <Box className={Style.right}>
          <IconButton
            component="a"
            href={info.linkedin}
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
            href={info.instagram}
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
            href={info.socials.github}
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

          <Box
            onClick={toggleSidebar}
            className={`${Style.menuButton} ${sidebarOpen ? Style.open : ""}`}
            aria-label={sidebarOpen ? "Close Menu" : "Open Menu"}
            role="button"
          >
            <DragHandleIcon
              className={darkMode ? Style.darkIcon : Style.lightIcon}
            />
          </Box>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={sidebarOpen || closing}
        onClose={toggleSidebar}
        PaperProps={{
          className: `${Style.drawerPaper} ${
            closing ? Style.drawerPaperClosing : Style.drawerPaperOpening
          }`,
        }}
        hideBackdrop={false}
        ModalProps={{ keepMounted: true }}
      >
        <Box className={Style.sidebar} role="presentation">
          <IconButton
            onClick={toggleSidebar}
            className={Style.closeButton}
            aria-label="Close Sidebar"
          >
            <CloseIcon
              className={darkMode ? Style.darkIcon : Style.lightIcon}
            />
          </IconButton>

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
                href={info.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={info.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={info.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a href="mailto:akshaynayee1@gmail.com" aria-label="Email">
                <MailIcon />
              </a>
              <a href="tel:+18145044741" aria-label="Phone">
                <PhoneIcon />
              </a>
            </Box>
          </Box>

          <Box className={Style.sidebarBottom}>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={Style.sidebarNavLink}
                onClick={toggleSidebar}
              >
                {link.name}
              </Link>
            ))}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
