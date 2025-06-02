import React, { useEffect } from 'react'
import { useState } from 'react'

import Timer from './components/Timer'
import TimePicker from './components/TimePicker'
import AskName from './components/AskName'
import WellDoneMessage from './components/WelldoneMessage'
import MotivationalPhrase from './components/MotivationalPhrase'
import ProgressBar from './components/ProgressBar'

const Home = () => {

    let [time, setTime] = useState(10);
    let [totalTime, setTotalTime] = useState(10);
    let [name, setName] = useState('');
    let [isRunning, setIsRunning] = useState(false);

  return (
    <div className="min-h-screen max-w-screen flex flex-col items-center justify-center space-y-8 p-8">
          <div className="w-full max-w-md">
            {isRunning ? <MotivationalPhrase /> : <AskName name={name} setName={setName} />}
          </div>

          <div className="w-full max-w-md">
            <TimePicker time={time} setTime={setTime} setTotalTime={setTotalTime} />
          </div>

          <div className="w-full max-w-md">
            {isRunning ? <Timer time={time} setTime={setTime} isRunning={isRunning} setIsRunning={setIsRunning} name={name} /> : ""}
          </div>

          <div className="w-full max-w-md">
            {isRunning ? <ProgressBar time={time} isRunning={isRunning} totalTime={totalTime} setTotalTime={setTotalTime}/> : ""}
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => setIsRunning(!isRunning)} 
              disabled={isRunning}
              className="!bg-emerald-400 !text-white px-6 py-2 rounded-xl shadow-sm hover:!bg-emerald-500 active:!bg-emerald-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Start
            </button>

            <button 
              onClick={() => {
                setTime(10);
                setName('');
                setIsRunning(false);
              }}
              className="!bg-rose-400 !text-white px-6 py-2 rounded-xl shadow-sm hover:!bg-rose-500 active:!bg-rose-600 transition-all duration-200"
            >
              Reset
            </button>
          </div>

          <div className="w-full max-w-md">
            {time <= 0 && <WellDoneMessage name={name} />}
          </div>
    </div>
  )
}

export default Home