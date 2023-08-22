import React from 'react';

//Functions
import { shorten , isInCart , quantityCount} from "../../helper/functions";

const Product = ({productData}) => {

    return (
        <div>
            <img src={productData.image} alt="product" />
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price} $`}</p>
            {/*<div className={styles.linkContainer}>*/}
            {/*    <Link to={`/products/${productData.id}`}>Details</Link>*/}
            {/*    <div className={styles.buttonContainer}>*/}
            {/*        {quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch(removeItem(productData))}><img src={trashIcon} alt="trash" /></button>}*/}
            {/*        {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(productData))}>-</button>}*/}
            {/*        {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}*/}
            {/*        {*/}
            {/*            isInCart(state, productData.id) ?*/}
            {/*                <button className={styles.smallButton} onClick={() => dispatch(increase(productData))}>+</button> :*/}
            {/*                <button onClick={() => dispatch(addItem(productData))}>Add to Cart</button>*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Product;