import React, { useEffect, useState } from "react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import Style from "./Navbar.module.scss";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Toggler from "./home/Toggler";
import { Link } from "react-router-dom";
import { info } from "../info/Info";

export default function Navbar({ darkMode, handleClick }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    Splitting(); // Animate name
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
        {/* Left: Avatar + Name */}
        <Box className={Style.left}>
          <img
            src={info.selfPortrait}
            alt={`${info.firstName} ${info.lastName}`}
            className={`${Style.avatar} ${Style.shadowed}`}
          />
          <a
            href="/"
            className={`${Style.logo} ${darkMode ? Style.darkText : Style.lightText}`}
            data-splitting="chars"
          >
            {info.firstName} {info.lastName}
          </a>
        </Box>

        {/* Right: Social Icons + Toggler + Menu Button */}
        <Box className={Style.right}>
          {info.socials.map((social, i) => (
            <IconButton
              key={i}
              component="a"
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${Style.hideOnMobile} ${darkMode ? Style.darkIcon : Style.lightIcon}`}
              aria-label={social.label}
            >
              <i className={`${social.icon} ${Style.icon}`}></i>
            </IconButton>
          ))}

          <Box className={Style.togglerWrapper}>
            <Toggler darkMode={darkMode} handleClick={handleClick} />
          </Box>

          <IconButton onClick={toggleSidebar} className={Style.menuButton}>
            <DehazeIcon className={`${darkMode ? Style.darkIcon : Style.lightIcon}`} />
          </IconButton>
        </Box>
      </Box>

      {/* Sidebar Drawer */}
      <Drawer anchor="right" open={sidebarOpen} onClose={toggleSidebar}>
        <Box className={Style.sidebar} role="presentation" onClick={toggleSidebar}>
          <List>
            {navLinks.map((link, index) => (
              <ListItem button key={index}>
                <Link to={link.path} className={Style.sidebarLink}>
                  <ListItemText primary={link.name} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
