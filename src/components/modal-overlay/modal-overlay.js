import React from "react";
import styles from "./modal-overlay.module.css";


function ModalOverlay(props) {
  return (
    <div className={styles.modal_overlay}  onClick={props.onClose}>
      {props.children}
    </div>
  );
};


export default ModalOverlay;