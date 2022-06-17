import './TableItem.scss'
import arrow from '../../../../../icons/arrow002.svg'
import ArrowImg from '../ArrowImg/ArrowImg'

function TableItem({children, style , img=<ArrowImg/>}) {
  return (
    <div style={style} className='TableItem d-flex align-items-center '  >
        <div className="TableItem__item ">
            {children}
        </div>
        <div className="TableItem__item">
            {img}
        </div>
    </div>
  )
}

export default TableItem