import './SmallTitle.scss'

function SmallTitle({title='Kelgusi jadval'}) {
  return (
    <div className='SmallTitle d-flex justify-content-between'>
         <h4>{title}</h4>
         <a href="#">
            Hammasi
         </a>
    </div>
  )
}

export default SmallTitle