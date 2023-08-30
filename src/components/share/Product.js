import React from 'react';
import { Link} from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";

//Functions
import { shorten , isInCart , quantityCount} from "../../helper/functions";

//Action
import { addItem , removeItem , increase , decrease} from "../../redux/cart/cartAction";

//Icons
import trashIcon from "../../assets/icons/trash.svg";

//css
import styles from "../../css/share/Product.module.css";

const Product = ({productData}) => {


    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState);

    return (
        <div className={styles.container}>
            <Link to={`/products/${productData.id}`} >
                <div className={styles.containerImg}>
                    <img src={productData.image} alt="product" />
                </div>
            </Link>

            <div className={styles.containerInfo}>
                <h3 className={styles.productTitle}>{shorten(productData.title)}</h3>
                <p><span className={styles.price}>Price : </span>{`${productData.price} $`}</p>
                <div className={styles.control}>
                    <div className={styles.controlBox}>
                        {quantityCount(state, productData.id) === 1 && <button className={styles.removeItem} onClick={() => dispatch(removeItem(productData))}><img src={trashIcon} alt="trash" /></button>}
                        {quantityCount(state, productData.id) > 1 && <button className={styles.decrease} onClick={() => dispatch(decrease(productData))}>-</button>}
                        {quantityCount(state, productData.id) > 0 && <span className={styles.quantityCount}>{quantityCount(state, productData.id)}</span>}
                        {
                            isInCart(state, productData.id) ?
                                <button className={styles.increase} onClick={() => dispatch(increase(productData))}>+</button> :
                                <button className={styles.addItem} onClick={() => dispatch(addItem(productData))}>Add to Cart</button>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;