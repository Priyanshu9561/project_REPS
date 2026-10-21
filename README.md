# REPS — AI-Powered Gym & Fitness Platform

**Train smarter. Eat better. Get stronger.**  
*Your body. Your data. Your next rep.*

REPS is a production-quality gym and fitness application designed for lifters, bodybuilders, and fitness enthusiasts. It combines active workout logging, scientific progressive overload coaching, macronutrient tracking, recovery readiness metrics, and an interactive AI fitness coach into a clean, modern interface.

---

## ⚡ Key Highlights

- **Aesthetic**: Obsidian dark mode with vibrant neon electric lime (`#CCFF00`) and cyan (`#00F0FF`) accents.
- **Pure Web Technology**: Pure HTML5, Vanilla CSS3, and JavaScript ES6+ (No Node.js, Flutter SDK, or complex build steps required).
- **Offline & Persistent**: Stores all workout sets, nutrition logs, personal records, and user preferences in `localStorage`.
- **Interactive Audio & Canvas**: Integrated Web Audio API chime for the rest timer and HTML5 Canvas API for bodyweight progression charts.

---

## 📁 Clean Project Structure

```
F:\New folder\
├── index.html        # Main gym application containing all 7 core modules
├── styles.css        # Responsive dark obsidian theme & animations
├── app.js            # Gym state manager, timers, calculators & AI logic
├── HOW_TO_RUN.md     # Quick start guide to run the app
└── README.md         # Full project overview and documentation
```

---

## 🏋️ Features & Modules

### 1. Dashboard
- **Daily Readiness Dial**: Dynamic circular gauge reflecting neuromuscular recovery.
- **Calorie & Macro Tracker**: Visual progress bars for Calories, Protein, Carbs, and Fats.
- **Workout Spotlight**: Instant summary of today's scheduled lifting split.
- **Hydration Level**: Interactive water bottle tracker with +250ml / +500ml quick-add logs.
- **Consistency Calendar**: Weekly Mon-Sun streak tracking.

### 2. Workout Engine & Rest Timer
- **Routines**: Push Day (Chest/Delts/Triceps), Pull Day (Back/Biceps), Leg Day (Quads/Hamstrings), Upper Body Power, and Custom Exercises.
- **Progressive Overload Coach**: Dynamic benchmark targets based on prior performance.
- **Live Session Clock**: Real-time workout duration timer.
- **Circular Rest Interval Timer**: Visual ring countdown with presets (30s, 60s, 90s, 2m, 3m), pause/resume, and audio completion tone.
- **Post-Workout Celebration**: Modal displaying total tonnage lifted, completed sets, and earned XP.

### 3. Nutrition & Macro Diary
- **Mifflin-St Jeor Formula**: Calculates exact Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE).
- **Macro Split**: Protein (2.3g/kg lean mass), Carbohydrates, and Healthy Fats.
- **Food Presets**: 1-click logs for Chicken Breast, Whey Isolate, Whole Eggs, and Jasmine Rice.
- **Custom Meal Logger**: Add custom meals with exact calorie and macro values.

### 4. Progress & Personal Records (PRs)
- **Bodyweight Trend Graph**: Custom Canvas line graph with gradient area fills and data point tooltips.
- **1-Rep Max (1RM) Calculator**: Uses Epley and Brzycki equations to calculate 1RM and rep percentages (90%, 80%, 70%).
- **PR Hall of Fame**: Records and tracks strength milestones across all compound lifts.

### 5. Recovery & Readiness
- Sliders for Sleep duration, Sleep quality, Muscle soreness (DOMS), and Life stress.
- Computes an actionable 0–100 Readiness Score with tailored training volume and intensity advice.

### 6. REPS AI Gym Coach
- Interactive chatbot with exercise biomechanics guidance, plateau solutions, meal advice, and deload protocols.

---

## 🚀 How to Run

Simply double-click **`index.html`** or open it in any browser (Chrome, Edge, Firefox, Safari).
