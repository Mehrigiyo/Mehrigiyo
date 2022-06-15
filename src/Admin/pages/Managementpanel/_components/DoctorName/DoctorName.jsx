import './DoctorName.scss'
import img from '../../../../../icons/pustoy.png'
import doctorimg from '../../../../../icons/doctorNev.png'
function DoctorName() {
  return (
    <>
      <div className="AdminDoctorCard__about d-flex align-items-start ">
                  <div className="AdminDoctorCard__about__img mr-3">
                    <img src={doctorimg} alt="img" />
                  </div>
                  <div className="AdminDoctorCard__about__item">
                     <h6 className='m-0'>
                       Abdullayev Bahrom
                     </h6>
                     <p>Tashkent, Uzbekistan</p>
                  </div>
              </div>
    </>
  )
}

export default DoctorName