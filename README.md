# Wall Calendar — React Component

A polished, interactive wall calendar component inspired by a physical wall calendar design.

## Features

- **Wall calendar aesthetic** — hero image + month badge panel, mirroring a physical calendar layout
- **Day range selector** — click to set start, hover to preview, click again to confirm end date
- **Visual states** — distinct styles for start, end, in-range, today, Saturday, Sunday, and holidays
- **Per-month notes** — notes persist per month as you navigate; tagged pills show months with saved notes
- **5 colour themes** — Ocean, Forest, Terracotta, Lavender, Slate (updates CSS variables live)
- **Photo upload** — click the hero image to upload your own photo
- **Quick image picks** — 4 curated Unsplash photos for instant swapping
- **Holiday markers** — Indian public holidays shown with subtle dots
- **Fully responsive** — two-column desktop, stacked mobile layout
- **Dark mode** — respects `prefers-color-scheme`
- **Accessible** — keyboard navigation, ARIA roles/labels, focus rings

## Project Structure

```
src/
├── App.js
├── index.js
├── index.css                        # Design tokens & global styles
├── hooks/
│   ├── useCalendar.js               # Month nav, day selection, range state
│   ├── useNotes.js                  # Per-month notes state
│   └── useTheme.js                  # Theme switching via CSS variables
├── utils/
│   └── calendarUtils.js             # Constants, helpers (holidays, date math)
└── components/
    └── WallCalendar/
        ├── index.js                 # Barrel export
        ├── WallCalendar.js          # Root component — composes everything
        ├── WallCalendar.module.css
        ├── Spiral.js                # Decorative ring-binder spiral
        ├── Spiral.module.css
        ├── HeroPanel.js             # Image + month badge + prev/next nav
        ├── HeroPanel.module.css
        ├── CalendarGrid.js          # Day grid — builds cells from month data
        ├── CalendarGrid.module.css
        ├── DayCell.js               # Individual day cell with all visual states
        ├── DayCell.module.css
        ├── RangeInfo.js             # Selected range banner + clear button
        ├── RangeInfo.module.css
        ├── NotesPanel.js            # Textarea with lined-paper background
        ├── NotesPanel.module.css
        ├── ThemeBar.js              # Colour theme dot switcher
        ├── ThemeBar.module.css
        ├── ImagePicker.js           # Thumbnail strip for quick image swaps
        └── ImagePicker.module.css
```

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Using the Component

```jsx
import WallCalendar from './components/WallCalendar';

function App() {
  return <WallCalendar />;
}
```

### Extending the component

**Add more holidays** — edit `HOLIDAYS` in `src/utils/calendarUtils.js`:
```js
export const HOLIDAYS = {
  '12/31': 'New Year\'s Eve',
  // month/day: 'Label'
};
```

**Add more themes** — extend `THEMES` in `calendarUtils.js`:
```js
export const THEMES = [
  { name: 'Rose', main: '#c2185b', light: 'rgba(194,24,91,0.12)', dark: '#880e4f' },
  // ...
];
```

**Persist notes** — replace `useState` in `useNotes.js` with `localStorage`:
```js
const [notes, setNotes] = useState(() => {
  try { return JSON.parse(localStorage.getItem('cal-notes') || '{}'); }
  catch { return {}; }
});
// In setNote, also call localStorage.setItem('cal-notes', JSON.stringify(updated));
```

## Build for Production

```bash
npm run build
```

Output goes to the `build/` folder, ready to serve statically.
