import React, {useState} from 'react';
import style from "./Registration.module.css";
import axios from "axios";
import {Redirect} from "react-router-dom";
import {path} from "../../App";

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
})

//Types
type RegistrationRequestType = {
    email: string
    password: string
}
type RegistrationResponseType = {
    addedUser: {
        created: string
        email: string
        isAdmin: boolean
        name: string
        publicCardPacksCount: number
        rememberMe: boolean
        updated: string
        verified: boolean
        __v: number
        _id: string
    }
}
type ErrorResponseType = {
    response: {
        data: {
            email: string
            error: string
            in: string
        }
    }
}
type RegistrationPropsType = {}

//API
const registrationAPI = () => {
    return {
        registration: (dataReg: RegistrationRequestType) => {
            return instance.post<RegistrationResponseType>(`auth/register`, {...dataReg})
        }
    }
}

const Registration: React.FC<RegistrationPropsType> = () => {
    let [isRedirectProfile, setIsRedirectProfile] = useState<boolean>(false)
    const email = 'konstantinfilimonou@gmail.com' // Мои данные для теста
    const password = 'KOSTYA1234END.'// Мои данные для теста


    const onClickHandler = () => {
        registrationAPI().registration({email, password})
            .then((res) => {
                const dataAboutUser = res.data.addedUser
                // Если не происходит редирект после того как зарегались проблема ниже . Этот код считает длинну объекта ,всего там 10 ключей. Смотрел
                if (Object.keys(dataAboutUser).length === 10) {
                    console.log('Успешно зареганы')
                    setIsRedirectProfile(!isRedirectProfile)
                }
            })
            .catch((error: ErrorResponseType) => {
                if (error.response.data.in === 'createUser') {
                    alert('Уже зареганы')
                }
            })
    }

    if (isRedirectProfile) {
        return <Redirect to={path.PROFILE}/>
    }

    return <div className={style.wrapper}>
        <h1>Registration</h1>
        <form>
            <div><input type="text" placeholder={'Enter email ---konstantinfilimonou@gmail.com'}/></div>
            <div><input type="text" placeholder={'Enter password ---KOSTYA1234END'}/></div>
            <button onClick={onClickHandler}> Submit</button>
        </form>
    </div>
};

export default Registration;