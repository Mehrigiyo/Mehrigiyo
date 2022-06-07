

import React from 'react'
import './Date.scss'
function Date({day}) {
  return (
    <div className={'days ' + (day == 1 ? 'active': '')}>
      <h5>Today</h5>
      <span>{day}</span>
    </div>
  )
}

export default Date