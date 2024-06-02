import { useEffect, ReactNode } from 'react';
import styles from "./modal.module.css";
import ReactDOM from 'react-dom';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { closeModal } from '../../utils/utils';
import { useAppDispatch } from '../../hooks/hooks';

//const modalRoot = document.getElementById("modal");


function Modal({ children }: { children: ReactNode }) {

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        function handleEscape(evt: KeyboardEvent) {
            if (evt.key === 'Escape') {
                dispatch(closeModal())
            }
        }
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        }

    }, [])


    return ReactDOM.createPortal(
        <ModalOverlay >
            <div className={styles.modal_logic} onClick={(e) => e.stopPropagation()}>
                <div className={styles.name_icon}>
                    <CloseIcon type="primary" onClick={() => dispatch(closeModal())} />
                </div>
                {children}
            </div>

        </ModalOverlay>
        ,
        document.getElementById("modalWindow")!
    );
};


export default Modal;