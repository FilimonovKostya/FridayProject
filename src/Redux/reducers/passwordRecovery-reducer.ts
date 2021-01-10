import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../store";
import {Action, Dispatch} from "redux";
import axios from "axios";

//Action Creator type
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any) => any }> = ReturnType<PropertiesTypes<T>>

//Thunk Type
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootStateType, unknown, A>

//Get auto types
export type InitializeStateType = typeof initializeState
type ActionsType = InferActionsTypes<typeof actions>


export type APIResponseType<D = {}> = {
    data: D
    statusText: string
}

export type PasswordRecoveryType = {
    answer: boolean
    html: boolean
    info: string
    success: boolean
}

//Base API settings
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0',
})

export const recoveryAPI = {
    recover(email: string) {
        const promise = axiosInstance.post<APIResponseType<PasswordRecoveryType>>('/auth/forgot', {
            email: email,
            from: "test-front-admin <serega.kuharionok@yandex.ru>",
            message: `<div style="background-color: #00ff00; padding: 15px">
                            password recovery link: 
                     <a href='http://localhost:3000/FridayProject#/newPassword/$token$'>Click</a>
                     </div>`
        })
        return promise;
    },
}

let initializeState = {
    error: '',
    status: '',
    isFetching: false
}

export const passwordRecoveryReducer = (state: InitializeStateType = initializeState, action: ActionsType): InitializeStateType => {
    switch (action.type) {
        case "FP/RECOVERY/SET-STATUS":
            return {
                ...state, status: action.payload.status
            }
        case "FP/RECOVERY/PROGRESS":
            return {
                ...state,
                isFetching: action.payload.state
            }
        default:
            return state
    }
}

const actions = {
    setStatus: (status: string) => ({
        type: 'FP/RECOVERY/SET-STATUS',
        payload: {status},
    } as const),
    isFetching: (state: boolean) => ({
        type: 'FP/RECOVERY/PROGRESS',
        payload: {state},
    } as const),
}

//Thunk
export const sendRecoveryEmail = (email: string) => (dispatch: Dispatch) => {
    dispatch(actions.setStatus('Loading'))
    dispatch(actions.isFetching(true))
    recoveryAPI.recover(email)
        .then(res => {
        if (res.status === 200) {
            dispatch(actions.isFetching(false))
            dispatch(actions.setStatus('Message sent. Check your email'))
        } else {
            dispatch(actions.isFetching(false))
            dispatch(actions.setStatus('Something went wrong:('))
        }
    })
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(actions.isFetching(false))
            dispatch(actions.setStatus(`Something went wrong:( ${error}`))
        })
}

