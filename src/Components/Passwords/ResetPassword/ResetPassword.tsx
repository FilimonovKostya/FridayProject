import React from 'react';
import style from "./ResetPassword.module.css";


type PasswordPropsType = {}

const ResetPassword: React.FC<PasswordPropsType> = () => {
    return <div className={style.wrapper}>
        <h1>Password</h1>
    </div>
};

export default ResetPassword;