import myImg from '../../../../../icons/doctorNev.png'
import useForm from '../../../../hooks/useForm';

import './MyAccount.scss'
function MyAccount() {
//    const [] = useForm()
    const handelEdit= (e)=>{
        e.preventDefault();
        console.log(e);
        
    }
  return (
    <>
     <div className='MyAccount  '>
        <div className='d-grid grid-center'>
            <h3 className='MyAccount__title'>My account</h3>
        </div>
        <div className="MyAccount__body ">
            <form  className='d-grid grid-center'>
                <div className='MyAccount__img border d-grid grid-center'> 
                <img src={myImg} alt="my" />
                </div>
                <label  htmlFor="userName">Foydalanuvchi nomi</label>
                <input type="text"  id='userName' value={'Nurmuhammedov Mahmudjon'} />
                <label htmlFor="tel" >Telefon raqami</label>
                <input type="text" id='tel' value={'+998 (99) 090-09-98'} />
                <label htmlFor="email" >Elektron pochta (optinal)</label>
                <input type="text" id='email' value={'nmahmud0928@gmail.com'} />
                {/* <label htmlFor="userName">Foydalanuvchi nomi</label>
                <input type="text" /> */}

                <button className='MyAccount__btn' onClick={handelEdit}>Edit</button>
            </form>
        </div>
     </div>
    </>
  )
}

export default MyAccount