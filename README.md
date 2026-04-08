# 📅 Wall Calendar

An interactive React calendar inspired by physical wall calendars — with date range selection, integrated notes, theme switching, and scenic hero images.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🖼 Wall Calendar Aesthetic | Spiral binding, diagonal-cut hero image, clean date grid |
| 🗓 Date Range Selector | Click start → hover preview → click end. Visual states for start, in-between, and end days |
| 📝 Integrated Notes | Attach notes to a specific month or a selected date range |
| 🎨 4 Color Themes | Alpine (blue), Forest (green), Sunset (red), Dusk (purple) |
| 🖼 12 Scenic Images | Unique landscape photo auto-loads for each month |
| 🎉 Holiday Markers | Dots on holidays with a legend below the grid |
| 📱 Fully Responsive | Desktop side-by-side layout collapses to vertical stack on mobile |
| ✨ Page-Flip Animation | Smooth flip transition when changing months |

---

## 🖥 Preview

> Calendar with spiral binding, scenic hero image, date range selection highlighted in blue, and notes panel on the left.
<img width="1173" height="716" alt="image" src="https://github.com/user-attachments/assets/1a3238e4-49ef-4d29-8730-40e287f2fcbb" />

---

## 🚀 Getting Started

### Prerequisites

- Node.js v16 or higher — [Download here](https://nodejs.org)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/imsauraav/wall-calendar-.git

# 2. Navigate to the project folder
cd wall-calendar-

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

Open **http://localhost:3000** in your browser. 🎉

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

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

---

## 🎯 How to Use

**Navigate months** — Click the `‹` `›` arrows on the hero image, or click any dot in the footer.

**Select a date range**
1. Click any day → it becomes the start date
2. Hover over other days to preview the range live
3. Click another day → it becomes the end date
4. Click **"Clear selection"** to reset

**Add notes**
- With no range selected → note saves to the current month
- With a range selected → note saves to that specific range
- Press `Enter` to save, or click **"Save Note"**

**Switch themes** — Click any colored dot at the top right of the page.

---

## 🛠 Customization

### Change Themes

Edit the `THEMES` array in `WallCalendar.jsx`:

```js
const THEMES = [
  { name: "Alpine",  accent: "#1a7fe0", accentLight: "#e3f0fc" },
  { name: "Forest",  accent: "#2d7d46", accentLight: "#e6f4ea" },
  // Add your own theme here ↓
  { name: "Ocean",   accent: "#0077b6", accentLight: "#caf0f8" },
];
```

### Change Hero Images

Replace any URL in the `MONTH_IMAGES` array with your own image:

```js
const MONTH_IMAGES = [
  { url: "https://your-image-url.com/january.jpg", label: "Your Label" },
  // ...
];
```

### Add / Edit Holidays

Edit the `HOLIDAYS` object — key format is `"month-day"`:

```js
const HOLIDAYS = {
  "1-26": "Republic Day",     // January 26
  "8-15": "Independence Day", // August 15
  // ...
};
```

---

## 🧰 Tech Stack

- **React 18** — UI framework
- **Create React App** — Project scaffolding
- **Plain CSS** — No external UI library

---

Made with ❤️
