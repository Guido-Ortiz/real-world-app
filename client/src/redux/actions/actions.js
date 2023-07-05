import axios from "axios";
import { CREATE_BANK_ACCOUNT, DELETE_BANK_ACCOUNT, EDIT_USER, GET_ACCOUNTS, LOGIN, RESET_USER } from "./constants";

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
    return async function(dispatch){
        //const response = await axios.post('http://localhost:8081/my-project/api/user/create', payload)

        const response = await axios.post('http://localhost:8081/my-project/api/user/create', {
        
            "name": "guido",
            "lastname": "ortiz",
            "email": "guglielmo@example.com",
            "phone": "123456787"
            })
            console.log(response);
        return response
    }
    // return {
    //     type: LOGIN,
    //     payload
    // }
}