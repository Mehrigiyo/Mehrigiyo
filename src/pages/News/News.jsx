import React from 'react'
import Breadcrum from '../../components/Breadcrum/Breadcrum'
import NewCompony from './_components/NewCompony/NewCompony'
import Notifacation from '../../components/Notifacation/Notifacation'
import NewsComponent from '../../components/NewsComponent/NewsComponent'


function New() {
  return (
    <div>
      <Breadcrum name={"Yangiliklar"} url={"/news"}>Yangiliklar</Breadcrum>
      <NewCompony/>
      <Notifacation/>
      <NewsComponent/>
      
    </div>
  )
}

export default New