import './GreenButton.css'

import React from 'react'

export default function GreenButton({children}) {
  return (
    <button className='green-btn'>
        {children}
    </button>
  )
}
