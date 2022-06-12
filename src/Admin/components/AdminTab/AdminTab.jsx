import React, { useState } from 'react'
import "./AdminTab.scss"


function AdminTab( { children, name, }) {
  const [num, setNum] = useState(1);

  return (
    
    <div className='adminTab'>
      <div className="loginWrapper__box">
        <ul
          className={num === 1 ? "active" : "technalogy__spam"}
          onClick={() => setNum(1)}
        >
          <li className="technalogy__spam__in">
            <p>{children}</p>
          </li>
        </ul>
        <ul
          className={num === 2 ? "active2" : "technalogy__spam1"}
          onClick={() => setNum(2)}
        >
          <li className="technalogy__spam__in1">
            <p>{name} </p>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default AdminTab