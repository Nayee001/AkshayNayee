import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";
// import cloudImage from '../img/cloud.png';
// import birdsImage from '../img/birds.gif';

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home',
        class: 'text-uppercase' 
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
]

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
              {/* <img src={cloudImage} alt="Floating Cloud" className={Style.cloudAnimation} />
              <img src={birdsImage} alt="my birds" className={Style.birdsAnimation} /> */}
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                         sx={{borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{padding: '0.5rem 0'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
            </Box>
        </Box>
    )
}