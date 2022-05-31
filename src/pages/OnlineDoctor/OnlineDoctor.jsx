import React from 'react';
import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import Partners from '../../components/Partners/Partners';
import Reklama from '../../components/Reklama/Reklama';
import OnlineHelp from '../Home/_components/OnlineHelp/OnlineHelp';
import OnlineDoctorHeader from './_components/OnlineDoctorHeader/OnlineDoctorHeader';
import TopDoctors from './_components/TopDoctors/TopDoctors';


function OnlineDoctor() {
    return (
        <>
       
         <div className='OnlineDoctor globalContainer'>
            <OnlineDoctorHeader/>
            <OnlineHelp/>
            <TopDoctors />
            <DownloadMobile/>
            <Reklama/>
            <Partners/>
         </div> 
        </>
    )
}

export default OnlineDoctor