
import React from 'react';
import R_team_style from "@/styles/ReVOLT_Team.module.scss";

export default function ReVOLT_Home_Page() {
  return (
    <div className={R_team_style.revolt_container}>
      <div className={R_team_style.revolt_welcome}>
        <p className={R_team_style.text_style}>
          Weclome to ReVOLT Private Access
        </p>
      </div>
      <div className={R_team_style.revolt_info}>
        <p className={R_team_style.text_style}>
          Use the Navigation Bar above to access the ReVOLT Member Content
        </p>
      </div>
    </div>
  );
}