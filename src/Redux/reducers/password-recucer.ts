import {Dispatch} from 'redux';
import {passwordAPI} from '../../Api/api-password';

//Action Creator type
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any) => any }> = ReturnType<PropertiesTypes<T>>

//Get auto types
type ActionsType = InferActionsTypes<typeof actions>

let initializeState = {
    recoveryStatusMessage: '',
    resetStatus: {
        message: '',
        success: false as null | boolean
    },
    isFetching: false
}

export type InitializeStateType = typeof initializeState

export const passwordReducer = (state: InitializeStateType = initializeState, action: ActionsType): InitializeStateType => {
    switch (action.type) {
        case 'FP/PASSWORD/SET-RECOVERY-STATUS':
            return {
                ...state, recoveryStatusMessage: action.payload.error
            }
        case 'FP/PASSWORD/SET-RESET-STATUS':
            return {
                ...state,
                resetStatus: {
                    ...state.resetStatus,
                    message: action.payload.message,
                    success: action.payload.success ? action.payload.success : null,
                }
            }
        case 'FP/RECOVERY/PROGRESS':
            return {
                ...state,
                isFetching: action.payload.state
            }
        default:
            return state
    }
}

//Actions object
export const actions = {
    setRecoveryStatus: (error: string) => ({
        type: 'FP/PASSWORD/SET-RECOVERY-STATUS',
        payload: {error},
    } as const),
    setResetStatus: (message: string, success?: boolean) => ({
        type: 'FP/PASSWORD/SET-RESET-STATUS',
        payload: {
            message,
            success
        },
    } as const),
    isFetching: (state: boolean) => ({
        type: 'FP/RECOVERY/PROGRESS',
        payload: {state},
    } as const),
}

//Thunk
export const sendRecoveryEmail = (email: string) => (dispatch: Dispatch) => {
    dispatch(actions.setRecoveryStatus('Loading'))
    dispatch(actions.isFetching(true))
    passwordAPI.recover(email)
        .then(res => {
            if (res.status === 200) {
                dispatch(actions.isFetching(false))
                dispatch(actions.setRecoveryStatus(`if account "${email}" exist, an email will be sent with further instruction`))
            } else {
                dispatch(actions.isFetching(false))
                dispatch(actions.setRecoveryStatus('Something went wrong:('))
            }
        })
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(actions.isFetching(false))
            dispatch(actions.setRecoveryStatus(`Something went wrong:( ${error}`))
        })
}

export const resetPassword = (password: string, token: string | undefined) => (dispatch: Dispatch) => {
    dispatch(actions.setResetStatus('Loading'))
    dispatch(actions.isFetching(true))
    passwordAPI.resetPassword(password, token)
        .then(res => {
            if (res.status === 200) {
                dispatch(actions.isFetching(false))
                dispatch(actions.setResetStatus('The password change is successful', true))
            } else {
                dispatch(actions.isFetching(false))
                dispatch(actions.setResetStatus('Something went wrong:(', false))
            }
        })
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(actions.isFetching(false))
            dispatch(actions.setResetStatus(`Something went wrong:( ${error}`, false))
        })
}