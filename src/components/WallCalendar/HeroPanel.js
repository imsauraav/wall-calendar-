import { useRef } from 'react';
import { MONTHS, MONTH_NAMES } from '../../utils/calendarUtils';
import styles from './HeroPanel.module.css';

export default function HeroPanel({ year, month, onPrev, onNext, heroSrc, onHeroChange }) {
  const fileRef = useRef();

  function handleFile(e) {
    const f = e.target.files[0];
    if (!f) return;
    onHeroChange(URL.createObjectURL(f));
  }

  return (
    <div className={styles.panel}>
      <div className={styles.heroWrap} onClick={() => fileRef.current.click()}>
        <img src={heroSrc} alt="Month hero" className={styles.heroImg} />
        <div className={styles.overlay}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
          </svg>
          <span>Change photo</span>
        </div>
        <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} />
      </div>

      <div className={styles.badge}>
        <div className={styles.shapeLeft} />
        <div className={styles.shapeRight} />
        <div className={styles.badgeContent}>
          <div className={styles.year}>{year}</div>
          <div className={styles.monthName}>{MONTHS[month]}</div>
        </div>
      </div>

      <div className={styles.navRow}>
        <button className={styles.navBtn} onClick={onPrev} aria-label="Previous month">&#8249;</button>
        <span className={styles.navLabel}>{MONTH_NAMES[month]} {year}</span>
        <button className={styles.navBtn} onClick={onNext} aria-label="Next month">&#8250;</button>
      </div>
    </div>
  );
}
