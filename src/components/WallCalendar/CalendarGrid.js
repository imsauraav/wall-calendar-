import DayCell from './DayCell';
import { DAY_LABELS, getDaysInMonth, getFirstDayOfMonth, getHoliday } from '../../utils/calendarUtils';
import styles from './CalendarGrid.module.css';

export default function CalendarGrid({ year, month, today, getDayState, onDayClick, onDayHover }) {
  const firstDay = getFirstDayOfMonth(year, month);
  const daysInMonth = getDaysInMonth(year, month);
  const prevDays = getDaysInMonth(year, month - 1 < 0 ? 11 : month - 1);

  const cells = [];

  for (let i = 0; i < firstDay; i++) {
    const d = prevDays - firstDay + 1 + i;
    cells.push({ day: d, isOtherMonth: true, colIndex: i, dateVal: null });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const colIndex = (firstDay + d - 1) % 7;
    const dateVal = new Date(year, month, d).getTime();
    cells.push({ day: d, isOtherMonth: false, colIndex, dateVal });
  }

  const remaining = cells.length % 7 === 0 ? 0 : 7 - (cells.length % 7);
  for (let i = 1; i <= remaining; i++) {
    cells.push({ day: i, isOtherMonth: true, colIndex: (cells.length) % 7, dateVal: null });
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        {DAY_LABELS.map((l, i) => (
          <span key={l} className={`${styles.label} ${i === 5 ? styles.sat : ''} ${i === 6 ? styles.sun : ''}`}>{l}</span>
        ))}
      </div>
      <div className={styles.grid}>
        {cells.map((cell, idx) => {
          const isToday = !cell.isOtherMonth &&
            year === today.getFullYear() && month === today.getMonth() && cell.day === today.getDate();
          const holiday = cell.isOtherMonth ? null : getHoliday(month, cell.day);
          const state = cell.dateVal ? getDayState(cell.dateVal) : 'none';
          return (
            <DayCell
              key={idx}
              day={cell.day}
              colIndex={cell.colIndex}
              isToday={isToday}
              holiday={holiday}
              state={state}
              isOtherMonth={cell.isOtherMonth}
              onClick={cell.dateVal ? () => onDayClick(cell.dateVal) : undefined}
              onMouseEnter={cell.dateVal ? () => onDayHover(cell.dateVal) : undefined}
            />
          );
        })}
      </div>
    </div>
  );
}
