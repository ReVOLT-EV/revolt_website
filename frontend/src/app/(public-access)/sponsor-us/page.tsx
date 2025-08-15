
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque optio amet beatae assumenda iusto animi ab fuga omnis dolore corrupti, necessitatibus maiores quos earum. Voluptates rerum commodi id molestias magni.<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quos nisi debitis quaerat illum rerum quam mollitia laudantium, tempora voluptatem quibusdam, natus inventore nobis odio repudiandae impedit ut! Enim, mollitia!
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
    title: 'DIAMOND',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis, officiis dolor quibusdam ratione veniam perspiciatis earum est a cupiditate dolores reiciendis sequi molestiae maiores expedita aspernatur corrupti dolorem magnam.',
    section: 'diamond',
  },
  {
    title: 'GOLD',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis, officiis dolor quibusdam ratione veniam perspiciatis earum est a cupiditate dolores reiciendis sequi molestiae maiores expedita aspernatur corrupti dolorem magnam.',
    section: 'gold',
  },
  {
    title: 'SILVER',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis, officiis dolor quibusdam ratione veniam perspiciatis earum est a cupiditate dolores reiciendis sequi molestiae maiores expedita aspernatur corrupti dolorem magnam.',
    section: 'silver',
  },
  {
    title: 'BRONZE',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis, officiis dolor quibusdam ratione veniam perspiciatis earum est a cupiditate dolores reiciendis sequi molestiae maiores expedita aspernatur corrupti dolorem magnam.',
    section: 'bronze',
  },
];
