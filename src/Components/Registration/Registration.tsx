import React from 'react';
import style from "./Registration.module.css";


type RegistrationPropsType = {}

const Registration: React.FC<RegistrationPropsType> = () => {
    return <div className={style.wrapper}>
        <h1>Registration</h1>
    </div>
};

export default Registration;