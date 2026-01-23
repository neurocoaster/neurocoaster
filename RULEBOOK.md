# Action Potential Coaster - Rule Book
## BME 422 Educational Game

---

## Overview

**Action Potential Coaster** is an educational board game that teaches neuroscience concepts through an interactive question-and-answer format. Players ride along an action potential curve by correctly answering questions about neurons, membrane potentials, ion channels, and the nervous system.

---

## Game Modes

### Single Player Mode
Play solo to learn and practice neuroscience concepts at your own pace.

### Multiplayer Mode
Compete against 2-6 players in turn-based gameplay. Each player has their own neuron that moves along the action potential track.

---

## How to Play

### Basic Gameplay

1. **Answer Questions**: You'll be presented with multiple-choice or text-input questions about neuroscience topics.

2. **Progress Along the Track**: Each correct answer moves your neuron forward along the action potential curve.

3. **Reach Threshold**: After answering a certain number of questions (configurable), you reach the "threshold" checkpoint.

4. **Complete the Action Potential**: Answer all required questions to complete the action potential and win!

### Question Types

- **Multiple Choice**: Click the correct answer button
- **Text Input**: Type your answer (e.g., "-70" or "-70 mV" for membrane potential)

---

## Game Mechanics

### Study Mode vs Challenge Mode

**Study Mode** (Default):
- Wrong answers show an explanation and you continue
- Learn from mistakes without penalty
- Best for learning and practice

**Challenge Mode**:
- Wrong answers reset you to the start (or threshold if you've reached it)
- More difficult, tests your knowledge
- Best for testing mastery

### Threshold Checkpoint System

The **threshold** represents the "all-or-nothing" principle of action potentials:

- **Before Threshold**: 
  - Wrong answers reset you to start (Challenge mode) or let you continue (Study mode)
  
- **After Threshold**:
  - Wrong answers = **stay in place** (no reset, no progress)
  - Once you cross threshold, you can't go backward
  - Reflects the irreversible nature of action potentials

### Myelin Power ⚡

- **Activation**: Get 3 correct answers in a row
- **Effect**: Activates "Saltatory Conduction" - your neuron moves faster with a jump effect
- **Visual**: Your neuron gains a speed boost along the track
- **Resets**: Lost on any wrong answer

---

## Settings

### Configurable Options

**Total Questions**: Set between 7-30 questions to complete the game
- Default: 25 questions

**Questions Until Threshold**: Set how many questions must be answered before reaching threshold
- Default: 7 questions
- Must be less than total questions

**Access Settings**: 
- Single Player: Click "Settings" button
- Multiplayer: Configure during game setup

---

## Power-Ups (Multiplayer Only)

When a player completes the action potential, they earn a power-up that affects their opponents:

### Excitatory Power-Up
- **Effect**: Speeds up opponents
- **Mechanic**: Decreases opponents' threshold requirement by 2 questions
- **Example**: If threshold is 7, opponents now need only 5 questions to reach threshold
- **Auto-Threshold**: If threshold becomes 0 or negative, opponents automatically reach threshold

### Inhibitory Power-Up
- **Effect**: Slows down opponents
- **Mechanic**: Increases opponents' threshold requirement by 2 questions
- **Example**: If threshold is 7, opponents now need 9 questions to reach threshold

### Power-Up Persistence
- **Saved**: Power-up effects are saved to your browser and persist across game restarts
- **Applied**: Effects apply to all opponents who haven't reached threshold yet
- **Cumulative**: Multiple power-ups stack (can be applied multiple times)

---

## Scoring System

### Points
- **Base Score**: 10 points per correct answer
- **Streak Bonus**: +1 point per consecutive correct answer (up to +10 bonus)
- **Maximum per Question**: 20 points (10 base + 10 streak bonus)

### Statistics Tracked
- **Score**: Total points earned
- **Streak**: Current consecutive correct answers
- **Fails**: Total incorrect answers
- **Progress**: Percentage and questions answered
- **Time**: Elapsed time (with best time tracking)

---

## Multiplayer Mode

### Setup

1. Click "Multiplayer" button
2. Enter number of players (2-6)
3. Enter each player's name (optional, defaults to "Player 1", "Player 2", etc.)
4. Configure game settings (total questions, threshold)
5. Click "Start Game"

### Turn-Based Play

- Questions alternate between players
- Each player has a colored neuron on the track
- Current player is highlighted in the status table
- Same question won't appear twice in a row (prevents answer copying)

### Player Status Table

Shows for each player:
- **Player Name**: Color-coded to match their neuron
- **Threshold Status**: 
  - Green badge = Reached threshold
  - Gray badge = Not reached
  - Shows effective threshold if modified by power-ups
- **Stage**: Questions answered / Total questions
- **Score**: Current points

### Visual Indicators

- **Neuron Colors**: Each player has a unique color
- **Threshold Glow**: Neurons that have reached threshold glow brightly
- **Current Player**: Highlighted row in status table

---

## Winning

### Single Player
- Complete all required questions
- Choose a power-up (for future multiplayer games)
- View your completion time and best time

### Multiplayer
- First player to complete all questions wins
- Game ends immediately when a player reaches the target (no waiting for other turns)
- Winner earns a power-up that affects remaining players
- Other players can continue playing or restart

---

## Tips & Strategies

### For Learning
- Start in **Study Mode** to learn from mistakes
- Read explanations carefully when you get questions wrong
- Use the random question system to test knowledge across all topics

### For Competition
- Switch to **Challenge Mode** for a real test
- Build streaks to activate Myelin Power for faster progress
- In multiplayer, use power-ups strategically:
  - **Excitatory**: Help opponents catch up (friendly play)
  - **Inhibitory**: Slow down opponents (competitive play)

### Threshold Strategy
- Reaching threshold is a major milestone
- After threshold, wrong answers don't reset you
- Focus on accuracy after threshold since you can't go backward

---

## Topics Covered

The game includes questions on:
- Resting membrane potential
- Ion gradients (Na+, K+, Cl-, Ca2+)
- Na+/K+ pump
- Action potential threshold
- Depolarization and repolarization
- Hyperpolarization
- Myelin and saltatory conduction
- Glial cells (oligodendrocytes, Schwann cells)
- Synapses (electrical and chemical)
- Nervous system organization (CNS/PNS)
- Refractory periods
- Ion channels
- And more!

---

## Technical Notes

- **Browser Storage**: Best times and power-up modifiers are saved locally
- **Question Pool**: 70+ questions randomly selected
- **No Repetition**: Same question won't appear twice in a row
- **Responsive Design**: Works on desktop and mobile devices

---

## Getting Started

1. Open the game in your web browser
2. Choose Single Player or click "Multiplayer" to set up a game
3. Configure your preferred settings
4. Start answering questions and ride the action potential!

**Good luck and have fun learning neuroscience!** 🧠⚡

