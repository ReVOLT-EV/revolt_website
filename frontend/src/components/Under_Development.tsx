"use client";

import React from "react";

import ud_style from "@/styles/U-D.module.scss";

export default function Under_Development() {
    return (
        <div className={ud_style.ud_container}>
            <div className={ud_style.top_div}>
                <div className={ud_style.left_top}>
                    <p>TOP EMPTY BLOCK</p>
                </div>
                <div className={ud_style.center_top}>
                    <p>TOP EMPTY BLOCK</p>
                </div>      
                <div className={ud_style.right_top}>
                    <p>TOP EMPTY BLOCK</p>
                </div>
            </div>
            <div className={ud_style.center_div}>
                <div className={ud_style.left_center}>
                    <p>LEFT EMPTY BLOCK</p>
                </div>
                <div className={ud_style.center_center}>
                    <h1 className={ud_style.text_style}>Page Under Development: Come Back Soon</h1>
                </div>
                <div className={ud_style.right_center}>
                    <p>RIGHT EMPTY BLOCK</p>
                </div>
            </div>
            <div className={ud_style.bottom_div}>
                <div className={ud_style.left_bottom}>
                    <p>BOTTOM EMPTY BLOCK</p>
                </div>
                <div className={ud_style.center_bottom}>
                    <p>BOTTOM EMPTY BLOCK</p>
                </div>      
                <div className={ud_style.right_bottom}>
                    <p>BOTTOM EMPTY BLOCK</p>
                </div>
            </div>
        </div>
    );
};