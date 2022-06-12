import React from 'react'
import { Form } from 'react-bootstrap'
import "./AdminHeader.scss"
import lupa from "../../../icons/lupa.svg";

function AdminHeader( {children}) {
  return (
    <div className='adminHeader '>
        <div className='adminHeader__adminText'>
            <h2>{children}</h2>
            <p>Bugun bemorlarimizga xizmat qilish uchun ajoyib kun.</p>
        </div>
        <div className='adminHeader__search'>
            <div className='adminHeader__search__searchInput'><input type="text" /></div>
            <div className='adminHeader__search__lupa'><img src={lupa} alt="lupa" /></div>
        </div>
    </div>
  )
}

export default AdminHeader