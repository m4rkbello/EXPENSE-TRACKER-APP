/* eslint-disable no-unused-vars */
import {
    CREATE_WALLETS_FAILURE,
    CREATE_WALLETS_REQUEST,
    CREATE_WALLETS_SUCCESS,
    DELETE_WALLETS_FAILURE,
    DELETE_WALLETS_REQUEST,
    DELETE_WALLETS_SUCCESS,
    FETCH_WALLETS_FAILURE,
    FETCH_WALLETS_REQUEST,
    FETCH_WALLETS_SUCCESS,
    UPDATE_WALLETS_FAILURE,
    UPDATE_WALLETS_REQUEST,
    UPDATE_WALLETS_SUCCESS
} from "../types/Types";

/* eslint-disable no-unused-vars */


const ininitialState = {
    wallets: [],
    loading: false,
    error: null
};

const reducer = (state = ininitialState, action) => {
    switch (action.type){
        case FETCH_WALLETS_REQUEST:
        case CREATE_WALLETS_REQUEST:
        case UPDATE_WALLETS_REQUEST:
        case DELETE_WALLETS_REQUEST:
            return{
                ...state,
                loading: true,
                error: null
            };
        case FETCH_WALLETS_SUCCESS:
            return {
                ...state,
                loading:false,
                wallets: [...state.wallets, action.payload],
                error:null
            };
        case CREATE_WALLETS_SUCCESS:
            return {
                ...state,
                loading:false,
                wallets: [...state.wallets, action.payload],
                error:null
            };
        case UPDATE_WALLETS_SUCCESS:
            return {
                ...state,
                loading:false,
                wallets: state.wallets.map(wallet => wallet.id === action.payload.id ? action.payload : wallet ),
                error: null
            };
        case DELETE_WALLETS_SUCCESS:
            return {
                ...state,
                loading:false,
                wallets: state.wallets.filter(wallet => wallet.id !== action.payload),
                error: null
            };
        case FETCH_WALLETS_FAILURE:
        case CREATE_WALLETS_FAILURE:
        case UPDATE_WALLETS_FAILURE:
        case DELETE_WALLETS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;