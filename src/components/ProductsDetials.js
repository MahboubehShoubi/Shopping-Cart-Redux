import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

//css
import styles from "../css/ProductsDetials.module.css";

const ProductsDetials = (props) => {

    const id = props.match.params.id;
    const data = useSelector(state => state.productsState.products);
    const product = data[id - 1];
    const {image, title, description, price, category} = product;

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
                        <Link className={styles.productLink} to="/products">Back to Shop</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetials;