import { ReactNode } from "react";
import styles from "./modal-overlay.module.css";
import { useModal } from "../../hooks/hooks";


function ModalOverlay({ children }: { children: ReactNode }) {

  const modal =useModal();
  return (
    <div className={styles.modal_overlay} onClick={modal.closeModal}>
      {children}
    </div>
  );
};


export default ModalOverlay;