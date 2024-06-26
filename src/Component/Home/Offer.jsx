import React from 'react'

export default function Offer() {
  return (
    <div style={{ zIndex: "1" }}>
      <div className="fixed-right">
        <button className='px-4 py-1' style={{ background: "#E2B659", fontWeight: "500" }}>Flate 15 % OFF</button>
      </div>
      <div className="feedback-right">
        <button className='px-4 py-1' style={{ background: "#D9D9D9", fontWeight: "500" }}>Feedback</button>
      </div>
    </div>
  )
}
