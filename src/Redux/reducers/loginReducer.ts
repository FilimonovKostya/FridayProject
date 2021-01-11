import {Dispatch} from 'redux';
import {authAPI} from '../../Components/Login/api-login';

type InitialStateType = {
    user: UserDataType | {},
    isAuth: boolean
}
type UserDataType = {
    _id: string | null,
    email: string | null,
    name: string | null,
    avatar: string | null,
    publicCardPacksCount: number,
    created: Date,
    updated: Date,
    isAdmin: boolean,
    verified: boolean,
    rememberMe: boolean
}
const initialState = {
    user: {},
    isAuth: false
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        default:
            return state
    }
}


export const setAuthUserDataAC = (payload: InitialStateType) => ({type: 'SET_USER_DATA', payload}) as const


export const getAuthUserData = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
                console.log(response.data)
                dispatch(setAuthUserDataAC(response.data))
            }
        ).catch((e) => {
        const error = e.response ? e.response.data.error:(e.message+", more details in the console")
        console.log(error)
    })
}


export type setAuthUserDataType = ReturnType<typeof setAuthUserDataAC>

type ActionsType =
    |  setAuthUserDataType