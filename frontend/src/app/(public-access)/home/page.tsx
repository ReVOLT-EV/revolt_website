
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

function Home_Main_Content_Block_1() {
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
                                    src="/home_page_media/wwa1.jpg" alt="WWA Pic 1"
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
                                    src="/home_page_media/wwa2.jpg" alt="WWA Pic 2"
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

function Home_Main_Content_Block_2() {
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

function Home_Main_Content_Block_3() {
    return (
        <PopInSection>
            <div className={home_style.hmcb3}>
                <div className={home_style.block}>
                    <h2 className={home_style.title}>Why Join Us?</h2>
                    <div className={home_style.content}>
                        <div className={home_style.text_section}>
                            <WJU_Text />
                        </div>
                        <div className={home_style.video_img_section}>
                            {/* <div className={home_style.row1}>
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
                            </div> */}
                            <iframe
                                width=""
                                height=""
                                src="https://www.youtube.com/embed/ksU0j4Y6paA"
                                title="ReVOLT Video"
                                className={home_style.video_style}
                                allow=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </PopInSection>
    );
};

function Home_Main_Content_Block_4() {
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
            <div style={{display: 'none'}}>
                <Home_Main_Content_Block_4 />  
            </div>   
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
    title: 'PERFORMANCE',
    body: 'Performance-focused upgrades ensure maximum efficiency and power in our EV conversions. Our designs emphasize lightweight, high-performance materials for optimal speed and endurance. We fine-tune every component to achieve superior performance on the track and road.',
    img: '/home_page_media/wwfo1.png',
  },
  {
    title: 'SUSTAINABILITY',
    body: 'Sustainability is key—our projects aim to reduce carbon footprints by repurposing existing vehicles. We emphasize recyclable materials and energy-efficient designs in every project. By converting gas vehicles to electric, we reduce emissions and contribute to a cleaner future.',
    img: '/home_page_media/wwfo2.JPG',
  },
  {
    title: 'INNOVATION',
    body: 'At the forefront of ReVOLTs mission is restoration by breathing life into old vehicles. We prioritize innovation, aiming to implement untested ideas with every project we undertake. The club specializes in the transformation of gas vehicles into modern electric powertrains.',
    img: '/home_page_media/wwfo3.JPG',
  },
];



/*
-------------------------------
Content Text
-------------------------------
*/

const WWA_Text_1 = () => {
    return (
        <div className={home_style.text} style={{display:"flex", flexDirection: "row", alignItems: "center"}}>
            <p>We are ReVOLT, a club built together by a group of people who share a passion in development and innovation of electric vehicles. Ever thought about how a standard gas-powered vehicles could be converted into an all electric vehicle, while being able to improve the performance of the vehicle? ReVOLTs goal is to successfuly convert gas-powered vehicles into elctric vehicles, blending restoration with cutting-edge modernization.</p>
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
        <div className={home_style.text} style={{display:"flex", flexDirection: "row", alignItems: "center"}}>
            <p>The electric vehicles that ReVOLT creates will compete in races against other vehicles (which could range from gas-powered to electric), providing the club as a whole with results and feedback about what improvements can be made to the vehicles for future competitons. Most importantly, the club makes sure to emphasis that members should have fun with the process in the development of the various projects as that is when the person is able to perfrom and work at their best.</p>
        </div>
    );
}

const WJU_Text = () => {
    return (
    <div className={home_style.text} style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
            <p>Interested in Software/Mechanical/Electrical Engineering, Bikes, or Electric Vehicles? ReVOLT is the perfect club to join as you will have the opportunity to: .</p>
            <ul>
                <li>
                    <p>Become involved in converting Gas-Powered Vehicles into High-Performance EVs, as well as learning and getting experience with how the different Teams work (independently and together). Not sure about joining or have questions about joining, reach out to use via the contact from on the bottom of the page (if not present, the email is avaliable to copy at the bottom of the page).</p>
                </li>
                <li>
                    <p>Connect with others who share the same passion as you and interact with a variety of people. If you are just starting, this would be a great way to build connections within ReVOLT.</p>
                </li>
            </ul>
        </div>
    );
}

const PC_Text = () => {
    return (
        <div className={home_style.text} style={{display:"flex", flexDirection: "row", alignItems: "center"}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem exercitationem numquam facilis quibusdam recusandae autem, omnis voluptas obcaecati dignissimos porro iste ea laboriosam, magnam delectus ullam. Sint, similique consequuntur.</p>
        </div>
    );
}


