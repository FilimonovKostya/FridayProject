import {Dispatch} from "redux";
import {registrationAPI} from "../../Api/api-regestration";

//Types
type ActionsType = ReturnType<typeof setRegistrationAC>
    | ReturnType<typeof setRedirectProfileAC>
    | ReturnType<typeof setRegistrationStatusAC>
    | ReturnType<typeof setRegistrationErrorAC>
type InitialStateType = {
    password: string
    email: string
    isLoading: boolean
    isRedirect: boolean
    error: string | null
}
export type RegistrationRequestType = {
    email: string
    password: string
}
export type RegistrationResponseType = {
    addedUser: {
        created: string
        email: string
        isAdmin: boolean
        name: string
        publicCardPacksCount: number
        rememberMe: boolean
        updated: string
        verified: boolean
        __v: number
        _id: string
    }
}
export type ErrorResponseType = {
    response: {
        data: {
            emailRegExp?: {}
            error: string
            email?: string
            in: string
            isEmailValid?: boolean
            isPassValid?: boolean
            passwordRegExp?: string
        }
    }
}

//InitialState
const initialState: InitialStateType = {
    password: '',
    email: '',
    isLoading: false,
    isRedirect: false,
    error: null
}

//Reducer
export const registrationReducer = (state = initialState, actions: ActionsType): InitialStateType => {
    switch (actions.type) {
        case 'SET-REGISTRATION':
            return {...state, ...actions.regData}
        case "SET-REDIRECT-PROFILE":
            return {...state, isRedirect: actions.isRedirect}
        case "SET-REGISTRATION-STATUS":
            return {...state, isLoading: actions.isLoading}
        case "SET-REGISTRATION-ERROR":
            return {...state, error: actions.error}

        default:
            return state
    }
}

//Actions
export const setRegistrationAC = (regData: RegistrationRequestType) => ({type: 'SET-REGISTRATION', regData} as const)

export const setRedirectProfileAC = (isRedirect: boolean) => ({type: 'SET-REDIRECT-PROFILE', isRedirect} as const)

export const setRegistrationStatusAC = (isLoading: boolean) => ({type: 'SET-REGISTRATION-STATUS', isLoading} as const)

export const setRegistrationErrorAC = (error: string | null) => ({type: 'SET-REGISTRATION-ERROR', error} as const)

//Thunk
export const registrationTC = (regData: RegistrationRequestType) => (dispatch: Dispatch<ActionsType>) => {
    registrationAPI().registration({...regData})
        .then((res) => {
            dispatch(setRegistrationStatusAC(true))
            const dataAboutUser = res.data.addedUser
            // Если не происходит редирект после того как зарегались проблема ниже . Этот код считает длинну объекта ,всего там 10 ключей. Смотрел
            if (Object.keys(dataAboutUser).length === 10) {
                dispatch(setRegistrationAC({...regData}))
                dispatch(setRedirectProfileAC(true))
                dispatch(setRegistrationStatusAC(false))
            }
        })
        .catch((error: ErrorResponseType) => {
            dispatch(setRegistrationStatusAC(true))
            if (error.response.data.in === 'createUser') {
                dispatch(setRegistrationErrorAC(error.response.data.error))
                dispatch(setRegistrationStatusAC(false))
            }
            if (!error.response.data.isEmailValid) {
                dispatch(setRegistrationErrorAC(error.response.data.error))
                dispatch(setRegistrationStatusAC(false))
            }
            if (!error.response.data.isPassValid) {
                error.response.data.passwordRegExp && dispatch(setRegistrationErrorAC(error.response.data.passwordRegExp))
                dispatch(setRegistrationStatusAC(false))
            }
        })
}