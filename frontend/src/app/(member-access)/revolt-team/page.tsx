
import React from 'react';
import revolt_style from '@/styles/ReVOLT_Team.module.scss';

export default function ReVOLT_Home_Page() {

  return (
    <div className={revolt_style.revolt_container}>
      <h1>Dashboard</h1>
      <p>This is a protected page.</p>
    </div>
  );
}
