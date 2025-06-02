import React, { useState, useEffect } from 'react'

const MotivationalPhrase = () => {
    const phrases = [
        'You are amazing!',
        'You are doing great!',
        'You are a star!',
        'You are a champion!',
        'You are a legend!',
    ]

    const [phrase, setPhrase] = useState('');

    useEffect(() => {
        setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
    }, []); // Empty dependency array means this runs once when component mounts

    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-light text-gray-600">{phrase}</h2>
        </div>
    )
}

export default MotivationalPhrase