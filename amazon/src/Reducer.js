export const initialState = {
    basket: [],
    user: null, 
    address: {}
}

export const Reducer = (state, action) => {
    console.log('action>>>', action)
    switch (action.type) {

        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter((item, index) => index !== action.index)
            };
        case 'ADD_TO_ADDRESS':
            return {
                ...state,
                address: { ...action.item }
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.item // Set user to the provided user object
            };
        default:
            return state;
    }
};
