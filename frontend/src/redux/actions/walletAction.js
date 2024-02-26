/* eslint-disable no-unused-vars */
import axios from 'axios';
import {
    FETCH_WALLETS_FAILURE,
    FETCH_WALLETS_REQUEST,
    FETCH_WALLETS_SUCCESS,
    CREATE_WALLETS_FAILURE,
    CREATE_WALLETS_REQUEST,
    CREATE_WALLETS_SUCCESS,
    UPDATE_WALLETS_FAILURE,
    UPDATE_WALLETS_REQUEST,
    UPDATE_WALLETS_SUCCESS,
    DELETE_WALLETS_FAILURE,
    DELETE_WALLETS_REQUEST,
    DELETE_WALLETS_SUCCESS,
} from "../types/Types";


// Fetch Wallets data ni
export const fetchWallets = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_WALLETS_REQUEST });
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/wallets/');
        if (response.data.length > 0) {
            console.log('Data retrieved successfully:', response.data);
          } else {
            console.log('No data found.');
          }
        dispatch({ type: FETCH_WALLETS_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: FETCH_WALLETS_FAILURE, payload: error.message });
      }
    };
  };


//create or add wallet para sa backend
export const createWallet = (walletData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_WALLETS_REQUEST });
        try {
            const response = await axios.post('', walletData);
            dispatch({
                type: CREATE_WALLETS_SUCCESS, payload: response.data
                 });
        } catch(error){
            dispatch({ 
                type: CREATE_WALLETS_FAILURE, payload: error.message
             });
        }
    };
};

//pag update sa wallet
export const updateWallet = (walletId, updateData) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_WALLETS_REQUEST });
        try{
            const response = await axios.put(`/api/wallets/${walletId}`, updateData);
            dispatch({ 
                type: UPDATE_WALLETS_SUCCESS,
                 payload: response.data
                 });
        }catch(error){
            dispatch({ 
                type: UPDATE_WALLETS_FAILURE,
                 payload: error.message
                 });

        }
    };
};

//pagdelete ug wallet
export const deleteWallet = (walletId) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_WALLETS_REQUEST});
        try {
            const response = await axios.delete(`api/wallets/{walletId}`);
            dispatch({ type: DELETE_WALLETS_SUCCESS, payload: response.data });
        }catch(error){
            dispatch({ type: DELETE_WALLETS_FAILURE, payload: error.message })
        }
    };
};



















