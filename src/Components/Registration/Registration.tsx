import React, {useEffect, useState} from 'react';
import style from "./Registration.module.css";
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
})

type RegistrationRequestType = {
    email: string
    password: string
}

type ErrorResponseType = {
    email: string
    error: string
    in: string
}

const registrationAPI = () => {
    return {
        getTime: (time: string) => {
            return instance.get(`ping?frontTime=${time}`)
        },
        registration: (dataReg: RegistrationRequestType) => {
            return instance.post(`auth/register`, {...dataReg})
        }
    }
}

type RegistrationPropsType = {}

const Registration: React.FC<RegistrationPropsType> = () => {
    const [time, setTime] = useState<string>(Date.now().toString())
    const [ping, setPing] = useState<number>(0)
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
                console.log(res)
            })
            .catch((error:ErrorResponseType) => {
                console.log(error)
            })
    }

    return <div className={style.wrapper}>
        <h1>Registration</h1>
        <h3>Test Time Request : {time}</h3>
        <h3>Test Ping Request : {ping}</h3>
        <form>
            <div><input type="text" placeholder={'Enter email'} value={email} onChange={() => {}}/></div>
            <div><input type="text" placeholder={'Enter password'} value={password} onChange={() => {}}/></div>
            <button onClick={onClickHandler}> Submit</button>
        </form>
    </div>
};

export default Registration;