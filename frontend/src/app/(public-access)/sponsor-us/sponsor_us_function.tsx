// "use client";

// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import Slider from "react-slick";

// import sponsor_style from "@/styles/Sponsor.module.scss";

// export interface SponsorSlideContent {
//     title: string;
//     body: string;
//     section: string;
// }
// export interface SponsorTextSliderProps {
//     slides: SponsorSlideContent[];
// }
// export const ReVOLT_SponsorInfoSlider: React.FC<SponsorTextSliderProps> = ({ slides }) => {
//     const sliderRef = useRef<Slider>(null);
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [openSection, setOpenSection] = useState<string | null>(null);
//     const modalRef = useRef<HTMLDivElement | null>(null);

//     const settings = {
//         dots: false, infinite: true, speed: 500,
//         slidesToShow: 1, slidesToScroll: 1, arrows: true,
//         autoplay: false, 
//         afterChange: (current: number) => setCurrentSlide(current),
//         responsive: [
//         {
//             breakpoint: 1275, // px width
//             settings: {
//                 arrows: false // hide arrows on smaller screens
//             }
//         }
//     ]
//     };

//     const goToSlide = (index: number) => {
//         if (sliderRef.current) {
//             sliderRef.current.slickGoTo(index);
//         }
//     }

//     const sponsorMembers: Record<string, { name: string; img: string }[]> = {
//         diamond: [
//             { name: "Tirta", img: "/team_page_media/biz_team/Tirta.png" },
//             { name: "Kawthar", img: "/team_page_media/biz_team/Kawthar.png" },
//             { name: "Moyo", img: "/team_page_media/biz_team/Moyo.png" }
            
//         ],
//         gold: [
//             { name: "Qasim", img: "/team_page_media/mech_team/Qasim.png" },
//             { name: "EJ", img: "/team_page_media/mech_team/EJ.png" },
//             { name: "Kassem", img: "/team_page_media/mech_team/Kassem.png" },
//         ],
//         silver: [
//             { name: "Tanveer", img: "/team_page_media/elec_team/Tanveer.png" },
//             { name: "Rostom", img: "/team_page_media/elec_team/Rostom.png" },
//             { name: "Nadithi", img: "/team_page_media/elec_team/Nadithi.png" },
//         ],
//         bronze: [
//             { name: "Siem", img: "/team_page_media/soft_team/Siem.png" },
//             { name: "Usman", img: "/team_page_media/soft_team/Usman.png" },
//             { name: "Matthew", img: "/team_page_media/soft_team/Matthew.png" },
//         ]
//     };

//     return (
//         <div className={sponsor_style.block}>


//             <div className={sponsor_style.content_slider}>
//                 <Slider {...settings} ref={sliderRef}>
//                     {slides.map((slide, index) => (
//                         <div key={index} className={sponsor_style.slide}>
//                             <div className={sponsor_style.slide_content}>
//                                 <div className={sponsor_style.text_section}>
//                                     <h2>{slide.title}</h2>
//                                     <p>{slide.body}</p>
//                                 </div>
//                                 <div className={sponsor_style.button_section}>
//                                     <div className={sponsor_style.button}>
//                                         <button
//                                             className={sponsor_style.button_style}
//                                             onClick={() => setOpenSection(slide.section)}
//                                         >
//                                         View Sponsors
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//                 <div className={sponsor_style.custom_dots}>
//                     {slides.map((_, index) => (
//                         <button
//                             key={index}
//                             className={`${sponsor_style.dot} ${currentSlide === index ? sponsor_style.active : ''}`}
//                             onClick={() => goToSlide(index)}
//                         />
//                     ))}
//                 </div>
//             </div>


//             {openSection && (
//                 <div className={sponsor_style.overlay}>
//                     <div className={sponsor_style.modal} ref={modalRef}>
//                         <button
//                             className={sponsor_style.closeBtn}
//                             onClick={() => setOpenSection(null)}
//                         >
//                             x
//                         </button>
//                         <h2>{openSection.charAt(0).toUpperCase() + openSection.slice(1)} Team:</h2>
//                         <div className={sponsor_style.member_list}>
//                             {sponsorMembers[openSection]?.map((member, idx) => (
//                                 <div key={idx} className={sponsor_style.member_card}>
//                                     <Image
//                                         src={member.img}
//                                         alt={member.name}
//                                         width={200}
//                                         height={200}
//                                         className={sponsor_style.member_img}
//                                     />
//                                     <div className={sponsor_style.member_info}>
//                                         <strong>{member.name}</strong>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             )}


//         </div>
//     );
// };






"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import sponsor_style from "@/styles/Sponsor.module.scss";
import "slick-carousel/slick/slick.css";       // ✅ Must be imported globally or here
import "slick-carousel/slick/slick-theme.css"; // ✅ Prevents broken reload styling

export interface SponsorSlideContent {
  title: string;
  body: string;
  section: string;
}
export interface SponsorTextSliderProps {
  slides: SponsorSlideContent[];
}

export const ReVOLT_SponsorInfoSlider: React.FC<SponsorTextSliderProps> = ({ slides }) => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1275,
        settings: {
          arrows: false
        }
      }
    ]
  };

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  const sponsorMembers: Record<string, { name: string; img: string }[]> = {
    diamond: [
      { name: "Schulich", img: "/sponsor_us_page_media/diamond/uofc_schulich.png" },
      { name: "August Electronics", img: "/sponsor_us_page_media/diamond/august_electronics.png" },
    ],
    gold: [
      { name: "CNOOC", img: "/sponsor_us_page_media/gold/cnooc.png" },
    ],
    silver: [
      { name: "Protocase", img: "/sponsor_us_page_media/silver/protocase.png" },
      { name: "OnShape", img: "/sponsor_us_page_media/silver/onshape.png" },
      { name: "Altium", img: "/sponsor_us_page_media/silver/altium.png" },
    ]
  };

  return (
    <div className={sponsor_style.smcb2}>
      <div className={sponsor_style.slider_block}>
        <div className={sponsor_style.content_section}>
          <div className={sponsor_style.block}>
            <div className={sponsor_style.content_slider}>
              <Slider {...settings} ref={sliderRef}>
                {slides.map((slide, index) => (
                  <div key={index} className={sponsor_style.slide}>
                    <div className={sponsor_style.slide_content}>
                      <div className={sponsor_style.text_section}>
                        <h2>{slide.title}</h2>
                        <p>{slide.body}</p>
                      </div>
                      <div className={sponsor_style.button_section}>
                        <div className={sponsor_style.button}>
                          <button
                            className={sponsor_style.button_style}
                            onClick={() => setOpenSection(slide.section)}
                          >
                            View Sponsors
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <div className={sponsor_style.custom_dots}>
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`${sponsor_style.dot} ${
                      currentSlide === index ? sponsor_style.active : ""
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>

            {openSection && (
              <div className={sponsor_style.overlay}>
                <div className={sponsor_style.modal} ref={modalRef}>
                  <button
                    className={sponsor_style.closeBtn}
                    onClick={() => setOpenSection(null)}
                  >
                    x
                  </button>
                  <h2>
                    {openSection.charAt(0).toUpperCase() + openSection.slice(1)} Sponsors:
                  </h2>
                  <div className={sponsor_style.member_list}>
                    {sponsorMembers[openSection]?.map((member, idx) => (
                      <div key={idx} className={sponsor_style.member_card}>
                        <Image
                          src={member.img}
                          alt={member.name}
                          width={300}
                          height={300}
                          className={sponsor_style.member_img}
                        />
                        {/* <div className={sponsor_style.member_info}>
                          <strong>{member.name}</strong>
                        </div> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
