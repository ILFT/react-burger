import React, { useEffect, ReactNode } from 'react';
import styles from "./modal.module.css";
import ReactDOM from 'react-dom';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

//const modalRoot = document.getElementById("modal");


function Modal({ onClose, children }: { onClose: Function, children: ReactNode }) {


    useEffect(() => {
        function handleEscape(evt: KeyboardEvent) {
            if (evt.key === 'Escape') {
                onClose()
            }
        }
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        }

    }, [])


    return ReactDOM.createPortal(
        <ModalOverlay onClose={onClose} >
            <div className={styles.modal_logic} onClick={(e) => e.stopPropagation()}>
                <div className={styles.name_icon}>
                    <CloseIcon type="primary" onClick={() => onClose()} />
                </div>
                {children}
            </div>

        </ModalOverlay>
        ,
        document.getElementById("modalWindow")!
    );
};


export default Modal;