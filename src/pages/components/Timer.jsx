import React from 'react'
import { useState, useEffect } from 'react'


const Timer = ({time, setTime, isRunning, setIsRunning, name}) => {

    useEffect(() => {
        if (isRunning && time > 0) {
            const interval = setInterval(() => {
                setTime(time - 1);
            }, 1000);

            if (time <= 0) {
                setIsRunning(false);
            }

            return () => clearInterval(interval);
        }
    }, [isRunning, time]);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
        <div>
            {time > 0 ? 
                <h1 className="text-4xl font-light text-gray-700">
                    {name ? name : 'Anonymous'}, <span className="font-medium">{time}</span> seconds remaining
                </h1> 
                : 
                <h1 className="text-4xl font-light text-gray-700">Time's up!</h1>
            }
        </div>
    </div>
  )
}

export default Timer