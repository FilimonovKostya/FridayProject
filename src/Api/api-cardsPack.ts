import {instance} from './api';
import {CardsPackType} from '../Redux/reducers/cardsPackReducer';

type GetCardsPackType = {
    cardPacks: CardsPackType[],
    page: number,
    pageCount: number,
    cardPacksTotalCount: number,
    minCardsCount: number,
    maxCardsCount: number,
    token: string,
    tokenDeathTime: string
}

export type CreateCardsPackType = {
    name: string // если не отправить будет таким "no Name"
    private: boolean // если не отправить будет такой false
    type: string // если не отправить будет таким "pack"
}

export type UpdateCardsPackType = {
    _id: string,
    name?:string
}

export const cardsPackAPI = {
    getCardsPack(packName?: null | string, min: number = 3, max: number = 9, page: number = 1, pageCount: number = 4) {
        return instance.get<GetCardsPackType>(`cards/pack?min=${min}&max=${max}&page=${page}&pageCount=${pageCount}`);
            // ?packName=${packName}&min=${min}&max=${max}&page=${page}&pageCount=${pageCount}
    },
    createCardsPack(cardsPack: CreateCardsPackType) {
        return instance.post('cards/pack', {cardsPack});
    },
    updateCardsPack(cardsPack: UpdateCardsPackType) {
        return instance.put('cards/pack', {cardsPack});
    },
    deleteCardsPack(id: string) {
        return instance.delete(`cards/pack?id=${id}`);
    }
}