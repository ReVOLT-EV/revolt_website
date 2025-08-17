
import React from "react";
import ContactPage from "./contact_functions";

import contact_style from "@/styles/Contact.module.scss";

function Contact_Main_Top() {
    return (
        <div className={contact_style.contact_main_top}>
            <div className={contact_style.block}>
                <div className={contact_style.img_block}>
                    <div className={contact_style.img1} />
                    <div className={contact_style.img2} />
                    <div className={contact_style.img3} />
                </div>
                <div className={contact_style.title_block}>
                    <div className={contact_style.text_area}>
                        <p className={contact_style.text_style}>Contact Us</p>
                    </div>  
                </div>
            </div>
        </div>
    );
};

function Contact_Main_Block_1() {
    return (
        <div className={contact_style.cmb1}>
            <div className={contact_style.block}>
                <div className={contact_style.text_section1}>
                    <p className={contact_style.text_style}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur earum doloremque dolore nisi, sint sed, amet, harum architecto ipsam enim nihil mollitia unde quia expedita officia totam? Asperiores, explicabo.
                    </p>
                </div>
                <div className={contact_style.text_section2}>
                    <p className={contact_style.text_style}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsam. Magnam iusto excepturi autem voluptas ipsum aut? Tenetur asperiores repudiandae enim excepturi delectus harum atque debitis vel adipisci, ab blanditiis!
                    </p>
                </div>
            </div>
        </div>
    );
};

function Contact_Main_Block_2() {
    return (
        <div className={contact_style.cmb2}>
            <ContactPage/>
        </div>
    );
};

export default function Contact_Main() {
    return (
        <>
            <Contact_Main_Top/>
            <div className={contact_style.empty_block}/>
            <Contact_Main_Block_1/>
            <div className={contact_style.empty_block}/>
            <Contact_Main_Block_2/>
            <div className={contact_style.empty_block}/>
        </>
    );
};