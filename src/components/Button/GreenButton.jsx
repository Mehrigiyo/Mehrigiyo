import './GreenButton.scss'

import React from 'react'

export default function GreenButton({children}) {
  return (
    <button className='green-btn'>
        {children}
    </button>
  )
}
