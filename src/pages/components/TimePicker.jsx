import React from 'react'

const TimePicker = ({time, setTime, totalTime, setTotalTime}) => {
  return (
    <div className="flex flex-col items-center gap-2">
        <label htmlFor="time" className="text-sm font-medium text-gray-600">Select Duration</label>
        <select 
            name="time" 
            id="time" 
            onChange={(e) => {
                setTime(e.target.value)
                setTotalTime(e.target.value)
            }}
            className="w-full px-4 py-2 bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
        >
            <option value="10">10 seconds</option>
            <option value="20">20 seconds</option>
            <option value="30">30 seconds</option>
        </select>
    </div>
  )
}

export default TimePicker