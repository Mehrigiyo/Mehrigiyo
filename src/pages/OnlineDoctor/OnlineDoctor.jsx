import React from 'react';
import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import ItemPage from '../../components/ItemPage/ItemPage';
import Partners from '../../components/Partners/Partners';
import Reklama from '../../components/Reklama/Reklama';
import OnlineHelp from '../Home/_components/OnlineHelp/OnlineHelp';
import DoctorTypesBlog from './_components/DoctorTypesBlog/DoctorTypesBlog';
import OnlineDoctorHeader from './_components/OnlineDoctorHeader/OnlineDoctorHeader';
import TopDoctors from './_components/TopDoctors/TopDoctors';
import DoctoInfo from './_components/DoctorInfo/DoctoInfo';

function OnlineDoctor() {
    return (
        <>
       
         <div className='OnlineDoctor '>
            <OnlineDoctorHeader/>
            <DoctorTypesBlog/>
            <OnlineHelp/>
            <TopDoctors />
            <DownloadMobile/>
            <Reklama/>
            <Partners/>
            <ItemPage >
            <DoctoInfo />
            </ItemPage>
         </div> 
        </>
    )
}

export default OnlineDoctor;