import styles from '@/styles/ReVOLT_Team.module.scss';

export default function Member_Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <button className={styles.sidebarButton}>SOFTWARE</button><link />
      <button className={styles.sidebarButton}>ELECTRICAL</button><link />
      <button className={styles.sidebarButton}>MECHANICAL</button><link />
      <button className={styles.sidebarButton}>BUSINESS</button><link />
      <button className={styles.sidebarButton}>Settings</button><link />
    </aside>
  );
}