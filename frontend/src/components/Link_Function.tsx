'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { setDidNavigate, getDidNavigate } from "@/utils/navigationFlag";
import Link from 'next/link';
import Image from 'next/image';
import link_function_head from "@/styles/Header.module.scss";
import link_function_foot from "@/styles/Footer.module.scss";

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

export const CustomLink: React.FC<CustomLinkProps> = ({ to, children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const hasNavigated = useRef(false);

  useEffect(() => {
    hasNavigated.current = true;
  }, []);

  const handleClicked = () => {
    if (pathname === to || !hasNavigated.current) return;
    const bars = document.getElementById('bars');
    if (!bars) return;

    setDidNavigate();

    // Start "show" animation
    bars.classList.add(link_function_head.show);

    // Delay route change until after "show" animation finishes
    setTimeout(() => {
      window.scrollTo(0, 0);
      router.push(to); // This triggers Bars.useEffect
    }, 800); // Should match the .show animation duration
  };

  const isActive = pathname === to;

  return (
    <span
      className={`${link_function_head.hb} ${isActive ? link_function_head.active : ''}`}
      onClick={handleClicked}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </span>
  );
};

export const Bars: React.FC = () => {
  const barsRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const bars = barsRef.current;
    if (!bars || !getDidNavigate()) return;

    // Delay slightly to let content paint *before* animation starts
    const startHide = setTimeout(() => {
      bars.classList.remove(link_function_head.show);
      bars.classList.add(link_function_head.hide);
      console.log("Triggering hide after route render");
    }, 100); // Wait 100ms to ensure the DOM has updated

    const cleanup = setTimeout(() => {
      bars.classList.remove(link_function_head.hide);
      console.log("Cleanup hide class");
    }, 100 + 800); // Match your hide animation duration

    return () => {
      clearTimeout(startHide);
      clearTimeout(cleanup);
    };
  }, [pathname]);

  return (
    <div id="bars" className={link_function_head.bars} ref={barsRef}>
      <div />
      <div style={{ animationDelay: "0.1s" }} />
      <div style={{ animationDelay: "0.2s" }} />
      <div style={{ animationDelay: "0.3s" }} />
      <div style={{ animationDelay: "0.4s" }} />
    </div>
  );
};

// -------------------------------------------------------------------

export const CopyLinkHeader: React.FC = () => {
    
    const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const link = "revoltevclub@gmail.com";

        navigator.clipboard.writeText(link)
            .then(() => alert("Email Copied to Clipboard!"))
            .catch(err => console.error("Failed to copy:", err));
    }

    return (
        <Link href="revoltevclub@gmail.com" onClick={handleCopy}>
            <Image 
                width={750} height={750}
                src="/page_icons/gmail_icon.png" alt="Gmail Icon"
                className={link_function_head.social_icon_head}
            />
        </Link>
    )
}

export const CopyLinkFooter: React.FC = () => {
    
    const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const link = "revoltevclub@gmail.com";

        navigator.clipboard.writeText(link)
            .then(() => alert("Email Copied to Clipboard!"))
            .catch(err => console.error("Failed to copy:", err));
    }

    return (
        <Link href="revoltevclub@gmail.com" onClick={handleCopy}>
            <Image 
                width={750} height={750}
                src="/page_icons/gmail_icon.png" alt="Gmail Icon"
                className={link_function_foot.social_icon_foot}
            />
        </Link>
    )
}

