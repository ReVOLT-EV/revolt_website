
import React from "react";

import { TeamLayout } from "./team_function";

import team_style from "@/styles/Team.module.scss";

export default function Team_Main() {
    return (
        <>
            <div className={team_style.team}>
                <div className={team_style.block}>
                    <div className={team_style.gap_section}></div>
                    <h2 className={team_style.title}>Meet The Team</h2>
                    <TeamLayout />
                </div>
            </div>
        </>
    );
};