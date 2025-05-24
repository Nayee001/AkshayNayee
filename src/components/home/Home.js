import React, { useState, useEffect } from 'react';
import Style from './Home.module.scss';
import me from '../../img/akshay.jpeg';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box, IconButton } from "@mui/material";
import { info } from "../../info/Info";
import { Link } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Home() {
   const [currentPosition, setCurrentPosition] = useState(0);

   useEffect(() => {
      const positions = info.position;
      const changePosition = () => {
         setCurrentPosition((currentPosition) => (currentPosition + 1) % positions.length);
      };

      const positionInterval = setInterval(changePosition, 3000); // Change position every 3 seconds
      return () => clearInterval(positionInterval);
   }, []);

   return (
      <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'akki'} component={'img'} src={me} width={{ xs: '39vh', md: '43vh' }}
              height={{ xs: '35vh', md: '40vh' }}
              borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
         <Box>
            <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm a {info.position[currentPosition]}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
               <Link to="/blogs" className={Style.blogButton}>
                  Read Blogs
               </Link>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>

         {/* Floating Buttons */}
         {/* <Box position="fixed" bottom="2rem" right="2rem" display="flex" flexDirection="column" gap="1rem">
            <IconButton color="primary" href="#top" aria-label="Scroll to top">
               <KeyboardArrowUpIcon />
            </IconButton>
            <IconButton color="secondary" href="mailto:akshaynayee1@gmail.com" aria-label="Send email">
               <EmailIcon />
            </IconButton>
            <IconButton color="success" href="tel:+18045044741" aria-label="Call Akshay">
               <PhoneIcon />
            </IconButton>
         </Box> */}
      </Box>
   );
}
