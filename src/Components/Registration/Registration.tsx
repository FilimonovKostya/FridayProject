import React from 'react';
import style from "./Registration.module.css";
import axios from "axios";
import {Redirect} from "react-router-dom";
import {path} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../Redux/store";
import {registrationTC} from "../../Redux/reducers/registrationReducer";

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
})

//Types
type RegistrationRequestType = {
    email: string
    password: string
}
export type RegistrationResponseType = {
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
export type ErrorResponseType = {
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
export const registrationAPI = () => {
    return {
        registration: (dataReg: RegistrationRequestType) => {
            return instance.post<RegistrationResponseType>(`auth/register`, {...dataReg})
        }
    }
}

const Registration: React.FC<RegistrationPropsType> = () => {
    const dispatch = useDispatch()
    const email = useSelector<RootStateType, string>(state => state.registration.email)
    const password = useSelector<RootStateType, string>(state => state.registration.password)
    const isRedirectProfile = useSelector<RootStateType, boolean>(state => state.registration.isRedirect)


    const onClickHandler = () => {
        dispatch(registrationTC({email, password}))
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