//Response type
import {instance} from "./api";

export type APIResponseType<D = {}> = {
    data: D
    statusText: string
}
export type PasswordRecoveryType = {
    answer: boolean
    html: boolean
    info: string
    success: boolean
}
export const recoveryAPI = {
    recover(email: string) {
        return instance.post<APIResponseType<PasswordRecoveryType>>('/auth/forgot', {
            email: email,
            from: "test-front-admin <serega.kuharionok@yandex.ru>",
            message: `<div style="background-color: #00ff00; padding: 15px">
                            password recovery link: 
                     <a href='http://localhost:3000/FridayProject#/newPassword/$token$'>Click</a>
                     </div>`
        });
    },
}