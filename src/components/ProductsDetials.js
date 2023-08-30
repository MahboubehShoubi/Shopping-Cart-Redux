import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch} from "react-redux";

//css
import styles from "../css/ProductsDetials.module.css";

//Images
import trashIcon from "../assets/icons/trash.svg";

// Actions
import {addItem, decrease, increase, removeItem} from "../redux/cart/cartAction";

//Function
import {isInCart, quantityCount} from "../helper/functions";

const ProductsDetials = (props) => {

    const id = props.match.params.id;
    const data = useSelector(state => state.productsState.products);
    const product = data[id - 1];
    const {image, title, description, price, category} = product;

    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState);


    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.imgProductBox}>
                    <img className={styles.imgProduct} src={image} alt="product" />
                </div>
                <div className={styles.productDetails}>
                    <h3 className={styles.titleProduct}>{title}</h3>
                    <p className={description}>{description}</p>
                    <p className={styles.category}><span>Category:</span> {category}</p>
                    <div className={styles.productLinkBox}>
                        <span className={styles.price}>{price} $</span>
                        <div className={styles.controlBox}>
                            {quantityCount(state,product.id) === 1 && <button className={styles.removeItem} onClick={() => dispatch(removeItem(product))}><img src={trashIcon} alt="trash" /></button>}
                            {quantityCount(state, product.id) > 1 && <button className={styles.decrease} onClick={() => dispatch(decrease(product))}>-</button>}
                            {quantityCount(state,product.id) > 0 && <span className={styles.quantityCount}>{quantityCount(state, product.id)}</span>}
                            {
                                isInCart(state, product.id) ?
                                    <button className={styles.increase} onClick={() => dispatch(increase(product))}>+</button> :
                                    <button className={styles.addItem} onClick={() => dispatch(addItem(product))}>Add to Cart</button>
                            }
                        </div>
                        <Link className={styles.productLink} to="/products">Back to Shop</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetials;