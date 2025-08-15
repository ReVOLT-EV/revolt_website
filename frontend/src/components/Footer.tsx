"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CopyLinkFooter } from "./Link_Function";
import fs from "@/styles/Footer.module.scss";

export default function Footer() {
    return (
        <div className={fs.footer}>
            <div className={fs.footer_section_1}>
                <div className={fs.footer_image}>
                    <Image
                        width={1000}
                        height={1000}
                        src="/revolt_logo.png"
                        alt="ReVOLT EV Logo"
                        className={fs.footer_img}
                    />
                </div>
            </div>
            <div className={fs.footer_section_2}>
                <div className={fs.footer_text}>
                    <p className={fs.footer_text_style}>2500 University Dr NW, Calgary</p>
                    <p className={fs.footer_text_style}>Copyright © 2025 ReVOLT EV</p>
                    <p className={fs.footer_text_style}>All rights reserved</p>
                </div>
            </div>
            <div className={fs.footer_section_3}>
                <Link 
                    href="https://suuofc.campuslabs.ca/engage/organization/revoltev" 
                    target="_blank"
                    rel="noopener noreferrer" 
                >
                    <Image
                        width={750} height={750}
                        src="/page_icons/uofc_icon.png" alt="SU UofC Icon"
                        className={fs.footer_icons}
                    />
                </Link>

                <CopyLinkFooter/>

                <Link 
                    href="https://www.instagram.com/revolt.ev_/?hl=en" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        width={750} height={750}
                        src="/page_icons/instagram_icon.png" alt="Instagram Icon"
                        className={fs.footer_icons}
                    />
                </Link>

                <Link 
                    href="https://www.linkedin.com/company/revolt-ev/about/" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        width={750} height={750}
                        src="/page_icons/linkedin_icon.png" alt="LinkedIn Icon"
                        className={fs.footer_icons}
                    />
                </Link>
            </div>
            <div className={fs.footer_section_4}>
                <Link href="/contact">
                    <button className={fs.footer_button}>
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>
    );
};