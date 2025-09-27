"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

import team_style from "@/styles/Team.module.scss";

export const TeamLayout = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const teamMembers: Record<string, { name: string; role: string; img: string }[]> = {
        business: [
            { name: "Tirta Kusjanto",           role: "Business Lead",          img: "/team_page_media/biz_team/Tirta Kusjanto.JPG" },
            { name: "Akila Fernando",           role: "Business Member",        img: "/team_page_media/biz_team/Akila.JPG" },
            { name: "Janelle Angela Ruiz",      role: "Business Member",        img: "/team_page_media/biz_team/Janelle.JPG" },
            { name: "Manal Fatima",             role: "Business Member",        img: "/team_page_media/biz_team/Manal.JPG" },
            { name: "Roy Yang",                 role: "Business Member",        img: "/team_page_media/biz_team/Roy.JPG" },
        ],
        mechanical: [
            { name: "Qasim Chaudhary",          role: "Mechanical Lead",        img: "/revolt_logo_invert.png" },
            { name: "Nimuthu Thanthriwatte",    role: "Mechanical Lead",        img: "/team_page_media/mech_team/Nimuthu Hemachandra.JPG" },
            { name: "Kassem Jarrah",            role: "Battery Box Lead",        img: "/team_page_media/mech_team/Kassem Jarrah.JPG" },
            { name: "Aldrich James Varghese",   role: "Structrual Lead",         img: "/team_page_media/mech_team/Aldrich James Varghese.JPG" },
            { name: "Justin Abarquez",          role: "Mechnical Member",        img: "/revolt_logo_invert.png" },
            { name: "Amir El-Kassamani",        role: "Mechnical Member",        img: "/revolt_logo_invert.png" },
            { name: "Asim Salman",              role: "Mechnical Member",        img: "/team_page_media/mech_team/Asim Salman.JPG" },
            { name: "Kevin Panajoti",           role: "Mechnical Member",        img: "/team_page_media/mech_team/Kevin Panajoti.JPG" },
            { name: "Logan Kim",                role: "Mechnical Member",        img: "/team_page_media/mech_team/Logan Kim.JPG" },
            { name: "Kyan Barnett",             role: "Mechnical Member",        img: "/team_page_media/mech_team/Kyan Barnett.JPG" },
            { name: "Alex Lee",                 role: "Mechnical Member",        img: "/revolt_logo_invert.png" },
            { name: "Kiril Varakin",            role: "Mechnical Member",        img: "/revolt_logo_invert.png" },
            { name: "Mihira Patel",             role: "Mechnical Member",        img: "/team_page_media/mech_team/Mihira Patel.JPG" },
            { name: "Emma Mantilla",            role: "Mechnical Member",        img: "/team_page_media/mech_team/Emma Mantilla.JPG" },
            { name: "Noah Li",                  role: "Mechnical Member",        img: "/team_page_media/mech_team/Noah Li.JPG" },
        ],
        electrical: [
            { name: "Ibrahim Khalid",           role: "Electrical Lead",        img: "/revolt_logo_invert.png" },
            { name: "Yu Xiang Sun",             role: "Electrical Lead",        img: "/team_page_media/elec_team/Yu Xiang Sun.JPG" },
            { name: "Savaarna Mitra",           role: "Electrical Member",        img: "/team_page_media/elec_team/Savaarna.JPG" },
            { name: "Damon Cameron",            role: "Electrical Member",        img: "/team_page_media/elec_team/Damon.JPG" },
            { name: "Nate Immerkar",            role: "Electrical Member",        img: "/team_page_media/elec_team/Nate.JPG" },
            { name: "Fredella Pang",            role: "Electrical Member",        img: "/team_page_media/elec_team/Fredella.JPG" },
            { name: "Noor Sheikh",              role: "Electrical Member",        img: "/team_page_media/elec_team/Noor.JPG" },
            { name: "Adil Ijaz",                role: "Electrical Member",        img: "/team_page_media/elec_team/Adil_Ijaz.JPG" },
            { name: "Joseph Kingdon",           role: "Electrical Member",        img: "/team_page_media/elec_team/Joseph.JPG" },
            // { name: "",           role: "Electrical Member",        img: "/team_page_media/elec_team/Joseph.JPG" },
            // { name: "",           role: "Electrical Member",        img: "/team_page_media/elec_team/Joseph.JPG" },
        ],
        software: [
            { name: "Siem Debesay",             role: "Director",               img: "/team_page_media/soft_team/Siem Debesay.JPG" },
            { name: "Usman Mahmood",            role: "Software Lead",          img: "/team_page_media/soft_team/Usman Mahmood.JPG" },
            { name: "Kawthar Aroua",            role: "Software Member",        img: "/team_page_media/soft_team/Kawthar.JPG" },
            { name: "Liam Mercier",             role: "Software Member",        img: "/team_page_media/soft_team/Liam.JPG" },
            { name: "Hania Aamir",              role: "Software Member",        img: "/team_page_media/soft_team/Hania.JPG" },
            { name: "Jacob Terlesky",           role: "Software Member",        img: "/team_page_media/soft_team/Jacob.JPG" },
            { name: "Farhad Alizada",           role: "Software Member",        img: "/team_page_media/soft_team/Farhad.JPG" },
        ] 
    };

    return (
        <div className={team_style.block_section}>


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
                                    <div className={team_style.img_container}>
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            width={200}
                                            height={200}
                                            className={team_style.member_img}
                                        />
                                    </div>
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