/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MAKE_REQUEST, FAILED_REQUEST, GET_WALLET_LIST, ADD_WALLET, UPDATE_WALLET, DELETE_WALLET } from './Types';

export const makeRequest =()=>{
    return{
        type: MAKE_REQUEST
        
    } 
} 

export const failRequest =(err)=>{
    return{
        type: FAILED_REQUEST,
        payload: err
    }
}

export const getWalletList =(data)=>{
    return{
        type: GET_WALLET_LIST,
        payload: data
    }
}

export const deleteWallet =()=>{
    return{
        type: DELETE_WALLET
        
    } 
} 

//MAG ADD UG USER
export const addWallet =()=>{
    return{
        type: ADD_WALLET
    }
}

//MAG UPDATE UG USER
export const updateWallet =()=>{
    return{
        type: UPDATE_WALLET
    }
}


//DISPATCH SA API
//DISPATCH FUNCTION PARAMAGFETCH UG DATA!
export const FetchWalletList =()=> {
    return (dispatch) => {
        // setTimeout(() => {
    
            dispatch(makeRequest());
            axios.get('http://127.0.0.1:8000/api/wallets/')
            .then(res=>{
                const walletlist=res.data;
                dispatch(getWalletList(walletlist));
            }).catch(err=>{
                dispatch(failRequest(err.message))
            })
        // }, 2000);

    }
}