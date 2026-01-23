import { STAGE_QUESTIONS } from '../data/questions.stage.js'

export function getRandomStageQuestion(stageName, usedIdsSet) {
  const pool = STAGE_QUESTIONS.filter(q => q.stage === stageName && !usedIdsSet.has(q.id))
  if (!pool.length) {
    // Reset per-stage usage if exhausted
    const toDelete = []
    usedIdsSet.forEach(id => {
      const q = STAGE_QUESTIONS.find(x => x.id === id)
      if (q?.stage === stageName) toDelete.push(id)
    })
    toDelete.forEach(id => usedIdsSet.delete(id))
    const pool2 = STAGE_QUESTIONS.filter(q => q.stage === stageName && !usedIdsSet.has(q.id))
    return pool2[Math.floor(Math.random() * pool2.length)]
  }
  return pool[Math.floor(Math.random() * pool.length)]
}
