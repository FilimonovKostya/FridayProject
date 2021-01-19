import {instance} from './api';
import {CartUpdateType} from '../AllComponents';
import {CardsResponseType} from "../Redux/reducers/cardReducer";
//
// //Global response // То ли я тупой или что-то не так делаю , не тот респонс
export type APIResponseType<D = {}> = {
    data: D
    statusText: string
}
//
// //Response types
// export type GetCardsPackResponseType = {
//     cartArray: CardsType[]
//     cardPacksTotalCount: number // количество колод
//     maxCardsCount: number
//     minCardsCount: number
//     page: number // выбранная страница
//     pageCount: number // количество элементов на странице
// }
//
// export type CardsType = {
//     _id: string
//     user_id: string
//     name: string
//     path: string // папка
//     cardsCount: number
//     grade: number // средняя оценка карточек
//     shots: number // количество попыток
//     rating: number // лайки
//     type: string // ещё будет "folder" (папка)
//     created: string
//     updated: string
//     __v: number
// }
//
// // type CartsPackTypeFull = {
// //     name: string // если не отправить будет таким "no Name"
// //     path: string // если не отправить будет такой "/def"
// //     grade: number // не обязателен
// //     shots: number // не обязателен
// //     rating: number // не обязателен
// //     deckCover: string // не обязателен
// //     private: boolean // если не отправить будет такой false
// //     type: string // если не отправить будет таким "pack"
// // }
//
type CardsPackTypeShort = {
    name: string // если не отправить будет таким "no Name"
    private: boolean // если не отправить будет такой false
    type: string // если не отправить будет таким "pack"
}

//
// type GetCartsResponseType = {
//     carts: CartType[]
//     cardsTotalCount: number
//     maxGrade: number
//     minGrade: number
//     page: number
//     pageCount: number
//     packUserId: string //id юзера создавшего данную колоду
// }
//
// type CartType = {
//     answer: string
//     question: string
//     cardsPack_id: string
//     grade: number
//     rating: number
//     shots: number
//     type: string
//     user_id: string
//     created: string
//     updated: string
//     __v: number
//     _id: string
// }

export const cardsPackAPI = {
    getCardsPack(packName?: null | string, min: number = 3, max: number = 9, page: number = 1, pageCount: number = 4) {
        return instance.get< CardsResponseType[]>(`cards/pack?packName=${packName}&min=${min}&max=${max}&page=${page}&pageCount=${pageCount}`);
    },
    createCardsPack(cardsPack: CardsPackTypeShort) {
        return instance.post('cards/pack', {cardsPack});
    },
    updateCardsPack(cardsPack: CartUpdateType) {
        return instance.put('cards/pack', {cardsPack});
    },
    deleteCardsPack(id: string) {
        return instance.delete(`cards/pack?id=${id}`);
    }
}