"use client";

import React from "react";

import vehicle_style from "@/styles/Vehicle.module.scss";

export type VehicleModel = {
    type: "glb" | "gltf" | "obj" | "stl";
    src: string;
};

type BikeModelSceneProps = {
    model?: VehicleModel;
    name: string;
};

export const BikeModelScene = ({ name }: BikeModelSceneProps) => {
    return (
        <div className={vehicle_style.scene_canvas} aria-label={`${name} 3D scene placeholder`}>
            <div className={vehicle_style.scene_placeholder}>
                <span>In Development</span>
                <p>Interactive model coming soon</p>
            </div>
        </div>
    );
};
