import {Dispatch} from "redux";
import {registrationAPI} from "../../Components/Registration/Registration";

//Types
type ActionsType = ReturnType<typeof setRegistrationAC> | ReturnType<typeof setRedirectProfileAC> | ReturnType<typeof setRegistrationStatusAC>
type InitialStateType = {
    password: string
    email: string
    isLoading: boolean
    isRedirect: boolean
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
            email: string
            error: string
            in: string
        }
    }
}

//InitialState
const initialState: InitialStateType = {
    password: 'KOSTYA1234END.',
    email: 'xranitelinadejd@gmail.com',
    isLoading: false,
    isRedirect: false
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
        default:
            return state
    }
}

//Actions
export const setRegistrationAC = (regData: RegistrationRequestType) => ({type: 'SET-REGISTRATION', regData} as const)

export const setRedirectProfileAC = (isRedirect: boolean) => ({type: 'SET-REDIRECT-PROFILE', isRedirect} as const)

export const setRegistrationStatusAC = (isLoading: boolean) => ({type: 'SET-REGISTRATION-STATUS', isLoading} as const)

//Thunk
export const registrationTC = (regData: RegistrationRequestType) => (dispatch: Dispatch<ActionsType>) => {
    registrationAPI().registration({...regData})
        .then((res) => {
            dispatch(setRegistrationStatusAC(true))
            const dataAboutUser = res.data.addedUser
            // Если не происходит редирект после того как зарегались проблема ниже . Этот код считает длинну объекта ,всего там 10 ключей. Смотрел
            if (Object.keys(dataAboutUser).length === 10) {
                console.log('Успешно зареганы')
                dispatch(setRegistrationAC({...regData}))
                dispatch(setRedirectProfileAC(true))
                dispatch(setRegistrationStatusAC(false))
            }
        })
        .catch((error: ErrorResponseType) => {
            if (error.response.data.in === 'createUser') {
                //знаю что никаких сайдэффектов ,потом исправлю ,чисто для проверки
                console.log('Уже зареганы или ничо не ввели ')
                dispatch(setRegistrationStatusAC(true))
            }
        })
}