"use client";

import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";

import popin_style from "@/styles/PageFunctions.module.scss";
import pdf_style from "@/styles/PageFunctions.module.scss";

// ----------------------
// ----------------------
// ----------------------

interface PopinProps {
    children: ReactNode;
};

export const PopInSection: FC<PopinProps> = ({ children }) => {
    // Specify ref type to allow null or an HTMLDivElement
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ref.current!); // Using the non-null assertion operator
                }
            },
            { threshold: 0.20 } // Trigger when 7.5% of the element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={` ${popin_style.pop_in} ${isVisible ? `${popin_style.pop_in_visible}` : ''}`}>
            {children}
        </div>
    );
};

// ----------------------
// ----------------------
// ----------------------

export const PDF_Preview: React.FC = () => {
    return (
        <div className={pdf_style.pdf_preview}>
            <Image
                width={500} height={1000}
                src="/sponsor_us_page_media/rs_frontpage.png" alt="PDF Front Cover"
                className={pdf_style.img_style}
            />
        </div>
    );
};

const pdfFile: string = "/sponsor_us_page_media/revolt_sponsorship_package.pdf";

export const PDF_Download: React.FC = () => {
    const openInNewTab = () => {
        window.open(pdfFile, "_blank");
    }

    return (
        <div className={pdf_style.pdf_download_button}>
            <button 
                className={pdf_style.button}
                onClick={openInNewTab}
            >
                <h3 className={pdf_style.text}>Download Package</h3>
            </button>
        </div>
    );
};