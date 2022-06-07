

import React from 'react'
import './Date.scss'
function Day({day,weekDay, className}) {
  const weekSday = ()=>{
    switch (weekDay) {
      case 1:
        return 'Du'
      case 2:
        return 'Se'
      case 3:
        return 'Cho';
      case 4:
        return 'Pa';
      case 5:
        return 'Ju';
      case 6:
        return 'Sha'
      case 0:
        return 'Yak'
      default:
      return  'xatolik';
    }
  }


  return (
    <div className={className}>
      <h5>{weekSday()}</h5>
      <span>{day}</span>
    </div>
  )
}

export default Day