# 🏉 Rugby Referee Scoreboard (PWA)

A lightweight, offline-capable, single-file Progressive Web App (PWA) built specifically for Rugby Union referees to manage match time, scoring, substitutions, sin bins, and post-match reports directly on the pitch.

🔗 **Live App:** [https://gfswd.github.io/rugby-scoreboard/](https://gfswd.github.io/rugby-scoreboard/)

---

## ✨ Key Features

* **Match Timer & Halves:** Configurable half durations (presets for 7s, 10s/Youth, 12m, U19 35m, Adult 40m, or custom) with +/- 1-minute adjustments, stoppage/pause tracking, acoustic airhorn alerts, and Screen Wake Lock support.
* **Adult & Youth Modes:** Switch seamlessly between **Full Mode** (Try, Penalty Try, Conversion, Penalty Goal, Drop Goal) and **Youth Mode** (simplified Try & Conversion layout) plus a dedicated score correction menu and instant Undo.
* **World Rugby Law 3 & Law 9 Management:**
  * **Sin Bin Timers (Playing Time):** Automatic countdowns for Yellow Cards (2m, 5m, 10m, or custom) that pause when the match clock stops, plus automatic Red Card alert on a second yellow card (Law 9.29).
  * **Blood Bin & HIA (Actual Time):** Continuous 15-minute Blood Bin (Law 3.25) and 12-minute HIA (Law 3.27) timers running in real time even during match stoppages.
  * **Flexible Squad Tracking:** Supports 1–3 digit jersey numbers (`1–999`), Front Row (`FR`) status markers, and tactical vs. permanent injury replacements.
* **Pre-Match & Customisation:** Built-in 3D Coin Toss (Law 6.3), custom team names and jersey colors, and automatic Portrait/Landscape orientation.
* **Match Report & Sharing:** Generates a downloadable PNG match sheet (including score breakdown, chronological match timeline, and referee incident notes) and formatted text for WhatsApp or clipboard sharing.
* **100% Offline & Private:** Zero external dependencies or backend servers. All match states are stored locally in the browser's `localStorage` and cached via a Service Worker for reliable use on pitches without mobile reception.

---

## 📲 Installation on Smartphone (PWA)

1. Open [https://gfswd.github.io/rugby-scoreboard/](https://gfswd.github.io/rugby-scoreboard/) in Chrome (Android) or Safari (iOS).
2. Tap the browser menu (**⋮** on Android or **Share** on iOS) and select **"Add to Home Screen"** (or use the **"Install as App"** option inside the app's `☰` menu).
3. Launch the scoreboard full-screen from your home screen—even in airplane mode.

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.
