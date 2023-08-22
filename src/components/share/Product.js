import React from 'react';

//Functions


const Product = ({productData}) => {

    return (
        <div>
            <img src={productData.image}/>
            <p></p>
        </div>
    );
};

export default Product;