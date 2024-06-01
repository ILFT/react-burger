import { ReactNode } from "react";
import styles from "./modal-overlay.module.css";
import { MODAL_CLOSE } from "../../services/actions/ingredient-order-details-action";
import { useAppDispatch } from "../../hooks/hooks";


function ModalOverlay({ children }: { children: ReactNode }) {

  const dispatch = useAppDispatch();

  return (
    <div className={styles.modal_overlay} onClick={() => dispatch({ type: MODAL_CLOSE })}>
      {children}
    </div>
  );
};


export default ModalOverlay;