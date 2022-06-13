import './AdminDoctorCard.scss';

import backgraound from '../../../../../images/background_221.png';
import doctorimg from '../../../../../icons/doctorNev.png'
import Vector from '../Vector/Vestor'; 
import { useState } from 'react';
function AdminDoctorCard() {
  //  const [inputValue, setInputValue] = useState({})

  //  function handelText(e){
  //     const = {
        
  //     }
  //    setInputValue()
  //  }
  return (
    <div className='AdminDoctorCard'>
        <img className='AdminDoctorCard__bg' src={backgraound} alt="." />
        <div className="AdminDoctorCard__body">
           <div className="AdminDoctorCard__item d-flex justify-content-between align-items-start">

              <div className="AdminDoctorCard__about d-flex align-items-start ">
                  <div className="AdminDoctorCard__about__img mr-3">
                    <img src={doctorimg} alt="img" />
                  </div>
                  <div className="AdminDoctorCard__about__item">
                     <h5>
                       Abdullayev Bahrom
                     </h5>
                     <p>Tashkent, Uzbekistan</p>
                     <span>⭐️ 4.5 (135 reviews)</span>
                  </div>
              </div>
              <Vector fill='#fff'/>


           </div>

           <div className="AdminDoctorCard__item">
               <span className='AdminDoctorCard__kasb'> Mutaxassisligi</span>
               <p className='AdminDoctorCard__type'>Nevropatolog</p>
           </div>
           <div className="AdminDoctorCard__item d-flex justify-content-between">
            <div>

              <span className='AdminDoctorCard__kasb'> Keyingi uchrashuv</span>
               <p className='AdminDoctorCard__type'>28/03/2022</p> 
            </div>
            <div>

              <span className='AdminDoctorCard__kasb'> Time</span>
              <p className='AdminDoctorCard__type'>09:00 - 10:00</p> 
            </div>
           </div>
           <div className="AdminDoctorCard__item AdminDoctorCard__from">
               <form action="#">
                  <input type="text" placeholder={`Qo'ng'iroqni boshlash vaqti:`}/>
               </form>
           </div>
        </div>

    </div>
  )
}

export default AdminDoctorCard