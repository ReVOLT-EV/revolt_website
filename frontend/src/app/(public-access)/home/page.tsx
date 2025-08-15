
import React from "react";
import Image from "next/image";
import { ReVOLT_HomeInfoSlider } from "./home_functions";
import { PopInSection } from "@/components/PageFunctions";

import home_style from "@/styles/Home.module.scss";

function Home_Main_Top() {
    return (
        <div className={home_style.home_main_top}>
            <div className={home_style.title_block}>
                <div className={home_style.text_area}>
                    <div className={home_style.text_1}>
                        <p className={home_style.text_style_1}>
                            {"ReVOLT".split("").map((char, i) => (
                                <span
                                    className={home_style.letter} 
                                    data-char={char}
                                    key={i} 
                                    style={{
                                        animationDelay: `${i * 0.2}s`,
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </p>
                    </div>
                    <div className={home_style.text_2}>
                        <p className={home_style.text_style_2}>
                            University of Calgary
                        </p>
                    </div>
                </div>
                <div className={home_style.media_area}>
                    <video
                        autoPlay muted
                        loop playsInline
                        className={home_style.video_style}
                    >
                        <source src="/home_page_media/Home_Page_Title_V1.mp4" type="video/mp4" />
                        Broswer does not support the video tag
                    </video>
                </div>
            </div>
        </div>
    );
};

function Home_Main_Content_Block_1 () {
    return (
        <PopInSection>
            <div className={home_style.hmcb1}>
                <div className={home_style.block}>
                    <h2 className={home_style.title}>Who We Are</h2>
                    <div className={home_style.container_1}>
                        <div className={home_style.c1_imgs}>
                            <div className={home_style.c1i_1}>
                                <Image
                                    width={500} height={500}
                                    src="/home_page_media/test_pic1.png" alt="Test Pic"
                                    className={home_style.img_style}
                                />
                            </div>
                        </div>
                        <div className={home_style.c1_text}>
                            <WWA_Text_1 />
                        </div>
                    </div>
                    <div className={home_style.container_2}>
                        <div className={home_style.c2_text}>
                            <WWA_Text_2 />
                        </div>
                        <div className={home_style.c2_imgs}>
                            <div className={home_style.c2i_1}>
                            <Image
                                    width={500} height={500}
                                    src="/home_page_media/test_pic1.png" alt="Test Pic"
                                    className={home_style.img_style}
                                /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PopInSection>
    );
};

function Home_Main_Content_Block_2 () {
    return (
        <PopInSection>
            <div className={home_style.hmcb2}>
                <div className={home_style.block}>
                    <h2 className={home_style.title}>What We Focus On</h2>
                    <div className={home_style.content_section}>
                        <ReVOLT_HomeInfoSlider slides={slides} />
                    </div>
                </div>
            </div>
        </PopInSection>
    );
};

function Home_Main_Content_Block_3 () {
    return (
        <PopInSection>
            <div className={home_style.hmcb3}>
                <div className={home_style.block}>
                    <h2 className={home_style.title}>Why Join Us?</h2>
                    <div className={home_style.content}>
                        <div className={home_style.text_section}>
                            <WJU_Text />
                        </div>
                        <div className={home_style.img_section}>
                            <div className={home_style.row1}>
                                <div>
                                    <Image
                                        width={250} height={250}
                                        src="/home_page_media/test_pic1.png" alt="Test Pic"
                                        className={home_style.img_style}
                                    />
                                </div>
                                <div>
                                    <Image
                                        width={250} height={250}
                                        src="/home_page_media/test_pic1.png" alt="Test Pic"
                                        className={home_style.img_style}
                                    />
                                </div>
                            </div>
                            <div className={home_style.row2}>
                                <div>
                                    <Image
                                        width={250} height={250}
                                        src="/home_page_media/test_pic1.png" alt="Test Pic"
                                        className={home_style.img_style}
                                    />
                                </div>
                                <div>
                                    <Image
                                        width={250} height={250}
                                        src="/home_page_media/test_pic1.png" alt="Test Pic"
                                        className={home_style.img_style}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PopInSection>
    );
};

function Home_Main_Content_Block_4 () {
    return (
        <PopInSection>
            <div className={home_style.hmcb4}>
                <div className={home_style.block}>
                    <h2 className={home_style.title}>Planned Competition</h2>
                    <div className={home_style.content_ready}>
                        <div className={home_style.img_section}>
                            <Image 
                                width={500} height={500}
                                src="/home_page_media/test_pic1.png" alt="Test Pic"
                                className={home_style.img_style}
                            />
                        </div>
                        <div className={home_style.text_section}>
                            <PC_Text />
                        </div>
                    </div>
                    <div className={home_style.content_tba}>
                        <p>More Information On This Comming Soon</p>
                    </div>
                </div>
            </div>
        </PopInSection>
    );
}

export default function Home_Main() {
    return (
        <>
            <Home_Main_Top />
            <div className={home_style.empty_block} />
            <Home_Main_Content_Block_1 />
            <div className={home_style.empty_block} />
            <Home_Main_Content_Block_2 />
            <div className={home_style.empty_block} />
            <Home_Main_Content_Block_3 />     
            <div className={home_style.empty_block} />
            <Home_Main_Content_Block_4 />     
            <div className={home_style.empty_block} />        
        </>
    );
};


// ----------------------------
// ----------------------------
// ----------------------------



/*
-------------------------------
Content Data
-------------------------------
*/

const slides = [
  {
    title: 'INNOVATION',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis, officiis dolor quibusdam ratione veniam perspiciatis earum est a cupiditate dolores reiciendis sequi molestiae maiores expedita aspernatur corrupti dolorem magnam.',
    img: '/home_page_media/test_pic1.png',
  },
  {
    title: 'PERFORMANCE',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis, officiis dolor quibusdam ratione veniam perspiciatis earum est a cupiditate dolores reiciendis sequi molestiae maiores expedita aspernatur corrupti dolorem magnam.',
    img: '/home_page_media/test_pic1.png',
  },
  {
    title: 'SUSTAINABILITY',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis, officiis dolor quibusdam ratione veniam perspiciatis earum est a cupiditate dolores reiciendis sequi molestiae maiores expedita aspernatur corrupti dolorem magnam.',
    img: '/home_page_media/test_pic1.png',
  },
];



/*
-------------------------------
Content Text
-------------------------------
*/

const WWA_Text_1 = () => {
    return (
        <div className={home_style.text}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus ipsum quam quia, ipsam omnis, alias aspernatur doloremque, molestiae debitis sed. Accusantium corrupti accusamus recusandae officia distinctio iste voluptas sed.</p>
            {/* <ul>
                <li>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et aperiam perferendis maxime accusantium ipsum adipisci dolorem? Earum id ab veniam. Perspiciatis natus quae dolorum facere sunt ea ipsum ipsa.</p>
                </li>
                <li>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae pariatur ad similique, consequatur ipsam facere illum nihil qui ipsa ut architecto repudiandae voluptates vero laboriosam iste modi hic magnam.</p>
                </li>
                <li>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis delectus dolor ab aliquam, aspernatur sint quibusdam temporibus dolores nemo reprehenderit laudantium doloribus tenetur iusto suscipit dignissimos accusamus distinctio expedita fuga!</p>
                </li>
            </ul> */}
        </div>
   ); 
}

const WWA_Text_2 = () => {
    return (
        <div className={home_style.text}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem exercitationem numquam facilis quibusdam recusandae autem, omnis voluptas obcaecati dignissimos porro iste ea laboriosam, magnam delectus ullam. Sint, similique consequuntur.</p>
        </div>
    );
}

const WJU_Text = () => {
    return (
    <div className={home_style.text}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus ipsum quam quia, ipsam omnis, alias aspernatur doloremque, molestiae debitis sed. Accusantium corrupti accusamus recusandae officia distinctio iste voluptas sed.</p>
            <ul>
                <li>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et aperiam perferendis maxime accusantium ipsum adipisci dolorem? Earum id ab veniam. Perspiciatis natus quae dolorum facere sunt ea ipsum ipsa.</p>
                </li>
                <li>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae pariatur ad similique, consequatur ipsam facere illum nihil qui ipsa ut architecto repudiandae voluptates vero laboriosam iste modi hic magnam.</p>
                </li>
            </ul>
        </div>
    );
}

const PC_Text = () => {
    return (
        <div className={home_style.text}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem exercitationem numquam facilis quibusdam recusandae autem, omnis voluptas obcaecati dignissimos porro iste ea laboriosam, magnam delectus ullam. Sint, similique consequuntur.</p>
        </div>
    );
}


