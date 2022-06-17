import React from 'react'
import { useState } from 'react'
import Modal from '../../../User/components/Modal/Modal'
import AdminTitle from '../../components/AdminTitle/AdminTitle'
import Acardions from './_components/Acardions/Acardions'
import MyAccount from './_components/MyAccount/MyAccount'
import Planeta from './_components/SVG/Planeta'
import Shotka from './_components/SVG/Shotka'
import TopDoctors from '../../../User/pages/OnlineDoctor/_components/TopDoctors/TopDoctors'
function Settings() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <AdminTitle>Settings</AdminTitle>
      <span onClick={()=>setOpen(true)}><Acardions /></span>
      <Acardions title={'Language'} span={'Uzbek'}  img={<Planeta/>} />
      <Acardions title={'Theme mode'} span={'Light'}  img={<Shotka/>} />

     {
      open &&
     <Modal boolen={false}  set={setOpen} >
        <MyAccount/>
     </Modal>
     } 

     {/* <TopDoctors/> */}
    </div>
  )
}

export default Settings