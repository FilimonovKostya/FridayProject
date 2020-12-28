import React from 'react';
import style from "./Login.module.css";


type LoginPropsType = {}

const Login: React.FC<LoginPropsType> = () => {
    return <div className={style.wrapper}>
        <h1>Login</h1>
    </div>
};

export default Login;