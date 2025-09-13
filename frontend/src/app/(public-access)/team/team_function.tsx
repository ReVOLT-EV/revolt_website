"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

import team_style from "@/styles/Team.module.scss";

export const TeamLayout = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const teamMembers: Record<string, { name: string; role: string; img: string }[]> = {
        business: [
            { name: "Tirta", role: "Business Lead", img: "/team_page_media/biz_team/Tirta.png" },
            { name: "Kawthar", role: "Business Member", img: "/team_page_media/biz_team/Kawthar.png" },
            { name: "Moyo", role: "Business Member", img: "/team_page_media/biz_team/Moyo.png" }
        ],
        mechanical: [
            { name: "Qasim", role: "Mechanical Lead", img: "/team_page_media/mech_team/Qasim.png" },
            { name: "EJ", role: "Mechanical Member", img: "/team_page_media/mech_team/EJ.png" },
            { name: "Kassem", role: "Mechanical Member", img: "/team_page_media/mech_team/Kassem.png" },
            { name: "Matei", role: "Mechanical Member", img: "/team_page_media/mech_team/Matei.png" },
            { name: "Masroor", role: "Mechanical Member", img: "/team_page_media/mech_team/Masroor.png" },
            { name: "Luis", role: "Mechanical Member", img: "/team_page_media/mech_team/Luis.png" },
            { name: "Aldrich", role: "Mechanical Member", img: "/team_page_media/mech_team/Aldrich.png" }
        ],
        electrical: [
            { name: "Nadithi", role: "Engineering Manager", img: "/team_page_media/elec_team/Nadithi.png" },
            { name: "Tem", role: "Director", img: "/team_page_media/elec_team/Tem.png" },
            { name: "Ibrahim", role: "Electrical Lead", img: "/team_page_media/elec_team/Ibrahim.png" },
            { name: "Tanveer", role: "Electrical Member", img: "/team_page_media/elec_team/Tanveer.png" },
            { name: "Rostom", role: "Electrical Member", img: "/team_page_media/elec_team/Rostom.png" },
            { name: "Zarak", role: "Electrical Member", img: "/team_page_media/elec_team/Zarak.png" },
            { name: "Spencer", role: "Electrical Member", img: "/team_page_media/elec_team/Spencer.png" },
            { name: "Shaheer", role: "Electrical Member", img: "/team_page_media/elec_team/Shaheer.png" },
            { name: "Anthony", role: "Electrical Member", img: "/team_page_media/elec_team/Anthony.png" },
        ],
        software: [
            { name: "Siem", role: "Director", img: "/team_page_media/soft_team/Siem.png" },
            { name: "Usman", role: "Full-Stack Member", img: "/team_page_media/soft_team/Usman.png" },
            { name: "Matthew", role: "Embedded Member", img: "/team_page_media/soft_team/Matthew.png" },
            { name: "Mellisa", role: "Embedded Member", img: "/team_page_media/soft_team/Mellisa.png" },
            { name: "Austin", role: "Embedded Member", img: "/team_page_media/soft_team/Austin.png" }
        ]
    };

    return (
        <div className={team_style.block}>


            <div className={team_style.team_section}>
                <div className={team_style.row1}>
                    <div className={team_style.biz_section}>
                        <button 
                            className={team_style.button}
                            onClick={() => setOpenSection("business")}
                        >
                            <Image
                                width={400} height={400}
                                src="/team_page_media/biz_team/BIZ.JPG" alt="Business Team"
                                className={team_style.img_style}
                            />
                            <span className={team_style.overlay_text}>Business Team</span>
                        </button>
                    </div>
                    <div className={team_style.mech_section}>
                        <button 
                            className={team_style.button}
                            onClick={() => setOpenSection("mechanical")}
                        >
                            <Image
                                width={400} height={400}
                                src="/team_page_media/mech_team/MECH.JPG" alt="Mechanical Team"
                                className={team_style.img_style}
                            />
                            <span className={team_style.overlay_text}>Mechanical Team</span>
                        </button>
                    </div>
                    {/* <div className={team_style.elec_section}>
                        <button 
                            className={team_style.button}
                            onClick={() => setOpenSection("electrical")}
                        >
                            <Image
                                width={400} height={400}
                                src="/team_page_media/elec_team/ELEC.JPG" alt="Electrical Team"
                                className={team_style.img_style}
                            />
                            <span className={team_style.overlay_text}>Electrical Team</span>
                        </button>
                    </div>
                    <div className={team_style.elec_section}>
                        <button 
                            className={team_style.button}
                            onClick={() => setOpenSection("software")}
                        >
                            <Image
                                width={400} height={400}
                                src="/team_page_media/soft_team/SOFT.JPG" alt="Software Team"
                                className={team_style.img_style}
                            />
                            <span className={team_style.overlay_text}>Software Team</span>
                        </button>
                    </div> */}
                </div>




                <div className={team_style.row2}>
                    <div className={team_style.elec_section}>
                        <button 
                            className={team_style.button}
                            onClick={() => setOpenSection("electrical")}
                        >
                            <Image
                                width={400} height={400}
                                src="/team_page_media/elec_team/ELEC.JPG" alt="Electrical Team"
                                className={team_style.img_style}
                            />
                            <span className={team_style.overlay_text}>Electrical Team</span>
                        </button>
                    </div>
                    <div className={team_style.soft_section}>
                        <button 
                            className={team_style.button}
                            onClick={() => setOpenSection("software")}
                        >
                            <Image
                                width={400} height={400}
                                src="/team_page_media/soft_team/SOFT.JPG" alt="Software Team"
                                className={team_style.img_style}
                            />
                            <span className={team_style.overlay_text}>Software Team</span>
                        </button>
                    </div>
                </div>




            </div>


            {/* Overlay Modal */}
            {openSection && (
                <div className={team_style.overlay}>
                    <div className={team_style.modal} ref={modalRef}>
                        <button
                            className={team_style.closeBtn}
                            onClick={() => setOpenSection(null)}
                        >
                            x
                        </button>
                        <h2>{openSection.charAt(0).toUpperCase() + openSection.slice(1)} Team:</h2>
                        <div className={team_style.member_list}>
                            {teamMembers[openSection]?.map((member, idx) => (
                                <div key={idx} className={team_style.member_card}>
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        width={200}
                                        height={200}
                                        className={team_style.member_img}
                                    />
                                    <div className={team_style.member_info}>
                                        <strong>{member.name}</strong>
                                        <p>{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            
        </div>
    );
}