import React from 'react';
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

//Icons
import shopIcon from "../assets/icons/shop.svg";

import styles from "../css/Navbar.module.css";

const Navbar = () => {

    const state = useSelector(state => state.cartState);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productsLink} to='/products'>Products</Link>
                <div className={styles.shoppingIcons}>
                    <Link><img src={shopIcon} alt="shopIcons"/></Link>
                    {
                        state.itemsCounter > 0 && <span className={styles.itemsCounter}>{state.itemsCounter}</span>
                    }
                </div>
            </div>
        </div>

    );
};

export default Navbar;