import {instance} from "./api";
import {CartUpdateType} from "../AllComponents";
import {APIResponseType} from "./api-cards";

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