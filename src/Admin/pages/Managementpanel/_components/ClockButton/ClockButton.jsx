import GreenButton from '../../../../../User/components/Buttons/Button/GreenButton'
import Clock from '../Clock/Clock'


import './ClockButton.scss'
function ClockButton() {
  return (
    <>
      
      <div className='clockButton d-flex align-items-center  justify-content-between'>
         <div className="data d-flex align-items-center" ><Clock/> 30/03/2022</div>
         <span>-46:30</span>
      </div>       
    </>
  )
}

export default ClockButton