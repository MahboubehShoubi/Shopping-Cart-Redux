import React from 'react';

//Images
import spinner from "../../assets/images/Spinner.gif";

//css
import styles from "../../css/share/Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.container}>
            <img src={spinner} alt="spinner"/>
        </div>
    );
};

export default Loader;