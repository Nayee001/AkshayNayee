import React from 'react';
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Toggler({ darkMode, handleClick }) {
  return (
    <IconButton
      onClick={handleClick}
      sx={{
        color: darkMode ? '#fff' : '#000',
        transition: 'all 250ms ease',
        ':hover': {
          transform: 'translateY(-3px)',
        },
      }}
      aria-label="Toggle dark mode"
    >
      {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
