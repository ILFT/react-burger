import { ReactNode } from "react";
import styles from "./modal-overlay.module.css";


function ModalOverlay({ children, closeModal }: { children: ReactNode, closeModal: Function }) {

  return (
    <div className={styles.modal_overlay} onClick={() => closeModal()}>
      {children}
    </div>
  );
};


export default ModalOverlay;