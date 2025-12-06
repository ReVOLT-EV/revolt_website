import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '@/components/Member_Sidebar';

import styles from '@/styles/ReVOLT_Team.module.scss';
import { userInfo } from 'os';

export default async function TeamLayout({ children }: { children: ReactNode }) {
  // IMPORTANT: val must always be set to 1 for PRODUCTION. 
  // Otherwise set to 0 when in DEVELOPMENT mode
  const val = 0;

  return (
    <>
      {val ? (
        <ProtectedRoute>
          <div className={styles.container}>
            <header className={styles.header}>
            </header>
            
            <div className={styles.layoutWrapper}>
              <Sidebar />
              
              <main className={styles.main}>
                <div className={styles.clock}>Hello User</div>
                
                <div className={styles.content}>
                  {children}
                </div>
              </main>
            </div>
          </div>
        </ProtectedRoute>
      ) : (
        <div className={styles.container}>
          <header className={styles.header}>
            <Image
              src="/page_icons/ReVolt_Logo_White.png"
              alt="ReVOLT Logo"
              width={150}
              height={50}
              priority
            />
          </header>
          
          <div className={styles.layoutWrapper}>
            <Sidebar />
            
            <main className={styles.main}>
              <div className={styles.clock}>Hello User</div>
          
              <div className={styles.content}>
                {children}
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
}