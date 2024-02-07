import React, { Children } from "react";
import Styles from './custombutton.module.css'
const CustomButton = ({ children }) => {
  return (
    <div>
      <button className={Styles.button}>
        {children}
      </button>
    </div>
  )
}
export default CustomButton;