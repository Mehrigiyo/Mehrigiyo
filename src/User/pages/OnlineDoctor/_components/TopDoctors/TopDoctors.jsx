
import { Col, Row } from 'react-bootstrap'
import Button from '../../../../components/Buttons/Button'
import DoctorCard from '../DoctorCard/DoctorCard' 
import {data as f} from './Const'
import background from '../../../../../images/Group.png';
   
import './TopDoctors.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Slider from 'react-slick';
import { getFavoritDoctors } from '../../../../../store/reducers/user/FavoritDoctor/action';

function TopDoctors() {

 const {doctorsData, loading} = useSelector(state => state.dataDoctorsReduser);

 const { favoriteDoc=[] } = useSelector((state) => state.favoritDoctors);

 let settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5.5,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
  ],
};
  const addedFav = (id) =>{
    return favoriteDoc.filter(a=>a.id === id).length > 0
  }
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getFavoritDoctors());
  },[])
  return (
    <>
    <section className='topDoctors'>

      <div className="globalContainer">
        <div className="topDoctors__head d-flex justify-content-between">
            <h3>Top Shifokorlar</h3>
            <Button>Batafsil</Button>
        </div>
        <div className="topDoctors__body">
  
            <Row>
              {loading? <span className="doctorLisr__img__loading"></span>:
              <Slider {...settings}>
                {
                    doctorsData.map((item, index)=>(
                      <Col key={index} xs={2}>
                          <DoctorCard data={item} addedFav={addedFav} />
                      </Col>
                    ))
                }
  
                </Slider>
                }
            </Row>
        </div>
         <div className="topDoctors__bg">
                <img src={background} alt=" " />
         </div>
      </div>
    </section>
    
    {/* <Modal>smodal</Modal> */}

    </>
  )
}

export default TopDoctors