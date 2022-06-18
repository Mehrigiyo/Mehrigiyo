
import Button from '../../../../components/Buttons/Button'
import './DoctorCard.scss'

import imgs from '../../../../../images/Bitmap001.jpg'
import img2 from '../../../../../icons/Vector001.svg'
import { Link } from 'react-router-dom'
function DoctorCard({data}) {
const Api="http://207.154.244.140:8000"

  
  const saveDoctor = ()=>{
    return data.id
  }

  return (
    <>
        <div className="doctorCard" >
            <div className="doctorCard__img">
                <img className='doctorCard__img__first' src={Api+data.image} alt="img" />
                <button className='doctorCard__img__button'>TOP</button>
                <img onClick={saveDoctor} className='doctorCard__img__icon' src={img2} alt="img" />
            </div>
            <div className="doctorCard__body">
             <h5>{data.full_name.split(" ")[0][0]+"."+data.full_name.split(" ")[1] }</h5>
             <span>⭐️ 4.5 (135 reviews)</span>
             <Link to={`/onlinedoctor/${data.id}` }>
                <button className='doctorCard__button' >Appointment</button>
             </Link>
            </div>
        </div>
     </>
  )
}

export default DoctorCard