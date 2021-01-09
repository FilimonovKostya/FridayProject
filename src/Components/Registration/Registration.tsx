import React, {useEffect, useState} from 'react';
import style from "./Registration.module.css";
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials:true
})

const getTimeAPI = (time: string) => {
    return instance.get(`ping?frontTime=${time}`)
}

type RegistrationPropsType = {}

const Registration: React.FC<RegistrationPropsType> = () => {
    const [time, setTime] = useState(Date.now())
    const [ping, setPing] = useState(0)

    useEffect(() => {
        getTimeAPI(time.toString())
            .then(res => {
                console.log(res)
                setTime(time)
                setPing(res.data.ping)
            })
    }, [time])

    return <div className={style.wrapper}>
        <h1>Registration</h1>
        <h3>Test Time Request : {time}</h3>
        <h3>Test Ping Request : {ping}</h3>
    </div>
};

export default Registration;