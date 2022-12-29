import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const maxRollTimes = 20
  const [activePlayer, setActivePlayer] = useState('')
  const [showButton, setShowButton] = useState(false)
  const list = ['Ratul', 'Nirob', 'Sonia', 'Yana']
  const truths = [
    ' Have you ever lied to your parents about something significant?',
    "What is the biggest secret you've ever kept from someone?",
    'Have you ever cheated on a test or exam?',
    'What is your biggest fear?',
    'Have you ever stolen something, no matter how small?',
    'What is your most embarrassing moment?',
    'Who is your celebrity crush?',
    'Have you ever lied to get out of trouble?',
    "What is the wildest thing you've ever done?",
    'Have you ever lied to your significant other?',
    "What is the worst thing you've ever done and not been caught for?",
    'What is the one thing you wish you could change about yourself?',
    'Have you ever lied on a job application or resume?',
    "What is the worst thing you've ever said to someone in the heat of the moment?",
    'Have you ever lied to get something you wanted?',
    "What is the biggest mistake you've ever made?",
    'Have you ever lied to protect someone else?'
  ]

  const dares = [
    'Sing a song in a silly voice',
    'Do your best impression of a chicken',
    'Do 10 jumping jacks',
    'Call a random number and try to sell them something'
  ]

  const [intrvl, setIntrvl] = useState()
  const [change, seChange] = useState()
  const [message, setMessage] = useState('')
  const [buttonActive, setButtonActive] = useState(false)

  useEffect(() => {
    if (change === 0) {
      clearInterval(intrvl)
      setShowButton(true)
    }
  })

  const showTruth = () => {
    setMessage(truths[Math.floor(Math.random() * 4)])
    setButtonActive(false)
  }
  const showDare = () => {
    setMessage(dares[Math.floor(Math.random() * 4)])
    setButtonActive(false)
  }
  const generateActivePlayer = () => {
    setShowButton(false)
    setMessage('')
    setButtonActive(true)
    clearInterval(intrvl)
    let counter = Math.floor(Math.random() * maxRollTimes + 1)
    seChange(counter)
    const interval = setInterval(() => {
      setActivePlayer(list[Math.floor(Math.random() * 4)])
      counter--
      seChange(counter)
    }, 100)
    setIntrvl(interval)
  }

  return (
    <div className='App'>
      <button onClick={generateActivePlayer}>Get Active Player</button>

      <h1 style={{ marginTop: 40 }}>{activePlayer}</h1>
      {showButton ? (
        <div style={{ marginTop: 20 }}>
          <button onClick={showTruth} disabled={!buttonActive}>
            Truth
          </button>
          <button onClick={showDare} disabled={!buttonActive}>
            Dare
          </button>
        </div>
      ) : (
        <></>
      )}
      {message ? (
        <div style={{ marginTop: 20 }}>{activePlayer + '! ' + message}</div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default App
