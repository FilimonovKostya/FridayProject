const initialState: InitialStateType = {}

export const passwordReducer = (state = initialState, actions: ActionsType): InitialStateType => {
    switch (actions.type) {
        case '':
            return state
        default:
            return state
    }
}

//Actions
export const passwordAC = () => ({type:''} as const )

//Types
type ActionsType = ReturnType<typeof passwordAC>

type InitialStateType = {}
