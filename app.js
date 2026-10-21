/**
 * REPS — AI-Powered Gym & Fitness Platform
 * Comprehensive Application Logic & State Engine
 */

// Initial App State & Default Configuration
const DEFAULT_STATE = {
  user: {
    name: 'Alex Hunter',
    gender: 'male',
    age: 25,
    weight: 78.0,
    height: 180,
    goal: 'bulk',
    activity: 1.55,
    streak: 5,
    xp: 1450,
    level: 7,
    waterIntake: 2500,
    waterGoal: 3500
  },
  nutrition: {
    targetCals: 2650,
    consumedCals: 1940,
    targetProtein: 185,
    consumedProtein: 155,
    targetCarbs: 310,
    consumedCarbs: 210,
    targetFats: 73,
    consumedFats: 52,
    meals: [
      { id: 1, name: '3 Whole Eggs + 2 Slices Sourdough', meal: 'Breakfast', cals: 480, protein: 26, carbs: 44, fats: 20 },
      { id: 2, name: 'Grilled Chicken Breast (200g) + White Rice (180g)', meal: 'Lunch', cals: 620, protein: 56, carbs: 68, fats: 8 },
      { id: 3, name: 'Whey Isolate Shake + 1 Banana', meal: 'Snack', cals: 260, protein: 32, carbs: 28, fats: 2 },
      { id: 4, name: 'Salmon Fillet (180g) + Sweet Potato', meal: 'Dinner', cals: 580, protein: 41, carbs: 50, fats: 22 }
    ]
  },
  prs: [
    { exercise: 'Barbell Bench Press', weight: 102.5, reps: 5, est1rm: 119.5, date: '2026-10-18', status: 'Verified' },
    { exercise: 'Barbell Back Squat', weight: 140.0, reps: 4, est1rm: 157.5, date: '2026-10-15', status: 'Verified' },
    { exercise: 'Conventional Deadlift', weight: 175.0, reps: 3, est1rm: 191.0, date: '2026-10-12', status: 'Verified' },
    { exercise: 'Overhead Barbell Press', weight: 65.0, reps: 6, est1rm: 78.0, date: '2026-10-10', status: 'Verified' },
    { exercise: 'Incline Dumbbell Press', weight: 36.0, reps: 8, est1rm: 44.6, date: '2026-10-08', status: 'Verified' }
  ],
  weightHistory: [
    { date: 'Sep 21', weight: 76.5 },
    { date: 'Sep 28', weight: 76.9 },
    { date: 'Oct 05', weight: 77.2 },
    { date: 'Oct 12', weight: 77.6 },
    { date: 'Oct 19', weight: 78.0 }
  ],
  recovery: {
    sleep: 7.5,
    sleepQuality: 8,
    soreness: 3,
    stress: 2,
    score: 88
  }
};

// Workouts database routines
const ROUTINES = {
  push: {
    name: 'Chest, Shoulders & Triceps (Push Day)',
    badge: 'Push Day A',
    exercises: [
      {
        id: 'ex-1',
        name: 'Barbell Bench Press',
        target: 'Chest / Triceps • 3-4 Sets',
        targetOverload: 'Target: 82.5 kg × 8 reps (+2.5 kg)',
        sets: [
          { setNum: 1, prev: '80kg × 8', weight: 82.5, reps: 8, done: true },
          { setNum: 2, prev: '80kg × 8', weight: 82.5, reps: 8, done: true },
          { setNum: 3, prev: '80kg × 7', weight: 82.5, reps: 7, done: false },
          { setNum: 4, prev: '80kg × 6', weight: 82.5, reps: 6, done: false }
        ]
      },
      {
        id: 'ex-2',
        name: 'Incline Dumbbell Press',
        target: 'Upper Pecs • 3 Sets',
        targetOverload: 'Target: 32 kg × 10 reps',
        sets: [
          { setNum: 1, prev: '30kg × 10', weight: 32.0, reps: 10, done: true },
          { setNum: 2, prev: '30kg × 9', weight: 32.0, reps: 9, done: true },
          { setNum: 3, prev: '30kg × 8', weight: 32.0, reps: 8, done: false }
        ]
      },
      {
        id: 'ex-3',
        name: 'Standing Overhead Barbell Press',
        target: 'Front & Side Delts • 3 Sets',
        targetOverload: 'Target: 55 kg × 8 reps',
        sets: [
          { setNum: 1, prev: '52.5kg × 8', weight: 55.0, reps: 8, done: true },
          { setNum: 2, prev: '52.5kg × 8', weight: 55.0, reps: 8, done: true },
          { setNum: 3, prev: '52.5kg × 7', weight: 55.0, reps: 7, done: false }
        ]
      },
      {
        id: 'ex-4',
        name: 'Cable Lateral Raise',
        target: 'Lateral Deltoids • 3 Sets',
        targetOverload: 'Target: 12.5 kg × 15 reps',
        sets: [
          { setNum: 1, prev: '10kg × 15', weight: 12.5, reps: 15, done: true },
          { setNum: 2, prev: '10kg × 14', weight: 12.5, reps: 14, done: true },
          { setNum: 3, prev: '10kg × 12', weight: 12.5, reps: 13, done: false }
        ]
      },
      {
        id: 'ex-5',
        name: 'Rope Tricep Cable Pushdown',
        target: 'Triceps Lateral Head • 3 Sets',
        targetOverload: 'Target: 27.5 kg × 12 reps',
        sets: [
          { setNum: 1, prev: '25kg × 12', weight: 27.5, reps: 12, done: false },
          { setNum: 2, prev: '25kg × 12', weight: 27.5, reps: 11, done: false },
          { setNum: 3, prev: '25kg × 10', weight: 27.5, reps: 10, done: false }
        ]
      }
    ]
  },
  pull: {
    name: 'Back, Biceps & Rear Delts (Pull Day)',
    badge: 'Pull Day A',
    exercises: [
      {
        id: 'ex-p1',
        name: 'Barbell Deadlift',
        target: 'Posterior Chain • 3 Sets',
        targetOverload: 'Target: 150 kg × 5 reps',
        sets: [
          { setNum: 1, prev: '145kg × 5', weight: 150.0, reps: 5, done: false },
          { setNum: 2, prev: '145kg × 5', weight: 150.0, reps: 5, done: false },
          { setNum: 3, prev: '145kg × 4', weight: 150.0, reps: 4, done: false }
        ]
      },
      {
        id: 'ex-p2',
        name: 'Lat Pulldown (Neutral Grip)',
        target: 'Lats & Upper Back • 4 Sets',
        targetOverload: 'Target: 70 kg × 10 reps',
        sets: [
          { setNum: 1, prev: '67.5kg × 10', weight: 70.0, reps: 10, done: false },
          { setNum: 2, prev: '67.5kg × 10', weight: 70.0, reps: 10, done: false },
          { setNum: 3, prev: '67.5kg × 9', weight: 70.0, reps: 9, done: false },
          { setNum: 4, prev: '67.5kg × 8', weight: 70.0, reps: 8, done: false }
        ]
      },
      {
        id: 'ex-p3',
        name: 'Chest-Supported Row',
        target: 'Mid Back & Rhomboids • 3 Sets',
        targetOverload: 'Target: 30 kg × 12 reps',
        sets: [
          { setNum: 1, prev: '28kg × 12', weight: 30.0, reps: 12, done: false },
          { setNum: 2, prev: '28kg × 11', weight: 30.0, reps: 11, done: false },
          { setNum: 3, prev: '28kg × 10', weight: 30.0, reps: 10, done: false }
        ]
      },
      {
        id: 'ex-p4',
        name: 'Incline Dumbbell Bicep Curl',
        target: 'Biceps Long Head • 3 Sets',
        targetOverload: 'Target: 16 kg × 10 reps',
        sets: [
          { setNum: 1, prev: '14kg × 12', weight: 16.0, reps: 10, done: false },
          { setNum: 2, prev: '14kg × 10', weight: 16.0, reps: 9, done: false },
          { setNum: 3, prev: '14kg × 9', weight: 16.0, reps: 8, done: false }
        ]
      }
    ]
  },
  legs: {
    name: 'Quads, Hamstrings & Calves (Leg Day)',
    badge: 'Leg Day A',
    exercises: [
      {
        id: 'ex-l1',
        name: 'Barbell Back Squat',
        target: 'Quads & Glutes • 4 Sets',
        targetOverload: 'Target: 120 kg × 6 reps',
        sets: [
          { setNum: 1, prev: '115kg × 6', weight: 120.0, reps: 6, done: false },
          { setNum: 2, prev: '115kg × 6', weight: 120.0, reps: 6, done: false },
          { setNum: 3, prev: '115kg × 5', weight: 120.0, reps: 5, done: false },
          { setNum: 4, prev: '115kg × 5', weight: 120.0, reps: 5, done: false }
        ]
      },
      {
        id: 'ex-l2',
        name: 'Romanian Deadlift (RDL)',
        target: 'Hamstrings & Glutes • 3 Sets',
        targetOverload: 'Target: 100 kg × 8 reps',
        sets: [
          { setNum: 1, prev: '95kg × 8', weight: 100.0, reps: 8, done: false },
          { setNum: 2, prev: '95kg × 8', weight: 100.0, reps: 8, done: false },
          { setNum: 3, prev: '95kg × 7', weight: 100.0, reps: 8, done: false }
        ]
      },
      {
        id: 'ex-l3',
        name: 'Leg Press',
        target: 'Quad Hypertrophy • 3 Sets',
        targetOverload: 'Target: 220 kg × 12 reps',
        sets: [
          { setNum: 1, prev: '200kg × 12', weight: 220.0, reps: 12, done: false },
          { setNum: 2, prev: '200kg × 12', weight: 220.0, reps: 11, done: false },
          { setNum: 3, prev: '200kg × 10', weight: 220.0, reps: 10, done: false }
        ]
      }
    ]
  },
  upper: {
    name: 'Upper Body Power & Hypertrophy',
    badge: 'Upper Power',
    exercises: [
      {
        id: 'ex-u1',
        name: 'Barbell Bench Press',
        target: 'Chest Strength • 4 Sets',
        targetOverload: 'Target: 85 kg × 6 reps',
        sets: [
          { setNum: 1, prev: '82.5kg × 6', weight: 85.0, reps: 6, done: false },
          { setNum: 2, prev: '82.5kg × 6', weight: 85.0, reps: 6, done: false },
          { setNum: 3, prev: '82.5kg × 5', weight: 85.0, reps: 5, done: false }
        ]
      },
      {
        id: 'ex-u2',
        name: 'Weighted Pull-Ups',
        target: 'Lats & Biceps • 3 Sets',
        targetOverload: 'Target: BW + 15 kg × 6 reps',
        sets: [
          { setNum: 1, prev: 'BW+12.5kg × 6', weight: 15.0, reps: 6, done: false },
          { setNum: 2, prev: 'BW+12.5kg × 5', weight: 15.0, reps: 5, done: false },
          { setNum: 3, prev: 'BW+10kg × 6', weight: 12.5, reps: 6, done: false }
        ]
      }
    ]
  }
};

// Application State Manager
class RepsApp {
  constructor() {
    this.state = this.loadState();
    this.currentRoutineKey = 'push';
    this.currentWorkout = JSON.parse(JSON.stringify(ROUTINES[this.currentRoutineKey]));
    
    // Workout clock
    this.workoutSeconds = 1420; // 23 mins in
    this.workoutTimerInterval = null;

    // Rest Timer
    this.timerTotalSeconds = 90;
    this.timerRemaining = 90;
    this.timerRunning = false;
    this.timerInterval = null;

    this.init();
  }

  loadState() {
    try {
      const saved = localStorage.getItem('reps_gym_state');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not load localStorage, using defaults');
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  saveState() {
    try {
      localStorage.setItem('reps_gym_state', JSON.stringify(this.state));
    } catch (e) {
      console.error('Failed to save state', e);
    }
  }

  init() {
    this.setupNavigation();
    this.setupWorkoutEngine();
    this.setupRestTimer();
    this.setupNutrition();
    this.setupProgressCharts();
    this.setup1RMCalculator();
    this.setupRecovery();
    this.setupAiCoach();
    this.setupBlueprintForm();
    this.setupWaterTracker();
    this.setupHeaderActions();
    this.renderAll();
    this.startWorkoutClock();
  }

  // 1. Navigation Controller
  setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetTab = item.getAttribute('data-tab');
        
        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');

        tabPanes.forEach(pane => {
          pane.classList.remove('active');
          if (pane.id === `pane-${targetTab}`) {
            pane.classList.add('active');
          }
        });

        // Update Topbar Title
        const pageTitle = document.getElementById('page-title');
        const pageSubtitle = document.getElementById('page-subtitle');
        const titles = {
          'dashboard': { title: 'Gym Dashboard', subtitle: 'Your body. Your data. Your next rep.' },
          'workout': { title: 'Active Workout Engine', subtitle: 'Live session tracker with progressive overload' },
          'nutrition': { title: 'Nutrition & Macro Diary', subtitle: 'Calorie balance and nutrient breakdown' },
          'progress': { title: 'Strength Progress & PRs', subtitle: 'Weight trajectory and 1-rep maximum calculations' },
          'recovery': { title: 'Recovery & CNS Readiness', subtitle: 'Sleep, soreness and training capacity analytics' },
          'ai-coach': { title: 'REPS AI Gym Coach', subtitle: '24/7 hypertrophic programming & biomechanics advice' },
          'blueprint': { title: 'Body Blueprint Configurator', subtitle: 'Mifflin-St Jeor metabolic calibration' }
        };

        if (titles[targetTab]) {
          pageTitle.textContent = titles[targetTab].title;
          pageSubtitle.textContent = titles[targetTab].subtitle;
        }

        if (targetTab === 'progress') {
          this.renderWeightChart();
        }
      });
    });

    // Cross-tab button triggers
    document.getElementById('btn-quick-workout')?.addEventListener('click', () => {
      document.getElementById('nav-workout').click();
    });

    document.getElementById('btn-start-spotlight')?.addEventListener('click', () => {
      document.getElementById('nav-workout').click();
    });

    document.getElementById('btn-view-prs')?.addEventListener('click', () => {
      document.getElementById('nav-progress').click();
    });
  }

  // 2. Workout Engine
  setupWorkoutEngine() {
    const routineSelect = document.getElementById('select-routine');
    routineSelect.addEventListener('change', (e) => {
      this.currentRoutineKey = e.target.value;
      this.currentWorkout = JSON.parse(JSON.stringify(ROUTINES[this.currentRoutineKey]));
      this.renderWorkoutExercises();
      this.updateWorkoutLiveStats();
    });

    // Finish Workout Button
    document.getElementById('btn-finish-workout').addEventListener('click', () => {
      this.finishWorkout();
    });

    // Close Celebrate Modal
    document.getElementById('btn-close-celebrate').addEventListener('click', () => {
      document.getElementById('modal-celebrate').style.display = 'none';
      document.getElementById('nav-dashboard').click();
    });

    // Add Custom Exercise
    document.getElementById('btn-open-add-exercise').addEventListener('click', () => {
      const exName = prompt('Enter exercise name:', 'Dumbbell Hammer Curls');
      if (exName && exName.trim()) {
        this.currentWorkout.exercises.push({
          id: 'ex-' + Date.now(),
          name: exName.trim(),
          target: 'Custom Exercise • 3 Sets',
          targetOverload: 'Target: Progressive stimulus',
          sets: [
            { setNum: 1, prev: '-', weight: 20, reps: 10, done: false },
            { setNum: 2, prev: '-', weight: 20, reps: 10, done: false },
            { setNum: 3, prev: '-', weight: 20, reps: 10, done: false }
          ]
        });
        this.renderWorkoutExercises();
      }
    });

    this.renderWorkoutExercises();
  }

  renderWorkoutExercises() {
    const container = document.getElementById('exercises-container');
    const badge = document.getElementById('workout-routine-badge');
    const title = document.getElementById('session-active-name');

    badge.textContent = this.currentWorkout.badge;
    title.textContent = this.currentWorkout.name;
    container.innerHTML = '';

    this.currentWorkout.exercises.forEach((ex, exIndex) => {
      const exBlock = document.createElement('div');
      exBlock.className = 'exercise-block';

      let setsRows = '';
      ex.sets.forEach((set, setIndex) => {
        setsRows += `
          <tr data-ex-idx="${exIndex}" data-set-idx="${setIndex}">
            <td><strong class="font-mono text-muted">Set ${set.setNum}</strong></td>
            <td><span class="text-dim text-xs">${set.prev}</span></td>
            <td>
              <input type="number" step="0.5" class="set-input set-weight-input" value="${set.weight}">
            </td>
            <td>
              <input type="number" class="set-input set-reps-input" value="${set.reps}">
            </td>
            <td>
              <button class="set-check-btn ${set.done ? 'completed' : ''}" title="Log Set">
                ${set.done ? '✓' : '○'}
              </button>
            </td>
          </tr>
        `;
      });

      exBlock.innerHTML = `
        <div class="exercise-header">
          <div>
            <h3 class="exercise-title">${ex.name}</h3>
            <span class="exercise-target">${ex.target}</span>
          </div>
          <span class="badge badge-lime">${ex.targetOverload}</span>
        </div>
        <table class="sets-table">
          <thead>
            <tr>
              <th>SET</th>
              <th>PREVIOUS</th>
              <th>WEIGHT (KG)</th>
              <th>REPS</th>
              <th>COMPLETE</th>
            </tr>
          </thead>
          <tbody>
            ${setsRows}
          </tbody>
        </table>
      `;

      container.appendChild(exBlock);
    });

    // Attach listeners to sets
    container.querySelectorAll('.set-check-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        const exIdx = parseInt(row.getAttribute('data-ex-idx'), 10);
        const setIdx = parseInt(row.getAttribute('data-set-idx'), 10);

        const isDone = !this.currentWorkout.exercises[exIdx].sets[setIdx].done;
        this.currentWorkout.exercises[exIdx].sets[setIdx].done = isDone;

        btn.classList.toggle('completed', isDone);
        btn.textContent = isDone ? '✓' : '○';

        if (isDone) {
          this.triggerChime();
          this.startRestTimer();
        }

        this.updateWorkoutLiveStats();
      });
    });

    container.querySelectorAll('.set-weight-input').forEach(input => {
      input.addEventListener('change', (e) => {
        const row = e.target.closest('tr');
        const exIdx = parseInt(row.getAttribute('data-ex-idx'), 10);
        const setIdx = parseInt(row.getAttribute('data-set-idx'), 10);
        this.currentWorkout.exercises[exIdx].sets[setIdx].weight = parseFloat(e.target.value) || 0;
        this.updateWorkoutLiveStats();
      });
    });

    container.querySelectorAll('.set-reps-input').forEach(input => {
      input.addEventListener('change', (e) => {
        const row = e.target.closest('tr');
        const exIdx = parseInt(row.getAttribute('data-ex-idx'), 10);
        const setIdx = parseInt(row.getAttribute('data-set-idx'), 10);
        this.currentWorkout.exercises[exIdx].sets[setIdx].reps = parseInt(e.target.value, 10) || 0;
        this.updateWorkoutLiveStats();
      });
    });

    this.updateWorkoutLiveStats();
  }

  updateWorkoutLiveStats() {
    let totalVolume = 0;
    let completedSets = 0;
    let totalSets = 0;

    this.currentWorkout.exercises.forEach(ex => {
      ex.sets.forEach(set => {
        totalSets++;
        if (set.done) {
          completedSets++;
          totalVolume += (set.weight * set.reps);
        }
      });
    });

    document.getElementById('live-total-volume').textContent = `${totalVolume.toLocaleString()} kg`;
    document.getElementById('live-completed-sets').textContent = `${completedSets} / ${totalSets}`;
    
    // Header live indicator
    const liveBadge = document.getElementById('active-workout-badge');
    if (completedSets > 0) {
      liveBadge.style.display = 'inline-block';
    }
  }

  startWorkoutClock() {
    if (this.workoutTimerInterval) clearInterval(this.workoutTimerInterval);
    this.workoutTimerInterval = setInterval(() => {
      this.workoutSeconds++;
      const hrs = String(Math.floor(this.workoutSeconds / 3600)).padStart(2, '0');
      const mins = String(Math.floor((this.workoutSeconds % 3600) / 60)).padStart(2, '0');
      const secs = String(this.workoutSeconds % 60).padStart(2, '0');
      document.getElementById('session-duration-clock').textContent = `${hrs}:${mins}:${secs}`;
    }, 1000);
  }

  finishWorkout() {
    let totalVolume = 0;
    let completedSets = 0;
    this.currentWorkout.exercises.forEach(ex => {
      ex.sets.forEach(set => {
        if (set.done) {
          completedSets++;
          totalVolume += (set.weight * set.reps);
        }
      });
    });

    if (completedSets === 0) {
      alert('Please complete at least one set before finishing the workout!');
      return;
    }

    // Update state
    this.state.user.xp += 150;
    this.saveState();

    // Show celebration modal
    document.getElementById('celeb-volume').textContent = `${totalVolume.toLocaleString()} kg`;
    document.getElementById('celeb-sets').textContent = completedSets;
    document.getElementById('modal-celebrate').style.display = 'flex';
    document.getElementById('active-workout-badge').style.display = 'none';
  }

  // 3. Rest Interval Timer
  setupRestTimer() {
    const toggleBtn = document.getElementById('btn-timer-toggle');
    const resetBtn = document.getElementById('btn-timer-reset');
    const plus30Btn = document.getElementById('btn-timer-plus30');
    const presets = document.querySelectorAll('.btn-timer-preset');

    presets.forEach(p => {
      p.addEventListener('click', () => {
        presets.forEach(btn => btn.classList.remove('active'));
        p.classList.add('active');
        this.timerTotalSeconds = parseInt(p.getAttribute('data-seconds'), 10);
        this.resetRestTimer();
      });
    });

    toggleBtn.addEventListener('click', () => {
      if (this.timerRunning) {
        this.pauseRestTimer();
      } else {
        this.startRestTimer();
      }
    });

    resetBtn.addEventListener('click', () => this.resetRestTimer());
    plus30Btn.addEventListener('click', () => {
      this.timerRemaining += 30;
      this.timerTotalSeconds += 30;
      this.updateTimerDisplay();
    });

    this.updateTimerDisplay();
  }

  startRestTimer() {
    this.timerRunning = true;
    document.getElementById('btn-timer-toggle').textContent = 'Pause Timer';
    document.getElementById('timer-state-text').textContent = 'Resting...';

    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (this.timerRemaining > 0) {
        this.timerRemaining--;
        this.updateTimerDisplay();
      } else {
        this.timerComplete();
      }
    }, 1000);
  }

  pauseRestTimer() {
    this.timerRunning = false;
    document.getElementById('btn-timer-toggle').textContent = 'Resume Timer';
    document.getElementById('timer-state-text').textContent = 'Paused';
    if (this.timerInterval) clearInterval(this.timerInterval);
  }

  resetRestTimer() {
    this.pauseRestTimer();
    this.timerRemaining = this.timerTotalSeconds;
    document.getElementById('btn-timer-toggle').textContent = 'Start Rest Timer';
    document.getElementById('timer-state-text').textContent = 'Ready';
    this.updateTimerDisplay();
  }

  timerComplete() {
    this.pauseRestTimer();
    this.triggerChime();
    document.getElementById('timer-state-text').textContent = 'Time Up! Next Set! ⚡';
    document.getElementById('timer-display-text').textContent = '00:00';
  }

  updateTimerDisplay() {
    const mins = String(Math.floor(this.timerRemaining / 60)).padStart(2, '0');
    const secs = String(this.timerRemaining % 60).padStart(2, '0');
    document.getElementById('timer-display-text').textContent = `${mins}:${secs}`;

    // SVG Ring (Circumference 439.8)
    const ring = document.getElementById('timer-fg-ring');
    const fraction = this.timerTotalSeconds > 0 ? this.timerRemaining / this.timerTotalSeconds : 0;
    const offset = 439.8 * (1 - fraction);
    ring.style.strokeDashoffset = offset;
  }

  triggerChime() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime); // A5
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch (e) {
      // AudioContext policy fallback
    }
  }

  // 4. Nutrition & Food Diary
  setupNutrition() {
    const foodForm = document.getElementById('form-quick-food');
    foodForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('food-name').value;
      const meal = document.getElementById('food-meal').value;
      const cals = parseInt(document.getElementById('food-cals').value, 10);
      const protein = parseInt(document.getElementById('food-protein').value, 10);
      const carbs = parseInt(document.getElementById('food-carbs').value, 10);
      const fats = parseInt(document.getElementById('food-fats').value, 10);

      this.state.nutrition.meals.unshift({
        id: Date.now(),
        name,
        meal,
        cals,
        protein,
        carbs,
        fats
      });

      this.state.nutrition.consumedCals += cals;
      this.state.nutrition.consumedProtein += protein;
      this.state.nutrition.consumedCarbs += carbs;
      this.state.nutrition.consumedFats += fats;

      this.saveState();
      this.renderNutrition();
      foodForm.reset();
    });

    // Preset Chips
    const presets = {
      chicken: { name: 'Chicken Breast (150g cooked)', meal: 'Lunch', cals: 248, protein: 47, carbs: 0, fats: 5 },
      whey: { name: 'Whey Protein Scoop (30g)', meal: 'Snack', cals: 120, protein: 25, carbs: 2, fats: 1 },
      eggs: { name: '3 Whole Eggs (Large)', meal: 'Breakfast', cals: 215, protein: 19, carbs: 1, fats: 15 },
      rice: { name: 'Jasmine White Rice (200g cooked)', meal: 'Dinner', cals: 260, protein: 5, carbs: 58, fats: 1 }
    };

    document.querySelectorAll('.preset-chips .chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const pKey = chip.getAttribute('data-preset');
        if (presets[pKey]) {
          const item = presets[pKey];
          this.state.nutrition.meals.unshift({ id: Date.now(), ...item });
          this.state.nutrition.consumedCals += item.cals;
          this.state.nutrition.consumedProtein += item.protein;
          this.state.nutrition.consumedCarbs += item.carbs;
          this.state.nutrition.consumedFats += item.fats;

          this.saveState();
          this.renderNutrition();
        }
      });
    });

    this.renderNutrition();
  }

  renderNutrition() {
    const nut = this.state.nutrition;

    // Nutrition tab values
    document.getElementById('nut-cal-val').textContent = nut.consumedCals.toLocaleString();
    document.getElementById('nut-protein-val').textContent = nut.consumedProtein;
    document.getElementById('nut-carbs-val').textContent = nut.consumedCarbs;
    document.getElementById('nut-fats-val').textContent = nut.consumedFats;

    // Progress Bars
    const calPct = Math.min(100, Math.round((nut.consumedCals / nut.targetCals) * 100));
    const proteinPct = Math.min(100, Math.round((nut.consumedProtein / nut.targetProtein) * 100));
    const carbsPct = Math.min(100, Math.round((nut.consumedCarbs / nut.targetCarbs) * 100));
    const fatsPct = Math.min(100, Math.round((nut.consumedFats / nut.targetFats) * 100));

    document.getElementById('nut-cal-bar').style.width = `${calPct}%`;
    document.getElementById('nut-protein-bar').style.width = `${proteinPct}%`;
    document.getElementById('nut-carbs-bar').style.width = `${carbsPct}%`;
    document.getElementById('nut-fats-bar').style.width = `${fatsPct}%`;

    // Dashboard values
    document.getElementById('dash-cal-consumed').textContent = nut.consumedCals.toLocaleString();
    document.getElementById('dash-cal-target').textContent = nut.targetCals.toLocaleString();
    document.getElementById('dash-cal-progress').style.width = `${calPct}%`;
    document.getElementById('dash-protein-stat').textContent = `${nut.consumedProtein}g`;
    
    const remaining = nut.targetCals - nut.consumedCals;
    document.getElementById('dash-cal-rem').textContent = `${remaining > 0 ? remaining : 0} kcal`;

    // Meal List
    const mealList = document.getElementById('meal-logs-list');
    mealList.innerHTML = '';
    nut.meals.forEach(m => {
      const el = document.createElement('div');
      el.className = 'meal-entry';
      el.innerHTML = `
        <div class="meal-entry-left">
          <span class="meal-food-name">${m.name}</span>
          <span class="meal-timing">${m.meal}</span>
        </div>
        <div class="meal-entry-right">
          <div class="text-right">
            <span class="meal-cals">${m.cals} kcal</span>
            <div class="meal-macros-breakdown">${m.protein}P • ${m.carbs}C • ${m.fats}F</div>
          </div>
        </div>
      `;
      mealList.appendChild(el);
    });
  }

  // 5. Weight History Canvas Chart
  setupProgressCharts() {
    this.renderWeightChart();
    this.renderPRTable();

    document.getElementById('btn-add-pr')?.addEventListener('click', () => {
      const exercise = prompt('Exercise Name:', 'Incline Barbell Bench');
      const weight = parseFloat(prompt('Weight (kg):', '90'));
      const reps = parseInt(prompt('Reps completed:', '6'), 10);

      if (exercise && weight && reps) {
        const est1rm = Math.round(weight * (1 + reps / 30) * 10) / 10;
        this.state.prs.unshift({
          exercise,
          weight,
          reps,
          est1rm,
          date: new Date().toISOString().split('T')[0],
          status: 'New PR 🔥'
        });
        this.saveState();
        this.renderPRTable();
      }
    });
  }

  renderPRTable() {
    const tbody = document.getElementById('prs-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    this.state.prs.forEach(pr => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${pr.exercise}</strong></td>
        <td><span class="font-mono text-lime">${pr.weight} kg</span></td>
        <td><span class="font-mono">${pr.reps} reps</span></td>
        <td><strong class="font-mono text-cyan">${pr.est1rm} kg</strong></td>
        <td><span class="text-muted text-xs">${pr.date}</span></td>
        <td><span class="badge badge-lime">${pr.status}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  renderWeightChart() {
    const canvas = document.getElementById('weightChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const history = this.state.weightHistory;
    if (!history || history.length < 2) return;

    const padding = 40;
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;

    const weights = history.map(h => h.weight);
    const minW = Math.min(...weights) - 1.0;
    const maxW = Math.max(...weights) + 1.0;

    // Draw Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();

      const labelW = (maxW - ((maxW - minW) / 4) * i).toFixed(1);
      ctx.fillStyle = '#5A6678';
      ctx.font = '10px JetBrains Mono';
      ctx.fillText(`${labelW}kg`, 10, y + 4);
    }

    // Points
    const points = history.map((item, idx) => {
      const x = padding + (chartW / (history.length - 1)) * idx;
      const y = padding + chartH - ((item.weight - minW) / (maxW - minW)) * chartH;
      return { x, y, weight: item.weight, date: item.date };
    });

    // Area Fill
    const grad = ctx.createLinearGradient(0, padding, 0, height - padding);
    grad.addColorStop(0, 'rgba(204, 255, 0, 0.25)');
    grad.addColorStop(1, 'rgba(204, 255, 0, 0.0)');

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.lineTo(points[points.length - 1].x, height - padding);
    ctx.lineTo(points[0].x, height - padding);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Line Path
    ctx.beginPath();
    ctx.strokeStyle = '#CCFF00';
    ctx.lineWidth = 3;
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();

    // Dots and Labels
    points.forEach(pt => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#CCFF00';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#0B0E14';
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '11px JetBrains Mono';
      ctx.textAlign = 'center';
      ctx.fillText(`${pt.weight}kg`, pt.x, pt.y - 12);

      ctx.fillStyle = '#8E9BAE';
      ctx.font = '10px Plus Jakarta Sans';
      ctx.fillText(pt.date, pt.x, height - 15);
    });
  }

  // 6. 1RM Calculator
  setup1RMCalculator() {
    const weightInp = document.getElementById('calc-weight');
    const repsInp = document.getElementById('calc-reps');
    const disp = document.getElementById('calc-1rm-display');

    const update1RM = () => {
      const w = parseFloat(weightInp.value) || 0;
      const r = parseInt(repsInp.value, 10) || 1;
      
      // Epley Formula: 1RM = Weight * (1 + Reps / 30)
      const oneRm = w * (1 + r / 30);
      disp.textContent = `${oneRm.toFixed(1)} kg`;

      document.getElementById('rm-90').textContent = `${(oneRm * 0.9).toFixed(0)} kg`;
      document.getElementById('rm-80').textContent = `${(oneRm * 0.8).toFixed(0)} kg`;
      document.getElementById('rm-70').textContent = `${(oneRm * 0.7).toFixed(0)} kg`;
    };

    weightInp.addEventListener('input', update1RM);
    repsInp.addEventListener('input', update1RM);
    update1RM();
  }

  // 7. Recovery & Readiness
  setupRecovery() {
    const sSleep = document.getElementById('slider-sleep');
    const sQual = document.getElementById('slider-sleep-qual');
    const sSore = document.getElementById('slider-soreness');
    const sStress = document.getElementById('slider-stress');

    sSleep.addEventListener('input', (e) => {
      document.getElementById('val-sleep').textContent = `${e.target.value} hrs`;
    });
    sQual.addEventListener('input', (e) => {
      document.getElementById('val-sleep-qual').textContent = `Rating (${e.target.value}/10)`;
    });
    sSore.addEventListener('input', (e) => {
      document.getElementById('val-soreness').textContent = `Soreness (${e.target.value}/10)`;
    });
    sStress.addEventListener('input', (e) => {
      document.getElementById('val-stress').textContent = `Stress (${e.target.value}/10)`;
    });

    document.getElementById('btn-calc-recovery').addEventListener('click', () => {
      const sleep = parseFloat(sSleep.value);
      const qual = parseInt(sQual.value, 10);
      const sore = parseInt(sSore.value, 10);
      const stress = parseInt(sStress.value, 10);

      // Score algorithm (0 - 100)
      let score = (sleep / 9.0) * 35 + (qual / 10) * 35 - (sore / 10) * 15 - (stress / 10) * 15 + 20;
      score = Math.min(100, Math.max(30, Math.round(score)));

      this.state.recovery.score = score;
      this.saveState();
      this.renderRecovery();
    });

    this.renderRecovery();
  }

  renderRecovery() {
    const score = this.state.recovery.score;
    document.getElementById('rec-score-display').textContent = score;
    document.getElementById('dial-readiness-val').textContent = score;

    const ring = document.getElementById('dial-readiness-fg');
    const offset = 301.6 * (1 - score / 100);
    ring.style.strokeDashoffset = offset;

    const badge = document.getElementById('rec-badge');
    const dashBadge = document.getElementById('readiness-status');
    const headline = document.getElementById('rec-headline');
    const detail = document.getElementById('rec-detail');

    if (score >= 80) {
      badge.textContent = 'High Readiness';
      badge.className = 'badge badge-success';
      dashBadge.textContent = 'Optimal';
      dashBadge.className = 'badge badge-success';
      headline.textContent = 'Optimal Central Nervous System Readiness';
      detail.textContent = 'Your neuromuscular system is primed for maximum mechanical tension. Target heavy compound PRs or increase loading by 2.5-5kg.';
    } else if (score >= 60) {
      badge.textContent = 'Moderate Readiness';
      badge.className = 'badge badge-cyan';
      dashBadge.textContent = 'Good';
      dashBadge.className = 'badge badge-cyan';
      headline.textContent = 'Standard Training Capacity';
      detail.textContent = 'Your recovery is balanced. Follow your standard prescribed sets and reps at moderate RPE 7.5–8. Stay disciplined with rest intervals.';
    } else {
      badge.textContent = 'Fatigue Detected';
      badge.className = 'badge badge-coral';
      dashBadge.textContent = 'Fatigued';
      dashBadge.className = 'badge badge-coral';
      headline.textContent = 'Elevated Systemic Fatigue';
      detail.textContent = 'High muscle soreness or deficient sleep detected. Consider a deload session, lower total set volume by 30%, or focus on mobility and recovery.';
    }
  }

  // 8. AI Gym Coach Chatbot
  setupAiCoach() {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');

    const addMessage = (text, sender) => {
      const msg = document.createElement('div');
      msg.className = `message ${sender}`;
      msg.innerHTML = `<div class="msg-bubble">${text}</div>`;
      messages.appendChild(msg);
      messages.scrollTop = messages.scrollHeight;
    };

    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userText = chatInput.value.trim();
      if (!userText) return;

      addMessage(userText, 'user');
      chatInput.value = '';

      // AI Response Generator
      setTimeout(() => {
        const reply = this.getAiReply(userText);
        addMessage(reply, 'ai');
      }, 500);
    });

    document.querySelectorAll('.prompt-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const prompt = chip.getAttribute('data-prompt');
        chatInput.value = prompt;
        chatForm.dispatchEvent(new Event('submit'));
      });
    });
  }

  getAiReply(query) {
    const q = query.toLowerCase();

    if (q.includes('bench press') || q.includes('sticking point') || q.includes('plateau')) {
      return `To shatter your bench press plateau, let's analyze 3 biomechanical levers:
<br><br>
1. <strong>Pause-Rep Work:</strong> Introduce 2-second paused bench reps at 75% 1RM to eliminate elastic stretch reflex and build raw starting power off the chest.
<br>
2. <strong>Tricep Density:</strong> Weak lockout usually stems from triceps. Add 3 sets of Close-Grip Bench Press or Heavy Weighted Dips.
<br>
3. <strong>Microloading:</strong> Jump by +1 kg or +1.25 kg instead of +2.5 kg plates. Small consistent increments trigger progressive overload without breakdown.`;
    }

    if (q.includes('meal') || q.includes('post-workout') || q.includes('food')) {
      return `For optimal post-workout muscle protein synthesis (MPS):
<br><br>
• <strong>Protein:</strong> 35-45g of rapid/moderate-digesting protein (Whey isolate, liquid egg whites, or grilled chicken breast).
<br>
• <strong>Carbohydrates:</strong> 50-70g of fast-glycemic carbs (White rice, cream of rice, or ripe bananas) to replenish muscle glycogen and drive nutrients via insulin response.
<br>
• <strong>Hydration:</strong> 600ml water + pinch of sea salt for intracellular electrolyte replenishment.`;
    }

    if (q.includes('deload') || q.includes('tired') || q.includes('fatigue')) {
      return `Based on your recovery metrics (Readiness: ${this.state.recovery.score}/100):
<br><br>
If you've been pushing progressive overload for 4-6 weeks consecutively and notice persistent joint stiffness, grip weakness, or mental dread before compounds, take a <strong>pivot deload week</strong>:
<br>
• Maintain training frequency
<br>
• Reduce volume by 50% (do 2 sets instead of 4)
<br>
• Keep intensity at RPE 6–7 (stop 3-4 reps before failure)
<br>
You will return the following week with refreshed CNS and supercompensated strength!`;
    }

    return `Solid question! Looking at your current 5-day training protocol and ${this.state.nutrition.targetCals} kcal target:
<br><br>
Always ensure you apply <strong>progressive overload</strong> not just through barbell weight, but also through:
1. Increased clean reps with identical form
2. Improved time under tension (3-second eccentric phase)
3. Reduced rest periods between hypertrophy sets.
<br><br>
Keep tracking every set in the Workout Engine, and let me know if you want a custom exercise substitution!`;
  }

  // 9. Body Blueprint & Mifflin-St Jeor
  setupBlueprintForm() {
    const form = document.getElementById('blueprint-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('bp-name').value;
      const gender = document.getElementById('bp-gender').value;
      const age = parseInt(document.getElementById('bp-age').value, 10);
      const weight = parseFloat(document.getElementById('bp-weight').value);
      const height = parseInt(document.getElementById('bp-height').value, 10);
      const goal = document.getElementById('bp-goal').value;
      const activity = parseFloat(document.getElementById('bp-activity').value);

      // Mifflin-St Jeor Formula
      // Male: 10*W + 6.25*H - 5*A + 5
      // Female: 10*W + 6.25*H - 5*A - 161
      let bmr = 10 * weight + 6.25 * height - 5 * age;
      bmr = gender === 'male' ? bmr + 5 : bmr - 161;
      bmr = Math.round(bmr);

      const tdee = Math.round(bmr * activity);

      let targetCals = tdee;
      let goalDesc = '';
      if (goal === 'bulk') {
        targetCals = tdee + 300;
        goalDesc = 'Caloric surplus calibrated for lean muscle hypertrophy (+300 kcal)';
      } else if (goal === 'cut') {
        targetCals = tdee - 450;
        goalDesc = 'Moderate caloric deficit for aggressive fat loss with muscle preservation (-450 kcal)';
      } else if (goal === 'strength') {
        targetCals = tdee + 450;
        goalDesc = 'High energy surplus optimized for maximum neuromuscular strength (+450 kcal)';
      } else {
        goalDesc = 'Isocaloric maintenance intake for body recomposition';
      }

      // Macro breakdown
      const proteinGrams = Math.round(weight * 2.3); // 2.3g per kg
      const fatGrams = Math.round((targetCals * 0.25) / 9); // 25% cals from fat
      const carbCalories = targetCals - (proteinGrams * 4 + fatGrams * 9);
      const carbGrams = Math.round(carbCalories / 4);

      // Save to state
      this.state.user.name = name;
      this.state.user.weight = weight;
      this.state.user.height = height;
      this.state.user.goal = goal;
      this.state.nutrition.targetCals = targetCals;
      this.state.nutrition.targetProtein = proteinGrams;
      this.state.nutrition.targetCarbs = carbGrams;
      this.state.nutrition.targetFats = fatGrams;
      this.saveState();

      // Update UI displays
      document.getElementById('res-bmr').textContent = `${bmr.toLocaleString()} kcal`;
      document.getElementById('res-tdee').textContent = `${tdee.toLocaleString()} kcal`;
      document.getElementById('res-target-cals').textContent = `${targetCals.toLocaleString()} kcal`;
      document.getElementById('res-goal-desc').textContent = goalDesc;
      document.getElementById('user-name-display').textContent = name;

      this.renderNutrition();
      alert(`Body Blueprint updated successfully for ${name}! Target: ${targetCals} kcal.`);
    });
  }

  // 10. Water Tracker
  setupWaterTracker() {
    const updateWater = () => {
      const current = this.state.user.waterIntake;
      const goal = this.state.user.waterGoal;
      document.getElementById('water-stat').textContent = `${(current / 1000).toFixed(1)} / ${(goal / 1000).toFixed(1)} L`;
      const pct = Math.min(100, Math.round((current / goal) * 100));
      document.getElementById('water-fill-bar').style.height = `${pct}%`;
    };

    document.getElementById('btn-add-water-250').addEventListener('click', () => {
      this.state.user.waterIntake += 250;
      this.saveState();
      updateWater();
    });

    document.getElementById('btn-add-water-500').addEventListener('click', () => {
      this.state.user.waterIntake += 500;
      this.saveState();
      updateWater();
    });

    document.getElementById('btn-reset-water').addEventListener('click', () => {
      this.state.user.waterIntake = 0;
      this.saveState();
      updateWater();
    });

    updateWater();
  }

  setupHeaderActions() {
    document.getElementById('btn-load-demo').addEventListener('click', () => {
      this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
      this.saveState();
      this.renderAll();
      alert('Demo data loaded successfully!');
    });
  }

  renderAll() {
    this.renderWorkoutExercises();
    this.renderNutrition();
    this.renderPRTable();
    this.renderRecovery();
    this.renderWeightChart();
    document.getElementById('streak-count').textContent = this.state.user.streak;
  }
}

// Initialize Application once DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  window.repsApp = new RepsApp();
});
