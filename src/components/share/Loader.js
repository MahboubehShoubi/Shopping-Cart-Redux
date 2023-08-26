import React from 'react';

//Images
import spinner from "../../assets/images/Spinner.gif";

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="spinner"/>
        </div>
    );
};

export default Loader;