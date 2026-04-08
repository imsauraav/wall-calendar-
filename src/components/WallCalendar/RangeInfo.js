import { formatDateRange } from '../../utils/calendarUtils';
import styles from './RangeInfo.module.css';

export default function RangeInfo({ selStart, selEnd, onClear }) {
  const info = formatDateRange(selStart, selEnd);

  if (!info) {
    return (
      <div className={styles.bar}>
        <span className={styles.hint}>Click a date to start selection</span>
      </div>
    );
  }

  return (
    <div className={styles.bar}>
      <span className={styles.rangeLabel}>{info.label}</span>
      {info.days > 1 && (
        <span className={styles.badge}>{info.days} days</span>
      )}
      <button className={styles.clear} onClick={onClear} aria-label="Clear selection">✕</button>
    </div>
  );
}
