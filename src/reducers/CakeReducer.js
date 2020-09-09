import { BUY_CAKE } from '../constants/CakeConstants';

const intialCakeState = {
    numOfCakes: 10
}

const CakeReducer = (state = intialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return { ...state, numOfCakes: state.numOfCakes - 1 };
        default:
            return state;
    }
}

export default CakeReducer;