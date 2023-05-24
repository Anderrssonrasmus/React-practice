'use client';

import {React, useRef, useState, useEffect, useLayoutEffect} from 'react'
import { gsap } from "gsap";
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../media/fostira.svg";

export default function Navbar() {

    // Get the root element
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    let navbarWidth = 0;

    let menu = useRef(null);
    let navbar = useRef(null);

    const [navbarState, setNavbarState] = useState({
        initial: false,
        clicked: null
    });        

    useLayoutEffect(() => {
        navbarWidth = navbar.offsetWidth;
        r.style.setProperty('--navbar-width', navbarWidth + "px");
    }, []);

    //Open close navbar
    useEffect(() => {
        if(navbarState.clicked === false) {
            // Close menu
            gsap.to(menu, {
                transform: `translatex(calc(0vw))`,
                ease: "power3.inOut",
                duration: 0.3,
                stagger: {
                    amount: 0.2
                }
            })

        } else if (navbarState.clicked === true || navbarState.clicked === true && navbarState.initial === null) {
            //Open menu
            gsap.to(menu, {
                transform: `translatex(calc(-100vw + ${rs.getPropertyValue('--navbar-width')}))`,
                ease: "power3.inOut",
                duration: 0.3,
                stagger: {
                    amount: 0.2
                }
            })
        }
    })

    const handleNavbarOpen = () => {
        if(navbarState.initial === false) {
            setNavbarState({
                initial: null,
                clicked: true
            })
            console.log(1)

        } else if (navbarState.clicked === true) {
            setNavbarState({
                clicked: !navbarState.clicked
            })
            console.log(2)

        } else if (navbarState.clicked === false) {
            setNavbarState({
                clicked: !navbarState.clicked,
            })
            console.log(3)
        }
    }

  return (
    <section className="menu"  ref={el => menu = el}>
        <div id="navbar" ref={el => navbar = el}>
            <button className='burger' onClick={handleNavbarOpen}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>
            <Image
                src={logo}
                width={49}
                alt="Picture of the author"
            />
        </div>
        <div className="menu-board">
            <ul>
                <li>
                    <Link href="/" onClick={handleNavbarOpen}>Home</Link>
                </li>
                <li>
                    <Link href="/projects" onClick={handleNavbarOpen}>Projects</Link>
                </li>
                <li>
                    <Link href="/" onClick={handleNavbarOpen}>About</Link>
                </li>
                <li>
                    <Link href="/" onClick={handleNavbarOpen}>Contact</Link>
                </li>
            </ul>
        </div>
    </section>
  )
}
