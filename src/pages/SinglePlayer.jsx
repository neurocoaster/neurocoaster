import React, { useEffect, useState } from 'react'
import Board from './Board.jsx'
import { STAGES } from '../design/stages.js'
import { STAGE_QUESTIONS } from '../data/questions.stage.js'
import { getRandomStageQuestion } from '../engine/stageQuestionEngine.js'

export default function SinglePlayer({ onExit }) {
  const [players, setPlayers] = useState([{
    name: 'Neuroscientist',
    color: '#00aaff',
    speed: 1.0,
    currentStreak: 0,
    maxStreak: 0,
    myelin: 0,
    health: 100,
    currentStage: 'resting',
    stageProgress: 0,
    correctAnswers: 0,
    questionsAnswered: 0,
  }])
  const [currentPlayerIndex] = useState(0)
  const [currentStageIndex, setCurrentStageIndex] = useState(0)
  const [stageProgressCount, setStageProgressCount] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [totalCorrect, setTotalCorrect] = useState(0)
  const [question, setQuestion] = useState(null)

  const usedIdsSetRef = React.useRef(new Set())
  const [turnIndicator] = useState({ visible: false, text: '', color: '' })
  const [stageTransition, setStageTransition] = useState({ visible: false, fromStageIndex: 0, toStageIndex: 0 })
  const [achievement, setAchievement] = useState({ visible: false, title: '', desc: '' })
  const [paused, setPaused] = useState(false)

  const currentStage = STAGES[currentStageIndex]
  const questionsNeeded = currentStage.questionsNeeded

  useEffect(() => {
    loadQuestionForStage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStageIndex])

  function loadQuestionForStage() {
    const q = getRandomStageQuestion(currentStage.name, usedIdsSetRef.current)
    usedIdsSetRef.current.add(q.id)
    setQuestion({ id: q.id, prompt: q.prompt, options: q.options, correctIndex: q.correctIndex })
  }

  function updatePlayersOnStageProgress(newStageProgressCount, wasCorrect) {
    setPlayers(prev => {
      const arr = [...prev]
      const p = { ...arr[currentPlayerIndex] }
      if (wasCorrect) {
        p.correctAnswers += 1
        p.currentStreak += 1
        p.maxStreak = Math.max(p.maxStreak, p.currentStreak)
        p.myelin += 10 * (currentStageIndex + 1)
        p.stageProgress = newStageProgressCount / questionsNeeded
        if (p.currentStreak >= 5) {
          setAchievement({ visible: true, title: '⚡ Conduction Boost!', desc: `${p.name} got 5 in a row!` })
          p.speed = 2.0
        }
      } else {
        p.currentStreak = 0
        p.health = Math.max(0, p.health - 20)
        p.stageProgress = Math.max(0, (newStageProgressCount / questionsNeeded) - 0.1)
        if (p.health <= 0) {
          setAchievement({ visible: true, title: 'Neuron Degeneration!', desc: `${p.name}'s neuron health reached 0%!` })
        } else {
          setAchievement({ visible: true, title: 'Channel Block!', desc: 'Incorrect answer affects ion channels!' })
        }
      }
      arr[currentPlayerIndex] = p
      return arr
    })
  }

  function onAnswer(optionIdx, isCorrect) {
    if (paused || !question) return
    setTotalQuestions(n => n + 1)
    setPlayers(prev => { const arr = [...prev]; arr[currentPlayerIndex].questionsAnswered += 1; return arr })
    if (isCorrect) {
      setTotalCorrect(n => n + 1)
      const newCount = stageProgressCount + 1
      setStageProgressCount(newCount)
      updatePlayersOnStageProgress(newCount, true)

      if (newCount >= questionsNeeded) {
        if (currentStageIndex >= STAGES.length - 1) {
          setAchievement({ visible: true, title: 'Action Potential Complete!', desc: "You've successfully fired an action potential!" })
          setTimeout(() => { resetGame() }, 1500)
          return
        } else {
          setStageTransition({ visible: true, fromStageIndex: currentStageIndex, toStageIndex: currentStageIndex + 1 })
        }
      } else {
        setTimeout(() => loadQuestionForStage(), 600)
      }
    } else {
      updatePlayersOnStageProgress(stageProgressCount, false)
      setTimeout(() => loadQuestionForStage(), 600)
    }
  }

  function resetGame() {
    usedIdsSetRef.current.clear()
    setPlayers([{
      name: 'Neuroscientist', color: '#00aaff', speed: 1.0, currentStreak: 0, maxStreak: 0, myelin: 0, health: 100,
      currentStage: 'resting', stageProgress: 0, correctAnswers: 0, questionsAnswered: 0,
    }])
    setStageProgressCount(0)
    setTotalQuestions(0)
    setTotalCorrect(0)
    setAchievement({ visible: true, title: 'Action Potential Journey!', desc: 'Your character evolves with each stage!' })
    setTimeout(() => setAchievement({ visible: false, title: '', desc: '' }), 2000)
    setCurrentStageIndex(0)
    loadQuestionForStage()
  }

  function handleCloseTransition() {
    const nextIdx = currentStageIndex + 1
    setStageTransition({ visible: false, fromStageIndex: 0, toStageIndex: 0 })
    setCurrentStageIndex(nextIdx)
    setStageProgressCount(0)
    setPlayers(prev => prev.map(p => ({ ...p, currentStage: STAGES[nextIdx].name, stageProgress: 0 })))
    setAchievement({ visible: true, title: `Entering ${STAGES[nextIdx].title}!`, desc: STAGES[nextIdx].description })
    setTimeout(() => setAchievement({ visible: false, title: '', desc: '' }), 1500)
  }

  function onMyelin() {
    setPlayers(prev => {
      const arr = [...prev]
      const p = { ...arr[currentPlayerIndex] }
      if (p.myelin >= 100) {
        p.myelin -= 100
        p.speed = (p.speed || 1.0) + 0.5
        arr[currentPlayerIndex] = p
        setAchievement({ visible: true, title: 'Myelin Added!', desc: 'Conduction velocity increased!' })
      } else {
        setAchievement({ visible: true, title: 'Not enough myelin', desc: `Need 100 myelin — you have ${p.myelin}` })
      }
      return arr
    })
  }
  function onBoost() {
    setPlayers(prev => {
      const arr = [...prev]
      const p = { ...arr[currentPlayerIndex] }
      if (p.myelin >= 75) {
        p.myelin -= 75
        const nextCount = Math.min(questionsNeeded, stageProgressCount + 1)
        setStageProgressCount(nextCount)
        p.stageProgress = nextCount / questionsNeeded
        arr[currentPlayerIndex] = p
        setAchievement({ visible: true, title: 'Channel Boost!', desc: 'Advanced through stage faster!' })
        if (nextCount >= questionsNeeded) {
          if (currentStageIndex < STAGES.length - 1) {
            setStageTransition({ visible: true, fromStageIndex: currentStageIndex, toStageIndex: currentStageIndex + 1 })
          } else {
            setAchievement({ visible: true, title: 'Action Potential Complete!', desc: "You've successfully fired an action potential!" })
            setTimeout(() => resetGame(), 1200)
          }
        }
      } else {
        setAchievement({ visible: true, title: 'Not enough myelin', desc: `Need 75 myelin — you have ${p.myelin}` })
      }
      return arr
    })
  }
  function onSkip() {
    setPlayers(prev => {
      const arr = [...prev]
      const p = { ...arr[currentPlayerIndex] }
      p.health = Math.max(0, p.health - 15)
      p.currentStreak = 0
      p.stageProgress = Math.max(0, p.stageProgress - 0.2)
      arr[currentPlayerIndex] = p
      return arr
    })
    loadQuestionForStage()
  }
  function onHint() {
    setPlayers(prev => {
      const arr = [...prev]
      const p = { ...arr[currentPlayerIndex] }
      if (p.myelin >= 30) {
        p.myelin -= 30
        const s = STAGES[currentStageIndex]
        const hints = [
          `Current stage: ${s.title}`,
          `Voltage: ${s.voltage} mV`,
          `Na+ channels: ${s.naChannels}`,
          `K+ channels: ${s.kChannels}`,
          s.description,
        ]
        const hint = hints[Math.floor(Math.random() * hints.length)]
        setAchievement({ visible: true, title: '💡 Hint', desc: `${hint} (Cost: 30 myelin)` })
      } else {
        setAchievement({ visible: true, title: 'Not enough myelin', desc: `Need 30 myelin — you have ${p.myelin}` })
      }
      arr[currentPlayerIndex] = p
      return arr
    })
  }
  function onPauseToggle() { setPaused(p => !p) }

  return (
    <Board
      modeLabel="Single Player"
      players={players}
      currentPlayerIndex={currentPlayerIndex}
      currentStageIndex={currentStageIndex}
      stageProgress={stageProgressCount}
      totalQuestions={totalQuestions}
      totalCorrect={totalCorrect}
      question={question}
      onAnswer={onAnswer}
      onMyelin={onMyelin}
      onBoost={onBoost}
      onSkip={onSkip}
      onHint={onHint}
      onPauseToggle={onPauseToggle}
      onMainMenu={onExit}
      showTurnIndicator={{ visible: false, text: '', color: '' }}
      stageTransition={stageTransition}
      achievement={achievement}
      onCloseAchievement={() => setAchievement({ visible: false, title: '', desc: '' })}
      onCloseStageTransition={handleCloseTransition}
    />
  )
}
