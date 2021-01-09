import React, {useState} from 'react';

import style from "./PasswordRecovery.module.css";
import {NavLink} from 'react-router-dom';
import {path} from "../../../App";
import {useDispatch, useSelector} from "react-redux";
import {sendRecoveryEmail} from "../../../Redux/reducers/passwordRecovery-reducer";
import {RootStateType} from "../../../Redux/store";

type PasswordRecoveryPropsType = {}

const PasswordRecovery: React.FC<PasswordRecoveryPropsType> = () => {

    const [value, setValue] = useState<string>('')

    const status = useSelector<RootStateType, string>((state) => state.passwordRecovery.status)

    const dispatch = useDispatch()

    const sendEmail = () => {
        debugger
        dispatch(sendRecoveryEmail(value))
    }

    return <div className={style.wrapper}>
        <h1>PasswordRecovery</h1>
        {
            status && <span>{status}</span>
        }
        <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
        <button onClick={sendEmail}>Send</button>
        <NavLink to={path.LOGIN}>Login</NavLink>
    </div>
};

export default PasswordRecovery;