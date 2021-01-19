//Api
import {instance} from "../../Api/api";
//Types
import {Dispatch} from "redux";
import {cardsPackAPI} from "../../Api/api-cart";

export const cardAPI = {
    getCardsAPI() {
        // То ли я тупой или что-то не так делаю , не тот респонс
        return instance.get('cards/pack');
    }
}


type ActionsType = ReturnType<typeof setCardAC>
export type CardsResponseType = {
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
type InitialStateType = {
    // cardPacks: CardsResponseType[]
    cardPacks: CardsResponseType[]
    // page: number,
    // pageCount:number,
    // cardPacksTotalCount: number,
    // minCardsCount: number,
    // maxCardsCount: number,
    // token:string,
    // tokenDeathTime: number
}


//InitialState
const initialState: InitialStateType = {
    cardPacks: []
}

export const cardReducer = (state = initialState, actions: ActionsType): InitialStateType => {
    switch (actions.type) {
        case "SET-CARDS":
            return {...state, cardPacks: actions.cards}
        default:
            return state
    }
}

//Actions
export const setCardAC = (cards: CardsResponseType[]) => ({type: 'SET-CARDS', cards} as const)
//Thunks
export const setCardTC = () => (dispatch: Dispatch<ActionsType>) => {
    cardsPackAPI.getCardsPack()
        .then((res) => {
            debugger
            const stupidData = res.data
            dispatch(setCardAC([...stupidData]))
            console.log([...stupidData])
        })
}