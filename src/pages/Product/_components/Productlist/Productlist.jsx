import React from 'react'
import Breadcrum from '../../../../components/Breadcrum/Breadcrum'
import { Row, Col, Form,Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import filter from "../../../../images/filter.svg"
import Down from "../../../../icons/down.svg";
import tree from "../../../../images/Group.png"
import ProductCard from '../../../../components/ProductCard/ProductCard';
import './Productlist.scss';
function Productlist() {


  const newlist = ['']
  for (let i = 0; i < 5; i++) {
    newlist.push(
      <Col lg={4} className="mb-3">
        <ProductCard />
      </Col>
    )
  }
  return (
    <div className='product_list globalContainer'>
        <Breadcrum width={1240}>
          <BreadcrumbItem href="/product">
              Mahsulotlar 
          </BreadcrumbItem>
         / Mahsulotlar
        </Breadcrum>
        <Row>
        <Col lg={3}>
          <div className="product_list_title">
            <h1>Mahsulotlar</h1>
          </div>
          <div className="product_list_category">
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
                    <Form.Check type="checkbox" label="Choy" />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox2">
                    <Form.Check type="checkbox" label="Asal" />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox3">
                    <Form.Check type="checkbox" label="Yog’" />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox4">
                    <Form.Check type="checkbox" label="Non" />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox5">
                    <Form.Check type="checkbox" label="Ziravorlar" />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox6">
                    <Form.Check type="checkbox" label="Sharbatlar" />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox7">
                    <Form.Check type="checkbox" label="Lolipoplar" />
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox8">
                    <Form.Check type="checkbox" label="Tabletkalar" />
                  </Form.Group>
                </Form>
                <a href="#"><img src={Down} alt="icon" /> Ko’proq</a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={9}>
          <div className="product_list_tab">
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
                <a href="#">Skidka</a>
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
                {
                  newlist
                }
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <div className="product_back_tree">
              <img src={tree} alt="" />
      </div>

    </div>
  )
}

export default Productlist