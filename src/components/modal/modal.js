import React, { useEffect } from 'react';
import styles from "./modal.module.css";
import ReactDOM from 'react-dom';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

//const modalRoot = document.getElementById("modal");


function Modal(props) {


    const closeClick = (e) => {
        if (e.key === "Escape") {
            document.removeEventListener("keydown", closeClick);
            props.closeWindow();
            
        }
    };


    document.addEventListener("keydown", closeClick, false);


    return ReactDOM.createPortal(
        <ModalOverlay >
            <CloseIcon type="primary" className={styles.modal_image} onClick={() => props.closeWindow()} />
            {props.children}
        </ModalOverlay>
        ,
        document.getElementById("modalWindow")
    );
};


export default Modal;