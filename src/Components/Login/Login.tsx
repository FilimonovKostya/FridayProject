import React, {ChangeEvent, useState} from 'react';
import style from './Login.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../../Redux/store';
import {Redirect} from 'react-router-dom';
import {getAuthUserData} from '../../Redux/reducers/loginReducer';


type LoginPropsType = {}

const Login: React.FC<LoginPropsType> = () => {
    const dispatch = useDispatch()
    let isAuth = useSelector<RootStateType, boolean>(state => state.login.isAuth)

    let [email, setEmail] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let [rememberMe, setRememberMe] = useState<boolean>(false)

    let onclickHandler = () => {
        console.log(email, password, rememberMe)
        dispatch(getAuthUserData(email, password, rememberMe))
    }
    if (isAuth) {
        return <Redirect to={'./profile'}/>
    }
    return <div className={style.wrapper}>
        <h4>SIGN IN</h4>
        <input type={'email'}
               placeholder={'Enter email'}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}/>
        <input type={'password'}
               placeholder={'Password'}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}/>
        <input style={{display:'block'}}
            type={'checkbox'} onChange={(e: ChangeEvent<HTMLInputElement>) => setRememberMe(e.currentTarget.checked)}/>
        <button onClick={onclickHandler}>Submit</button>

    </div>
};

export default Login;