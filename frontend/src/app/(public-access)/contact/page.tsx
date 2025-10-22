
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
                         If you would like to reach out to us or have any questions about the club (applications, operations, etc), please fill out the form below and we will try to get back to you as soon as possible. If you wish to contact us on mobile devices, copy the email address located at the bottom of the page.
                    </p>
                </div>
                <div className={contact_style.text_section2}>
                    <p className={contact_style.text_style}>
                        Note: The form is for serious inquires only. Spam and inappropriate language will not be tolerated and will be dealt with accordingly.
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