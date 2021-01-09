import React, {useEffect, useState} from 'react';
import style from "./Registration.module.css";
import axios from "axios";
import {Redirect} from "react-router-dom";
import {path} from "../../App";

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
})

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


const registrationAPI = () => {
    return {
        getTime: (time: string) => {
            return instance.get(`ping?frontTime=${time}`)
        },
        registration: (dataReg: RegistrationRequestType) => {
            return instance.post<RegistrationResponseType>(`auth/register`, {...dataReg})
        }
    }
}

type RegistrationPropsType = {}

const Registration: React.FC<RegistrationPropsType> = () => {
    const [time, setTime] = useState<string>(Date.now().toString())
    const [ping, setPing] = useState<number>(0)
    let [isRedirectProfile, setIsRedirectProfile] = useState<boolean>(false)
    const email = 'konstantinfilimonou@gmail.com'
    const password = 'KOSTYA1234END.'

    useEffect(() => {
        registrationAPI().getTime(time)
            .then(res => {
                setTime(time)
                setPing(res.data.ping)
            })
    }, [time])

    const onClickHandler = () => {
        registrationAPI().registration({email, password})
            .then((res) => {
                const dataAboutUser = res.data.addedUser
                if(Object.keys(dataAboutUser).length === 10){
                    console.log('Успешно зареганы')
                }
            })
            .catch((error: ErrorResponseType) => {
                if (error.response.data.in === 'createUser') {
                    console.log('Ok')
                    setIsRedirectProfile(!isRedirectProfile)
                }
            })

    }

    if (isRedirectProfile) {
        return <Redirect to={path.PROFILE}/>
    }

    return <div className={style.wrapper}>
        <h1>Registration</h1>
        <h3>Test Ping Request : {ping}</h3>
        <form>
            <div><input type="text" placeholder={'Enter email'} value={email} onChange={() => {
            }}/></div>
            <div><input type="text" placeholder={'Enter password'} value={password} onChange={() => {
            }}/></div>
            <button onClick={onClickHandler}> Submit</button>
        </form>
    </div>
};

export default Registration;