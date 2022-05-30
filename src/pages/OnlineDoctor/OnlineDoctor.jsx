import React from 'react';
import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import Partners from '../../components/Partners/Partners';
import Reklama from '../../components/Reklama/Reklama';
import OnlineHelp from '../Home/_components/OnlineHelp/OnlineHelp';
import DoctorTypesBlog from './_components/DoctorTypesBlog/DoctorTypesBlog';
import OnlineDoctorHeader from './_components/OnlineDoctorHeader/OnlineDoctorHeader';


function OnlineDoctor() {
    return (
        <div className='OnlineDoctor globalContainer'>
            <OnlineDoctorHeader/>
            <DoctorTypesBlog/>
            <OnlineHelp/>
            <DownloadMobile/>
            <Reklama/>
            <Partners/>




            
        </div>
    )
}

export default OnlineDoctor