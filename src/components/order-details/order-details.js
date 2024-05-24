import React from "react";
import styles from "./order-details.module.css";
import done from '../../images/done.png';

function OrderDetails() {
  return (
    <div className={styles.order_info}>
            <p className="text text_type_digits-large pb-16" >
                034536
            </p>
            <p className=" text text_type_main-medium">
                идентификатор заказа
            </p>
            <img src={done} className='pt-14 pb-14' alt="Заказ подтвержден" />
            <p className="text text_type_main-default pb-2">
                Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-default text_color_inactive" >
                Дождитесь готовности на орбитальной станции
            </p>

        </div>
  );
};


export default OrderDetails;