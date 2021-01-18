import {instance} from './api';

//Global response
export type APIResponseType<D = {}> = {
    data: D
    statusText: string
}

//Response types
export type GetCartsPackResponseType = {
    cartArray: CartsType[]
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number // количество элементов на странице
}

export type CartsType = {
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

type CartsPackType = {
    name: string // если не отправить будет таким "no Name"
    path: string // если не отправить будет такой "/def"
    grade: number // не обязателен
    shots: number // не обязателен
    rating: number // не обязателен
    deckCover: string // не обязателен
    private: boolean // если не отправить будет такой false
    type: string // если не отправить будет таким "pack"
}


type GetCartsResponseType = {
    carts: CartType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string //id юзера создавшего данную колоду
}

type CartType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
}


export const cartAPI = {
    //cart pack
    getCarts() {
        return instance.get<APIResponseType<GetCartsPackResponseType>>('cards/pack');
    },

    createCartsPack(cartPack: CartsPackType) {
        return instance.post<APIResponseType>('cards/pack', {cartPack});
    },
//todo:create beautiful name for this request!
    xxxCartsPack(id: string, name?: string) {
        return instance.put<APIResponseType>('cards/pack', {
            _id: id,
            name //"new name" // не обязательно
        });
    },

    deleteCartsPack(id: string) {
        return instance.delete<APIResponseType>(`cards/pack?id=${id}`);
    },

    //cart
    getCart() {
        return instance.get<APIResponseType<GetCartsResponseType>>('cards/card');
    },


}