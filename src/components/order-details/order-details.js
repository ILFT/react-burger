import React from "react";
import styles from "./order-details.module.css";


function OrderDetails(props) {
  return (
    <div className={styles.modal_overlay} onClick={props.onClose} >
      {props.children}
    </div>
  );
};


export default OrderDetails;