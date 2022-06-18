import { useState } from 'react';
import myImg from '../../../../../icons/doctorNev.png'
import useForm from '../../../../hooks/useForm';

import './MyAccount.scss'
function MyAccount() {
//    const [] = useForm() 
    const [isActive, setIsActive] = useState(false)

    const handelEdit= (e)=>{
        e.preventDefault()
       setIsActive(prev=> !prev)
        
    }
  return (
    <>
     <div className={`MyAccount ${isActive ? 'active' : ''}`}>
        <div className='d-grid grid-center'>
            <h3 className='MyAccount__title'>My account</h3>
        </div>
        <div className="MyAccount__body ">
            <form  className='d-grid grid-center'>
                <label htmlFor="imageSave" className=''>
                    <div className='MyAccount__img border d-grid grid-center'> 
                    <img src={myImg} alt="my" />
                    
                    </div>

                    <p>Fotosurat yuklang (optinal)</p>
                   <input id='imageSave' type="file"  accept="image/png, image/jpg, image/gif, image/jpeg" />
                </label>
                <label  htmlFor="userName" >Foydalanuvchi nomi
                <input  id='userName'  type="text"   value={'Nurmuhammedov Mahmudjon'} />
                </label>
                <label   htmlFor="tel" >Telefon raqami
                <input  id='tel' type="text"  value={'+998 (99) 090-09-98'} />
                </label>
                <label htmlFor="email" >Elektron pochta (optinal)
                <input id='email' type="text"  value={'nmahmud0928@gmail.com'} />
                </label>
                <label className={ `password  ${isActive ? 'active' : ''}`} htmlFor="passowrd">
                    Parolni o’ylab toping
                 <input id='passowrd' className={ `password  ${isActive ? 'active' : ''}`} value='sdfeifgsn'  type="password" />
                </label>
                <button className={`MyAccount__btn`} onClick={(e)=>handelEdit(e)} >{!isActive? 'Edit' : 'Update Profile'}</button>
            </form>
        </div>
     </div>
    </>
  )
}

export default MyAccount