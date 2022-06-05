import {React, useState} from 'react'
import {Button} from 'react-bootstrap';
import './ProductCount.scss';
function ProductCount() {
    const [counter, setCounter] = useState(1);

    const Increase = () => {
        setCounter(count => count +1)
    }
    const Decrease =() => {
        if(counter == 1){
            return
        }
        setCounter(count => count - 1)
    }

  return (
    <div className='product_count'>
        <div className="counter">
            <span className="btn_count" onClick={Decrease}>
                    -
            </span>
            <span className='counter_name'>{counter}</span>
            <span className="btn_count" onClick={Increase}>
                    +
            </span>
        </div>
        <div className="price_name">
            <p>
                {   counter > 0 &&
                    counter * 16000
                }
            </p>
        </div>
    </div>
  )
}

export default ProductCount