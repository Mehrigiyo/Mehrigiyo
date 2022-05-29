
import Button from '../../../../components/Buttons/Button'
import './DoctorCard.scss'

import imgs from '../../../../images/Bitmap001.jpg'
import img2 from '../../../../icons/Vector001.svg'
function DoctorCard({data}) {
  console.log(data);
  const {img, text, name} = data ||  {
    img: imgs,
    name: 'S. Gavhar',
    text: '⭐️ 4.5 (135 reviews)'
}
  return (
    <>
        <div className="doctorCard">
            <div className="doctorCard__img">
                <img src={img} alt="img" />
                <button className='doctorCard__img__button'>TOP</button>
                <img className='doctorCard__img__icon' src={img2} alt="img" />
            </div>
            <div className="doctorCard__body">
             <h5>{name}</h5>
             <span>{text}</span>
             <button className='doctorCard__button'>Appointment</button>
            </div>
        </div>
     </>
  )
}

export default DoctorCard