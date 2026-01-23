
export const STAGE_QUESTIONS = [
  // Resting stage questions (5)
  {
    id: 'r1',
    stage: 'resting',
    prompt: 'What is the resting membrane potential of a neuron?',
    options: ['-70 mV', '-55 mV', '+40 mV', '0 mV'],
    correctIndex: 0,
  },
  {
    id: 'r2',
    stage: 'resting',
    prompt: 'Which ion has the highest intracellular concentration in a resting neuron?',
    options: ['Potassium (K+)', 'Sodium (Na+)', 'Calcium (Ca2+)', 'Chloride (Cl-)'],
    correctIndex: 0,
  },
  {
    id: 'r3',
    stage: 'resting',
    prompt: 'The sodium-potassium pump moves how many ions per cycle?',
    options: ['3 Na+ out, 2 K+ in', '2 Na+ out, 3 K+ in', 'Equal amounts of both', 'Only sodium ions'],
    correctIndex: 0,
  },
  {
    id: 'r4',
    stage: 'resting',
    prompt: 'What maintains the resting membrane potential?',
    options: ['Na+/K+ ATPase pump', 'Leak channels', 'Both A and B', 'Voltage-gated channels'],
    correctIndex: 2,
  },
  {
    id: 'r5',
    stage: 'resting',
    prompt: 'Which ion has higher concentration outside the neuron at rest?',
    options: ['Sodium (Na+)', 'Potassium (K+)', 'Calcium (Ca2+)', 'All are equal'],
    correctIndex: 0,
  },

  // Depolarizing stage questions (5)
  {
    id: 'd1',
    stage: 'depolarizing',
    prompt: 'What is the threshold potential for most neurons?',
    options: ['-55 mV', '-70 mV', '+40 mV', '-90 mV'],
    correctIndex: 0,
  },
  {
    id: 'd2',
    stage: 'depolarizing',
    prompt: 'During depolarization, which channels open first?',
    options: ['Voltage-gated Na+ channels', 'Voltage-gated K+ channels', 'Ligand-gated channels', 'Leak channels'],
    correctIndex: 0,
  },
  {
    id: 'd3',
    stage: 'depolarizing',
    prompt: 'The rapid influx of Na+ causes the membrane to become:',
    options: ['More positive (depolarized)', 'More negative (hyperpolarized)', 'Stays the same', 'Unstable'],
    correctIndex: 0,
  },
  {
    id: 'd4',
    stage: 'depolarizing',
    prompt: 'What triggers the opening of voltage-gated Na+ channels?',
    options: ['Membrane reaching threshold', 'Neurotransmitter binding', 'Calcium influx', 'ATP hydrolysis'],
    correctIndex: 0,
  },
  {
    id: 'd5',
    stage: 'depolarizing',
    prompt: 'During depolarization, Na+ moves:',
    options: ['Into the cell', 'Out of the cell', 'Not at all', 'Both directions equally'],
    correctIndex: 0,
  },

  // Peak stage questions (5)
  {
    id: 'p1',
    stage: 'peak',
    prompt: 'What is the peak voltage of an action potential?',
    options: ['+40 mV', '-55 mV', '-70 mV', '+20 mV'],
    correctIndex: 0,
  },
  {
    id: 'p2',
    stage: 'peak',
    prompt: 'At the peak of the action potential, Na+ channels become:',
    options: ['Inactivated', 'Closed', 'More open', 'Destroyed'],
    correctIndex: 0,
  },
  {
    id: 'p3',
    stage: 'peak',
    prompt: 'What prevents continuous depolarization?',
    options: ['Na+ channel inactivation', 'K+ efflux', 'Ca2+ influx', 'Both A and B'],
    correctIndex: 3,
  },
  {
    id: 'p4',
    stage: 'peak',
    prompt: 'At the peak, which channels begin to open?',
    options: ['Voltage-gated K+ channels', 'Voltage-gated Na+ channels', 'Ligand-gated channels', 'Leak channels'],
    correctIndex: 0,
  },
  {
    id: 'p5',
    stage: 'peak',
    prompt: 'The peak represents the point where:',
    options: ['Na+ influx equals K+ efflux', 'Na+ influx stops', 'K+ efflux stops', 'The membrane is at rest'],
    correctIndex: 0,
  },

  // Repolarizing stage questions (5)
  {
    id: 'rp1',
    stage: 'repolarizing',
    prompt: 'What causes repolarization?',
    options: ['K+ efflux', 'Na+ influx', 'Ca2+ influx', 'Cl- influx'],
    correctIndex: 0,
  },
  {
    id: 'rp2',
    stage: 'repolarizing',
    prompt: 'During repolarization, K+ channels are:',
    options: ['Open', 'Closed', 'Inactivated', 'Desensitized'],
    correctIndex: 0,
  },
  {
    id: 'rp3',
    stage: 'repolarizing',
    prompt: 'The falling phase of the action potential is due to:',
    options: ['K+ efflux', 'Na+ inactivation', 'Both A and B', 'Neither'],
    correctIndex: 2,
  },
  {
    id: 'rp4',
    stage: 'repolarizing',
    prompt: 'During repolarization, K+ moves:',
    options: ['Out of the cell', 'Into the cell', 'Not at all', 'Both directions'],
    correctIndex: 0,
  },
  {
    id: 'rp5',
    stage: 'repolarizing',
    prompt: 'Repolarization returns the membrane potential toward:',
    options: ['Resting potential', 'Threshold potential', 'Peak potential', 'Equilibrium potential'],
    correctIndex: 0,
  },

  // Hyperpolarizing stage questions (5)
  {
    id: 'h1',
    stage: 'hyperpolarizing',
    prompt: 'What causes after-hyperpolarization?',
    options: ['Persistent K+ efflux', 'Na+ influx', 'Ca2+ influx', 'Cl- influx'],
    correctIndex: 0,
  },
  {
    id: 'h2',
    stage: 'hyperpolarizing',
    prompt: 'During hyperpolarization, the membrane potential is:',
    options: ['More negative than resting', 'More positive than resting', 'Same as resting', 'Unstable'],
    correctIndex: 0,
  },
  {
    id: 'h3',
    stage: 'hyperpolarizing',
    prompt: 'The refractory period prevents:',
    options: ['Another action potential', 'Depolarization', 'Repolarization', 'All of the above'],
    correctIndex: 0,
  },
  {
    id: 'h4',
    stage: 'hyperpolarizing',
    prompt: 'During the absolute refractory period:',
    options: ['No action potential can occur', 'A stronger stimulus can trigger AP', 'Only K+ channels are open', 'The membrane is depolarized'],
    correctIndex: 0,
  },
  {
    id: 'h5',
    stage: 'hyperpolarizing',
    prompt: 'What happens to K+ channels during hyperpolarization?',
    options: ['They are closing slowly', 'They are opening rapidly', 'They are inactivated', 'They are destroyed'],
    correctIndex: 0,
  },
];