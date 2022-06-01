import React from 'react';
import AboutHeader from './_companents/AboutHeader/AboutHeader';
import AboutThree from './_companents/AboutThree/AboutThree';
import Partners from '../../components/Partners/Partners';
import Reklama from '../../components/Reklama/Reklama';
import AboutHistory from './_companents/AboutHistory/AboutHistory';




const About = () => {
    return (
    <>
        {/* <div className='about globalContainer'> */}
            <AboutHeader/>
            <AboutHistory/>
            <AboutThree/>
            <Reklama/>
            <Partners/>
        {/* </div> */}
        </>
    );
};



export default About;