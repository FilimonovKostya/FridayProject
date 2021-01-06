const initialState: InitialStateType = {}

export const registrationReducer = (state = initialState, actions: ActionsType): InitialStateType => {
    switch (actions.type) {
        case '':
            return state
        default:
            return state
    }
}

//Actions
export const registrationAC = () => ({type:''} as const )

//Types
type ActionsType = ReturnType<typeof registrationAC>

type InitialStateType = {}
