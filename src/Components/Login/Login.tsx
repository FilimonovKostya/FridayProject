import React, {ChangeEvent, useState} from 'react';
import style from './Login.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../../Redux/store';
import {Redirect} from 'react-router-dom';
import {getAuthUserData} from '../../Redux/reducers/loginReducer';
import Input from '../SuperComponents/Input/Input';
import Checkbox from '../SuperComponents/CheckBox/Checkbox';
import Button from '../SuperComponents/Button/Button';


type LoginPropsType = {}

const Login: React.FC<LoginPropsType> = () => {
    const dispatch = useDispatch()
    let isAuth = useSelector<RootStateType, boolean>(state => state.login.isAuth)

    let [email, setEmail] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let [rememberMe, setRememberMe] = useState<boolean>(false)


    let onclickEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    let onclickPassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    let onclickCheckbox = (e: ChangeEvent<HTMLInputElement>) => setRememberMe(e.currentTarget.checked)

    let onclickHandler = () => {
        console.log(email, password, rememberMe)
        dispatch(getAuthUserData(email, password, rememberMe))
    }
    if (isAuth) {
        return <Redirect to={'./profile'}/>
    }
    return <div className={style.wrapper}>
        <h1>SIGN IN</h1>
        <form className={style.loginForm}>
            <Input type={'email'}
                   placeholder={'Enter email'}
                   onChange={onclickEmail}/>
            <Input type={'password'}
                   placeholder={'Password'}
                   onChange={onclickPassword}/>
            <Checkbox title={'Remember me'}
                      onChange={onclickCheckbox}/>
            <Button onClick={onclickHandler}> SIGN IN </Button>
        </form>


    </div>
};

export default Login;