/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CopyLinkHeader } from "./Link_Function";
import hs from "@/styles/Header.module.scss";

const SideBar: React.FC = () => {

    const [sideVisible, setSideVisible] = useState<boolean>(false);
    const sideRef = useRef<HTMLDivElement>(null);

    const showSide = (): void => {
        setSideVisible(true);
    }
    const hideSide = (): void => {
        setSideVisible(false);
    }
    const handleClick = useCallback((event: MouseEvent): void => {
        if (sideRef.current && !sideRef.current.contains(event.target as Node)) {
            hideSide();
        }
    }, []); 

    useEffect(() => {
        const currentSideRef = sideRef.current; 

        if (sideVisible) {
            document.addEventListener('mousedown', handleClick);
        }
        return () => {
            if (sideVisible && currentSideRef) {
                document.removeEventListener('mousedown', handleClick);
            }
        };
    }, [sideVisible, handleClick]); 

    return (
        <div className={hs.head_side_bar} ref={sideRef}>
            {!sideVisible && (
                <button onClick={showSide} className={hs.side_bar_button_open}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            )}
            {sideVisible && (
                <button onClick={hideSide} className={hs.side_bar_button_close}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            )}
            <div className={`${hs.side_bar} ${sideVisible ? hs.visible : hs.hidden}`}>
                <Link href="/" className={hs.head_buttons} onClick={hideSide}>Home</Link>
                <Link href="/team" className={hs.head_buttons} onClick={hideSide}>Team</Link>
                <Link href="/vehicles" className={hs.head_buttons} onClick={hideSide}>Vehicles</Link>
                <Link href="/sponsor-us" className={hs.head_buttons} onClick={hideSide}>Sponsors Us</Link>

                <div className={hs.side_socials}>
                    {/* Uofc SU Link */}
                    <Link href="https://suuofc.campuslabs.ca/engage/organization/revoltev" target="_blank" rel="noopener noreferrer" className={hs.social_icons}>
                        <img src="/page_icons/uofc_icon.png" alt="SU UofC"/>
                    </Link>

                    {/* Gmail Copy Link */}
                    <CopyLinkHeader/>

                    {/* Instagram Link */}
                    <Link href="https://www.instagram.com/revolt.ev_/?hl=en" target="_blank" rel="noopener noreferrer" className={hs.social_icons}>
                        <img src="/page_icons/instagram_icon.png" alt="Instagram Icon"/>
                    </Link>

                    {/* LinkedIn Link */}
                    <Link href="https://www.linkedin.com/company/revolt-ev/about/" target="_blank" rel="noopener noreferrer" className={hs.social_icons}>
                        <img src="/page_icons/linkedin_icon.png" alt="LinkedIn Icon"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideBar;