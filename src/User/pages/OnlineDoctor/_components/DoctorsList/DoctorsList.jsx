import React, { useEffect } from 'react'
import { Row, Col, Form , Breadcrumb} from 'react-bootstrap'
import CloseIcon from "../../../../../icons/top_Icon.svg"
import LeftIcon from "../../../../../images/Close_Icon.svg"
import Breadcrum from '../../../../components/Breadcrum/Breadcrum'
import './DoctorsList.scss';
import DoctorCard from '../DoctorCard/DoctorCard'
import filter from "../../../../../images/filter.svg"
import Down from "../../../../../icons/down.svg";
import tree from "../../../../../images/Group.png"
import { useDispatch, useSelector } from 'react-redux'
import { actionGetDoctors } from '../../../../../store/reducers/Specialist/specialistDoctors/action'
import { getFavoritDoctors } from '../../../../../store/reducers/user/FavoritDoctor/action'
function DoctorsList() {
  const {doctorsData , loading} = useSelector(state => state.dataDoctorsReduser);
 const { favoriteDoc=[] } = useSelector((state) => state.favoritDoctors);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(actionGetDoctors())
  },[])
  const addedFav = (id) =>{
    return favoriteDoc.filter(a=>a.id === id).length > 0
  }
  useEffect(()=>{
    dispatch(getFavoritDoctors());
  },[])
  // const newlist = ['']
  // for (let i = 0; i < 10; i++) {
  //   newlist.push(
  //     <Col lg={3} className="mb-3">
  //       <DoctorCard />
  //     </Col>
  //   )
  // }





  return (
    <div className='doctor_list globalContainer'>
      <div className="top_onlinedoctorheader d-flex">
        <div className="left_top d-flex">
          <a href="#"><img src={LeftIcon} /></a>
          <p>Bepul shifokor maslahat olish uchun avval mutaxassislikni tanlab va o’zizga ma’qul kelgan shifokorni tanlang </p>
        </div>
        <div className="right_top">
          <a href="#"><img src={CloseIcon} /></a>
        </div>
      </div>
      <Breadcrum width={1240}>
        <Breadcrumb.Item href="/onlinedoctor">
          Onlayn shifokorlar
        </Breadcrumb.Item>
        / Shifokorlar
      </Breadcrum>
      <Row>
        <Col lg={3}>
          <div className="doctor_list_title">
            <h1>Shifokorlar</h1>
          </div>
          <div className="doctor_list_category">
            <div className="category_title">
              <div className="category_name">
                <h4>Kategoriyalar</h4>
              </div>
              <div className="category_filter">
                <a href="#"><img src={filter} alt="filterimage" /> tozalash</a>
              </div>
            </div>
            <div className="category_list">
              <div className="form_link">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" disabled label="Hammasi" />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                    <Form.Check type="checkbox" isActive isInvalid label="Nevropatolog" />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox2">
                    <Form.Check type="checkbox" label="Genetika" />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox3">
                    <Form.Check type="checkbox" label="Stomatologiya" />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox4">
                    <Form.Check type="checkbox" label="Jarroh" />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox5">
                    <Form.Check type="checkbox" label="Kardiolog" />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox6">
                    <Form.Check type="checkbox" label="Dermotolog" />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox7">
                    <Form.Check type="checkbox" label="Yuqumli kasalliklar" />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox8">
                    <Form.Check type="checkbox" label="Endokrinolog 
                      (Ichki tibbiyot ixtisosligi)" />
                  </Form.Group>
                </Form>
                <a href="#"><img src={Down} alt="icon" /> Ko’proq</a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={9}>
          <div className="doctor_list_tab">
            <ul>
              <li>
                <span>Saralash:</span>
              </li>
              <li>
                <a href="#" className='active'>Yangi</a>
              </li>
              <li>
                <a href="#">Top</a>
              </li>
              <li>
                <a href="#">Ayol</a>
              </li>
              <li>
                <a href="#">Erkak</a>
              </li>
            </ul>
            <div className="doctor_list_tab_item">
              <Row>
                {/* {
                  newlist
                } */}
                 {loading? 'loading...':
                    doctorsData.map((item, index)=>(
                      <Col key={index} className='mb-3' xs={3}>
                          <DoctorCard data={item} addedFav={addedFav} />
                      </Col>
                    ))
                }
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <div className="doctorlist_back_tree">
        <img src={tree} alt="" />
      </div>
    </div>
  )
}

export default DoctorsList