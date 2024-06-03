import { ReactNode } from "react";
import styles from "./modal-overlay.module.css";
import { useAppDispatch } from "../../hooks/hooks";
import { closeModal } from "../../utils/utils";


function ModalOverlay({ children }: { children: ReactNode }) {

  const dispatch = useAppDispatch();

  return (
    <div className={styles.modal_overlay} onClick={() => dispatch(closeModal())}>
      {children}
    </div>
  );
};


export default ModalOverlay;