import { color } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../../Navbar/navBar';

const productpage = () => {
  return (
    <div>
        <NavBar/>
        <div className='productImage'>
        </div>
        <div className='productDetails'>
          <h3>Product Name</h3>
          <p>project description ......................................</p>
          <li className='colorList'>
            <button style={{color:'red'}}>red</button>
            <button style={{color:'blue'}}>blue</button>
            <button style={{color:'black'}}>black</button>
            <button style={{color:'white'}}>white</button>
            <button style={{color:'yellow'}}>yellow</button>
          </li>
          <h3>$30<span style={{'fontStyle':'strikethrough','fontSize1':'20px'}}>$60</span></h3>
          <p className='sellerDetails'>
            This product belongs to respected seller will be update later
          </p>
        </div>
    </div>
  )
}

export default productpage