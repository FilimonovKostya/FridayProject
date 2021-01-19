import {Dispatch} from 'redux';
import {cardsPackAPI} from '../../Api/api-cardsPack';

type ActionsType = ReturnType<typeof setCardAC>

export type CardsPackType = {
    _id: string
    user_id: string
    user_name: string
    private: boolean
    name: string
    path: string
    grade: number
    shots: number
    cardsCount: number
    type: string
    rating: number
    created: string
    updated: string
    more_id: string
    __v: number
}

const initialState = {
    cardPacks: [] as CardsPackType[],
    // page: 1,
    // pageCount: 3,
    // cardPacksTotalCount: 5,
    // minCardsCount: 3,
    // maxCardsCount: 5,
    // token: '',
    // tokenDeathTime: ''
} as const

export type CardsPackInitialStateType = typeof initialState

export const cardsPackReducer = (state = initialState, actions: ActionsType): CardsPackInitialStateType => {
    switch (actions.type) {
        case 'SET-CARDS':
            return {...state, cardPacks: actions.cardPacks}
        default:
            return state
    }
}

//Actions
export const setCardAC = (cardPacks: CardsPackType[]) => ({type: 'SET-CARDS', cardPacks} as const)

//Thunks
export const setCardTC = () => (dispatch: Dispatch<ActionsType>) => {
    cardsPackAPI.getCardsPack()
        .then((res) => {
            const cardsPackArray = res.data.cardPacks
            dispatch(setCardAC(cardsPackArray))
            console.log(cardsPackArray)
        })
}