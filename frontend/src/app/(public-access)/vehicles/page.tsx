import React from "react";

import { PopInSection } from "@/components/PageFunctions";
import { VehicleCard, vehicles } from "./vehicle_functions";

import vehicle_style from "@/styles/Vehicle.module.scss";

const Vehicle_Main_Top = () => {
    return (
        <section className={vehicle_style.vehicle_main_top}>
            <div className={vehicle_style.video_background}>
                <video autoPlay muted loop playsInline>
                    <source src="/vehicle_page_media/vehicle_page_video.mp4" type="video/mp4" />
                </video>
                <div className={vehicle_style.overlay_content}>
                    <p>ReVOLT Garage</p>
                    <h1>Vehicles</h1>
                </div>
            </div>
        </section>
    );
};

const Vehicle_Intro = () => {
    return (
        <PopInSection>
            <section className={vehicle_style.vehicle_intro}>
                <div className={vehicle_style.intro_block}>
                    <p className={vehicle_style.kicker}>Our Builds</p>
                    <h2>Built for Performance. Powered by Innovation.</h2>
                    <p>
                        Explore ReVOLT’s electric vehicle projects designed for competition,
                        research, and the future of sustainable transportation.
                    </p>
                </div>
            </section>
        </PopInSection>
    );
};

const Vehicle_List = () => {
    return (
        <section className={vehicle_style.vehicle_list}>
            {vehicles.map((vehicle, index) => (
                <PopInSection key={vehicle.id}>
                    <VehicleCard vehicle={vehicle} index={index} />
                </PopInSection>
            ))}
        </section>
    );
};

export default function Vehicles_Main() {
    return (
        <>
            <Vehicle_Main_Top />
            <div className={vehicle_style.empty_block} />
            <Vehicle_Intro />
            <div className={vehicle_style.empty_block} />
            <Vehicle_List />
            <div className={vehicle_style.empty_block_bottom} />
        </>
    );
}
