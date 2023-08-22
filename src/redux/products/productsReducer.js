const initialState = {
    loading : false ,
    products : [] ,
    error : ""
}

const productsReducer = (state = initialState , action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS_REQUEST":
            return {
                ...state ,
                loading: true
            }
        case "FETCH_PRODUCT_SUCCESS":
            return {
                loading: false ,
                products: action.payload
            }
        case "FETCH_PRODUCTS_FAILURE":
            return {
                loading: false ,
                error: action.error
            }
        default: return state
    }
}

export default productsReducer;