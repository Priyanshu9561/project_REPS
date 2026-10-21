# REPS — AI-Powered Gym & Fitness Platform

## How to Run the Application

The REPS Gym Platform runs directly in any modern web browser (Google Chrome, Microsoft Edge, Brave, Firefox, Safari) without requiring any complex setup, Docker, or external compilers.

---

### 🚀 **Option 1: Double-Click to Open (Instant - Recommended)**

1. Open your File Explorer to:
   ```
   F:\New folder
   ```
2. Double-click **`index.html`**
3. The REPS Gym Platform will immediately launch in your default web browser!

---

### 🌐 **Option 2: Open via Browser**

1. Open Google Chrome or Microsoft Edge.
2. Press `Ctrl + O` (or drag and drop `index.html` into the browser window).
3. Select `F:\New folder\index.html`.

---

### 🐍 **Option 3: Run with Python Local Server (Optional)**

If you want to access the app across your local network or mobile phone:

1. Open a terminal in `F:\New folder`
2. Run:
   ```bash
   python -m http.server 8080
   ```
3. Open your browser to:
   ```
   http://localhost:8080
   ```
   *(Or on your phone connected to the same Wi-Fi: `http://<your-ip>:8080`)*

---

## 🏋️‍♂️ Features Included

1. **Gym Dashboard**
   - Daily CNS Readiness Score (0-100)
   - Calorie & Protein tracking progress bars
   - Today's Scheduled Session spotlight (Push / Pull / Legs)
   - Interactive Water Tracker (+250ml, +500ml quick logs)
   - Weekly workout consistency streak

2. **Active Workout Engine**
   - Live session timer
   - Push Day, Pull Day, Leg Day, and Upper Power routines
   - Per-exercise set logging (Weight in kg, Reps completed, Checkboxes)
   - **Progressive Overload Coach**: real-time recommendations for target weights
   - **Rest Interval Timer**: circular countdown ring with presets (30s, 60s, 90s, 2m, 3m) and sound chime
   - Custom exercise creator
   - Workout completion celebration modal with XP and volume stats

3. **Nutrition & Macro Diary**
   - Total Calories, Protein, Carbohydrates, and Fats tracking
   - One-click food presets (Chicken Breast, Whey Scoop, Eggs, White Rice)
   - Custom meal logging form
   - Daily calorie remaining counter

4. **Progress & PRs**
   - **Interactive Bodyweight Trend Chart** (smooth canvas graph with gradient fills)
   - **1-Rep Max (1RM) Calculator** using scientific Epley & Brzycki formulas
   - Hall of PRs (Personal Records) database table

5. **Recovery & CNS Readiness**
   - Sliders for Sleep duration, Sleep quality, Muscle soreness, and Mental stress
   - Calculated Recovery score and tailored AI training capacity advice

6. **REPS AI Gym Coach**
   - Interactive hypertrophy & biomechanics chat assistant
   - Instant suggestions for breaking plateaus, post-workout nutrition, and deload protocols

7. **Body Blueprint Configurator**
   - Calculates scientific BMR and TDEE using the **Mifflin-St Jeor formula**
   - Custom calorie surplus/deficit based on fitness goal (Lean Bulk, Cut, Strength)
   - Exact protein, carb, and fat gram ratios
