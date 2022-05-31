import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrum from '../../../../components/Breadcrum/Breadcrum';
import './HelpHeader.scss';
import tree from "../../../../images/Group.png"
import FreDoctorTree from "../../../../images/Group 2535107.png"


function HelpHeader() {
    return (

        <div className='help_header'>
            <Container style={{ maxWidth: 960 }}>
                <Breadcrum>Yordam</Breadcrum>
                <div className="help_header_title">
                    <h1>Mehrigiyo sizga yordam beradi</h1>
                </div>
                <div className="help_header_leftBack">
                    <img src={FreDoctorTree} alt="" />
                </div>
                <div className="help_header_rightBack">
                    <img src={tree} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default HelpHeader