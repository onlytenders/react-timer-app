import React from 'react'

const WellDoneMessage = ({name}) => {
    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm animate-fade-in">
            <h2 className="text-3xl font-light text-gray-700">
                Well Done <span className="font-medium">{name ? name : 'Anonymous'}</span>! 🎉
            </h2>
        </div>
    )
}

export default WellDoneMessage