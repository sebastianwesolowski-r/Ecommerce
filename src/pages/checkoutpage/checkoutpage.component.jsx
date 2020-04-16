import React from 'react';

import './checkoutpage.styles.scss';

const Checkoutpage = () => (
    <div className="checkout">
         <div className="checkout-header">
            <div className="summary">SUMMARY</div>
            <div className="quantity">QUANTITY</div>
            <div className="total">TOTAL</div>
         </div>
         <div className="cart-total">
             <p>CART TOTAL:</p> 
         </div>
    </div>
);

export default Checkoutpage;