import React, {ChangeEvent, useCallback, useState} from 'react';
import style from "./Registration.module.css";
import axios from "axios";
import {Redirect} from "react-router-dom";
import {path} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../Redux/store";
import {RegistrationRequestType, RegistrationResponseType, registrationTC} from "../../Redux/reducers/registrationReducer";

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
})

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

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const isRedirectProfile = useSelector<RootStateType, boolean>(state => state.registration.isRedirect)

    const onChangeHandlerEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value), [])
    const onChangeHandlerPassword = useCallback((e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value), [])

    const onClickHandler = () => (dispatch(registrationTC({email, password})))

    if (isRedirectProfile) {
        return <Redirect to={path.PROFILE}/>
    }

    return <div className={style.wrapper}>
        <h1>Registration</h1>
        <form>
            <div><input type="text" placeholder={'Email'} value={email} onChange={onChangeHandlerEmail}/></div>
            <div><input type="text" placeholder={'Password'} value={password} onChange={onChangeHandlerPassword}/></div>
            <button onClick={onClickHandler}> Submit</button>
        </form>
    </div>
};

export default Registration;