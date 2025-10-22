"use client";

import React, {useState, useRef} from "react";
import Slider from "react-slick";
import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import home_style from "@/styles/Home.module.scss";

/*
--------------------------------
About Us Content
--------------------------------
*/
export interface HomeSlideContent {
    title: string;
    body: string;
    img: string;
}
export interface HomeTextSliderProps {
    slides: HomeSlideContent[];
}
export const ReVOLT_HomeInfoSlider: React.FC<HomeTextSliderProps> = ({ slides }) => {
    const sliderRef = useRef<Slider>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false, infinite: true, speed: 500,
        slidesToShow: 1, slidesToScroll: 1, arrows: true,
        autoplay: false,
        afterChange: (current: number) => setCurrentSlide(current),
        responsive: [
        {
            breakpoint: 1275, // px width
            settings: {
                arrows: false // hide arrows on smaller screens
            }
        }
    ]
    };

    const goToSlide = (index: number) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };

    return (
        <div className={home_style.content_slider}>
            <Slider {...settings} ref={sliderRef}>
                {slides.map((slide, index) => (
                    <div key={index} className={home_style.slide}>
                        <div className={home_style.slide_content}>
                            <div className={home_style.text_section}>
                                <h2>{slide.title}</h2>
                                <p>{slide.body}</p>
                            </div>
                            <div className={home_style.image_section}>
                                <Image 
                                    width={500} height={500}
                                    src={slide.img} alt={slide.title} />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
             <div className={home_style.custom_dots}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${home_style.dot} ${currentSlide === index ? home_style.active : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

