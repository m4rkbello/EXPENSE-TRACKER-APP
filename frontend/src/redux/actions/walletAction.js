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

export const fetchWallets = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_WALLETS_REQUEST });
        try {
            
            const response = await axios.get('http://127.0.0.1:8000/api/wallets/');
            console.log("NAY DATA!", response.data);
            dispatch({ type: FETCH_WALLETS_SUCCESS, payload: response.data });
        } catch (error) {
            console.log("WAY DATA!", error.data);
            dispatch({ type: FETCH_WALLETS_FAILURE, payload: error.message });
        }
    };
};

export const createWallet = (walletData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_WALLETS_REQUEST });
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/wallets/', walletData);
            dispatch({ type: CREATE_WALLETS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: CREATE_WALLETS_FAILURE, payload: error.message });
        }
    };
};

export const updateWallet = (walletId, updateData) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_WALLETS_REQUEST });
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/wallets/${walletId}`, updateData);
            dispatch({ type: UPDATE_WALLETS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: UPDATE_WALLETS_FAILURE, payload: error.message });
        }
    };
};

export const deleteWallet = (walletId) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_WALLETS_REQUEST });
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/wallets/${walletId}`);
            dispatch({ type: DELETE_WALLETS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: DELETE_WALLETS_FAILURE, payload: error.message });
        }
    };
};