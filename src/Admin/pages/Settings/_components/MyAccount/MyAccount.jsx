import { useState } from 'react';
import myImg from '../../../../../icons/doctorNev.png'
import useForm from '../../../../hooks/useForm';
import { useSelector,useDispatch } from 'react-redux'
import './MyAccount.scss'
import { useEffect } from 'react';
import { userGet } from '../../../../../store/reducers/get/userme/action';
import { putUser } from '../../../../../store/reducers/put/UserMePut/action';
function MyAccount() {
    const { userData, logindate}  = useSelector((state)=> state.usermeReducer)
    console.log(logindate);
    const dispatch = useDispatch();
     useEffect(()=>{
        dispatch(userGet())
     },[])
    const {data} = logindate
    console.log(data);
   
    const {logindate:h, error:k} = useSelector((state)=>state.dataUserMe)
     console.log(h);
     console.log(k);



   const [value, upDate] = useForm(data) 
   const {onChange} = upDate
   const [isActive, setIsActive] = useState(false)

    const handelEdit= (e)=>{
        e.preventDefault()
       setIsActive(prev=> !prev)
        if(isActive){
            console.log('dispatch(putUser(value))');
            dispatch(putUser(value))
        }
    }


    
  return (
    <>
     <div className={`MyAccount ${isActive ? 'active' : ''}`}>
        <div className='d-grid grid-center'>
            <h3 className='MyAccount__title'>My account</h3>
        </div>
        <div className="MyAccount__body ">
            <form  className='d-grid grid-center'>
                <label htmlFor="imageSave" className='imageSave'>
                    <div className='MyAccount__img border d-grid grid-center'> 
                    <img src={myImg} alt="my" />
                    
                    </div>

                    <p>Fotosurat yuklang (optinal)</p>
                   {isActive &&  <input id='imageSave' type="file"  accept="image/png, image/jpg, image/gif, image/jpeg" />}
                </label>
                <label  htmlFor="userName" >Foydalanuvchi nomi
                <input  id='userName' type="text" name='last_name' onChange={isActive ? onChange : null}     value={value?.last_name } />
                </label>
                <label   htmlFor="tel" >Telefon raqami
                <input  id='tel' type="text" name='username'  onChange={isActive ? onChange : null}     value={value?.username}/>
                </label>
                <label htmlFor="email" >Elektron pochta (optinal)
                <input id='email' type="text"  name='email' onChange={isActive ? onChange : null}     value={value?.email } />
                </label>
                <label className={ `password  ${isActive ? 'active' : ''}`} htmlFor="passowrd">
                    Parolni o’ylab toping
                 <input id='passowrd' className={ `password  ${isActive ? 'active' : ''}`} type="password" name='password' onChange={isActive ? onChange : null}     value={value?.password}   />
                </label>
                <button className={`MyAccount__btn`} onClick={(e)=>handelEdit(e)} >{!isActive? 'Edit' : 'Update Profile'}</button>
            </form>
        </div>
     </div>
    </>
  )
}

export default MyAccount