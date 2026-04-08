import styles from './DayCell.module.css';

export default function DayCell({ day, colIndex, isToday, holiday, state, isOtherMonth, onClick, onMouseEnter }) {
  const isSat = colIndex === 5;
  const isSun = colIndex === 6;

  const classNames = [
    styles.day,
    isOtherMonth ? styles.otherMonth : '',
    isToday && !isOtherMonth ? styles.today : '',
    isSat && !isOtherMonth ? styles.sat : '',
    isSun && !isOtherMonth ? styles.sun : '',
    holiday && !isOtherMonth ? styles.holiday : '',
    state === 'start' ? styles.selStart : '',
    state === 'end' ? styles.selEnd : '',
    state === 'single' ? styles.selSingle : '',
    state === 'range' ? styles.inRange : '',
  ].filter(Boolean).join(' ');

  const isSelected = state === 'start' || state === 'end' || state === 'single';

  return (
    <div
      className={classNames}
      onClick={isOtherMonth ? undefined : onClick}
      onMouseEnter={isOtherMonth ? undefined : onMouseEnter}
      title={holiday || undefined}
      role={isOtherMonth ? undefined : 'button'}
      tabIndex={isOtherMonth ? -1 : 0}
      aria-label={holiday ? `${day}, ${holiday}` : String(day)}
      aria-pressed={isSelected}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
    >
      <span className={styles.num}>{day}</span>
      {holiday && !isOtherMonth && <span className={styles.dot} />}
    </div>
  );
}
