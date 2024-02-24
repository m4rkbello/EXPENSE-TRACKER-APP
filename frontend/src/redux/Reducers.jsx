/* eslint-disable no-unused-vars */
import { MAKE_REQUEST, FAILED_REQUEST, GET_WALLET_LIST, ADD_WALLET, UPDATE_WALLET, DELETE_WALLET } from './Types';

//initializer
const initialState ={
    loading: true,
    walletlist: [],
    errmessage:''
}

export const Reducer =(state=initialState, action) => {
    switch(action.type){
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAILED_REQUEST:
            return {
                ...state,
                loading:false,
                errmessage: action.payload
            }
        case GET_WALLET_LIST:
            return{
                ...state,
                loading: false,
                errmessage: '',
            }
        case DELETE_WALLET:
            return{
                ...state,
                loading: false,
            }
        case ADD_WALLET:
            return{
                ...state,
                loading: false 
            }
        case UPDATE_WALLET:
            return{
                ...state,
                loading: false 
            }
        
        default: return state
    }
}














