import React from "react";
import Styles from './inputform.module.css'
const InputForm = ({ handleChange, label, ...otherProps }) => {
  return (

    <div>
      <p className={Styles.label}>
        {label}
      </p>
      <input onChange={handleChange} {...otherProps} className={Styles.input} />

    </div>

  )
}
export default InputForm;