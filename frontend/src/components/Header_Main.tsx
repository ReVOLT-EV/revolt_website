"use client";

import React, {useState, useEffect} from 'react';
import { CustomLink, Bars } from './Link_Function';
import { usePathname, useRouter } from 'next/navigation';
import {Outlet} from 'react-router-dom';
import Image from 'next/image';
import Link from 'next/link';

import axios from 'axios';
axios.defaults.withCredentials = true;

import SideBar from './Header_Side';
import hs from "@/styles/Header.module.scss";

const Header_Image = () => {
    return (
        <>
            <div className={hs.header_img}>
                <div className={hs.header_img_box}>
                    <Image
                        width={750}
                        height={750}
                        src="/revolt_logo_invert.png"
                        alt="ReVOLT EV Logo"
                        className={hs.img}
                    />
                </div>
            </div>
        </>
    );
}

const Header_Menu = () => {
    return (
        <nav className={hs.header_menu}>
            <ul>
                <li className={hs.header_menu_links}>
                    <CustomLink to="/">Home</CustomLink>
                </li>
                <li className={hs.header_menu_links}>
                    <CustomLink to="/team">Team</CustomLink>
                </li>
                <li className={hs.header_menu_links}>
                    <CustomLink to="/vehicles">Vehicles</CustomLink>
                </li>
                <li className={hs.header_menu_links}>
                    <CustomLink to="/sponsor-us">Sponsor Us</CustomLink>
                </li>
            </ul>
        </nav>
    );
};

const Header_Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        axios.get('https://revolt-website-logsys.onrender.com/check', { withCredentials: true })
            .then(res => {setLoggedIn(res.data.logged_in)
        });
    }, [pathname]);

    const logout = () => {
        axios.post('https://revolt-website-logsys.onrender.com/logout', {}, { withCredentials: true })
            .then(() => {
                setLoggedIn(false);
            // Immediately re-check login status before updating state
            return axios.get('https://revolt-website-logsys.onrender.com/check', { withCredentials: true });
            })
            .then(res => {
            if (!res.data.logged_in) {
                setLoggedIn(false);
                router.push('/');
            }
            })
            .catch(err => {
            console.error("Logout error", err);
            setLoggedIn(false);
            router.push('/');
        });
    };


    return (
        <div className={hs.header_login}>
            { loggedIn ? (
                <div className={hs.hl_logout}>
                    <button onClick={logout} className={hs.left}>
                        <Link href="/">
                            <Image
                                width={750} height={750}
                                src="/page_icons/logout_icon.png" alt="Logout Button"
                                className={hs.logout_button}
                            />
                        </Link>
                    </button>
                    <button className={hs.right}>
                        <Link href="/revolt-team">
                            <Image
                                width={750} height={750}
                                src="/page_icons/team_icon.png" alt="ReVOLT Team Page"
                                className={hs.team_button}
                            />
                        </Link>
                    </button>
                </div>
            ) : (
                <div className={hs.hl_login}>
                    <button>
                        <Link href="/login">
                            <Image
                                width={750} height={750}
                                src="/page_icons/login_icon.png" alt="Login Button"
                                className={hs.login_button}
                            />
                        </Link>
                    </button>
                </div>
            )}
        </div>
    );
};

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60); // adjust threshold as needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`${hs.header} ${scrolled ? hs.scrolled : ''}`}>
                <div className={hs.header_main_menu}>
                    <Header_Image />
                    <Header_Menu />
                    <Header_Login />
                </div>
                <div className={hs.header_side_menu}> 
                    <SideBar />
                </div>
            </div>
            <Bars />
            <Outlet />
        </>
    );
}

