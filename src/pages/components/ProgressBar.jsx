import React from 'react'

const ProgressBar = ({time, isRunning, totalTime}) => {
  return (
    <div className='bg-gradient-to-r from-gray-100 to-slate-100 w-100 rounded-3xl p-1.5 shadow-lg'>
        <div 
            style={{width: `${(time/totalTime)*100}%`}}
            className='bg-gradient-to-r from-blue-200 to-gray-200 h-6 rounded-2xl transition-all duration-500 ease-in-out shadow-md'
        >
        </div>
    </div>
  )
}

export default ProgressBar