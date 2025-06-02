import React from 'react'
import { useEffect } from 'react'

const AskName = ({name, setName}) => {

  return (
    <div className="flex flex-col items-center gap-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-600">What's your name?</label>
        <input 
            type="text" 
            id="name"
            placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
        />
    </div>
  )
}

export default AskName