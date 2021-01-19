import {instance} from './api';
import {CartUpdateType} from '../AllComponents';

//Global response // То ли я тупой или что-то не так делаю , не тот респонс

//Global response
export type APIResponseType<D = {}> = {
    data: D
    statusText: string
}

//Response types

export type CardsType = {
    _id: string
    user_id: string
    name: string
    path: string // папка
    cardsCount: number
    grade: number // средняя оценка карточек
    shots: number // количество попыток
    rating: number // лайки
    type: string // ещё будет "folder" (папка)
    created: string
    updated: string
    __v: number
}

type CardsPackTypeShort = {
    name: string // если не отправить будет таким "no Name"
    private: boolean // если не отправить будет такой false
    type: string // если не отправить будет таким "pack"
}

type GetCartsResponseType = {
    carts: CardsType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string //id юзера создавшего данную колоду
}

export const cardsPackAPI = {
    getCardsPack(packName?: null | string, min: number = 3, max: number = 9, page: number = 1, pageCount: number = 4) {
        return instance.get<APIResponseType>(`cards/pack?packName=${packName}&min=${min}&max=${max}&page=${page}&pageCount=${pageCount}`);
    },
    createCardsPack(cardsPack: CardsPackTypeShort) {
        return instance.post<APIResponseType>('cards/pack', {cardsPack});
    },
    updateCardsPack(cardsPack: CartUpdateType) {
        return instance.put<APIResponseType>('cards/pack', {cardsPack});
    },
    deleteCardsPack(id: string) {
        return instance.delete<APIResponseType>(`cards/pack?id=${id}`);
    }
}

export const APIсards = {
    getCards(cardsPackId: string, lang?: string, question?: string, min?: number, max?: number, sortCards?: string, page?: number, pageCount?: number) {
        return instance.get<APIResponseType<GetCartsResponseType>>(`cards/card/?cardAnswer=${lang}&cardQuestion=${question}&cardsPack_id=${cardsPackId}&min=${min}&max=${max}&sortCards=${sortCards}&page=${page}&pageCount=${pageCount}`);
    },

    addCard(card: AddCardModel) {
        return instance.post<APIResponseType<CardsType>>('cards/card', {card});
    },
    deleteCard(cardId: string) {
        return instance.delete(`cards/card/?id=${cardId}`);
    },
    updateCard(card: UpdateCardModel) {
        return instance.put('cards/card', {card});
    },

}

type UpdateCardModel = { id: string, question?: string, comments?: string }
type AddCardModel = {
    cardsPack_id: string,
    question?: string,
    answer?: string,
    grade?: number,
    shots?: number,
    rating?: 0,
    answerImg?: string,
    questionImg?: string
    questionVideo?: string,
    answerVideo?: string,
    type?: string
}
