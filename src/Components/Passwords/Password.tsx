import React from 'react';
import style from "./Password.module.css";


type PasswordPropsType = {}

const Password: React.FC<PasswordPropsType> = () => {
    return <div className={style.wrapper}>
        <h1>Password</h1>
    </div>
};

export default Password;