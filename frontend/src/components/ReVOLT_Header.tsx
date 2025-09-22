"use client";

import React from "react";
import Link from "next/link";
import R_team_style from "@/styles/ReVOLT_Team.module.scss";

const ReVOLT_Header_Bar = () => {
    return (
        <div className={R_team_style.revolt_header}>
            <nav className={R_team_style.navigation}>
                <ul>
                    <li className={R_team_style.menu_links}>
                        <Link href="/revolt-team/team-systems">ReVOLT Systems</Link>
                    </li>
                    <li className={R_team_style.menu_links}>
                        <Link href="/revolt-team/team-wiki">ReVOLT Wiki</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export const ReVOLT_Header = () => {
    return (
        <ReVOLT_Header_Bar />
    );
};
