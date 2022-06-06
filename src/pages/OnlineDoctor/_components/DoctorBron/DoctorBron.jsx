
import React from 'react'
import { useParams } from 'react-router-dom'
import ItemPage from '../../../../components/ItemPage/ItemPage'


import './DoctorBron.scss'


function DoctorBron() {
    const {id} = useParams()
  return (
      <>
      <ItemPage>

         {/* <div>DoctorBron <h1>{id}</h1></div> */}

         <section className='DoctorBron border'>
            <div>bron</div>
         </section>
      </ItemPage>
      </>
  )
}

export default DoctorBron