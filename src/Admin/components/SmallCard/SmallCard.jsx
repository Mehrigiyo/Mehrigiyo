import './SmallCard.scss'
import icons from '../../../icons/Card001.svg'
function SmallCard({title=' 8600 53** **** 8093',icon=<img src={icons} />}) {
  return (
    <div className='SmallCard d-flex align-items-center'>
        <button className="SmallCard__btn mr-2">
            x
        </button>

        <p className="SmallCard__title ml-2">
          {title}
        </p>
        <div className="m-auto">
            {icon}

        </div>


    </div>
  )
}

export default SmallCard