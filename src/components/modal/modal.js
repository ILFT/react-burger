import React, { useEffect } from 'react';
import styles from "./modal.module.css";
import ReactDOM from 'react-dom';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

//const modalRoot = document.getElementById("modal");


function Modal(props) {


    useEffect(() => {
        function closeClick(evt) {
            if (evt.key === 'Escape') {
                props.closeWindow()
            }
        }
        document.addEventListener('keydown', closeClick);
        return () => {
            document.removeEventListener('keydown', closeClick);
        }

    }, [])


    return ReactDOM.createPortal(
        <ModalOverlay onClose={props.closeWindow} >
            <div className={styles.modal_logic} onClick={(e)=>e.stopPropagation()}>
                {props.children}
            </div>

        </ModalOverlay>
        ,
        document.getElementById("modalWindow")
    );
};


export default Modal;