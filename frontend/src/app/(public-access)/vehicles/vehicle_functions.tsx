import React from "react";
import Image from "next/image";

import vehicle_style from "@/styles/Vehicle.module.scss";

export type VehicleMedia = {
    type: "image" | "video";
    src: string;
    alt: string;
};

export type VehicleTile = {
    label: string;
    value: string;
};

export type Vehicle = {
    id: string;
    name: string;
    tagline: string;
    summary: string;
    media?: VehicleMedia;
    identity: VehicleTile[];
    specs: VehicleTile[];
    history: string[];
    pastRaces: string[];
};

// Bike object - requires unique id

export const vehicles: Vehicle[] = [
    {
        id: "bike-2025-2026",
        name: "ReVOLT  E-Bike",
        tagline: "A lightweight electric bike built as ReVOLT's first race-ready EV platform.",
        summary:
            "The ReVOLT Racing E-Bike was developed as a compact competition platform for testing battery packaging, motor control, thermal limits, and race handling before the team moves into larger EV conversions.",
        media: {
            type: "video",
            src: "/vehicle_page_media/vehicle_page_video.mp4",
            alt: "ReVOLT electric racing bike development footage",
        },
        identity: [
            { label: "Organization", value: "ReVOLT" },
            { label: "School", value: "University of Calgary" },
            { label: "Vehicle", value: "Electric racing bike" },
            { label: "Season", value: "2025-2026" },
        ],
        specs: [
            { label: "Base bike frame", value: "TBD" },
            { label: "Battery specs", value: "TBD" },
            { label: "Race results", value: "TBD" },
            { label: "Motor system", value: "TBD" },
        ],
        history: [
            "The ReVOLT E-Bike project began in early 2025  ",
            "",
            "",
        ],
        pastRaces: [
            "TBD",
        ],
    },
];

type VehicleCardProps = {
    vehicle: Vehicle;
    index: number;
};

const VehicleMediaBlock = ({ media, name }: { media?: VehicleMedia; name: string }) => {
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

export const VehicleCard = ({ vehicle, index }: VehicleCardProps) => {
    const isEven = index % 2 === 0;

    return (
        <article className={`${vehicle_style.vehicle_card} ${isEven ? vehicle_style.vehicle_card_even : vehicle_style.vehicle_card_odd}`}>
            <div className={vehicle_style.media_section}>
                <VehicleMediaBlock media={vehicle.media} name={vehicle.name} />
            </div>

            <div className={vehicle_style.content_section}>
                <h2>{vehicle.name}</h2>
                <p className={vehicle_style.tagline}>{vehicle.tagline}</p>
                <p className={vehicle_style.summary}>{vehicle.summary}</p>

                <div className={vehicle_style.spec_grid}>
                    {vehicle.specs.map((tile) => (
                        <div className={vehicle_style.spec_item} key={tile.label}>
                            <span>{tile.label}</span>
                            <strong>{tile.value}</strong>
                        </div>
                    ))}
                </div>

                <div className={vehicle_style.identity_grid}>
                    {vehicle.identity.map((tile) => (
                        <div className={vehicle_style.identity_item} key={tile.label}>
                            <span>{tile.label}</span>
                            <strong>{tile.value}</strong>
                        </div>
                    ))}
                </div>

                <details className={vehicle_style.vehicle_details}>
                    <summary>Vehicle History</summary>
                    <div className={vehicle_style.details_body}>
                        {vehicle.history.map((paragraph, historyIndex) => (
                            <p key={`${vehicle.id}-history-${historyIndex}`}>{paragraph}</p>
                        ))}
                        <div className={vehicle_style.milestone_block}>
                            <h3>Past Races</h3>
                            <ol>
                                {vehicle.pastRaces.map((race, raceIndex) => (
                                    <li key={`${vehicle.id}-race-${raceIndex}`}>{race}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </details>
            </div>
        </article>
    );
};
