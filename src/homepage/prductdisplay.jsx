import React from "react";
import Styles from './productdisplay.module.css'
const Productdisplay = ({ productdetails }) => {
  return (
    <div className={Styles.productcontainer}>
      <img src={`products/${productdetails.id}.jpg`} alt="products" />
      <h2>{productdetails.name}</h2>
      <h3>Price: {productdetails.price}</h3>
    </div>
  )
}
export default Productdisplay;