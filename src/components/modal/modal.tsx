import { useEffect, ReactNode, MouseEventHandler } from 'react';
import styles from "./modal.module.css";
import ReactDOM from 'react-dom';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';




function Modal({ children, closeModal }: { children: ReactNode, closeModal: Function }) {


    useEffect(() => {
        function handleEscape(evt: KeyboardEvent) {
            if (evt.key === 'Escape') {
                closeModal()
            }
        }
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        }

    }, [])


    return ReactDOM.createPortal(
        <ModalOverlay closeModal={closeModal}>
            <div className={styles.modal_logic} onClick={(e) => e.stopPropagation()}>
                <div className={styles.name_icon}>
                    <CloseIcon type="primary" onClick={() => closeModal()} />
                </div>
                {children}
            </div>

        </ModalOverlay>
        ,
        document.getElementById("modalWindow")!
    );
};


export default Modal;