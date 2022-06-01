import React from 'react';
import AboutHeader from './_companents/AboutHeader/AboutHeader';
import AboutThree from './_companents/AboutThree/AboutThree';
import Partners from '../../components/Partners/Partners';
import Reklama from '../../components/Reklama/Reklama';
import AboutHistory from './_companents/AboutHistory/AboutHistory';
import Now from './_companents/Now/Now';





const About = () => {
    return (
    <>
        {/* <div className='about globalContainer'> */}
            <AboutHeader/>
            <AboutHistory/>
            <AboutThree/>
            <Now/>
            <Reklama/>
            <Partners/>
            
        {/* </div> */}
        </>
    );
};



export default About;