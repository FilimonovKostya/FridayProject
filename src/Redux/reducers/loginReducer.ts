const initialState: InitialStateType = {}

export const loginReducer = (state = initialState, actions: ActionsType): InitialStateType => {
    switch (actions.type) {
        case '':
            return state
        default:
            return state
    }
}

//Actions
export const loginAC = () => ({type:''} as const )

//Types
type ActionsType = ReturnType<typeof loginAC>

type InitialStateType = {}
