import React, { ReactNode } from "react";
import styles from "./modal-overlay.module.css";


function ModalOverlay({ onClose, children }: { onClose: Function, children: ReactNode }) {
  return (
    <div className={styles.modal_overlay} onClick={() => onClose()}>
      {children}
    </div>
  );
};


export default ModalOverlay;