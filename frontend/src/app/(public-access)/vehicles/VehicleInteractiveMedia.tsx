"use client";

import React, { useState } from "react";
import Image from "next/image";

import vehicle_style from "@/styles/Vehicle.module.scss";
import { BikeModelScene } from "./BikeModelScene";

type VehicleMedia = {
    type: "image" | "video";
    src: string;
    alt: string;
};

type VehicleModel = {
    type: "glb" | "gltf" | "obj" | "stl";
    src: string;
};

type VehicleInteractiveMediaProps = {
    media?: VehicleMedia;
    model?: VehicleModel;
    name: string;
};

const VehicleMediaContent = ({ media, name }: VehicleInteractiveMediaProps) => {
    if (!media) {
        return (
            <div className={vehicle_style.media_placeholder} aria-label={`${name} media placeholder`}>
                <span>EV</span>
            </div>
        );
    }

    if (media.type === "video") {
        return (
            <video
                autoPlay
                muted
                loop
                playsInline
                className={vehicle_style.vehicle_media}
                aria-label={media.alt}
            >
                <source src={media.src} type="video/mp4" />
            </video>
        );
    }

    return (
        <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes="(max-width: 1050px) 92vw, 650px"
            className={vehicle_style.vehicle_media}
        />
    );
};

export const VehicleInteractiveMedia = ({ media, model, name }: VehicleInteractiveMediaProps) => {
    const [activeView, setActiveView] = useState<"video" | "model">("video");

    return (
        <div className={vehicle_style.interactive_media}>
            <div className={vehicle_style.media_switch} aria-label="Vehicle media view">
                <button
                    type="button"
                    className={activeView === "video" ? vehicle_style.active_switch : ""}
                    aria-pressed={activeView === "video"}
                    onClick={() => setActiveView("video")}
                >
                    Video
                </button>
                <button
                    type="button"
                    className={activeView === "model" ? vehicle_style.active_switch : ""}
                    aria-pressed={activeView === "model"}
                    onClick={() => setActiveView("model")}
                >
                    3D
                </button>
            </div>

            {activeView === "video" ? (
                <VehicleMediaContent media={media} name={name} />
            ) : (
                <BikeModelScene model={model} name={name} />
            )}
        </div>
    );
};
