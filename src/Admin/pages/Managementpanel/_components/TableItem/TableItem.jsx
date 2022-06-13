import './TableItem.scss'
import arrow from '../../../../../icons/arrow002.svg'
import ArrowImg from '../ArrowImg/ArrowImg'

function TableItem({children, style}) {
  return (
    <div style={style} className='TableItem'>
        <div className="TableItem__item">
            {children}
        </div>
        <div className="TableItem__item">
            <ArrowImg/>
        </div>
    </div>
  )
}

export default TableItem