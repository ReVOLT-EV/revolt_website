import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/ReVOLT_Team.module.scss';
import { userInfo } from 'os';

export default async function TeamLayout({ children }: { children: ReactNode }) {
  // IMPORTANT: val must always be set to 1 for PRODUCTION. 
  // Otherwise set to 0 when in DEVELOPMENT mode
  const val = 1;

  return (
    <>
      {val ? (
        <ProtectedRoute>
          <div className={styles.container}>
            <header className={styles.header}>
            </header>
            
            <main className={styles.main}>
              <div className={styles.clock}>Hello User</div>
              
              <div className={styles.teamButtons}>
                <Link href="/revolt-team/software" className={styles.teamButton}>SOFTWARE</Link>
                <Link href="/revolt-team/electrical" className={styles.teamButton}>ELECTRICAL</Link>
                <Link href="/revolt-team/mechanical" className={styles.teamButton}>MECHANICAL</Link>
                <Link href="/revolt-team/business" className={styles.teamButton}>BUSINESS</Link>
              </div>
              
              <div className={styles.content}>
                {children}
              </div>
            </main>
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
          
          <main className={styles.main}>
            <div className={styles.clock}>Hello User</div>
            
            <div className={styles.teamButtons}>
              <Link href="/revolt-team/software" className={styles.teamButton}>SOFTWARE</Link>
              <Link href="/revolt-team/electrical" className={styles.teamButton}>ELECTRICAL</Link>
              <Link href="/revolt-team/mechanical" className={styles.teamButton}>MECHANICAL</Link>
              <Link href="/revolt-team/business" className={styles.teamButton}>BUSINESS</Link>
            </div>
            
            <div className={styles.content}>
              {children}
            </div>
          </main>
        </div>
      )}
    </>
  );
}
