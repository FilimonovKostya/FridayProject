import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../store";
import {Action, Dispatch} from "redux";
import {recoveryAPI} from "../../Api/api-recovery-password";

//Action Creator type
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any) => any }> = ReturnType<PropertiesTypes<T>>

//Thunk Type
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootStateType, unknown, A>

//Get auto types
type ActionsType = InferActionsTypes<typeof actions>



let initializeState = {
    status: '',
    isFetching: false
}

export type InitializeStateType = typeof initializeState

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

//Actions object
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

