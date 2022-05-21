//  Reimboyev Shuhrat

import { Col, Row } from 'antd';
import React from 'react'
import Card from  '../Card/Card'
import {data} from './Const'


function NewsComponent() {
  return (
    <>
    <h1>news</h1>
    <Row className='globalContainer' gutter={190}>

        {
            data.map(({title, img, deckriptoin, hashTag, date}, index)=>( 
                
                <Col className="gutter-row" key={index} span={6} >
                    <Card data={{title, img, deckriptoin, hashTag, date}}/>
                </Col>
            ))
        }
    </Row>
    
    </>
  )
}

export default NewsComponent