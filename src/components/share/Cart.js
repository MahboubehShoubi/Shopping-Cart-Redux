import React from 'react';
import {Link} from "react-router-dom";
import { useDispatch} from "react-redux";

// Functions
import { shorten } from '../../helper/functions';

// Icons
import trashIcon from "../../assets/icons/trash.svg";

// Style
import styles from "../../css/share/Cart.module.css";

//Action
import {decrease, removeItem , increase} from "../../redux/cart/cartAction";


const Cart = (props) => {

    const dispatch = useDispatch();
    const {image, title, price, quantity,id} = props.data;

    return (
        <div className={styles.container} >
            <Link to={`/products/${id}`} >
                <div className={styles.productImage}>
                    <img  src={image} />
                </div>
            </Link>

            <div className={styles.dataBox}>
                <h3>{shorten(title)}</h3>
                <div className={styles.data}>
                    <p><span>price :</span> {price} $</p>
                </div>
                <div className={styles.buttonContainer}>
                    {
                        quantity > 1 ?
                            <button onClick={() => dispatch(decrease(props.data))} >-</button> :
                            <button onClick={() => dispatch(removeItem(props.data))} ><img src={trashIcon} alt="trash" /></button>
                    }
                    <span className={styles.quantity}>{quantity}</span>
                    <button onClick={() => dispatch(increase(props.data))} >+</button>
                </div>
            </div>

        </div>
    );
};

export default Cart;