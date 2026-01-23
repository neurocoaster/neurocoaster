export const STAGES = [
  { name: 'resting',         title: 'Resting Neuron',          voltage: -70, color: '#6666ff', icon: 'fas fa-bed',        naChannels: 'closed',      kChannels: 'closed',     description: 'Ready to fire!',              questionsNeeded: 3 },
  { name: 'depolarizing',    title: 'Depolarizing',            voltage: -55, color: '#ffaa00', icon: 'fas fa-arrow-up',   naChannels: 'opening',     kChannels: 'closed',     description: 'Na+ channels opening!',       questionsNeeded: 3 },
  { name: 'peak',            title: 'Action Potential Peak',   voltage: 40,  color: '#ff5555', icon: 'fas fa-chart-line', naChannels: 'inactivated', kChannels: 'opening',    description: 'Maximum voltage!',             questionsNeeded: 3 },
  { name: 'repolarizing',    title: 'Repolarizing',            voltage: -20, color: '#55ff55', icon: 'fas fa-arrow-down', naChannels: 'inactivated', kChannels: 'open',       description: 'K+ channels open!',            questionsNeeded: 3 },
  { name: 'hyperpolarizing', title: 'After-Hyperpolarization', voltage: -80, color: '#aa55ff', icon: 'fas fa-moon',       naChannels: 'closed',      kChannels: 'closing',    description: 'Refractory period',            questionsNeeded: 3 },
]

export const STAGE_APPEARANCE = {
  resting:         { icon: 'fas fa-bed',        color: '#6666ff', anim: 'gentle-pulse', size: 60 },
  depolarizing:    { icon: 'fas fa-bolt',       color: '#ffaa00', anim: 'vibrate',      size: 70 },
  peak:            { icon: 'fas fa-fire',       color: '#ff5555', anim: 'pulse-fire',   size: 80 },
  repolarizing:    { icon: 'fas fa-snowflake',  color: '#55ff55', anim: 'cooling',      size: 60 },
  hyperpolarizing: { icon: 'fas fa-moon',       color: '#aa55ff', anim: 'gentle-pulse', size: 50 },
}
