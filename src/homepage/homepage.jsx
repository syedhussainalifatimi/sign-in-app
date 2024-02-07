import React from "react";
import Styles from './homepage.module.css'
import products from "../productdata/productdata";
import Productdisplay from "./prductdisplay";
const Homepage = () => {
  return (
    <div className={Styles.productlistbox}>
      {products.map(productdetails =>
        <Productdisplay key={productdetails.id} productdetails={productdetails} />)}
    </div>
  )
}
export default Homepage;