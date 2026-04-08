import { DEFAULT_IMAGES } from '../../utils/calendarUtils';
import styles from './ImagePicker.module.css';

export default function ImagePicker({ current, onSelect }) {
  return (
    <div className={styles.picker}>
      <span className={styles.label}>Quick picks</span>
      <div className={styles.thumbs}>
        {DEFAULT_IMAGES.map((img) => (
          <button
            key={img.url}
            className={`${styles.thumb} ${current === img.url ? styles.active : ''}`}
            onClick={() => onSelect(img.url)}
            title={img.label}
            aria-label={`Use ${img.label} image`}
          >
            <img src={img.url} alt={img.label} />
          </button>
        ))}
      </div>
    </div>
  );
}
