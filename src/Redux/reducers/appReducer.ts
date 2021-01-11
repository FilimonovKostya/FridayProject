//Types
type ActionsType = ReturnType<typeof setAppStatusAC> | ReturnType<typeof setAppErrorAC>
type InitialStateType = {
    statusResponse: StatusResponseType
    isError: boolean
}
type StatusResponseType = 'good' | 'bad' | null

//InitialState
const initialState: InitialStateType = {
    statusResponse: null,
    isError: false
}

export const appReducer = (state = initialState, actions: ActionsType): InitialStateType => {
    switch (actions.type) {
        case 'SET-APP-STATUS':
            return {...state, statusResponse: actions.status}
        case "SET-APP-ERROR":
            return {...state, isError: actions.isError}
        default:
            return state
    }
}

//Actions
export const setAppStatusAC = (status: StatusResponseType) => ({type: 'SET-APP-STATUS', status} as const)

export const setAppErrorAC = (isError: boolean) => ({type: 'SET-APP-ERROR', isError} as const)

