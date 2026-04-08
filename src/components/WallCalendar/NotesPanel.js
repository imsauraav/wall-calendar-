import { MONTH_NAMES } from '../../utils/calendarUtils';
import styles from './NotesPanel.module.css';

export default function NotesPanel({ year, month, note, onChange, allNotes, selStart, selEnd }) {
  const rangeNote = selStart
    ? allNotes.find(n => n.year === year && n.month === month)
    : null;

  return (
    <div className={styles.panel}>
      {allNotes.length > 0 && (
        <div className={styles.tagRow}>
          {allNotes.map(n => (
            <span key={`${n.year}-${n.month}`} className={styles.tag}>
              {MONTH_NAMES[n.month].slice(0,3)} {n.year}
            </span>
          ))}
        </div>
      )}
      <div className={styles.label}>
        {selStart ? 'Note for selected range' : `Notes — ${MONTH_NAMES[month]} ${year}`}
      </div>
      <div className={styles.lines}>
        {[0,1,2,3,4].map(i => <div key={i} className={styles.line} />)}
      </div>
      <textarea
        className={styles.textarea}
        value={note}
        onChange={e => onChange(e.target.value)}
        placeholder={selStart ? 'Jot down notes for this date range...' : 'Monthly notes, reminders, goals...'}
        rows={4}
        aria-label="Monthly notes"
      />
    </div>
  );
}
