import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WelcomeOrganik.css';
import Button from '../../../../components/Buttons/Button'
import VideoLink from '../../../../components/VideoLink/VideoLink';
import WelocomOrganicLogos from "../../../../images/organic logos 1.png"


const WelcomeOrganic = () => {
    return (
        <div className="welcome_organic">
            <div className="back">
            </div>
            <div className='globalContainer'>
                    <Container fluid>
                        <Row>
                            <Col lg={5}>
                                <div className="welcome_organik_left">
                                    <div className="wecome_organic_name">
                                        <h6>MEHRIGIYOGA Xush kelibsiz</h6>
                                    </div>
                                    <div className="wecome_organic_title">
                                        <h4>Yaxshi kelajak uchun salomatlik</h4>
                                    </div>
                                    <div className="wecome_organic_text">
                                        <p>1992-yildan buyon shifokorlar, oʻsimlikshunoslar, sharq tabobati izdoshlari, fermer va texnologlardan iborat “MEHRIGIYO” professional jamoasi Fargʻona vodiysi va oʻz plantatsiyalarida yetishtirib, zamonaviy farmatsevtika sanoati yutuqlari va qadimiy taʼlimot tajribasini muvaffaqiyatli oʻzida mujassamlashtirib kelmoqda. shifobaxsh choy, asal, moy, sirop, holva va boshqalar ishlab chiqaradi.</p>
                                    </div>
                                    <div className="wecome_organic_image">
                                        <img src={WelocomOrganicLogos} alt="picture" />
                                    </div>
                                    <div className="wecome_organic_link d-flex">
                                        <Button className="btn">Onlayn uchrashuv belgilash</Button>
                                        <VideoLink/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </div>
        </div>


    );
}

export default WelcomeOrganic;
