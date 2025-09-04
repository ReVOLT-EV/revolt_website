
import React from 'react';
import Link from 'next/link';

import revolt_style from '@/styles/ReVOLT_Team.module.scss';

export default function ReVOLT_Home_Page() {
  return (
    <div className={revolt_style.revolt_container}>
      <div className={revolt_style.block}>
        <div className={revolt_style.page_1_link}>
          <div>
            <Link href="/">
              ReVOLT Systems
            </Link>
          </div>
        </div>
        <div className={revolt_style.page_2_link}>
          <div>
            <Link href="">
              ReVOLT Wiki
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}