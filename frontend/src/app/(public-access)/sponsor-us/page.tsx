
import React from "react";
import { PDF_Download, PopInSection } from "@/components/PageFunctions";
import { PDF_Preview } from "@/components/PageFunctions";
import { ReVOLT_SponsorInfoSlider } from "./sponsor_us_function";

import sponsor_style from "@/styles/Sponsor.module.scss"

const Sponsor_Main_Top = () => {
    return (
        <div className={sponsor_style.sponsor_main_top}>
            <div className={sponsor_style.title_block}>
                <div className={sponsor_style.text_area}>
                    <div className={sponsor_style.text}>
                        <p className={sponsor_style.text_style}>Support The Team</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Sponsor_Main_Content_Block_1 = () => {
    return (
        <PopInSection>
            <div className={sponsor_style.smcb1}>
                <div className={sponsor_style.content_block}>
                    <div className={sponsor_style.text_area}>
                        <div className={sponsor_style.text}>
                            <h2 className={sponsor_style.title}>Interested In Becoming A Sponsor</h2>
                            <p className={sponsor_style.text_style}>
                                Partner with ReVOLT, the University of Calgary’s electric motorcycle design team, and help us push the boundaries of sustainable engineering. Sponsors gain exclusive perks, including brand exposure, recognition on our bike and opportunities to connect with a talented, innovative team. Join us in transforming traditional motorcycles into high-performance electric machines while showcasing your support for cutting-edge technology and sustainability.
                                <br/><br/>
                                Check out the current sponsors below and the sponsorship package to get more details.
                            </p>
                        </div>
                    </div>
                    <div className={sponsor_style.pdf_area}>
                        <div className={sponsor_style.pdf_preview}>
                            <PDF_Preview />
                        </div>
                        <div className={sponsor_style.pdf_button}>
                            <PDF_Download />
                        </div>
                    </div>
                </div>
            </div>
        </PopInSection>
    );
};

const Sponsor_Main_Content_Block_2 = () => {
    return (
        <PopInSection>
            <div className={sponsor_style.smcb2}>
                <div className={sponsor_style.slider_block}>
                    <div className={sponsor_style.content_section}>
                        <ReVOLT_SponsorInfoSlider slides={slides}/>
                    </div>
                </div>
            </div>
        </PopInSection>
    );
};

export default function SponsorUs_Main() {
    return (
        <>
            <Sponsor_Main_Top/>
            <div className={sponsor_style.empty_block} />
            <Sponsor_Main_Content_Block_1/>
            <div className={sponsor_style.empty_block} />
            <Sponsor_Main_Content_Block_2/>
            <div className={sponsor_style.empty_block} />
        </>
    );
};



/*
-------------------------------
Content Data
-------------------------------
*/

const slides = [
  {
    title: 'DIAMOND 💎',
    body: 'Enjoy all Gold benefits plus a large logo display, enterprise level Career Fair perks, and free access to all ReVOLT events. This tier offers maximum visibility and engagement for sponsors who want to make a major impact and support sustainable innovation in electric vehicle technology.',
    section: 'diamond',
  },
  {
    title: 'GOLD 🥇',
    body: 'Receive all Silver benefits plus a medium sized logo showcase, enhanced Career Fair presence with corporate perks, and the opportunity to send representatives to a dedicated networking event. Ideal for companies seeking stronger engagement with our team and the university community.',
    section: 'gold',
  },
  {
    title: 'SILVER 🥈',
    body: 'Support ReVOLT and gain visibility with a small logo on our bike, recognition during Clubs Week, and basic Career Fair perks. Perfect for those looking to contribute and gain initial exposure within the university community.',
    section: 'silver',
  }
];
