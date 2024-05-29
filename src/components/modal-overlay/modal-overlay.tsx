import React, { ReactNode } from "react";
import styles from "./modal-overlay.module.css";
import { useDispatch } from "react-redux";


function ModalOverlay({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();
  function closeModal() {
    dispatch({ type: 'MODAL_CLOSE' })
  }

  return (
    <div className={styles.modal_overlay} onClick={closeModal}>
      {children}
    </div>
  );
};


export default ModalOverlay;