import React from 'react'
import './ProductReklama.scss';
import left_img_prd from '../../../../images/Group 2535222.png';
import tree from "../../../../images/Group.png"
function ProductReklama() {
    return (
        <div className='product_reklama'>
            <div className="product_reklama_card">
                <div className="product_reklama_image">
                    <img src={left_img_prd} alt="" />
                </div>
                <div className="product_reklama_text">
                    <span>Mehrigiyo</span>
                    <h4>50% chegirma <br />
                        sutli choyda</h4>
                    <p>1+1 choy bilan xarid qilganingizda</p>
                </div>
            </div>
            <div className="Product_back_tree">
                    <img src={tree} alt="" />
                </div>
        </div>
    )
}

export default ProductReklama