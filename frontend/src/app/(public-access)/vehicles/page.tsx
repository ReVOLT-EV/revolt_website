
import React from "react";
import { PopInSection } from "@/components/PageFunctions";
import Under_Development from "@/components/Under_Development";

import { 
    Bike_2025_2026 

} from "./vehicle_functions";

import vehicle_style from "@/styles/Vehicle.module.scss";

const Vehicle_Main_Top = () => {
    return (
        <div className={vehicle_style.vehicle_main_top}>
            <div className={vehicle_style.video_background}>
                <video autoPlay muted loop playsInline>
                    <source src="/vehicle_page_media/vehicle_page_video.mp4" type="video/mp4" />
                </video>
                <div className={vehicle_style.overlay_content}>
                    <h1>Check Out The Vehicles</h1>
                </div>
            </div>
        </div>
    );
};

const Vehicle_1 = () => {
    return (
        <PopInSection>
            <Bike_2025_2026/>
        </PopInSection>
    );
};

export default function Vehicles_Main() {
    return (
        <>
            <Vehicle_Main_Top/>
            <div className={vehicle_style.empty_block}/>
            <div style={{display: "none"}}>
                <Vehicle_1/>
            </div>
            <Under_Development />
            <div className={vehicle_style.empty_block}/>
        </>
    );
};