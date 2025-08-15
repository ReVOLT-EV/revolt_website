"use client";

import React from "react";

import vehicle_style from "@/styles/Vehicle.module.scss";

export const Bike_2025_2026 = () => {
    return (
        <div className={vehicle_style.vehicle_25_26}>
            <div className={vehicle_style.content_section}>

                <input 
                    id="check-1" type='checkbox'
                    className={vehicle_style.checkbox}
                
                />

                <div className={vehicle_style.subsection}>
                    <div className={vehicle_style.text_container}>
                        <h1 className={vehicle_style.title}></h1>
                        <ul className={vehicle_style.list}>
                            <li className={vehicle_style.item}>
                                <p className={vehicle_style.text_style}>

                                </p>
                            </li>
                            <li className={vehicle_style.item}>
                                <p className={vehicle_style.text_style}>

                                </p>
                            </li>
                            <li className={vehicle_style.item}>
                                <p className={vehicle_style.text_style}>

                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={vehicle_style.bike_container}>
                        {/* Bike Model Here */}
                    </div>
                </div>

                <div className={vehicle_style.expanded_subsection}>
                    <h1 className={vehicle_style.stats}>History:</h1>
                    <div className={vehicle_style.hsitory}>
                        <div className={vehicle_style.text_section}>
                            <div className={vehicle_style.text}>
                                <p className={vehicle_style.text_style}></p>
                            </div>  
                            <div className={vehicle_style.stats}>

                            </div>
                        </div>
                        <div className={vehicle_style.image_section}>

                        </div>
                    </div>
                    <label htmlFor='check-1' className={vehicle_style.collapse_box}>
                        COLLAPSE
                    </label>
                </div>

                <label htmlFor='check-1'className={vehicle_style.expand_box}>
                    EXPAND
                </label>
                
            </div>
        </div>
    );
};