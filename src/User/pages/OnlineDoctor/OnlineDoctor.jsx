import React, {useEffect} from 'react';
import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import ItemPage from '../../components/ItemPage/ItemPage';
import Partners from '../../components/Partners/Partners';
import Reklama from '../../components/Reklama/Reklama';
import OnlineHelp from '../Home/_components/OnlineHelp/OnlineHelp';
import DoctorTypesBlog from './_components/DoctorTypesBlog/DoctorTypesBlog';
import OnlineDoctorHeader from './_components/OnlineDoctorHeader/OnlineDoctorHeader';
import TopDoctors from './_components/TopDoctors/TopDoctors';
import {useDispatch} from 'react-redux'
import apiRoot from '../../../store/apiRoot';
import {getTypes} from "../../../store/reducers/get/typesDoctor/action";

function OnlineDoctor() {
    const dispatch = useDispatch()

    useEffect(()=> {
        apiRoot.get('specialist/types/')
        .then((res)=> dispatch(getTypes(res?.data?.data)))
    },[])



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

         </div> 
        </>
    )
}

export default OnlineDoctor;