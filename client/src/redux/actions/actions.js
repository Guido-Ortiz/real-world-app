import axios from "axios";
import { CREATE_BANK_ACCOUNT, DELETE_BANK_ACCOUNT, EDIT_USER, GET_ACCOUNTS, GET_USERS, LOGIN, RESET_USER } from "./constants";

export function getAccounts(){
    return async function(dispatch){
        try{
            const response = await axios.get('accountsMock.json')
            return dispatch({
                type: GET_ACCOUNTS,
                payload: response.data
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function createBankAccount(payload){
    // return async function(dispatch){
    //     const response = await axios.post('http://localhost:8081/my-project/api/user/create', payload)
    //     return response
    // }
    return{
        type: CREATE_BANK_ACCOUNT,
        payload
    }
}

export function deleteBankAccount(payload){
    console.log(payload)
    return{
        type: DELETE_BANK_ACCOUNT,
        payload
    }
}

export function editUser(payload){
    // return async function(dispatch){
    //     const response = await axios.post('url', payload)
    //     return response
    // }
    return{
        type: EDIT_USER,
        payload
    }
}

export function resetUser(){
    return {
        type: RESET_USER
    }
}

export function login(payload){
    // return async function(dispatch){
    //     const response = await axios.post('http://localhost:8081/my-project/api/user/create', payload)
    //     console.log(response.data);
    //     return response.data
    // }
    return async function(dispatch){
        try{
            const response = await axios.post('http://localhost:8081/my-project/api/user/create', payload)
            return dispatch({
                type: LOGIN,
                payload: response.data
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function getUsers(){
    return async function(dispatch){
        try{
            const response = await axios.get('http://localhost:8081/my-project/api/user/all')
            return dispatch({
                type: GET_USERS,
                payload: response.data
            })
        } catch(e){
            console.log(e)
        }
    }
}