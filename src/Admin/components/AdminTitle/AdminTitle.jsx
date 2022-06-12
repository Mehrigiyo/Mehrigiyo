import React from 'react'
import './AdminTitle.scss';
import SearchIcon from '../../../icons/Search.svg';
import bgtree from '../../../images/Group 2535107.png';
function AdminTitle({ children = "Umumiy koʻrinish" }) {
    return (
        <>
            <div className='admin_title'>
                <div className="admin_title__name">
                    <h1>{children}</h1>
                    <p>Bugun bemorlarimizga xizmat qilish uchun ajoyib kun.</p>
                </div>
                <div className="admin_title__search">
                    <form action="#">
                        <input type="search" name="Qidirish" placeholder='Qidirish' id="1" />
                        <img src={SearchIcon} alt="" />
                    </form>
                </div>
            </div>
            <div className="back-tree">
                <img src={bgtree} alt="" />
            </div>
        </>

    )
}

export default AdminTitle