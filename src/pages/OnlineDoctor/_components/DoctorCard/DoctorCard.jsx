
import Button from '../../../../components/Buttons/Button'
import './DoctorCard.scss'

import imgs from '../../../../images/Bitmap001.jpg'
import img2 from '../../../../icons/Vector001.svg'
import {Store} from '../../../../Context/Context'
import { Link } from 'react-router-dom'
function DoctorCard({data}) {
  const {
    modalVisible, 
    handelVisible,
    setModalData,
    setModalVisible
    
} = Store()
  const {img,id, text, name} = data ||  {
    id: 1000,
    img: imgs,
    name: 'S. Gavhar f`',
    text: '⭐️ 4.5 (135 reviews)'
}
// console.log(props.data);
  return (
    <>
        <div className="doctorCard" >
            <div className="doctorCard__img">
                <img className='doctorCard__img__first' src={img} alt="img" />
                <button className='doctorCard__img__button'>TOP</button>
                <img className='doctorCard__img__icon' src={img2} alt="img" />
            </div>
            <div className="doctorCard__body">
             <h5>{name}</h5>
             <span>{text}</span>
             <Link to={`/onlinedoctor/${id}` }>
                <button className='doctorCard__button' >Appointment</button>
             </Link>
            </div>
        </div>
     </>
  )
}

export default DoctorCard