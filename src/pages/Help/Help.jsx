import React from 'react'
import HelpHeader from './_components/HelpHeader/HelpHeader'
import Form from "../../components/Form/Form";
import HelpMap from "./_components/HelpMap/HelpMap";

function Help() {

  return (
    <div className='help_page globalContainer'>
        <HelpHeader/>
        <Form/>
        <HelpMap/>
    </div>
  )
}

export default Help